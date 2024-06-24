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

The Demographics section is where you can view and manage future projections for different Demographic Indicators. This population data can then be used to estimate the required cold storage capacity for upcoming immunization programs.

Demographics management is only available on the [Open mSupply Central Server](/docs/getting_started/central).

## Configuration

Currently, `Demographics` features are enabled as part of the `Vaccine` module.

To begin, enable the store preference for `mobile: Uses Vaccine Module` (see the [store preferences](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab) documentation for how to do this).

## Viewing Demographics Indicators

Choose `Manage` > `Demographics` in the navigation panel.

![goto: demographics](/docs/manage/images/goto_demographics.png)

You will be presented with a list of Demographic Indicators:

![indicators](/docs/manage/images/indicators.png)

The list of Demographic Indicators is divided into 8 columns:

| Column              | Description                                                                    |
| :------------------ | :----------------------------------------------------------------------------- |
| **Name**            | The name of the demographic                                                    |
| **Percentage**      | Percentage of the general population included in this demographic              |
| **Population**      | The calculated population of that demographic, based on the `Percentage`       |
| **5 Years columns** | Population projections for 5 future years, based on the `% Growth` predictions |

## Yearly growth percentage

For each year, you can enter the predicted population growth percentage. This can be a positive or negative number. As you edit the growth percentage, you will notice the population projections update.

![edit growth](/docs/manage/images/percentage_growth.gif)

- Click `Save` once you are happy with your changes
- OR: Click `Cancel` at any time to revert your changes

## General population

All calculations are based on the current `General Population`. To begin, enter the current population:

![population](/docs/manage/images/population.png)

## Adding a new indicator

To add a new demographic indicator, click the `Add New Indicator` button in the top right.

This will add a new row to the table. You can now enter a name for the demographic, and the percentage of the population included.

- Click `Save` once you are happy with your changes
- OR: Click `Cancel` at any time to revert your changes

![add new indicator](/docs/manage/images/add_indicator.gif)

## Permissions & Restrictions

Demographics are only visible on the [Open mSupply Central Server](/docs/getting_started/central) and requires the [`mobile: Uses vaccine module`](https://docs.msupply.org.nz/cold_chain_equipment:mobile?s[]=vaccine#enable_the_vaccine_module_for_the_mobile_store) store preference.

![mSupply Store Preference Vaccine Module](/docs/programs/images/vaccine_module.png)

To Create, Edit or Delete Demographics you need the `Can modify central data` permission, enabled in the [omSupply Permissions Tab](https://docs.msupply.org.nz/admin:managing_users?s[]=permission#omsupply_permissions_tab) on your Central Store.

![Can Modify Central Data Permission](/docs/programs/images/can_modify_central.png)
