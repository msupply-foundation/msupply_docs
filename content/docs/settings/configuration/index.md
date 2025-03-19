+++
title = "Configuration"
description = "Configure properties within the system"
date = 2022-05-17
updated = 2022-05-17
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The configuration settings section allows you to configure custom data for the system. It is only available on the [Open mSupply Central Server](/docs/getting_started/central).

## Viewing the configuration settings

To view the configuration settings, go to `Settings` in the lower section of the navigation panel:

![Settings: nav](/docs/settings/images/admin_nav.png)

If you are on the Open mSupply Central Server, you will see this list of settings sections:

![Settings: collapsed](/docs/settings/images/settings_collapsed_central.png)

Click on the `Configuration` section to begin.

## GAPS Store Properties

To operate fully, the GAPS feature requires a number of configuration changes and data records to be added to the system. In order to make this process easier, all of the required general configuration steps have been automated for you.

In order to add the GAPS configuration changes, simply click the `Initialise` button, shown below:

![GAPS: uninitialised](/docs/settings/images/gaps_unconfigured.png)

Once configured, the `Initialise` button will become disabled:

![GAPS: initialised](/docs/settings/images/gaps_configured.png)

An `Edit` button will also appear in the footer, where you can edit the store properties for the store you are currently logged into:

![Store properties edit](/docs/settings/images/store_properties_edit_footer.png)

Clicking that `Edit` button will open a new window, where you can [view and edit your store properties](/docs/manage/facilities/#editing-your-store-properties).

You will see a number of property inputs in this window. If you don't, there may be something wrong with the configuration - please contact support to investigate.

<div class='note'>
GAPS configuration is a one way process that cannot be undone! Please be sure you wish to use the GAPS feature before initialising.
</div>
