+++
title = "Inventory Adjustment"
description = "Inventory Adjustment"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 205
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++


## Viewing stock

In the navigation panel, Go to `Inventory` and tap on the `Stock` submenu:

![Stock: nav](/docs/inventory/images/stock_gotostock.png)


## Adjusting stock level

<div class="note">
Typically, inventory adjustments would be done via a Stocktake. Adjusting a singular stock line should only happen on one-off occasions, such as reducing the stock level if some vials are broken.
</div>

The `Adjust` feature gives us the ability to increase or decrease the stock level of a single batch, without needing to go through the full stocktake process.

In the top right corner of the stock line detail page, click the `Adjust` button.

![Stock adjust button](/docs/inventory/images/stock_adjust.png)

A new window will open, where you can enter whether you would like to increase or decrease the quantity of packs, and by how many.

![Stock adjust form](/docs/inventory/images/stock_adjust_form.png)

If you have [inventory adjustment reasons](https://docs.msupply.org.nz/preferences:options?s[]=reasons) configured in your central server, then you are also required to enter a reason when adjusting the pack quantity.

If this is the case, the reason input will be enabled as below:

![New stock line: enter reason](/docs/inventory/images/stock_new_reason.png)

When you are ready to adjust the stock level, click the `OK` button. You will then see your updated pack quantity in the [Details tab](/docs/13_Inventory%20Management/13-2-stock/#details-tab), and can review the adjustment in the [Ledger tab](/docs/13_Inventory%20Management/13-2-stock/#ledger-tab).

Click the `Cancel` button at any time to close the adjust modal.
