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

Open mSupply provides the following cold chain features: 

- **Remote temperature monitoring**
- **Cold Chain Equipment (CCE) inventory management**
- **Compromised stock identification** 

#### Remote temperature monitoring

Open mSupply allows health facilities to:
- View temperature logs from fridges and freezers
- View and respond to temperature breach events
- Manage temperature sensors
- Receive real-time notifications of temperature breach and temperature excursion events

Temperature data can be imported into Open mSupply from multiple sources. 
The current supported methods are:  
- Connect [mSupply temperature sensors](https://msupply.foundation/open-msupply/cold-chain/#mSupplySensor) to Open mSupply via Bluetooth
- Import data from Berlinger [Fridge-tags](https://www.berlinger.com/cold-chain-management/refrigerator-temperature-logger-solution-1) and [Q-tags](https://www.berlinger.com/shipment-monitoring-solutions) via USB (you can read more [here](https://www.berlinger.com/partnership-msupply)).


#### Cold Chain Equipment inventory management


## Configuration

To begin, enable the store preference for `mobile: Uses Vaccine Module` (see the [store preferences](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab) documentation for how to do this).

Any users who are to view and manage the Cold Chain features should have the following permissions enabled:

- Vaccines
  - View sensor details
  - Edit sensor location

See the [user permissions](https://docs.msupply.org.nz/admin:managing_users#permissions_tabs) documentation for more details.

#### Compromised stock identification

Sensors can be assigned to a storage location, which then allows you to associate temperature logs and breaches with specific stock lines. You can also view historical data to check if your cold chain equipment is operating correctly and to check if your stock might have been affected by temperature variations.
