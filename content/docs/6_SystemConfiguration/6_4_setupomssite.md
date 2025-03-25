+++
title = "Setting up OMS Site"
description = "Setting up OMS Site."
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 205
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

## Installation

#### Preconditions

1. You need an existing mSupply system with a Legacy mSupply server with web and sync server modules. You can read more about the hardware requirements for Legacy mSupply server [here](https://docs.msupply.org.nz/setting_up_msupply:requirements#requirements)
2. As of December 2023, it is not possible to migrate an existing Legacy (or Mobile) mSupply store to an Open mSupply store; only new stores can be created in Open mSupply

#### Procedure:

1. Any Open mSupply stores need to be created in the Legacy mSupply central server as detailed in [Creating new stores](https://docs.msupply.org.nz/other_stuff:virtual_stores#creating_new_stores). Note that [turning an existing customer into a store](https://docs.msupply.org.nz/other_stuff:virtual_stores#transition_a_customer_to_a_virtual_store) is not currently supported for Open mSupply sites.
2. Users need to be created and configured for the store(s) in the Legacy mSupply central server as detailed in [Managing Users](https://docs.msupply.org.nz/admin:managing_users)
3. The Open mSupply site needs to be created in the Legacy mSupply central server as detailed in [Creating New Sync Sites](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)
4. The store(s) will need to be added to the Open mSupply site in the Legacy mSupply central server as detailed in [Adding stores](https://docs.msupply.org.nz/synchronisation:sync_sites#adding_stores)
5. Deploy Open mSupply to your device from the [Open mSupply GitHub repository](https://github.com/msupply-foundation/open-msupply). Consult with TMF support to make sure that you are deploying the correct version
6. Initiate Open mSupply on the device. You should see something like the screen below.
   - URL: Consult with TMF support to make sure that you have the correct URL
   - Site name: As entered in [Creating New Sync Sites](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)
   - Password: As entered in [Creating New Sync Sites](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)

![Initialisation](/docs/introduction/images/initialisation.png)