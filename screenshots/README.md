# Screenshot automation

This directory holds the inventory of every screenshot used in the Open mSupply
documentation, matched to the application screen it came from and the region of
that screen it shows. It is the input for a future tool that re-captures the
screenshots automatically against a running Open mSupply instance.

| File | What it is |
|---|---|
| [`manifest.yaml`](manifest.yaml) | Machine-readable catalogue — one entry per image file. |
| [`catalogue.md`](catalogue.md) | The same data grouped by application route, for reading. |

## What was catalogued

764 image references across the 59 English pages under `content/docs`, resolving
to **734 distinct image files**. The Spanish, French and Portuguese pages reuse
the same files, so re-capturing an image updates every language at once — except
where a page bundle has an `images-en/` directory, which is flagged per entry via
the `languages` field.

| | Count |
|---|---|
| Not an Open mSupply web screen at all (`capture: manual`) | 51 |
| Everything else (`capture: auto`) | 683 |
| Carry hand-drawn annotations | 138 |
| Referenced but missing from the repo | 11 |

The 51 manual ones are photos, diagrams, inline icon assets, OS dialogs, legacy
mSupply desktop windows, mSupply Dashboard panels and Android app screens. They
are catalogued so the tool knows to skip them, not because it can produce them.

> **`capture: auto` does not mean "reproducible from the demo server today".**
> The demo now serves a different client — see the next section.

## The demo server runs a different frontend

Verified on the live demo, 2026-09-10. `release-demo-open.msupply.org` reports
version **2.21.01** and serves a client with **zero MUI classes in the DOM** —
CSS modules, native `<dialog>` elements, the popover API. Every committed
screenshot in this repo was taken with the MUI-based client. Old-style URLs such
as `/distribution/outbound-shipment` no longer resolve; the scheme is now
`/{storeId}/<route>`.

So re-capturing against this server does not refresh the existing screenshots —
it replaces them with pictures of a visually different application. That is a
documentation decision, not an automation one, and it has to be made before the
tool is worth building:

- **If the docs are moving to the new UI**, the catalogue is still the right
  input: same route slugs, same region vocabulary, and the new client has far
  better `data-testid` coverage than the old one (see below). But the surrounding
  prose needs rewriting alongside, because controls have moved.
- **If the docs must keep documenting the old UI**, the capture target has to be
  an instance running that client, not this demo.

Everything below was verified against the new client.

## Route scheme

Every route is prefixed with the store id: `/{storeId}/dispensary/prescription`.
Store ids seen on the demo:

| Store | Id | Dispensary mode |
|---|---|---|
| Bedrock District Store | `9721DA7B86CDDB4F96CECDF0E1D5D4E5` | no |
| Bedrock Creek Health Centre | `A87768605209F64BBC4CD0B539F8B63D` | yes |

Every route slug in the catalogue was probed and matches — `dispensary/prescription`
and `dispensary/encounter` are singular, `inventory/stock-movement` is singular,
exactly as recorded.

### What the demo cannot reach

| Route | Why |
|---|---|
| `manage/*`, `programs/immunisations`, `replenishment/purchase-order`, `replenishment/inbound-shipment/external` | **central server only** — all verified present on `release-demo-open.msupply.org:8888` (store `3C134746F7D91E439223AC244BE7F633`); redirect to Dashboard on a remote site |
| `catalogue/assets/log-reasons` | Not found on remote **or** central, and the Assets page has no "Manage log reasons" button — the feature appears to have no route in the new client. Its 5 shots may document something removed. |
| `replenishment/inbound-shipment-external` | wrong slug in the catalogue — the real route is `replenishment/inbound-shipment/external` |
| `dispensary/*` | need a dispensary-mode store (Bedrock Creek Health Centre) |
| `dispensary/vaccine-card`, `dispensary/contact-trace` | need a record id; reached from a patient |
| `sync` | not a route in this client — sync is a footer widget (`[data-testid="footer-sync"]`) |

That is roughly 70 catalogued shots that need a central server instance in
addition to the demo.

## Manifest schema

```yaml
- id: os-created                              # stable slug, derived from the filename
  file: content/docs/.../images/os_created.png
  exists: true
  width: 2412                                 # current committed pixel size
  height: 1424
  route: /distribution/outbound-shipment/{id} # the app screen it was taken from
  region: full                                # which part of that screen (see below)
  annotated: false                            # has arrows/circles drawn on it
  description: New outbound shipment, empty
  capture: auto                               # auto | manual
  languages: [en, es, fr, pt]                 # which language pages reference this file
  used_by:                                    # every place it is embedded
    - page: content/docs/.../index.md
      line: 214
      alt: Outbound shipment created
      heading: Creating an Outbound Shipment
```

