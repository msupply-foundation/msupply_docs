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
lead = "Introduction to the HIV patient management module"
toc = true
top = false
+++

Work in progress...

## Creating a New Patient 

The Open mSupply patient program allows users to collect general as well as program specific patient information.
A patient can be enrolled into multiple patient programs such as an HIV program, a TB program or an immunisation program.

For every program enrolment there can be multiple patient encounters, e.g. doctor visits.
All data collected in the patient program module is stored in documents. For example, patient data is stored in a patient document, program enrollment data is stored in program enrollment documents and encounter data is stored in an encounter document.
All patient program related functionality can be found in the “Dispensary” menu item.

![Stock: nav](/docs/programs/images/dispensary_menu.png)

## Patient Registration

When a patient is not already in the Open mSupply patient database the patient first need to be entered into the system.
To enter a patient, go to the “Patients” menu and click the “New Patient” button in the right top corner.

![Stock: nav](/docs/programs/images/new_patient1.png)

The patient creation is split into three steps:

1. Entering of basic patient information such as name or date of birth
2. Search for existing similar patients to avoid duplicated patient entries
3. Entering full patient information and finalising the patient

In the second step the user is provided with a list of similar patients.

If, for some reason, the entered patient is already in the system this patient entry can be selected from the list.

![Stock: nav](/docs/programs/images/Patient_creation.png)

## Patient List

Navigating to the “Dispensary” → “Patients” menu item will show a list of existing patients.
This list can be searched by patient first name, last name or patient ID.

![Stock: nav](/docs/programs/images/Patient_list.png)

## Patient Details View

Selecting a patient from the patient list will open the patient details view.

![Stock: nav](/docs/programs/images/Patient_details_view.png)

There are three tabs:

1) “Details” shows the general patient information 
2) “Programs” shows a list of program enrolments for the selected patient
3) “Encounters” shows a list of encounters for the selected patient

## Patient Program Enrolment

To enrol a patient into a program select the “Add Program” button in the top right corner of the patient details view.

![Stock: nav](/docs/programs/images/Patient_encounter1.png)

This will open a dialog with a list of available patient programs.
Already enrolled programs are greyed out and can’t be selected.

![Stock: nav](/docs/programs/images/Patient_encounter2.png)

To enrol a patient into a program select the desired program from the list.
This opens the program enrolment document where program specific information can be entered.

Note, the content of the program enrolment document is program specific and can be configured by the site administrator.

## Patient Program Encounters

Once a patient is enrolled in a program, an encounter for this program can be created.
To do so select “Add Encounter” through the drop-down menu in the right top corner.

![Stock: nav](/docs/programs/images/Patient_encounter3.png)

This will open a dialog to create an encounter.
First, the type of encounter needs to be selected, i.e. which program enrolment the encounter is associated with.
Secondly, the encounter date must be selected.
The encounter date can be in the past, e.g. for entering finished encounter, or in the future, e.g. to schedule an encounter (aka appointment).

![Stock: nav](/docs/programs/images/Patient_encounter4.png)

Once an encounter is created, the full encounter document will open to enter encounter details.

Note, The content of the encounter document is program specific and can be configured by the system administrator.

Every encounter has an encounter header where common encounter details can be updated, e.g. the clinician who handles the encounter or the encounter status.

Note, the list of clinicians is managed by the site administrator and must be updated on the mSupply central server.

An encounter can have three statuses:

    • “Pending” (depending on the current date this could mean the encounter is scheduled, or the encounter has been missed)
    • “Visited”
    • “Cancelled”

![Stock: nav](/docs/programs/images/Patient_encounter5.png)

The “More” button in the right top of the encounter detail view opens a column with additional encounter information such as a summary of previous encounters and the option to add an encounter note.

![Stock: nav](/docs/programs/images/Patient_encounter6.png)

To navigate back to the patient detail view select the patient name at the top of the encounter header.

