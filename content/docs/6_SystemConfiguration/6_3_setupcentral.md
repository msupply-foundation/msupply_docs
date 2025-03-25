+++
title = "Setting up Central Server (OMS)"
description = "Setting up Central Server (OMS)."
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 204
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

#### Central Server

An installation of mSupply is currently required when running Open mSupply. This is used to manage a number of centralised aspects of the system.

From v2.0.00, the Open mSupply central server is also required for successful synchronisation. See the [Open mSupply central server](/docs/5a_clientserver/5a-2-omscentral/) and [Open mSupply central server site configuration in mSupply](https://docs.msupply.org.nz/synchronisation:sync_sites#open_msupply_central_server_settings) for more details.

You will get the following error message if the Open mSupply central server is not configured:

![v6 not configured!](/docs/introduction/images/v6_not_configured.png)

The versions of both central servers and your Open mSupply remote site are important, as not all versions of each are compatible with each other.

The table below shows which versions of mSupply and Open mSupply Central you will require when running as an Open mSupply remote site:

| Open mSupply Remote | mSupply Central | Open mSupply Central |
| :------------------ | :-------------- | -------------------- |
| 1.1.00 - 1.1.16     | 7.04.01+        | N/A                  |
| 1.2.00+             | 7.05.05+        | N/A                  |
| 1.4.00+             | 7.09.00+        | N/A                  |
| 2.0.00+             | 7.14.04+        | 2.0.00+              |
| 2.1.00+             | 7.14.04+        | 2.1.00+              |
| 2.2.00+             | 7.14.04+        | 2.2.00+              |
| 2.3.00+             | 7.17.01+        | 2.3.00+              |

If you attempt to connect to an incompatible server you'll get an error message like this:

![server version mismatch!](/docs/introduction/images/version_mismatch.png)

## Configuration and Synchronisation

Open mSupply is configured as another site on the mSupply central server with a [couple of extra settings](https://docs.msupply.org.nz/synchronisation:sync_sites#open_msupply_central_server_settings).

To configure your Open mSupply site to use a central server, there are a couple of options.

#### Using a separate Open mSupply central server and remote server

- In mSupply, create a new site with a store assigned (this can be a dummy store)
- Tick the checkbox (as noted in the 'extra settings' link above)
- Enter the server URL of your new Open mSupply
  central server. This will be different to the usual Open mSupply server and to
  the mSupply server!

<div class="warning">Open mSupply central server can be configured and synced successfully, even if this URL is wrong. This field is only used by remote sites, to know where to find the Open mSupply central server.</div>

#### Configuring an existing Open mSupply site as a central server

- In mSupply, edit the Open mSupply site, then
- Tick the checkbox (as noted in the 'extra settings' link above)
- Enter the current Open mSupply URL as the central server URL

When the Open mSupply site goes through the synchronisation cycle, it will query the mSupply central server and ask for the URL where the Open mSupply central server resides, it will then use this URL to synchroniser with the Open mSupply central site.

Synchronisation to Open mSupply central server is performed via the V6 API, and requires a couple of extra steps, as per the V6 push and pull steps in the sync stepper

![sync steps v6!](/docs/introduction/images/sync_steps_v6.png)

