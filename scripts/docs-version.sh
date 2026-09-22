#!/usr/bin/env bash
#
# Manage versioned copies of the Open mSupply documentation (content/docs).
#
# The default version lives in content/docs and is served at /docs/. Other
# versions live in content/docs/<slug> and are served at /docs/<slug>/. Every
# version is declared in config.toml under [[extra.docs_versions]].
#
# Usage:
#   scripts/docs-version.sh snapshot <slug>
#       Copy the default docs (content/docs) into content/docs/<slug>, rewriting
#       absolute /docs/... links and image paths to /docs/<slug>/... so the copy
#       is self-contained. Use this to start work on the next release, or to
#       freeze the docs for a release that is about to be superseded.
#
#   scripts/docs-version.sh promote <slug> <old-slug>
#       Make content/docs/<slug> the default version (served at /docs/) and move
#       the current default into content/docs/<old-slug>. Links in both trees are
#       rewritten. Run this on release day, then update config.toml.
#
# Both commands print the config.toml changes you need to make afterwards.
# Run from anywhere; paths are resolved relative to the repository root.

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
docs_dir="$repo_root/content/docs"
config="$repo_root/config.toml"

usage() {
  sed -n '2,/^$/p' "$0" | sed 's/^# \{0,1\}//'
  exit 1
}

die() {
  echo "error: $*" >&2
  exit 1
}

check_slug() {
  [[ "$1" =~ ^[a-z0-9][a-z0-9._-]*$ ]] || die "slug '$1' must be lowercase letters, digits, '.', '_' or '-'"
}

# Slugs of versions nested inside content/docs, from config.toml (section = "docs/<slug>").
configured_slugs() {
  grep -E '^[[:space:]]*section[[:space:]]*=[[:space:]]*"docs/[^"]+"' "$config" \
    | sed -E 's/.*"docs\/([^"]+)".*/\1/' || true
}

# Rewrite absolute docs links in every markdown file under $1:
#   $2 = prefix to replace, e.g. "/docs/"      (only when not already followed by a version slug)
#   $3 = replacement,       e.g. "/docs/v3/"
# Only link-like occurrences are touched: those preceded by "(", '"' or "'".
rewrite_links() {
  local dir="$1" from="$2" to="$3"
  local guard
  guard="$(printf '%s\n' "${all_slugs[@]}" | paste -sd'|' -)"
  local from_re to_esc
  from_re="$(printf '%s' "$from" | sed 's/[][\/.^$*+?(){}|]/\\&/g')"
  to_esc="$(printf '%s' "$to" | sed 's/[\/&]/\\&/g')"
  find "$dir" -type f -name '*.md' -print0 \
    | xargs -0 perl -pi -e "s/([(\"'])${from_re}(?!(?:${guard})\/)/\$1${to_esc}/g"
}

set_index_weight() {
  local dir="$1" weight="$2"
  find "$dir" -maxdepth 1 -name '_index*.md' -print0 \
    | xargs -0 perl -pi -e "s/^weight = .*/weight = $weight/"
}

count_links() {
  grep -rlE "[(\"']$1" "$2" --include='*.md' 2>/dev/null | wc -l | tr -d ' '
}

snapshot() {
  local slug="$1"
  check_slug "$slug"
  local dest="$docs_dir/$slug"
  [[ -e "$dest" ]] && die "$dest already exists"

  all_slugs=()
  while IFS= read -r s; do [[ -n "$s" ]] && all_slugs+=("$s"); done < <({ configured_slugs; echo "$slug"; } | sort -u)

  echo "Copying content/docs -> content/docs/$slug (excluding other versions: ${all_slugs[*]})"
  local excludes=()
  for s in "${all_slugs[@]}"; do excludes+=(--exclude "/$s/"); done
  mkdir -p "$dest"
  rsync -a "${excludes[@]}" --exclude '.DS_Store' "$docs_dir/" "$dest/"

  echo "Rewriting /docs/ links to /docs/$slug/ in $(count_links '/docs/' "$dest") files"
  rewrite_links "$dest" "/docs/" "/docs/$slug/"
  # Sort the nested version after the real subsections in the parent's ordering
  set_index_weight "$dest" 999

  cat <<EOF

Done. content/docs/$slug now holds a copy of the docs, served at /docs/$slug/.

Next, declare the version in config.toml (see the existing [[extra.docs_versions]] entries):

[[extra.docs_versions]]
label = "vX.Y"
section = "docs/$slug"
badge = "in development"   # or "previous release", etc.
notice = "..."             # optional banner shown at the top of every page

Then run 'zola serve' and check /docs/$slug/.
EOF
}

promote() {
  local slug="$1" old_slug="$2"
  check_slug "$slug"
  check_slug "$old_slug"
  [[ "$slug" == "$old_slug" ]] && die "slug and old-slug must differ"
  local src="$docs_dir/$slug"
  local old="$docs_dir/$old_slug"
  [[ -d "$src" ]] || die "$src does not exist"
  [[ -e "$old" ]] && die "$old already exists"

  all_slugs=()
  while IFS= read -r s; do [[ -n "$s" ]] && all_slugs+=("$s"); done < <({ configured_slugs; echo "$slug"; echo "$old_slug"; } | sort -u)

  echo "Moving the current default docs -> content/docs/$old_slug"
  mkdir -p "$old"
  local entry name
  for entry in "$docs_dir"/* "$docs_dir"/.[!.]*; do
    [[ -e "$entry" ]] || continue
    name="$(basename "$entry")"
    [[ "$name" == "$old_slug" ]] && continue
    # leave other versions where they are
    local is_version=false
    for s in "${all_slugs[@]}"; do [[ "$name" == "$s" ]] && is_version=true; done
    $is_version && continue
    mv "$entry" "$old/"
  done
  echo "Rewriting /docs/ links to /docs/$old_slug/ in $(count_links '/docs/' "$old") files"
  rewrite_links "$old" "/docs/" "/docs/$old_slug/"
  set_index_weight "$old" 999

  echo "Moving content/docs/$slug -> content/docs (new default)"
  for entry in "$src"/* "$src"/.[!.]*; do
    [[ -e "$entry" ]] || continue
    mv "$entry" "$docs_dir/"
  done
  rmdir "$src"
  echo "Rewriting /docs/$slug/ links to /docs/ in $(count_links "/docs/$slug/" "$docs_dir") files"
  # A plain substitution here: nothing under the new default should keep pointing at /docs/$slug/
  find "$docs_dir" -type f -name '*.md' -not -path "$old/*" -print0 \
    | xargs -0 perl -pi -e "s/([(\"'])\/docs\/\Q$slug\E\//\$1\/docs\//g"
  set_index_weight "$docs_dir" 1

  cat <<EOF

Done.
  content/docs            is now the former content/docs/$slug  (served at /docs/)
  content/docs/$old_slug  is the previous default              (served at /docs/$old_slug/)

Now update config.toml:
  - the entry that had section = "docs/$slug"  ->  section = "docs", badge = "current", remove or change its notice
  - the entry that had section = "docs"        ->  section = "docs/$old_slug", badge = "previous release"
Check the home page link in content/_index*.md still points where you want, then 'zola serve'.
EOF
}

[[ $# -ge 1 ]] || usage
cmd="$1"; shift
case "$cmd" in
  snapshot) [[ $# -eq 1 ]] || usage; snapshot "$1" ;;
  promote)  [[ $# -eq 2 ]] || usage; promote "$1" "$2" ;;
  *) usage ;;
esac
