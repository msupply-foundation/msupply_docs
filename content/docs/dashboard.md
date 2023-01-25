+++
title = "Dashboard"
description = "Open mSupply Introduction."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 3
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "The landing page"
toc = true
top = true
+++

## Too many Dashboards!

Yes, we use the term _Dashboard_ for more than one thing.
Open mSupply has a landing page which gives an overview of some statistics, and has some useful links, which we're talking about here, and also a system dashboard that uses Grafana, and gives an overview of all sites in your country (or organisation).

## What's on display?

![The dashboard!](/docs/images/dashboard.png)

You can see some statistics for shipments and stock:

- Inbound Shipments
  - **Today** Shows the number of inbound shipments created today
  - **This week** The number created during the current week
- Outbound Shipments
  - **Today** The number of shipments to be picked today, that is, the number with the status of `Allocated`
- Stock
  - **Expired** The number of stock lines in the current store which have expired
  - **Expiring soon** The number of stock lines in the current store which will expire within the next three months
  - **Total items** A count of the number of items in this store
  - **Items with no stock** The item is visible in this store, but there is no stock recorded
  - **Less than 3 months of stock** Which is based on the average monthly consumption (AMC) for this item in the current store

As well, there are buttons toward the bottom of the page which allow you to create shipments and requisitions.
