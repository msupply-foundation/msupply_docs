+++
title = "Inbound Shipments"
description = "Issuing stock to your customers."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Receiving stock from your suppliers"
toc = true
top = false
+++

Inbound Shipments can be used to receive stock from suppliers. 

If you used mSupply in the past, you may be familiar with the term **Supplier Invoice**. 

An Inbound Shipment can be:
* **Automatic**: when you are receiving from another store which is using mSupply
* **Manual**: when you are creating an Inbound Shipment *ad hoc*

## Viewing Inbound Shipments

### Go to the Inbound Shipments Menu

![Go to Inbound Shipments](/docs/replenishment/is_gotois.png)

To access the **Inbound Shipment** menu:
1. Go to the `Replenishment` menu in the navigation panel
2. Click on `Inbound Shipment`.

### List of Inbound Shipments

The Inbound Shipments list is divided into 6 columns: 

| Column| Description |
| :---------- | :---------- |
| **Name** | Name of the Customer | 
| **Status** | Current Status of the shipment | 
| **Number** | Reference Number of the shipment | 
| **Created** | Creation date of the shipment | 
| **Confirmed** | Confirm date of the shipment | 
| **Comment** | Comment for the shipment |
| **Total** | Total value of the shipment |

2. The list can display **20 shipments per page**. On the bottom left corner, you can how many shipments are currently displayed on your screen. 

![Page](/docs/distribution/os_list_showing.png)

3. If you have more than 20 shipments, you can navigate to the other pages by clicking on the page number or using the right of left arrows (bottom right corner). 

![Page](/docs/distribution/os_list_pagenumbers.png)

### Search by Supplier Name

You can filter the list of shipments by supplier name. This can be useful if you're looking for one particular shipment!

Type the name of a supplier in the `Search by name` field (on the left, just above the list headers). All the shipments for this supplier will appear in the list. 

### Exporting Inbound Shipments

[IN PROGRESS]

### Delete an Inbound Shipment

You can delete a shipment from the Outbound Shipment list.

1. Select the shipment that you want to delete by checking the box on the left end of the list. You can select more than one shipments to be deleted. You can even select them all using the master checkbox in the list headers.

1. Open the Select dropdown (top right corner, above the list) and select `Delete selected lines`.

A notification confirms how many shipments were deleted (bottom left corner).

<div class="note">
You can only delete Inbound Shipments with a status <code>NEW</code>.
</div>

## Creating a new manual Inbound Shipment

1. Go to `Replenishment`> `Inbound Shipment`
2. Press the `New Shipment` button, in the top right corner. 
3. A new window `Suppliers` opens, inviting you to select a supplier. 

### Select a Supplier

1. In the `Suppliers` window, you will be presented with a list of suppliers. You can select your supplier from the list or you can type as much of a supplier name. 

<div class="imagetitle">
In below example, we are receiving stock from <b>Tamaki Central Medical Store</b>. 
</div>

![Select a Supplier](/docs/replenishment/is_selectsupplier.gif)

2. Once you have selected a supplier, you Inbound Shipment is created. 

<div class="imagetitle">
If everything went well, you should see the name of your supplier in the top left corner and current status should be <code>SHIPPED</code>.
</div>

![New manual Inbound Shipment](/docs/replenishment/is_newinboundshipment.png)


<div class="note">
When you create a new manual Inbound Shipment, system assumes that shipment has already been shipped by the supplier and is on its way. That's why first status of a manual Inbound Shipment is always <code>SHIPPED</code>.
</div>

### Edit the Supplier Name

If you have selected the wrong supplier, you can change the supplier name in the `Supplier Name` field or select one the dropdown list: 

<div class="imagetitle">
In below example, we are replacing <b>Tamaki Central Medical Store</b> by <b>Waikato District Store</b>. 
</div>

![gif](/docs/replenishment/is_editsuppliername.gif)

### Enter a Supplier Reference

