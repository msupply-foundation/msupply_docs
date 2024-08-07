+++
title = "R&R Forms"
description = "Introduction to R&R Forms"
date = 2024-08-06T00:00:00+00:00
updated = 2024-08-06T00:00:00+00:00
draft = false
weight = 60
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Report and Requisition (R&R) Forms are used to report on item usage and request stock from suppliers. They help to ensure that you have enough stock on hand to meet the needs of your patients."
toc = true
top = false
+++

## Setup

To use R&R Forms, ensure that you enable the store preference for `Open mSupply: Uses program module`.

![Store preference](/docs/programs/images/program_pref.png)

You'll also need a program configured and visible in your store, and the program will need a period schedule associated with it.
Start with configuring [periods and schedules](https://docs.msupply.org.nz/admin:schedules_periods) and then create a program and associate the schedule.
See the [mSupply docs](https://docs.msupply.org.nz/items:programs) for configuring programs - note though that you'll only need the start of this process, which is to create a program and associate a schedule. For R&R forms, the other program configuration aspects aren't used yet.

## R&R Forms - List View

Go to `Programs` > `R&R Forms` to view the list of R&R Forms.

![R&R Navigation](/docs/programs/images/goto_rnr.png)

You can click the column headers to sort the list by that column.

<!-- TODO: repalce with status list -->

![R&R List](/docs/programs/images/rnr_list.png)

Clicking on an R&R form will take you to the details page.

### Add an R&R Form

To add an R&R Form, click the `Add Form` button on the top right corner of the screen.

![Add Button](/docs/programs/images/rnr_add_button.png)

A window will open for you to select the program, schedule, period and supplier for the R&R form.

![Add R&R: empty](/docs/programs/images/add_rnr_empty.png)

The first time you create an R&R form, you will need to select each of these options. After that, the inputs will be pre-filled with the previous period's data.

<div class="imagetitle">Our most recent R&R form was from April 2024, for Program Tb. The same program, schedule and supplier are selected, and the next period is chosen automatically.</div>

![Add R&R: pre-filled](/docs/programs/images/add_rnr.png)

The first time you create an R&R form, you can select any available period. After that, you will only be able to select the next period in the sequence.

<div class="imagetitle">The previous R&R form was for the APR 24 period</div>

![Add R&R: pre-selected period](/docs/programs/images/add_rnr_selected_period.png)

Note that you cannot create the next R&R form until the previous one is finalised:

![Warning: need to finalise previous](/docs/programs/images/add_rnr_error_finalise.png)

Once you are happy with your inputs, click `OK` to generate the form. You will be redirected to the R&R form details page.

## Detail View

![R&R Detail view](/docs/programs/images/rnr_detail.png)

The R&R form contains the following columns. Calculated/non-editable columns are greyed out. Columns marked with an asterisk (\*) below are editable.

| Column                   | Description                                                                                                                                                                                                   |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Code**                 | Item code                                                                                                                                                                                                     |
| **Name**                 | Item name                                                                                                                                                                                                     |
| **Strength**             | Strength of the item                                                                                                                                                                                          |
| **Unit**                 | Unit of measure for the item                                                                                                                                                                                  |
| **VEN**                  | Item VEN category: Vital (V), Essential (E), Non-essential (N)                                                                                                                                                |
| **Initial balance\***    | Stock on hand for this item at the start of the period. Uses the final balance from the previous R&R form (if it exists), or attempts to calculate the balance based on any transaction data in Open mSupply. |
| **Received\***           | Quantity of this item received during the period. Populated by quantities received through Inbound Shipments.                                                                                                 |
| **Consumed\***           | Quantity of this item consumed during the period. Populated by quantities distributed through Outbound Shipments or Prescriptions.                                                                            |
| **Adjusted consumption** | Consumption, adjusted for any days out of stock. Calculation is <code>Consumed x Days in period / Days in stock</code>                                                                                        |
| **Adjustments\***        | Losses/adjustments made for this item during the period. Can be positive or negative. Populated by data from Stocktakes or Inventory Adjustments.                                                             |
| **Stock out duration\*** | Number of days in the period where stock on hand for the item was 0.                                                                                                                                          |
| **Final balance**        | Stock on hand for the item at the end of the period. Calculation is <code>Initial balance + Received - Consumed + Adjustments</code>                                                                          |
| **AMC**                  | Average monthly consumption over the last 3 periods                                                                                                                                                           |
| **Maximum**              | <code>AMC x 2</code>                                                                                                                                                                                          |
| **Expiry\***             | Expiry date of the earliest expiring available batch of this item                                                                                                                                             |
| **Requested\***          | Quantity to be requested in the requisition. Calculated as <code>Maximum - Final balance</code>                                                                                                               |
| **Comment\***            | You can add any comments to the line as needed                                                                                                                                                                |
| **Confirmed\***          | Use this column to keep track of which lines are complete. Acts as the save button for changes to a line.                                                                                                     |

### Editing the R&R Form

You can make changes to the usage data for each item in the R&R form, as well as the quantity to request from the supplier.

Once you are happy with the information for an item, click the `Confirmed` checkbox to save the data.

![Edit line](/docs/programs/images/rnr_edit_line.gif)

### Print and Export

You can print or export the R&R form by clicking the `Print` or `Export` buttons in the top right corner of the screen.

![Print and export buttons](/docs/programs/images/rnr_print_and_export.png)

- The `Print` button will open your browser's print window. You can also save the report as a PDF from here.
- The `Export` button will download the R&R form as an Excel file.

<div class="note">
In order to print or export, you will need an R&R Form report configured. Please contact support for assistance.
</div>

### Finalising an R&R Form

![Finalise](/docs/programs/images/rnr_finalise.png)

When you are ready to finalise the R&R form, click the `Finalise` button at the bottom right of the screen. At this point:

- The R&R form will no longer be editable
- An Internal Order will be created and sent to the selected supplier. The values entered against each item in the R&R form are used to populate the Internal Order, so check the `Requested` value before confirming! 

You can also click the `Close` button at any time to return to the list view.
