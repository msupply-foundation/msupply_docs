+++
title = "Inbound Shipments"
description = "Receiving stock from suppliers."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Inbound Shipments can be used to receive stock from suppliers. 

If you have used mSupply in the past, you may be familiar with the term **Supplier Invoice** instead of Inbound Shipment. 

All received goods should be recorded in mSupply either by: 
* Manually creating an Inbound Shipment (manual Inbound Shipment)
* Working with an Inbound Shipment that has been created automatically as a result of a stock transfer from another store in your mSupply

## Viewing Inbound Shipments

### Go to the Inbound Shipments Menu

![Go to Inbound Shipments](/docs/replenishment/images/is_gotois.png)

To access the **Inbound Shipment** menu:
1. Go to the `Replenishment` menu in the navigation panel
2. Click on `Inbound Shipment`

### Inbound Shipments list

First thing you see is a list of existing Inbound Shipments. 

The Inbound Shipments list is divided into 7 columns: 

| Column| Description |
| :---------- | :---------- |
| **Name** | Name of the Customer | 
| **Status** | Current Status of the shipment | 
| **Number** | Reference Number of the shipment | 
| **Created** | Creation date of the shipment | 
| **Confirmed** | Confirmation date of the shipment | 
| **Comment** | Comment for the shipment |
| **Total** | Total value of the shipment |

2. The list can display **20 shipments per page**. On the bottom left corner, you can how many shipments are currently displayed on your screen. 

![Page](/docs/distribution/images/os_list_showing.png)

3. If you have more than 20 shipments, you can navigate to the other pages by clicking on the page number or using the right of left arrows (bottom right corner). 

![Page](/docs/distribution/images/os_list_pagenumbers.png)

### Search by Supplier Name

You can filter the list of shipments by supplier name. This can be useful if you're looking for one particular shipment!

Type the name of a supplier in the `Search by name` field (on the left, just above the list headers). All the shipments for this supplier will appear in the list. 

### Exporting Inbound Shipments

The list of Inbound Shipments can be exported to a comma separated file (csv). Simply click the export button (on the right, at the top of the page)

![Export button](/docs/distribution/images/export.png)

and the file will be downloaded. The export function will download all Inbound Shipments, not just the current page, if you have more than 20 of them. Shipments are exported using sort order selected in the table, though of course you could easily sort the list in Excel or whatever you open the .csv file with!

### Delete an Inbound Shipment

You can delete a shipment from the Inbound Shipment list.

1. Select the shipment that you want to delete by checking the box on the left end of the list. You can select more than one shipments to be deleted. You can even select them all using the master checkbox in the list headers.

1. Open the Select dropdown (top right corner, above the list) and select `Delete selected lines`.

A notification confirms how many shipments were deleted (bottom left corner).

<div class="note">
You can only delete Inbound Shipments with a status <code>NEW</code>.
</div>

## Creating a new manual Inbound Shipment

1. Go to `Replenishment`> `Inbound Shipment`
2. Press the `New Shipment` button, in the top right corner
3. A new window `Suppliers` opens, inviting you to select a supplier

### Select a Supplier

1. In the `Suppliers` window, you will be presented with a list of suppliers. You can select your supplier from the list or you can type as much of a supplier name. 

<div class="tip">
You can tell if a supplier is also using mSupply in their store. If they do, you will see icon like this (<img src="/docs/replenishment/is_msupplystoreicon.png" alt="Store" style="width:auto">) next to the supplier code. 
</div>

<div class="imagetitle">
In below example, we are receiving stock from <b>Tamaki Central Medical Store</b>. 
</div>

![Select a Supplier](/docs/replenishment/images/is_selectsupplier.gif)

2. Once you have selected a supplier, you Inbound Shipment is created. 

<div class="imagetitle">
If everything went well, you should see the name of your supplier in the top left corner and current status should be <code>SHIPPED</code>.
</div>

![New manual Inbound Shipment](/docs/replenishment/images/is_newinboundshipment.png)


<div class="note">
When you create a <b>new</b> manual Inbound Shipment, mSupply assumes that shipment has already been shipped by the supplier and is coming your way. <br /> That's why first status of a manual Inbound Shipment is always <code>SHIPPED</code>.
</div>

