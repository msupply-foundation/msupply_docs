+++
title = "Stock"
description = "View Stock"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

One of the most important - but easiest - tasks in mSupply is to check how much stock you have on hand. When you create an Outbound Shipment and add an item, mSupply  will tell you if you have enough stock. But at many other times, you might want to quickly check, and it is very simple to do so.

## Viewing stock

In the navigation panel, Go to `Inventory` and tap on the  `Stock` submenu: 

![Stock: nav](/docs/inventory/stock_gotostock.png)

A detailed list of your inventory appears: 

![Stock: list](/docs/inventory/stock_viewstock.png)

The list is divided into 8 columns: 
* **Code**: This is the code assigned to this item in mSupply
* **Name**: This is the name by which mSupply will refer to the item
* **Batch**: Batch number of the stock line
* **Expiry**: Expiry date of the batch
* **Location**: Where the item is being stored in your facility
* **Unit**: The unit you use for this item
* **Pack Size**: Number of units per pack
* **Pack Qty**: Number of packs available in your store


## Looking for a specific item

You can filter the list by item name or code. This can be useful if you're looking for one particular item. 

Type as much of an item name or code in the `Enter item code or name` field: 

![Stock: search](/docs/inventory/stock_search.gif)