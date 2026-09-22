+++
title = "Permissions"
description = "Configure user permissions"
date = 2023-05-05
updated = 2023-05-05
draft = false
weight = 4
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

| Tab                  | Area            | Permission                                           | Description                                                                                                                                      |
| -------------------- | --------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Permissions          | Admin           | Access server administration                         | Allows access to the `Synchronisation`, `Support`, `Devices` and also, if on the central server, `Configuration` pages in the `Settings` section |
|                      | Items           | Manage locations                                     | Allows a user to maintain locations                                                                                                              |
|                      |                 | Edit items                                           | Able to edit items, required when saving a barcode                                                                                               |
|                      |                 | Edit Item names, codes and units                     | Can maintain pack variants                                                                                                                       |
|                      |                 | View stock                                           | View stock lines                                                                                                                                 |
|                      |                 | Edit stock                                           | Modify stock lines                                                                                                                               |
|                      |                 | Create Repack Or Split Stock                         | Can create repack or split stock lines                                                                                                           |
|                      |                 | Enter Inventory Adjustments                          | Can maintain inventory adjustments                                                                                                               |
|                      | Ordering        | View purchase orders                                 | Can view [Purchase Orders](/docs/replenishment/purchase-orders/)                                                                                 |
|                      |                 | Edit purchase orders                                 | Can create, edit and delete Purchase Orders and their lines                                                                                      |
|                      |                 | Authorise purchase orders                            | Can move a Purchase Order from `Ready for Approval` to `Ready for Sending`, and edit `Adjusted packs` once it is at `Ready for Sending` or later |
|                      |                 | Finalise purchase orders                             | Can confirm a Purchase Order as `Finalised`                                                                                                      |
|                      | Goods receiving | View goods received                                  | Can view [External Inbound Shipments](/docs/replenishment/inbound-shipments/external-inbound-shipments/)                                         |
|                      |                 | Add/edit goods received                              | Can create, edit and delete External Inbound Shipments                                                                                           |
|                      |                 | Authorise goods received                             | Can approve or reject External Inbound Shipment lines, when authorisation is enabled                                                             |
|                      |                 | Finalise goods received                              | Can confirm External Inbound Shipments as `Verified`                                                                                             |
|                      | Special         | Add / edit prescribers                               | Can add clinicians. In mSupply clinicians are called prescribers                                                                                 |
| Permissions (2)      | Invoices        | View customer invoices                               | Can view Outbound Shipments and prescriptions. Also used to query statistics on the homepage                                                     |
|                      |                 | Create customer invoices                             | Can maintain Outbound Shipments and prescriptions                                                                                                |
|                      |                 | Edit customer invoices                               | Can maintain Outbound Shipments and prescriptions - if either edit or create permission is given the user can edit                               |
|                      |                 | Cancel finalised invoices                            | Can cancel `Verified` prescriptions                                                                                                              |
|                      |                 | Return stock from supplier invoices                  | Can return stock from Inbound Shipments                                                                                                          |
|                      |                 | View supplier invoices                               | Can view Inbound Shipments. Also used to query statistics on the homepage                                                                        |
|                      |                 | Create supplier invoices                             | Can maintain Inbound Shipments                                                                                                                   |
|                      |                 | Edit supplier invoices                               | Can maintain Inbound Shipments - if either edit or create permission is given the user can edit                                                  |
|                      |                 | Finalise supplier invoices                           | Can confirm Inbound Shipments as `Verified`                                                                                                      |
|                      |                 | Return stock from customer invoices                  | Can return stock from Outbound Shipments                                                                                                         |
|                      | Reports         | View reports                                         | Required to print pages, as this uses the reporting system                                                                                       |
|                      | Patients        | View patients                                        | Can view Patients                                                                                                                                |
|                      |                 | Add Patients                                         | Can maintain Patients                                                                                                                            |
|                      |                 | Edit Patient Details                                 | Can maintain Patients - if either add or edit permission is given the user can edit                                                              |
|                      | Names           | Edit customer, supplier & manufacturer names         | Can edit customer and supplier properties                                                                                                        |
| Permissions (3)      | Admin           | View log                                             | Able to view the logs, these show as a tab on many windows                                                                                       |
|                      | Requisitions    | View requisitions                                    | Can view Requisitions and R&R Forms                                                                                                              |
|                      |                 | Create and edit requisitions                         | Can maintain Requisitions and R&R Forms                                                                                                          |
|                      |                 | Create customer invoices from requisitions           | Can create outbound shipments from requisition                                                                                                   |
|                      | Stocktakes      | Create Stocktake                                     | Can create Stocktakes                                                                                                                            |
|                      |                 | Delete Stocktake                                     | Can delete Stocktakes                                                                                                                            |
|                      |                 | Add Stocktake lines                                  | Can add Stocktake lines                                                                                                                          |
|                      |                 | Edit Stocktake lines                                 | Can edit Stocktake lines                                                                                                                         |
|                      |                 | Delete Stocktake lines                               | Can delete Stocktake lines                                                                                                                       |
|                      | Vaccines        | View sensor details                                  | Can view sensor details                                                                                                                          |
|                      |                 | Edit sensor location                                 | Can edit sensor location                                                                                                                         |
|                      |                 | View and edit vaccine vial monitor status            | Can view and edit vaccine vial monitor status on stock lines                                                                                     |
|                      | Assets          | View assets                                          | Can view Assets                                                                                                                                  |
|                      |                 | Add assets visa datamatrix                           | Can add Assets via datamatrix scanning                                                                                                           |
|                      |                 | Add, edit assets                                     | Can maintain Assets                                                                                                                              |
|                      |                 | Change Asset status                                  | Can change the status of Assets (e.g. Functioning, not in use)                                                                                   |
|                      |                 | Setup Assets                                         | Can import Asset catalogue items                                                                                                                 |
| omSupply Permissions | Internal Order  | Confirm Internal Order sent                          | Can confirm Internal Orders as sent                                                                                                              |
|                      | API Access      | Cold chain API access                                | Can access the Cold Chain API                                                                                                                    |
|                      | Admin           | Can modify central data (requires mSupply v7.15.05+) | Can modify data managed by in the Open mSupply Central Server (e.g. Demographic Indicators, Immunization Programs)                               |
|                      |                 | View/edit prescriptions                              | Grants both the view and edit permissions for [Prescriptions](/docs/dispensary/prescriptions/#permissions), including the homepage panel         |
