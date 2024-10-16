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

2. Open the `Select` dropdown (top right corner, above the list) and select `Delete selected lines`.

3. A notification confirms how many prescriptions were deleted (bottom left corner).

<div class="note">
You can only delete Prescriptions with a status <code>NEW</code>.
</div>

![Prescription list: delete](/docs/dispensary/images/prescription_list_deleteline.gif)

## Creating a Prescription

1. Go to `Dispensary` > `Prescriptions`.

2. Press the `New Prescription` button, in the top right corner

![New Prescription](/docs/dispensary/images/click_new_prescription.png)

3. A new window `Patients` opens, inviting you to select a patient.

#### Select a Patient

1. In the `Patients` window, you will be presented with a list of available patients. The patients list will load the first 100 patients and prompt you to refine your search by typing as much of the patient's name or code as you can.

<div class="imagetitle">
In the below example, we are prescribing medicine to <b>Luna Lovegood</b>. 
</div>

![gif](/docs/dispensary/images/prescription_select_patient.gif)

2. Your Prescription is automatically created once you click on the patient in the dropdown list.

<div class=imagetitle>
If everything went well, you should see the name of your patient in the top left corner and the status should be <code>NEW</code> 
</div>

![Prescription: created](/docs/dispensary/images/prescription_created.png)

### Edit the Patient Name

If you have selected the wrong patient, you can change the patient name in the `Patient Name` field or select one the dropdown list:

![Change patient](/docs/dispensary/images/prescription_change_patient.gif)

You may need to type more of the patient's name or code if you have more than 100 patients for the patient's name to show on the dropdown list.

### Select the Clinician

Once your Prescription has been created, you can select a clinician from the `Clinician` dropdown list.
![Select Clinician](/docs/dispensary/images/prescription_clinician.gif)

### View or edit the Prescription Information Panel

The Information Panel allows you to see or edit information about the Prescription. It is divided into multiple sections:

- Additional Info
- Invoice Details

We are planning to add more sections in the future as Open mSupply grows.

#### How to open and close the Information Panel?

If you are using a large screen, the information panel will be automatically opened for you. However, on an average sized screen, the information panel will be closed by default.

To open the Information Panel, you can tap on the `More` button, located in the top right corner of the Prescription view.

You can close by tapping on the `X Close` button, on the top right corner of the information panel.

![Open and close the Information Panel](/docs/dispensary/images/prescription_infopanel_openclose.gif)

#### Additional Info

In the **Additional Info** section, you can:

- See who created the Prescription (name of the user)
- View and edit the Prescription color. To edit the color, tap on the coloured circle and select a color from the pop-up
- Write or edit a comment

#### Prescription Details

In this section, you will see by default the total selling price of the items listed in the Prescription.

### Prescription Status Sequence

The status sequence is located at the bottom left corner of the Prescription screen.

Passed statuses are hightlighted in blue, next statuses appear in grey.

<figure>
<center><img src="/docs/dispensary/images/prescription_statussequence1.png" style="width:40%"></center>
<figcaption align = "center">Status Sequence: current status is <code>NEW</code>.</figcaption>
</figure>

<figure>
<center><img src="/docs/dispensary/images/prescription_statussequence2.png" alt="Trulli" style="width:40%"></center>
<figcaption align = "center">Status Sequence: current status is </i><code>VERIFIED</code>.</figcaption>
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

When managing an Prescription, you can only confirm the Picked and Verified statuses.

| Confirm...           | Current Status | Next Status |
| :------------------- | :------------- | :---------- |
| **Confirm Picked**   | New            | Picked      |
| **Confirm Verified** | Picked         | Verified    |

You don't have to update a prescription to the next status in the sequence. You can choose to skip `Confirm Verified` and go directly to `Confirm Shipped` for example.

As demonstrated below, tap on the down arrow of the `Confirm` button and select the status you want the prescription to be updated to.

![Skip Status](/docs/dispensary/images/prescription_confirmbutton_skipstatus.gif)

## Adding lines to a Prescription

Tap on the `Add Item` button (top right corner).

A new `Add Item` window opens.

![Add Item button](/docs/dispensary/images/add_item_button.png)

### Select an Item

In the `Add Item` window, you can look up an item by:

- Reading through the list of available items
- or by typing some or all of the item name
- or by typing some or all of an item code

Once your item is highlighted, tap on the name or press `Enter`.

![Alt Text](/docs/dispensary/images/prescription_additem.gif)

Once the item is selected, you can see the following information:

