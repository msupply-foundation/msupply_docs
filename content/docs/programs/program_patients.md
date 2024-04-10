+++
title = "Program Patients"
description = "Introduction to the HIV patient management module"
date = 2023-01-27T00:00:00+00:00
updated = 2023-01-27T00:00:00+00:00
draft = false
weight = 61
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "View and Manage Program Patients"
toc = true
top = false
+++

You can manage Patients by programs in Open mSupply. This involves some special settings. Please see [Patients](/docs/dispensary/patients) for more information on how to view and create patients.

To use Program Patients, ensure that your store is set to `Dispensary` mode (see the [virtual stores](https://docs.msupply.org.nz/other_stuff:virtual_stores#store_type) documentation for how to do this).

You will also need to enable the store preference for `Open mSupply: Uses program module`.
This preference is compatible with Open mSupply `v1.2.0+` and mSupply `v7-07-00-beta9+`.

![Store preference](/docs/programs/images/program_pref.png)

You will also need to enable the user permissions shown below on the central server:

<div class="note">This is an example of the permissions required for a user to view and manage program specific features. The permissions required may vary depending on your configurations.</div>

![User permissions](/docs/programs/images/program_user_permissions.png)


### Patients List

A new column named `Program Enrolments` will be added to the patient list to show the programs that the patient is enrolled in if the patient programs module has been enabled. 

![Program Enrolments](/docs/programs/images/patient_enrolment_column.png)

### Viewing a Patient

There are four tabs on the patient detail page:

1. **Patient Details**: This tab contains the patient details.

![Patient detail](/docs/programs/images/patient_detail_view.gif)

The patient detail page will look very different from the standard patient detail page. This view is highly customisable and can be tailored to specific needs. Please contact us if you would like to customise this view.

2. **Programs**: This tab contains the programs that the patient is enrolled in.

![Programs](/docs/programs/images/patient_program_tab.png)

Clicking on a program will take you to the patient's program enrolment details. See more information here.

This program tab will display 5 columns: 

| Column      | Description                         |
| :---------- | :---------------------------------- |
| **Program**    | The name of the program                |
| **Enrolment Patient ID**  | The patient's program ID  |
| **Additional Info**  | Displays program specific information. E.g. _LTFU_ lost to follow up |
| **Program Status**  | The status of the program  |
| **Enrolment Date** | The date the patient was enrolled in the program |

3. **Encounters**: This tab contains the encounters that the patient has had.

![Encounters](/docs/programs/images/patient_encounter_tab.png)

Clicking on an encounter will take you to the encounter details. See more information here.

This encounters tab will display 6 columns:

| Column      | Description                         |
| :---------- | :---------------------------------- |
| **Type**    | The encounter type                |
| **Program** | The program the encounter is associated with  |
| **Date**  | The date of the encounter appointment |
| **Start** | The start time of the encounter appointment  |
| **End** | The end time of the encounter appointment |
| **Additional Info** | Displays additional information about the encounter. E.g. _Encounter Scheduled_ means that the appointment for this encounter has been scheduled. |


4. **Contact Tracing**: This tab contains the contact tracing information for the patient.

![Contact Tracing](/docs/programs/images/patient_contact_tracing_tab.png)

Clicking on a contact will take you to the contact details. See more information here.

This contact tracing tab will display 7 columns:

| Column      | Description                         |
| :---------- | :---------------------------------- |
| **Program**    | The name of the program this contact is associated with               |
| **Date Created**  | The date the contact was created  |
| **First name**  | First name of the contact  |
| **Last name**  | Last name of the contact  |
| **Gender** | Gender of the contact | 
| **Relationship** | The relationship of the contact to the patient  |
| **Age** | The age of the contact  |