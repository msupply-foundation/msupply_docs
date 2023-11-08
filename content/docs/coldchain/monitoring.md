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

## Viewing temperature monitoring data

### Open the Monitoring Menu

Choose `Cold chain` > `Monitoring` in the navigation panel.

![goto monitoring](/docs/coldchain/images/goto_monitoring.png)

This page contains three tabs, displaying different views of temperature monitoring data. The first tab which will be displayed is the `Chart` tab.

### Chart

![Chart view](/docs/coldchain/images/chart_view.png)

The chart tab displays a chart showing all configured sensors. You can filter the data displayed by:

- Sensor name
- Location
- Date/Time Range
- Breach type

To add a filter to the page, choose the required filter from the drop down. 

![Filter](/docs/coldchain/images/log_filter.png)

If the sensor has recorded a breach - an icon will be shown on the chart. Clicking on the icon displays information about the breach, with a button which takes you to the list of all breaches:

![Chart Breach](/docs/coldchain/images/chart_breach.png)

To close the popup, click the red x in the top right corner.

### Breaches

![Breaches](/docs/coldchain/images/breaches_list.png)

The breaches tab displays a list of all recorded breaches. The list of breaches is divided into 10 columns:

| Column              | Description                      |
| :------------------ | :------------------------------- |
|                     | Icon showing an alert if this breach is unacknowledged        |
| **Status**       | Date and time of the most recent activity for this sensor     |
| **Date time**       | Date and time of the most recent activity for this sensor     |
| **Sensor name**            | Name of the Sensor               |
| **Location**        | Current location of the sensor |
| **CCE**             | Name of the cold chain equipment item which the sensor is associated with   |
| **Temperature**    | The most recent temperature reported by the sensor         |
| **Breach type**     | If the sensor has had a breach, this shows the type of the most recent breach |

You can filter the data displayed by:

- Sensor name
- Location
- Date/Time Range
- Breach type

To add a filter to the page, choose the required filter from the drop down. 

![Filter](/docs/coldchain/images/log_filter.png)

1. The list can display a fixed number of sensors per page. On the bottom left corner, you can see how many sensors are currently displayed on your screen.

![Page](/docs/introduction/images/list_showing.png)

2. If you have more logs than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/introduction/images/list_pagenumbers.png)

3. You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Log

![Logs](/docs/coldchain/images/log_list.png)

The log tab displays a list of all temperature logs. The list of temperature logs is divided into 6 columns:

| Column              | Description                      |
| :------------------ | :------------------------------- |
| **Date time**       | Date and time of the most recent activity for this sensor     |
| **Sensor name**            | Name of the Sensor               |
| **Location**        | Current location of the sensor |
| **CCE**             | Name of the cold chain equipment item which the sensor is associated with   |
| **Temperature**    | The most recent temperature reported by the sensor         |
| **Breach type**     | If the sensor has had a breach, this shows the type of the most recent breach |

You can filter the data displayed by:

- Sensor name
- Location
- Date/Time Range
- Breach type

To add a filter to the page, choose the required filter from the drop down. 

![Filter](/docs/coldchain/images/log_filter.png)

1. The list can display a fixed number of sensors per page. On the bottom left corner, you can see how many sensors are currently displayed on your screen.

![Page](/docs/introduction/images/list_showing.png)

2. If you have more logs than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/introduction/images/list_pagenumbers.png)

3. You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)
