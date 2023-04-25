+++
title = "Synchronisation"
description = "Configure the server sync settings"
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 81
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Synchronisation is the term we use to denote the process of transferring data between your server and the central server. This page covers viewing the current status and how to manually initiate synchronisation."
toc = true
top = false
+++

## Viewing the synchronisation status

To view the synchronisation status, go to `Sync` in the lower section of the navigation panel: 

![sync: nav](/docs/sync/images/sync_nav.png)

The page shows the number of records waiting to be pushed to the central server and the time that the last sync happened.

![sync: status](/docs/sync/images/sync_status.png)

## Manual synchronisation

On this (sync) screen you are also able to initiate synchronisation immediately rather than wait for the scheduled time ( remember, the sync interval is configured in the Admin > Synchronisation section, see the [Administration](/docs/administration/synchronisation/) page for details ).

To start sync manually, simply click the `Sync now!` button. When you do, you'll see that the button changes to a spinner and the progress is indicated with the stepper icons which change to show which step is currently active. For example, in the image below you'll see that `Pull remote` is active.

![sync: manual](/docs/sync/images/sync_in_progress.png)

Here is the complete process in action, with the steps slowed down. You'll notice when you try this that the sync is usually very quick, though it depends on how many items you have to sync:

![sync: manual](/docs/sync/images/sync.gif)

If any errors are encountered during the sync progress you will see these on this screen too. Hover over the `i` icon to see additional details.