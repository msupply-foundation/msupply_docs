+++
title = "Introduction (RU)"
description = "Open mSupply Introduction."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Welcome to Open mSupply for Desktop, Web & Android!"
toc = true
top = true
+++

## History

Open mSupply builds on over 20 years of mSupply, over which time it has become the most used Logistics Management Information System (LMIS) in low & middle income countries.

## What platforms are supported?

Open mSupply runs on Desktop (Windows, Linux & Mac), as a web application in your browser, or also as an Android application (for tablets, not for phones at this stage).

## Where can I download it?

We provide a number of downloads on our [releases page](https://github.com/openmsupply/open-msupply/releases) hosted in our GitHub repository.
The latest version will be shown at the top of the list of releases - we generally recommend using the latest version where possible.

Within each release there is an `Assets` section which has the files you need to install Open mSupply.

### Windows

There are installers built for each release, providing:

- **Server**: which supports either SQLite or postgreSQL and runs as a windows service. The installer name for the server is `omSupply_Server_[version].exe`
- **Desktop**: A windows application which allows you to connect to a running server. The installer name for the server is `omSupply_Desktop_[version].exe`
- **Standalone**: combines the above two; runs a server as a windows service and has a windows application which will connect to it. The installer name for the server is `omSupply_Standalone_[version].exe`
- **Demo**: A pre-configured server installation which does not require a central server to run. The installer name for the server is `omSupply_Demo_[version].exe`

### Android

The android version is distributed as an `.apk` file which you can install. This file has the name `open-msupply-[version]-release.apk`

### MacOS

For the mac desktop version, we provide a `.dmg` file, which has the name `omSupply_[version].dmg`.

## What does it do?

In short, Open mSupply manages your inventory, recording every receipt and issue of goods, and thereby providing a running balance of your stock on hand of each item.

Open mSupply does much more than that. Features include:

- Inventory management
  - Easily see per-batch stock on hand
  - Manage shelf locations for your store/warehouse
  - Assign locations to incoming stock, or change locations as you rearrange stock in your warehouse
  - Perform stocktakes, and assign reasons for inventory adjustments
- Receive and fulfil orders from customers (facilities you supply)
- Place orders with your supplying store
  - Quantify amounts required based on simple or complex formulas
  - Track order status as your supplying store fulfils and ships the order!
  - Receive goods into stock when the order arrives
- Be alerted to low stock levels from the dashboard

## What makes mSupply special?

There are a lot of systems that manage inventory. Open mSupply has unique features that make it ideal to use for health supply chains in low resource settings:

- **Offline first**: mSupply is designed from the ground up to work without internet. We know from 20 years of experience that even the most reliable internet connections sometimes fail or get overloaded. mSupply allows you to work without having to worry about second-by-second internet quality. Of course, when you need to place orders or receive updates from other facilities, you need internet for a few minutes then.
- **Scalable**: We've designed Open mSupply to handle billions of transactions a year, but to also work on an Android tablet! You can implement mSupply in one facility, knowing that if you later decide to deploy thousands of sites, mSupply will still be the right tool.

To get some insight into the full breadth of mSupply's functionality, have a look at the legacy mSupply software documentations at [https://www.msupply.org.nz](https://www.msupply.org.nz) - it's almost 1000 pages if you print it all (so maybe don't ☺️)

### Terminology

The following table outlines some of the common terms used in mSupply, and also guides users of legacy mSupply regarding terminology improvements we have made.

| Open mSupply Term |  Legacy mSupply term  | Definition                                                            |
| :---------------: | :-------------------: | :-------------------------------------------------------------------- |
| Outbound Shipment |   Customer Invoice    | The creation of a supply of goods to a particular customer (facility) |
| Inbound Shipment  |   Supplier Invoice    | The receiving of a supply of goods from a particular supplier         |
|    Requisition    | Customer Requisitions | An order for supply of goods made by a particular customer (facility) |
|  Internal Orders  | Supplier Requisitions | A request for stock made for a particular supplier (facility)         |

## Getting Started

To run Open mSupply you will require an mSupply server to operate as a central server. While we are planning to create a new open source central server, that is not yet available.

Note that we are also currently working through testing the migration process and the integration of Open mSupply with an existing mSupply system. As such, we aren't recommending that you upgrade without talking to us first. 

### Installation

#### Preconditions
1.  You need an existing mSupply system with Legacy mSupply server with web and sync server modules
2. As of December 2023, it is not possible to migrate an existing Legacy (or Mobile) mSupply store to an Open mSupply store; only new stores can be created in Open mSupply

#### Procedure:
1. Any Open mSupply stores need to be created in the Legacy mSupply central server as detailed in [Creating new stores](https://docs.msupply.org.nz/other_stuff:virtual_stores#creating_new_stores).  Note that you will normally [Turn an existing customer into a store](https://docs.msupply.org.nz/other_stuff:virtual_stores#transition_a_customer_to_a_virtual_store).
2. Users need to be created and configured for the store(s) in the Legacy mSupply central server as detailed in [Managing Users](https://docs.msupply.org.nz/admin:managing_users)
3. The Open mSupply site needs to be created  in the Legacy mSupply central server as detailed in [Creating New Sync Sites](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)
4. The store(s) will need to be added to the Open mSupply site in the Legacy mSupply central server as detailed in [Adding stores](https://docs.msupply.org.nz/synchronisation:sync_sites#adding_stores)
5. Deploy Open mSupply to your device from the [Open mSupply github repository](https://github.com/msupply-foundation/open-msupply).  Consult with TMF support to make sure that you are deploying the correct version
6. Initiate Open mSupply on the device.  You should see something like the screen below.
    - URL:  Consult with TMF support to make sure that you have the correct URL
    - Site name:  As entered in [Creating New Sync Sites](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)
    - Password:  As entered in [Creating New Sync Sites](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)

![Initialisation](/docs/introduction/images/initialisation.png)
