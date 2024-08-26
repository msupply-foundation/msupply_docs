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

and the file will be downloaded. The export function will download all Requisitions, not just the current page, if you have more than 20 of them.

### Viewing a Requisition

To view the detail of a particular requisition, simply click on it in the list view.
You will then see the detail view of the requisition:

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

Clicking on an individual item in this view, will then show you details of the particular item. Here you can adjust the quantity to supply:

![Requisition Detail](/docs/distribution/images/requisition-item-detail.png)

The requested quantity is also shown, along with the stock item details.

The `My Store` tab indicates if the store have enough stock to meet the customer's requested quantity as well as the requested quantities from other customers. The two bars show the following:

_The first bar:_

- Your stock on hand for this item
- Any incoming stock for this item that has been `Shipped`, but not yet `Delivered`
- The quantity being requested for this item in any `Internal Orders`

<div class="imagetitle">
This message will be displayed if your store currently doesn't have any stock available.
</div>

![](/docs/distribution/images/req-no-available-stock-message.png)

_The second bar:_

- The quantity being requested for this item in this Requisition
- The quantity being requested in other Requisitions

![Requisition Detail](/docs/distribution/images/requisition-item-detail-customer-tab.png)

The `Customer` tab shows the customer's stock situation for this item:

- The customer's _Target Quantity_ for this item. This is calculated as: Target MOS x AMC
- The customer's stock on hand for this item

Another way to adjust the supply quantity, is to click the button `Supply requested` at the top of the page. This will automatically set the supply quantity to be that of the quantity requested for that item. Click the button and you are asked for confirmation before the adjustment happens:

![Supply Requested Prompt](/docs/distribution/images/requisition-supply-to-requested.png)

To create an Outbound Shipment which will supply the items requested, click on the `Create Shipment` button. This will create a shipment, add all of the items which are not fully supplied, and then, open that shipment in a new tab. Before doing so, you are prompted to confirm:

![Create Shipment Prompt](/docs/distribution/images/requisition-create-shipment.png)

If the supply quantity is changed for any item/s in the requisition after a shipment has been made for it and a new shipment is created through clicking the `Create Shipment` button, then a new shipment will be created with the remaining supply amount (supply quantity minus any linked Outbound Shipment quantity).

![Create Shipment Detail](/docs/distribution/images/requisition-create-shipment.gif)

After creating the shipment, you will see the shipment number, along with a link to view it, in the `Related documents` section of the additional details panel on the right of the screen.
