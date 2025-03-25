+++
title = "Outbound Shipment Returns"
description = "Outbound Shipment Returns"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 209
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Process return of stock from an Outbound Shipment

Sometimes, stock sent via an Outbound Shipment will need to be returned. You can do this by creating an [Customer Return](/docs/19_returns/19-4-customer-returns/).

1. Open the Outbound Shipment for which you would like to process the return of some or all of the stock
2. Make sure that status is at least `SHIPPED`
3. Select the line(s) you want to process the return of by checking the box(es) on the right of the list
4. Click the `Return selected lines` button which appears at the bottom of the page.

![OS return lines](/docs/distribution/images/return-selected-outbound-shipment-line.gif)

### Select quantity returned

A modal will open, containing each line you selected for return:

| Column                | Description                                                                             |
| :-------------------- | :-------------------------------------------------------------------------------------- |
| **Code**              | Item code                                                                               |
| **Name**              | Item name                                                                               |
| **Batch**             | Batch number. It is a designation given to products made in the same manufacturing run. |
| **Expiry**            | Expiry date of the batch (format: MM/YYYY)                                              |
| **Pack Size**         | Quantity of units per pack                                                              |
| **Pack Qty Issued**   | Number of packs that were issued in the Outbound Shipment                               |
| **Quantity Returned** | Number of packs to be returned                                                          |

The `Quantity Returned` values will initially be `0` - you can adjust this to return some or all of the available stock.

#### Warnings

If you forget to enter a `Quantity Returned` for any line and click `Next step`, you will see this warning message. You'll need to add a quantity returned from at least one line. You can click `Cancel` if you no longer want to process the return of any of this stock.
![Alt Text](/docs/distribution/images/os_selectquantity_warning.png)

### Provide reasons

Once you are happy with your returned quantities, you can click `Next step`. The list of lines will be filtered to only include the lines you provided a return quantity for. In this view, you can enter a reason for the return of each line, and an additional comment.

![Alt Text](/docs/distribution/images/os_return_lines_modal.gif)

### Confirm

When you are happy with the quantities and reasons, you can press on:

- the `OK` button. a Customer Return will be created, and you will be redirected to view it.
- the `Back` button, to go back to the `Select quantity` step
