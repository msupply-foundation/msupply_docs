+++
title = "Receive Inbound Shipments"
description = "Inbound Shipments"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 203
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Receiving Stock with an Inbound Shipment

### Confirm the delivery of the shipment

Whether your Inbound Shipment is **manual** or **automatic**, the first step to receive the goods is to confirm the delivery.

At this stage, you don't have to check if quantities or other information are correct, you just have to acknowledge that you have received the goods from your supplier.

To confirm that an Inbound Shipment has been delivered, click on the `Confirm Delivered` button.

Once you have done this:

- Goods are now part of your inventory
- Shipment status is now `DELIVERED`

<div class="note">
In case your Inbound Shipment is <b>automatic</b>, you cannot confirm its delivery unless the supplier has confirmed its shipment. In other words, your shipment status has to be <code>SHIPPED</code> before you can confirm that you have received the goods. 
</div>

<div class="note">
Any unallocated lines with a 0 number of packs value will automatically be removed for you when you confirm.
</div>

### Verify your Inbound Shipment

Verification is the last step to receive goods in mSupply. At this stage, you can check what you have received and make sure that that information in mSupply are correct.

You have the possibility to verify the following information:

- Batch numbers and their expiry dates
- Quantity of packs and pack size
- Pricing information: cost and sell prices

You can also capture where received goods are to be stored in the `Location` tab.

Once all information have been captured or verified, you can confirm the Shipment as `VERIFIED` by tapping on the `Confirm Verified` button.

Once you have done this:

- Shipment status is now `VERIFIED`
- You can no longer edit shipment lines
- You can no longer delete the shipment

### Partial Inbound Shipment

If only part of a shipment has arrived (e.g., 60 out of 100 boxes), you can still receive it.

To process a partial shipment:

1. Select `Confirm Delivered` to acknowledge receipt.
2. Select the items that were **not** delivered by marking the checkbox.
3. Select `Set Quantities to 0` to exclude them from this delivery.
4. Select `Confirm Verified` to complete the receipt.

Once completed:

- Only the received items are added to inventory.
- Shipment status is set to `DELIVERED`.
- Remaining items must be handled in a separate delivery if they arrive later.
