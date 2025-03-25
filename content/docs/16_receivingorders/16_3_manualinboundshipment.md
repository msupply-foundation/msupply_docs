+++
title = "Create Manual Inbound Shipment"
description = "Inbound Shipments"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 203
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Creating a new manual Inbound Shipment

1. Go to `Replenishment`> `Inbound Shipment`
2. Press the `New Shipment` button, in the top right corner
3. A new window `Suppliers` opens, inviting you to select a supplier

### Select a Supplier

1. In the `Suppliers` window, you will be presented with a list of suppliers. You can select your supplier from the list or you can type as much of a supplier name as you want.

<div class="tip">
You can tell if a supplier is also using Open mSupply in their store. If they do, you will see icon like this <img src="/docs/replenishment/images/is_msupplystoreicon.png" alt="Store" style="width:auto"> next to the supplier code. 
</div>

<div class="imagetitle">
In the below example, we are receiving stock from <b>Tamaki Central Medical Store</b>. 
</div>

![Select a Supplier](/docs/replenishment/images/is_selectsupplier.gif)

2. Once you have selected a supplier, your Inbound Shipment is created.

<div class="imagetitle">
If everything went well, you should see the name of your supplier in the top left corner and current status should be <code>New</code>.
</div>

![New manual Inbound Shipment](/docs/replenishment/images/is_newinboundshipment.png)

### Edit the Supplier Name

If you have selected the wrong supplier, you can change the supplier name in the `Supplier Name` field or select one the dropdown list:

<div class="imagetitle">
In the below example, we are replacing <b>Tamaki Central Medical Store</b> by <b>Waikato District Store</b>. 
</div>

![gif](/docs/replenishment/images/is_editsuppliername.gif)

### Enter a Supplier Reference

