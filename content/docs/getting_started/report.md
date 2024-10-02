+++
title = "Reports"
description = "Open mSupply Reports."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 31
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

The reports page gives you an overview of the reports available in Open mSupply.
You can access the reports page by clicking on the `Reports` menu item.
![goto_report](/docs/getting_started/images/goto_report.png)

You will be presented with a list of reports that you can generate. The reports
listed below are the standard reports and will already be set up for you. If
you need a custom report, please contact mSupply support at [support@msupply.foundation](mailto:support@msupply.foundation).

![report list](/docs/getting_started/images/report_list_view.png)

The reports are generated based on preferences which are set up in the mSupply
central server. See [report
preferences](https://docs.msupply.org.nz/other_stuff:virtual_stores?s[]=threshold&s[]=overstock#notification_preferences)
for more information about what these preferences are and how to set them up.

You can view these preferences by clicking on the `More` button.

![report preferences](/docs/getting_started/images/report_preferences.gif)

## Generating reports

Click on the report you want to generate. For this example, we will generate the
`Stock Status` report.

Click on the `Stock Status` report.
![stock status](/docs/getting_started/images/goto_stock_status.png)

You will be presented with a form where you can edit the filter criteria used by the report. Leave unchanged to display all items for the report.

For the `Stock Status` report, you can filter the report based on the following criteria:

- `Item Name`
- `Item Code`

If you enter values for both the code and name, the items shown would have to match **both** criteria i.e. entering a code of `01` and a name of `am` would only show items with a code that contains `01` and a name that contains `am`.

The form also display which preferences the report is based on.

![stock status filter](/docs/getting_started/images/report_filter.png)

Click `Ok` to generate the report. If you find that you would like to narrow
down the report while viewing it, you can click on the `Filter` button on the
top right corner of the report which will open up the filter form again.

![report detail](/docs/getting_started/images/report_detail.gif)

### Printing a report

To print a report, click on the `Print` button on the top right corner of the
report.

![print button](/docs/getting_started/images/print_button.png)

A print preview window will open showing you what will be printed and allowing
you to select the printer. This can then be printed using your browser by clicking print or
using `control`+`P` (if using windows) or `cmd`+`P` keys on your keyboard (if
using a mac).

### Exporting a report

To export a report to excel, click on the `Export` button on the top right corner of the report.

![export button](/docs/getting_started/images/export_button.png)

The report will be downloaded as an excel file.

## Standard Reports

Builds 2.3.0 and above will include standard reports by default in all instances of open mSupply. The 2.3.0 build includes the following reports:

- Invoice Landscape
- Item Usage
- Stock Detail
- Stock Status
- Expiring Items
