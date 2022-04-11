+++
title = "Internal Orders"
description = "Requesting stock from your suppliers."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Ordering stock from your suppliers."
toc = true
top = false
+++

Internal Orders go by several other names in certain countries or systems:
* Requisitions
* Orders
* Report & Requistion
* R&R

Internal Orders are a way to place orders to another store. 

## Viewing Internal Orders

Navigate to the 1. `Replenishment` menu and select 2. `Internal Orders`. 

![](/docs/replenishment/intord_access.png)

You will see a list of all existing internal orders: 

![](/docs/replenishment/intord_list.png)

You can use the `Search by comment` field to filter the list by the comments of the internal orders: 

![](/docs/replenishment/intord_filterlistbycomment.gif)

You can sort the list using the column headers:
1. Tap the column header of the column that you want to sort. The column is sorted in ascending order. 
2. Tap the column header again and column will be sorted in the opposite order. 

## Entering an Internal Order

### Select a supplier

1. Click on the `New Requisition` button (top right corner): 

![](/docs/replenishment/intord_newreqbutton.png)

2. A new window opens, inviting your to select a supplier: 

![](/docs/replenishment/intord_selectsupplier2.png)

3. Select a Supplier by pressing on its name. You will see a window like this: 

![](/docs/replenishment/intord_newintord.png)

### Define the Maximum Month of Stock (Maximum MOS)

Before adding items to your order, it is important to define the `Maximum MOS` (Maximum Month of Stock). It is critical to the calculation of the `Suggested Quantity` and you can change it: 
* There is an industry rule of thumb that the *Maximum MOS* should be set to 3 times the ordering cycle. 
* the default *Maximum MOS* is `3.0`, which is based on a monthly ordering cycle. 
* If for example, the ordering cycle was every two months, then *Maximum MOS* should be set to 3 x 2 = `6.0`. 

### Add order lines

To add lines to your order, you have two options:
* Use the `Add Item` button to manually add a single item
* Use the `Add from master list` button to add all the items of a master list

Both buttons are located on the top right corner of the Internal Order's screen. 

#### Add Item button

Tap on `Add Item` to a single item to your order. A new window opens: 

![](/docs/replenishment/intord_additem2.png)

1. **Stock details**: First select the item you want to add to your order. Open the `Stock details` dropdown menu and select your item from the list. You can also type as much of an item name (or code) to look for a specific item. 

2. **Order**: enter the quantity you want to order in the `Order Quantity` field. The `Suggested Quantity` is telling how much you need to order based on your Average Monthly Consumption and the Maximum MOS that you have defined. 

    The *Suggested Quantity* is worked out by multiplying the Average Monthly Consumption by the Maximum MOS and then substrating the Stock on Hand (SOH). If the resulting value is negative, a value of `0` will be displayed. 

3. **Comment**: You can write a comment for that specific order line. It could be any comment you want the supplier to see for this item. 