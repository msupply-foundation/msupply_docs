+++
title = "Inbound Shipment Returns"
description = "Returning Stock from Inbound Shipments"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 204
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Returning stock from an Inbound Shipment

Sometimes, you might need to return stock that you received via an Inbound Shipment. You can do this by creating an [Supplier Return](/docs/19_returns/19-5-supplier-returns/).

1. Open the Inbound Shipment for which you would like to return some or all of the stock
2. Make sure that status is at least `DELIVERED`
3. Select the line(s) you want to return by checking the box(es) on the left of the list
4. Click the `Return selected lines` button which appears at the bottom of the page.

![Process return inbound shipment line](/docs/replenishment/images/return-inbound-shipment-line.png)

#### Select quantity to return

A modal will open, containing each line you selected to return:

|              Column               | Description                                                                                                                                                                                      |
| :-------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|             **Code**              | Item code                                                                                                                                                                                        |
|             **Name**              | Item name                                                                                                                                                                                        |
|             **Batch**             | Batch number. It is a designation given to products made in the same manufacturing run.                                                                                                          |
|            **Expiry**             | Expiry date of the batch (format: MM/YYYY)                                                                                                                                                       |
| **Quantity Available for Return** | Number of packs available. This means the number of packs not already allocated to other shipments or returns, so the quantity could be less than the quantity received in the Inbound Shipment. |
|      **Quantity to Return**       | Number of packs to be returned                                                                                                                                                                   |

![Alt Text](/docs/replenishment/images/is_return_select_quantity.png)

The `Quantity to Return` values will initially be `0` - you can adjust this to return some or all of the available stock.

#### Warnings

If you forget to enter a quantity to return for any batch and click `Next step`, you will see this warning message. You'll need to add a quantity to return from at least one batch. You can click `Cancel` if you no longer want to return any of this stock.
![Alt Text](/docs/replenishment/images/is_selectquantity_warning.png)

#### Provide reasons

Once you are happy with your quantities to return, you can click `Next step`. The list of batches will be filtered to only include the batches you provided a return quantity for. In this view, you can provide a reason for returning each batch, and an additional comment.

![Alt Text](/docs/replenishment/images/is_return_lines.gif)

#### Confirm

When you are happy with the quantities and reasons, you can press on:

- the `OK` button. A Supplier Return will be created, and you will be redirected to view it. The quantities of stock selected to return will be reserved for the new return.
- the `Back` button, to go back to the `Select quantity` step
