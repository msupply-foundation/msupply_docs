+++
title = "Expiring Items Report"
description = "Open mSupply Reports."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 206
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++
### Expiring Items Report

The **Expiring Items Report** helps you monitor the expiration status of items in your inventory, allowing you to take timely action to manage stock that is approaching or has passed its expiry date. This report helps ensure that you avoid stockouts or wastage by giving visibility into items that will expire soon, enabling efficient stock rotation.

#### Key Features of the Report:

| **Header**                 | **Description**                                                                                                      |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------|
| **Code**                    | The unique identifier or code for each item in the inventory.                                                         |
| **Name**                    | The name or description of the item.                                                                                  |
| **Expiring in (days)**      | The number of days left until each batch expires, based on the expiration date. Items nearing expiration are highlighted in yellow (approaching expiry) or red (expired). |
| **Batch**                   | The batch number associated with each item, which helps track its origin and movement.                                |
| **Expiry date**             | The date when the item will expire.                                                                                   |
| **Stock on hand (SOH)**     | The quantity of the item currently available in stock.                                                                |
| **Average monthly consumption** | The **Average Monthly Consumption** based on a user-defined Lookback period that is set on the Central Legacy mSupply Server under the Store Preference.|
| **Expected usage**          | The calculated amount of stock expected to be used before the item expires, based on the average monthly consumption (AMC). Calculated by AMC * (months left until expiry). |
| **Stock at risk**           | The quantity of stock that is likely to expire before it is used, based on the expected usage and SOH. The stock at risk includes expired stock.     |

#### How to Use This Report:

The **Expiring Items Report** allows you to track items that are approaching their expiry date and take necessary actions such as stock rotation, disposal, or reordering. The **Expiring in (days)** column highlights items nearing expiry (yellow) or already expired (red), making it easy to prioritize management actions. The **Stock at risk** column shows how much stock may expire before it’s used, helping you avoid waste and better plan stock usage.

By using this report, you can efficiently manage your inventory, ensuring that stock is used before it expires, and take proactive steps to reorder or remove items that are close to expiration. This helps in maintaining an efficient and cost-effective supply chain.
