+++
title = "Stock Thresholds"
description = "Understanding stock threshold settings"
date = 2026-03-18
updated = 2026-03-18
draft = false
weight = 3
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Open mSupply uses several threshold settings to help you manage stock levels - knowing when you have too much or too little stock. These settings are used in different parts of the system including [R&R forms](/docs/replenishment/r-and-r-forms/), the [Dashboard](/docs/getting_started/dashboard/), reports, and population-based forecasting.

This page explains each threshold settings, where it is configured, and how the system uses it.

## Summary of Settings

| Setting                                                              | Where configured                                                                                                                                                                  | Used for                                                     |
| :------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| **Threshold for overstock**                                          | Legacy mSupply central server <a href="https://docs.msupply.org.nz/other_stuff:virtual_stores?s%5B%5D=threshold&s%5B%5D=overstock#notification_preferences">store preferences</a> | Defines max stock level in R&R forms and stock status report |
| **Threshold for understock**                                         | Legacy mSupply central server store preferences                                                                                                                                   | Defines min stock level in R&R forms and stock status report |
| **Stock safety buffer (months)**                                     | <a href="/docs/manage/facilities/#store-properties">Store properties</a>                                                                                                          | Population-based vaccine forecasting                         |
| **Supply interval (months)**                                         | Store properties                                                                                                                                                                  | Population-based vaccine forecasting                         |
| **Number of months threshold to show low stock alerts for products** | <a href="/docs/manage/facilities/#store-preferences">Store preferences</a>                                                                                                        | Dashboard widget: "Products at risk of being out of stock"   |
| **Number of months threshold to show overstock alerts for products** | Store preferences                                                                                                                                                                 | Dashboard widget: "Items with more than X months of stock"   |

## Dashboard Alert Thresholds

The dashboard alert thresholds control when items appear in the stock alert widgets on the [dashboard](/docs/getting_started/dashboard/). Both values are measured in months of stock and are configured in Open mSupply store preferences.

To configure these settings, navigate to `Manage` > `Stores`, select a store, and adjust the preferences. See [Store Preferences](/docs/manage/facilities/#store-preferences) for more detail.

For both of the below settings, if the preference is not configured then the dashboard widget will not be shown.

### Low stock alert threshold

**Number of months threshold to show low stock alerts for products**

Products are flagged if their current months of stock fall **below** this threshold. Flagged products appear in the "Products at risk of being out of stock" dashboard widget.

For example, if this is set to **3**, any product with fewer than 3 months of stock will appear in the low stock alert widget.

### Overstock alert threshold

**Number of months threshold to show overstock alerts for products**

Products are flagged if their current months of stock are **above** this threshold. Flagged products appear in the "Items with more than X months of stock" dashboard widget.

For example, if this is set to **6**, any product with more than 6 months of stock will appear in the overstock alert widget.

## Population Forecasting Thresholds

These settings are used in population-based vaccine forecasting to calculate target stock levels. They are configured as store properties on the Open mSupply central server. See [Store Properties](/docs/manage/facilities/#store-properties) for configuration details, and [Plugins](/docs/plugins/general-plugins/) for more on population-based forecasting.

### Stock safety buffer (months)

A buffer added to the target stock calculation to account for unexpected demand or supply delays. This value represents the number of extra months of stock you want to keep on hand as a safety margin.

### Supply interval (months)

The number of months between stock orders or deliveries for a store. This represents how often the store expects to receive new stock.

### Target stock formula

The safety buffer and supply interval are combined to calculate the target stock level:

<code>Target stock = (Supply interval + Stock safety buffer) x Forecast demand per month</code>

For example, if the supply interval is **3 months**, the safety buffer is **1 month**, and forecast demand is **200 units per month**, the target stock is **(3 + 1) x 200 = 800 units**.

## Where to Configure

There are three configuration locations for stock threshold settings:

### Open mSupply Store Preferences

Configured on the Open mSupply Central Server via `Manage` > `Stores`. This is where you set:

- Number of months threshold to show low stock alerts for products
- Number of months threshold to show overstock alerts for products

See [Store Preferences](/docs/manage/facilities/#store-preferences) for details.

### Open mSupply Store Properties

Configured on the Open mSupply Central Server via `Manage` > `Stores`, under the store properties tab. This is where you set:

- Stock safety buffer (months)
- Supply interval (months)

See [Store Properties](/docs/manage/facilities/#store-properties) for details.

### Legacy mSupply Central Server

Configured on the legacy mSupply central server in the store preferences. This is where you set:

- Threshold for overstock
- Threshold for understock

See the [mSupply documentation](https://docs.msupply.org.nz/other_stuff:virtual_stores#notification_preferences) for details.

<div class="note">
The overstock and understock thresholds are planned to be migrated from the legacy mSupply central server to Open mSupply in a future version.
</div>
