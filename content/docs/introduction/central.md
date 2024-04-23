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

Open mSupply central server is a special site that allows for configurations of subset of central data. Please see [requirements](/docs/introduction/requirements/#open-msupply-requirements) section for extra info.

## What is open mSupply central server

In essence it's just another open mSupply instance. What makes it difference from a typical remote site ?

- Only one instance of open mSupply central server will exist in open mSupply system
- It will be configured by our support staff and needs to be available on a world wide web (typically as a cloud server, but can also be hosted in country)
- All remote instance of open mSupply will communicate with open mSupply central server, as part of the synchronisation process
- Allows for configurations of subset of central data

## How does open mSupply central server look

It will look very much like any other open mSupply instance, you will see distinct coloured bar at the bottom of interface which identifies the site as central server

![central server identifier bar!](/docs/introduction/images/central_server_bar_identifier.png)

Similar to mSupply central server, only one instance of open mSupply central server will exist in open mSupply system. 
Our support staff will be control 

## Remote site vs central server

Some operations are only allowed in open mSupply central server, if operations is prohibited on remote site you will see the following alert

![only allowed on central!](/docs/introduction/images/only_allowed_on_central.png)

Throughout this documentation you will see sections that refer to open mSupply central server functionality, they will look like this and will have a link to this page

[![central server only](/docs/introduction/images/central_server.png '🔗 Available on central server only ')](/docs/introduction/central/#remote-site-vs-central-server)

## Configurations and Synchronisations

Open mSupply is configured as another site with a [couple of settings](https://docs.msupply.org.nz/synchronisation:sync_sites#open_msupply_central_server_settings). When open mSupply site goes through syncrhonisation cycle, it will query mSupply central and ask for url where open mSupply central server resides, it will then use this url to synchroniser with open mSupply central site.

Synchronisation to open mSupply central server is performed via V6 api, and requires a couple of extra steps, as per V6 push and pull in the sync stepper

![sync steps v6!](/docs/introduction/images/sync_steps_v6.png)

## Open mSupply central server data types

As of 2.0.00

### Data that is configured in open mSuppy central server

- Item pack variants
- Asset catalogue
- Asset status reasons

### Data that syncrhonises with open mSupply central server

- Assets
- Files
- Asset logs

