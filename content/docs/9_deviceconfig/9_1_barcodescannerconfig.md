+++
title = "Barcode Scanner"
description = "Barcode Scanner."
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 206
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

The devices settings section allows you to configure devices that you may have connected to the Open mSupply system.

## Viewing the device settings

To view the display settings, go to `Settings` in the lower section of the navigation panel:

![Admin: nav](/docs/settings/images/admin_nav.png)

You will see the list of settings sections:

![Admin: collapsed](/docs/settings/images/admin_collapsed.png)

Click on the `Devices` section to begin.

## Barcode Scanners

This section allows you to configure a USB barcode scanner for use with Open mSupply desktop.
We support serial-mode and keyboard-mode scanners. The preference is serial scanners which we have found to be more reliable. The Zebra DS-22 is the recommended model.

On opening the barcode scanners section you may see the message `Not connected`:

![Barcode scanner](/docs/settings/images/devices_scanner_not_connected.png)

even though you have a scanner plugged in. The system needs to be instructed that a scanner is available - here's how this is done:

Click the `Detect` button. A barcode will be shown:

![Barcode scanner](/docs/settings/images/devices_scanner_barcode.png)

Scan the barcode with your barcode scanner (this may take a few attempts!). You will see the following notification when successful:

![Barcode scanner](/docs/settings/images/devices_scanner_found.png)

and then the message is changed to the following:

![Barcode scanner](/docs/settings/images/devices_scanner_connected.png)

You are now able to use the barcode scanner!