`route` is the client route from `AppRoute` in
`open-msupply/client/packages/config/src/routes.ts`. A `{id}` segment means the
capture step has to create or pick a record first. Four pseudo-routes are used:

- `*` — shared chrome (a footer control, a pagination widget, a table menu). Any
  convenient route will do.
- `-` — not an Open mSupply screen at all.
- `dashboard` — mSupply Dashboard, a separate product.
- `android` — the Open mSupply Android app.

## Region vocabulary

Every screenshot is a crop of the app shell. These are the crops that actually
occur in the docs, most common first:

| Region | Count | What it covers |
|---|---|---|
| `modal` | 200 | A dialog box, usually with its dimmed backdrop. |
| `content` | 81 | Main content pane: breadcrumb bar down to and including the footer. Nav drawer excluded. |
| `full` | 79 | The whole window: drawer (or collapsed icon rail) + app bar + content + footer. |
| `content-part` | 75 | A block inside the content pane — a card, a tab body, a banner, a group of rows. |
| `modal-part` | 50 | One section inside a dialog. |
| `control` | 49 | Close-up of one button, field or small control. |
| `external` | 39 | Not the web client (see above). |
| `nav` | 32 | The navigation drawer, or a vertical slice of it. |
| `content-top` | 27 | Top band of the content pane: breadcrumb, toolbar buttons, filter bar. |
| `footer` | 27 | The fixed footer/status bar, including status crumbs and the Confirm split-button. |
| `menu` | 23 | An open dropdown, popover or split-button menu. |
| `detail-header` | 14 | The detail-view header block above the tabs. |
| `icon` | 12 | An icon asset used inline in prose, not a screen capture. |
| `toast` | 9 | A snackbar or notification banner. |
| `panel` | 8 | The right-hand detail ("More") panel. |
| `nav-part` | 4 | A single nav item or badge. |
| `panel-part` | 4 | One section of the right-hand panel. |
| `tab` | 1 | The tab strip of a detail view. |

## Region → selector, verified against the live app

Walked on the demo at 1440x900 on 2026-09-10. The new client is much friendlier
to this than the old one: the shell already carries `data-testid` on the drawer,
nav items, app footer, detail panel and every panel section, and tables expose
`header-*`, `cell-*`, `table-row`, `select-row-checkbox`. **No new test ids are
needed for whole-region crops.** CSS-module class names carry a build hash, so
prefix-match them (`[class^="_header_"]`).

| Region | Selector | Verified |
|---|---|---|
| `full` | *(none — `page.screenshot()` at a fixed viewport)* | yes |
| `content` | `div[class^="_main_"]:has(> div[class^="_content_"])` | yes |
| `content-top` | `div[class^="_page_"] > div[class^="_main_"] > header` — breadcrumb + action buttons, **not** the filter bar | yes |
| `filter-bar` | `div[class^="_toolbar_"]:has([data-testid="filters-menu"])` — search/filter bar above a table | yes |
| `detail-header` | `… > header div[class^="_toolbar_"]` — field row, **detail views only** | yes |
| `tab` | `div[class^="_list_"]:has(> [data-testid^="tab-"])` | yes |
| `footer` (detail) | `div[class^="_footer_"]:has([data-testid="status-crumbs"])` — hold, status crumbs, confirm | yes |
| `footer` (app) | `[data-testid="app-footer"]` — store selector, user menu, sync | yes |
| `nav` | `[data-testid="drawer"]` | yes |
| `nav-part` | `[data-testid^="nav-"]` | yes |
| `panel` | `[data-testid="detail-panel"]` (open with `[data-testid="open-detail-panel-button"]`) | yes |
| `panel-part` | `[data-testid^="panel-section-"]` | yes |
| `modal` | `dialog[open]` — **all** modals are native `<dialog>`; buttons `[data-testid="dialog-button-ok"]` / `-cancel` | yes |
| `menu` | `[role="menu"]` for dropdowns, `[popover]:popover-open` for filter/colour/nav-flyout panels | yes |
| `toast` | — no toast container exists in the DOM until one fires; not observed during the walk | **no** |
| `content-part` / `modal-part` / `control` | per-shot locator (174 shots) | n/a |
| `icon` / `external` | skip | yes |