### Edit the Supplier Name

If you have selected the wrong supplier, you can change the supplier name in the `Supplier Name` field or select one the dropdown list: 

<div class="imagetitle">
In below example, we are replacing <b>Tamaki Central Medical Store</b> by <b>Waikato District Store</b>. 
</div>

![gif](/docs/replenishment/images/is_editsuppliername.gif)

### Enter a Supplier Reference

Once your Inbound Shipment has been created, you can capture a supplier reference in the `Supplier Ref` field, if they have one (eg. * PO#1234567 *)

### View or edit the Inbound Shipment Information Panel

The Information Panel allows you see or to edit information about the Inbound Shipment. It is divided in multiple sections: 
* Additional Info
* Related Documents
* Invoice Details
* Transport Details

<div class="omsupdate">
We are planning to add more sections in the future as Open mSupply grows. 
</div>

#### How to open and close the Information Panel ?

To open the Information Panel, you can tap on the `More` button, located in the top right corner of the Inbound Shipment view. 

You can close by tapping on the `X Close` button, on the top right corner of the information panel. 

![Open and close the Information Panel](/docs/replenishment/images/is_infopanel_openclose.gif)

#### Additonal Info

In the **Additional Info** section, you can:
* See who created the Inbound Shipment (name of the user)
* View and edit the Inbound Shipment color. To edit the color, tap on the colored circle and select a color from the pop-up
* Write or edit a comment

#### Related Documents

In the **Related Documents** section, you can see other related transaction document for the Inbound Shipment. 

If your Inbound Shipment was created to fulfill a **Internal Order**, the reference number of your order would appear in this section. 

In the future, we would also include other documents such as temperature records, transportation documents or pickslips. 

#### Invoice Details

In this section, you will see by default the total cost price of the items listed in the Inbound Shipment. 

You can also add a **Service charges** if you wish to add other charges such as Freight Costs. To add a Service charges to the Invoice Details: 

1. Tap on the `Edit Service Charges` button. A new window opens. 
2. Tap on the `Add charge` button on the new window. A new line appears in the list of charges. You tap on `Cancel` if you do not wish to add anything. 
3. **Name:** select a service charges in the dropdown list. You can customise the list of available charges. Contact your administrator. 
4. **Comment:** You can add a comment to provide further details about the new charge
5. **Amount:** Enter the amount of the charge
6. **Tax:** Enter a % of tax for the charge
7. **Total:** The total field is automatically calculated based on the Amount and the Tax percentage
8. **Delete:** You can tap on the `Delete` icon to delete the charge

In this section, you can also edit the tax rate (%) for the cost price. Tap on the pencil icon and enter 

#### Transport Details

In this section, you can see or edit a transport reference number (eg. a booking or a tracking reference number). 

### Inbound Shipment Status Sequence

The status sequence is located at the bottom left corner of the Inbound Shipment screen. 

Passed statuses are hightlighted in blue, next statuses appear in grey. 

<figure>
    <img src="/docs/replenishment/is_statussequence2.png" alt="Inbound Shipment Status Sequence (New)" style="width:100%">
    <figcaption align="center">Status Sequence: current status is <code>New</code>.</figcaption>
</figure>

<figure>
    <img src="/docs/replenishment/is_statussequence3.png" alt="Inbound Shipment Status Sequence (Shipped)" style="width:100%">
    <figcaption align="center">Status Sequence: current status is </i><code>Shipped</code>.</figcaption>
</figure>

There are 5 status for the Inbound Shipment: 

| Status | Description |
| :--- | ---------- |
| **New** | This is the first status when you create a new manual Inbound Shipment |
| **Picked** | Supplier has confirmed that shipment is picked and ready to ship  (applies only to automatically created shipments) |
| **Shipped** | Shipment has been shipped and goods are now in transit (applies only to automatically created shipments) |
| **Delivered** | When you confirm that the shipment has been delivered |
| **Verified** | When you have verified the inbound shipment |

You probably noticed that two of the status values only apply to automatically created shipments. These are created by the system when another store in the system creates an Outbound Shipment to deliver stock to your store. If this is the case you'll see a message near the top of the page:

![Automatic IS message](/docs/replenishment/images/is_message_automatic.png)

If, however, you've created an Inbound Shipment manually, then the following message shows:

![Manual IS message](/docs/replenishment/images/is_message_manual.png)

and you'll see that the status bar has only the status values which apply to this type of shipment.

<figure align="center">
    <img src="/docs/replenishment/is_statussequence4.png" alt="Inbound Shipment Status Sequence (New & manual)" style="width:60%">
    <figcaption align="center">Status Sequence: current status is </i><code>New</code>.</figcaption>
</figure>

If you hover over the status sequence, a shipment history window appears. You can see the date when a shipment was updated from one status to another. 

<div class="imagetitle">
This manual shipment has been created on 03/03/2022
</div>

![Inbound status: hover 2](/docs/replenishment/images/is_statussequence_hover2.png)

<div class="imagetitle">
This automatic shipment has been created on 03/03/2022, allocated on 04/03/2022 and picked on 07/03/2022
</div>

![Inbound status: hover](/docs/replenishment/images/is_statussequence_hover.png)


### Hold checkbox

Located on the bottom left corner, on the left of the status sequence. 

Check the `Hold` checkbox prevents the Inbound Shipment from being updated to the next status. 

![Outbound hold checkbox](/docs/distribution/images/os_holdcheckbox.png)

### Cancel and Confirm button

#### Cancel Button

Click on the `Cancel` button to quit the Inbound Shipment view and return to the Inbound Shipments list. 

#### Confirm Button

The `Confirm` button is the button to update the status of a shipment. The status which you can confirm depends on the current status of the shipment and follows the sequence shown below.

When managing an Inbound Shipment, you can only confirm it as Delivered or Verified. 

| Confirm... | Current Status | Next Status |
| :---------- | :---------- | :---------- |
| **Confirm Delivered** | Shipped | Delivered|
| **Confirm Verified** | Delivered | Verified|

You don't have to update a shipment to next status in the sequence. You can choose to skip some of them to go directly to `Confirm Verified` for example.

As demonstrated below, tap on the down arrow of the `Confirm` button and select the status you want the shipment to be updated to. 

![Skip Status](/docs/replenishment/images/is_skipstatus.gif)

## Adding lines to an Inbound Shipment

To add a line, tap on the `Add Item` button located in the top left corner of your screen. 

A new `Add Item` window opens. 

![Inbound: add item button](/docs/replenishment/images/is_additem_button.png)

### Select an Item

In the `Add Item` window, you can look up an item by:
* Reading through the list of available items
* or by typing some or all of an item name
* or by typing some or all of an item code

Once your item is highlighted, tap on the name or press `Enter`.

![Add Item](/docs/distribution/images/os_additem.gif)


### Quantities tab

In the `Quantities` tab, you can update the following fields: 
1. **Batch**: Type here the batch number. Leave blank if item is not managed with batch number.
2. **Expiry**: The expiry date of the batch number. Leave blank is not applicable
3. **# Packs**: The quantity of packs you are receiving
4. **Pack Size**: The quantity of units per pack (by default, pack size is 1)
5. **Unit Qty** (read-only): Automatically calculated based on # Packs and Pack Size (`[# Packs] x [Pack Size]`)
6. If you are receiving more than one batch number for the same item, you can tap on the `Add Batch` button

<div class="imagetitle">
In below example, we are receiving 2 batch numbers for item <i>030453 - Amoxicillin 250mg tabs</i> with a different pack size. 
</div>

![Add Item quantities](/docs/replenishment/images/is_additem_quantities.png)

### Pricing tab

On the second tab, `Pricing`, you can update the following fields (all are optional): 
* **Sell**: The selling unit price of the item  (default value is 0)
* **Cost**: The purchasing unit price of the item (default value is 0)
* **Unit Qty** (read-only): Total number of units for the batch number
* **Line Total** (read-only): Total purchasing value for the batch number (`[Unit Qty] x [Cost]`) 

<div class="warning">
Sell & Cost prices are per units and not per pack. 
</div>

<div class="imagetitle">
In below example, sell price $12 per unit and cost price is $10 per unit. 
</div>

![Add Item pricing](/docs/replenishment/images/is_additem_pricing.png)

### Location tab

In the third tab, `Location`, you can select a storage location to assign the batch number to a location in your storage facility. 

Simply select a storage location from the `Location` dropdown menu.

![Add Item location](/docs/replenishment/images/is_additem_location.png)

<div class="note">
Don't know the storage location yet ? You don't have to capture it right away. You can update the storage location at any time if you haven't confirmed the verification yet. 
</div>

### Confirm item and quantities

When you're done, you can add the new line by tapping on:
* `OK`if you don't want to add another line to your shipment
* `OK & Next`if you have other lines to create

Otherwise, you can tap on `Cancel` and your changes won't be saved. 


## Editing an Inbound Shipment line

To edit an Inbound Shipment line, simply tap on it. You will be presented with the `Edit Item` window, which is identical to the `Add Item` window, except that the item is already chosen and cannot be modified. 

### Edit a Shipment Line

<div class="note">
 <b></b> you can edit a shipment line if the shipment has a status higher lower than <code>VERIFIED</code>. 
</div>

1. Open the Inbound Shipment you want to edit
2. Tap on the line you want to edit. An identical window to `Add Item` appears. At this stage:

    *  Edit the main `Issue Quantity` field 
    *  or change the number of packs value at the batch number level

<div class="note">
 <b></b> When editing a shipment line, you cannot change the item. You would need to delete the shipment line and to create a new one. 
</div>

### Delete a Shipment line

1. Open the Inbound Shipment that you would like to edit
2. Make sure that status is not yet `VERIFIED`
2. Select the line(s) you want to delete by checking the box(es) on the right of the list
3. Go to the `Actions` dropdown menu (top right corner, above the list)
4. Select the action `Delete selected lines`

![Alt Text](/docs/distribution/images/os_actions_deleteselectedlines.png)

<div class="imagetitle">
In below example, we are deleting <i>item 030063 - Acetylsalicylic Acid 100mg tabs</i>
</div>

![Alt Text](/docs/distribution/images/os_deleteselectedlines.gif)

<div class="tip">
You can delete multiple lines at once. Be sure to review what is selected before performing the Delete action. 
</div>


## Receiving stock with an Inbound Shipment

### Confirm the delivery of the shipment

Whether your Inbound Shipment is **manual** or **automatic**, the first step to receive the goods is to confirm the delivery. 

At this stage, you don't have to check if quantities or other information are correct, you just have to acknowledge that you have received the goods from your supplier. 

To confirm that an Inbound Shipment has been delivered, click on the `Confirm Delivered` button. 

<div class="note">
In case your Inbound Shipment is <b>automatic</b>, you cannot confirm its delivery unless the supplier has confirmed its shipment. In other words, your shipment status has to be <code>SHIPPED</code> before you can confirm that you have received the goods. 
</div>

### Verify your Inbound Shipment

Verification is the last step to receive goods in mSupply. At this stage, you can check what you have received and make sure that that information in mSupply are correct. 

You have the possibility to verify the following information: 
* Batch numbers and their expiry dates
* Quantity of packs and pack size 
* Pricing information: cost and sell prices

You can also capture where received goods are to be stored in the `Location` tab. 

Once all information have been captured or verified, you can confirm the Shipment as `VERIFIED` by tapping on the `Confirm Verified` button. 

Once you have done this:
* Goods are now part of your inventory
* Shipment status is now `VERIFIED`
* You can no longer edit shipment lines
* You can no longer delete the shipment

## Viewing an Inbound Shipment

When viewing a specific shipment, you can view the batches on that shipment grouped by item or with each batch listed separately.
To change the view mode, click the `Group by item` switch. 

When grouped by item, you can expand the item to see individual batches, or use the expand in the table header to expand all grouped rows. If you click on an item you will also see all selected batches, as shown in this example:

![Group by Item](/docs/replenishment/images/is_group_by_item.gif)