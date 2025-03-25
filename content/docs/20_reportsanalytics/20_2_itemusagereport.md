+++
title = "Item Usage Report"
description = "Open mSupply Reports."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 203
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++
### Item Usage Report

The **Item Usage Report** provides an overview of the stock usage for items within a specific period, helping you monitor inventory and plan for replenishment. The report includes essential details about the items, including their current stock, order status, and usage trends over time.

#### Key Features of the Report:

| **Header**                     | **Description**                                                                                      |
|----------------------------------|------------------------------------------------------------------------------------------------------|
| **Code**                         | The unique identifier or code for each item.                                                          |
| **Name**                         | The name or description of the item.                                                                  |
| **Stock on Hand**                | The total quantity of the item currently in stock.                                                          |
| **Stock on Order**               | The amount of the item that has been ordered but not yet received. This is based on the sent internal order quantity minus the inbound shipment quantity with status confirmed delivered.                                   |
| **AMC (12 months)**              | The **Average Monthly Consumption (AMC)** over the last 12 months starting from today (e.g., 20 March 2024 to 20 March 2025).|  |
| **AMC (24 months)**              | The **Average Monthly Consumption** over the last 24 months starting from today (e.g., 20 March 2024 to 20 March 2026).
| **AMC (Lookback period)**        | The **Average Monthly Consumption** based on a user-defined Lookback period that is set on the Central Legacy mSupply Server under the Store Preference.|
| **Months Cover**                 | The estimated number of months the current stock on hand will last, based on average monthly usage. This is calculated by SOH / AMC (base analysis or lookback period).  |
| **Monthly Usage (This Month)**  | The quantity of the item used in the current month from 1st of the month to today.                                                   |
| **Monthly Usage (Last Month)**  | The quantity of the item used in the previous month.                                                  |
| **Monthly Usage (2 Months Ago)**| The quantity of the item used two months ago.                              |
| **Expiring in 6 months**         | The quantity of items that have expired and those that will be expiring within the next 6 months. |
| **Expiring in 12 months**        | The quantity of items that have expired and those that will be expired in the next 12 months.                                     |

#### How to Use This Report:

The **Item Usage Report** allows you to track your stock usage, identify trends, and anticipate the need for replenishment. By analyzing the **AMC** and **Months Cover**, you can forecast when your stock will run out and plan orders accordingly. The report also helps to identify items that have expired or are nearing expiration, so you can manage stock levels.

This report is valuable for managing inventory efficiently, ensuring timely replenishment, and maintaining optimal stock levels across your store or facility.
