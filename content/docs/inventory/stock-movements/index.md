+++
title = "Stock Movements"
description = "Recording the movement of stock between locations."
date = 2026-07-14T00:00:00+00:00
updated = 2026-07-14T00:00:00+00:00
draft = false
weight = 64
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Recording the movement of stock between locations"
toc = true
top = false
+++

Within a store, stock often needs to be moved from one [location](/docs/inventory/locations/) to another. The **Stock Movements** feature gives you a dedicated way to record these moves so that Open mSupply always reflects where your stock physically is, and so that each move leaves an auditable record.

<div class="note">
A stock movement only changes the <em>location</em> of a stock line. It does not change the quantity, batch, expiry or value of your stock. To change stock quantities, use a <a href="/docs/inventory/stocktakes/">Stocktake</a> or an <a href="/docs/inventory/stock-view/#adjusting-stock-level">Adjustment</a>.
</div>

## Viewing stock movements

In the navigation panel, go to `Inventory` and tap on the `Stock Movements` submenu. This brings up a list of all the stock movements recorded in your store.

For each stock movement you can see:

| Column         | Description                                                      |
| :------------- | :--------------------------------------------------------------- |
| **Number**     | The number of the stock movement                                 |
| **Status**     | Whether the movement is still being edited or has been finalised |
| **Lines**      | The number of lines in the movement                              |
| **Comment**    | Any comment recorded against the movement                        |
| **Created**    | The date the stock movement was created                          |
| **Created by** | The user who created the movement                                |
| **Finalised**  | The date the stock movement was finalised                        |

You can use the filter options at the top of the list to find a particular movement.

## Creating a stock movement

To record a new movement, click the `New movement` button in the top right of the Stock Movements list. A stock movement detail view opens where you build up the list of stock you are moving.

For each line you add, you choose:

- The **stock line** being moved (item and batch)
- The number of **packs** to move
- The **destination location** the stock is being moved to

<div class="tip">
If the stock lines you are moving belong to items with restricted location types, only locations of a matching type will be available for selection.
</div>

Once you have added all the lines you want to move, save the movement. The location recorded against each stock line is updated to the destination location, and the movement is available from the list for future reference.
