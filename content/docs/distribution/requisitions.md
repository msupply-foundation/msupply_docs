+++
title = "Requisitions"
description = "Managing your customers orders."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 22
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Managing your customers' orders"
toc = true
top = false
+++

When a customer orders stock from you, they create an **Internal Order** in their store. This will appear as a **Requisition** in your store.

## Viewing Customers' Requisition

To know if you have received requisitions from your customers, go to `Distribution` > `Requisition`

![Requisition nav](/docs/distribution/images/req_gotoreq2.png)

You should see a list of all requisitions sent by your customers.

From this screen you can:

- View a list of Requisitions
- Export Requisitions to a `.csv` file

![Requisition list](/docs/distribution/images/req_list.png)

### Requisition list

The list of Requisitions is divided into 6 columns:

| Column        | Description                                      |
| :------------ | :----------------------------------------------- |
| **Name**      | Name of the Customer                             |
| **Number**    | Reference Number of the requisition              |
| **Created**   | Creation Date of the requisition                 |
| **Status**    | Current Status of the requisition                |
| **Shipments** | Number of shipments created from the requisition |
| **Comment**   | Comment for the requisition                      |

<div class="note">If you have program requisitions enabled, you may have additional columns in this table!</div>

The list can display a fixed number of requisitions per page. On the bottom left corner, you can see how many requisitions are currently displayed on your screen.

![Page](/docs/distribution/images/os_list_showing.png)

If you have more requisitions than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Filter Requisitions

You can filter the list of requisitions by name, status or whether shipments have been created. This can be useful if you're looking for one particular requisition!

![Requisition filter](/docs/distribution/images/req_filter.png)

Select the desired filter(s) from the list:

- **Name**: Start typing in the field to filter by customer name
- **Status**: Select a status from the dropdown list
- **Shipment created**: Toggle on to only show requisitions where shipments have been created

All the requisitions which match the filters will appear in the list.

### Exporting Requisitions

The list of Requisitions can be exported to a comma separated file (csv). Simply click the export button (on the right, at the top of the page)

![Export button](/docs/distribution/images/export.png)

and the file will be downloaded. The export function will download all
Requisitions, not just the current page.

### Delete a Requisition

You can delete a requisition from the Requisition list.

1. Select the requisition that you want to delete by checking the box on the
   left end of the list. You can select more than one requisition to be deleted.
   You can even select them all by using the master checkbox in the header.
2. Open the `Actions` dropdown menu at the top right corner (above the list) and
   select `Delete selected lines`.
3. A confirmation window will appear, asking you to confirm the number of
   requisitions to be deleted.
4. After clicking `OK`, a notification will appear in the bottom left corner, confirming that the selected requisitions were deleted.

<div class="note">
You cannot delete requisitions that have been created from an Internal Order, or have had a shipment created from them.
</div>

### Viewing a Requisition

To view the detail of a particular requisition, simply click on it in the list view.
You will then see the detail view of the requisition:

![Requisition Detail](/docs/distribution/images/requisition-detail.png)

#### Enter a Customer Reference

The customer reference is automatically generated when the customer creates an
Internal Order, but you can also enter a customer reference manually.

#### View or edit the Requisition Information Panel

The information Panel allows you to see or edit information about the
Requisition. It is divided into three sections:

- Additional Info
- Related documents
- Actions

We are planning to add more sections in the future as Open mSupply grows.

##### How to open and close the information Panel?

To open the Information Panel, you can tap on the `More` button, located in the
top right corner of the Requisition page.

You can close the Information Panel by tapping on the `X Close` button on the
top right corner of the information panel.

![Open and close the Information
Panel](/docs/distribution/images/requisition_infopanel_openclose.gif)

##### Additional Info

In the **Additional Info** section you can:

- See who created the Requisition (name of the user)
- See when the Requisition was created
- View and edit the Requisition color. To edit the color, tap on the colored
  circle and select a color from the pop-up
- Write or edit a comment

##### Related Documents

In the **Related Documents** section you can see other related transactions for
the Requisition.

If you have created shipments for the Requisition, the shipment numbers will
appear in this section along with a link to view the shipment.

##### Actions

**Copy to clipboard**: You can tap on the `Copy to Clipboard` button to copy
the Requisition details to the clipboard.

#### Requisition Detail

![Requisition Detail](/docs/distribution/images/requisition-detail.png)

| Column        | Description                                                                                                                                                                     |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Code**      | Code of the item                                                                                                                                                                |
| **Name**      | Name of the item                                                                                                                                                                |
| **Unit**      | The unit of measure for the item                                                                                                                                                |
| **Our SOH**   | How much stock is available in this store                                                                                                                                       |
| **Their SOH** | How much stock is available in the customer's store                                                                                                                             |
| **Requested** | The quantity requested by customer                                                                                                                                              |
| **Supply**    | The quantity that will be supplied by this store (quantity can differ from what is being requested)                                                                             |
| **Issued**    | The quantity that has already been issued in `Outbound Shipments`                                                                                                               |
| **Remaining** | The quantity remaining to be supplied to the customer. The calculation is 'Supply - Issued'. This quantity will be re-calculated after an `Outbound Shipment` has been created. |

One way to adjust the supply quantity, is to click the button `Supply requested`
at the top of the page. This will automatically set the supply quantity to be
that of the quantity requested for each item.

