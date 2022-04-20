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
lead = "Counting and adjusting stock."
toc = true
top = false
+++

mSupply will automatically keep track of your stock levels for you, as you receive stock and give it out. But sometimes data gets entered incorrectly or stock goes out without anyone making an entry in the system. 

Of course, we try not to let that happen but, if it does happen, we can make corrections. The easiest way to correct mistakes is to do a **Stock take**. 

In mSupply, you can easily do a stock take for: 
* a full inventory
* a limited range of items
* a single item

## Viewing Stock takes

To view your stock takes, go to `Inventory` and then `Stock Takes` in the navigation panel: 

![](/docs/inventory/stocktake_gotost.png)

This brings up a list of all your stocktakes: 

![](/docs/inventory/stocktake_stocktakelist.png)

For each stock stake you can see:
* the stock take **number**
* the stock take **status**. There are two stock take statuses: 
    * *New*: a stocktake you are still working on
    * *Finalised*: a stocktake that has alredy been performed. You can no longer edit it.  
* a **description** of the stocktake (eg. March Stocktake). 
* if any, a **comment** about the stoctake. 
* the **date** of the stock take.

<div class="warning">
There is little point in keeping old stocktakes with status = <code>NEW</code>, especially if you are about to create a new stocktake containing the same items. Indeed, it can be quite dangerous to leave old stocktakes with status <code>NEW</code> in your system. If time has passed since the stocktake was created, then the snapshot and actual quantities are almost certainly incorrect. For good housekeeping reasons, it is good practice to delete old <code>NEW</code> stocktakes.
</div>

## Creating a new stock take

Let's start a new stocktake. To do so, tap on the `New Stocktake` button in the right corner of the screen. 

![](/docs/inventory/stocktake_newstocktake.png)

A window appears, inviting you to select items to be counted:

![](/docs/inventory/stocktake_additem2.png)

### Selecting Items

Select items you wish to count using the check boxes. You can select more than one: 

![](/docs/inventory/stoctake_additem_checkbox.png)

If you want to to include every item (or most items), check the `Select All` box and click on `OK`:

![](/docs/inventory/stoctake_additem_selectall.png)

Use the search bar to look for a specific item by typing its name or its code: 

![](/docs/inventory/stocktake_additem_search.gif)

Click on OK when you have selected all the items you would like to count. 

<div class="tip">
Don't worry if your forget one item. You will have the possibility to add more items to your stocktake afterwards. 
</div>

### Printing Stocktake sheet