+++
title = "Outbound Shipments"
description = "Issuing stock to your customers."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Issuing stock to your customers"
toc = true
top = false
+++

Outbound Shipments can used to issue stock to a customer. 

If you used mSupply in the past, you may be familiar with the term **Customer Invoice**. An Outbound Shipment can be used to:
* Transfer stock to another store using mSupply
* Issue stock to a customer
* Fulfill requisitions (customer orders)

To access the **Outbound Shipment** menu, press the **Distribution** menu in the navigation panel. 

![gotooos](/docs/distribution/gotoos2.png)

## Create a new Outbound Shipment

1. Go to **Distribution** > **Outbound Shipment**

2. Press the **New Shipment** button, in the top right corner

![New Shipment](/docs/distribution/clicknewshipment.png)

3. In the new window, you will be presented with a list of available customers. You can select your customer from the list or you can type as much of a customer name and select it (or tap on it).

>**Note:** In below example, we are issuing stock to **Kopu Health Center**. 
![gif](/docs/distribution/os_select_customer.gif)

4.  Your new Outbound Shipment has been created and if everything went well, you should see the name of your customer in the top left corner and the status should be `[New]` 

![](/docs/distribution/os_created.png)

5. If you have selected the wrong customer, you can always type another name in the `[Customer Name]` field or select one the dropdown list: 

![gif](/docs/distribution/os_change_customer.gif)

## Add items to an Outbound Shipment

Tap on the `[Add Item]` button (top right corner). 

A new window opens. 

![Add Item button](/docs/distribution/additembutton.png)

### Select an item

In the `[Add Item]` window, you can look up an item by:
* reading through the list of available items
* or by typing as much of an item name
* or by typing as much of an item code

Once your item is highligthed, tap on the name or press `Enter`.

> **Note:** In our example, we are issuing the item *030453 - Amoxicillin 250mg tabs*. When selecting an item, you can see on the right side of the list, how many units are available in your store. 

![Alt Text](/docs/distribution/os_additem.gif)

Once the item is selected, you can see the following information: 

#### Headers:

![add item headers](/docs/distribution/additem_headers.png)

* Item code and name (eg. *030453 Amoxicillin 250 mg Tabs*)
* the available stock quantity for this item (eg. *3527 units*)
* the item's unit (eg. *Tab*)

> ***Example:*** For the item *030453 - Amoxicillin 250mg tabs*, there are 3527 tabs available. 

#### Issue `[Issue Quantity]` units in pack of `[Pack Size]`

![](/docs/distribution/os_issuequantityinunits.png)

In the `[Issue Quantity]` field, you can enter the quantity that you want to issue to your customer. 

By default, you are invited to issue a quantity of units. However, you have the possibility to issue a quantity of packs instead by changing the value in the dropdown`[Pack Size]`

#### List of available batches:

![List of available batch numbers](/docs/distribution/os_additem_listofbatches.png)

This is a list of batch numbers that you in store for this item: 
* **Packs**: number of packs to be issued
* **Pack Size**: quantity of units per pack
* **Unit Qty**: total quantity of units to be issued
* **Available**: number of packs available (not already allocated to other shipments)
* **In store**: total number of packs in your store
* **Batch**: batch number. It is a designation given to products made in the same manufacturing run. 
* **Expiry**: Expiry date of the batch
* **Location**: if you inventory is managed with storage locations, the name of the location where the item is stored. 
* **Sell**: selling unit price of the item
* **On Hold**: indicate whether a batch is on hold or not. You cannot issue a batch that is on hold. 
* **Placeholder**: the placeholder line is used when the quantity you are issuing is higher than your available stock. 


### Issue a quantity of units

By default, you are invited to issue a quantity of **units**, regardless of the pack size (number of units in a pack). 

When entering a number in the `[Issue Quantity]` field, system automatically chooses the batch number(s) with the shortest expiry date (First to Expire, First Out or FEFO logic). 

