# Documentation Screenshot Tool

Automatically captures screenshots of [Open mSupply](https://release-demo-open.msupply.org/)
pages and saves them into the `content/` tree where the docs reference them.

## Install

```sh
cd screenshots
yarn install
```

Requires a local Chrome/Chromium that Selenium can drive (note that Chrome for Testing works).

## Credentials

Login credentials live in a gitignored `.env` file next to this README — never in `config.json`.

```sh
cp .env.example .env
# edit .env and set MSUPPLY_USERNAME / MSUPPLY_PASSWORD
```

Values exported in your shell take precedence over the `.env` file. Optional `MSUPPLY_BASE_URL`
overrides `baseUrl` in `config.json` (useful for pointing at a staging or local instance).

## Run

Capture every screenshot listed in `config.json`:

```sh
yarn shoot
```

Capture a specific subset by prefix of its `group/subgroup/filename` id:

```sh
yarn shoot:one distribution/outbound-shipments/export       # just that one screenshot
yarn shoot:one distribution/outbound-shipments              # every entry in that subgroup
yarn shoot:one distribution                                 # every subgroup under distribution
```

Pass an unknown id and the tool prints the full list of available ids.

## Configuration

`config.json` controls the tool. Top-level fields:

| Field         | Description                                                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `baseUrl`     | Site to screenshot (defaults to the release demo).                                                                                                        |
| `login`       | `url` of the login form and optional `selectors` (CSS fallback lists for `username`, `password`, `submit`). Credentials come from `.env`, not here.       |
| `languages`   | Array of language codes to capture, e.g. `["en"]` or `["en","fr","es","ru"]`. When more than one is listed, files are suffixed `.en.png`, `.fr.png`, etc. |
| `viewport`    | Browser window `width` and `height` in pixels.                                                                                                            |
| `outputRoot`  | Base directory for saved screenshots, relative to `screenshots/`. Defaults to `../content`.                                                               |
| `groups`      | Two-level map: `group → subgroup → { outputPath?, screenshots[] }`. The group/subgroup pair names the doc section and is used to derive the output path and a unique id for `shoot:one`. |

### Groups

Screenshots are organised into two levels — typically a top-level docs area (e.g. `distribution`)
and a page or feature within it (e.g. `outbound-shipments`). Each screenshot's unique id is
`group/subgroup/filename`, so filenames don't need to be unique across the whole config.

By default each subgroup writes to `{outputRoot}/{group}/{subgroup}/images/`. If the actual
directory name differs (e.g. contains a space), set `outputPath` on the subgroup to override.

```json
{
  "groups": {
    "distribution": {
      "outbound-shipments": {
        "screenshots": [
          { "filename": "export", "url": "/distribution/outbound-shipment?...", "crop": { ... } },
          { "filename": "outbound-shipment-list-view", "url": "...", "crop": { ... } }
        ]
      }
    },
    "dashboard": {
      "dashboard sections": {
        "outputPath": "dashboard/dashboard sections/images",
        "screenshots": [
          { "filename": "dashboard-overview", "url": "/dashboard" }
        ]
      }
    }
  }
}
```

### Screenshot entry

```json
{
  "filename": "outbound-shipment-list-view",
  "url": "/distribution/outbound-shipment?sort=invoiceNumber&dir=desc",
  "waitMs": 800,
  "crop": { "x": 0, "y": 10, "width": 100, "height": 80 },
  "spotlight": { "x": 5, "y": 20, "width": 40, "height": 25 },
  "spotlightOptions": {
    "dimOpacity": 0.55,
    "borderColor": "#ffcc00",
    "borderWidth": 4
  }
}
```

- `filename` — output file name (without `.png`). Must be unique within its subgroup.
- `url` — path appended to `baseUrl`.
- `waitMs` — optional extra wait after navigation for the page to settle.
- `crop` — region of the viewport to keep, expressed as **percentages** of the viewport.
  `x`/`y` are the top-left corner, `width`/`height` are the size. Omit to keep the full frame.
- `spotlight` — optional. Draws a highlight rectangle over the cropped image,
  dimming everything outside it. Coordinates are **percentages of the cropped image**,
  not the original viewport.
- `spotlightOptions` — optional visual tuning for the spotlight overlay.
