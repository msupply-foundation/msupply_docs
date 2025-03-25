+++
title = "OMS Dashboard"
description = "OMS Dashboard"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 203
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

## What's on Display?

![The dashboard!](/docs/getting_started/images/dashboard.png)

The dashboard provides an overview of key statistics related to shipments, stock, and inventory management. It offers quick insights into the status of various processes, helping you stay on top of operations. 

You can see some statistics for shipments and stock:

| **Category**             | *Metric*                                      | **Description**                                                                                                           |
|--------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| **Replenishment**         | *Inbound Shipments - Today*                   | Shows the number of inbound shipments created today.                                                                       |
|                          | *Inbound Shipments - This Week*               | Shows the number of inbound shipments created during the current week.                                                     |
|                          | *Inbound Shipments Not Delivered*             | Number of shipped invoices that have yet to be delivered.                                                                  |
|                          | *Internal Orders - New*                       | Shows the number of new Internal Orders.                                                                                   |
| **Distribution**          | *Shipments - Have Not Been Shipped*           | Number of outbound shipments that have not been set to `Shipped` (or later) status.                                        |
|                          | *Requisitions - New*                          | Shows the number of new Requisitions.                                                                                      |
| **Inventory Management**  | *Expiring Stock - Expired Batches*            | Number of stock lines in the current store that have expired.                                                              |
|                          | *Expiring Stock - Batches Expiring in a Month*| Number of stock lines in the current store that will expire within the month.                                               |
|                          | *Stock Levels - Total Items*                  | A count of the number of items in the current store.                                                                       |
|                          | *Stock Levels - Items with No Stock*          | Items visible in the store but have no stock recorded.                                                                    |
|                          | *Stock Levels - Items with Less Than 3 Months of Stock* | Based on the average monthly consumption (AMC) for this item in the current store.                                       |
|                          | *Stock Levels - Items with More Than 6 Months of Stock* | Based on AMC for the item in the current store.                                                                            |


There are buttons towards the bottom of the page as well which allow you to create shipments and requisitions.

Clicking on the headings (e.g. `Inbound Shipments`, `Shipments` etc) will take you to the list of those items.
In addition, clicking on the text beside an item (e.g. `Have not been shipped`) will take you to a view which gives you a list which is filtered to show all the records which match the condition listed. The exception to this is the statistics shown under `Stock levels` which currently do not have filters available.

## Too many Dashboards!

Yes, we use the term _Dashboard_ for more than one thing.
Open mSupply has a landing page which gives an overview of some statistics, and has some useful links, which we will talk about here, and also a system dashboard that uses Grafana, and gives an overview of all sites in your country (or organisation).