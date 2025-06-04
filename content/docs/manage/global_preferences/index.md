+++
title = "Global Preferences"
description = "Global Preferences Configuration"
date =  2025-05-21
updated = 2025-05-21
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The Global preferences list is available only on the [Open mSupply Central Server](/docs/getting_started/central-server). They are preferences which apply to all Open mSupply sites.

## Viewing Global Preferences

To configure Global Preferences, go to the Global Preferences page under the Manage menu:
![goto: global preferences](images/goto_global_preferences.png)

You will be presented with the set of currently available Global Preferences:

![facility list](images/edit_global_preferences.png)

Global Preferences can be configured by turning these options on or off. Any updates will be saved automatically.

## Available Preferences

- Allow tracking of stock by donor
- Display Population Based Forecasting
- Show Contact Tracing

| Preference Name                          | Description                                                                                                          |
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Allow tracking of stock by donor**     | Adds a donor column to stock management screens. This allows you to track which donor a stock item is from.          |
| **Display Population Based Forecasting** | Affects suggested quantity of Requisitions when using a plugin. See plugins for further details. TODO: update this?? |
| **Show Contact Tracing**                 | Enables the [Contact Tracing](/docs/programs/program-module/#contact-tracing) feature for Patients                   |
