+++
title = "General Plugins"
description = "Plugins designed for any organization"
date = 2024-06-27T18:20:00+00:00
updated = 2024-06-27T18:20:00+00:00
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

This page details plugins which are suitable for use by any organization.

## Population-based forecasting for vaccines

<div class="tip">
The <b>Population-based forecasting for vaccines</b> plugin can be found in our <a href="https://github.com/msupply-foundation/open-msupply-forecasting-plugins" target="_blank">GitHub plugin repository</a>.
</div>

#### Overview

The **Population-based forecasting for vaccines** plugin does three things:

1. It calculates the `Forecast demand` for vaccines based on the population of each facility
2. It calculates the `Target stock` that each facility should have to service their `Forecast demand`
3. It offers a `Suggested quantity` that should be ordered to maintain the `Target stock` levels

These values are calculated based on the following formulas:

**Forecast demand**

The forecast demand is given in doses per month and is defined as follows:

<math>
<mtable>
<mtr>
<mtd>
<mi>Forecast demand</mi>
</mtd>
<mtd>
<mtd><mo>=</mo></mtd>
<mfrac>
<mrow><mi>Population served</mi><mo>x</mo><mi>Number of doses</mi><mo>x</mo><mi>Coverage rate</mi><mo>x</mo><mi>Loss factor</mi></mrow>
<mn>12</mn>
</mfrac> </mtd>
</mtr>
</mtable>
</math>
<br/>

**Target stock**

Target stock is the stock in doses required to cover the supply interval and is given by the following formula:

<math>
<mtable>
<mtr>
<mtd>
<mi>Target stock</mi>
</mtd>
<mtd>
<mtd><mo>=</mo></mtd>
<mrow><mo>(</mo><mi>Supply interval</mi><mo>+</mo><mi>Buffer stock</mi><mo>)</mo><mo>x</mo><mi>Forecast demand per month (doses)</mi></mrow>
</mtd>
</mtr>
</mtable>
</math>
<br/>

**Suggested quantity**

The suggested quantity to order is given in doses:

<math>
<mtable>
<mtr>
<mtd>
<mi>Suggested quantity</mi>
</mtd>
<mtd>
<mtd><mo>=</mo></mtd>
<mrow><mi>Target stock</mi><mo>-</mo><mi>Stock on hand (doses)</mi></mrow>
</mtd>
</mtr>
</mtable>
</math>
<br/>

The `Target stock` and `Suggested quantity` are then displayed to the facility user to assist with decision-making while making an order for new stock:

![](images/io_pop_forecast.png)

#### Configuration

In order to provide the `Forecast demand`, the `Target stock` and the `Suggested quantity`, key indicators must be input by the user in the system.

These include:

**Country demographics**

You must have a demographics indicator created and then assigned to the vaccine course in the 'Target Demographic' field
(see [Manage > Demographics](/docs/manage/demographics) to configure an indicator)

**National Immunization Schedule**

Create a national immunization schedule and then a vaccine course. Include the item to forecast in the course and create at least one dose for that course.
(see [Programs > Immunizations](/docs/programs/immunisations/))

**Store properties**

The following properties must also be configured:

- Population coverage
- supply interval
- buffer stock

see [Manage > Store properties](/docs/manage/facilities/#editing-your-store-properties) for details.

**Item**

The item to forecast must be designated as a 'vaccine'. See the note for 'Is a vaccine' on the <a href="https://docs.msupply.org.nz/items:adding_a_new_item?s%5B%5D=vaccine#general_tab">documentation page</a>.

#### Notes

**Note 1**: Enabling the **Population-based forecasting for vaccines** plugin will replace the _AMC forecasting method_ with the _Population-based forecasting method_. The AMC value will still be displayed to the facility user but the `Suggested quantity` will not use the AMC value to make its calculations.

**Note 2**: The `Forecast demand` is calculated for the [`Vaccine course`](/docs/programs/immunisations/#vaccine-courses), not the [`Vaccine item`](/docs/catalogue/items/). This means that the `Target stock` and `Suggested quantity` values also apply to the `Vaccine course` and not to the `Vaccine item`.

This is important to note because multiple vaccines items may be associated with one vaccine course. Therefore, <i>if an order is being placed for <u>multiple vaccine items associated with the same vaccine course</u> then the system will display the same `Target stock` and `Suggested quantity` for each vaccine item in that order.</i>

In other words, the system does not take into account stock on order for _other_ vaccine items when displaying a `Suggested quantity` for a vaccine item.

**Note 3**: the `Forecast demand` is not displayed explicitly to the facility user, but the values can be reviewed in the mSupply Dashboard

![](images/forecast_demand_grafana.png)
