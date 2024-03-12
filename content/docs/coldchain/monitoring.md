+++
title = "Monitoring"
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

The Monitoring section displays cold chain monitoring data in three different views:
1. A chart view which shows a summary of data from all sensors
2. A list of all recorded breaches
3. A list view of all temperature logs

On any of these views, you can import data from a fridge tag. For details on this, see below.

### Viewing Monitoring data

Choose `Cold chain` > `Monitoring` in the navigation panel.

![goto monitoring](/docs/coldchain/images/goto_monitoring.png)

This page contains three tabs, displaying different views of temperature monitoring data. The tab which will be displayed by default is the `Chart` tab.

### Chart

![Chart view](/docs/coldchain/images/chart_view.png)

The chart tab displays a chart showing all configured sensors. You can filter the data displayed by:

- Sensor name
- Location
- Date/Time Range
- Breach type

To add a filter to the page, choose the required filter from the drop down. 
<div class="note">Some views have default filters already applied, such as the chart view shown below</div>

![Filter](/docs/coldchain/images/chart_filter.png)

If the sensor has recorded a breach - an icon will be shown on the chart. Clicking on the icon displays information about the breach, with a button which takes you to the list of all breaches:

![Chart Breach](/docs/coldchain/images/chart_breach.png)

To close the popup, click the red x in the top right corner.

Also shown on the chart are red (top) and blue (bottom) shaded areas. These show the standard temperature breach threshold values of 2°C and 8°C. Note that your environment may be using different threshold values, so you may have breaches which are outside of these ranges!

### Breaches

The breaches tab displays a list of all recorded breaches. 

![Breaches](/docs/coldchain/images/breaches_list.png)

The list of breaches is divided into 10 columns:

| Column              | Description                      |
| :------------------ | :------------------------------- |
|                     | An icon showing an alert if this breach is unacknowledged        |
| **Status**          | The breach status can be `Acknowledged` or `Unacknowledged`     |
| **Sensor name**     | Name of the Sensor               |
| **Location**        | Current location assigned to the sensor |
| **CCE**             | Name of the cold chain equipment item which the sensor is associated with   |
| **Breach start**    | Date and time at which the breach started |
| **Breach end**      | Date and time at which the breach ended, if applicable |
| **Duration**     | The duration of the breach, if it has ended. If the breach has not ended then `Ongoing` is shown |
| **Type**     | The type of the breach: this is a combination of Hot or Cold (shown by the icon and text colour) and Consecutive or Cumulative |
| **Max / Min**     | The temperature recorded when the breach was updated, which is the start or end of the breach (if the breach has ended) |

You can filter the data displayed by:

- Sensor name
- Location
- Date/Time Range
- Type
- Unacknowledged

By default, the `Unacknowledged` filter is shown on this page.
To add a filter to the page, choose the required filter from the drop down. To remove any applied filters, click the `Remove all filters` option.

![Filter](/docs/coldchain/images/breach_filter.png)

1. The list can display a fixed number of breaches per page. On the bottom left corner, you can see how many breaches are currently displayed on your screen.

![Page](/docs/introduction/images/list_showing.png)

2. If you have more logs than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/introduction/images/list_pagenumbers.png)

3. You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

#### Acknowledging breaches

From this list, you can choose to acknowledge a breach which then will stop the breach showing as a notification at the top of the page.
If a breach has been unacknowledged you will see a red alert icon on the left of the row, like this:

![Breach acknowledge button](/docs/coldchain/images/breach_acknowledge_button.png)

Clicking the button will show a window, in this you can enter a comment to acknowledge the breach:

![Breach acknowledge dialog](/docs/coldchain/images/breach_acknowledge.png)

If a breach is ongoing, i.e. it has not ended yet, then you are unable to acknowledge it yet, and the window is disabled:

![Breach acknowledge ongoing](/docs/coldchain/images/breach_acknowledge_ongoing.png)

Once a breach is acknowledged, the red alert icon is no longer shown for that breach row. Instead, a speech bubble icon is shown. Hovering over this (on the desktop / web version) or pressing it for a second (on tablets) will show the comment:

![Breach comment](/docs/coldchain/images/breach_comment.png)


### Log

The log view shows a list of all temperature logs.

![Logs](/docs/coldchain/images/log_list.png)

The list of temperature logs is divided into 6 columns:

| Column              | Description                      |
| :------------------ | :------------------------------- |
| **Date time**       | Date and time of the most recent activity for this sensor     |
| **Sensor name**            | Name of the Sensor               |
| **Location**        | Current location assigned to the sensor |
| **CCE**             | Name of the cold chain equipment item which the sensor is associated with   |
| **Temperature**    | The most recent temperature reported by the sensor         |
| **Breach type**     | If the sensor has had a breach, this shows the type of the most recent breach. This is a combination of Hot or Cold (shown by the icon and text colour) and Consecutive or Cumulative. |

You can filter the data displayed by:

- Sensor name
- Location
- Date/Time Range
- Breach type

To add a filter to the page, choose the required filter from the drop down. 

![Filter](/docs/coldchain/images/log_filter.png)

1. The list can display a fixed number of logs per page. On the bottom left corner, you can see how many logs are currently displayed on your screen.

![Page](/docs/introduction/images/list_showing.png)

2. If you have more logs than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/introduction/images/list_pagenumbers.png)

3. You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Importing Fridge-tags

If you are using Berlinger Fridge-tags, you can import the data directly into Open mSupply. To do this, insert the USB of the Fridge-tag into your computer.
Then click the `Import Fridge-tag` button:

![Import fridge tag](/docs/coldchain/images/import_fridge_tag.png)

This will open a file browsing window, allowing you to select the `.txt` file of the Fridge-tag data. Simply click on the file and wait for the import to complete.

<div class="note">Currently supported devices are Fridge-tags and Q-Tags from Berlinger.</div>

Here's how the process looks (this is the mac desktop version):

![Import fridge tag](/docs/coldchain/images/import_fridge_tag.gif)

<div class="note">You may need to wait for the text file to be generated after connecting the Fridge-tag to your computer.</div>


The following Berlinger devices are compatible with Open mSupply: 


| Device              | Breach data displayed             |    Temperature graph plotted |
| :------------------ | :------------------------------- |
| **Q-tag CLm doc**       | Yes | Yes |
| **Q-tag CLm doc D**            | Yes | Yes |
| **Q-tag CLm doc Ice**        | Yes | Yes |
| **Q-tag CLm doc Ice R**       | Yes   | Yes |
| **Q-tag CLm doc L**    | Yes  | Yes |
| **Q-tag CLm doc LR**     | Yes | Yes |
| **Fridge-tag 2**     | Yes | No* |
| **Fridge-tag 2E**     | Yes | No* |
| **Fridge-tag 2L**     | Yes | Yes |
| **Fridge-tag UL**     | Yes | Yes |

*Logger device does not capture individual temperature logs

