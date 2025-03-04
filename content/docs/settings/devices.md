+++
title = "Devices"
description = "Configure devices attached to the system"
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The devices settings section allows you to configure devices that you may have connected to the Open mSupply system.

## Viewing the device settings

To view the display settings, go to `Settings` in the lower section of the navigation panel:

![Admin: nav](/docs/settings/images/admin_nav.png)

You will see the list of settings sections:

![Admin: collapsed](/docs/settings/images/admin_collapsed.png)

Click on the `Devices` section to begin.

## Label Printing

<div class="note">Label printing support is very limited at this time! Label printers are used only for printing QR codes to identify cold chain equipment and <a href="/docs/dispensary/prescriptions/#printing-labels">basic prescription labels</a>. There are plans to implement the printing of labels in the dispensary though. Check the <a href="/docs/introduction/roadmap/">roadmap</a> for details.</div>

The label printing functionality is in an experimental state currently. There is limited support for label printers in that you can configure only a single, network-enabled, label printer which supports the ZPL printer language.

![Label Printing](/docs/settings/images/devices_label_printing.png)

Enter the IP address and other details of the printer. To test your configuration, you can click the `Test` button. This will attempt to connect to the printer and fetch configuration details from it.

If you are happy with the settings, click `Save` to save the details.

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
