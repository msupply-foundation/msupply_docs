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

## Available Preferences

| Preference Name                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :---------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Allow tracking of stock by donor**                              | Adds a donor column to stock management screens. This allows you to track which donor a stock item is from.                                                                                                                                                                                                                                                                                                                                                                       |
| **Gender options**                                                | The gender options available for clinicians and patients. This defines the options shown in gender filters and which can be assigned to clinicians and patients.                                                                                                                                                                                                                                                                                                                  |
| **Show contact tracing**                                          | Enables the [Contact Tracing](/docs/programs/program-module/#contact-tracing) feature for Patients                                                                                                                                                                                                                                                                                                                                                                                |
| **Sync records display threshold**                                | The sync button in navigation menu will show a warning indicator when there are more than this many records waiting to sync                                                                                                                                                                                                                                                                                                                                                       |
| **Prevent transfers from this many months before initialisation** | Open mSupply will not make "picked" inbound shipments corresponding to outbound shipments from suppliers stores that were picked this many months before the date the site was initialised. Similarly, it will not make customer requisitions for internal orders finalised this many months before initialisation. This is to prevent migrated sites generating hundreds of locked inbound shipments when migrating old mSupply Desktop and mSupply mobile sites to Open mSupply |
