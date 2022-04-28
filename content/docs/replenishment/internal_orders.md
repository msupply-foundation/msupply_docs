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
lead = "Ordering stock from your suppliers"
toc = true
top = false
+++

Internal Orders go by several other names in certain countries or systems:
* Requisitions
* Orders
* Report & Requistion
* R&R

Internal Orders are a way to support users in requesting new stock from another store. 

## Viewing Internal Orders

If you would like to order some stock from your supplier: 
1. Navigate to the `Replenishment` menu
2. Tap on `Internal Orders`

![](/docs/replenishment/intord_access.png)

You will see a list of all existing internal orders: 

![](/docs/replenishment/intord_list.png)

You can use the `Search by comment` field to filter the list by the comments of the internal orders: 

![](/docs/replenishment/intord_filterlistbycomment.gif)

You can sort the list using the column headers:
1. Tap the column header of the column that you want to sort. The column is sorted in ascending order. 
2. Tap the column header again and column will be sorted in the opposite order.

## Creating a new Internal Order

### Select a supplier

1. Click on the `New Requisition` button (top right corner): 

![](/docs/replenishment/intord_newreqbutton.png)

2. A new window opens, inviting your to select a supplier: 

![](/docs/replenishment/intord_selectsupplier2.png)

3. Select a Supplier by pressing on its name. You will see a window like this: 

![](/docs/replenishment/intord_newintord.png)

### Defining Maximum Month of Stock (Maximum MOS)

Defining the Maximum MOS (Month of Stock) is critical to the calculation of the **Suggested Quantity** and you can change it: 
* There is an industry rule of thumb that the *Maximum MOS* should be set to 3 times the ordering cycle. 
* the default *Maximum MOS* is `3.0`, which is based on a monthly ordering cycle. 
* If for example, the ordering cycle was every two months, then *Maximum MOS* should be set to 3 x 2 = `6.0`. 

<div class="imagetitle">
In below example, we are setting our Maximum MOS to 3 Months.  
</div>


![](/docs/replenishment/intord_maxmos.png)

This can be done before or after adding items to your order. 

### Adding a single item

Tap on `Add Item` to add a single item to your order. A new window opens: 

![](/docs/replenishment/intord_additem2.png)

First select the item you want to add to your order. Open the `Stock details` dropdown menu and select your item from the list. You can also type as much of an item name (or code) to look for a specific item. 

Once item is selected, you should see the following information on the window:
* **Item Code** and **Item Name**
* **Unit**: the default unit used for this item (*eg. Tablet, Vial*)
* **AMC**: Average Monthly Consumption. How much stock your store uses each month on average (based on a configurable number of months, default is set to 3 months)
* **Suggested Quantity**: how much stock mSupply suggests that your order to reach your stock target quantity. 
* **Order quantity**: the quantity of units that you request from your supplier

You should also see the following charts: 
* **Stock distribution**: In this chart, you will see information such:
    * the *Target Quantity* for the item. This is calculated as: Maximum MOS x AMC
    * your current *Stock on Hand* (in grey)
    * the *suggested quantity* calculated by mSupply

<div class="imagetitle">
In below example, our target quantity is 600 units which is the equivalent of 3 months of stock (3 x 200 = 600 units). Our stock on hand (in grey) is 50 so in order to reach my target, mSupply suggests to order 550 units (600 - 50). 
</div>

![](/docs/replenishment/intord_charts_stockdistri.png)

<div class="imagetitle">
In below example, the target quantity is 62 units. Since we already have 250 units in stock (in grey), the suggested quantity is zero. 
</div>

![](/docs/replenishment/intord_charts_stockdistri2.png)

* **Consumption History (monthly)**: this chart shows the monthly consumption up to 12 months in the past (in grey) and the current AMC (in orange). 

![](/docs/replenishment/intord_charts_consumption.png)

* **Stock Evolution**: this chart shows you your stock level for the last 30 days and your projected inventory for the next 30 days. The projected stock will be updated based on your inputs in the `Order quantity` field. 

![](/docs/replenishment/intord_charts_stockevolution.png)

### Adding items using a master list

If your organisation is using Master Lists, you can add multiple items at once using your store's master lists. It is particularly useful when you have a lot of items in your order and you don't want to add them all one by one.  

1. Tap on the `Add from master list` button
2. Select a master list from the list
3. A dialog window opens asking you whether you want to add all of the items from this master list. Tap `OK` if you wish to proceed. 

All the items of the master list are now listed in your order. If you had previously added single item, it will add items that are not already there. 

Tap on an order line to change the **Order Quantity** or tap on the button `Requested to Suggested` button 

![](/docs/replenishment/intord_addfromml.gif)

<div class="note"> 
Master Lists are defined and assigned to stores at the central server level. You can only see the master lists that are visible to your store. 
<br> <br>
If you don't find the master list you are looking for and if you want to create a new one, please contact your administrator.
</div>

<div class="tip">
You can create internal orders from multiple master lists by repeating above actions with another master list. 
</div>

### Reading the Internal Order's list

When you add items (using a master list or not), the item is added to the order's table. The following information is provided for each order line:

| Status | Description |
| :--- | ---------- |
| **Code** | Code of the item |
| **Name** | Name of the item |
| **AMC** | Average Monthly Consumption: how much stock your store uses each month on average (based on a configurable number of months, defaults to 3 months)   |
| **SoH (Est. remaining)** | how much stock currently available in your store for this store. |
| **Suggested Quantity** | how much stock mSupply suggests that your order. This is calculated as: AMC x Maximum MOS - SoH |
| **Target Stock** | This is the stock you are aiming for. Calculated as: AMC x Maximum MOS |
| **Requested** | This is set to zero by default. This is the quantity of units you are ordering from your supplier |
| **Comment** | A comment for the order line. Commments will be visible to your supplier. |

### Using Suggested Quantities 

If you tap on the `Use Suggested Quantities` on the requisition header, mSupply will automatically copy the values in the **Suggested Quantitys** column into the **Requested Quantity** column. 

You can always manually edit the order quantity for each by tapping on an order line. 

![](/docs/replenishment/intord_reqtosug.png)

### Printing an Internal Order

[In Progress...]

### Sending an Internal Order

To send the order to your supplier:
1. tap on the `Confirm Sent` button (bottom right corner). 
2. A dialog window opens asking you whether you are sure to want to send the order. Tap on `OK` to proceed. 
3. Status of your order is now `SENT` and the order is no longer editable. 

<div class="warning">
Ensure that your order is correct before sending it to your supplier. Once sent, no further changes can be made to finalised orders. 
</div>


