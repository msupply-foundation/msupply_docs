+++
title = "How to Sync"
description = "how to sync"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 204
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

## Viewing the synchronisation status

To view the synchronisation status, click `Sync` in the lower section of the navigation panel or press CTRL+ALT+S (CTRL+OPT+S if using a mac) on your keyboard:

![sync: nav](/docs/sync/images/sync_nav.png)

The window shows the number of records waiting to be pushed to the central servers, and the time that the last sync happened.

![sync: status](/docs/sync/images/sync_status.png)

As of v2.0.0, your Open mSupply server actually syncs to two central servers! The `Push V6` and `Pull V6` steps transfer data to and from the Open mSupply central server, which you can read more about [here](/docs/6_SystemConfiguration/6-3-setupcentral/). The `Push`, `Pull Central` and `Pull Remote` steps are syncing with an mSupply central server.

To close the window you can press `Esc` on your keyboard or click the close button which is at the top right:

![sync: status](/docs/sync/images/sync_status_close.png)

## Manual synchronisation

On this (sync) screen you are also able to initiate synchronisation immediately rather than wait for the scheduled time ( remember, the sync interval is configured in the Admin > Synchronisation section, see the [Settings](/docs/5_sync/5-5-syncsettings/) page for details ).

To start sync manually, simply click the `Sync now!` button. When you do, you'll see that the button changes to a spinner and the progress is indicated with the stepper icons which change to show which step is currently active. For example, in the image below you'll see that the `Push` step is active.

![sync: manual](/docs/sync/images/sync_in_progress.png)

You'll notice the totals below the `Push V6` and `Push` steps - this is the number of changes to be _processed_ by each step.

The records will then be pushed to _either_ the Open mSupply central server (V6) or the mSupply central server, but they need to be processed before they know where to go!

So in the above example, 4 sync records are being sent in total, not 8.

If any errors are encountered during the sync progress you will see these on this screen too. Hover over the `i` icon to see additional details.

![sync: error](/docs/sync/images/sync_error.png)

<div class="note">
Manual Sync is not necessary.

Sync is only needed if you are trying to communicate between servers or to a central server. If there is internet, it will generally update automatically after the set amount of seconds.

An example of when you would use the sync button is if the internet connection is very bad and you go to an area with a connection. If you don’t want to wait for the automatic sync, you can select **"sync now"** to place transactions/orders. 

Another situation is when there are urgent orders where an order has been processed, but the other store (recipient) has not received the order yet. In this case, a manual sync on both systems would help push it through instantly.

However, generally, all of this is done automatically and should not be something you need to worry about.

</div>

## Server details

At the top right of the `Settings` page the current server URL is displayed, along with a QR code. The code contains the server URL and can be used to easily configure [mSupply Cold Chain](/coldchain/introduction/) when synchronising with Open mSupply.

![sync: manual](/docs/sync/images/settings_page.png)

If you are having trouble scanning the code, you can click (or press, if using a tablet) the code to display a larger version.

![sync: manual](/docs/sync/images/qr_expanded.png)
