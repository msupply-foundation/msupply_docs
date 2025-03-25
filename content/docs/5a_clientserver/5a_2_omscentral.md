+++
title = "OMS Central Server"
description = "OMS Central Server."
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 205
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

<div class="tip">See the <a href="#configuration-and-synchronisation">Configuration</a> section for how to get started with the central server configuration.</div>

Open mSupply central server is a special site that allows for configuration of subsets of central data. Please see the [requirements](/docs/6_SystemConfiguration/6-1-systemrequirements/) section for details on the requirements for running Open mSupply, and the [Open mSupply central server](/docs/6_SystemConfiguration/6-3-setupcentral/) section for details about the central server requirements specifically.

## What is the Open mSupply central server

In essence it's just another Open mSupply instance. However, the differences from a typical remote site are:

- Only one instance of the Open mSupply central server will exist in the Open mSupply system
- It will be configured by our support staff and needs to be available on the World Wide Web (typically as a cloud server, but can also be hosted in-country)
- All remote instances of Open mSupply will communicate with Open mSupply central server, as part of the [synchronisation process](/docs/5_sync/5-4-howtosync/)
- Allows for configuration of subsets of central data

## What does it look like?

The central server interface looks very much like any other Open mSupply instance, but you will see a distinct coloured bar at the bottom of the interface which identifies the site as the central server:

![central server identifier bar!](/docs/introduction/images/central_server_bar_identifier.png)

Similar to the mSupply central server, only one instance of the Open mSupply central server will exist in the Open mSupply system.

## Remote site vs central server

Some operations are only allowed in the Open mSupply central server, if an operation is prohibited on the remote site you will see the following alert

![only allowed on central!](/docs/introduction/images/only_allowed_on_central.png)

Throughout this documentation you will see sections that refer to open mSupply central server functionality. To indicate this, they will have this image on the page:

![central server only](/docs/introduction/images/central_server.png)


## Configuring Open mSupply Central Server
See [Setting up Open mSupply Central Server](/docs/6_SystemConfiguration/6-3-setupcentral/#central-server).

## Open mSupply central server data types

<div class="note">As of <code>v2.0.00</code></div>

#### Data that is configured in Open mSupply central server

- Item Pack Variants
- Asset Catalogue
- Asset Status Reasons
- Demographics Indicators

#### Data that synchronises with Open mSupply central server

- Assets
- Files
- Asset Logs
- Store Properties
- Immunization Programs and Vaccine Courses
