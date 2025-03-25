+++
title = "Viewing Outbound Shipments"
description = "Issuing stock to your customers."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 206
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Outbound Shipments can be used to issue stock to a customer.

If you have used mSupply in the past, you may be familiar with the term **Customer Invoice** instead of Outbound Shipment.
An Outbound Shipment can be used to:

- Transfer stock to another store which also uses mSupply
- Issue stock to a customer
- Fulfill requisitions (customer orders)

## Viewing Outbound Shipments

### Open the Outbound Shipments Menu

Choose `Distribution` > `Outbound Shipment` in the navigation panel.

![gotooos](/docs/distribution/images/gotoos2.png)

You will be presented with a list of Outbound Shipments (if you don't see any, you are probably just starting!).

From this screen you can:

- View a list of Outbound Shipments
- Create a new Outbound Shipment
- Export Outbound Shipments to a `.csv` file
- Print one or multiple Outbound Shipments

### Outbound Shipment list

1. The list of Outbound Shipments is divided into 7 columns:

| Column        | Description                      |
| :------------ | :------------------------------- |
| **Name**      | Name of the Customer             |
| **Status**    | Current Status of the shipment   |
| **Number**    | Reference Number of the shipment |
| **Created**   | Creation date of the shipment    |
| **Reference** | Customer reference               |
| **Comment**   | Comment for the shipment         |
| **Total**     | Total value of the shipment      |

1. The list can display a fixed number of shipments per page. On the bottom left corner, you can see how many shipments are currently displayed on your screen.

![Page](/docs/distribution/images/os_list_showing.png)

3. If you have more shipments than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

4. You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Search by Customer Name

You can filter the list of shipments by customer name or by status. This can be useful if you're looking for one particular shipment!
Select the `Name` filter from the list to filter by the customer name:

![Outbound shipment filter](/docs/distribution/images/os_filter.png)

Type the name of a customer in the `Name` field. All the shipments for this customer will appear in the list.

### Exporting Outbound Shipments

The list of Outbound Shipments can be exported to a comma separated file (csv). Simply click the export button (on the right, at the top of the page)

![Export button](/docs/distribution/images/export.png)

and the file will be downloaded. The export function will download all Outbound Shipments, not just the current page, if you have more than 20 of them.

### Delete an Outbound Shipment

You can delete a shipment from the Outbound Shipment list.

1. Select the shipment that you want to delete by checking the box on the left end of the list. You can select more than one shipment to be deleted. You can even select them all using the master checkbox in the list headers.

2. The `Actions` footer will display at the bottom of the screen when a shipment is selected. It will display the number of shipments selected and the actions which can be taken. Click `Delete`.

3. A notification confirms how many shipments were deleted (bottom left corner).

<div class="note">
You can only delete Outbound Shipments if they have not been <code>SHIPPED</code>.
</div>

![Outbound list: delete](/docs/distribution/images/delete-outbound-shipment.png)

## Viewing Outbound Shipment Items

When viewing a specific shipment, you can view the batches on that shipment grouped by item or with each batch listed separately.
To change the view mode, click the `Group by item` switch.

When grouped by item, you can expand the item to see individual batches, or use the expand in the table header to expand all grouped rows. If you click on an item you will also see all selected batches, as shown in this example:

![Group by Item](/docs/distribution/images/os_group_by_item.gif)

If you do not have enough room on your screen, or simply aren't interested in some of the columns shown, you have the option of hiding which columns are shown in this view.

Click on the `Show / hide columns` button which is at the top right of the table. This gives a list of the columns available - you can check the columns you want to see. The options chosen are stored for the current browser, so next time you view an Outbound Shipment, you will see the selected columns only. If you have chosen which columns to show, then the button is shown in blue to remind you that there are more columns available.

![Hide columns](/docs/distribution/images/os_show_hide_columns.gif)