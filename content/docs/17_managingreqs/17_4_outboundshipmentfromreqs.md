+++
title = "Generating Outbound Shipments from Requisitions"
description = "Create Outbound Shipment from Requisition"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 205
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

#### Creating an Outbound Shipment from a Requisition

Once you are happy with the supply quantities, you can create an `Outbound
Shipment` which will supply the items requested by going back to the Requisition
Detail page.

Click on the `Create Shipment` button. This will create a shipment, add all of the items which are not fully supplied, and then, open that shipment in a new tab. Before doing so, you are prompted to confirm:

![Create Shipment Prompt](/docs/distribution/images/requisition-create-shipment.png)

If the supply quantity is changed for any item/s in the requisition after a shipment has been made for it and a new shipment is created through clicking the `Create Shipment` button, then a new shipment will be created with the remaining supply amount (supply quantity minus any linked Outbound Shipment quantity).

![Create Shipment Detail](/docs/distribution/images/requisition-create-shipment.gif)

After creating the shipment, you will see the shipment number, along with a link to view it, in the `Related documents` section of the additional details panel on the right of the screen.

Clicking an item line in the table will redirect you to the line details page. Here you can adjust the quantity to supply and add a comment.