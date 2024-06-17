+++
title = "Demographics"
description = "Demographic indicators"
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 3
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Demographics is available only on the [Open mSupply Central Server](/docs/getting_started/central). This is where you can view and manage future projections for different demographic indicators.

## Configuration

Currently, `Demographics` features are only enabled as part of the `Vaccine` module.

To begin, enable the store preference for `mobile: Uses Vaccine Module` (see the [store preferences](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab) documentation for how to do this).

## Viewing Demographics Indicators

Choose `Manage` > `Demographics` in the navigation panel.

![goto: demographics](/docs/manage/images/goto_demographics.png)

You will be presented with a list of Demographics Indicators:

<!-- TOOD: screenshot -->

The list of Demographics Indicators is divided into 8 columns:

| Column              | Description                                                                    |
| :------------------ | :----------------------------------------------------------------------------- |
| **Name**            | The name of the demographic                                                    |
| **Percentage**      | Percentage of the general population included in this demographic              |
| **Population**      | The calculated population of that demographic, based on the `Percentage`       |
| **5 Years columns** | Population projections for 5 future years, based on the `% Growth` predictions |

## Yearly growth percentage

For each year, you can enter the predicted population growth percentage. This can be a positive or negative number.

Once you click out of the cell, your projections will update.

<!-- TOOD: screenshot... probably a gif? -->

- Click `Save` once you are happy with your changes
- OR: Click `Cancel` at any time to revert your changes

## General population

All calculations are based on the current `General Population`. To begin, enter the current population:

<!-- TOOD: screenshot -->

## Adding a new indicator

To add a new demographic indicator, click the `Add New Indicator` button in the top right:

<!-- TOOD: screenshot -->

This will add a new row to the table. You can now enter a name for the demographic, and the percentage of the population included.

- Click `Save` once you are happy with your changes
- OR: Click `Cancel` at any time to revert your changes