In below example, we are issuing 100 units of the item. All 100 units will be taken from the same batch (second row). First batch was not selected because it is expired. 

![additem!](/docs/distribution/os_additem_issueunits.png)

In this other example, we are issuing 1200 units. System selects two batches with different pack sizes. 

![additem!](/docs/distribution/os_additem_issueunitstwobatches.png)

### Issue a quantity of packs

You can decide to issue a quantity of **packs**. To do this, you can change the value in the `[Pack Size]` dropdown. 

Let's imagine that your customer only wants pack size of 12 units. You can change the dropdown value from `Any` to `12`. 

![Alt Text](/docs/distribution/os_additem_switchtopack.gif)

You are now offered to issue a number of packs of 12 units. Only batch number(s) with a pack size of 12 units can be automatically issued.

In below example, we are issuing 10 packs of 12 units:

![additem!](/docs/distribution/os_additem_issuepacks.png)

> **Note:** if you had previously entered a quantity of units and you switch to a quantity a packs, the quantity of units will automatically be converted into the correct quantity of packs.  
![Alt Text](/docs/distribution/os_issuepacks.gif)

### Manual Allocation

Regardless if you chose to issue a quantity of units or packs, you can always manually change the quantity at the batch number level directly before clicking on OK. 

You simply have to enter or edit the quantity in the `[# Packs]` column. 

The main `[Issue Quantity]` field will be automatically updated with the new quantity.  

> **Warning**: when allocating quantities at the batch number level, the quantity you enter is always a quantity of packs. 

![Manual Allocation](/docs/distribution/os_additem_manualallocation.gif)

### Confirm Item and Quantity

When you are happy with the quantity, you can either click on:
* the `[OK]` button. You are redirected to the Outbound Shipment view and your item has been added to the list. 
* the `[OK & Next]` button to add another item right away
* the `[Cancel]` if you do not want to add the item to the Outbound Shipment anymore

## The Outbound Shipment Information Panel

The Information Panel allows you see or to edit information about the Outbound Shipment. It is divided in multiple sections: 
* Additional Info
* Related Documents
* Invoice Details
* Transport Details

We are planning to add more sections in the future as Open mSupply grows. 

### How to open the Information Panel ?

To open the Information Panel, you can tap on the `[More]` button, located in the top right corner of the Outbound Shipment view. 

You can close by tap on the `[X Close]` button, on the top right corner of the information panel. 

![Open and close the Information Panel](/docs/distribution/os_infopanel_openclose.gif)

### Additional Info

In the **Additional Info** section, you can:
*  see who created the Outbound Shipment (name of the user)
* view and edit the Outbound Shipment color. To edit the color, tap on the colored circle and select a color from the 
* Write or edit a comment

### Related Documents

In the **Related Documents** section, you can see other related transaction document for the Outbound Shipment. 

If your Outbound Shipment was created to fulfill a **Requisition**, the reference number of the requisition would appear in this section. 

In the future, we would also include other documents such as temperature records, transportation documents or pickslips. 

### Invoice Details

In this section, you will see by default the total selling price of the items listed in the Outbound Shipments. 

You can also add **Service charges** if you wish to add other charges such as Freight Costs. To add a Service charges to the Invoice Details: 

1. Tap on the `[Edit Service Charges]`  buttton. A new window opens. 
2. Tap on the `[Add charge]` button on the new window. A new line appears in the list of charges. You tap on `[Cancel]` if you do not wish to add anything. 
3. **Name:** select a service charges in the dropdown list. You can customise the list of available charges. Contact your administrator. 
4. **Comment:** you can add a comment to provide further details about the new charge. 
5. **Amount:** enter the amount of the charge. 
6. **Tax:** enter a % of tax for the charge. 
7. **Total:** The total field is automatically calculated based on the Amount and the Tax percentage. 
8. **Delete:** you tap on the delete icon to delete the charge.  




