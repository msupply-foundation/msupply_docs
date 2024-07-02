+++
title = "Les patients"
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

Les patients peuvent être ajoutés et leurs informations modifiées à partir de cette page. 

### Patients

To use patients, ensure that your store is set to `Dispensary` mode (see the [virtual stores](https://docs.msupply.org.nz/other_stuff:virtual_stores#store_type) documentation for how to do this).

### Open the Patient Menu

Cliquez sur `Dispensaire` > `Patients` dans le panneau de navigation. 

![dispensary menu](/docs/dispensary/images/dispensary_menu.png)

Vous obtiendrez une liste des patients visibles dans votre magasin.

### Liste des patients

La liste des patients est divisée en 8 colonnes : 

| Colonne      | Description                         |
| :---------- | :---------------------------------- |
| **Patient ID**    | L'identifiant du patient                |
| **CINU**  | Code d'identification national unique  |
| **Prénom**  | Prénom  |
| **Nom**  | Nom de famille  |
| **Genre** | Genre | 
| **Date de naissance**  | La date de naissance du patient  |
| **Décédé** | Si le patient est décédé  |

2. La liste peut afficher un nombre fixe de patients par page. Dans le coin inférieur gauche, vous pouvez voir combien de patients sont actuellement affichés sur votre écran.

![Page](/docs/distribution/images/os_list_showing.png)

3. If you have more patients than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

4. You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Filter Patients

You can filter the list of patients by using the search bar at the top of the page. This can be useful if you are looking for a specific patient. By default, the search bar will contain the filters for: First name, Last name, and Patient ID.

![Patient filter](/docs/dispensary/images/patient_filter.png)

For example, to filter by gender, click on the `Filters`, select `Gender`, and then select which gender you would like to filter by. 

![Patient filter gender](/docs/dispensary/images/patient_filter.gif)

### Exporting Patients 

The list of Patients can be exported to a comma separated file (csv). Simply click the export button (on the right, at the top of the page)

![Export button](/docs/distribution/images/export.png)

and the file will be downloaded. The export function will download all Patients, not just the current page, if you have more than 20 of them.

### Creating a New Patient

Press on the `New Patient` button in the top right corner.

A new window will appear for you to enter the patient's details. You must enter the patient's code, first name and last name to enable to `Ok & Next` button. If you do not wish to enter the patient's real name, you can use a pseudonym.

![New Patient](/docs/dispensary/images/patient_new.png)

If you have a patient or patients matching the name you have entered, you will be prompted to select the patient in the new window. 

![New Patient](/docs/dispensary/images/patient_search.png)

Clicking on the matching patient will re-direct you to the patient's details page.

However, if you have no matching patients or if you wish to create a new patient with the same details as an existing patient, you can click the `Ok & Next` button to be re-directed to the patient's details page where you can create the patient.

Then click the `Create` button at the bottom right of the page to create the patient.

![New Patient](/docs/dispensary/images/patient_creation_detail.png)

### Edit a Patient

To edit a patient, click on the patient's name in the list of patients. 