Once your Inbound Shipment has been created, you can capture a supplier reference in the `Supplier Ref` field, if they have one (eg. _ PO#1234567 _)

### View or edit the Inbound Shipment Information Panel

The Information Panel allows you see or to edit information about the Inbound Shipment. It is divided in multiple sections:

- Additional Info
- Related Documents
- Invoice Details
- Transport Details

<div class="omsupdate">
We are planning to add more sections in the future as Open mSupply grows. 
</div>

#### How to open and close the Information Panel ?

To open the Information Panel, you can tap on the `More` button, located in the top right corner of the Inbound Shipment view.

You can close by tapping on the `X Close` button, on the top right corner of the information panel.

![Open and close the Information Panel](/docs/replenishment/images/is_infopanel_openclose.gif)

#### Additonal Info

In the **Additional Info** section, you can:

- See who created the Inbound Shipment (name of the user)
- View and edit the Inbound Shipment color. To edit the color, tap on the colored circle and select a color from the pop-up
- Write or edit a comment

#### Related Documents

In the **Related Documents** section, you can see other related transaction document for the Inbound Shipment.

If your Inbound Shipment was created to fulfill a **Internal Order**, the reference number of your order would appear in this section.

In the future, we would also include other documents such as temperature records, transportation documents or pickslips.

#### Invoice Details

In this section, you will see by default the total cost price of the items listed in the Inbound Shipment.

You can also add a **Service charges** if you wish to add other charges such as `Freight Costs`. Note: Service charges must be in your Master List for you to use them. To add a Service charges to the Invoice Details:

1. Tap on the `Edit Service Charges` button. A new window opens.
2. Tap on the `Add charge` button on the new window. A new line appears in the list of charges. You tap on `Cancel` if you do not wish to add anything.
3. **Name:** select a service charges in the dropdown list. You can customise the list of available charges. Contact your administrator.
4. **Comment:** You can add a comment to provide further details about the new charge
5. **Amount:** Enter the amount of the charge
6. **Tax:** Enter a % of tax for the charge
7. **Total:** The total field is automatically calculated based on the Amount and the Tax percentage
8. **Delete:** You can tap on the `Delete` icon to delete the charge

The tax rate (%) for service charges and the items sell price can also be edited by clicking on the pencil icon. A pop-up window will appear for you to enter a value.

###### Foreign Currencies

If your store is issuing in foreign currencies follow [these instructions](https://docs.msupply.org.nz/other_stuff:currencies) in the central server documentation to set it up. You will also need to enable the store preference `Store: Able to issue in foreign currency`. This preference is compatible with Open mSupply `v1.7.0+`.

![Store preference](/docs/distribution/images/store-pref-issue-in-foreign-currencies.png)

The pen icon will become active once the above instructions have been followed and only if the customer is an external customer. Click on this icon and change to a currency that you would like to issue the shipment in. The currency rate can also be edited if you and the customer have agreed on a different rate.
![gif](/docs/replenishment/images/is-change-foreign-currency.gif)
You can also see the foreign currency totals in the invoice line details as well.
![Line with Foreign Currency Pricing](/docs/replenishment/images/is-line-with-foreign-currency.png)

<div class="tip">See the <a href="/docs/introduction/faq/#is-there-support-for-my-currency">currency support question</a> for the list of codes supported</div>

#### Transport Details

In this section, you can see or edit a transport reference number (eg. a booking or a tracking reference number).

#### Actions

1. **Delete:** You can tap on the `Delete` button to delete the invoice
2. **Copy to Clipboard**: You can tap on the `Copy to Clipboard` button to copy the invoice details to the clipboard.

### Inbound Shipment Status Sequence

The status sequence is located at the bottom left corner of the Inbound Shipment screen.

Passed statuses are hightlighted in blue, next statuses appear in grey.

<figure>
    <img src="/docs/replenishment/images/is_statussequence2.png" alt="Inbound Shipment Status Sequence (New)" style="width:100%">
    <figcaption align="center">Status Sequence: current status is <code>New</code>.</figcaption>
</figure>

<figure>
    <img src="/docs/replenishment/images/is_statussequence3.png" alt="Inbound Shipment Status Sequence (Shipped)" style="width:100%">
    <figcaption align="center">Status Sequence: current status is </i><code>Shipped</code>.</figcaption>
</figure>

There are 5 status for the Inbound Shipment:

| Status        | Description                                                                                                        |
| :------------ | ------------------------------------------------------------------------------------------------------------------ |
| **New**       | This is the first status when you create a new manual Inbound Shipment                                             |
| **Picked**    | Supplier has confirmed that shipment is picked and ready to ship (applies only to automatically created shipments) |
| **Shipped**   | Shipment has been shipped and goods are now in transit (applies only to automatically created shipments)           |
| **Delivered** | When you confirm that the shipment has been delivered                                                              |
| **Verified**  | When you have verified the Inbound Shipment                                                                        |

You probably noticed that two of the status values only apply to automatically created shipments. These are created by the system when another store in the system creates an Outbound Shipment to deliver stock to your store. If this is the case you'll see a message near the top of the page:

![Automatic IS message](/docs/replenishment/images/is_message_automatic.png)

Note that this message appears differently if the status is `Delivered` or `Verified`

![Automatic IS message: delivered](/docs/replenishment/images/is_message_automatic_delivered.png)

If, however, you've created an Inbound Shipment manually, then the following message shows:

![Manual IS message](/docs/replenishment/images/is_message_manual.png)

and you'll see that the status bar has only the status values which apply to this type of shipment.

<figure align="center">
    <img src="/docs/replenishment/images/is_statussequence4.png" alt="Inbound Shipment Status Sequence (New & manual)" style="width:60%">
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

![Inbound hold checkbox](/docs/distribution/images/os_holdcheckbox.png)

### Close and Confirm button

#### Close Button

Click on the `Close` button to quit the Inbound Shipment view and return to the Inbound Shipments list.

#### Confirm Button

The `Confirm` button is the button to update the status of a shipment. The status which you can confirm depends on the current status of the shipment and follows the sequence shown below.

When managing an Inbound Shipment, you can only confirm it as Delivered or Verified.

| Confirm...            | Current Status | Next Status |
| :-------------------- | :------------- | :---------- |
| **Confirm Delivered** | Shipped        | Delivered   |
| **Confirm Verified**  | Delivered      | Verified    |

You don't have to update a shipment to next status in the sequence. You can choose to skip some of them to go directly to `Confirm Verified` for example.

As demonstrated below, tap on the down arrow of the `Confirm` button and select the status you want the shipment to be updated to.

![Skip Status](/docs/replenishment/images/is_skipstatus.gif)

## Adding lines to an Inbound Shipment

To add a line, tap on the `Add Item` button located in the top left corner of your screen.

A new `Add Item` window opens.

![Inbound: add item button](/docs/replenishment/images/is_additem_button.png)

### Select an Item

In the `Add Item` window, you can look up an item by:

- Reading through the list of available items
- or by typing some or all of an item name
- or by typing some or all of an item code

Once your item is highlighted, tap on the name or press `Enter`.

![Add Item](/docs/distribution/images/os_additem.gif)

### Quantities tab

In the `Quantities` tab, you can update the following fields:

1. **Batch**: Type here the batch number. Leave blank if item is not managed with batch number.
2. **Expiry**: The expiry date of the batch number. Leave blank is not applicable
3. **Pack Qty**: The quantity of packs you are receiving
4. **Pack Size**: The quantity of units per pack (by default, pack size is 1)
5. **Unit Qty** (read-only): Automatically calculated based on # Packs and Pack Size (`[# Packs] x [Pack Size]`)
6. If you are receiving more than one batch number for the same item, you can tap on the `Add Batch` button

<div class="imagetitle">
In the below example, we are receiving 2 batch numbers for item <i>030063 - Acetylsalicylic Acid 100mg tabs</i> with a different pack size. 
</div>

![Add Item quantities](/docs/replenishment/images/is_additem_quantities.png)

### Pricing tab

On the second tab, `Pricing`, you can update the following fields (all are optional):

- **Batch** (read-only): Batch number
- **Pack Size** (read-only): The quantity of units per pack
- **Pack Qty** (read-only): The quantity of packs you are receiving
- **Cost**: The purchasing unit price of the item (default value is 0)
- **Pack Sell Price**: The selling unit price of the item (default value is 0)
- **Line Total** (read-only): Total purchasing value for the batch number (`[Pack Qty] x [Cost]`)

<div class="warning">
Sell & Cost prices are per units and not per pack. 
</div>

<div class="imagetitle">
In the below example, the first line's cost price is $0.01 per unit and the sell price $0.10 per unit. 
</div>

![Add Item pricing](/docs/replenishment/images/is_additem_pricing.png)

### Location tab

In the third tab, `Location`, you can select a storage location to assign the batch number to a location in your storage facility.

Simply select a storage location from the `Location` dropdown menu.

![Add Item location](/docs/replenishment/images/is_additem_location.png)

<div class="note">
Don't know the storage location yet? You don't have to capture it right away. You can update the storage location at any time if you haven't confirmed the verification yet. 
</div>

### Confirm item and quantities

When you're done, you can add the new line by tapping on:

- `OK` if you don't want to add another line to your shipment
- `OK & Next` if you have other lines to create

Otherwise, you can tap on `Cancel` and your changes won't be saved.

## Adding lines to an Inbound Shipment using a Master List

Tap on the `Add from master list` button (top right corner).

<div class="note">
The button will be disabled if the status of the Inbound Shipment is anything other than <code>New</code>
</div>

![Add Item button](/docs/distribution/images/os-add-from-master-list-button.png)

A new `Master Lists` window opens. This allows you to select the required master list. Simply click on one of the lists (if you have some available).

![Add Item button](/docs/distribution/images/os-add-item-master-lists.png)

Click `OK` on the prompt:
![Add Item button](/docs/distribution/images/os-add-item-master-list-prompt.png)

You will then have placeholder lines added to your shipment, which will then look like this:

![Add Item button](/docs/replenishment/images/is-after-master-list.png)

The imported rows will have zero for the number of packs value, and are therefore shown in a blue font with the batch, expiry, location etc not shown. You can follow the steps for editing these lines, as detailed above.

## Editing an Inbound Shipment line

To edit an Inbound Shipment line, simply tap on it. You will be presented with the `Edit Item` window, which is identical to the `Add Item` window, except that the item is already chosen and cannot be modified.

### Edit a Shipment Line

<div class="note">
 <b></b> you can edit a shipment line if the shipment has a status higher lower than <code>Verified</code>. 
</div>

1. Open the Inbound Shipment you want to edit
2. Tap on the line you want to edit. An identical window to `Add Item` appears. At this stage:

   - Edit the main `Issue Quantity` field
   - or change the number of packs value at the batch number level

<div class="note">
 <b></b> When editing a shipment line, you cannot change the item. You would need to delete the shipment line and to create a new one. 
</div>

### Delete a Shipment line

1. Open the Inbound Shipment that you would like to edit
2. Make sure that status is not yet `VERIFIED`
3. Select the line(s) you want to delete by checking the box(es) on the left of the list
4. Click the `Delete` button which appears at the bottom of the page.

![Alt Text](/docs/replenishment/images/delete-inbound-shipment-line.gif)

<div class="tip">
You can delete multiple lines at once. Be sure to review what is selected before performing the Delete action. 
</div>

### Receive Inbound Shipment Stock
Once you have finished creating your `Manual Inbound Shipment`, refer to [Receive Inbound Shipment Stock](/docs/16_receivingorders/16-4-receiveinboundshipment/) to receive the stock into your inventory.
