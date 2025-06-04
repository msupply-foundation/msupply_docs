+++
title = "Patients"
description = "Introduction to the Patients"
date = 2023-01-27T00:00:00+00:00
updated = 2023-01-27T00:00:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "View and Manage Patients"
toc = true
top = false
+++

Patients can be added and their information edited from this page.

### Patients

To use patients, ensure that your store is set to `Dispensary` mode (see the [virtual stores](https://docs.msupply.org.nz/other_stuff:virtual_stores#store_type) documentation for how to do this).

### Open the Patient Menu

Click on `Dispensary` > `Patients` in the navigation panel.

![dispensary menu](images/dispensary_menu.png)

You will be presented with a list of patients visible to your store.

### Patient List

![](images/patient-list-view.png)

1. The list of patients is divided into 8 columns:

| Column            | Description                      |
| :---------------- | :------------------------------- |
| **Patient ID**    | The ID of the patient            |
| **NUIC**          | National unique identifier code  |
| **Created**       | The date the patient was created |
| **First name**    | First name                       |
| **Last name**     | Last name                        |
| **Gender**        | Gender                           |
| **Date of Birth** | The patient's date of birth      |
| **Deceased**      | Whether the patient is deceased  |

2. The list can display a fixed number of patients per page. On the bottom left corner, you can see how many patients are currently displayed on your screen.

![Page](images/list_showing.png)

3. If you have more patients than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](images/list_pagenumbers.png)

4. You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](images/rows-per-page-select.png)

### Filter Patients

You can filter the list of patients by using the search bar at the top of the page. This can be useful if you are looking for a specific patient. By default, the search bar will contain the filters for: First name, Last name, and Patient ID.

![Patient filter](images/patient_filter.png)

For example, to filter by gender, click on the `Filters`, select `Gender`, and then select which gender you would like to filter by.

### Exporting Patients

The list of Patients can be exported to a comma separated file (csv). Simply click the export button (on the right, at the top of the page), and the file will be downloaded. The export function will download all Patients, not just the current page.

### Creating a New Patient

Press on the `New Patient` button in the top right corner.

A new window will appear for you to enter the patient's details. You must enter the patient's code, first name and last name to enable to `Ok & Next` button. If you do not wish to enter the patient's real name, you can use a pseudonym.

![New Patient](images/patient_new.png)

If you have a patient or patients matching the name you have entered, you will be prompted to select the patient in the new window.

![New Patient](images/patient_search.png)

Clicking on the matching patient will re-direct you to the patient's details page.

However, if you have no matching patients or if you wish to create a new patient with the same details as an existing patient, you can click the `Ok & Next` button to be re-directed to the patient's details page where you can create the patient.

Then click the `Create` button at the bottom right of the page to create the patient.

![New Patient](images/patient_creation_detail.png)

### Lookup a Patient

If you have followed the process above, you may see a different icon to the right of a patient's details on the patient search results screen:

![Fetch patient button](images/fetch_patient_button.png)

Sometimes the record for the patient you are searching for has already been created at another site. This 'download' icon indicates that a patient matches your current search criteria, and you can download all their existing patient data to your site.

To use this patient record, you must first fetch the patient details. Click the patient row (which has a tooltip message as shown below):

![Fetch patient row](images/fetch_patient_row.png)

You'll then be prompted to confirm the action:

![Fetch patient confirmation](images/fetch_patient_confirmation.png)

and if successful, you'll then get a further message:

![Fetch patient done](images/fetch_patient_done.png)

Clicking the `View patient` button here will take you to the screen which displays the patient details. The patient is now available for prescribing to, enrolling in a program and for creating encounters. You can update the patient details and have them synchronise back to the store which originally created the patient record.

### Edit a Patient

To edit a patient, click on the patient's name in the list of patients.

If there is more data in your Patient view, it's likely due to Patient Programs being configured. You can find out more in the [Patient Programs](/docs/programs/program-module) documentation.

## Insurance

Insurance policies can be added to a patient. You can edit the insurance information and use it for payments.

<div class="tip">The Insurance tab is only available if you've setup <a href="https://docs.msupply.org.nz/dispensing:patient_insurance#insurance_providers">Insurance Providers in mSupply</a></div>

### Insurance List

Select any patient and click on the `Insurance` tab. Here you can see the list of insurance policies available to a patient.

![Insurance List View](images/insurance_list_view.png)

### Adding Insurance to a Patient

1. Click the `Add Insurance` button in the top right corner.

   ![Add Insurance](images/insurance_add_button.png)

2. A new window will appear for you to enter the insurance details for a patient. Fill out all the fields in the form to enable the save button.

   ![Insurance Empty Modal](images/insurance_empty_modal.png)

3. After filling out the form, click the `Save` button. Your newly created insurance will show in the list, and a confirmation message will appear.

   ![Insurance Success](images/insurance_success.png)

4. If you forget to fill out a section of the form, the system will alert you and the details won't be saved.

   ![Insurance Failed To Save](images/insurance_failed_to_save.png)

### Editing Insurance Information

1. To edit an existing insurance, ensure that you are on the insurance tab of a patient. Click on one of the available insurances.

   ![Insurance Row Select](images/insurance_row_select.png)

2. A familiar window will appear, allowing you to edit the insurance details of a patient.

   ![Insurance Filled Modal](images/insurance_filled_modal.png)

3. Update the insurance information as needed.

   ![Insurance Edit Modal](images/insurance_edit_modal.png)

4. Once done with the updates, click the `Save` button. When successful, a confirmation message will appear, and your changes will be reflected immediately.

   ![Insurance Success](images/insurance_success.png)
