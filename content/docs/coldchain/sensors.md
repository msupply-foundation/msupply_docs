+++
title = "Sensors"
description = "Management of temperature sensors"
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


### Viewing Sensors

Choose `Cold chain` > `Sensors` in the navigation panel.

![goto sensors](/docs/coldchain/images/goto_sensors.png)

You will be presented with a list of Sensors (if you don't see any, you many not have imported or integrated with the cold chain app!).

From this screen you can:

- View a list of Sensors
- Import data from a Berlinger Fridge-tag

### Sensor list

![Sensor list](/docs/coldchain/images/sensor_list.png)

1. The list of Sensors is divided into 9 columns:

| Column              | Description                      |
| :------------------ | :------------------------------- |
| **Name**            | Name of the Sensor               |
| **CCE**             | Name of the cold chain equipment item which the sensor is associated with   |
| **Location**        | Current location of the sensor |
| **Serial Number**   | A unique identifier for the sensor    |
| **Battery Level**   | Most recent battery reading, in percentage               |
| **Last reading**    | The most recent temperature reported by the sensor         |
| **Date time**       | Date and time of the most recent activity for this sensor     |
| **Sensor type**     | The manufacturer of the sensor, currently support options are `Blue Maestro`, `Laird` & `Berlinger` |
| **Breach type**     | If the sensor has had a breach, this shows the type of the most recent breach |

1. The list can display a fixed number of sensors per page. On the bottom left corner, you can see how many sensors are currently displayed on your screen.

![Page](/docs/introduction/images/list_showing.png)

2. If you have more sensors than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/introduction/images/list_pagenumbers.png)

3. You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Editing a sensor

Clicking on a row in the list will show you the details of that sensor

![Sensor details](/docs/coldchain/images/sensor_details.png)

On this screen you can 
- Edit the name of the sensor 
- Assign the sensor to a location

<div class="note">If the sensor is one that synchronises with Cold Chain application (e.g. the type is Blue Maestro or Laird), then the name must be edited in the Cold Chain application</div>

The other details of the sensor, such as battery level and last recorded temperature are also shown on this screen.


### Importing Fridge-tags

If you are using Berlinger Fridge-tags, you can import the data directly into Open mSupply. To do this, insert the USB of the Fridge-tag into your computer.
Then click the `Import Fridge-tag` button:

![Import fridge tag](/docs/coldchain/images/import_fridge_tag.png)

This will open a file browsing window, allowing you to select the `.txt` file of the Fridge-tag data. Simply click on the file and wait for the import to complete.

<div class="note">Currently supported devices are the Q-Tag Fridge-tags from Berlinger.</div>

Be patient! The import may take some time if you have a lot of data to import.
Note that currently, any breaches recorded will not be imported / associated with the sensor.
