+++
title = "Stock"
description = "View Stock"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 63
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

One of the most important - but easiest - tasks in mSupply is to check how much stock you have on hand. When you create an Outbound Shipment and add an item, mSupply will tell you if you have enough stock. But at many other times, you might want to quickly check, and it is very simple to do so.

## Viewing stock

In the navigation panel, Go to `Inventory` and tap on the `Stock` submenu:

![Stock: nav](/docs/inventory/images/stock_gotostock.png)

A detailed list of your inventory appears:

![Stock: list](/docs/inventory/images/stock_viewstock.png)

The list is divided into 8 columns:

- **Code**: This is the code assigned to this item in mSupply
- **Name**: This is the name by which mSupply will refer to the item
- **Batch**: Batch number of the stock line
- **Expiry**: Expiry date of the batch
- **Location**: Where the item is being stored in your facility
- **Unit**: The unit you use for this item
- **Pack Size**: Number of units per pack
- **Pack Qty**: Number of packs available in your store
- **SOH**: The total quantity of stock on hand, in number of packs
- **Supplier** Shows the source of this stock item

### Exporting Stock

The list of Stock can be exported to a comma separated file (csv). Simply click the export button (on the right, at the top of the page)

![Export button](/docs/inventory/images/export.png)

and the file will be downloaded. The export function will download all Stock lines, not just the current page, if you have more than 20 of them.

## Looking for a specific item

You can filter the list by item name or code. This can be useful if you're looking for one particular item.

Type as much of an item name or code in the `Enter item code or name` field:

![Stock: search](/docs/inventory/images/stock_search.gif)

## Editing a stock line

Clicking on a line in the list will open the edit screen. Here, you can change the properties of this stock line.

![Edit stock line](/docs/inventory/images/stock_edit_line.png)

To see changes made to this stock line, you can click the `Log` tab. Note that you might have to scroll to the right in order to see all of the details!

![Stock line log 1](/docs/inventory/images/stock_line_edit_log_1.png)

<div class="imagetitle" style="margin-bottom: 40px;">Log, showing changes made to this item</div>

![Stock line log 2](/docs/inventory/images/stock_line_edit_log_2.png)

<div class="imagetitle">With the log scrolled to the right</div>

## Updating barcode

This feature is available when running either the android or desktop versions of open mSupply.
There is an additional button shown when editing a stock line:

![Scan button](/docs/inventory/images/stock-line-edit-scan.png)

Clicking this will start the barcode scanner - if one is attached, when running desktop. If running on android, the camera on the device is used.
If a barcode is scanned successfully, then the barcode field is populated with the scanned value. If a QR code which has a batch and expiry information is scanned, then these fields on the stock edit window are also populated from the scanned code.

<div class="tip">You can also press the 'control (ctrl)' and 's' keys at the same time to start the barcode scanner</div>

Once you have updated the barcode, this code is associated with the item, for this particular pack size. You can then add items to an outbound shipment using a barcode scanner, and detect this item automatically.

Barcodes updated in this way and also synchronised with other stores, which means that codes you scan here will allow other stores to automatically add these items to outbound shipments using a barcode scanner.