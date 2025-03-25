+++
title = "Zeroing Stock in Bulk"
description = "Stocktake"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 206
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

### Why Reduce Stock to Zero in Bulk?

There are situations where you might need to **bulk reduce stock to 0**. This feature is helpful in inventory management when stock is no longer available or needs to be written off. Some common scenarios for using this feature include:

- **Damaged or Expired Stock**: Items that are damaged or expired and can no longer be used or sold should be marked with zero stock.
- **Stock Losses**: If stock is lost, such as from theft or misplacement, you can mark all affected stock to zero.
- **Discontinued Items**: This can be helpful for products that are discontinued or removed from inventory.
- **Stock Adjustments**: During stocktakes, discrepancies may arise, and if items are no longer part of the inventory, you may need to quickly bulk reduce these items to zero.

---
# How to Reduce Stock to Zero in Bulk
## Creating a New Stocktake

Let's start a new stocktake. To do so, tap on the `New Stocktake` button in the right corner of the screen.

![Stocktake: new](/docs/inventory/images/stocktake_newstocktake.png)

A window appears, where you can opt to create a stocktake based on items in a master list, items in a particular location, items that are in stock, expiring items, or an empty stocktake:

![Stocktake: New modal](/docs/inventory/images/stocktake_newmodal.png)

Click on OK when you have selected the option you would like.

The stocktake will then be created, and existing stock lines will be used to populate the values for batch, expiry, pack size and snapshot number of packs.


### Reduce number of packs to 0

Use the checkbox column to select the lines you wish to reduce to 0. Click the `Reduce to 0` button which appears at the bottom of the page.

![Stocktake action reduce to 0](/docs/inventory/images/reduce-to-zero-stocktake-line.png)

This will bring up a confirmation popup:

![Stocktake reduce to 0](/docs/inventory/images/stocktake_reduce_0.png)

If [inventory adjustment reasons](https://docs.msupply.org.nz/preferences:options?s[]=reasons) are configured from the central server, you will also be required to supply the reason for reducing the stock level:

![Stocktake reduce to 0 select reason](/docs/inventory/images/stocktake_reduce_0_reason.png)

Select a reason and press OK. All selected stock lines will now have a `Counted packs` value of 0.

### Completing the Stocktake

To complete the stocktake, simply click the **Finalize Stocktake** button. This will lock in the new inventory levels and update your records, ensuring that the system reflects the correct quantities.