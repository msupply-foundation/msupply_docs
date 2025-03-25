+++
title = "Processing Outbound Shipments"
description = "Issuing stock to your customers."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 208
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

### Allocating an Outbound Shipment

Allocation is the process of assigning one or multiple batch numbers from the inventory to a shipment line. In other words, you are assigning stock to your shipment. Once allocated, the stock is reserved for the shipment and thus for your customer.

There are 2 main ways to allocate a shipment line:

1. When adding items, the system will automatically assign stock to the new shipment line when you enter a quantity. If you don't have enough stock, the system will add placeholder lines (unallocated lines).

2. Bulk action `Allocate placeholder lines`: Select the lines that you want to allocate by checking boxes on the left hand side of the list

3. Click the `Allocate placeholder lines` button which appears at the bottom of the page. System will check if there is available stock for each selected line and allocate them using the First to Expire, First Out (FEFO) logic. A notification will let you know whether the operation is successful or not.

<div class="note">
You won't be able to process your Outbound Shipment if you have unallocated lines (shipment lines without batch number(s) assigned to them) with a quantity greater than 0. You can wait for more stock to arrive or you can delete the placeholder lines. Any unallocated lines with a 0 quantity will automatically be removed for you when you allocate.
</div>

### Confirming an Outbound Shipment's allocation

Once all your shipments lines have been allocated, you can **confirm the allocation**:

- Current status of the shipment has to be `NEW`
- Lines must be assigned with one or several batch numbers. You won't be able to confirm the allocation if your shipment contains lines without batch numbers assigned to it (placeholder lines).

To confirm the allocation, press the `Confirm Allocated` button.

![Alt Text](/docs/distribution/images/confirm-allocated-outbound-shipment-line.gif)

Once the allocation is confirmed:

- Shipment status is `ALLOCATED`
- You are now invited to confirm the picking via the `Confirm Picked` button
- All the items and their quantities will be reserved, meaning that they are no longer available for allocation
- You can print a **pick slip** to be sent to your warehouse so they can start preparing the shipment

### Confirming Outbound Shipment picking

Picking refers to the process where individual items are picked from a fulfilment facility (usually a warehouse or a pharmacy store).

Once a shipment has been allocated, the next step is to go get the items to prepare the actual shipment. To help with that, you are able to generate a **pick slip**. A pick slip indicates:

- The items to be picked
- The quantity and batch numbers for each item
- If you manage your inventory with storage locations, where the items are located

Once all items are picked and packed. You can then confirm the picking of the shipment to indicate that it is ready to be dispatched. Goods are no longer part of your inventory and cannot be allocated to other shipments once the status has been changed to `PICKED`.

To confirm that a shipment has been picked, tap on the `Confirm Picked` button.

![Alt Text](/docs/distribution/images/confirm-picked-outbound-shipment-line.gif)

Once picking is confirmed:

- Shipment status is now `PICKED`
- You are now invited to confirm the shipping via the `Confirm Shipped` button
- If your customer is also using mSupply, then an **Inbound Shipment** has been generated and is now visible to your customer

At this stage, you are still able to edit shipment lines, to add items or to delete existing lines. However, if picking has been confirmed, you need to make sure to inform your fulfilment facility of any change so they can make sure that the shipment is still correct.

### Confirming the Outbound Shipment shipping

The last step to issue stock with an Outbound Shipment is to confirm that stock has been shipped. This is a critical step because when goods are confirmed as shipped, they are no longer a part of your inventory records.

To confirm that an Outbound Shipment has been shipped, tap on the `Confirm Shipped` button.

Once shipping has been confirmed:

- Shipment status is now `SHIPPED`
- Goods are no longer part of your inventory
- You can no longer edit shipment lines
- You can no longer delete the shipment
- You can print a **delivery note** or an **invoice**

### Tracking the Progress of Outbound Shipments

If your customer is also using mSupply, you will be able to see when they'll receive your shipments:

- status will become `DELIVERED` when goods are received: your customer confirmed that they received your goods
- status will become `VERIFIED` when shipment has been verified by your customer. Goods are now a part of their inventory.

