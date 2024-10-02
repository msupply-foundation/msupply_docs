+++
title = "Customer Returns"
description = "Receiving returned stock from your customers"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 44
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

A Customer Returns is used to record stock which is returned by a customer.

It is important to be able to receive goods back from a customer without it being counted as goods coming from a supplier. If your customer issues the goods to you on an Outbound Shipment, and you then receive it through an Inbound Shipment, then those goods will be counted as part of your store's 'supply' from suppliers, which is not correct. A Customer Return is the right way to receive goods back from a customer.

If you have used mSupply in the past, you may be familiar with the term **Customer Credit** instead of Customer Return.

All goods returned by a customer should be recorded in mSupply with a Customer Return. They are created automatically, as a result of a Supplier Return created by another store in Open mSupply, and can also be entered manually.

## Viewing Customer Returns

### Open the Customer Returns Menu

Choose `Distribution` > `Customer Returns` in the navigation panel.

![go to Customer Return](/docs/distribution/images/gotoir.png)

You will be presented with a list of Customer Returns if some have been created already.

From this screen you can:

- View a list of Customer Returns
- Create a new Customer Return
- Export Customer Returns to a `.csv` file

### Customer Return list

1. The list of Customer Returns is divided into 6 columns:

| Column        | Description                    |
| :------------ | :----------------------------- |
| **Name**      | Name of the Customer           |
| **Status**    | Current Status of the return   |
| **Number**    | Reference Number of the return |
| **Created**   | Creation date of the return    |
| **Comment**   | Comment for the return         |
| **Reference** | Customer reference             |

1. The list can display a fixed number of returns per page. On the bottom left corner, you can see how many returns are currently displayed on your screen.

![Page](/docs/distribution/images/os_list_showing.png)

3. If you have more returns than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

4. You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Search by Customer Name

You can filter the list of returns by customer name or by status. This can be useful if you're looking for one particular return!

For example: Select the `Name` filter from the list to filter by the customer name. Type the name of a customer in the `Name` field. All the returns for this customer will appear in the list.

![Customer Return filter](/docs/distribution/images/ir_filter.gif)

### Exporting Customer Returns

The list of Customer Returns can be exported to a comma separated file (csv). Simply click the export button (on the right, at the top of the page)

![Export button](/docs/distribution/images/export.png)

and the file will be downloaded. The export function will download all Customer Returns, not just the current page, if you have more returns than the current page limit.

### Delete a Customer Return

You can delete a return from the Customer Return list.

1. Select the return that you want to delete by checking the box on the left end of the list. You can select more than one return to be deleted. You can even select them all using the master checkbox in the list headers.

2. Open the `Select` dropdown (top right corner, above the list) and select `Delete selected lines`.

3. A notification confirms how many returns were deleted (bottom left corner).

<div class="note">
You can only delete Customer Returns if they have a status of <code>NEW</code>.
</div>

![Inbound list: delete](/docs/distribution/images/ir_delete.gif)

## Creating a Customer Return

Customer Returns are created automatically, when a Supplier Return is created by another store. If needed, they can also be created manually, as explained below.

### Create from Outbound Shipment

