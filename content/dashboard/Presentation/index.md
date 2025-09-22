+++
title = "Presentation"
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 2
template = "dashboard/page.html"
+++

## What are mSupply dashboards ?

The mSupply dashboard retrieves data from the software and presents it in a series of visual indicators and reports to facilitate decision-making. Any data synchronised with the central server can be  exported and either visualised directly on the dashboards or used to calculate Key Performance Indicators (KPIs) displayed on them. They are updated in real time as the central server is synchronized, ensuring users always have access to the most current data.

## What are dashboards used for ? 

mSupply dashboards are designed for decision-makers at all levels who need tailored reports, historical data, gaps analyses, and high level decision making tools - all without the need to install or use mSupply softwares.

Here are some sample dashboards with example data. Feel free to explore them :

### Facility level nurses

They can use the <a href="https://vaccines.msupply.org:3000/d/zSJ53_FSz/remote-temperature-monitoring?orgId=1" target="_blank">remote temperature monitoring:</a> dashboard to monitor temperature logs  by facility and sensors, prevent breaches and protect temperature sensitive medicine.

![](images/Remote%20temperature%20monitoring%20dashboard.png)

### Regional warehouse managers

They can use the <a href="https://demo-board.msupply.org:3000/d/I0V-Q9S4k-2024/stock-availability?orgId=1" target="_blank">stock availability</a> and the <a href="https://demo-board.msupply.org:3000/d/WsTax_UJK/expiring-stock?orgId=1" target="_blank">expiring stock</a> dashboards to monitor critical items availability and reduce wastage, the <a href="https://demo-board.msupply.org:3000/d/3LThcikVz/health-facility-orders?orgId=1&from=now-2y&to=now" target="_blank">list of orders placed</a> dashboard to manage orders and shipments to lower level facilities.

![](images/Stock%20availability%20dashboard.png)

### National level decision-makers

For example, to support monitoring the progress of a vaccination campaign, the mSupply dashboard can display a color-coded map showing the percentage of vaccination targets achieved in each region. Another example of clinical data visualisation is the <a href="https://demo-board.msupply.org:3000/d/ZqgoeeIVz/prescription-statistics?orgId=1&from=now-1y&to=now" target="_blank">prescriptions statistics</a> dashboard, which presents data per facility.

## How are dashboards set up ?

mSupply dashboards are hosted on the web-based open source platform <a href="https://grafana.com/" target="_blank">Grafana</a>, which means they can be accessed from any device with a working internet connection. They are specific to a project (i.e a datafile) and can only be accessed with a registered username and password. They are highly customisable including the level of information each user has access to.
