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

## Menu visibility

The permissions which a user has within a store determines which menu items are available. If a user does not have permission to view an area then the corresponding menu item isn't shown. This allows the menu to be kept as simple as possible for users, only showing what they require.

Here is the list of menu items, and the permission or condition which is needed for it to show. Note that `None` in the permission column means that the item will show for all users.

| Open mSupply menu item                   | Legacy mSupply permission required                       | Other conditions                                                     |
| ---------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------- |
| Home                                     | None                                                     | —                                                                    |
| **Replenishment** → Purchase orders      | Permissions > Ordering > View purchase orders            | Procurement enabled                                                  |
| Replenishment → Internal orders          | Permissions (3) > Requisitions > View requisitions       | —                                                                    |
| Replenishment → Inbound shipments        | Permissions (2) > Invoices > View supplier invoices      | —                                                                    |
| Replenishment → Supplier returns         | Permissions (2) > Invoices > View supplier invoices      | —                                                                    |
| Replenishment → R&R forms                | Permissions (3) > Requisitions > View requisitions       | Program module enabled                                               |
| Replenishment → Suppliers                | None of its own                                          | At least one other Replenishment item is visible                     |
| **Inventory** → Stock                    | Permissions > Items > View stock                         | —                                                                    |
| Inventory → Locations                    | None of its own                                          | Stock, Stocktakes or Stock movement is visible                       |
| Inventory → Stocktakes                   | Permissions > Items > View stock                         | —                                                                    |
| Inventory → Stock movement               | Permissions > Items > View stock                         | —                                                                    |
| **Distribution** → Customer requisitions | Permissions (3) > Requisitions > View requisitions       | —                                                                    |
| Distribution → Outbound shipments        | Permissions (2) > Invoices > View customer invoices      | —                                                                    |
| Distribution → Customer returns          | Permissions (2) > Invoices > View customer invoices      | —                                                                    |
| Distribution → Customers                 | None of its own                                          | At least one other Distribution item is visible                      |
| **Dispensary** → Patients                | Permissions (2) > Names > View patients                  | Dispensary store                                                     |
| Dispensary → Prescriptions               | Open mSupply permissions > View/edit prescriptions       | Dispensary store                                                     |
| Dispensary → Dispensing                  | Permissions (2) > Invoices > View customer invoices      | Dispensary store                                                     |
| Dispensary → Encounters                  | None                                                     | Dispensary store; program module enabled                             |
| Dispensary → Clinicians                  | None of its own                                          | Dispensary store; Prescriptions, Dispensing or Encounters is visible |
| **Cold chain** → Equipment               | Permissions (3) > Assets > View assets                   | Vaccine module enabled                                               |
| Cold chain → Monitoring                  | Permissions (3) > Vaccines > View sensor details         | Vaccine module enabled                                               |
| Cold chain → Sensors                     | Permissions (3) > Vaccines > View sensor details         | Vaccine module enabled                                               |
| **Programs** → Immunisations             | None                                                     | Central server; vaccine module enabled                               |
| **Catalogue** → Assets                   | Permissions (3) > Assets > View assets                   | —                                                                    |
| Catalogue → Items                        | None                                                     | —                                                                    |
| Catalogue → Master lists                 | None                                                     | —                                                                    |
| **Manage** → Stores                      | None                                                     | Central server                                                       |
| Manage → Indicators & demographics       | None                                                     | Central server; vaccine module enabled                               |
| Manage → Global preferences              | None                                                     | Central server                                                       |
| Manage → Equipment                       | Permissions (3) > Assets > View assets                   | Central server; vaccine module enabled                               |
| Manage → Campaigns                       | None                                                     | Central server                                                       |
| Manage → Custom fields                   | Permissions > Admin > Access server administration       | Central server                                                       |
| Manage → Sites                           | Permissions > Admin > Access server administration       | Central server                                                       |
| Manage → Reports                         | Permissions > Admin > Access server administration       | Central server                                                       |
| Manage → Sync message                    | Permissions > Admin > Access server administration       | Central server                                                       |
| Manage → Plugins                         | Permissions > Admin > Access server administration       | Central server                                                       |
| Manage → Help documents                  | Permissions > Admin > Access server administration       | Central server                                                       |
| Reports                                  | Permissions (2) > Reports > View reports                 | —                                                                    |
| Settings                                 | None                                                     | —                                                                    |
| Help                                     | None                                                     | —                                                                    |
| Plugin pages and sections                | Whatever the plugin declares; the user needs all of them | —                                                                    |

<div class="note">A section heading (in bold above) disappears once all of its items are hidden.</div>
<div class="tip">In the current version of Open mSupply a user will require <b>View reports</b> permission to print forms. Be careful when removing the permission from users.</div>
