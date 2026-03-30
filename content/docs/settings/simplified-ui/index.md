+++
title = "Simplified tablet UI"
description = "Using the simplified interface for tablet devices"
date = 2026-03-30
updated = 2026-03-30
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The simplified tablet user interface (UI) provides a streamlined interface designed for use on tablet devices at lower-level or last mile facilities. It reduces the number of columns and elements shown on screen, making it easier to interact with the application using touch.

When enabled, the simplified UI:

- Removes columns that are not essential for day-to-day operations at lower-level facilities
- Increases the touch-friendliness of the interface
- Replaces multi-step status buttons with single-action buttons (e.g. `Finalise` or `Verify`)
- Collapses the left navigation by default to maximise screen space

<div class="note">
The simplified UI does not remove any essential functionality. All core workflows for ordering, receiving and distributing stock remain available.
</div>

## Enabling the simplified tablet UI

The simplified UI is enabled as a store preference. To enable it:

1. On the central server, go to the `Settings` section in the lower part of the navigation panel
2. Navigate to the store preferences for the store you wish to configure (see [Stores](/docs/manage/facilities/) for details)
3. Enable the **Use simplified mobile UI** preference

additionally:

4. The `pack to one` store preference needs to be enabled (see the mSupply [virtual stores configuration](https://docs.msupply.org.nz/other_stuff:virtual_stores?s%5B%5D=pack&s%5B%5D=one#preferences_tab))
5. You will need to be using a tablet or other device with a small screen size

Once enabled, users accessing that store will see the simplified interface.

<div class="tip">
This is a per-store setting, so you can enable it for specific facilities (e.g. health centres using tablets) while keeping the full desktop interface for warehouse-level stores.
</div>

## What Changes in the Simplified UI

The sections below describe the differences between the desktop and simplified tablet views for each area of the application.

### Internal Orders

#### Internal Order List

The list view shows a reduced set of columns:

| Column                | Desktop | Tablet |
| :-------------------- | :-----: | :----: |
| **Select (checkbox)** |    ✓    |   ✓    |
| **Supplier name**     |    ✓    |   ✓    |
| **Number**            |    ✓    |   ✓    |
| **Number of items**   |         |   ✓    |
| **Created**           |    ✓    |   ✓    |
| **Program**           |    ✓    |        |
| **Order type**        |    ✓    |        |
| **Period**            |    ✓    |        |
| **Status**            |    ✓    |   ✓    |
| **Comment**           |    ✓    |        |

On the tablet, the **Export** button and **Filters** (by name or status) are not shown. The **New order** button is available on both views.

#### Creating / Editing an Internal Order

When creating or editing an internal order, the following columns are available:

| Column                 | Desktop | Tablet |
| :--------------------- | :-----: | :----: |
| **Select (checkbox)**  |    ✓    |   ✓    |
| **Code**               |    ✓    |   ✓    |
| **Name**               |    ✓    |   ✓    |
| **Unit**               |    ✓    |        |
| **Default pack size**  |    ✓    |        |
| **Stock on hand**      |    ✓    |   ✓    |
| **AMC**                |    ✓    |   ✓    |
| **Target stock**       |    ✓    |        |
| **Suggested quantity** |    ✓    |   ✓    |
| **Requested**          |    ✓    |   ✓    |

Key feature differences for the detail view:

| Feature                                      | Desktop | Tablet |
| :------------------------------------------- | :-----: | :----: |
| **Add item**                                 |    ✓    |   ✓    |
| **Add from master list**                     |    ✓    |   ✓    |
| **Use suggested quantities**                 |    ✓    |   ✓    |
| **Create automatic order**                   |         |   ✓    |
| **Print**                                    |    ✓    |   ✓    |
| **Supplier name**                            |    ✓    |   ✓    |
| **Reference**                                |    ✓    |   ✓    |
| **Hide stock over minimum**                  |    ✓    |   ✓    |
| **Filter items**                             |    ✓    |   ✓    |
| **Status change** (Confirm sent / finalised) |    ✓    |        |
| **Finalise button**                          |         |   ✓    |
| **More info panel**                          |    ✓    |   ✓    |

On the tablet, the status change dropdown is replaced with a single **Finalise** button, making it easier to complete orders with a single tap.

The **More info panel** is available on both views and includes: Reorder threshold, Target MOS, Entered by, Created date, Colour, Related documents, Comment, and Delete (for draft orders only).

---

### Inbound Shipments

#### Inbound Shipment List

| Column                | Desktop | Tablet |
| :-------------------- | :-----: | :----: |
| **Select (checkbox)** |    ✓    |   ✓    |
| **Name**              |    ✓    |        |
| **Status**            |    ✓    |   ✓    |
| **Invoice number**    |    ✓    |   ✓    |
| **Created**           |    ✓    |   ✓    |
| **Delivered**         |    ✓    |        |
| **Comment**           |    ✓    |   ✓    |
| **Reference**         |    ✓    |        |
| **Total**             |    ✓    |        |

On the tablet, a **Search** field is available instead of the desktop filter controls. The **New shipment** button is available on both views.

#### Creating / Editing an Inbound Shipment

| Column                | Desktop | Tablet |
| :-------------------- | :-----: | :----: |
| **Select (checkbox)** |    ✓    |   ✓    |
| **Code**              |    ✓    |   ✓    |
| **Name**              |    ✓    |   ✓    |
| **Batch**             |    ✓    |   ✓    |
| **Expiry**            |    ✓    |   ✓    |
| **Location**          |    ✓    |        |
| **Unit**              |    ✓    |        |
| **Pack size**         |    ✓    |        |
| **Pack quantity**     |    ✓    |   ✓    |
| **Unit quantity**     |    ✓    |        |
| **Cost per unit**     |    ✓    |        |
| **Total**             |    ✓    |        |

Key feature differences:

| Feature                                                     | Desktop | Tablet |
| :---------------------------------------------------------- | :-----: | :----: |
| **Add item**                                                |    ✓    |   ✓    |
| **Print**                                                   |    ✓    |   ✓    |
| **Supplier**                                                |    ✓    |   ✓    |
| **Reference**                                               |    ✓    |   ✓    |
| **Group by item**                                           |    ✓    |        |
| **Status change** (picked / shipped / delivered / verified) |    ✓    |        |
| **Verify button**                                           |         |   ✓    |

On the tablet, the multi-step status change is replaced with a single **Verify** button.

The **More info panel** is available on both views and includes: Entered by, Created date, Colour, Comment, Related documents, Charges, and Delete.

#### Inbound Line Edit Modal

When editing a line item on the tablet, the modal shows a simplified set of columns:

| Column                | Desktop | Tablet |
| :-------------------- | :-----: | :----: |
| **Select (checkbox)** |    ✓    |   ✓    |
| **Batch**             |    ✓    |   ✓    |
| **Expiry**            |    ✓    |   ✓    |
| **Item variant**      |    ✓    |   ✓    |
| **Pack quantity**     |    ✓    |   ✓    |
| **Pack size**         |    ✓    |        |
| **Unit quantity**     |    ✓    |        |
| **Cost pack price**   |    ✓    |        |
| **Pack sell price**   |    ✓    |        |
| **Line total**        |    ✓    |        |
| **Location**          |    ✓    |        |

---

### Outbound Shipments

#### Outbound Shipment List

| Column                | Desktop | Tablet |
| :-------------------- | :-----: | :----: |
| **Select (checkbox)** |    ✓    |   ✓    |
| **Name** (customer)   |    ✓    |        |
| **Status**            |    ✓    |   ✓    |
| **Invoice number**    |    ✓    |   ✓    |
| **Created**           |    ✓    |   ✓    |
| **Reference**         |    ✓    |        |
| **Comment**           |    ✓    |   ✓    |
| **Total**             |    ✓    |        |

On the tablet, filters are available (by name or status). The **New shipment** button is available on both views. The **Group by item** option is desktop only; on the tablet, batch lines are shown by default.

#### Creating / Editing an Outbound Shipment

| Column                | Desktop | Tablet |
| :-------------------- | :-----: | :----: |
| **Select (checkbox)** |    ✓    |   ✓    |
| **Code**              |    ✓    |   ✓    |
| **Name**              |    ✓    |   ✓    |
| **Batch**             |    ✓    |        |
| **Expiry**            |    ✓    |        |
| **Location**          |    ✓    |        |
| **Unit**              |    ✓    |        |
| **Pack size**         |    ✓    |        |
| **Pack quantity**     |    ✓    |   ✓    |
| **Unit quantity**     |    ✓    |        |
| **Unit sell price**   |    ✓    |        |
| **Total**             |    ✓    |        |

Key feature differences:

| Feature                                                                 | Desktop | Tablet |
| :---------------------------------------------------------------------- | :-----: | :----: |
| **Add item**                                                            |    ✓    |   ✓    |
| **Add from master list**                                                |    ✓    |   ✓    |
| **Print**                                                               |    ✓    |   ✓    |
| **Status change** (allocated / picked / shipped / delivered / verified) |    ✓    |        |
| **Verify button**                                                       |         |   ✓    |
| **More info panel**                                                     |    ✓    |   ✓    |

The **More info panel** includes: Entered by, Created date, Colour, Comment, Related documents, Invoice details (cost / tax / service charge), Transport details, and Delete.

#### Outbound Line Edit

On the tablet, the line edit modal is simplified. It shows:

- An input field for the number of packs or units to issue
- A select input for the preferred pack size

The batch selection table is reduced to:

| Column                   | Desktop | Tablet |
| :----------------------- | :-----: | :----: |
| **Batch**                |    ✓    |        |
| **Expiry**               |    ✓    |        |
| **Location**             |    ✓    |        |
| **Pack sell price**      |    ✓    |        |
| **Pack size**            |    ✓    |        |
| **In store (packs)**     |    ✓    |        |
| **Available (packs)**    |    ✓    |   ✓    |
| **Pack quantity issued** |    ✓    |   ✓    |
| **Unit quantity issued** |    ✓    |        |
| **On hold**              |    ✓    |        |

---

### Stocktakes

#### Stocktake List

| Column                | Desktop | Tablet |
| :-------------------- | :-----: | :----: |
| **Select (checkbox)** |    ✓    |   ✓    |
| **Number**            |    ✓    |        |
| **Status**            |    ✓    |   ✓    |
| **Description**       |    ✓    |   ✓    |
| **Created**           |    ✓    |   ✓    |
| **Date**              |    ✓    |        |

The **New stocktake** button is available on both views. The **Export** button and **Filter by status** are desktop only.

#### Editing a Stocktake

| Column                | Desktop | Tablet |
| :-------------------- | :-----: | :----: |
| **Select (checkbox)** |    ✓    |   ✓    |
| **Code**              |    ✓    |   ✓    |
| **Name**              |    ✓    |   ✓    |
| **Batch**             |    ✓    |        |
| **Expiry**            |    ✓    |        |
| **Location**          |    ✓    |        |
| **Unit**              |    ✓    |        |
| **Pack size**         |    ✓    |        |
| **Snapshot packs**    |    ✓    |   ✓    |
| **Counted packs**     |    ✓    |   ✓    |
| **Difference**        |    ✓    |   ✓    |
| **Reason**            |    ✓    |   ✓    |

Features available on both views: Add item, Print, More button, Description, Stocktake date. The **Filter items** option is desktop only.

The **More info panel** includes Comment and Delete on both views.

#### Stocktake Line Edit Modal

When editing a stocktake line, the modal shows:

| Column                         | Desktop | Tablet |
| :----------------------------- | :-----: | :----: |
| **Count this line (checkbox)** |    ✓    |   ✓    |
| **Batch**                      |    ✓    |   ✓    |
| **Item variant**               |    ✓    |   ✓    |
| **Pack size**                  |    ✓    |        |
| **Snapshot packs**             |    ✓    |   ✓    |
| **Counted packs**              |    ✓    |   ✓    |
| **Expiry**                     |    ✓    |   ✓    |
| **Reason**                     |    ✓    |   ✓    |
| **Sell price**                 |    ✓    |        |
| **Cost price**                 |    ✓    |        |
| **Location**                   |    ✓    |        |
| **Comment**                    |    ✓    |        |

---

### View Stock

#### Stock List

| Column              | Desktop | Tablet |
| :------------------ | :-----: | :----: |
| **Code**            |    ✓    |   ✓    |
| **Name**            |    ✓    |   ✓    |
| **Batch**           |    ✓    |        |
| **Expiry**          |    ✓    |        |
| **Location**        |    ✓    |        |
| **Unit**            |    ✓    |        |
| **Pack size**       |    ✓    |        |
| **Pack quantity**   |    ✓    |   ✓    |
| **Stock on hand**   |    ✓    |        |
| **Pack cost price** |    ✓    |        |
| **Total**           |    ✓    |        |
| **Supplier**        |    ✓    |        |

The **New stock** button and **Filters** (by code/name, location, master list, expiry) are available on both views. The **Export** button is desktop only.

#### View Stock Item

When viewing an individual stock item, all detail fields are shown on both desktop and tablet:

- Pack quantity, Cost price, Sell price, Expiry, Batch, Pack size, On hold, Location, Barcode, Supplier

The **Log** and **Ledger** tabs are desktop only.

## Tips for Using the Tablet Interface

- **Navigation**: The left navigation menu is collapsed by default. Tap the menu icon to expand it when you need to switch between sections.
- **Sorting**: You can still sort lists by tapping on column headers, just as on the desktop.
- **Scrolling**: Swipe up and down to scroll through lists. If a table has more columns than can fit on screen, swipe left and right to see additional columns.
- **Comments**: On list views, comments are shown as an icon. Tap the icon to view the full comment text.