![Supply Requested button](/docs/distribution/images/requisition_supply_requested_button.png)

Click the button and you are asked
for confirmation before the adjustment happens:

![Supply Requested
Prompt](/docs/distribution/images/requisition-supply-to-requested.png)

The other way to adjust the supply quantity is to click on the item line in the
table. This will open the line details page where you will see information about
the item such as your stock on hand, and the requested quantity.

![Requisition Detail](/docs/distribution/images/requisition_line_edit_page.png)

Once the `Quantity to supply` field is entered, a green tick will appear next to the item name, to help you track your progress.

![Tick](/docs/distribution/images/requisition_line_tick.png)

You can navigate between different items by:

- Clicking on the item name in the list to the left of the screen
- Using the `Previous` and `Next` buttons at the bottom of the screen

![Requisition
Navigation](/docs/distribution/images/requisition_line_navigation.gif)

##### Customer Store Stats

Clicking on the `Graph Icon` next to the `Requested quantity` field will open a
graph showing you the details of the stock at the customer's store.

<div class="note">The request quantity charts will only show if the Requisition was created from an Internal Order.</div>

- The customer's _Target Quantity_ for this item. This is calculated as: Target MOS x AMC
- The customer's stock on hand for this item

![Requisition Customer Stats](/docs/distribution/images/customer_store_stats.png)

##### Your Store Stats

Clicking on the `Graph Icon` next to the `Quantity to Supply` field will open a
graph showing you the details of the stock at your store.

<div class="imagetitle">
This message will be displayed if your store currently doesn't have any stock available.
</div>

![](/docs/distribution/images/req-no-available-stock-message.png)

_The first bar:_

- Your stock on hand for this item
- Any incoming stock for this item that has been `Shipped`, but not yet `Delivered`
- The quantity being requested for this item in any `Internal Orders`

_The second bar:_

- The quantity being requested for this item in this Requisition
- The quantity being requested in other Requisitions

![Requisition Store Stats](/docs/distribution/images/response_store_stats.png)

To go back to the Requisition view, tap on the `Close` button at the top right
corner of the screen or click on the `Requisition Number` at the top left of the
screen.
![Close Requisition
Line](/docs/distribution/images/close_requisition_line_edit.png)

#### Creating an Outbound Shipment from a Requisition

Once you are happy with the supply quantities, you can create an `Outbound
Shipment` which will supply the items requested by going back to the Requisition
Detail page.

Click on the `Create Shipment` button. This will create a shipment, add all of the items which are not fully supplied, and then, open that shipment in a new tab. Before doing so, you are prompted to confirm:

![Create Shipment Prompt](/docs/distribution/images/requisition-create-shipment.png)

If the supply quantity is changed for any item/s in the requisition after a shipment has been made for it and a new shipment is created through clicking the `Create Shipment` button, then a new shipment will be created with the remaining supply amount (supply quantity minus any linked Outbound Shipment quantity).

![Create Shipment Detail](/docs/distribution/images/requisition-create-shipment.gif)

After creating the shipment, you will see the shipment number, along with a link to view it, in the `Related documents` section of the additional details panel on the right of the screen.

Clicking an item line in the table will redirect you to the line details page. Here you can adjust the
quantity to supply and add a comment:

### Manual Requisition

Usually, Requisitions will be sent to you by your Customers. However, if they aren't using mSupply, you can create a Requisition manually.

#### Creating a Manual Requisition

1. Go to `Distribution` > `Requisition`
2. Press the `Create Requisition` button at the top right of the page

![New Requisition](/docs/distribution/images/click_new_requisition.png)

3. A new window will appear where you can select the customer for whom you want
   to create the requisition. You can search for the customer by typing their
   name or code in the search bar or by scrolling through the list of customers.

![Select Customer](/docs/distribution/images/requisition_customer_modal.png)

4. Once you have selected the customer, you will be taken to the requisition
   detail page where you can add items to the requisition.

<div class="note">
You cannot change the customer name after the requisition has been created. If you have made a mistake in selecting the customer, you will need to delete the requisition and create a new one.
</div>

#### Adding lines to a Requisition

Tap on the `Add Item` button (top right corner).

A new `Add Item` window will open. You can look up an item by:

- Reading through the list of available items
- or by typing some or all of the item name
- or by typing some or all of an item code

Once your item is highlighted, tap on the name or press `Enter`.

![Add Item](/docs/distribution/images/requisition_add_item.gif)

Once the item has been selected, you will be redirected to the line edit page.
Here you can enter the customer's stock on hand, average monthly consumption and
requested quantity. You can also enter how much you are going to supply to the
customer and any comments. The values are saved automatically.

![Requisition Line Edit](/docs/distribution/images/requisition_line_edit_page.png)

After this, the workflow will follow the [same steps](#viewing-a-requisition)
as for a requisition created from an Internal Order.

#### Extra Requisition Columns

In manual requisitions it is possible to collect many additional columns of data for reporting and forcasting purposes. To enable these columns you need to configure store permissions to enable these extra columns as documenting in mSupply Desktop documentation [here](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab).

![Customer requisitions extra fields](/docs/distribution/images/customer_requisition_extra_columns.png)

For quick reference this is the preference your logged in store requires:
![Show extra fields on requisitions preference](/docs/distribution/images/show_extra_fields_on_requisitions.png)
