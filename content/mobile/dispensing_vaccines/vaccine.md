+++
title = "Vaccines"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 357
template = "mobile/page.html"

[extra]
toc = true
top = true
+++

This functionality is available from mSupply mobile v7.0.0 onwards.

# Cold Chain (for Vaccines and other Cold chain items)

## Setting up to use the Vaccine module

Vaccine mode only shows **if the store is configured correctly on the server**, with the preference 'mobile: Uses vaccine module' enabled. Read how [here](/mobile/dispensing_vaccines/setup/#store-settings-on-your-central-msupply-server).

## Permissions and Services

The vaccine module requires additional permissions and services to be enabled on your mobile device. 

When all permissions and services required for Mobile ColdChain are enabled, the 'cog icon' will be in the mSupply Mobile title line (top right of your mobile screen):

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_permission.png)

However, if some required permissions and services are disabled, the 'hazard icon' will be in the mSupply Mobile title line:

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_permission2.png)

If your title line shows that some permissions and services are disabled, press on the 'hazard icon' to open the **Permissions and Services** window.  

Any permission or service that is disabled will be indicated with a 'cross icon' as below:

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_permissions_services.png)

To enable, simply press on the cross icon next to the permission or service.  Your device will prompt you to enable the permission or service.

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_permissions2.png)

Press **Allow**.

Once all of the permissions and services have been enabled, your window will look like this:

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_permissions3.png)

### Approved mSupply Temperature Sensors

The following is a list of approved temperature sensors that will work together with mSupply Cold Chain and mSupply Mobile: 

 *Blue Maestro Tempo Disc™ Waterproof IP67 Bluetooth Temperature Sensor Beacon and Logger [Download PDF](https://apps.who.int/immunization_standards/vaccine_quality/pqs_catalogue/LinkPDF.aspx?UniqueID=36773b7f-77f4-4b10-b9dc-98be5966fc1d&amp;TipoDoc=DataSheet&amp;ID=0).  

Approved sensors can be purchased directly from the manufacturer or reseller online.  Please contact [&#99;&#111;&#108;&#100;&#99;&#104;&#97;&#105;&#110;&#64;&#109;&#115;&#117;&#112;&#112;&#108;&#121;&#46;&#102;&#111;&#117;&#110;&#100;&#97;&#116;&#105;&#111;&#110;](mailto:&#99;&#111;&#108;&#100;&#99;&#104;&#97;&#105;&#110;&#64;&#109;&#115;&#117;&#112;&#112;&#108;&#121;&#46;&#102;&#111;&#117;&#110;&#100;&#97;&#116;&#105;&#111;&#110;) for further information.  

These sensors have been approved by the World Health Organisation as a temperature monitoring device suitable for use in immunization programmes.  


## Adding Sensors

The first time you use the Vaccine module, there will be no sensors connected to your device.

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_add_sensors.png)

Tap **Add Sensor** to start the three-step process to add a sensor.

Please make sure that you have an approved mSupply temperature sensor.  Only approved sensors can be connected to mSupply Mobile. 

We recommend you keep the sensor close when you are adding or editing it within mSupply Mobile.  Also, allow for up to a minute for any changes to be communicated via Bluetooth. 
If you are using a brand new sensor, press the top of the sensor until it flashes to turn it on.

##### Step 1: Select the correct sensor

When you tap **Add Sensor**, your device will scan and list any sensors that can be connected by Bluetooth.

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_add_sensors1.png)

If you tap the **BLINK** button, the LED light for that sensor will flash.  You can use this to make sure that you are connecting the correct sensor. 

When you are sure that you have the correct sensor, tap **Connect** for that sensor.  

##### Step 2: Sensor Thresholds

Firstly, some definitions:

  * __Consecutive__ means a single event where the temperature stays over (or under) the threshold for the whole time. So if you have a threshold of 8 degrees, and a consecutive breach time of 10 minutes, then a breach that lasts for 6 minutes, then drops under the threshold for 2 minutes, then breaches again for 6 minutes is __not__ a consecutive breach, but the 2 x 6 minute breaches are added to the cumulative breach records.
  * __Cumulative__ means adding together the total time over a certain temperature for a series of breaches.

