+++
title = "Label Printer"
description = "Label Printer."
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 207
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

## Label Printing

<div class="note">Label printing support is very limited at this time! Label printers are used only for printing QR codes to identify cold chain equipment. There are plans to implement the printing of labels in the dispensary though. Check the <a href="/docs/introduction/roadmap/">roadmap</a> for details.</div>

The label printing functionality is in an experimental state currently. There is limited support for label printers in that you can configure only a single, network-enabled, label printer which supports the ZPL printer language.

![Label Printing](/docs/settings/images/devices_label_printing.png)

Enter the IP address and other details of the printer. To test your configuration, you can click the `Test` button. This will attempt to connect to the printer and fetch configuration details from it.

If you are happy with the settings, click `Save` to save the details.

