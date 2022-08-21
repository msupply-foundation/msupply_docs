+++
title = "Dashboard Panels"
description = "mSupply Dashboard Panels."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 2
template = "dashboard/page.html"

[extra]
lead = "mSupply Dashboard Panels"
toc = true
top = false
+++

### Panels 

There are several different Panel types or visualizations you can have on your dashboard. 

For instructions on how to configure each type of Panel click here: 
  * [Grafana Graphs](http://docs.grafana.org/features/panels/graph/#graph-panel) 
  * [Grafa Singlestats](http://docs.grafana.org/features/panels/singlestat/#singlestat-panel)
  * [Grafana Tables](http://docs.grafana.org/features/panels/table_panel/#table-panel)
  * [Grafana Lists](http://docs.grafana.org/features/panels/dashlist/#dashboard-list-panel)
  * [Grafana Text](http://docs.grafana.org/features/panels/text/#text-panel)
  * [mSupply Region Map](panels:msupply-region-map)
  * [mSupply Table](panels:msupply-table)
  * [mSupply World Map](panels:msupply-world-map)

Clicking the title for a panel exposes a menu.
The **Edit** option opens additional configuration options for the panel.

![Panel Menu!](/dashboard/images/panel_menu.png)


### Time range controls

The Time Range controls the data you can see at the Dashboard-level and at the Panel-level.

To view or change the Time Range, in the top right click on the Dashboard time picker (looks like a clock face). This shows the current dashboard time and refresh interval. It also acts as the menu button to toggle the time range controls.

![Time range selection!](/dashboard/images/timerange.png)

Click [here](http://docs.grafana.org/reference/timerange/#time-range-controls)  for more details on Grafana time range controls 

### Sharing

You can share both dashboards and panels with other users, as well as producing snapshots for external partners to view.

#### Sharing Dashboards

Click on the Share dashboard button in the top right navigation panel > Select one of three options: Link, Snapshot or Export.
![share dashboard button!](/dashboard/images/share_dashboard_button.png)

For detailed instructions on each option click on [Grafana Sharing Dashboards](http://docs.grafana.org/reference/sharing/#share-dashboard)

![share dashboard!](/dashboard/images/sharedashboard.png)

#### Sharing Panels

Click on the Title of the panel > from the menu select Share > Select one of the three options: Link, Embed or Snapshot.
For detailed instructions on each option click on Grafana Sharing Panels 

![share dashboard button!](/dashboard/images/sharepanel.png)
