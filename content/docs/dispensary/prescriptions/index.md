+++
title = "Prescriptions"
description = "Recording what a patient should receive, before it is dispensed."
date = 2026-09-14
updated = 2026-09-14T00:00:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

A **Prescription** is the prescriber's record of what a patient should receive: the patient, the items, the quantities and the directions. It is written in the clinic, before and separately from dispensing.

Once the prescriber marks a prescription `Ready to dispense`, Open mSupply creates a dispensing record for the pharmacy. The pharmacy allocates stock and verifies that record in the usual way, and the prescription is automatically marked `Dispensed`.

<div class="note">
<b>Naming.</b> From Open mSupply v3.2 the <code>Dispensary</code> menu has two related entries:
<ul>
<li><code>Prescriptions</code> - the prescriber's record, described on this page
<li><code>Dispensing</code> - the pharmacy's record of stock issued to a patient. In earlier versions this screen was called <code>Prescriptions</code>; it is described on the <a href="/docs/dispensary/dispensing/">Dispensing</a> page.</li>
</ul>
</div>

## Why use Prescriptions?

Prescriptions allow the separation of deciding what a patient should receive and the handling of stock:

- **Prescribers** (doctors or clinicians) record what should be given to treat the patient
- **Dispensers** receive a ready-made dispensing record, with the prescribed quantities and directions already filled in, and only need to allocate stock, pick and verify

A prescription never changes stock levels itself. Stock is only affected when the pharmacy processes the dispensing record it generates.

A prescription always belongs to the store it was written in. It is not sent to another store or site.

## Permissions

<div class="note">In addition to the permission below, you should also grant the user `View patients` permission so that they can search for patients
</div>

Prescriptions has its own permission, separate from the dispensing permissions:

| Permission              | What it allows                                                                                              |
| :---------------------- | :---------------------------------------------------------------------------------------------------------- |
| View/edit prescriptions | See the `Prescriptions` menu entry, list and detail screens, and the `Prescriptions` panel on the home page |

The permission is granted in mSupply, on the `omSupply Permissions` tab: **View/edit prescriptions**. See the [Permissions](/docs/settings/permissions/) page for the full list of available permissions.

Some things to be aware of:

- Permissions are per store. A user may have `Prescriptions` access in one store and not another.
- Prescribing and dispensing are separate jobs. A user with only the `View/edit prescriptions` permission sees the `Prescriptions` entry and not much else. A user with dispensing permissions but not this one does not see `Prescriptions` at all.