#### Headers

- Item code and name (eg. _030063 Acetylsalicylic Acid 100mg tabs_)
- the available stock quantity for this item (eg. _20,976 units_)
- the item's unit (eg. _Tab_)
- **Note**: The medicine's instruction for use.

<div class="imagetitle">
<b>Example:</b> For the item *030063 Acetylsalicylic Acid 100mg tabs*, there are 20,976 tabs available. 
</div>

![add item headers](/docs/dispensary/images/additem_headers.png)

#### Issue [Quantity] of units in packs of [Pack Size]

In the `Issue` field, you can enter the quantity that you want to issue to your patient.

By default, you are invited to issue a quantity of **units**. However, you have the possibility to issue a quantity of packs instead by changing the value in the second dropdown (`Pack Size`).

Default value is `Any` when you are issuing units.

![Prescription Issue quantity](/docs/dispensary/images/prescription_issuequantityunits.png)

#### List of available batches:

This is a list of batch numbers that you have in store for this item:

| Column                | Description                                                                                                   |
| :-------------------- | :------------------------------------------------------------------------------------------------------------ |
| **Batch**             | Batch number. It is a designation given to products made in the same manufacturing run.                       |
| **Expiry**            | Expiry date of the batch (format: MM/YYYY)                                                                    |
| **Location**          | This is the name of the location where the item is stored if your inventory is managed with storage locations |
| **On Hold**           | Indicates whether a batch is on hold or not. You cannot issue a batch that is on hold.                        |
| **In Store (packs)**  | Total number of packs in your store                                                                           |
| **Available (packs)** | Number of packs available (not already allocated to other invoices)                                           |
| **Pack Size**         | Quantity of units per pack                                                                                    |
| **[Unit] Qty Issued** | Total quantity of units to be issued                                                                          |
| **Pack Qty Issued**   | Number of packs to be issued                                                                                  |

![List of available batch numbers](/docs/dispensary/images/prescription_additem_listofbatches.png)

The batches which are available for selection are shown first and batches which are not (on hold or no stock available) are shown below and in a grey font.

### Issue a quantity of units

By default, you are invited to issue a quantity of **units**, regardless of the pack size (number of units in a pack).

<div class="imagetitle">
In the below example, we are issuing 1000 units of the item. All 1000 units will be taken from the same batch (third row). The first two batches was not selected because they are expired. 
</div>

![additem!](/docs/dispensary/images/prescription_additem_issueunits.png)

<div class="imagetitle">
In this other example, we are issuing 82 units. System selects two batches with different pack sizes. 
</div>

![additem!](/docs/dispensary/images/prescription_additem_issueunitstwobatches.png)

#### Warnings

You may see one or more warning messages on this screen:

![placeholder warning!](/docs/distribution/images/os_warning_placeholder.png)

The warning is shown to let you know that not enough stock is available to fulfil your request. A placeholder quantity is added automatically so that you can keep track of the amount requested, while adding more stock (for example by using an Internal Order or Inbound Shipment).

This image also shows the warning which lets you know that some stock lines are expired; this may be why the system did not auto-allocate particular stock lines.
However you can still manually choose those lines and issue the expired stock!

![pack sizes warning!](/docs/distribution/images/os_warning_pack_sizes.png)

This warning tells you that because of the available pack sizes, the system has rounded up the quantity requested. In this example, there is no pack size that is less than `12`. There are packs of `20` available though, so when 12 tablets are requested, the system has rounded up the request to `2` packs of `20`.

![pack sizes warning!](/docs/distribution/images/os_warning_no_quantity.png)

If you add an item, forget to enter a quantity to issue, and click `OK` you will see this warning message. It is informing you that there is no issue quantity; from here you can click `OK` again to confirm that you intended to enter `0`, in which case the window will close and a placeholder row will be added to the invoice. You can edit the row later and add a quantity. If you forget to add a quantity however, and confirm the invoice as allocated, this row will be removed!

### Issue a quantity of packs

You can decide to issue a quantity of **packs**. To do this, you can change the value in the `Pack Size` dropdown.

<div class="imagetitle">
Let's imagine that you only want to dispense in a pack size of 100 units. You can change the dropdown value from `Any` to `100`. 
</div>

![Alt Text](/docs/dispensary/images/prescription_additem_switchtopack.gif)

You are now offered to issue a number of packs of 10 units. Only batch number(s) with a pack size of 10 units can be automatically issued.

<div class="note">
If you had previously entered a quantity of units and you switch to a quantity of packs, the quantity of units will automatically be converted into the correct quantity of packs.  
</div>

