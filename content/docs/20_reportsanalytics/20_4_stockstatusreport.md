+++
title = "Stock Status Report"
description = "Open mSupply Reports."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 205
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

### Stock Status Report

The **Stock Status Report** provides a snapshot of the current status of your inventory, helping you assess whether items are overstocked, understocked, or well-stocked. This report compares your stock on hand with the **Months of Stock (MOS)** and provides insights into your stock levels and consumption rates, assisting in efficient inventory management.

#### Key Features of the Report:

| **Header**                | **Description**                                                                                              |
|----------------------------|--------------------------------------------------------------------------------------------------------------|
| **Code**                   | The unique identifier or code for each item in the inventory.                                                 |
| **Name**                   | The name or description of the item.                                                                          |
| **Status**                 | The stock status based on the comparison of **MOS (Months of Stock)** and the actual stock on hand:           |
|                            | - **Understocked**: When MOS is lower than the minimum threshold (reorder threshold).                                              |
|                            | - **Overstocked**: When MOS is higher than the maximum threshold (target threshold).                                             |
|                            | - **Well stocked**: When MOS is within the acceptable range.                                                   |
| **Consumption (12 months)**| The total consumption of the item over the last 12 months starting from today.    |
| **SOH (Stock on Hand)**    | The quantity of the item currently available in stock.                                                        |
| **AMC (12 months)**        | TThe **Average Monthly Consumption** (AMC) over the last 12 months starting from today (e.g., 20 March 2024 to 20 March 2025). |
| **MOS (Months of Stock)** | The estimated number of months the current stock on hand will last, based on average monthly usage. This is calculated by SOH / AMC (base analysis or lookback period).  |

#### How to Use This Report:

The **Stock Status Report** helps you track whether items are adequately stocked, overstocked, or need replenishment. This report is essential for inventory control, ensuring you maintain optimal stock levels and avoid both stockouts and excess inventory. By accurately tracking stock status, you can effectively plan for stock replenishment and make informed purchasing decisions.
