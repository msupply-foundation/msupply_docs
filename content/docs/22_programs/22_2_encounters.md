+++
title = "Creating Encounters"
description = "Manage encounters (visits) with patients"
date = 2024-09-30T18:20:00+00:00
updated = 2024-09-30T18:20:00+00:00
draft = false
weight = 202
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

### What is an Encounter?

An **Encounter** refers to any interaction between a patient and a healthcare provider, typically during a visit to the clinic, hospital, or other healthcare facility. It can include consultations, assessments, treatments, or any other form of care provided to the patient. 

Encounters are essential for tracking the patient’s health progress, managing their treatment plans, and ensuring that they receive the necessary medications or services as part of their healthcare program.

In the context of **Patient Programs**, encounters help in documenting and monitoring the patient's journey, providing a record of the care provided, and supporting the ongoing management of their condition.

You will only see **Encounters** under the `Dispensary` menu if you have Patient Programs configured.

#### Viewing the Encounter List

Go to `Dispensary` > `Encounters` to view the list of encounters.

![Encounter Navigation](/docs/programs/images/dispensary_gotoencounters.png)

The list of encounters is divided into 8 columns:

| Column              | Description                                                                                                                                       |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Type**            | The encounter type                                                                                                                                |
| **Program**         | The program the encounter is associated with                                                                                                      |
| **Date**            | The date of the encounter appointment                                                                                                             |
| **Start**           | The start time of the encounter appointment                                                                                                       |
| **End**             | The end time of the encounter appointment                                                                                                         |
| **Patient**         | The patient the encounter is associated with                                                                                                      |
| **Additional Info** | Displays additional information about the encounter. E.g. _Encounter Scheduled_ means that the appointment for this encounter has been scheduled. |
| **Status**          | The status of the encounter                                                                                                                       |

Clicking on an encounter will take you to the encounter details.

![Encounter List](/docs/programs/images/encounter_list.png)

#### Add an Encounter

To add an Encounter for the patient, click the `Add Encounter` button on the top right corner of the screen. Click on the down arrow next to the button and select `Add Encounter` if the button does not say `Add Encounter`.

![Add Encounter](/docs/programs/images/add_encounter_button.gif)

A window will open for you to select the encounter (this selection will vary depending on what programs the patient is enrolled in), visit date, clinician and add notes for this encounter.

<div class="imagetitle">In the below example, we are creating a HIV Care Encounter</div>

![Add Encounter](/docs/programs/images/add_encounter.gif)

If the encounter is within the last hour, then you will be re-directed to the encounter page, otherwise, you will be re-directed to the encounter tab in the patient detail view.

Every encounter document will look differently, however there are some common features:

- The top of every encounter will contain common encounter details. Some of these details may be editable like _Clinician_ and _Visit Date and Time_.

An encounter can have three statuses:

- **Pending**: The encounter has been scheduled but not yet completed.
- **Visited**: The encounter has been completed.
- **Cancelled**: The encounter has been cancelled.

![Encounter](/docs/programs/images/encounter_header.png)

- The side panel (opened by clicking `More` on the top right corner) will contain additional information such as previous encounters.

![Encounter](/docs/programs/images/encounter_side_panel.png)

<div class="imagetitle">In this example, we are viewing the HIV Care Encounter</div>

![Encounter](/docs/programs/images/encounter_detail_view.png)

<div class="note">
  Immunization Program Encounters will have an additional <code>Vaccinations</code> tab, which displays the patient's Vaccination Card for that program. See <a href='#vaccination-encounters'>Vaccination Encounters</a> for more information.
</div>


