+++
title = "Introduction"
description = "Temperature monitoring and reporting features"
date = 2023-11-08T15:20:00+00:00
updated = 2023-11-08T15:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The cold chain features within open mSupply allow you to:
- view and manage temperature sensors
- import data from Berlinger Q-tag temperature loggers
- view logs and breach data from sensors
- receive notifications of temperature breach events
 
Sensors can be assigned to a storage location, which then allows you to associate temperature logs and breaches with specific stock.

Open mSupply integrates with the android based cold chain application; simply configure your cold chain application to sync with the open mSupply server address and configure a username and password. Temperature sensors, breaches and logs will then appear within open mSupply.

Note that the cold chain referred to here is the integration of cold chain features within open mSupply. There is separate documentation for the android [cold chain application](/coldchain/introduction/).

## Configuration

To begin, enable the store preference for `mobile: Uses Vaccine Module` (see the [store preferences](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab) documentation for how to do this).

Any users who are to view and manage cold chain features should have the following permissions enabled:

- Vaccines
  - View sensor details
  - Edit sensor location

See the [user permissions](https://docs.msupply.org.nz/admin:managing_users#permissions_tabs) documentation for how to do this

## Cold chain app integration

The [Cold Chain](/coldchain/introduction/) application is able to sync data to a server. The server can be an instance of mSupply or now, open mSupply.

To configure the integration, you will only need to configure a user and then you can update the cold chain application.

The user is a standard mSupply user, with the following configuration:
- The default store assigned to the user is the store which the temperature data will be associated with 
- The user must have the omSupply permission of `Cold chain API access` (see image below)
![Cold chain API permission](/docs/coldchain/images/coldchain_permission.png)
- The store will need to be part of the site that open mSupply is synchronising with. Have a look at the [Admin](/docs/administration/synchronisation/#viewing-the-synchronisation-settings) section to see which site omSupply is syncing with, and then the [Synchronisation](https://docs.msupply.org.nz/synchronisation:sync_sites#viewing_sync_sites) screen to check that your site includes the correct store.


From here, simply follow the steps in the cold chain application documentation for [Integrating with mSupply Desktop](/coldchain/desktop-integration/#msupply-desktop-setup-steps)
