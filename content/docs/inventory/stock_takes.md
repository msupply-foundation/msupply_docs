+++
title = "Stocktakes"
description = "Counting and adjusting stock."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 2
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
* A full inventory
* A limited range of items
* A single item

## Viewing Stocktakes

To view your stocktakes, go to `Inventory` and then `Stocktakes` in the navigation panel: 

![Stocktake: nav](/docs/inventory/images/stocktake_gotost.png)

This brings up a list of all your stocktakes: 

![Stocktake: list](/docs/inventory/images/stocktake_stocktakelist.png)

For each stock stake you can see:
* The stock take **number**
* The stock take **status**. There are two stock take statuses: 
    * *New*: a stocktake you are still working on
    * *Finalised*: a stocktake that has alredy been performed. You can no longer edit it.  
* A **description** of the stocktake (eg. March Stocktake)
* If any, a **comment** about the stoctake
* The **date** of the stock take

<div class="warning">
There is little point in keeping old stocktakes with status = <code>NEW</code>, especially if you are about to create a new stocktake containing the same items. Indeed, it can be quite dangerous to leave old stocktakes with status <code>NEW</code> in your system. If time has passed since the stocktake was created, then the snapshot and actual quantities are almost certainly incorrect. For good housekeeping reasons, it is good practice to delete old <code>NEW</code> stocktakes.
</div>

## Creating a new stock take

Let's start a new stocktake. To do so, tap on the `New Stocktake` button in the right corner of the screen. 

![Stocktake: new](/docs/inventory/images/stocktake_newstocktake.png)

A window appears, inviting you to select items to be counted:

![Stocktake: Add item](/docs/inventory/images/stocktake_additem2.png)

### Selecting Items

Select items you wish to count using the check boxes. You can select more than one: 

![Stocktake: add item count](/docs/inventory/images/stocktake_additem_checkbox.png)

If you want to to include every item (or most items), check the `Select All` box and click on `OK`:

![Stocktake: select all](/docs/inventory/images/stocktake_additem_selectall.png)

Use the search bar to look for a specific item by typing its name or its code: 

![Stocktake: add item search](/docs/inventory/images/stocktake_additem_search.gif)

Click on OK when you have selected all the items you would like to count. 

The stocktake will then be created, and existing stock lines will be used to populate the values for batch, expiry, pack size and snapshot number of packs. The lines show as light blue, and will change to black when a value is entered for the counted quantity.

<div class="note">You are not able to edit the pack size of stocktake rows which are linked to an existing stock line. If you wish to repack, you can delete the row and add a new row or rows, as necessary.</div>

![Stocktake with placeholders](/docs/inventory/images/stocktake-placeholders.png)

<div class="tip">
Don't worry if your forget one item. You will have the possibility to add more items to your stocktake afterwards. 
</div>

### Printing Stocktake sheet

When viewing a specific Stocktake, simply click the `Print` button which is on the top right of the page.
When printing, a PDF file is generated for you, which will then open in a new browser tab. This can then be printed using your browser by clicking print or using `control`+`P` (if using windows) or `cmd`+`P` keys on your keyboard (if using a mac).

![Print button](/docs/images/print_button.png)

This will either
* Show a menu of possible reports for you to select from before creating a PDF. This will happen if there are more than one report defined for the `Stocktake` report type.
* Create a PDF immediately, if there is only one report to select from

![Print menu](/docs/distribution/images/os_print_menu.png)