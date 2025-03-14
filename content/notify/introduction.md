+++
title = "mSupply Notify System"
description = "mSupply Notify send emails and Telegram messages"
date = 2025-05-01
updated = 2021-05-01
sort_by = "weight"
weight = 101
template = "notify/page.html"

[extra]
lead = "Send emails and Telegram messages from mSupply or any postgres database"
toc = true
top = true
+++

`notify` is a notification system that can be used to send emails and Telegram messages from mSupply or any postgres database.

It's designed so that different plugins can be built to support different types of notifications.

Currently there are two plugins:

- [Scheduled Reports](/notify/scheduled)
- [Cold Chain](/coldchain/cold-chain-notifications)

They operate fairly independently of each other, but both use the same underlying notification system.

## Scheduled Reports

Allows the user to schedule reports to be sent to them at a specified time these reports can contain data using SQL queries from the configured database.

![Alt text](/notify/images/sch-setup.png)

## Cold Chain

Cold Chain has a specialised configuration for [cold chain](/coldchain/introduction) alerts.
The user can select the sensors they want to monitor and the temperature ranges they want to be alerted on.

![Cold Chain Configurations](/notify/images/cc-setup.png)

## Open Source

[Notify](https://github.com/msupply-foundation/notify) is an open source project. Code and developer docs are available on [GitHub](https://github.com/msupply-foundation/notify).
If you are developer, or looking for the latest release version, this is the place to go.
