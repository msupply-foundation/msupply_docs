+++
title = "Set up Dashboards for Mobile"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 315
template = "mobile/page.html"

[extra]
lead = "Setting up the mSupply Mobile app dashboard"
toc = true
top = false
+++


mSupply Mobile has the capability to display store specific information as a [Mobile dashboard](/en:mobile:user_guide:mobile_dashboard).  There is also a function to view data for other stores anonymised. 

The [Mobile dashboard](/en:mobile:user_guide:mobile_dashboard) is completely different to the [mSupply Grafana web dashboard](/en:dashboard) and is configured in a different manner.

Mobile dashboards are built on the idea of reusing the same report sets as the [legacy (non-grafana) mSupply web dashboard](https://docs.msupply.org.nz/web_interface:dashboard_using#legacy_web_dashboard).  A lot of the legacy web dashboards can be used as mobile dashboards.

  * If you configure a report to be a mobile dashboard report then it looses its ability to be generated to the [legacy (non-grafana) mSupply web dashboard](https://docs.msupply.org.nz/web_interface:dashboard_using#legacy_web_dashboard) and vice versa.
  * If you want the report to continue to be generated to the [legacy (non-grafana) mSupply web dashboard](https://docs.msupply.org.nz/web_interface:dashboard_using#legacy_web_dashboard), then duplicate the report first, and then configure the copy as described here.

## Mobile specific dashboard configuration

Dashboard reports are configured on the mSupply central server, refer [Dashboard set up](https://docs.msupply.org.nz/web_interface:dashboard_setup#dashboard_set_up_v40_and_later).  

This section describes the *additional* configuration of reports on the mSupply central server to make dashboard reports show on mSupply Mobile. The mSupply central server generates reports on a schedule, and those reports that have been correctly configured for Mobile dashboards will be generated for mobile sites.  These reports will be synced to mobile store tablets when they connect to the central server.

  * Once a report is configured to be sent to mSupply Mobile sites, it will be sent to *every* mSupply Mobile site that has the Dashboard store preference turned on. 

  * Remember reports configured to be sent to mSupply Mobile sites will NOT be sent to the [legacy (non-grafana) mSupply web dashboard](https://docs.msupply.org.nz/web_interface:dashboard_using#legacy_web_dashboard).

Dashboard reports need the following properties added to them in order for them to show in the mSupply mobile stores.

| Property | Values | Description |
---|---|---| *isMobile* | `True` or `False` | This is the important one!  This enables or disables sending this report to mobile sites.

 When *isMobile* is `True`, [Mobile dashboard](/en:mobile:user_guide:mobile_dashboard) reports are generated, and no [legacy (non-grafana) mSupply web dashboard](https://docs.msupply.org.nz/web_interface:dashboard_using#legacy_web_dashboard) report is generated.

 When *isMobile* is `False`, a [legacy (non-grafana) mSupply web dashboard](https://docs.msupply.org.nz/web_interface:dashboard_using#legacy_web_dashboard) report is generated and no [Mobile dashboard](/en:mobile:user_guide:mobile_dashboard) reports are generated.
| *reportType* | `Table`, `BarChart`, `LineChart` or `PieChart` | The report display type.  This parameter is mobile specific, but needs to be consistent with the report method's 'type'.  If the *reportType* parameter is not set, it defaults to `Table`.
| *#[report property]* | `[field on store table]` | This allows you to pick a value from the [store table](https://docs.msupply.org.nz/tables_fields:other_tables:store), which is therefore store specific, and assign the value to the `report property`. In this way you can create a report which is customised to each store. The `report property` must exist in your report for this to work.  See [report options](https://docs.msupply.org.nz/web_interface:dashboard_setup#available_dashboard_reports) for available reports and properties.  See example below 

[<img src="/_media/en:mobile:setup:server_side:mobile_dashboard_configuration.png?w=400&amp;tok=a7c5cf" class="mediacenter" loading="lazy" alt="" width="400" />](/_detail/en:mobile:setup:server_side:mobile_dashboard_configuration.png?id=en%3Amobile%3Asetup%3Aserver_side%3Adashboard)

## Internal code logic description

  * Introduces new table **dashboard_store_report**

  * The code checks for **isMobile** parameter, if present it will look for parameters with **#** prefix

  * The code goes through each mobile site's store record, it will specifically look for the fields represented by **#** prefixed parameter's value
  * The code will then take the value of the store field 
    * eg. 
        * if #store_name = "name"
        * then we look for [store]name of each mobile site's store
        * If [store]name = "ABC" we insert store_name = "ABC" in the dashboard method
        * Repeat for next store
  * A unique report is generated for the store specific dashboard
  * We store this report data in **dashboard_report** table in the database, since that's how the legacy web dashboard does it
  * When the report has been stored in the database, we take that value and create the store specific record with the data in **dashboard_store_report**. Then we go off to the next store's report generation
  * If there are 17 mobile stores, there will be 17 records for each mobile dashboard report with each record representing each store's dashboard data
  * Only the store specific record from **dashboard_store_report** will be synced to the particular store. So each store will get only the reports made for it
  * Format of data is exactly same as Web dashboard data. With either the other stores' data anonymised or data being filtered for the mobile store. This depends on the dashboard method.

