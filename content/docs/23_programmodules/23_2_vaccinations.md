+++
title = "Vaccination Cards"
description = "Vaccination Cards"
date = 2023-01-27T00:00:00+00:00
updated = 2023-01-27T00:00:00+00:00
draft = false
weight = 203
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

### Vaccination Cards

If the patient is enrolled in an [Immunization Program](/docs/22_programs/22-6-immunizations/), you can view their progress through the program by viewing their Vaccination Card.

<div class='note'>
  The Vaccination Card can only be viewed from the facility where the patient was enrolled in the program. If the patient was enrolled in the program at a different facility, you will not be able to view their Vaccination Card.
</div>

From the `Vaccinations` tab in the patient detail view, select the Immunization Program you want to view the Vaccination Card for.

![Vaccinations Tab](/docs/programs/images/patient_vaccinations_tab.png)

You will be redirected to the patient's Vaccination Card for that program.

![Vaccination Card](/docs/programs/images/vax_card_view.png)

The Vaccination Card includes the following columns:

| Column             | Description                                                                                                                 |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| **Age**            | The minimum age the patient should be to receive the dose                                                                   |
| **Dose**           | The name of the dose                                                                                                        |
| **Status**         | The vaccination status (see below)                                                                                          |
| **Suggested date** | The earliest recommended date to give the dose (based on the patient's age, and the minimum interval since their last dose) |
| **Date given**     | The date of the recorded vaccination                                                                                        |
| **Batch**          | The batch of the vaccine item given to the patient                                                                          |
| **Facility**       | The facility where the vaccination was administered                                                                         |

**Vaccination statuses:**

- **Given**: The patient has received the vaccination
- **Not Given**: The patient has not received the vaccination (e.g. refused, no stock available)
- **Pending**: The patient is eligible for this dose - they have received the previous dose and are above the minimum age
- **Overdue**: The patient is older than the recommended max age for this dose

To view the details of a specific vaccination, click on that row in the card. This will open a new window containing all the vaccination information.

<div align="center">
    <img src="/docs/programs/images/vaccination_edit.png" width="520">
</div>
<br/>

Note that only the rows where a vaccination has been recorded (as `Given` or `Not given`) will be clickable in this view. New vaccinations are administered from within an encounter.

#### Vaccination Encounters

Immunization Program Encounters will have an additional `Vaccinations` tab, which displays the same Vaccination card as in the patient view above. However, new doses can also be administered from within the encounter.

![Vaccination Card - Encounter](/docs/programs/images/encounter_vax_card.png)

#### Adding Vaccination Records

To add a new vaccination record, click the row in the Vaccination Card that corresponds to the dose you want to administer. You can only add vaccination records for a dose if the previous dose in that Vaccine Course has been `Given`. Rows for future doses will be disabled.

Clicking the dose row will open a new window where you can enter the details of the vaccination.

![Vaccination Modal](/docs/programs/images/encounter_new_vaccination.png)

Let's step through each section.

- `Facility`: will be pre-populated with the logged in facility. This can be changed if the vaccination was administered at a different facility.

![Vaccination Modal - other facility](/docs/programs/images/vaccination_other_facility.png)

- `Clinician`: will be pre-populated with the clinician for the encounter, if selected. Can be changed if the vaccination was administered by a different clinician. This field is not available for vaccinations recorded at `Other` facilities.

- `Date`: defaults to today's date, but can be changed to add historic vaccination records as needed.

- `Given`/`Not given`: based on whether you select `Vaccine given` or `Vaccine not given`, some more fields will appear.

- `Vaccine item` and `Batch`: If you select `Vaccine given`, you will be able to select the `Item` and `Batch` of the vaccine administered. If there is only one item/batch available, these fields will be pre-populated. Otherwise they can be selected from a dropdown.

![Vaccination Modal - given batch select](/docs/programs/images/vaccination_given_batch_select.png)

Note that if you selected an `Other facility`, you will not receive the option to select an item and batch.

![Vaccination Modal - given other facility](/docs/programs/images/vaccination_given_other_facility.png)

If you selected a `Date` in the past, a switch will appear to `Record stock transaction for past vaccination`.

![Vaccination Modal - given historic](/docs/programs/images/past_vaccination_switch.png)

Switch this on if you want to record a stock transaction for this vaccination (see more below). This will enable the item and batch inputs.

![Vaccination Modal - given historic with transaction](/docs/programs/images/past_vaccination_switch_on.png)

- `Reason`: If you instead select `Vaccine not given`, you will be able to select a reason why the vaccine was not given.

![Vaccination Modal - not given reason](/docs/programs/images/vaccination_not_given_reason.png)

- `Comment`: an optional comment field is also available for any observations or notes about the vaccination.

When you are happy with your changes, you can click the OK button to save the vaccination record. If you want to discard your changes, click the Cancel button.

![Vaccination Modal - save](/docs/programs/images/save_vaccination.png)

If a vaccine item and batch were selected, the system will automatically create and finalise a [Prescription](/docs/21_dispensary/21-2-dispensing/). Prescriptions are created for each vaccination record to track stock usage.

Note that the prescription will always be created for today's date, regardless of the date you selected for the vaccination.

You can view the created prescription by clicking on the dose row again in the vaccination record. If a prescription was created, you will see a `View prescription` link in the info box at the top of the window.

![Vaccination Modal - view prescription](/docs/programs/images/vaccination_view_prescription.png)

#### Editing Vaccination Records

Vaccination records should be entered at the time of vaccination, so there shouldn't be a need to edit them. However, if you need to correct a mistake, you can do so by clicking on the row in the Vaccination Card that corresponds to the dose you want to edit, to open the edit window.

![Vaccination Modal - edit](/docs/programs/images/edit_vaccination.png)

All fields are editable. Some things to note:

- Changing the date will not change the prescription date
- If you change from `Given` to `Not given`, and a Prescription was previously created from the vaccination, you will have the option to `revert the existing stock transaction`
  - If enabled, a [Customer Return](/docs/19_returns/19-4-customer-returns/) will be created for the vaccine item that was previously administered (note that the prescription will continue to exist - finalised prescriptions cannot be deleted)

![Vaccination Modal - revert transaction](/docs/programs/images/vaccination_revert_transaction.png)

- If you change the item or batch, and a Prescription was previously created from the vaccination, you will have the option to `update stock transactions`. If enabled:
  - A [Customer Return](/docs/19_returns/19-4-customer-returns/) will be created for the vaccine item that was previously administered
  - A [Prescription](/docs/21_dispensary/21-2-dispensing/) will be created for the new vaccine item/batch
  - Note that the previous prescription will continue to exist - finalised prescriptions cannot be deleted

![Vaccination Modal - update transaction](/docs/programs/images/vaccination_update_transactions.png)
