+++
title = "Customer Orders (Requisitions)"
description = "Managing your Customer orders."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 202
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Managing Your Customer Orders"
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
2. The `Actions` footer will display at the bottom of the screen when a requisition is selected. It will display the number of requisitions selected and the actions which can be taken. Click `Delete`.
3. A confirmation window will appear, asking you to confirm the number of
   requisitions to be deleted.
4. After clicking `OK`, a notification will appear in the bottom left corner, confirming that the selected requisitions were deleted.

<div class="note">
You cannot delete requisitions that have been created from an Internal Order, or have had a shipment created from them.
</div>

![Delete Requesition Actions Footer](/docs/distribution/images/delete-response-requisition.png)

### Viewing a Requisition

To view the detail of a particular requisition, simply click on it in the list view.
You will then see the detail view of the requisition:

![Requisition Detail](/docs/distribution/images/requisition-detail.png)

#### Enter a Customer Reference

The customer reference is automatically generated when the customer creates an
Internal Order, but you can also enter a customer reference manually.

#### View or Edit the Requisition Information Panel

The information Panel allows you to see or edit information about the
Requisition. It is divided into three sections:

- Additional Info
- Related documents
- Actions

We are planning to add more sections in the future as Open mSupply grows.

##### How to Open and Close the Information Panel?

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

