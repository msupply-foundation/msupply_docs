+++
title = "Sync Sites"
description = "sync sites"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 203
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

## What are Sync Sites?
Sync sites refer to the different locations or environments where the system’s data is accessed or stored. These sites can include:

- **Centralized Servers:** Where data is stored and accessed by the main users.

- **Remote Sites:** Where mobile or off-site users need to access or input data.

Syncing between these sites ensures that data entered in one location is reflected across all others in real-time, allowing for seamless operations regardless of location.

---

### Sync Types for Stores

| **Sync Type** | **Description**                                                                                                                                            |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Active**    | A store with the "active" sync type allows data to be added, edited, or deleted on the sync site where you are logged in.                                  |
| **Collector** | A store with the "collector" sync type cannot be edited on this sync site. It receives data from an active store on another sync site and is used for viewing and generating reports. |
| **Transfer**  | A store with the "transfer" sync type is used only for receiving stock transfers or requisitions from other stores. It doesn’t receive regular store data and cannot be used for examination or reporting. It is more efficient than a collector store because it syncs less data. |

## Sync Types in mSupply

### mSupply Mobile

| **Software**                          | **Description**                                                                                                                                                       |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **mSupply Mobile**                    | An Android application for dispensing and processing orders with low internet connectivity. Data is stored locally and synced to mSupply Server when connectivity is available. Shown as a Collector store on mSupply Server. |

---

### Legacy mSupply Software

| **Software**                          | **Description**                                                                                                                                                       |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **mSupply Single User**               | A desktop application for dispensing and processing orders with low internet connectivity. Data is stored locally and synced to mSupply Server when connectivity is available. Shown as a Collector store on mSupply Server. |
| **mSupply Server (Central)**          | A server application that houses mSupply data centrally (except for Open mSupply-specific data). Data is synced from mSupply and Open mSupply to mSupply Server for processing. Stores connected are Active stores. |
| **mSupply Server (Remote)**           | Similar to mSupply Server (Central) but configured as a remote server. Used to allow sites with low internet connectivity to continue using mSupply with multiple users. Stores are Collector type on mSupply Server. |
| **mSupply Client**                    | A client application used to connect to mSupply Server. No data is stored locally, as all data is sent to mSupply Server. Provides read/write access to Active stores and read access to Collector stores (mSupply Server Central only). |

---

### Open mSupply Software

| **Software**                          | **Description**                                                                                                                                                       |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Open mSupply Server (Central)**     | A server application that houses Open mSupply data centrally (Assets & CCE). Open mSupply Android, Open mSupply Standalone, and remote Open mSupply Servers sync their data here. Requires mSupply Server for synchronization. Stores connected are Collector stores on mSupply Server. |
| **Open mSupply Server (Remote)**      | Same as Open mSupply Server (Central) but configured as remote. Supports low connectivity sites with many users. Requires mSupply Server for synchronization. Stores are Collector stores on mSupply Server. |
| **Open mSupply Desktop**              | A client application used to connect to Open mSupply Server. No data is stored locally, all data is synced to Open mSupply Server. Provides read and write access to Active stores. |
| **Open mSupply Standalone**           | Combines Open mSupply Desktop and Open mSupply Server. Data is stored locally and synced to Open mSupply Server. Stores are Collector stores on mSupply Server. |
| **Open mSupply Android**              | Similar to Open mSupply Standalone, where Android Open mSupply Android can act as a server and a client. This allows users to connect to an Open mSupply Server running on the local network or run a local database to support low internet connectivity. Stores connected to Open mSupply Android are shown as a Collector store on mSupply Server. |
