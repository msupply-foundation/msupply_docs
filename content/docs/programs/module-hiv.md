+++
title = "Patients"
description = "Introduction to the HIV patient management module"
date = 2023-01-27T00:00:00+00:00
updated = 2023-01-27T00:00:00+00:00
draft = false
weight = 61
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Introduction to the program patient management module"
toc = true
top = false
+++

The Open mSupply patient program allows users to collect general as well as program specific patient information.
A patient can be enrolled into multiple patient programs such as an HIV program, a TB program or an immunisation program.

For every program enrolment there can be multiple patient encounters, e.g. doctor visits.

All data collected in the patient program module is stored in documents. For example, patient data is stored in a patient document, program enrolment data is stored in program enrolment documents and encounter data is stored in an encounter document.

All patient program related functionality can be found in the “Dispensary” menu item.

![dispensary menu](/docs/programs/images/dispensary_menu.png)

## Enabling the patient management module

To use the module, ensure that your store is set to `Dispensary` mode (see the [virtual stores](https://docs.msupply.org.nz/other_stuff:virtual_stores#store_type) documentation for how to do this).

You will also need to enable the store preference for `omSupply: Uses program module`

![Store preference](/docs/programs/images/store_preference.png)

## Patients
In order to use the program module, you'll first need to create and manage patients to dispense to.

### Patient Registration

To create a new patient file, click on 'dispensary' and then the 'patients' icon from the Dashboard:

![access patient](/docs/programs/images/access_patient.png)

This will bring up the 'Patient' page. To create a new patient click the “New Patient” button in the right top corner.

![new patient](/docs/programs/images/new_patient_button.png)

The patient creation is split into three steps:

1. Entering of basic patient information such as name or date of birth
2. Search for existing similar patients to avoid duplicated patient entries
3. Entering full patient information and finalising the patient

After clicking the `New Patient` button, you'll be shown a dialog window. 

![patient details](/docs/programs/images/patient_details.png)

Enter in some of the patient details and click `OK & Next`` to bring up all matching patients, such as in the example below:

![matching patients](/docs/programs/images/matching_patients.png)

If one of the returned patients looks to have the correct details, simply click on that line and you'll be taken to the patient details. If none of them look correct, or if no results are returned, you'll want to create a new patient record.

Clicking the `Create` button will create the new patient record, and you'll see a new screen, showing the patient details:

![create patient](/docs/programs/images/create_patient.png)


### Patient List

Navigating to the `Dispensary` → `Patients` menu item will show a list of existing patients.

![patient list](/docs/programs/images/patient_list.png)

### Searching for a Patient 

In the list view, search bars are above the patient list that can be used to narrow and specify the search. You can search by both first and last name as well as by ID. This can be useful to quickly find patients with common names or if there is a large number of existing patients. 

![patient search](/docs/programs/images/patient_search.png)

### Patient Details View

Selecting a patient from the patient list will open the patient details view.

![patient details view](/docs/programs/images/patient_details_view.png)

The information recorded here is customisable for a specific installation of open mSupply. While there's a base set of data recorded, such as name and birth date, there is also a range of types of data which can be configured in addition to this. Your patient detail view will likely look slightly different to that shown above.

On the patient detail view there are three tabs:

1) Details: shows the general patient information 
2) Programs: shows a list of program enrolments for the selected patient
3) Encounters: shows a list of encounters for the selected patient

To view the list of programs which this patient is enrolled in, click the `Programs` tab.

![patient programs tab](/docs/programs/images/patient_programs_tab.png)

In this list you can click on a specific program to edit details of the program enrolment, as shown below:

![patient programs tab](/docs/programs/images/patient_program_modal.png)

The `Encounters` tab behaves in the same way. Clicking on it will show a list of encounters which have been recorded for this patient:

![patient encounters tab](/docs/programs/images/patient_encounters_tab.png)

Clicking on an encounter in the list will then take you to the details page for that encounter. For example:

![patient encounter](/docs/programs/images/patient_encounter.png)


You can also view a simple history of changes made to the patient record, by clicking the `History` button which is on the bottom left of the screen:

![patient history button](/docs/programs/images/patient_history_button.png)

This will show a dialog window with a basic history view:

![patient history](/docs/programs/images/patient_history.png)

Click the down arrow beside an edit for more information.

## Programs

Patients can be enrolled in a program relevant to the intervention and the patient's illness.

Programs are customisable and specific to each context and country. Examples of programs are HIV Testing & Counselling, HIV Care & Treatment, TB & Malaria programs. For each program you can have defined any number of fields which are entered when registering patients, containing information in defined formats, such as dates, text, drop down lists and the like.

### Patient Program Enrolment

To enrol a patient into a program select the `Add Program` button in the top right corner of the patient details view.
![add program](/docs/programs/images/add_program_button.png)


This will open a dialog window with a list of available patient programs.
Programs which the patient is already enrolled in are greyed out and can’t be selected.

![program enrolment dialog](/docs/programs/images/program_enrolment_dialog.png)

To enrol a patient into a program select the desired program from the list.
This opens the program enrolment document where program specific information can be entered.

Note, the content of the program enrolment document is program specific and can be configured by the site administrator.

## Encounters

An 'Encounter' is the recorded visit of a patient, and their treatment, under a specific program.  

To view the list of encounters, navigate to the `Encounters` item under the `Dispensary` menu:

![encounters tab](/docs/programs/images/encounters_menu.png)

Clicking on this will bring up a list of encounters that have been recorded, and shows details about the encounter as you can see below:

![encounters list](/docs/programs/images/encounters_list.png)

### Patient Program Encounters

Once a patient is enrolled in a program, an encounter for this program can be created.

Like programs, encounters are highly customisable and are tailored to a specific situation. The encounter has some basic information, such as date & time of the encounter, status and clinician; and a range of fields of information, divided into sections. These can be as simple or complex as you like.

To create an encounter, select `Add Encounter` through the drop-down menu in the right top corner.

<div class="note">A patient must have to be enrolled in a program to input an encounter</div>

![add patient encounter](/docs/programs/images/add_encounter_button.png)

This will open a dialog window to create an encounter.

First, the type of encounter needs to be selected, i.e. which program enrolment the encounter is associated with.

Secondly, the encounter date must be selected. The encounter date can be in the past, e.g. for entering finished encounter, or in the future, e.g. to schedule an encounter (aka appointment).

![new encounter dialog](/docs/programs/images/new_encounter_dialog.png)

Once an encounter is created, the full encounter document will open to enter encounter details.

<div class="note">The content of the encounter document is program specific and can be configured by the system administrator</div>

Every encounter has an encounter header where common encounter details can be updated, e.g. the clinician who handles the encounter or the encounter status.

<div class="note">The list of clinicians is managed by the site administrator and must be updated on the mSupply central server</div>

An encounter can have three statuses:

- Pending (depending on the current date this could mean the encounter is scheduled, or the encounter has been missed)
- Visited
- Cancelled

![patient encounter status values](/docs/programs/images/encounter_statuses.png)

The `More` button in the right top of the encounter detail view opens a column with additional encounter information such as a summary of previous encounters and the option to add an encounter note.

![encounter detail panel](/docs/programs/images/encounter_detail_panel.png)

If you would like to view the patient details, when you are looking at an encounter, you can do this easily. Simply click on the patient name at the top of the encounter header, as shown:

![patient encounter breadcrumb link](/docs/programs/images/encounter_patient_breadcrumb.png)


## Export Patient List

The list of patients can be exported to a comma separated file. This will export the following patient details:

1) ID
2) National ID
3) First name
4) Last name
5) Date of Birth

This can be done by clicking on the `Export` button in the top right corner of the patient list view.

![export patients](/docs/programs/images/export_patients.png)



 