Two corrections to the vocabulary that the walk turned up:

- **`footer` is two different bars.** The catalogue lumps the detail status-crumb
  bar together with the purple app footer. They are separate elements and need
  separate selectors — the `region_notes` block in `manifest.yaml` says which
  descriptions belong to which.
- **There is no app bar.** The old client had a breadcrumb app bar above the
  content; in the new client the breadcrumb lives inside each page's own
  `<header>`, together with the action buttons, the detail toolbar and the tab
  strip. `content-top` therefore maps to one element rather than a union.

Existing tooling to build on:

- `open-msupply-screenshot` — a working Selenium screenshotter (config-driven,
  already loops over `en`/`fr`/`es`/`ru` and dismisses toasts). Its `config.json`
  targets old-style URLs, so it needs the `/{storeId}/` prefix, but the shape is
  right and this catalogue is exactly the config it is missing.
- `open-msupply/client/playwright` — config, `auth.setup.ts`, `helpers/login.ts`.
  `BASE_URL` is already configurable.

## Capture size

There is no house standard today. Across the 73 `full` screenshots the widths
run from 370px to 3840px, with a median of 1501px; 24 of them are retina @2x
captures (>2000px wide) and the rest are @1x. Aspect ratios vary from 1.2 to
3.8, so the browser window was a different shape almost every time.

Worth fixing before automating: a single viewport (1440x900 is close to the most
common shape) at `deviceScaleFactor: 2`, so every capture lands at 2880x1800 and
crops scale predictably.

**1440px is a floor, not a preference.** The new client is responsive — below
roughly 1000px it collapses the drawer to a hamburger and the toolbar buttons to
icons, which matches none of the catalogued shots.

## Before the tool can run

1. **Decide which client the docs document.** The demo serves the new frontend;
   every committed screenshot shows the old one. Nothing else on this list
   matters until that is settled.
2. **Demo data does not match the current screenshots.** Names, batches, dates
   and item lists in the committed images come from various older databases.
   Re-capturing everything at once would change the data shown in ~680 images, so
   the text around them needs checking. Route by route is more manageable than
   one pass.
3. **138 images are annotated** with orange/red arrows, circles and callout text.
   Either the annotation has to be re-applied programmatically (position given
   per shot) or those images stay manual. Worth deciding per region: `nav` arrows
   are formulaic and scriptable; the numbered callout diagrams are not.
4. **A central server instance**, in addition to the demo, for the ~70 shots
   under `manage/*`, `programs/*` and `catalogue/assets/log-reasons`. And a store
   with the procurement preference on for purchase orders and external inbound
   shipments.
5. **Login.** The demo credentials are not stored here. The capture job should
   read them from the environment, the same way `auth.setup.ts` does.
6. **Confirm the toast selector** — the one region the walk could not verify,
   because no toast container exists in the DOM until one fires.

## Data issues found while cataloguing

**11 broken image references** — the markdown points at a file that is not in the
repo, so these render as broken images on the live docs site:

| Page | Missing file |
|---|---|
| `inventory/inventory_adjustments` | `images/ia_adjust_stock_button.png` |
| `inventory/inventory_adjustments` | `images/ia_adjustment_dialog.png` |
| `inventory/inventory_adjustments` | `images/ia_backdated_dialog.png` |
| `inventory/inventory_adjustments` | `images/ia_historical_stock.png` |
| `manage/demographics` | `vaccine_module.png` |
| `replenishment/inbound-shipments/external-inbound-shipments` | `images/eis_select_po.png` |
| `replenishment/inbound-shipments/external-inbound-shipments` | `images/eis_add_options.png` |
| `replenishment/inbound-shipments/external-inbound-shipments` | `images/eis_financial_tab.png` |
| `replenishment/inbound-shipments/external-inbound-shipments` | `images/eis_currency_tab.png` |
| `replenishment/inbound-shipments/external-inbound-shipments` | `images/eis_delivery_tab.png` |
| `replenishment/supplier returns` | `images/or_confirmpicked.png` |

**97 orphaned image files** are committed under `content/docs` but referenced
from no page in any language.

## Regenerating

The catalogue was produced by parsing both markdown `![]()` and HTML `<img>`
references (10 pages use `<img>` tags, mostly for dark/light theme pairs), then
classifying each image visually. Re-running the parse is mechanical; the
`route`, `region` and `description` fields are human/visual judgements recorded
here so they do not have to be redone.
