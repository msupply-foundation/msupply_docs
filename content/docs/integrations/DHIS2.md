+++
title = "DHIS2 Integration"
description = "Open mSupply Integrations with DHIS."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "The landing page"
toc = true
+++

## DHIS2
DHIS2 has become the default health information system used in middle and low-income countries.
It is a fine piece of software.

We integrate with DHIS2 in two ways

### Sending Summary Logistics Data to DHIS2
mSupply contains a lot of data, and you should not (_not_) try to send all data in mSupply to DHIS2 - you will bog your DHIS2 instance down to the point that it is not pleasant to use!
We suggest that you send summary data that shows KPIs. If further investigation is needed this can be done with Open mSupply's own dashboard
Data you might want to send
* Stock on hand for key items (expressed as "months of stock" cover is better)
* Consumption data for key items
* Wastage rates
* Reporting rates from lower level facilities


### Integrating with DHIS2's Real Time Stock Management app
The Real Time Stock Management app is for use at service delivery points. If a facility is using DHIS2 already, and not using Open mSupply, this intermediate step is a viable solution.
However, if you are placing orders using the Real Time Stock Management app, then you need a system such as Open mSupply to receive the order, fulfil it, and send updates to the facility as appropriate.