When a pack size is selected, stock lines which have a different pack size from the one selected are not available for selection. As such, those rows are listed lower down in the table and are shown in a grey font, in the same way as other unavailable rows.

### Manual Allocation

Regardless if you chose to issue a quantity of units or packs, you can always manually change the quantity at the batch number level directly before pressing on OK.

You simply have to enter or edit the quantity in the `Packs Qty Issued` column.

The values in the **Total** row will be automatically updated with the new quantity.

<div class="note">
 <b></b> When allocating quantities at the batch number level, the quantity you enter is always a quantity of packs. 
</div>

<figure>
<img src="/docs/dispensary/images/prescription_additem_manualallocation.gif" style="width:100%">
<figcaption align = "center"><i>Manual allocation at the batch number level.</i></figcaption>
</figure>

### Confirm Item and Quantity

When you are happy with the quantity, you can either press on:

- the `OK` button. You are redirected to the Prescription view and your item has been added to the list
- the `OK & Next` button to add another item right away
- the `Cancel` button if you do not want to add the item to the Prescription any more

## Editing a Prescription Line

To edit a prescription line, tap on it. You will be presented with the `Edit Item` window, which is identical to the `Add Item` window, except that the item is already chosen.

### Edit a Prescription Line

<div class="note">
 <b></b> You can edit a prescription line if the prescription has a status lower than <code>Verified</code>. 
</div>

1. Open the Prescription you want to edit.
2. Tap on the line you want to edit. An identical window to `Add Item` appears. At this stage:

   - Edit the main `Issue` field
   - or change the number of packs value at the batch number level

<div class="note">
 <b></b> When editing a prescription line, you cannot change the item. You would need to delete the prescription line and create a new one. 
</div>

### Delete a Prescription line

1. Open the Prescription you want to edit.
2. Select the line(s) you want to delete by checking the box(es) on the right of the list.
3. Go to the `Actions` dropdown menu (top right corner, above the list)
4. Select the action `Delete selected lines`

![Alt Text](/docs/distribution/images/os_actions_deleteselectedlines.png)

<div class="imagetitle">
In the below example, we are deleting <i>item 030063 - Acetylsalicylic Acid 100mg tabs</i>
</div>

![Alt Text](/docs/dispensary/images/prescription_deleteselectedlines.gif)

<div class="tip">
You can delete multiple lines at once. Be sure to review what is selected before performing the Delete action. 
</div>

## Backdating A Prescription

A prescription can be backdated by changing the Date field in the header.

![Prescription Date UI Control](/docs/dispensary/images/prescription_backdate_highlight.png)

<div class="tip">
It is recommended to backdate the prescription before adding any items to the prescription, that way you'll see the stock available at that date.
</div>

#### Stock Levels

When adding items to a backdated prescription, the available stock will be adjusted to what was available at that date (and hasn't been used since).
The other fields still show the current state of the system.

![Backdating a Prescription, stock levels](/docs/dispensary/images/prescription_backdate_stock_levels.png)

<div class="tip">
If some stock you are expecting to see doesn't show as available, use the <a href="/docs/inventory/stock-view/#ledger-tab">Ledger</a> in Inventory -> Stock to see when that stock was received.
</div>

#### Errors when Backdating a Prescription

If you have already assigned stock to a prescription, and then you change the date of the prescription to a date before the stock was received, you may see an error message saying
`Stock not available on specified date`.

![Backdating a Prescription Error](/docs/dispensary/images/prescription_backdate_stock_error.png)

<div class="tip">
This means some of the stock you've selected was introduced after the date of the prescription. The best way to resolve this is to delete all lines from the prescription, change the date, then add the items again. You might have just selected the wrong date, so check that first!
</div>

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

## Viewing Prescription

Batches are automatically grouped by item when viewing a specific prescription. Use the expand in the table header to expand
all grouped rows.

![Group by Item](/docs/dispensary/images/prescription_group_by_item.gif)

If you do not have enough room on your screen, or simply aren't interested in some of the columns shown, you have the option of hiding which columns are shown in this view.

Click on the `Show / hide columns` button which is at the top right of the table. This gives a list of the columns available - you can check the columns you want to see. The options chosen are stored for the current browser, so next time you view a Prescription, you will see the selected columns only. If you have chosen which columns to show, then the button is shown in blue to remind you that there are more columns available.

![Hide columns](/docs/dispensary/images/prescription_show_hide_columns.gif)
