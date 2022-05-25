+++
title = "Requisitions"
description = "Managing your customers orders."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 2
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

![Requistion nav](/docs/distribution/images/req_gotoreq2.png)

You should see a list of all requisitions sent by your customers. 

From this screen you can:
* View a list of Requisitions
* Export Requisitions to a `.csv` file

![Requisition list](/docs/distribution/images/req_list.png)


### Requisition list

1. The list of Requisitions is divided into 5 columns:

| Column| Description |
| :---------- | :---------- |
| **Name** | Name of the Customer | 
| **Number** | Reference Number of the requisition | 
| **Created** | Creation date of the requisition | 
| **Status** | Current Status of the requisition | 
| **Comment** | Comment for the requisition |

1. The list can display a fixed number of requisitions per page. On the bottom left corner, you can see how many requisitions are currently displayed on your screen. 

![Page](/docs/distribution/images/os_list_showing.png)

3. If you have more than 20 requisitions, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner). 

![Page](/docs/distribution/images/os_list_pagenumbers.png)

### Search by comment

You can filter the list of requisitions by comment. This can be useful if you're looking for one particular requisition!

Start typing in the `Search by comment` field (on the left, just above the list headers). All the requisitions which have a comment matching the entered text will appear in the list. 

### Exporting Requisitions

The list of Requisitions can be exported to a comma separated file (csv). Simply click the export button (on the right, at the top of the page)

![Export button](/docs/distribution/images/export.png)

and the file will be downloaded. The export function will download all Requisitions, not just the current page, if you have more than 20 of them. Requisitions are exported using sort order selected in the table, though of course you could easily sort the list in Excel or whatever you open the .csv file with!
