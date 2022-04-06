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
lead = "Issuing stock to a customers"
toc = true
top = false
+++


Outbound Shipments can used to issue stock to a customer. 

If you used mSupply in the past, you may be familiar with the term **Customer Invoice**. An Outbound Shipment can be used to:
* Transfer stock to another store which also uses mSupply
* Issue stock to a customer
* Fulfill requisitions (customer orders)

## Viewing Outbound Shipments

### Open the Outbound Shipments Menu

To access the **Outbound Shipment** menu, press the **Distribution** menu in the navigation panel.

![gotooos](/docs/distribution/gotoos2.png)

You will be presented with a list Outbound Shipments (or not if you're just starting!). 

From this screen you can:
* View a list of Outbound Shipments
* Create a new Outbound Shipments
* Export one or multiple Outbound Shipments
* Print one or multiple Outbound Shipments

### List of Outbound Shipments

1. The list of Outbound Shipments is divided into 5 columns:

| Column| Description |
| :---------- | :---------- |
| **Name** | Name of the Customer | 
| **Status** | Current Status of the shipment | 
| **Invnum** | Reference Number of the shipment | 
| **Entered** | Creation date of the shipment | 
| **Comment** | Comment for the shipment |
| **Total** | Total value of the shipment |

2. The list can display **20 shipments per page**. On the bottom left corner, you can how many shipments are currently displayed on your screen. 

![Page](/docs/distribution/os_list_showing.png)

3. If you have more than 20 shipments, you can navigate to the other pages by clicking on the page number or using the right of left arrows (bottom right corner). 

![Page](/docs/distribution/os_list_pagenumbers.png)

### Search by Customer Name

You can filter the list of shipments by customer name. This can be useful if you're looking for one particular shipment!

Type the name of a customer in the `Search by name` field (on the left, just above the list headers). All the shipments for this customer appear in the list. 

### Exporting Outbound Shipments

[IN PROGRESS]

### Delete an Outbound Shipment

You can delete a shipment from the Outbound Shipment list. 

1. Select the shipment that you want to delete by checking the box on the left end of the list. You can select more than one shipment to be deleted. You can even select them all using the  master checkbox in the list headers. 

2. Open the `Select` dropdown (top right corner, above the list) and select `Delete selected lines`. 

3. A notification confirms how many shipments were deleted (bottom left corner). 

<div class="note">
You can only delete Outbound Shipments with a status <code>NEW</code>.
</div>

![](/docs/distribution/os_list_deleteshipment.gif)

## Creating a new Outbound Shipment

1. Go to `Distribution` > `Outbound Shipment`. 

2. Press the  `New Shipment` button, in the top right corner

![New Shipment](/docs/distribution/clicknewshipment.png)

3. A new window `Customers` opens, inviting you to select a customer. 

### Select a Customer

1. In the new window, you will be presented with a list of available customers. You can select your customer from the list or you can type as much of a customer name

<div class="imagetitle">
In below example, we are issuing stock to <b>Kopu Health Center</b>. 
</div>

![gif](/docs/distribution/os_select_customer.gif)

2. Once you tap or press `Enter`, your Outbound Shipment is automatically created.  

<div class=imagetitle>
If everything went well, you should see the name of your customer in the top left corner and the status should be <code>NEW</code> 
</div>

![](/docs/distribution/os_created.png)

### Edit the Customer Name

If you have selected the wrong customer, you can change the customer name in the `Customer Name` field or select one the dropdown list: 

![gif](/docs/distribution/os_change_customer.gif)

### Enter a Customer Reference

Once your Outbound Shipment has been created, you can enter a customer reference in the `Customer Ref` field, if they have one (eg. *PO#1234567*)

### View or edit the Outbound Shipment Information Panel

The Information Panel allows you see or to edit information about the Outbound Shipment. It is divided in multiple sections: 
* Additional 
* Related Documents
* Invoice Details
* Transport Details

We are planning to add more sections in the future as Open mSupply grows. 

#### How to open and close the Information Panel ?

To open the Information Panel, you can tap on the `More` button, located in the top right corner of the Outbound Shipment view. 

You can close by tapping on the `X Close` button, on the top right corner of the information panel. 

![Open and close the Information Panel](/docs/distribution/os_infopanel_openclose.gif)

#### Additonal Info

In the **Additional Info** section, you can:
* see who created the Outbound Shipment (name of the user)
* view and edit the Outbound Shipment color. To edit the color, tap on the colored circle and select a color from the 
* Write or edit a comment

#### Related Documents

In the **Related Documents** section, you can see other related transaction document for the Outbound Shipment. 

If your Outbound Shipment was created to fulfill a **Requisition**, the reference number of the requisition would appear in this section. 

In the future, we would also include other documents such as temperature records, transportation documents or pickslips. 

#### Invoice Details

In this section, you will see by default the total selling price of the items listed in the Outbound Shipment. 

You can also add a **Service charges** if you wish to add other charges such as Freight Costs. To add a Service charges to the Invoice Details: 

1. Tap on the `Edit Service Charges` button. A new window opens. 
2. Tap on the `Add charge` button on the new window. A new line appears in the list of charges. You tap on ``Cancel` if you do not wish to add anything. 
3. **Name:** select a service charges in the dropdown list. You can customise the list of available charges. Contact your administrator. 
4. **Comment:** you can add a comment to provide further details about the new charge. 
5. **Amount:** enter the amount of the charge. 
6. **Tax:** enter a % of tax for the charge. 
7. **Total:** The total field is automatically calculated based on the Amount and the Tax percentage. 
8. **Delete:** you can tap on the `Delete` icon to delete the charge.  

In this section, you can also edit the tax rate (%) for the items sell price. Tap on the pencil icon and enter 

#### Transport Details

In this section, you can see or edit a transport reference number (eg. a booking or a tracking reference number). 

### Outbound Shipment Status Sequence

The status sequence is located at the bottom left corner of the Outbound Shipment screen. 

Passed statuses are hightlighted in blue, next statuses appear in grey. 

<figure>
<img src="/docs/distribution/os_statussequence2.png" alt="Trulli" style="width:100%">
<figcaption align = "center">Status Sequence: current status is <code>NEW</code>.</figcaption>
</figure>

<figure>
<img src="/docs/distribution/os_statussequence3.png" alt="Trulli" style="width:100%">
<figcaption align = "center">Status Sequence: current status is </i><code>PICKED</code>.</figcaption>
</figure>

There are 6 status for the Outbound Shipment: 

| Status | Description |
| :--- | ---------- |
| **New** | This is the first status when you create a shipment |
| **Allocated** | Allocation is confirmed. Goods are no longer available for other shipments but are still part of your inventory. |
| **Picked** | Shipment is picked and is now ready to ship. Goods are still part of your inventory. |
| **Shipped** | Shipment has been shipped and goods are no longer part of your inventory. |
| **Delivered** | Your customer has received the shipment. |
| **Verified** | Your customer has verified the quantity of the shipment. Goods are now part of their inventory. |

if you hover over the status sequence, a shipment history window appears. You can see the date when a shipment was updated from one status to another. 

<div class="imagetitle">
This shipment has been created, allocated and picked on 29/03/2022
</div>

![](/docs/distribution/os_statussequence_hover.png)

### Hold checkbox

Located on the bottom left corner, on the left of the status sequence. 

Check the `Hold` checkbox prevents the Outbound Shipment from being updated to the next status. 

![](/docs/distribution/os_holdcheckbox.png)

### Cancel and Confirm button

#### Cancel Button

Click on the `Cancel` button to quit the Outbound Shipment view and return to the Outbound Shipments list. 

#### Confirm Button

The `Confirm` button is the button to update the status of a shipment. Depending on the current status, you won't confirm the same thing. 

When managing an Outbound Shipment, you can only confirm the Allocation, the Picking and the Shipment. 

| Confirm... | Current Status | Next Status |
| :---------- | :---------- | :---------- |
| **Confirm Allocated** | New | Allocated|
| **Confirm Picked** | Allocated | Picked|
| **Confirm Shipped** | Picked | Shipped |

You don't have to update a shipment to next status in the sequence. You can choose to skip some of them to go directly to `Confirm Shipped` for example.

As demonstrated below, tap on the down arrow of the `Confirm` button and select the status you want the shipment to be updated to. 

![Skip Status](/docs/distribution/os_confirmbutton_skipstatuses.gif)

## Adding items to an Outbound Shipment

Tap on the `Add Item` button (top right corner). 

A new `Add Item` window opens. 

![Add Item button](/docs/distribution/additembutton.png)

### Select an Item

In the `Add Item` window, you can look up an item by:
* reading through the list of available items
* or by typing as much of an item name
* or by typing as much of an item code

Once your item is highligthed, tap on the name or press `Enter`.

![Alt Text](/docs/distribution/os_additem.gif)

Once the item is selected, you can see the following information: 

#### Headers

* Item code and name (eg. *030453 Amoxicillin 250 mg Tabs*)
* the available stock quantity for this item (eg. *3527 units*)
* the item's unit (eg. *Tab*)

<div class="imagetitle">
<b>Example:</b> For the item *030453 - Amoxicillin 250mg tabs*, there are 3527 tabs available. 
</div>

![add item headers](/docs/distribution/additem_headers.png)

#### Issue [Quantity] of units in packs of [Pack Size]

In the `Issue Quantity` field, you can enter the quantity that you want to issue to your customer. 

By default, you are invited to issue a quantity of **units**. However, you have the possibility to issue a quantity of packs instead by changing the value in the second dropdown (`Pack Size`). 

Default value is `Any` when you are issuing units. 

![](/docs/distribution/os_issuequantityinunits.png)


#### List of available batches:

This is a list of batch numbers that you have in store for this item: 
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

![List of available batch numbers](/docs/distribution/os_additem_listofbatches.png)

### Issue a quantity of units

By default, you are invited to issue a quantity of **units**, regardless of the pack size (number of units in a pack). 

When entering a number in the `Issue Quantity` field, system automatically chooses the batch number(s) with the shortest expiry date (First to Expire, First Out or FEFO logic). 

<div class="imagetitle">
In below example, we are issuing 100 units of the item. All 100 units will be taken from the same batch (second row). First batch was not selected because it is expired. 
</div>

![additem!](/docs/distribution/os_additem_issueunits.png)

<div class="imagetitle">
In this other example, we are issuing 1200 units. System selects two batches with different pack sizes. 
</div>

![additem!](/docs/distribution/os_additem_issueunitstwobatches.png)

### Issue a quantity of packs

You can decide to issue a quantity of **packs**. To do this, you can change the value in the `Pack Size` dropdown. 

<div class="imagetitle">
Let's imagine that your customer only wants pack size of 12 units. You can change the dropdown value from `Any` to `12`. 
</div>

![Alt Text](/docs/distribution/os_additem_switchtopack.gif)

You are now offered to issue a number of packs of 12 units. Only batch number(s) with a pack size of 12 units can be automatically issued.

<div class="imagetitle">
In below example, we are issuing 10 packs of 12 units:
</div>

![additem!](/docs/distribution/os_additem_issuepacks.png)

<div class="note">
<b></b> if you had previously entered a quantity of units and you switch to a quantity a packs, the quantity of units will automatically be converted into the correct quantity of packs.  
</div>

![Alt Text](/docs/distribution/os_issuepacks.gif)


### Manual Allocation 

Regardless if you chose to issue a quantity of units or packs, you can always manually change the quantity at the batch number level directly before clicking on OK. 

You simply have to enter or edit the quantity in the `# Packs` column. 

The main `Issue Quantity` field will be automatically updated with the new quantity.  

<div class="note">
 <b></b> when allocating quantities at the batch number level, the quantity you enter is always a quantity of packs. 
</div>

<figure>
<img src="/docs/distribution/os_additem_manualallocation.gif" alt="Trulli" style="width:100%">
<figcaption align = "center"><i>Manual allocation at the batch number level.</i></figcaption>
</figure>

### Issuing when there is not enough stock (Placeholder Line)

If the amount to be issued is greater than the total stock available from all of the available lines, then the quantity to be issued will automatically be placed in the `placeholder` field, at the bottom of the list of available batch numbers. 

Placeholder lines can be allocated later when new stock arrives. However, all shipment lines must be allocated before confirming the allocation. 

<div class="imagetitle">
Since there is no stock available for <i>042744-Diazepam Injection 5mg/ml Amp/2ml</i>, system is issuing a 100 units in the placeholder field. 
</div>

![Alt Text](/docs/distribution/os_additem_placeholder.png)

When you look at an Outbound Shipment, you can see if a shipment line has not been allocated or has been partially allocated when it is higlighted in blue. 

![Alt Text](/docs/distribution/os_placeholderlines.png)

### Confirm Item and Quantity

When you are happy with the quantity, you can either click on:
* the `OK` button. You are redirected to the Outbound Shipment view and your item has been added to the list. 
* the `OK & Next` button to add another item right away
* the `Cancel` if you do not want to add the item to the Outbound Shipment anymore

## Editing an Outbound Shipment Line

To edit an shipment line, tap or click on it. You will be presented with the `Edit Item` window, which is identical to the `Add Item` window, except that the item is already chosen. 

### Edit a Shipment Line

<div class="note">
 <b></b> you can edit a shipment line if the shipment has a status lower than <code>Shipped</code>. 
</div>

1. Open the Outbound Shipment you want to edit. 
2. Tap on the line you want to edit. An identical window to `Add Item` appears. At this stage:

    *  Edit the main `Issue Quantity` field 
    *  or change the number of packs value at the batch number level

<div class="note">
 <b></b> When editing a shipment line, you cannot change the item. You would need to delete the shipment line and to create a new one. 
</div>

### Delete a shipment line

1. Open the Outbound Shipment you want to edit.
2. Select the line(s) you want to delete by checking the box(es) on the right of the list. 
3. Go to the `Actions` dropdown menu (top right corner, above the list)
4. Select the action `Delete selected lines`

![Alt Text](/docs/distribution/os_actions_deleteselectedlines.png)

<div class="imagetitle">
In below example, we are deleting <i>item 030063 - Acetylsalicylic Acid 100mg tabs</i>
</div>

![Alt Text](/docs/distribution/os_deleteselectedlines.gif)

<div class="note">
 <b></b> You can delete multiple lines at once. Be sure to review what is selected before performing the Delete action. 
</div>

## Issuing stock with an Outbound Shipment

### Allocating an Outbound Shipment

Allocation is the process of assigning one or multiple batch numbers from the inventory to a shipment line. In other words, you are assigning stock to your shipment. Once allocated, the stock is reserved for the shipment and thus for your customer. 

There are 2 main ways to allocate a shipment line: 

1. When adding items, system is automatically assigning stock to the new shipment line when you enter a quantity. If you don't have enough stock, system will add placeholder lines (unallocated lines). 

2. Bulk action `Allocate placeholder lines`: 
    * Select the lines that you want to allocate by checking boxes on the right on the list. 
    * In the `Actions` dropdown menu, select `Allocate placeholder lines`. System will check if there is available stock for each selected lines and allocate them using the First to Expire, First Out (FEFO) logic. A notification will let you know whether the operation is successful or not. 

<div class="note">
You won't be able to process your Outbound Shipment if you have unallocated lines (shipment lines without batch number(s) assigned to it). You can wait for more stock to arrive or you can delete the placeholder lines. 
</div>

### Confirming an Outbound Shipment's allocation

Once you all your shipments lines have been allocated, you can **confirm the allocation**:
* Current status of the shipment has to be `NEW`
* lines must be assigned with one or several batch numbers. You won't be able to confirm the allocation if your shipment contains lines without batch numbers assigned to it (placeholder lines). 

To confirm the allocation, click on the `Confirm Allocated` button. 

![Alt Text](/docs/distribution/os_confirmallocated.gif)

Once the allocation is confirmed:

* Shipment status is `ALLOCATED`
* You are now invited to confirm the picking via the `Confirm Picked` button
* All the items and their quantities will be reserved, meaning that they are no longer available for allocation. 
* You can print a **pick slip** to be sent to your warehouse so they can start preparing the shipment. 

### Confirming Outbound Shipment picking

Picking refers to the process where individual items are picked from a fulfillment facility (usually a warehouse or a pharmacy store).

Once a shipment has been allocated, next step is to go get the items to prepare the actual shipment. To help with that, you are able to generate a **pick slip** document. A pickslip indicates:
* what are the items to be picked
* the quantity and batch numbers for each item
* if you manage your inventory with storage locations, where the items are located. 

Once all items are picked and packed. You can then confirm the picking of the shipment to indicate to indicate that it is ready to be dispatched. 

To confirm that a shipment has been picked, click on the `Confirm Picked` button. 

![Alt Text](/docs/distribution/os_confirmpicked.gif)

Once picking is confirmed:

* Shipment status is now `PICKED`
* You are now invited to confirm the shipping via the `Confirm Shipped` button
* An **Inbound Shipment** has been generated and is now visible to your customer. 

At this stage, you are still able to edit shipment lines, to add items or to delete existing lines. However, if picking has been confirmed, you need to make sure to inform your fulfillment facility of any change so they can make sure that the shipment is still correct. 

### Confirming the Outbound Shipment shipping 

The last step to issue stock with an Outbound Shipment is to confirm that stock has been shipped. This a critical step cause when goods are confirmed as shipped, they are no longer part of your inventory records. 

To confirm that an Outbound Shipment has been shipped, click on the `Confirm Shipped` button. 

Once shipping has been confirmed: 
* Shipment status is now `SHIPPED`
* Goods are  no longer part of your inventory
* You can no longer edit shipment lines
* You can no longer delete the shipment
* You can print a **delivery note** or an **invoice**. 

### Tracking Progress of Outbound Shipments

If your customer is also using mSupply, you wil be able to see when they'll receive your shipments:
* status will become `DELIVERED` when goods are received. 
* status will become `VERIFIED` when shipment has been verified (or checked) by your customer. Goods are now part of their inventory.

