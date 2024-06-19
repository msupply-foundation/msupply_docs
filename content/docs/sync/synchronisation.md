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

The page shows the number of records waiting to be pushed to the central servers, and the time that the last sync happened.

![sync: status](/docs/sync/images/sync_status.png)

As of v2.0.0, your Open mSupply server actually syncs to two central servers! The `Push V6` and `Pull V6` steps transfer data to and from the Open mSupply central server, which you can read more about [here](../../getting_started/central). The `Push`, `Pull Central` and `Pull Remote` steps are syncing with an mSupply central server.

## Manual synchronisation

On this (sync) screen you are also able to initiate synchronisation immediately rather than wait for the scheduled time ( remember, the sync interval is configured in the Admin > Synchronisation section, see the [Settings](/docs/settings/synchronisation/) page for details ).

To start sync manually, simply click the `Sync now!` button. When you do, you'll see that the button changes to a spinner and the progress is indicated with the stepper icons which change to show which step is currently active. For example, in the image below you'll see that the `Push` step is active.

![sync: manual](/docs/sync/images/sync_in_progress.png)

You'll notice the totals below the `Push V6` and `Push` steps - this is the number of changes to be _processed_ by each step.

The records will then be pushed to _either_ the Open mSupply central server (V6) or the mSupply central server, but they need to be processed before they know where to go!

So in the above example, 4 sync records are being sent in total, not 8.

Here is the complete process in action. You'll notice that most of the sync steps are very quick, though it depends on how many records you have to sync:

<p><img src="/docs/sync/images/sync.gif" alt=:"sync: manual" width="800" /></p>

If any errors are encountered during the sync progress you will see these on this screen too. Hover over the `i` icon to see additional details.

![sync: error](/docs/sync/images/sync_error.png)

## Server details

At the top right of the `Sync` page the current server URL is shown, along with a QR code. The code contains the server URL and can be used to easily configure [mSupply Cold Chain](http://127.0.0.1:1111/coldchain/introduction/) when synchronising with Open mSupply. If you are having trouble scanning the code, you can click (or press, if using a tablet) the code to display a larger version.

![sync: manual](/docs/sync/images/expand_qr.gif)