Often, you will be processing the return of goods that you sent via an Outbound Shipment. In this case, you can [create a Customer Return from the Outbound Shipment](../outbound-shipments/#process-return-of-stock-from-an-outbound-shipment) itself.

### Create manually

1. Go to `Distribution` > `Customer Return`.

2. Press the `New Return` button, in the top right corner

![New Return](/docs/distribution/images/ir_newreturn.png)

3. A new window `Customers` opens, inviting you to select a customer.

#### Select a Customer

1. In the `Customers` window, you will be presented with a list of available customers. You can select your customer from the list or you can filter by typing the customer name.

<div class="imagetitle">
In the below example, we are wanting to receive returned stock from <b>Slytherin Clinic</b>. 
</div>

![Create Customer Return](/docs/distribution/images/ir_create.gif)

<div class="tip">
You can tell if a customer is also using Open mSupply in their store. If they do, you will see an icon like this <img src="/docs/replenishment/images/is_msupplystoreicon.png" alt="Store" style="width:auto"> next to the customer code. 
</div>

2. Once you tap or press `Enter`, or click on a customer, your Customer Return is automatically created

If everything went well, you should see the name of your customer in the top left corner and the status should be <code>NEW</code>

### Enter a Customer Reference

Once your Customer Return has been created, you can enter a customer reference in the `Customer Ref` field, if they have one (eg. _PO#1234567_)

### Customer Return Information Panel

The Information Panel allows you to see or edit information about the Customer Return. It is divided into multiple sections:

- Additional Info
- Related Documents
- Transport Details

We are planning to add more sections in the future as Open mSupply grows.

#### How to open and close the Information Panel?

If you are using a large screen, the information panel will be automatically opened for you. However, on an average sized screen, the information panel will be closed by default.

To open the Information Panel, you can tap on the `More` button, located in the top right corner of the Customer Return view.

You can close by tapping on the `X Close` button, on the top right corner of the information panel.

![Open and close the Information Panel](/docs/distribution/images/ir_sidepanel.gif)

#### Additional Info

In the **Additional Info** section, you can:

- See who created the Customer Return (name of the user)
- View and edit the Customer Return color. To edit the color, tap on the coloured circle and select a color from the pop-up
- Write or edit a comment

#### Related Documents

In the **Related Documents** section, you can see other related transaction documents for the Customer Return.

If your Customer Return was created from an **Outbound Shipment**, the reference number of the Outbound Shipment would appear in this section.

In the future, we would also include other documents such as transportation documents or pick slips.

#### Transport Details

If your Customer Return was created automatically, via a Supplier Return from another store, you will see a Transport Details section. Here, you can see a transport reference (e.g. a booking or tracking number.)

#### Actions

1. **Delete:** You can click the `Delete` button to delete the return. You can only delete Customer Returns while they are in <code>NEW</code> status.
2. **Copy to Clipboard**: You can click the `Copy to Clipboard` button to copy the invoice details to the clipboard.

### Customer Return Status Sequence

The status sequence is located at the bottom left corner of the Customer Return screen.

Passed statuses are hightlighted in blue, next statuses appear in grey.

<figure>
<img src="/docs/distribution/images/ir_statussequence.png" alt="Customer Return Status Sequence (New)" style="width:100%">
<figcaption align = "center">Status Sequence: current status is <code>NEW</code>.</figcaption>
</figure>

<figure>
<img src="/docs/distribution/images/ir_statussequence2.png" alt="Customer Return Status Sequence (Shipped)" style="width:100%">
<figcaption align = "center">Status Sequence: current status is </i><code>SHIPPED</code>.</figcaption>
</figure>

There are 5 status for the Customer Return:

| Status        | Description                                                                                                           |
| :------------ | --------------------------------------------------------------------------------------------------------------------- |
| **New**       | This is the first status when you create a new manual Customer Return                                                 |
| **Picked**    | Customer has confirmed that the return is picked and is ready to ship (only applies to automatically created returns) |
| **Shipped**   | Return has been shipped and goods are now in transit (applies only to automatically created returns)                  |
| **Delivered** | When you confirm that the return has been delivered                                                                   |
| **Verified**  | When you have verified the Customer Return                                                                            |

You probably noticed that two of the status values only apply to automatically created returns. These are created by the system when another store in the system creates a Supplier Return to return stock to your store. If this is the case you'll see a message near the top of the page:

![Automatic IS message](/docs/distribution/images/ir_message_automatic.png)

Note that this message appears differently if the status is `Delivered` or `Verified`

![Automatic IS message: delivered](/docs/distribution/images/ir_message_automatic_delivered.png)

If, however, you've created an Inbound Shipment manually, then the following message shows:

![Manual IS message](/docs/distribution/images/ir_message_manual.png)

and you'll see that the status bar has only the status values which apply to
this Customer Returns.

<figure align="center">
    <img src="/docs/distribution/images/ir_statussequence_manual.png" alt="Inbound Shipment Status Sequence (New & manual)" style="width:60%">
    <figcaption align="center">Status Sequence: current status is </i><code>New</code>.</figcaption>
</figure>

If you hover over the status sequence, a return history window appears. You can see the date when a return was updated from one status to another.

<div class="imagetitle">
This manual return has been created on 28/03/2024
</div>

![Inbound status: hover 2](/docs/distribution/images/ir_status_sequence_hover_manual.png)

<div class="imagetitle">
This automatic return has been created, picked and shipped on the 26/03/24
</div>

![Inbound status: hover](/docs/distribution/images/ir_status_sequence_hover_auto.png)

### Hold checkbox

Located on the bottom left corner, on the left of the status sequence.

Checking the `Hold` checkbox prevents the Customer Return from being updated to the next status.

![Inbound checkbox](/docs/distribution/images/os_holdcheckbox.png)

### Close and Confirm button

#### Close Button

Tap on the `Close` button to quit the Customer Return view and return to the Customer Returns list.

#### Confirm Button

The `Confirm` button updates the status of a return. The status which you can confirm depends on the current status of the return and follows the sequence shown below.

When managing a Customer Return, you can only confirm it as Delivered or Verified.

| Confirm...            | Current Status | Next Status |
| :-------------------- | :------------- | :---------- |
| **Confirm Delivered** | Shipped        | Delivered   |
| **Confirm Verified**  | Delivered      | Verified    |

For manual Customer Returns, you don't have to update to the next status in the sequence. You can choose to skip `Delivered` to go directly to `Confirm Verified`.

As demonstrated below, tap on the down arrow of the `Confirm` button and select the status you want the return to be updated to.

![Skip Status](/docs/distribution/images/ir_confirm_skip_status.gif)

## Adding lines to a Customer Return

Tap on the `Add Item` button (top right corner).

![Add Item button](/docs/distribution/images/ir_additembutton.png)

### Select an Item

A new `Add Item` window opens. In the `Add Item` window, you can look up an item by:

- Reading through the list of available items
- or by typing some or all of the item name
- or by typing some or all of an item code

Once your item is highlighted, tap on the name or press `Enter`.

![Select an item](/docs/distribution/images/ir_additem.gif)

#### Select quantities step

In the `Select Quantities` step, you can enter the following fields:

- **Code**: Item code
- **Name**: Item name
- **Batch**: Batch number. It is a designation given to products made in the same manufacturing run.
- **Expiry**: Expiry date of the batch (format: MM/YYYY)
- **Pack Size**: Quantity of units per pack
- **Pack Quantity Issued**: Number of packs that were issued in the Outbound Shipment
- **Quantity Returned**: Number of packs to be returned

If you are receiving more than one batch number for the same item, you can add lines with the `Add Batch` button.

![List of batches](/docs/distribution/images/ir_list_of_batches.png)

#### Warnings

You may see one or more warning messages on this screen.

If you forget to enter a `Quantity Returned` for any batch and click `Next step`, you will see this warning message. You'll need to add a returned quantity for at least one batch. You can click `Cancel` if you no longer want to process the return of any of this stock.

![return quantity warning!](/docs/distribution/images/ir_addquantities_warning.png)

### Provide Reasons

<div class="note">

Return reasons are configured on the mSupply central server via **[options](https://docs.msupply.org.nz/preferences:options)**

</div>

When you are happy with the batch info and return quantities, you can press the `Next step` button. The list of batches will be filtered to only include the batches you set a return quantity for. In this view, you can enter a reason for the return of each batch, and an additional comment.

![Provide return reasons](/docs/distribution/images/ir_additem_returnstep.png)

### Confirm

When you are happy with the quantities and reasons, you can press on:

- the `OK` button. Your item will be added to the Customer Return
- the `OK & Next` button to add another item right away
- the `Back` button, to go back to the `Select quantity` step

## Editing a Customer Return Line

To edit a return line, tap on it. You will be presented with the `Edit Item` window, which is identical to the `Add Item` window, except that the item is already chosen.

### Edit a Return Line

<div class="note">
 <b></b> You can edit a return line if the return is not yet <code>VERIFIED</code>. 
</div>

1. Open the Customer Return you want to edit.
2. Tap on the line you want to edit. An identical window to `Add Item` appears. At this stage you can:

   - Edit batch info
   - Edit quantity returned for each batch
   - Click `Next step` to view/adjust the reasons and comments

If you set the Quantity Returned to `0`, that line will be removed from the return.

If you set all return quantities to `0`, and click `Next step` you will see this warning message. It is informing you that no return quantities were provided; from here you can click `OK` again to confirm, in which case the window will close and all lines for that item will be removed.

![no quantities warning!](/docs/distribution/images/ir_edit_noquantities.png)

<div class="note">
 <b></b> When editing a return line, you cannot change the item. You would need to delete the return line and create a new one. 
</div>

### Delete a Return Line

1. Open the Customer Return you want to edit.
2. Select the line(s) you want to delete by checking the box(es) on the right of the list.
3. Go to the `Actions` dropdown menu (top right corner, above the list)
4. Select the action `Delete selected lines`

![Delete lines actions dropdown](/docs/replenishment/images/or_actions_deletelines.png)

<div class="imagetitle">
In the below example, we are deleting <i>item 030063 - Acetylsalicylic Acid 100mg tabs</i>
</div>

![Alt Text](/docs/distribution/images/ir_deleteselectedlines.gif)

<div class="tip">
 <b></b> You can delete multiple lines at once. Be sure to review what is selected before performing the Delete action. 
</div>

## Receiving a Customer Return

### Confirming the delivery of the return

Whether your Customer Return is **manual** or **automatic**, the first step to receive the returned goods is to confirm the delivery.

At this stage, you don't have to check if quantities or other information are correct, you just have to acknowledge that you have received the returned goods from your customer.

To confirm that a Customer Return has been delivered, click on the `Confirm Delivered` button.

Once you have done this:

- Goods are now part of your inventory
- Return status is now `DELIVERED`

<div class="note">
In case your Customer Return is <b>automatic</b>, you cannot confirm its delivery unless the customer has confirmed its shipment. In other words, your invoice status has to be <code>SHIPPED</code> before you can confirm that you have received the returned goods. 
</div>

![Alt Text](/docs/distribution/images/ir_confirmdelivered.gif)

### Verify your Customer Return

Verification is the last step to receive returned goods in mSupply. At this stage, you can check what you have received and make sure that the information in mSupply is correct.

You have the possibility to verify the following information:

- Batch numbers and their expiry dates
- Quantity of packs and pack size
- Return reasons

Once all information has been captured or verified, you can confirm the Customer Return as `VERIFIED` by tapping on the `Confirm Verified` button.

Once you have done this:

- Customer Return status is now `VERIFIED`
- You can no longer edit return lines
- You can no longer delete the return

## Viewing a Customer Return

When viewing a specific return, you can view the batches on that return grouped by item or with each batch listed separately.
To change the view mode, click the `Group by item` switch.

When grouped by item, you can expand the item to see individual batches, or use the expand in the table header to expand all grouped rows.

![Group by Item](/docs/distribution/images/ir_group_by_item.gif)

If you do not have enough room on your screen, or simply aren't interested in some of the columns shown, you have the option of hiding which columns are shown in this view.

Click on the `Show / hide columns` button which is at the top right of the table. This gives a list of the columns available - you can check the columns you want to see. The options chosen are stored for the current browser, so next time you view a Customer Return, you will see the selected columns only. If you have chosen which columns to show, then the button is shown in blue to remind you that there are more columns available.

<div class="imagetitle">
In the below example, we hide the batch, expiry and unit quantity columns
</div>

![Hide columns](/docs/distribution/images/ir_filter_columns.gif)
