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

## Overview

Open mSupply offers the following cold chain functionality: 

- **Remote temperature monitoring** 
- **Cold chain equipment inventory management** 
- **Gap analysis planning system for cold chain equipment**
- **Compromised stock identification** 

#### Remote temperature monitoring (RTM)

Open mSupply allows health facilities to:
- View temperature logs from fridges and freezers 
- View and respond to temperature breach events
- Manage temperature sensors
- Receive real-time notifications of temperature breach and temperature excursion events

Central health authorities can: 
- View temperature data from all health facilities in centralised web portal

Temperature data can be imported into Open mSupply from multiple sources. 
The methods currently supported are:  
- Connect [mSupply temperature sensors](https://msupply.foundation/open-msupply/cold-chain/#mSupplySensor) to Open mSupply via Bluetooth
- Import data from Berlinger [Fridge-tags](https://www.berlinger.com/cold-chain-management/refrigerator-temperature-logger-solution-1) and [Q-tags](https://www.berlinger.com/shipment-monitoring-solutions) via USB (you can read more [here](https://www.berlinger.com/partnership-msupply)).

#### Cold chain equipment inventory management (CCEI)

Open mSupply allows health facilities to:
- Capture details of cold chain equipment (CCE) such as fridges, freezers and remote temperature monitoring devices
- View operation and maintenance manuals for CCE
- Update CCE functional status
- Record CCE maintenance logs

Central health authorities can: 
- View the location of CCE assets for all health facilities
- Distribute CCE between health facilities
- View aggregated CCE data, such as functional status, in a centralised web portal
#### Gap analysis planning system (GAPS)

Open mSupply includes a comprehensive CCE gap analysis module. 

This provides EPI teams with the tools to: 
- Assess CCE capacity for the country
- Forecast the expected demand for CCE capacity over the next 5 years
- Compare the current CCE capacity to the expected demand
- Identify facilities that will need intervention due to increased demand
- Identify facilities that will need intervention due to CCE reaching end-of-life
#### Compromised stock identification

Open mSupply allows health facilities to: 
- Link temperature data to stock data
- View stock lines that have been potentially compromised in a centralised web portal

Sensors can be linked to a stock storage [Location](/docs/inventory/locations/). 
This link allows Open mSupply to associate temperature logs and breach events with specific stock lines. 
Historical data is available to check that cold chain equipment is operating correctly and to see whether stock might have been affected by any temperature variations.

## Getting started

To begin using cold chain features enable the [store preference](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab) called `mobile: Uses Vaccine Module`.

Any users that require access to cold chain features should have the following [user permissions](https://docs.msupply.org.nz/admin:managing_users#permissions_tabs) enabled:

- Vaccines
  - `View sensor details`
  - `Edit sensor location`