![Stock: nav](/docs/programs/images/Patient_encounter7.png)

## Patient Registration

When a patient is not already in the Open mSupply patient database the patient first need to be entered into the system.
To enter a patient, go to the “Patients” menu and click the “New Patient” button in the right top corner.

mSupply can create a patient file that will hold all the necessary information to dispense medicine(s) to. To create a new patient file, click on 'dispensary' and then the 'patients' icon from the Dashboard:

![Stock: nav](/docs/programs/images/Access_Patient.png)


This will bring up the 'Patient' page. To input the information of a new patient into mSupply, click on the 'New Patient' button. 

![Stock: nav](/docs/programs/images/New_Patient.png)

Here you will find the option to search for an existing patient so you can dispense the necessary medicine to the correct patient, and the information will be documented and inform mSupply. 

![Stock: nav](/docs/programs/images/Patient_Details.png)

Click 'OK & Next' to bring up all matching criteria, such as in the example below:

![Stock: nav](/docs/programs/images/Matching_Patients.png)

To create a new patient, simply place all the relevent information of the patient in the 'New Patient' tab. Thsi will bring up the option to include the name, date of birth and national health ID among other details. 

![Stock: nav](/docs/programs/images/Patient_Details.png)

The information can now be used to find the patient file at a later date. After clicking on the 'OK & Next' you can then access the 'Create' option, that will transfer all the information previously input into a new tab that allows/requires more detail:

![Stock: nav](/docs/programs/images/Create_Patient.png)

## Searching for a Patient 

When in the 'Dispensary' menu a comprehensive list of exisitng patients will appear. 

![Stock: nav](/docs/programs/images/Search_Patient.png)

Clicking on a patient name will bring up the patient's details.

In the same 'Patient' menu, search bars are above the patient list that can be used to narrow and specify the search. You can search by both first and last name as well as by ID. This can be useful to quickly find patients with common names or if there is a large number of existing patients. 

![Stock: nav](/docs/programs/images/Narrow_Search_Patient.png)

## Finding Patient Details 

Clicking on a patient file (in the 'Patient' tab) will automatically link to the personal details of the patient. The 'Program' and 'Encounter' history can be found in the same section. 

![Stock: nav](/docs/programs/images/Patient_Program_Details.png)

## Export Patient List

mSupply allows the option of exporting patient data to be sent to a non-mSupply user. This will begin the download of an excel file with the basic details of patients:

1) First name
2) Last name
3) National ID

This can be done by clicking on the 'Export' option in the corner of the main 'Patient' menu. 

![Stock: nav](/docs/programs/images/Export_Patients.png)

## Add Program

mSupply allows patients to be enrolled in a program relevent to the intervention and the patient's illness. This can be done through the 'Patient' tab or while creating a new patient. 

![Stock: nav](/docs/programs/images/Add_Program.png)

Programs are customizable and specific to each context and country - the following examples are from the HIV intervention in Papua New Guinea. This means that each program and the details required will be different for each mSupply user. 

If there is more than one program avaible, all the options will appear with the specific programs the patient is enrolled in ticked and grey. 

If you would like to enroll the highlighted patient in another program, you can do so from this menu.  

![Stock: nav](/docs/programs/images/Program_Details.png)

## Encounters

An 'Encounter' is the recorded visit of a patient, and their treatment, under a specific program.  

NOTE: You cannot record and encounter without a patient enrolled in a program - however this may change in future implementation of mSupply

Under the 'Dispensary' category there is the 'Encounters' tab. 

![Stock: nav](/docs/programs/images/Encounters_Tab.png)

Clicking on this will bring up a list of patients and every encounter that has been documented on mSupply. This includes the date, status and program.

NOTE: A patient must have to be enrolled in a program to input an encounter 

![Stock: nav](/docs/programs/images/Encounters_List.png)

After clicking on a patient in the 'Encounter' tab, it will bring up a panel of  

 


