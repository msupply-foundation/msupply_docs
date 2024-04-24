+++
title = "Frequently Asked Questions"
description = "aka FAQ."
date = 2023-02-01
updated = 2023-02-01
draft = false
weight = 40
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Questions about Open mSupply"
toc = true
top = true
+++

#### Does Open mSupply work offline?

Yes! Open mSupply is designed to be 'offline first' which means that users can continue to perform their daily operations without needing an internet connection. Occasional internet connectivity is required to sync data from remote sites to the central server. 

#### What are the limits to data handling?

There are three aspects to this question with Open mSupply:
* **Remote Sites** are where you do day-to-day work.
* **Cloud hosted remote sites** can be used when you have full time high quality internet.
* The **Central Server** is where master data is managed, and where all data from remote sites is aggregated for reporting.

##### Remote sites
On a particular remote site, the database will be SQLite if running on Android, or usually Postgres if running a desktop server. We are assuming that if you have a busy site, you will upgrade to desktop (which is a painless process), so the Android limits are less relevant.

|  Type of record   |  Record limit   |
|-------|-------:|
| Products   | > 1,000,000   |
| Trade items   | > 1,000,000,000   |
| Users   | configured centrally - no practical limit at a site  |
| Suppliers   | configured centrally - no practical limit at a site  |
| Transactions   | > 1,000,000,000    |

##### Cloud hosted remote sites
If you host your remote site in the cloud, it can have thousands of connected users. The record limits are as above, but performance will be determined by available bandwidth both for the server and for each user's own internet connection.

##### The Central Server
The Central Server uses Postgres, and aggregates all data from all sites, as well as being the master data server for Sites, Products (Items), Facilities, Suppliers and Users.

|  Type of record   |  Record limit   |
|-------|-------:|
| Products   | > 1,000,000   |
| Trade items   | > 1,000,000,000   |
| Users   | > 100,000   |
| Suppliers   | > 100,000  |
| Sites  | > 100,000   |
| Transactions   | > 1,000,000,000    |

(As of 2023 we are still to rewrite the central server as an open source project - the limits for the commercial mSupply central server are lower, but we still have sites with tens of millions of transactions, and growing fast. We don't expect any site to run into limits before we transition to an open source central server).

#### Can you have multi-users on one Android tablet with Open mSupply?
Yes!

You can have multiple users log into the one tablet.

#### Can you have multi-stores on one tablet with Open mSupply?

Yes!

The stores visible on each tablet at each site are configured centrally.
When you log in you will see all stores that you have permission to log in to.
If you don't see a store you expect, check permissions on the central server and make sure the remote site has synchronised after updating permissions.

#### Can you have multiple users on multiple Open mSupply tablets accessing the same store concurrently?

Yes!

You can also access an Open mSupply server running on an Android tablet from a machine running Open mSupply desktop or from a web browser on any device.

Further, Open mSupply "publishes" its availability on the local network, so you can log into the server without messing around with IP addresses and the like.

#### Can multiple people view/edit the same shipment/stocktake/requisiton at the same time?
Yes! Although the last edit will override previous edits if you both edit the same line at the same time. Stock integrity will be maintained though.

#### Are there any concurrent license restrictions?

There aren't any restrictions on the number of users connected to a server.
