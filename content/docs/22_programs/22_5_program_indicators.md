+++
title = "Program Indicators"
description = "Program Indicators"
date = 2023-05-19T00:00:00+00:00
updated = 2023-05-19T00:00:00+00:00
draft = false
weight = 205
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Collecting data metrics across mSupply stores"
toc = true
top = false
+++

The term 'Program Indicators' refers to a set of configurable survey questions which can be answered as part of a program requisition. They are recorded against the period of the program requisition and used for reporting purposes.

## Enabling Program Indicators

Program Indicators are configured on the mSupply central server. See
documentation
[here](https://docs.msupply.org.nz/items:programs#adding_indicators_to_a_program).

## Internal Orders

1. Create a [program Internal
   Order](/docs/programs/requisitions/#creating-a-program-internal-order).
2. Click on the Indicators tab

![Indicators tab](/docs/programs/images/internal_order_indicator_tab.png)

<div class='note'>
HIV is only available on Programs where "HIV" has been enabled.
</div>

3. Click on one of the Program Indicator buttons (if more than one is available)

![Indicators edit](/docs/programs/images/internal_order_indicator_edit.png)

From here you can enter in the data, as configured for each indicator of this
program.

If your store is a supplying store and the store preference `Use consumption &
stock from customers for internal orders` is enabled

![Use consumption & stock from customers for internal orders](/docs/programs/images/consumption_data_pref.png)

then you will also see a table showing summarised indicator data from your customer stores for the period.
![Indicator info](/docs/programs/images/indicator_info_table.png)

The previous and next buttons at the bottom allows you to navigate between the
indicators.

## Manual Customer Requisitions

Manual Customer Requisitions can be made to other stores as a fallback if the Open mSupply store is not able to create a requisition itself (e.g. if
the tablet or laptop used by that store is no longer operational).

The process of entering program indicators is as follows:

1. Create a manual requisition to another store as described [here](/docs/17_managingreqs/17-3-createmanualreqs/)
2. Click on the Indicators tab

![Indicators tab](/docs/programs/images/indicators.png)

3. Click on one of the Program Indicator buttons

![Indicators edit](/docs/programs/images/indicators_edit.png)

From here you can enter in the data, as configured for each indicator of this program.

<div class='note'>
    Only indicators which are set to active will show up for any requisition. This includes requisitions made with indicators which were previously active; they will no longer be displayed.
    Indicator lines which don't have a value also not be displayed.
</div>
