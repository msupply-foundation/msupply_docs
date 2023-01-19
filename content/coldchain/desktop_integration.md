+++
title = "Integration with mSupply Desktop"
description = "mSupply Coldchain sensor setup."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 105
sort_by = "weight"
template = "coldchain/page.html"

[extra]
lead = "The landing page"
toc = true
top = false
+++



### Prerequisites

Minimum version requirements  

#### BlueMaestro sensors

* mSupply cold chain app version: 0.4.2 recommended
* mSupply Desktop version: V5-04-00 or higher recommended

#### Laird Sensors

* mSupply cold chain app version: 0.5.0-rc0
* Minimum mSupply Desktop version: V5-07-00-RC41

### mSupply Desktop Setup Steps

Instructions on the server side setup are located on the [mSupply Desktop documentation site](https://docs.msupply.org.nz/cold_chain_equipment:configure_coldchain_app_on_desktop).

### Developer notes

The Swagger API used for communicating with mSupply desktop is described [here](https://app.swaggerhub.com/apis/msupply-foundation/ColdChain/1.0.1#/):

### mSupply Cold Chain Setup Steps

Navigate to **SETTINGS** (located at the bottom of the main screen): 

![Settings Here!](/coldchain/images/settings_tab.png)

Navigate to **SYNC SETTINGS**

![Settings Here!](/coldchain/images/sync_settings.png)


* Put in your store credentials under USERNAME and PASSWORD
* Add Urls
    * Authentication - example: http://192.168.4.3:8080/coldchain/v1/login
    * Temperature-log - example: http://192.168.4.3:8080/coldchain/v1/temperature-log
    * Temperature-breach - example: http://192.168.4.3:8080/coldchain/v1/temperature-breach
    * Sensor - example: http://192.168.4.3:8080/coldchain/v1/sensor

![Integration Settings!](/coldchain/images/integration_settings.png)

mSupply Coldchain will send data to the server every 1-2 minutes.

On desktop computers running mSupply, a new floating Coldchain monitoring window is shown to users: 

![Fridge down, Fridge down!](/coldchain/images/desktop_notifications.png)


