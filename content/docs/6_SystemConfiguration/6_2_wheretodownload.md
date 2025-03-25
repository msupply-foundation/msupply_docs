+++
title = "Download OMS"
description = "Download"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 203
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

## Where can I download it?

We provide a number of downloads on our [releases page](https://github.com/openmsupply/open-msupply/releases) hosted in our GitHub repository.
The latest version will be shown at the top of the list of releases - we generally recommend using the latest version where possible.

Within each release there is an `Assets` section which has the files you need to install Open mSupply.

---

### Windows

There are installers built for each release, providing:

- **Server**: which supports either SQLite or PostgreSQL and runs as a windows service. The installer name for the server is `Open_mSupply_Server_[version].exe`

- **Desktop**: A windows application which allows you to connect to a running server. The installer name for the server is `Open_mSupply_Desktop_[version].exe`

- **Standalone**: combines the above two; runs a server as a windows service and has a windows application which will connect to it. The installer name for the server is `Open_mSupply_Standalone_[version].exe`

- **Demo**: A pre-configured server installation which does not require a central server to run. The installer name for the server is `Open_mSupply_Demo_[version].exe`

---

### Android

The android version is distributed as an `.apk` file which you can install. This file has the name `open-msupply-[version]-release.apk`

---

### MacOS

For the mac desktop version, we provide a `.dmg` file, which has the name `Open_mSupply_[version].dmg`.
