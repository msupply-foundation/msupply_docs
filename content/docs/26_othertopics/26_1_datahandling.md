+++
title = "Data Handling"
description = "Data Handling"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

#### What are the Limits to Data Handling?

There are three aspects to this question with Open mSupply:

- **Remote Sites** are where you do day-to-day work.
- **Cloud hosted remote sites** can be used when you have full time high quality internet.
- The **Central Server** is where master data is managed, and where all data from remote sites is aggregated for reporting.

#### Remote sites

On a particular remote site, the database will be SQLite if running on Android, or usually Postgres if running a desktop server. We are assuming that if you have a busy site, you will upgrade to desktop (which is a painless process), so the Android limits are less relevant.

| Type of record |                                        Record limit |
| -------------- | --------------------------------------------------: |
| Products       |                                         > 1,000,000 |
| Trade items    |                                     > 1,000,000,000 |
| Users          | configured centrally - no practical limit at a site |
| Suppliers      | configured centrally - no practical limit at a site |
| Transactions   |                                     > 1,000,000,000 |

#### Cloud hosted remote sites

If you host your remote site in the cloud, it can have thousands of connected users. The record limits are as above, but performance will be determined by available bandwidth both for the server and for each user's own internet connection.

#### The Central Server

The Central Server uses Postgres, and aggregates all data from all sites, as well as being the master data server for Sites, Products (Items), Facilities, Suppliers and Users.

| Type of record |    Record limit |
| -------------- | --------------: |
| Products       |     > 1,000,000 |
| Trade items    | > 1,000,000,000 |
| Users          |       > 100,000 |
| Suppliers      |       > 100,000 |
| Sites          |       > 100,000 |
| Transactions   | > 1,000,000,000 |

(As of 2023 we are still to rewrite the central server as an open source project - the limits for the commercial mSupply central server are lower, but we still have sites with tens of millions of transactions, and growing fast. We don't expect any site to run into limits before we transition to an open source central server).

