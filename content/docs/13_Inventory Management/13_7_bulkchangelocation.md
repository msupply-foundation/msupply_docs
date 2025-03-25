+++
title = "Moving Stock Location in Bulk"
description = "View and manage your locations"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 207
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

### Why Move Stock in Bulk?

Moving stock in bulk is a useful feature for managing large quantities of items quickly and efficiently. It is often needed in situations where there are significant inventory updates, such as:

- **Reorganizing Stock**: When you need to change storage locations within the warehouse or store, bulk movement ensures that large amounts of inventory are transferred quickly.

- **Stock Consolidation**: If you’re combining stock from different locations or consolidating inventory for easier access, moving items in bulk can save time.
  

---
# How to Move Stock Locations in Bulk
## Creating a New Stocktake

Let's start a new stocktake. To do so, tap on the `New Stocktake` button in the right corner of the screen.

![Stocktake: new](/docs/inventory/images/stocktake_newstocktake.png)

A window appears, where you can opt to create a stocktake based on items in a master list, items in a particular location, items that are in stock, expiring items, or an empty stocktake:

![Stocktake: New modal](/docs/inventory/images/stocktake_newmodal.png)

Click on OK when you have selected the option you would like.

The stocktake will then be created, and existing stock lines will be used to populate the values for batch, expiry, pack size and snapshot number of packs.

### Change location

Use the checkbox column to select the lines you wish to change the location for. The `Actions` footer will display at the bottom of the screen when a stocktake line is selected. It will display the number of stocktake lines selected and the actions which can be taken. Click `Change location`.

![Stocktake actions](/docs/inventory/images/change-location-stocktake-line.png)

This will bring up a window where you can select which location you would like to move the stock lines to:

![Stocktake change location](/docs/inventory/images/stocktake_change_location.png)

Select a location and press OK. All selected stock lines will now have an updated location.

### Completing the Location Change

To finish bulk moving your stock to the new location, simply click the **Finalize Stocktake** button. This will lock in the new inventory levels and locations and update your records, ensuring that the system reflects the your store.
