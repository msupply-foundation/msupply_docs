+++
title = "Patient Programs"
description = "Introduction to Patient Programs"
date = 2023-01-27T00:00:00+00:00
updated = 2023-01-27T00:00:00+00:00
draft = false
weight = 200
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "View and Manage Patient Programs"
toc = true
top = false
+++

### What is a Patient Program?

A **Patient Program** is a structured healthcare plan designed to manage and track a patient's treatment and progress. It includes a series of interactions, treatments, or medications aimed at addressing specific health conditions. 

Patient programs are used to provide coordinated care, monitor progress, and ensure timely interventions, improving overall health outcomes. They help healthcare providers track patient data, prescriptions, and treatment, ensuring comprehensive and efficient care.

## Managing Patients by Programs

You can manage Patients by programs in Open mSupply. This involves some special settings. Please see [Patients](/docs/21_dispensary/21-1-patients/) for more information on how to view and create patients.

To use Patient Programs, ensure that your store is set to `Dispensary` mode (see the [virtual stores](https://docs.msupply.org.nz/other_stuff:virtual_stores#store_type) documentation for how to do this).

You will also need to enable the store preference for `Open mSupply: Uses program module`.
This preference is compatible with Open mSupply `v1.2.0+` and mSupply `v7-07-00-beta9+`.

![Store preference](/docs/programs/images/program_pref.png)

You will also need to enable the user permissions shown below on the central server:

<div class="note">This is an example of the permissions required for a user to view and manage program specific features. The permissions required may vary depending on your configurations.</div>

![User permissions](/docs/programs/images/program_user_permissions.png)

<div class="note">The Patient Programs module is highly customisable and may look different depending on your configurations. Please contact your administrator for customisations.</div>

### Patients List

A new column named `Program Enrolments` will be added to the patient list to show the programs that the patient is enrolled in if the patient programs module has been enabled.

![Program Enrolments](/docs/programs/images/patient_enrolment_column.png)

#### Enrolling a Patient in a Program

To enrol a patient in a program, click on the `Add Program` button in the top right corner of the screen or click the down arrow next to the button and select `Add Program` if the button does not say `Add Program`. A new window will appear for you to select the program you want to enrol the patient in. Programs that the patient is already enrolled in will be greyed out.

![Add Program](/docs/programs/images/add_program_button.png)

![Add Program](/docs/programs/images/select_program_enrolment.png)

After selecting the program, another window will appear for you to enter program specific information.

<div class="imagetitle">
In this example, we are enrolling the patient into the HIV Care and Treatment Program.
</div>

![Program Enrolment](/docs/programs/images/hiv_enrolment_form.gif)


#### Viewing a Patient

There are five tabs on the patient detail page:

1. **Patient Details**: This tab contains the patient details.

The patient detail page will look very different from the standard patient detail page. This view is highly customisable and can be tailored to specific needs. Please contact your administrator if you would like to customise this view.

![Patient detail](/docs/programs/images/patient_detail_view.gif)

There is also a `History` button on the bottom left corner of the patient detail page. Clicking on this button will show you a simple history of changes made to the patient record.

![Patient History](/docs/programs/images/patient_history.png)

2. **Programs**: This tab contains the programs that the patient is enrolled in.

Clicking on a program will take you to the patient's program enrolment details. See [Program Enrolment](/docs/22_programs/22-1-whatisprograms/#enrolling-a-patient-in-a-program) for more information.

This program tab will display 5 columns:

| Column                   | Description                                                          |
| :----------------------- | :------------------------------------------------------------------- |
| **Program**              | The name of the program                                              |
| **Enrolment Patient ID** | The patient's program ID                                             |
| **Additional Info**      | Displays program specific information. E.g. _LTFU_ lost to follow up |
| **Program Status**       | The status of the program                                            |
| **Enrolment Date**       | The date the patient was enrolled in the program                     |

![Programs](/docs/programs/images/patient_program_tab.png)

3. **Encounters**: This tab contains the encounters that the patient has had.

Clicking on an encounter will take you to the encounter details. See [Encounter](/docs/22_programs/22-2-encounters/) for more information.

This encounters tab will display 6 columns:

| Column              | Description                                                                                                                                       |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Type**            | The encounter type                                                                                                                                |
| **Program**         | The program the encounter is associated with                                                                                                      |
| **Date**            | The date of the encounter appointment                                                                                                             |
| **Start**           | The start time of the encounter appointment                                                                                                       |
| **End**             | The end time of the encounter appointment                                                                                                         |
| **Additional Info** | Displays additional information about the encounter. E.g. _Encounter Scheduled_ means that the appointment for this encounter has been scheduled. |

![Encounters](/docs/programs/images/patient_encounter_tab.png)

4. **Contact Tracing**: This tab contains the contact tracing information for the patient.

Clicking on a contact will take you to the contact details. See [Contact Tracing](/docs/22_programs/22-3-contacttracing/) for more information.

This contact tracing tab will display 7 columns:

| Column           | Description                                             |
| :--------------- | :------------------------------------------------------ |
| **Program**      | The name of the program this contact is associated with |
| **Date Created** | The date the contact was created                        |
| **First name**   | First name of the contact                               |
| **Last name**    | Last name of the contact                                |
| **Gender**       | Gender of the contact                                   |
| **Relationship** | The relationship of the contact to the patient          |
| **Age**          | The age of the contact                                  |

![Contact Tracing](/docs/programs/images/patient_contact_tracing_tab.png)

5. **Vaccinations**: This tab contains the list of Immunization Programs that the patient is enrolled in.

Clicking on an Immunization Program will take you to the patient's Vaccination Card for that program. See [Vaccination Cards](/docs/23_programmodules/23-2-vaccinations/) for more information.

This Vaccinations tab will display 4 columns:

| Column                   | Description                                      |
| :----------------------- | :----------------------------------------------- |
| **Program**              | The name of the program                          |
| **Enrolment Patient ID** | The patient's program ID                         |
| **Program Status**       | The status of the program                        |
| **Enrolment Date**       | The date the patient was enrolled in the program |

![Vaccinations Tab](/docs/programs/images/patient_vaccinations_tab.png)

