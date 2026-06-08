+++
title = "Barcode scanning"
description = "Adding stock to an inbound shipment with a barcode scanner."
date = 2026-06-08
updated = 2026-06-08
draft = false
weight = 6
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Adding items using a barcode scanner

When you are receiving stock, you can scan the barcode on each product to add it to the inbound shipment instead of looking the item up by hand. This is often quicker and helps avoid mistakes, because the item, batch, expiry date and pack size can be read straight from the barcode.

You can scan using a USB scanner (desktop app), the camera on an Android tablet, or the integrated scanner on a Honeywell Android device. Open mSupply reads both 1D and 2D barcodes, and can parse a GS1 barcode to extract the GTIN-14 code, batch number and expiry date.

<div class="tip">Scanner hardware needs to be set up before you can use it. See <a href="/docs/settings/devices/#barcode-scanners">Devices settings</a> for how to detect and connect a USB scanner, and the <a href="/docs/distribution/outbound-shipments/barcode-scanning/">Outbound Shipment barcode scanning</a> page for how to use the Android camera and what GS1 barcodes look like.</div>

## Scanning stock into an inbound shipment

To begin, open the inbound shipment. As long as the shipment is not yet `Verified`, you can start the scanner using the `Scan` button in the top right of the screen.

<div class="tip">You can also press the 'control (ctrl)' and 's' keys at the same time to start scanning.</div>

On a phone or other small screen the `Scan` button is the main way to add items - line-by-line editing is not available.

### Scanning a product

Each time a barcode is detected, the `Scan product` window opens, pre-filled with whatever information the scanner could read:

- **Item** - if the scanned barcode matches an item in your database, the item is selected automatically. If there is no match, the usual item search is shown so you can choose the correct item.
- **Batch**, **Expiry date** and **Manufacture date** - populated from the barcode if it is a GS1 barcode that contains them
- **Pack size** - taken from the barcode association if one exists, otherwise from the item's default pack size. When a pack size is already linked to that barcode it cannot be changed here.
- **Quantity** - enter the number of packs received

A message at the top of the window tells you what was found:

- If the barcode is already linked to an item, you'll see whether the scanned batch matches an existing line on the shipment (and how many packs are already on it) or whether a new line will be created
- If a GTIN was read but it is not yet linked to any item, a warning is shown. Select the correct item and the barcode will be saved against it, so the **next** time you scan that product it will match automatically

When you are happy with the details, click `OK` to save the line. If the scanned batch already exists on the shipment, the quantity you enter is **added** to that line; otherwise a new line is created.

### Scanning several products in a row

If your scanner supports continuous scanning, such as the Honeywell device, you can keep scanning one product after another without closing the window. When you scan a new product while the `Scan product` window is still open, Open mSupply automatically saves the current line and resets the window ready for the next scan.

For this to work the current line must have an item selected and a quantity greater than zero - if either is missing, an error message is shown and the new scan is ignored until you complete the line.

### Introducing a barcode to stock

If you scan a product whose GTIN-14 code is not yet known to Open mSupply, simply select the matching item in the `Scan product` window. The barcode (and its pack size) is then saved against that item, so future scans of the same product are recognised automatically. Over time this builds up your barcode catalogue with no extra work.
