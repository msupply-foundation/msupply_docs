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

The following table lists the area and name of the permissions in the central server which are of relevance to Open mSupply. In the table, the description explains where this permission might be used in omSupply and why you may need to enable it.

In addition to these specific permissions, you'll need to ensure that the user has access to the store(s) which they'll be working in.

| Tab             | Area         | Permission                   | Description                                                                                      |
| --------------- | ------------ | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| Permissions     | Admin        | Access server administration | Allows access to the `Admin` page                                                                |
| Permissions     | Items        | Manage locations             | Allows a user to maintain locations                                                              |
|                 |              | Edit items                   | Able to edit items, required when saving a barcode                                               |
|                 |              | View stock                   | View stock lines                                                                                 |
|                 |              | Edit stock                   | Modify stock lines                                                                               |
| Permissions (2) | Invoices     | View customer invoices       | Can view Outbound Shipments. Also used to query statistics on the dashboard                      |
|                 |              | Create customer invoices     | Can maintain Outbound Shipments                                                                  |
|                 |              | Edit customer invoices       | Can maintain Outbound Shipments - if either edit or create permission is given the user can edit |
|                 |              | View supplier invoices       | Can view Inbound Shipments. Also used to query statistics on the dashboard                       |
|                 |              | Create supplier invoices     | Can maintain Inbound Shipments                                                                   |
|                 |              | Edit supplier invoices       | Can maintain Inbound Shipments - if either edit or create permission is given the user can edit  |
| Permissions (2) | Reports      | View reports                 | Required to print pages, as this uses the reporting system                                       |
| Permissions (3) | Admin        | View log                     | Able to view the logs, these show as a tab on many windows                                       |
| Permissions (3) | Requisitions | View requisitions            | RequisitionQuery                                                                                 |
|                 |              | Create and edit requisitions | RequisitionMutate                                                                                |
| Permissions (3) | Stocktakes   | Create stocktake             | Can create stocktakes                                                                            |
|                 |              | Delete stocktake             | Can delete stocktakes                                                                            |
