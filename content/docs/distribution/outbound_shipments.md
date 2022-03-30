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
* Transfer stock to another store using mSupply
* Issue stock to a customer
* Fulfill requisitions (customer orders)

To access the **Outbound Shipment** menu, press the **Distribution** menu in the navigation panel. 

![gotooos](/docs/distribution/gotoos2.png)

## <span class="headers">Creating a new Outbound Shipment</span>

1. Go to <mark class="hl">Distribution</mark> > <mark class="hl">Outbound Shipment</mark>

2. Press the  <mark class="hl">New Shipment</mark> button, in the top right corner

![New Shipment](/docs/distribution/clicknewshipment.png)

3. A new window opens, inviting you to select a customer. 

### <span class="headers">Select a Customer</span>

1. In the new window, you will be presented with a list of available customers. You can select your customer from the list or you can type as much of a customer name

<div class="imagetitle">
In below example, we are issuing stock to Kopu Health Center. 
</div>

![gif](/docs/distribution/os_select_customer.gif)

2. Once you tap or press <mark class="hl">Enter</mark>, your Outbound Shipment is automatically created.  

    If everything went well, you should see the name of your customer in the top left corner and the status should be <mark class="hl">New</mark> 

![](/docs/distribution/os_created.png)

### <span class="headers">Edit the Customer Name</span>

If you have selected the wrong customer, you can always type another name in the <mark class="hl">Customer Name</mark> field or select one the dropdown list: 

![gif](/docs/distribution/os_change_customer.gif)

### <span class="headers">Enter a Customer Reference</mark>