The store must also be in `Dispensary` mode (see the [virtual stores](https://docs.msupply.org.nz/other_stuff:virtual_stores#store_type) documentation), as for the rest of the `Dispensary` section. No store preference or other setting needs to be enabled.

## Viewing Prescriptions

Choose `Dispensary` > `Prescriptions` in the navigation panel.

You will be presented with a list of prescriptions for your store, newest first.

### Prescription List

| Column                | Description                                                                                                 |
| :-------------------- | :---------------------------------------------------------------------------------------------------------- |
| **Number**            | Sequential number of the prescription within the store                                                      |
| **Patient**           | Name of the patient                                                                                         |
| **Status**            | `New`, `Ready to dispense` or `Dispensed` - see [Status](#prescription-status)                              |
| **Prescription date** | The date the prescription was written                                                                       |
| **Entered by**        | The user who created the prescription                                                                       |
| **Comment**           | An icon is shown if the prescription has a comment; hover over it to read the comment                       |
| **Created**           | Date and time the record was created. Hidden by default - use `Show / hide columns` to display it           |
| _Custom fields_       | One column for each visible custom field configured for prescriptions - see [Custom fields](#custom-fields) |

The list is paged in the same way as other lists in Open mSupply, with the number of rows shown and page controls at the bottom of the screen.

### Searching for a prescription

By default you can filter by `Patient` name and by `Prescription date` range. Use the filter menu to add filters for:

- `Status`
- `Dispensed date` range
- `Entered by`
- any visible custom field

### Exporting Prescriptions

Click the `Export` button at the top right of the list to download the list as a `.csv` file, or use the dropdown arrow beside it to download an Excel file instead. The export includes all prescriptions matching the current filters, not just the current page.

### Deleting Prescriptions

1. Tick the box at the left of one or more rows in the list.
2. Click `Delete` in the `Actions` footer which appears at the bottom of the screen.
3. Confirm.

<div class="note">
Only prescriptions with a status of <code>New</code> can be deleted. If any of the selected prescriptions has already been marked <code>Ready to dispense</code>, nothing is deleted and you will see the message <i>You cannot delete one or more of the selected items</i>. Deselect those prescriptions and try again.
</div>

You can also delete a single `New` prescription from the `Actions` section of its side panel.

## Creating a Prescription

1. Go to `Dispensary` > `Prescriptions`.
2. Click the `New prescription` button in the top right corner. The same button is available on the [home page](#dashboard-panel).
3. Fill in the `New prescription` window:

| Field         | Required | Description                                                                                                                                                                                                                                  |
| :------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Patient**   | Yes      | Start typing a name or code and select the patient from the list. If no match is found you can create a new patient here, exactly as when creating a [dispensing record](/docs/dispensary/dispensing/#select-a-patient)                      |
| **Date**      | No       | The prescription date. Defaults to today and cannot be in the future                                                                                                                                                                         |
| **Clinician** | No       | The clinician the prescription is written on behalf of. If your user name matches a clinician code, that clinician is filled in for you; you can change or clear it. If no match is found you can create a clinician from the search results |

4. Click `Create`.

The new prescription opens with a status of `New`. The patient's name is shown at the top of the screen.

<div class="tip">
Don't confuse <b>Entered by</b> and <b>Clinician</b>. <i>Entered by</i> is always the user who is logged in and created the record. <i>Clinician</i> is an optional, separately chosen person to allow a different Open mSupply user to enter prescriptions on behalf of others.
</div>

### Header fields

The header of a prescription shows and, while the status is `New`, lets you edit:

- **Patient** - change the patient by searching for another one
- **Date of birth** - read-only, taken from the patient record
- **Clinician**
- **Date** - the prescription date
- **Diagnosis**
- Any custom fields marked as prominent - see [Custom fields](#custom-fields)

Patient details are always read live from the patient record, so a change to the patient's name or date of birth in `Patients` is reflected here immediately.

### Tabs

- **Details** - the list of prescribed items
- **Custom fields** - any visible custom fields that have not been promoted to the header
- **Log** - the activity log for this prescription: `Created`, `Updated` (with the fields changed), `Sent to dispensary`, `Dispensed` and `Deleted`

### Side panel

Click `More` in the top right to open the side panel, which contains:

- **Additional info** - `Entered by`, `Created` date and a `Comment` you can edit while the prescription is `New`
- **Patient details**
- **Related documents** - once the prescription has been marked `Ready to dispense`, a `Dispensation` link showing the number of the dispensing record. Click it to open that record in `Dispensing`
- **Actions** - `Delete`, while the prescription is `New`

## Adding items to a Prescription

Items are added from the `Details` tab while the prescription is `New`.

1. Click `Add item` in the top right corner.
2. Search for and select the item. Any item visible in your store can be chosen. The available stock for the item is shown as `Available: <quantity> <units>` for information only; you can still prescribe an item with no stock.
3. Enter the `Quantity`. This is always in **units** (for example tablets), not packs.
4. Enter the directions in one of three ways, as when dispensing:
   - Type an abbreviation in the `Abbreviation` field and it will be expanded into the `Directions` field (see the [mSupply abbreviations documentation](https://docs.msupply.org.nz/dispensing:abbreviations))
   - Select one of the item's default directions from the `Item default directions` dropdown (see the [mSupply item directions documentation](https://docs.msupply.org.nz/items:item_basics:tab_dispensing?#default_directions)). If none are configured for the item the dropdown reads `No default directions available`
   - Type or edit the text in the `Directions` field
5. Click `Save`.

To edit a line, click on it in the list. To delete lines, tick them and click `Delete` in the `Actions` footer.

Once the prescription has been marked `Ready to dispense`, clicking a line opens it read-only.

## Prescription Status

The status of a prescription is shown at the bottom left of the screen, in the same way as other records in Open mSupply.

| Status                | Description                                                                                                                                  |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| **New**               | The prescription is being written. Everything can be edited, and the prescription can be deleted.                                            |
| **Ready to dispense** | The prescription has been handed over to the pharmacy. It is locked, and a dispensing record has been created in `Dispensing`.               |
| **Dispensed**         | The pharmacy has verified the dispensing record. This is set automatically and records the date and time the dispensing record was verified. |

Statuses only move forward. There is no cancellation of a prescription:

- A mistaken `New` prescription should be deleted.
- A mistake noticed after the prescription is `Ready to dispense` is handled on the dispensing record, by editing it before it is verified or cancelling it after (see [Cancelling a Prescription](/docs/dispensary/dispensing/#cancelling-a-prescription)).

## Sending a Prescription to the pharmacy

When all items have been added, click `Ready to dispense` at the bottom right of the screen. You will be asked to confirm:

> This locks the prescription and creates a dispensing record for the pharmacy to fill. Continue?

Click `OK` to continue. Nothing else needs to be entered.

<div class="note">
A prescription must have at least one item before it can be sent. If it has none you will see <i>Add at least one item before sending this prescription to the dispensary</i>.
</div>

When you confirm:

- The prescription status changes to `Ready to dispense` and the record is locked. The log records `Sent to dispensary`.
- A new dispensing record is created in `Dispensary` > `Dispensing`, in the same store, with status `New`. It carries the patient, clinician, diagnosis and prescription date from the prescription.
- Each prescribed item becomes a line on the dispensing record with the **prescribed quantity** and **directions** filled in, but with no stock allocated yet.
- The `Related documents` section of the side panel shows a link to the new dispensing record.

## What the dispenser sees

The dispenser opens the record in `Dispensary` > `Dispensing`. It works like any other dispensing record (see [Dispensing](/docs/dispensary/dispensing/)), with a few differences because it came from a prescription:

- The **Patient**, **Clinician** and **Diagnosis** are read-only. They are the prescriber's entries
- The **Prescribed quantity** on each line is read-only, and is used as the target when stock is automatically allocated. The dispenser chooses which stock to issue and can adjust the issued quantity as usual.
- The side panel has a `Prescription request` link back to the source prescription (shown only to users with the Prescription request query permission)
- The record **cannot be deleted**. If it is not wanted, verify it and then cancel it. Attempting to delete it shows: _This dispensing record came from a prescription and cannot be deleted. Cancel it once it has been verified._

When the dispenser confirms the record as `Verified`, the original prescription is automatically updated to `Dispensed`, with the `Dispensed` date set to the time of verification.

## Custom fields

Prescriptions support [custom fields](/docs/manage/custom-fields/) under their own `Prescription requests` record type. Unlike other record types, four fields are provided by default on every system with nothing to configure in mSupply:

| Field            | Type                                                                                               |
| :--------------- | :------------------------------------------------------------------------------------------------- |
| **Weight**       | Number                                                                                             |
| **Patient unit** | Text                                                                                               |
| **Category**     | Multiple choice: pregnant, lactating, under-5, disabled, destitute, other. More than one can apply |
| **Occupation**   | Text                                                                                               |

All four are set to `Prominent` by default so that they appear together in the header of the prescription. On the Open mSupply central server, `Manage` > `Custom fields` > `Prescription requests` lets you hide any of them or move them to the `Custom fields` tab. Visible custom fields also appear as columns and filters on the prescriptions list.

Custom field values stay on the prescription. They are not copied to the dispensing record.

## Dashboard panel

Users with the Prescription request query permission, in a dispensary store, see a `Prescriptions` panel on the [home page](/docs/getting-started/home/), with a `Prescription request` section showing:

- **Ready to dispense** - the number of prescriptions waiting for the pharmacy. Click it to open the list filtered to that status.
- **Dispensed this week** - the number of prescriptions dispensed since Monday of the current week. Click it to open the list filtered to that dispensed date range.

Clicking the `Prescription request` heading opens the full list. The `New prescription` button at the bottom of the panel opens the same `New prescription` window as the list.

## Good to know

- **No stock is reserved** when a prescription is written or marked `Ready to dispense`. Stock is only allocated when the pharmacy works on the dispensing record
- **Programs are not supported** on prescriptions. The generated dispensing record has no program either.
- Prescriptions are **not synchronised to mSupply**. They stay in the store where they were written. The dispensing records they generate are synchronised in the usual way.
