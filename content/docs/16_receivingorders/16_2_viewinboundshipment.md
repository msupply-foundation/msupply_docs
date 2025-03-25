+++
title = "View Inbound Shipments"
description = "Inbound Shipments"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 202
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Inbound Shipments can be used to receive stock from suppliers. 

If you have used mSupply in the past, you may be familiar with the term **Supplier Invoice** instead of Inbound Shipment.

All received goods should be recorded in mSupply either by:

- Manually creating an Inbound Shipment (manual Inbound Shipment)
- Working with an Inbound Shipment that has been created automatically as a result of a stock transfer from another store in your mSupply

For more details on Inbound Shipments, refer to [What are Inbound Shipments?](/docs/16_receivingorders/16-1-whatisreceivingorders/).

## Viewing Inbound Shipments

### Go to the Inbound Shipments Menu

![Go to Inbound Shipments](/docs/replenishment/images/is_gotois.png)

To access the **Inbound Shipment** menu:

1. Go to the `Replenishment` menu in the navigation panel
2. Click on `Inbound Shipment`

### Inbound Shipments list

First thing you see is a list of existing Inbound Shipments.

The Inbound Shipments list is divided into 7 columns:

| Column        | Description                                                                   |
| :------------ | :---------------------------------------------------------------------------- |
| **Name**      | Name of the Supplier                                                          |
| **Status**    | Current Status of the shipment                                                |
| **Number**    | Reference Number of the shipment                                              |
| **Created**   | Creation date of the shipment                                                 |
| **Delivered** | Date when the shipment was delivered                                          |
| **Comment**   | Comment for the shipment                                                      |
| **Reference** | This will contain the supplier invoice number if it was created automatically |
| **Total**     | Total value of the shipment                                                   |

2. The list can display a fixed number of shipments per page. On the bottom left corner, you can see how many shipments are currently displayed on your screen.

![Page](/docs/distribution/images/os_list_showing.png)

3. If you have more shipments than the current limit, you can navigate to the other pages by clicking on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

4. You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Filter Inbound Shipments

You can filter the list of shipments by supplier name, created date or status. This can be useful if you're looking for one particular shipment!

![Inbound Shipments filter](/docs/replenishment/images/is_filter.png)

For example, to filter by supplier name, click on `Filters`, select `Name` and start typing some or all of a supplier name in the `Name` field. All the shipments for this supplier will appear in the list.

![Inbound shipment name filter](/docs/replenishment/images/is_name_filter.gif)

### Exporting Inbound Shipments

The list of Inbound Shipments can be exported to a comma separated file (csv). Simply click the export button (on the right, at the top of the page)

![Export button](/docs/distribution/images/export.png)

and the file will be downloaded. The export function will download all Inbound Shipments, not just the current page, if you have more than 20 of them.

### Delete an Inbound Shipment

You can delete a shipment from the Inbound Shipment list.

1. Select the shipment that you want to delete by checking the box on the left end of the list. You can select more than one shipments to be deleted. You can even select them all using the master checkbox in the list headers.

2. The `Actions` footer will display at the bottom of the screen when a shipment is selected. It will display the number of shipments selected and the actions which can be taken. Click `Delete`.

A notification confirms how many shipments were deleted (bottom left corner).

<div class="note">
You can only delete Inbound Shipments with a status <code>NEW</code>.
</div>

## Viewing Inbound Shipment Stock

When viewing a specific shipment, you can view the batches on that shipment grouped by item or with each batch listed separately.
To change the view mode, click the `Group by item` switch.

When grouped by item, you can expand the item to see individual batches, or use the expand in the table header to expand all grouped rows. If you click on an item you will also see all selected batches, as shown in this example:

![Group by Item](/docs/replenishment/images/is_group_by_item.gif)

If you do not have enough room on your screen, or simply aren't interested in some of the columns shown, you have the option of hiding which columns are shown in this view.

Click on the `Show / hide columns` button which is at the top right of the table. This gives a list of the columns available - you can check the columns you want to see. The options chosen are stored for the current browser, so next time you view an inbound shipment, you will see the selected columns only. If you have chosen which columns to show, then the button is shown in blue to remind you that there are more columns available.

![Hide columns](/docs/replenishment/images/is_show_hide_columns.gif)