Once your Outbound Shipment has been created, you can enter a customer reference in the <mark class="hl">Customer Ref</mark> field, if they have one (eg. *PO#1234567*)

### <span class="headers">View or edit the Outbound Shipment Information Panel</mark>

The Information Panel allows you see or to edit information about the Outbound Shipment. It is divided in multiple sections: 
* Additional Info
* Related Documents
* Invoice Details
* Transport Details

We are planning to add more sections in the future as Open mSupply grows. 

#### <span class="headers">How to open and close the Information Panel ?</span>

To open the Information Panel, you can tap on the <mark class="hl">More</mark> button, located in the top right corner of the Outbound Shipment view. 

You can close by tap on the <mark class="hl">X Close</mark> button, on the top right corner of the information panel. 

![Open and close the Information Panel](/docs/distribution/os_infopanel_openclose.gif)

#### <span class="headers">Additonal Info</span>

In the **Additional Info** section, you can:
* see who created the Outbound Shipment (name of the user)
* view and edit the Outbound Shipment color. To edit the color, tap on the colored circle and select a color from the 
* Write or edit a comment

#### <span class="headers">Related Documents</span>

In the **Related Documents** section, you can see other related transaction document for the Outbound Shipment. 

If your Outbound Shipment was created to fulfill a **Requisition**, the reference number of the requisition would appear in this section. 

In the future, we would also include other documents such as temperature records, transportation documents or pickslips. 

#### <span class="headers">Invoice Details</span>

In this section, you will see by default the total selling price of the items listed in the Outbound Shipments. 

You can also add a **Service charges** if you wish to add other charges such as Freight Costs. To add a Service charges to the Invoice Details: 

1. Tap on the <mark class="hl">Edit Service Charges</mark> button. A new window opens. 
2. Tap on the <mark class="hl">Add charge</mark> button on the new window. A new line appears in the list of charges. You tap on `<mark class="hl">Cancel</mark> if you do not wish to add anything. 
3. **Name:** select a service charges in the dropdown list. You can customise the list of available charges. Contact your administrator. 
4. **Comment:** you can add a comment to provide further details about the new charge. 
5. **Amount:** enter the amount of the charge. 
6. **Tax:** enter a % of tax for the charge. 
7. **Total:** The total field is automatically calculated based on the Amount and the Tax percentage. 
8. **Delete:** you can tap on the <mark class="hl">Delete</mark> icon to delete the charge.  

In this section, you can also edit the tax rate (%) for the items sell price. Tap on the pencil icon and enter 

#### <span class="headers">Transport Details</span>

In this section, you can see or edit a transport reference number (eg. a booking or a tracking reference number). 

### <span class="headers">Group by Item toggle</span>

You can easily change the view of an Outbound Shipment by tapping on the <mark class="hl">Group by Item</mark>

### <span class="headers">Outbound Shipment Status Sequence</span>

The status sequence is located at the bottom left corner of the Outbound Shipment screen. 

Passed statuses are hightlighted in blue, next statuses appear in grey. 

<figure>
<img src="/docs/distribution/os_statussequence2.png" alt="Trulli" style="width:100%">
<figcaption align = "center"><i>Status Sequence. Current Status is "New".</i></figcaption>
</figure>

<figure>
<img src="/docs/distribution/os_statussequence3.png" alt="Trulli" style="width:100%">
<figcaption align = "center"><i>Status Sequence. Current Status is "Picked".</i></figcaption>
</figure>

There are 6 statuses: 

| Status | Description |
| :--- | ---------- |
| **New** | This is the first status when you create a shipment |
| **Allocated** | Allocation is confirmed. Goods are no longer available for other shipments but are still part of your inventory. |
| **Picked** | Shipment is picked and is now ready to ship. Goods are still part of your inventory. |
| **Shipped** | Shipment has been shipped and goods are no longer part of your inventory. |
| **Delivered** | Your customer has received the shipment. |
| **Verified** | Your customer has verified the quantity of the shipment. Goods are now part of their inventory. |

if you hover over the status sequence, a shipment history window appears. You can see the date when a shipment was updated from one status to another. 

![](/docs/distribution/os_statussequence_hover.png)

### <span class="headers">Hold checkbox</span>

Located on the bottom left corner, on the left of the status sequence. 

Check the <mark class="hl">Hold</mark> checkbox prevents the Outbound Shipment from being updated to the next status. 

![](/docs/distribution/os_holdcheckbox.png)

### <span class="headers">Cancel and Confirm button</span>

#### <span class="headers">Cancel Button</span>

Click on the <mark class="hl">Cancel</mark> button to quit the Outbound Shipment view and return to the Outbound Shipments list. 

#### <span class="headers">Confirm Button</span>

The <mark class="hl">Confirm</mark> button is the button to update the status of a shipment. Depending on the current status, you won't confirm the same thing. 

When managing an Outbound Shipment, you can only confirm the Allocation, the Picking and the Shipment. 

| Confirm... | Current Status | Next Status |
| :---------- | :---------- | :---------- |
| **Confirm Allocated** | New | Allocated|
| **Confirm Picked** | Allocated | Picked|
| **Confirm Shipped** | Picked | Shipped |

You don't have to update a shipment to next status in the sequence. You can choose to skip some of them to go directly to <mark class="hl">Confirm Shipped</mark> for example.

As demonstrated below, tap on the down arrow of the <mark class="hl">Confirm</mark> button and select the status you want the shipment to be updated to. 

![Skip Status](/docs/distribution/os_confirmbutton_skipstatuses.gif)

## <span class="headers">Adding items to an Outbound Shipment</span>

Tap on the <mark class="hl">Add Item</mark> button (top right corner). 

A new window opens. 

![Add Item button](/docs/distribution/additembutton.png)

### <span class="headers">Select an Item</span>

In the <mark class="hl">Add Item</mark> window, you can look up an item by:
* reading through the list of available items
* or by typing as much of an item name
* or by typing as much of an item code

Once your item is highligthed, tap on the name or press <mark class="hl">Enter</mark>.

![Alt Text](/docs/distribution/os_additem.gif)

Once the item is selected, you can see the following information: 

#### <span class="headers">Headers</span>

![add item headers](/docs/distribution/additem_headers.png)

* Item code and name (eg. *030453 Amoxicillin 250 mg Tabs*)
* the available stock quantity for this item (eg. *3527 units*)
* the item's unit (eg. *Tab*)

> ***Example:*** For the item *030453 - Amoxicillin 250mg tabs*, there are 3527 tabs available. 

#### <span class="headers">Issue <mark class="hl">Quantity</mark> of units in packs of <mark class="hl">Pack Size</mark></span>

![](/docs/distribution/os_issuequantityinunits.png)

In the <mark class="hl">Issue Quantity</mark> field, you can enter the quantity that you want to issue to your customer. 

By default, you are invited to issue a quantity of **units**. However, you have the possibility to issue a quantity of packs instead by changing the value in the dropdown<mark class="hl">Pack Size</mark>. Default value is <mark class="hl">Any</mark>. 

#### <span class="headers">List of available batches:</span>

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

### <span class="headers">Issue a quantity of units</span>

By default, you are invited to issue a quantity of **units**, regardless of the pack size (number of units in a pack). 

When entering a number in the <mark class="hl">Issue Quantity</mark> field, system automatically chooses the batch number(s) with the shortest expiry date (First to Expire, First Out or FEFO logic). 

<div class="imagetitle">
In below example, we are issuing 100 units of the item. All 100 units will be taken from the same batch (second row). First batch was not selected because it is expired. 
</div>

![additem!](/docs/distribution/os_additem_issueunits.png)

<div class="imagetitle">
In this other example, we are issuing 1200 units. System selects two batches with different pack sizes. 
</div>

![additem!](/docs/distribution/os_additem_issueunitstwobatches.png)

### <span class="headers">Issue a quantity of packs</span>

You can decide to issue a quantity of **packs**. To do this, you can change the value in the <mark class="hl">Pack Size</mark> dropdown. 

<div class="imagetitle">
Let's imagine that your customer only wants pack size of 12 units. You can change the dropdown value from <mark class="hl">Any</mark> to <mark class="hl">12</mark>. 
</div>

![Alt Text](/docs/distribution/os_additem_switchtopack.gif)

You are now offered to issue a number of packs of 12 units. Only batch number(s) with a pack size of 12 units can be automatically issued.

<div class="imagetitle">
In below example, we are issuing 10 packs of 12 units:
</div>

![additem!](/docs/distribution/os_additem_issuepacks.png)

<div class="impt">
<b>Note:</b> if you had previously entered a quantity of units and you switch to a quantity a packs, the quantity of units will automatically be converted into the correct quantity of packs.  
![Alt Text](/docs/distribution/os_issuepacks.gif)
</div>

### <span class="headers">Manual Allocation </span>

Regardless if you chose to issue a quantity of units or packs, you can always manually change the quantity at the batch number level directly before clicking on OK. 

You simply have to enter or edit the quantity in the <mark class="hl"># Packs</mark> column. 

The main <mark class="hl">Issue Quantity</mark> field will be automatically updated with the new quantity.  

<div class="impt">
 <b>Note:</b> when allocating quantities at the batch number level, the quantity you enter is always a quantity of packs. 
</div>

<figure>
<img src="/docs/distribution/os_additem_manualallocation.gif" alt="Trulli" style="width:100%">
<figcaption align = "center"><i>Manual allocation at the batch number level.</i></figcaption>
</figure>

### <span class="headers">Confirm Item and Quantity</span>

When you are happy with the quantity, you can either click on:
* the <mark class="hl">OK</mark> button. You are redirected to the Outbound Shipment view and your item has been added to the list. 
* the <mark class="hl">OK & Next</mark> button to add another item right away
* the <mark class="hl">Cancel</mark> if you do not want to add the item to the Outbound Shipment anymore

## <span class="headers">Editing an Outbound Shipment Line</span>

To edit an shipment line, tap or click on it. You will be presented with the <mark class="hl">Edit Item</mark> window, which is identical to the <mark class="hl">Add Item</mark> window, except that the item is already chosen. 

### <span class="headers">Edit a Shipment Line</span>

<div class="impt">
 <b>Note:</b> you can edit a shipment line if the shipment has a status lower than <mark class="hl">Shipped</mark>
</div>

1. Open the Outbound Shipment you want to edit. 
2. Tap on the line you want to edit. An identical window to <mark class="hl">Add Item</mark> appears. At this stage:

    *  Edit the main <mark class="hl">Issue Quantity</mark> field 
    *  or change the number of packs value at the batch number level

<div class="impt">
 <b>Note:</b> When editing a shipment line, you cannot change the item. You would need to delete the shipment line and to create a new one. 
</div>

### <span class="headers">Delete a shipment line</span>

1. Open the Outbound Shipment you want to edit.
2. Select the line(s) you want to delete by checking the box(es) on the right of the list. 
3. Go to the <mark class="hl">Actions</mark> dropdown menu (top right corner, above the list)
4. Select the action <mark class="hl">Delete selected lines</mark>

![Alt Text](/docs/distribution/os_actions_deleteselectedlines.png)

<div class="imagetitle">
In below example, we are deleting <i>item 030063 - Acetylsalicylic Acid 100mg tabs</i>
</div>

![Alt Text](/docs/distribution/os_deleteselectedlines.gif)

<div class="impt">
 <b>Note:</b> You can delete multiple lines at once. Be sure to review what is selected before performing the Delete action. 
</div>
