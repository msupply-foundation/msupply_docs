+++
title = "Open mSupply Central Server"
description = "Open mSupply central server functionality"
date = 2022-06-10T11:38:00+00:00
updated = 2022-06-10T11:38:00+00:00
draft = false
weight = 8
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = true
+++

Open mSupply central server is a special site that allows for configurations of subsets of central data. Please see [requirements](/docs/introduction/requirements/#open-msupply-requirements) section for extra info.

## What is the Open mSupply central server

In essence it's just another Open mSupply instance. However, the differences from a typical remote site are:

- Only one instance of the Open mSupply central server will exist in the Open mSupply system
- It will be configured by our support staff and needs to be available on the World Wide Web (typically as a cloud server, but can also be hosted in country)
- All remote instances of Open mSupply will communicate with Open mSupply central server, as part of the synchronisation process
- Allows for configurations of subsets of central data

## What does it look like?

It will look very much like any other Open mSupply instance, but you will see a distinct coloured bar at the bottom of the interface which identifies the site as the central server

![central server identifier bar!](/docs/introduction/images/central_server_bar_identifier.png)

Similar to the mSupply central server, only one instance of the Open mSupply central server will exist in the Open mSupply system.

## Remote site vs central server

Some operations are only allowed in the Open mSupply central server, if an operation is prohibited on the remote site you will see the following alert

![only allowed on central!](/docs/introduction/images/only_allowed_on_central.png)

Throughout this documentation you will see sections that refer to open mSupply central server functionality, they will look like this and will have a link to this page

[![central server only](/docs/introduction/images/central_server.png '🔗 Available on central server only ')](/docs/introduction/central/#remote-site-vs-central-server)

## Configurations and Synchronisations

Open mSupply is configured as another site on the mSupply central server with a [couple of extra settings](https://docs.msupply.org.nz/synchronisation:sync_sites#open_msupply_central_server_settings). When the Open mSupply site goes through the synchronisation cycle, it will query the mSupply central server and ask for the URL where the Open mSupply central server resides, it will then use this URL to synchroniser with the Open mSupply central site.

Synchronisation to Open mSupply central server is performed via the V6 API, and requires a couple of extra steps, as per the V6 push and pull steps in the sync stepper

![sync steps v6!](/docs/introduction/images/sync_steps_v6.png)

## Open mSupply central server data types

<div class="note">As of <code>v2.0.00</code></div>

Data that is configured in Open mSuppy central server:

- Item Pack Variants
- Asset Catalogue
- Asset Status Reasons

### Data that synchronises with Open mSupply central server

- Assets
- Files
- Asset logs

