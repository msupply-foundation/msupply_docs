+++
title = "Terminology Explainer"
description = "Helping you understand how terms we use map to other sytems"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 4
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = true
+++

## Introduction

There's an old computer science joke: "There are 2 things that are hard in computer science: cache invalidation, off-by-1 errors, and naming things"

Putting aside the cheesy off-by-1 part of the joke, the "naming things" part is very true. 
We could spend all our time arguing about naming things, and never deliver any useful system at all!

Our approach is to try and combine industry standard naming, what is customary in health supply chains in different countries, all with a nod to mSupply's historical names for things. 
It's clearly impossible to find names that will satisfy all those criteria, so this user guide page will hopefully ease the pain.

#### Items, Products, SKUs
Open mSupply is different to other inventory management systems in that the core concept for inventory is an **item** - which is usually a generic medicine or product with the unit of measurement specified, but no pack size. There's a good reason for this:
* Most public health systems operate on generic names
* Reporting usually wants to know the total amount of generic item, not just of a particular product/SKU[^1] that was used

**Item variants** in Open mSupply are the equivalent of an SKU - they have a brand, barcode, pack size, etc.

##### Item examples

The following are examples of how Open mSupply expects items to be structured for stock handling.

**Bold** text indicates the property that indicates the item should be separated from the item above. 

**Medicines**

| Item | Active ingredient | Strength  | Unit        |
| ---- | ----------------- | --------- | ----------- |
| 1    | Paracetamol       | 500mg     | Tablet      |
| 2    | Paracetamol       | 500mg     | **Capsule** |
| 3    | Paracetamol       | **250mg** | Capsule     |

**Vaccines**

| Item | **Type**          | Form                | **Unit**     | **Doses / unit** | **Dosage** | Administration route |
| ---- | ----------------- | ------------------- | ------------ | ---------------- | ---------- | -------------------- |
| 4    | Rotavirus vaccine | Liquid              | Plastic tube | 1                | 2          | Oral                 |
| 5    | Rotavirus vaccine | Liquid              | Plastic tube | 1                | **3**      | Oral                 |
| 6    | Rotavirus vaccine | Liquid              | **Vial**     | 1                | 3          | Oral                 |
| 7    | Rotavirus vaccine | Liquid              | Vial         | **5**            | 3          | Oral                 |
| 8    | Rotavirus vaccine | **Liquid (frozen)** | Vial         | 5                | 3          | Oral                 |
| 9    | Rotavirus vaccine | Liquid (frozen)     | Vial         | 5                | 3          | **Intramuscular**    |
| 10   | Rotavirus vaccine | Lyophilised         | Two vial set | 1                | 3          | Oral                 |
|      |                   |                     |              |                  |            |                      |

##### Variant examples

The following are examples of item variants, using items from each of the medicines and vaccines tables above.

**Medicines**

| **Item**                    | **Variant** | **Commercial name**  | **Manufacturer**                         |
| --------------------------- | ----------- | -------------------- | ---------------------------------------- |
| 1. Paracetamol 500mg tablet | A           | Medreich Paracetamol | Sri Krishna Pharmaceuticals Limited      |
| 1. Paracetamol 500mg tablet | B           | Palmol               | Fine Chemicals Corporation (Pty) Limited |

**Vaccines**

| **Item**                                                                      | **Variant** | **Commercial name** | **Manufacturer**                   | Storage temperature |
| ----------------------------------------------------------------------------- | ----------- | ------------------- | ---------------------------------- | ------------------- |
| 10. Rotavirus vaccine (lyophilised) - 1 dose - two vial set - dosage 3 - oral | A           | Rotasiil            | Serum Institute of India Pvt. Ltd. | 2-8°C               |
| 10. Rotavirus vaccine (lyophilised) - 1 dose - two vial set - dosage 3 - oral | B           | Rotasiil Thermo     | Serum Institute of India Pvt. Ltd. | +25°C               |

#### Facilities, Warehouses, Stores, Sites, Organisational Units
The major ERP systems all use different terminology for site-level organizational units that manage inventory.

In mSupply, we have the following concepts:

| Concept      | Explanation                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Store**    | A (virtual) store is a unit that manages it's own inventory and transactions. It has it's own users with their own set of permissions                                                                                                                                                                                                                         |
| **Site**     | A (remote) site has an Open mSupply server that synchronises with the Open mSupply central server.<br>A site can contain 1 or more stores (for example, it might have one essential medicines store, a laboratory items store, and an EPI store, all managed by different users, but all logging in \[usually on the local wifi network\] to the same server) |
| **Facility** | The physical complex at a particular geographical location. Usually a facility will have a single Open mSupply site, even if it has lots of physical stores. The only reason to have more than one site at a facility is if the stores can't all connect to the same local network.                                                                           |
##### Comparison with other ERP systems:
In **Odoo**, this concept is typically referred to as a "Warehouse." Each warehouse represents a physical location where inventory is stored and managed, while still being part of the broader company structure.

In **SAP**, this would be called a "Plant" or "Storage Location" depending on the exact context. A Plant represents a separate facility or manufacturing site that manages its own inventory.

In **Microsoft Dynamics**, this concept is called a "Site" or "Warehouse" depending on which Dynamics product you're using (Dynamics 365 Business Central vs. Dynamics 365 Supply Chain Management).

[^1]: SKU = Stock Keeping Unit - a particular brand, pack size (and maybe packging variation) of an item.
