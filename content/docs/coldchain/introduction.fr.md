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

The cold chain features within Open mSupply allow you to:
- View and manage temperature sensors
- Import data from Berlinger [Fridge-tag](https://www.berlinger.com/cold-chain-management/refrigerator-temperature-logger-solution-1) and [Q-tag](https://www.berlinger.com/shipment-monitoring-solutions) temperature loggers (Berlinger and the mSupply Foundation have been working together to make sure Berlinger temperature monitors are well supported in Open mSupply; you can read more [here](https://www.berlinger.com/partnership-msupply)).
- View logs and breach data from sensors
- Receive notifications of temperature breach and temperature excursion events
 
Sensors can be assigned to a storage location, which then allows you to associate temperature logs and breaches with specific stock lines. You can also view historical data to check if your cold chain equipment is operating correctly and to check if your stock might have been affected by temperature variations.

If a temperature breach happens, then a notification is displayed on every page of Open mSupply as a warning to check potentially affected stock. Once the breach is acknowledged then the notification is no longer shown.

Open mSupply integrates with the android based Cold Chain application; simply configure your Cold Chain application to sync with the Open mSupply server address and configure a username and password. Temperature sensors, breaches and logs will then appear within Open mSupply.

<div class="note">The Cold Chain referred to here is the integration of the Cold Chain features within Open mSupply. There is separate documentation for the <a href="/coldchain/introduction/">Android Cold Chain application</a>.</div>

## Configuration

To begin, enable the store preference for `mobile: Uses Vaccine Module` (see the [store preferences](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab) documentation for how to do this).

Any users who are to view and manage the Cold Chain features should have the following permissions enabled:

- Vaccines
  - View sensor details
  - Edit sensor location

See the [user permissions](https://docs.msupply.org.nz/admin:managing_users#permissions_tabs) documentation for more details.

## Cold chain app integration

The [Cold Chain](/coldchain/introduction/) application is able to sync data to a server. The server can be an instance of Open mSupply or mSupply.

To configure the integration, you will only need to configure a user and then you can update the Cold Chain application.

The user is a standard mSupply user, with the following configuration:
- The default store assigned to the user is the store which the temperature data will be associated with 
- The store will need to be part of the site that Open mSupply is synchronising with. Have a look at the [Admin](/docs/administration/synchronisation/#viewing-the-synchronisation-settings) section to see which site omSupply is syncing with, and then the [Synchronisation](https://docs.msupply.org.nz/synchronisation:sync_sites#viewing_sync_sites) screen to check that your site includes the correct store.
- The user must have the omSupply permission of `Cold chain API access` (see below)

![Cold chain API permission](/docs/coldchain/images/coldchain_permission.png)



From here, simply follow the steps in the Cold Chain application documentation for [Integrating with mSupply Desktop](/coldchain/desktop-integration/#msupply-desktop-setup-steps)
