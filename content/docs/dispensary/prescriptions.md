+++
title = "Prescriptions"
description = "Prescribing stock to patients."
date = 2022-03-19T18:20:00+00:00
updated = 2024-10-03T17:40:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Prescriptions can be used to prescribe medicine to patients.

A Prescription can be used to:

- Issue medicine to a patient

## Viewing Prescriptions

To use prescriptions, ensure that your store is set to `Dispensary` mode (see the [virtual stores](https://docs.msupply.org.nz/other_stuff:virtual_stores#store_type) documentation for how to do this).

### Open the Prescriptions Menu

Choose `Dispensary` > `Prescription` in the navigation panel.

![Go to Prescriptions](/docs/dispensary/images/goto_prescriptions.png)

You will be presented with a list of Prescriptions (if you don't see any, you are probably just starting!).

From this screen you can:

- View a list of Prescriptions
- Create a new Prescription
- Export Prescription to a `.csv` file

### Prescription List

1. The list of Prescriptions is divided into 5 columns:

| Column      | Description                         |
| :---------- | :---------------------------------- |
| **Name**    | Name of the Patient                 |
| **Status**  | Current Status of the prescription  |
| **Number**  | Reference Number of the precription |
| **Created** | Creation date of the prescription   |
| **Comment** | Comment for the prescription        |

2. The list can display a fixed number of prescriptions per page. On the bottom left corner, you can see how many prescriptions are currently displayed on your screen.

![Page](/docs/distribution/images/os_list_showing.png)

3. If you have more prescriptions than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

4. You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Search by Patient Name

You can filter the list of prescriptions by patient name. This can be useful if you're looking for one particular prescription!

Type the name of a patient in the `Search by name` field (on the left, just above the list headers). All the prescriptions for this patient will appear in the list.

![Search by name](/docs/dispensary/images/search_by_name.png)

### Exporting Prescriptions

The list of Prescriptions can be exported to a comma separated file (csv). Simply click the export button (on the right, at the top of the page)

![Export button](/docs/distribution/images/export.png)

and the file will be downloaded. The export function will download all Prescriptions, not just the current page, if you have more than 20 of them. Prescriptions are exported using sort order selected in the table, though of course you could easily sort the list in Excel or whatever you open the .csv file with!

### Delete a Prescription

You can delete a prescription from the Prescription list.

1. Select the prescription that you want to delete by checking the box on the left end of the list. You can select more than one prescription to be deleted. You can even select them all using the master checkbox in the list headers.
2. The `Actions` footer will display at the bottom of the screen when a prescription is selected. It will display the number of prescriptions selected and the actions which can be taken. Click `Delete`.
3. A notification confirms how many prescriptions were deleted (bottom left corner).

<div class="note">
You can only delete Prescriptions with a status <code>NEW</code>.
</div>

![Prescription list: delete](/docs/dispensary/images/prescription_delete_step_1.png)
![Prescription list: delete](/docs/dispensary/images/prescription_delete_step_2.png)
![Prescription list: delete](/docs/dispensary/images/prescription_delete_step_3.png)

## Creating a Prescription

1. Go to `Dispensary` > `Prescriptions`.

2. Press the `New Prescription` button, in the top right corner

![New Prescription](/docs/dispensary/images/click_new_prescription.png)

3. A new window `Patients` opens, inviting you to select a patient.

#### Select a Patient

1. In the `Patients` window, you will be presented with a form to search for available patients. The patients list will load when you start typing - you can enter as much of the patient's name or code as you need.

<div class="imagetitle">
In the below example, we are prescribing medicine to <b>Ginny Weasley</b>. 
</div>

![gif](/docs/dispensary/images/prescription_select_patient_step_1.png)
![gif](/docs/dispensary/images/prescription_select_patient_step_2.png)

2. Your Prescription is automatically created once you click on the patient in the dropdown list.

<div class=imagetitle>
If everything went well, you should see the name of your patient in the top left corner and the status should be <code>NEW</code> 
</div>

![Prescription: created](/docs/dispensary/images/prescription_created.png)

### Edit the Patient Name

If you have selected the wrong patient, you can change the patient name in the `Patient` field by typing some characters to search and then selecting from the dropdown list:

![Change patient](/docs/dispensary/images/prescription_change_patient_step_1.png)
![Change patient](/docs/dispensary/images/prescription_change_patient_step_2.png)
![Change patient](/docs/dispensary/images/prescription_change_patient_step_3.png)

You may need to type more of the patient's name or code if you have more than 100 patients for the patient's name to show on the dropdown list.

### Select the Clinician

Once your Prescription has been created, you can select a clinician from the `Clinician` dropdown list.
![Select Clinician](/docs/dispensary/images/prescription_clinician_step_1.png)
![Select Clinician](/docs/dispensary/images/prescription_clinician_step_2.png)

### View or edit the Prescription Information Panel

The Information Panel allows you to see or edit information about the Prescription. It is divided into multiple sections:

- Additional Info
- Pricing
- Patient Details

We are planning to add more sections in the future as Open mSupply grows.

#### How to open and close the Information Panel?

If you are using a large screen, the information panel will be automatically opened for you. However, on an average sized screen, the information panel will be closed by default.

To open the Information Panel, you can tap on the `More` button, located in the top right corner of the Prescription view.

![Open and close the Information Panel](/docs/dispensary/images/prescription_infopanel_more.png)

You can close by tapping on the `X Close` button, on the top right corner of the information panel.

![Open and close the Information Panel](/docs/dispensary/images/prescription_infopanel_open.png)

#### Information Panel

In the **Additional Info** section, you can:

- See who created the Prescription (name of the user)
- View and edit the Prescription color. To edit the color, tap on the coloured circle and select a color from the pop-up
- Write or edit a comment

In the **Pricing** section, you can:

- See the total selling price of the items listed in the Prescription.

In the **Patient Details** section, you can:

- Select a Diagnosis related to the prescription

### Prescription Status Sequence

The status sequence is located at the bottom left corner of the Prescription screen.

Passed statuses are highlighted in blue, next statuses appear in grey.

<figure>
<center><img src="/docs/dispensary/images/prescription_statussequence1.png" style="width:40%"/></center>
<figcaption align="center">Status Sequence: current status is <code>NEW</code>.</figcaption>
</figure>

<figure>
<center><img src="/docs/dispensary/images/prescription_statussequence2.png" alt="Trulli" style="width:40%"/></center>
<figcaption align="center">Status Sequence: current status is </i><code>VERIFIED</code>.</figcaption>
</figure>

There are 3 status for a Prescription:

| Status       | Description                                                                                                                                  |
| :----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **New**      | This is the first status when you create a prescription.                                                                                     |
| **Picked**   | Prescription is picked and is now ready to give to the patient. Goods are still part of your inventory and prescription can still be edited. |
| **Verified** | The patient has received their medicine.                                                                                                     |

If you hover over the status sequence, a prescription history window appears. You can see the date when a perscription was updated from one status to another.

<div class="imagetitle">
This prescription has been created, picked and verified on 18/08/2023
</div>

![Prescription status: hover](/docs/dispensary/images/prescription_statussequence_hover.png)

### Cancel and Confirm button

#### Cancel Button

Tap on the `Close` button to quit the Prescription view and return to the Prescriptions list.

#### Confirm Button

The `Confirm` button updates the status of the prescription. The status which you can confirm depends on the current status of the prescription and follows the sequence shown below.

When managing an Prescription, you can only confirm the Picked and Verified statuses. Once you have added an item to a prescription, the status will change to `Picked` automatically.

| Confirm...           | Current Status | Next Status |
| :------------------- | :------------- | :---------- |
| **Confirm Picked**   | New            | Picked      |
| **Confirm Verified** | Picked         | Verified    |

## Adding lines to a Prescription

Tap on the `Add Item` button (top right corner) of the prescription window to begin adding items to the prescription.

![Add Item button](/docs/dispensary/images/prescription_add_item_button.png)

Once an item has been added to the prescription, you can also use the `New Item` button in the left hand panel to add an additional item.

![New Item Button](/docs/dispensary/images/prescription_new_item_button.png)

### Select an Item

In the `Add Item` window, you can look up an item by:

- Reading through the list of available items
- or by typing some or all of the item name
- or by typing some or all of an item code

Once your item is highlighted, tap on the name or press `Enter`.

![Adding an item to a prescription](/docs/dispensary/images/prescription_additem_step_1.png)
![Adding an item to a prescription](/docs/dispensary/images/prescription_additem_step_2.png)
![Adding an item to a prescription](/docs/dispensary/images/prescription_additem_step_3.png)

Once the item is selected, you can see information about the item broken down into different sections

#### Item Section

This shows the item name and code.

![alt text](/docs/dispensary/images/prescription_item_section.png)

#### Quantity Section

- the available batches for this item
- the item's unit (eg. _Tablets_)

![Quantity Section](/docs/dispensary/images/prescription_qty_section.png)

##### Issuing stock

In the `Issue` field, you can enter the quantity that you want to issue to your patient.
The system will then attempt to automatically allocate the stock for the prescription.

#### List of available batches:

This is a list of batch numbers that you have in store for this item:

| Column                | Description                                                                             |
| :-------------------- | :-------------------------------------------------------------------------------------- |
| **Expiry**            | Expiry date of the batch (format: MM/YYYY)                                              |
| **Batch**             | Batch number. It is a designation given to products made in the same manufacturing run. |
| **Pack Size**         | Quantity of units per pack                                                              |
| **In Stock (units)**  | Total number of units in your store                                                     |
| **Available (units)** | Number of units available (not already allocated to other invoices)                     |
| **Units Issued**      | Total quantity of units to be issued                                                    |

![List of available batch numbers](/docs/dispensary/images/prescription_additem_listofbatches.png)

### Issue a quantity

<div class="imagetitle">
In the below example, we are issuing 1000 units of the item. All 1000 units will be taken from the same batch (first row). The other two batches was not selected because they are expired or on hold.
</div>

![Auto allocate 1000 units from single batch](/docs/dispensary/images/prescription_additem_1.png)
![Auto allocate 1000 units from single batch (Collapsed View)](/docs/dispensary/images/prescription_additem_1_collapsed.png)

<div class="imagetitle">
In this other example, we are issuing 11 units. System selects two batches with different pack sizes. 
</div>

![Allocated Item 2 Batches selected](/docs/dispensary/images/prescription_additem_issueunitstwobatches.png)
![Allocated Item 2 Batches selected (Collapsed View)](/docs/dispensary/images/prescription_additem_issueunitstwobatches_collapsed.png)

#### Warnings

You may see one or more warning messages on this screen:

![Warning: can't allocate that many](/docs/dispensary/images/prescription_warning_cant_allocate_more_than_we_have.png)
This warning tells you that you are trying to issue more units than you have in stock. You will need to reduce the quantity you are trying to issue, or add more stock to the system.

![Warning: Partial Pack](/docs/dispensary/images/prescription_warning_non-whole-packs.png)

This warning tells you that because of the available pack sizes, the quantity you are trying to issue would result in an a partial pack being issued. If do not want to split a pack, you'll need to enter a quantity that is a multiple of the pack size(s) available.

![Warning: Expired stock](/docs/dispensary/images/prescription_warning_on-hold.png)

This warning tells you that some of your stock is on hold and/or expired cannot be auto allocated.

### Manual Allocation

Regardless if how the system automatically allocates stock, you can always manually change the quantity at the batch number level directly.
This method also allows you to select expired batches, but not on hold batches.

To select or adjust the selected batches, enter or edit the quantity in the `Units Issued` column.

<figure>
<img src="/docs/dispensary/images/prescription_additem_manual_step_1.png">
<img src="/docs/dispensary/images/prescription_additem_manual_step_2.png">
<figcaption align = "center"><i>Manual allocation at the batch number level.</i></figcaption>
</figure>

### Confirm Item and Quantity

When you are happy with the quantity, you can either press on:

- the `Save` button.

- the `Cancel` button if you do not want to add the item to the Prescription any more

## Editing a Prescription Line

To edit a prescription line, tap on it. You will be presented with the `Edit Item` window, which is identical to the `Add Item` window, except that the item is already chosen.

### Edit a Prescription Line

<div class="note">
 <b></b> You can edit a prescription line if the prescription has a status lower than <code>Verified</code>. 
</div>

1. Open the Prescription you want to edit.
2. Tap on the line you want to edit.

<div class="note">
 <b></b> When editing a prescription line, you cannot change the item. You would need to delete the prescription line and create a new one. 
</div>

### Delete a Prescription line

1. Open the Prescription you want to edit
2. Select the line(s) you want to delete by checking the box(es) on the left hand side of the list
3. The `Actions` footer will display at the bottom of the screen when a prescription line is selected. It will display the number of prescription lines selected and the actions which can be taken.
4. Click `Delete`
5. Accept the confirmation
6. A success notification will be shown on the bottom left of the screen

<div class="imagetitle">
In the below example, we are deleting <i>item 088882 - Ibuprofen 200mg tablets</i>
</div>

![Alt Text](/docs/dispensary/images/prescription_delete_lines_step_1.png)
![Alt Text](/docs/dispensary/images/prescription_delete_lines_step_2.png)
![Alt Text](/docs/dispensary/images/prescription_delete_lines_step_3.png)

<div class="tip">
You can delete multiple lines at once. Be sure to review what is selected before performing the Delete action. 
</div>

## Backdating A Prescription

A prescription can be backdated by changing the Date field in the header. This must be done before adding items to the prescription.

![Prescription Date UI Control](/docs/dispensary/images/prescription_backdate_highlight.png)

#### Stock Levels

When adding items to a backdated prescription, the available stock will be adjusted to what was available at that date (and hasn't been used since).
The other fields still show the current state of the system.

![Backdating a Prescription, stock levels](/docs/dispensary/images/prescription_backdate_stock_levels.png)

<div class="tip">
If some stock you are expecting to see doesn't show as available, use the <a href="/docs/inventory/stock-view/#ledger-tab">Ledger</a> in Inventory -> Stock to see when that stock was received.
</div>

#### Changing the date after adding items

If you have already assigned stock to a prescription, and then you change the date of the prescription, you will see this warning:

![Backdating a Prescription - Delete lines](/docs/dispensary/images/prescription_backdate_delete_lines.png)

The system needs to recalculate the available stock levels based on the new date, so existing lines will be removed and you'll need to add them again. Therefore, it is recommended to set the date before adding items to the prescription!

## Processing a Prescription

### Confirming Prescription picking

Picking refers to the process where individual items are picked from pharmacy.

Once an item has been added to your prescription, the status will automatically change to picked:

- Prescription status is now `PICKED`
- You are now invited to confirm the prescription via the `Confirm Verified` button

At this stage, you are still able to edit invoice lines, to add items or to delete existing lines.

### Verify the Prescription

The last step to prescribe medicine is to verify the prescription.

To verify a prescription, tap on the `Confirm Verified` button.

Once the prescription has been confirmed:

- Prescription status is now `VERIFIED`
- Goods are no longer part of your inventory
- You can no longer edit prescription lines
- You can no longer delete the prescription

## Viewing a Prescription

Batches are automatically grouped by item when viewing a specific prescription. Use the expand button for a specific row in order to see the details for each batch of the item.

For example, the Paracetamol 500mg tabs shown here, has three batches allocated. Click the expand icon in the row to see the details:

![Group by Item](/docs/dispensary/images/prescription_group_by_item_step_1.png)
![Group by Item](/docs/dispensary/images/prescription_group_by_item_step_2.png)

If you do not have enough room on your screen, or simply aren't interested in some of the columns shown, you have the option of hiding which columns are shown in this view.

Click on the `Show / hide columns` button which is at the top right of the table. This gives a list of the columns available - you can check the columns you want to see. The options chosen are stored for the current browser, so next time you view a Prescription, you will see the selected columns only. If you have chosen which columns to show, then the button is shown in blue to remind you that there are more columns available.

![Hide columns](/docs/dispensary/images/prescription_columns_step_1.png)
![Hide columns](/docs/dispensary/images/prescription_columns_step_2.png)
![Hide columns](/docs/dispensary/images/prescription_columns_step_3.png)

If some columns are hidden, you can click `Show all` to show all of the columns again.
