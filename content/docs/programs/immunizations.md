+++
title = "Immunizations"
description = "Immunization Programs"
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 61
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Setup

Base Immunization Programs are configured in the mSupply central server.

For GAPS functionality, you will only need to configure a new Master List, and mark it as an Immunization Program.

<div align="center">
    <img src="/docs/programs/images/og_immunisation_program.png" width="620">
</div>
<br />

For Immunization [Patient Programs](/docs/programs/program-module), contact your administrator to get set up.

Once the base Immunization Program is created, it can be further configured in the <a href='/docs/getting_started/central'>Open mSupply Central Server<a>. See the <a href="#permissions-restrictions">Permissions & Restrictions</a> section for more details.

## Viewing Immunization Programs

Choose `Programs` > `Immunizations` in the navigation panel.

![goto: immunizations](/docs/programs/images/goto_immunizations.png)

You will be presented with a list of Immunization Programs:

![immunizations list](/docs/programs/images/immunizations.png)

The list of Immunization Programs is divided into 2 columns:

| Column              | Description                                                      |
| :------------------ | :--------------------------------------------------------------- |
| **Program Name**    | The name of the Immunization Program                             |
| **Vaccine Courses** | The Vaccine Courses that are a part of that Immunization Program |

## Viewing Immunization Program Details

To view an Immunization Program in more detail, click on it. This will take you to the detail page for that program.

![immunizations: detail](/docs/programs/images/immunizations_detail.png)

You can use the `Close` button in the bottom right to close the detail view, and go back to the list of Immunization Programs.

### Vaccine Courses

The Immunization Program detail view presents you with a list of Vaccine Courses that are a part of the program.

The list of Vaccine Courses is divided into 3 columns:

| Column                 | Description                                           |
| :--------------------- | :---------------------------------------------------- |
| **Name**               | The name of the Vaccine Course                        |
| **Target Demographic** | The demographic to receive the vaccine Vaccine Course |
| **Doses**              | The number of doses included in the course            |

### Adding a new Vaccine Course

To add a new Vaccine Course, click the `Add vaccine course` button in the top right.

![vaccine course: add button](/docs/programs/images/vaccine_course_add_button.png)

This will open a new window, where you can enter the details of the new Vaccine Course, e.g. Vaccine course name, wastage rate, dose schedule.

![vaccine course: create modal](/docs/programs/images/vaccine_course_add.png)

#### Doses

To add doses to the Vaccine Course, click the `(+) Dose` button. This will add a new row to the `dose schedule` table, where the details of the dose can be entered, including when the dose can administered.

![vaccine course: dose edit table](/docs/programs/images/vaccine_course_dose_edit.png)

The Dose Schedule table is divided into 6 columns:

| Column                  | Description                                                                                                              |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **Dose #**              | The number of the dose in the schedule                                                                                   |
| **Label**               | The label of the dose, to appear in the [Vaccination Card](/docs/programs/program-module#vaccination-cards)              |
| **From age**            | Minimum recommended age to receive the dose (in years and months)                                                        |
| **To age**              | Maximum recommended age to receive the dose (in years and months)                                                        |
| **Custom age label**    | Custom age label to be displayed in the Vaccination Card. If not defined, the default is the `From age` (e.g. `6 years`) |
| **Min interval (days)** | Minimum number of days before the patient should receive the next dose                                                   |

<div class="note">
  If custom age labels are used, ensure that label is the same across all doses in the Immunization Program with the same <code>From age</code>. For example, if you want to replace "0 months" with "Birth", all doses across all Vaccine Courses with a <code>From age</code> of 0 months will need the custom age label of "Birth". This ensures correct grouping of doses in the Vaccination Card.
</div>

Once you are happy with the Vaccine Course details, click OK to save the new Vaccine Course.

Click `Cancel` at any time to close the window and discard your changes.

### Editing a Vaccine Course

To view or edit the details of a Vaccine Course, click on the row in the list. This will re-open the editing window, for you to view or change any details.

![vaccine course: edit modal](/docs/programs/images/vaccine_course_detail.png)

### Deleting a Vaccine Course

You can delete Vaccine Course from the list.

Select the Vaccine Course that you wish to delete by checking the box on the right end of the list. You can select more than one Vaccine Course to be deleted at once. You can even select them all using the master checkbox in the table header.

![vaccine courses: select to delete](/docs/programs/images/vaccine_courses_select.png)

Open the `Actions` dropdown in the top right corner, above the list, and select `Delete selected lines`.

![vaccine courses: actions](/docs/programs/images/immunizations_actions.png)

You will be asked to confirm that you wish to delete the selected Vaccine Courses. Press `Cancel` to prevent deleting, or `Ok` to confirm.

![vaccine courses: confirm delete](/docs/programs/images/vaccine_courses_confirm_delete.png)

A notification in the bottom left corner will confirm how many courses were deleted.

## Permissions & Restrictions

Immunization Programs can only be managed on the [Open mSupply Central Server](/docs/getting_started/central) and requires the [`mobile: Uses vaccine module`](https://docs.msupply.org.nz/cold_chain_equipment:mobile?s[]=vaccine#enable_the_vaccine_module_for_the_mobile_store) store preference.

![mSupply Store Preference Vaccine Module](/docs/programs/images/vaccine_module.png)

To configure Immunization Programs or Vaccine Courses, you need the `Can modify central data` permission enabled in the [Open mSupply Permissions Tab](https://docs.msupply.org.nz/admin:managing_users?s[]=permission#open_msupply_permissions_tab) on your Central Store.

![Can Modify Central Data Permission](/docs/programs/images/can_modify_central.png)
