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
lead = "View and Manage R&R Forms"
toc = true
top = false
+++

To use R&R Forms, ensure that you enable the store preference for `Open mSupply: Uses program module`.

![Store preference](/docs/programs/images/program_pref.png)

Report and Requisition (R&R) are used to manage t

## R&R Forms - List View

Go to `Programs` > `R&R Forms` to view the list of R&R Forms.

![R&R Navigation](/docs/programs/images/goto_rnr.png)

You can click the column headers to sort the list by that column.

![R&R List](/docs/programs/images/rnr_list.png)

Clicking on an R&R form will take you to the details page.

#### Add an R&R Form

To add an Encounter for the patient, click the `Add Encounter` button on the top right corner of the screen. Click on the down arrow next to the button and select `Add Encounter` if the button does not say `Add Encounter`.

A window will open for you to select the encounter (this selection will vary depending on what programs the patient is enrolled in), visit date, clinician and add notes for this encounter.

<div class="imagetitle">In the below example, we are creating a HIV Care Encounter</div>

![Add Encounter](/docs/programs/images/add_encounter.gif)

![Encounter](/docs/programs/images/encounter_header.png)

- The side panel (opened by clicking `More` on the top right corner) will contain additional information such as previous encounters.

![Encounter](/docs/programs/images/encounter_side_panel.png)

<div class="imagetitle">In this example, we are viewing the HIV Care Encounter</div>

![Encounter](/docs/programs/images/encounter_detail_view.png)

### Viewing an R&R Form

The R&R form contains the following columns:

| Column                   | Description                                                          |
| :----------------------- | :------------------------------------------------------------------- |
| **Program**              | The name of the program                                              |
| **Enrolment Patient ID** | The patient's program ID                                             |
| **Additional Info**      | Displays program specific information. E.g. _LTFU_ lost to follow up |
| **Program Status**       | The status of the program                                            |
| **Enrolment Date**       | The date the patient was enrolled in the program                     |

![Programs](/docs/programs/images/patient_program_tab.png)

Once the R&R form is finalised, and Internal Order will automatically be created and sent to the selected supplier.
