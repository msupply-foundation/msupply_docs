+++
title = "Getting started"
description = "mSupply Cold chain setup."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 103
sort_by = "weight"
template = "coldchain/page.html"

[extra]
lead = ""
toc = true
top = true
+++

### Mobile device

We recommend the following specifications for the mobile device:

- Tablet with 10.1 inch display or larger
- Android Version 11 or higher
- Screen resolution of 800w x 1280h or higher

Once mSupply Cold Chain is open on the device, it will prevent the device from going to sleep. For this reason, we recommend you keep the device connected to a power supply when using mSupply Cold Chain.

### Sensors

Manufacturer: Blue Maestro Model: DSCTHD001

(There is a bug in the firmware of model DSCTEMP001 - The above model is the same electronics, but without the firmware bug)

Alternative sensor: Laird BT510

### Permissions and peripherals

The first time you Open mSupply Cold Chain, it will guide you through enabling permissions and turning on required peripherals if they have not already been set correctly.

If devices are managed through a Mobile Device Management (MDM) system, then the permissions described here will likely need to configured through a policy / profile in the MDM, and will not be configurable on the device as described here.

1. Allow the application to access photos, media and files on your device: this will allow the export of log data to the device for report and email purposes.

![Android Access!](/coldchain/images/allow_coldchain_access.png)

2. Allow the application to access this device’s location: this will allow the Android’s low energy Bluetooth to work.
3. Pressing OK will take you to the Location to ensure that it is turned on.

![Android Access- again!](/coldchain/images/allow_coldchain_access_more.png)

4. You will be prompted to confirm Bluetooth permission. Select Allow.

![Bluetooth On!](/coldchain/images/bluetooth_on.png)

Once a sensor is linked to mSupply Cold Chain, it will be automatically synchronised via Bluetooth according to the user-programmable schedule. mSupply Cold Chain requires Bluetooth to be enabled in order to receive temperature logs. If Bluetooth is disabled when the application is operating, the user will be prompted to reconnect.

If the device is turned off, mSupply Cold Chain is closed, or Bluetooth is disabled, the sensor will store up to 20,000 temperature logs as per the sensor settings. After 20,000 logs, the sensor will overwrite the oldest logs. When the device, mSupply Cold Chain application or Bluetooth is enabled again, please allow a few log intervals for transfer of all saved logs.

We recommend that each device should be linked to a maximum of six sensors. Each sensor should only be linked to one device.

For information on how to link sensors to mSupply Cold Chain please go to Sensor Settings.
