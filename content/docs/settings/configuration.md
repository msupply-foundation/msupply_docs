+++
title = "Configuration"
description = "Configure properties within the system"
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The configuration settings section allows you to configure custom data for the system. It is only available on the [Open mSupply Central Server](/docs/getting_started/central).

Currently it is only used to configure store properties for GAPS.

## Viewing the configuration settings

To view the configuration settings, go to `Settings` in the lower section of the navigation panel:

![Settings: nav](/docs/settings/images/admin_nav.png)

If you are on the Open mSupply Central Server, you will see this list of settings sections:

![Settings: collapsed](/docs/settings/images/settings_collapsed_central.png)

Click on the `Configuration` section to begin.

## GAPS Store Properties

Here you will find a button, where you can the initialise store properties that are required for the GAPS feature. To configure these properties, click the `Initialise` button:

![GAPS: uninitialised](/docs/settings/images/gaps_unconfigured.png)

Once configured, the `Initialise` button will become disabled:

![GAPS: initialised](/docs/settings/images/gaps_configured.png)

An `Edit` button will also appear in the footer, where you can edit the store properties for the store you are currently logged into:

![Store properties edit](/docs/settings/images/store_properties_edit_footer.png)

Clicking that `Edit` button will open a new window, where you can [view and edit your store properties](/docs/manage/facilities/#editing-your-store-properties). If the properties are configured correctly, you will see a number of property inputs in this window.
