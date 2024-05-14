+++
title = "Stocktakes"
description = "Counting and adjusting stock."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 63
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Counting and adjusting stock"
toc = true
top = false
+++

mSupply will automatically keep track of your stock levels for you, as you receive and distribute it. But sometimes data gets entered incorrectly or stock goes out without anyone making an entry in the system.

Of course, we try not to let that happen but, if it does happen, we can make corrections. The easiest way to correct mistakes is to do a **Stocktake**.

In mSupply, you can easily do a stocktake for:

- A full inventory
- A limited range of items
- A single item

## Viewing Stocktakes

To view your stocktakes, go to `Inventory` and then `Stocktakes` in the navigation panel:

![Stocktake: nav](/docs/inventory/images/stocktake_gotost.png)

This brings up a list of all your stocktakes:

![Stocktake: list](/docs/inventory/images/stocktake_stocktakelist.png)

For each stocktake you can see:

| Column          | Description                                                                                                                                    |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **Number**      | The number of the stocktake                                                                                                                    |
| **Status**      | The status of the stocktake. _New_: a currently active stocktake. _Finalised_: stocktake has already been performed. You can no longer edit it |
| **Description** | The description of the stocktake (e.g. March Stocktake)                                                                                        |
| **Created**     | The date the stocktake was created                                                                                                             |
| **Date**        | The date the stocktake was done                                                                                                                |
| **Comment**     | Stocktake comment if any                                                                                                                       |

<div class="warning">
There is little point in keeping old stocktakes with status = <code>NEW</code>, and it can even be quite dangerous, especially if you are about to create a new stocktake containing the same items. If time has passed since the stocktake was created, then the snapshot and actual quantities are almost certainly incorrect. For good housekeeping reasons, it is good practice to delete old <code>NEW</code> stocktakes.
</div>

## Creating a New Stocktake

Let's start a new stocktake. To do so, tap on the `New Stocktake` button in the right corner of the screen.

![Stocktake: new](/docs/inventory/images/stocktake_newstocktake.png)

A window appears, where you can opt to create a stocktake based on items in a master list, items in a particular location, items that are in stock, or an empty stocktake:

![Stocktake: Add item](/docs/inventory/images/stocktake_additem2.png)

Click on OK when you have selected the option you would like.

The stocktake will then be created, and existing stock lines will be used to populate the values for batch, expiry, pack size and snapshot number of packs. The lines show as light blue, and will change to black when a value is entered for the counted quantity.

<div class="note">You are not able to edit the pack size of stocktake rows which are linked to an existing stock line. If you wish to repack, follow the instructions in <a href="/docs/inventory/stock-view/#repacking-stock">Repack</a>.</div>

![Stocktake with placeholders](/docs/inventory/images/stocktake-placeholders.png)

<div class="tip">
Don't worry if an item is missing from your newly created stocktake. You will have the possibility to add more items to your stocktake afterwards. 
</div>

### Entering reasons

If you have [inventory adjustment options](https://docs.msupply.org.nz/preferences:options?s[]=reasons) configured in your central server, then you are required to enter a reason when the `counted packs` specified does not match the snapshot packs.

For example, entering `11` for the counted quantity of Abacavir Oral Solution, will add a red \* to the right of the `Reason` input and show the negative inventory adjustment reasons:

![Stocktake reasons](/docs/inventory/images/stocktake_reasons.png)

If you try to save the stocktake row without entering a reason you will see an error:

![Stocktake reasons](/docs/inventory/images/stocktake_reasons_error.png)

and the stocktake row that requires a reason to be entered will be highlighted in red as shown below.

![Stocktake reasons](/docs/inventory/images/stocktake_reasons_error_highlight.png)

### Printing Stocktake sheet

When viewing a specific stocktake, simply click the `Print` button which is on the top right of the page.
When printing, a PDF file is generated for you, which will then open in a new browser tab. This can then be printed using your browser by clicking print or using `control`+`P` (if using windows) or `cmd`+`P` keys on your keyboard (if using a mac).

![Print button](/docs/introduction/images/print_button.png)

This will either

- Show a menu of possible reports for you to select from before creating a PDF. This will happen if there are more than one report defined for the `Stocktake` report type.
- Create a PDF immediately, if there is only one report to select from

![Print menu](/docs/distribution/images/os_print_menu.png)

### Filtering lines

The list of stocktake lines can get very long if you have a large stocktake. To make working with the stocktake easier to manage, you can filter the list by item name or code.

Simply enter some or all of an item code in the filter input:

![Filter by code](/docs/inventory/images/stocktake_filter_code.png)

or, enter some of an item's name:

![Filter by code](/docs/inventory/images/stocktake_filter_name.png)

You can also group the lines by item by enabling the `Group by item` switch.
