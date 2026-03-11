+++
title = "Glossary"
description = "Glossary"
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 3
template = "dashboard/page.html"

[extra]
lead = "You will find here the most common used terms and their definition here."
toc = true
+++

| **Term**                  | **Definition**                                                                                                                                                                                                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Panel**                 | Each dashboard is composed of panels or building blocks that display a specific piece of data with a visual element (gauge, table, graphs). <br><br>Panels arranged on a grid, are separated by rows and can be dragged-and-dropped to a different location on the grid.                                          |
| **Dashboards Collection** | When referring to dashboards, it is important to note that there usually is more than one dashboard page per project datafile. The main link typically directs users to a designated welcome page, but once inside Grafana, users can easily navigate between different dashboards.                               |
| **Dashboards folder**     | mSupply dashboards are organised in folders.                                                                                                                                                                                                                                                                      |
| **Dashboard page**        | A single dashboard sitting on one page - most of the time, this is what is referred to when mentioning “dashboard”.                                                                                                                                                                                               |
| **Dashboard Reports**     | [Scheduled exports](/dashboard/scheduled-excel/) of dashboard information can be configured to be emailed at specified intervals. We term this 'Dashboard reports'.                                                                                                                                               |
| **mSupply Table**         | This is a [custom panel](/dashboard/panels/#msupply-table) which has an Export blue button at the bottom right of a panel. Users can download the table directly in excel and keep the layout of the table.                                                                                                       |
| **Variables**             | In Grafana, variables are dynamic placeholders that allow you to create interactive and reusable dashboards. They enable users to filter, modify, and customize dashboard content without editing the underlying queries or panels. Variables can be static values or values taken dynamically from the database. |
| **Filters**               | Filters are at the top of the dashboard, they narrow down the degree of information.                                                                                                                                                                                                                               |