Now we can set the temperature breach conditions for the sensor.  There are four thresholds that you can define:

  * Hot Consecutive

    * A breach will be displayed when the sensor logs a temperature above this value for longer than the specified time. Using the **+/-** buttons, select the maximum temperature and minimum duration required to identify the breach.

  * Cold Consecutive

    * A breach will be displayed when the sensor logs a temperature below this value for longer than the specified time. Using the **+/-** buttons, select the minimum temperature and minimum duration required to identify the breach.

  * Hot Cumulative

    * A breach will be displayed when the sensor logs a temperature above this value for longer than the total specified time (total time is calculated as the sum of all breach times). Using the **+/-** buttons, select the maximum temperature and minimum total duration required to identify the breach.

  * Cold Cumulative

    * A breach will be displayed when the sensor logs a temperature below this value for longer than the total specified time specified (total time is calculated as the sum of all breach times). Using the **+/-** buttons, select the minimum temperature and minimum total duration required to identify the breach.

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_add_sensors2.png)

<div class="tip">

It is possible to **long press** the +/- buttons to change the values faster.
</div>

Tap **Back** if you wish to return to Step 1 and check that you have the correct sensor.
Tap **Next** to move to Step 3.  
Tap **Cancel** if you no longer want to add the sensor.

##### Step 3: Sensor connection

In this final step you need to enter:

  **Sensor Name**: Enter a new name for the sensor. This is the name which will appear within mSupply mobile. You should choose a name to make it easy to identify the sensor.
  **Sensor Code**: Enter a short name code for the sensor. You should choose a code that is unique for each sensor.

<div class="tip">
For reporting purposes, we recommend that you do not use special characters such as “-, +, *” etc in either the Sensor Name or Sensor Code fields. 
</div>

  **Logging Interval**: using the **+/-** buttons, select the length of time between temperature logs.  You can set the logging interval to any length between 1 and 30 minutes. The default logging interval is 5 minutes.
  
  **Start Logging**: Use the **+/-** buttons to select the delay in minutes from now of the first temperature log. The sensor can be configured to start a maximum of 30 days from the current date.

When setting the schedule for the first temperature log, allow sufficient time for the sensor to be placed in its desired location and adjust to the location’s temperature. 20 minutes should be sufficient in most situations.

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_add_sensors3.png)

Tap **Connect** to complete sensor setup and add the sensor to mSupply mobile.  This will return you to the mSupply mobile vaccine home screen and you will see the sensor has been added.  

Tap **Back** if you wish to return to Step 2 and edit the sensor thresholds (temperature breach conditions).

Tap **Cancel** if you no longer want to add the sensor.

<div class="note">

We recommend that each device should be linked to a maximum of six sensors. Each sensor should only be linked to one device. 
</div>

## Edit Sensor

To edit sensor details, you can tap on the ‘’cog’’ icon on the mSupply Vaccine home page (screenshot below) or on the Sensor Detail screen.

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_add_sensors_final.png)


All __sensor threshold__ and __sensor connection__ details are editable except for the start Logging date and time.  Simply tap on the field that you wish to end and make changes.  

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_edit_sensors.png)

No changes will be made until you tap **Save**.

<div class="tip">

Depending on your proximity to the sensor and the Bluetooth capabilities of your device, changes can take a few minutes.
</div>

#### Pausing Sensor Downloads

The edit screen also allows you to **Pause** temperature logging by the sensor.  When a sensor has been paused, it will appear in the title line both on the mSupply mobile vaccine home screen as well as the Sensor Detail screen.

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_pausing_sensor.png)

#### Replacing a Sensor

Tapping **Replace** will open up the scanner and allow you to choose from list of alternative sensors.  The list will only show sensors that are not currently connected to your device.

![Custom invoices button on Navigator](/mobile/introduction/images/VD_CC_sensor_replace.png)

From the list, select the replacement sensor.  You can press **Blink** to check that you have the correct sensor (the LED light will flash for this sensor).  

#### Deleting a Sensor

Tap **Remove** to remove any sensor no longer being used. You will receive a prompt to confirm the deletion.  

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_sensor_remove.png)

# Using the Vaccine module

Enabling the Vaccine module will change the look of your menu page, adding an extra Vaccines button. 

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_enable_button.png)

#### Supplier Invoices

With vaccine module enabled you automatically get a few extra columns on a supplier invoice for vaccines - the Location and Vaccine Vial Monitor (VVM) status columns.

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_supplier_invoice.png)

You can select a location by tapping on the arrow icon in the Location cell. This will allow you to choose a location from a list. 

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_supplier_invoice2.png)

You can also change the Vaccine vial monitor status for items that have been defined as vaccines on the cloud server - this defaults to the lowest level, but can be edited by clicking on the arrow icon in the VVM Status column.

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_supplier_invoice3.png)

