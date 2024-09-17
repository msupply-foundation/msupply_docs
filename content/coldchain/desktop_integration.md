+++
title = "Integration with mSupply Desktop"
description = "mSupply Cold Chain sensor setup."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 105
sort_by = "weight"
template = "coldchain/page.html"

[extra]
lead = ""
toc = true
top = false
+++



### Prerequisites

Minimum version requirements  

#### mSupply Foundation temperature sensors

* mSupply Cold Chain app version: 0.5.6 recommended
* mSupply Desktop version: V5-04-00 or higher recommended

### mSupply Desktop Setup Steps

Instructions on the server side setup are located on the [mSupply Desktop documentation site](https://docs.msupply.org.nz/cold_chain_equipment:configure_coldchain_app_on_desktop).

### Developer notes

The Swagger API used for communicating with mSupply desktop is described [here](https://app.swaggerhub.com/apis/msupply-foundation/ColdChain/1.0.1#/):

### mSupply Cold Chain V0.5.4+

Navigate to **SETTINGS** (located at the bottom of the main screen): 

![Settings Here!](/coldchain/images/settings_tab.png)

Navigate to **SYNC SETTINGS**

![Settings Here!](/coldchain/images/sync_settings.png)


* Put in your store credentials under USERNAME and PASSWORD
* Add the sync url and port 
    * Example: http://192.168.4.3:8080

![Sync Settings!](/coldchain/images/sync_settings_detail.png)

Press the 'Start Integration' button to start sending data to the server. 

mSupply Cold Chain will send data to the server every 1-2 minutes.


### mSupply Cold Chain V0.5.3 (and earlier) Setup Steps

Navigate to **SETTINGS** (located at the bottom of the main screen): 

![Settings Here!](/coldchain/images/settings_tab.png)

Navigate to **SYNC SETTINGS**

![Settings Here!](/coldchain/images/sync_settings.png)


* Put in your store credentials under USERNAME and PASSWORD
* Add Urls
    * Login - example: http://192.168.4.3:8080/coldchain/v1/login
    * Sensor - example: http://192.168.4.3:8080/coldchain/v1/sensor
    * Temperature-log - example: http://192.168.4.3:8080/coldchain/v1/temperature-log
    * Temperature-breach - example: http://192.168.4.3:8080/coldchain/v1/temperature-breach

![Integration Settings!](/coldchain/images/integration_settings.png)

Press the 'Start Integration' button to start sending data to the server. 

mSupply Cold Chain will send data to the server every 1-2 minutes.

On desktop computers running mSupply, a new floating cold chain monitoring window is shown to users: 

![Fridge down, Fridge down!](/coldchain/images/desktop_notifications.png)