Once your Inbound Shipment has been created, you can capture a supplier reference in the `Supplier Ref` field, if they have one (eg. *PO#1234567*)

### View or edit the Inbound Shipment Information Panel

The Information Panel allows you see or to edit information about the Inbound Shipment. It is divided in multiple sections: 
* Additional 
* Related Documents
* Invoice Details
* Transport Details

<div class="oms">
We are planning to add more sections in the future as Open mSupply grows. 
</div>

#### How to open and close the Information Panel ?

To open the Information Panel, you can tap on the `More` button, located in the top right corner of the Inbound Shipment view. 

You can close by tapping on the `X Close` button, on the top right corner of the information panel. 

![Open and close the Information Panel](/docs/distribution/os_infopanel_openclose.gif)

#### Additonal Info

In the **Additional Info** section, you can:
* see who created the Inbound Shipment (name of the user)
* view and edit the Inbound Shipment color. To edit the color, tap on the colored circle and select a color from the 
* Write or edit a comment

#### Related Documents

In the **Related Documents** section, you can see other related transaction document for the Inbound Shipment. 

If your Inbound Shipment was created to fulfill a **Internal Order**, the reference number of your order would appear in this section. 

In the future, we would also include other documents such as temperature records, transportation documents or pickslips. 

#### Invoice Details

In this section, you will see by default the total cost price of the items listed in the Inbound Shipment. 

You can also add a **Service charges** if you wish to add other charges such as Freight Costs. To add a Service charges to the Invoice Details: 

1. Tap on the `Edit Service Charges` button. A new window opens. 
2. Tap on the `Add charge` button on the new window. A new line appears in the list of charges. You tap on ``Cancel` if you do not wish to add anything. 
3. **Name:** select a service charges in the dropdown list. You can customise the list of available charges. Contact your administrator. 
4. **Comment:** you can add a comment to provide further details about the new charge. 
5. **Amount:** enter the amount of the charge. 
6. **Tax:** enter a % of tax for the charge. 
7. **Total:** The total field is automatically calculated based on the Amount and the Tax percentage. 
8. **Delete:** you can tap on the `Delete` icon to delete the charge.  

In this section, you can also edit the tax rate (%) for the cost price. Tap on the pencil icon and enter 

#### Transport Details

In this section, you can see or edit a transport reference number (eg. a booking or a tracking reference number). 

### Inbound Shipment Status Sequence

The status sequence is located at the bottom left corner of the Inbound Shipment screen. 

Passed statuses are hightlighted in blue, next statuses appear in grey. 

<figure>
<img src="/docs/distribution/os_statussequence2.png" alt="Trulli" style="width:100%">
<figcaption align = "center">Status Sequence: current status is <code>NEW</code>.</figcaption>
</figure>

<figure>
<img src="/docs/distribution/os_statussequence3.png" alt="Trulli" style="width:100%">
<figcaption align = "center">Status Sequence: current status is </i><code>PICKED</code>.</figcaption>
</figure>

There are 6 status for the Inbound Shipment: 

| Status | Description |
| :--- | ---------- |
| **New** | This is the first status when you create a new manual Inbound Shipment. |
| **Allocated** | Allocation was confirmed by the supplier |
| **Picked** | Supplier has confirmed that shipment is picked and ready to ship.  |
| **Shipped** | Shipment has been shipped and goods are now in transit. |
| **Delivered** | When you confirm that the shipment has been delivered |
| **Verified** | When you have verified the inbound shipment. |

if you hover over the status sequence, a shipment history window appears. You can see the date when a shipment was updated from one status to another. 

<div class="imagetitle">
This shipment has been created, allocated and picked on 29/03/2022
</div>

![](/docs/distribution/os_statussequence_hover.png)

### Hold checkbox

Located on the bottom left corner, on the left of the status sequence. 

Check the `Hold` checkbox prevents the Inbound Shipment from being updated to the next status. 

![](/docs/distribution/os_holdcheckbox.png)

### Cancel and Confirm button

#### Cancel Button

Click on the `Cancel` button to quit the Inbound Shipment view and return to the Inbound Shipments list. 

#### Confirm Button

The `Confirm` button is the button to update the status of a shipment. Depending on the current status, you won't confirm the same thing. 

When managing an Inbound Shipment, you can only confirm it as Delivered or Verified. 

| Confirm... | Current Status | Next Status |
| :---------- | :---------- | :---------- |
| **Confirm Delivered** | Shipped | Delivered|
| **Confirm Verified** | Delivered | Verified|

You don't have to update a shipment to next status in the sequence. You can choose to skip some of them to go directly to `Confirm Verified` for example.

As demonstrated below, tap on the down arrow of the `Confirm` button and select the status you want the shipment to be updated to. 

![Skip Status](/docs/distribution/os_confirmbutton_skipstatuses.gif)

## Adding items to an Inbound Shipment

Oh la la 


## Editing an Inbound Shipment line

## Receiving stock with an Inbound Shipment