#### Customer Invoices

Vaccine module automatically adds two extra columns on a customer invoice - the Doses and Breach columns. 

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_customer_invoice.png)

  * The **Doses** column is for the number of doses actually used (so we can account for open-vial wastage). It will automatically get populated by the *item quantity* and the *number of doses in a vial*. This is for convenience, but you can also edit it! There is a maximum limit of *the number of doses in a vial* for that vaccine and for the *item quantity*, though.

  * The **Breach** column shows when a vaccine item has been in a temperature breach. 
  
  <div class="warning">
  Without entering a quantity into the customer invoice for the item, we don’t know exactly what batches are being issued, so the breach icon may not show up yet.
  </div>

  * If the breach icon (an orange triangle with an exclamation) does show for a row, this signals that the stock line has had a temperature breach. Tapping the icon will bring up a graph of the temperature breach. In the example below, the fridge seems to be broken, probably not a good idea to use this batch!

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_customer_invoice2.png)

#### Supplier Requisitions

Tapping on a row in your supplier requisition will show you the date of the last requisition for your vaccine, as well as other details such as the open and closed vial wastage since the last requisition. 

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_supplier_requisitions.png)

#### Stocktakes

Tapping on a stocktake row for a vaccine item will also show the additional columns for **Doses** and **Breach**. 

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_stocktakes.png)

Here, you can adjust the quantities of your vaccine if needed, change the location, or if the vaccine vial monitor status has changed, you can update that here. You can also view the breaches the batch has been in to help you make decisions!

## Vaccine home page

Tapping on the Vaccines button in the menu page will bring you to a list of all the temperature sensors connected to your device and an overview of current status and actions for each sensor.

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_home_page.png)

The sensor header displays the following information:

  **Circle**: a green circle indicates that the sensor is currently within the specified temperature range and the sensor battery is equal or above 25%. A red circle indicates that the sensor is currently outsides the specified temperature range or the sensor battery is below 25%.

  **Sensor Name**:  as configured during sensor connection.

  **WiFi Icon and last log time**: the time of the last temperature download occurred.  The time will flash when download is currently in process.

  **Battery Icon**: a percentage figure and icon showing remaining battery charge for the sensor.

  **Down Arrow Icon**: Tap to export sensor data (temperature logs and breaches) to csv format and send via email data.

  **Light Bulb Icon**: Tap to make the sensor LED light flash/blink.

  **Cog Button**: Tap if you wish to edit the sensor configuration.

The row under the sensor header displays the following information:

  1) **Sensor’s MAC address**
  
  2) **Thermometer icon and last recorded temperature**

  3) **Clock Icon and the time of the last temperature breach** (if applicable)

Tap anywhere on a sensor box to view further details.

#### Sensor Detail

Tap on the date range on the top left of the screen to change the time (and data) displayed.

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_sensor_detail.png)

The header information is as above.  

##### Temperature Graph

The red line represents the hot consecutive threshold.  The blue line represents the cold consecutive threshold. (You can set these here).  Any temperature logs outside of the lines (breaches) will be indicated with the exclamation icon.  
The last temperature logged will display to the right of the graph.  The **sensor status rectangle** (surrounding the last temperature log) will be:

  1) **Red** for a hot breach.

  2) **Blue** for a cold breach.

##### Temperature Cards

Underneath the graph are five temperature cards:

  1. **Cold Cumulative Breach**: the length of the breach 
  1. **Cold Consecutive Breach**: the number of breaches
  1. **Average temperature**: calculated over the date range selected in degrees Centigrade
  1. **Hot Cumulative Breach**: the length of the breach
  1. **Hot Consecutive Breach**: the number of breaches

#### Exporting Sensor Data

It is possible to download the temperature (breach) logs and sensor settings by clicking the ‘Download’ button in the header (on either the Vaccine home page or the Sensor Details page).

![Custom invoices button on Navigator](/mobile/introduction/images/VM_CC_export_data.png)

The **Download** screen requires:

  1) Email address
  2) Comment

Tapping **Download** will open a new email in your device’s email application.  The receiver address and comment will be prepopulated, and the sensor data (in CSV format) attached, ready to send.

[<img src="/_media/en:mobile:user_guide:pasted:20210316-033915.png?w=600&amp;tok=1d398c" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210316-033915.png?id=en%3Amobile%3Auser_guide%3Avaccine)

<div class="tip">
If you change your mind about emailing the data, tap anywhere in the grayed-out area.
</div> 