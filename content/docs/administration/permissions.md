+++
title = "Permissions"
description = "Configure user permissions"
date = 2023-05-05T16:20:00+00:00
updated = 2023-05-05T16:20:00+00:00
draft = false
weight = 73
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "User permission configuration and how the permissions relate to central server users."
toc = true
top = false
+++

## Updating settings

Permissions are configured on a per user basis, and this is done on the central server. See the [central server](https://docs.msupply.org.nz/admin:managing_users#permissions_tabs) documentation for an explanation of how to do this.

## Settings available

The following table lists the area and name of the permissions in the central server which are of relevance to Open mSupply. In the table, the description explains where this permission might be used in Open mSupply and why you may need to enable it.

In addition to these specific permissions, you'll need to ensure that the user has access to the store(s) which they'll be working in.

| Tab             | Area         | Permission                   | Description                                                                                      |
| --------------- | ------------ | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| Permissions     | Admin        | Access server administration     | Allows access to the `Admin` page   |
| Permissions     | Items        | Manage locations                 | Allows a user to maintain locations |
|                 |              | Edit items                       | Able to edit items, required when saving a barcode |
|                 |              | Edit Item names, codes and units | Can maintain pack variants |
|                 |              | View stock                       | View stock lines          |
|                 |              | Edit stock                       | Modify stock lines        |
|                 |              | Create Repack Or Split Stock     | Can create repack or split stock lines |
|                 |              | Enter Inventory Adjustments      | Can maintain inventory adjustments |
|                 |              | Edit Inventory Adjustments       | Can maintain inventory adjustments - if either enter or edit permission is given the user can edit |
|                 |              | Finalise Inventory Adjustments   | Can maintain inventory adjustments - if either enter, edit or finalise permission is given the user can edit |
| Permissions (2) | Invoices     | View customer invoices           | Can view Outbound Shipments. Also used to query statistics on the dashboard |
|                 |              | Create customer invoices         | Can maintain Outbound Shipments   |
|                 |              | Edit customer invoices           | Can maintain Outbound Shipments - if either edit or create permission is given the user can edit |
|                 |              | Return stock from supplier invoices | Can return stock from Inbound Shipments |
|                 |              | View supplier invoices           | Can view Inbound Shipments. Also used to query statistics on the dashboard |
|                 |              | Create supplier invoices         | Can maintain Inbound Shipments  |
|                 |              | Edit supplier invoices           | Can maintain Inbound Shipments - if either edit or create permission is given the user can edit |
|                 |              | Return stock from customer invoices | Can return stock from Outbound Shipments |
|                 | Reports      | View reports                     | Required to print pages, as this uses the reporting system  |
| Permissions (2) | Patients     | View patients                    | Can view Patients          |
|                 |              | Add Patients                     | Can maintain Patients      |
|                 |              | Edit Patient Details             | Can maintain Patients - if either add or edit permission is given the user can edit |
| Permissions (3) | Admin        | View log                         | Able to view the logs, these show as a tab on many windows     |
| Permissions (3) | Requisitions | View requisitions                | Can view Requisitions      |
|                 |              | Create and edit requisitions     | Can maintain Requisitions  |
| omSupply Permissions |         | Confirm Internal Order sent      | Can confirm Internal Orders as sent |
| Permissions (3) | Stocktakes   | Create Stocktake                 | Can create Stocktakes      |
|                 |              | Delete Stocktake                 | Can delete Stocktakes      |
|                 |              | Add Stocktake lines              | Can add Stocktake lines    |
|                 |              | Edit Stocktake lines             | Can edit Stocktake lines   |
| Permissions (3) | Vaccines     | View sensor details              | Can view sensor details    |
|                 |              | Edit sensor location             | Can edit sensor location   |
| omSupply Permissions |         | Cold chain API access            | Can access the Cold Chain API |
| Permissions (3) | Assets       | View assets                      | Can view Assets            |
|                 |              | Add, edit assets                 | Can maintain Assets        |
|                 |              | Setup Assets                     | Can import Asset catalogue items |