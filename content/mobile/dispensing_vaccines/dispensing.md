+++
title = "Dispensing"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 351
template = "mobile/page.html"

[extra]
lead = "Dispensing prescriptions to patients"
toc = true
top = true
+++


Dispensary mode only shows if the store is configured correctly on the server. 
Read how [here](/mobile/setup/config/#dispensary-mode).

## Patients

When you tap the **Dispensary** icon you will get a list of your patients. You can search for a particular patient using the field in the search bar.

TIP: you can search by first and last name by using a comma. For example: G, J will search for all patients whose last name starts with G and first name starting with J.

![Custom invoices button on Navigator](/mobile/introduction/images/dispensing_patients.png)

### Searching for a Patient (on the server)

  * If a patient does not exist in your current store, and you have internet access, you can search for the patient on the server
  * Click the **Lookup patient** button

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patient_search.png)

  * You’ll see a new window
  * Enter some or all of the patient's first name, last name and/or date of birth and insurance policy number (if used)
  * Click **Search**.

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patient_look_up.png)

  * You will see a list of patients which are configured on the server, but which are not in your local store
  * If you see the patient you are looking for, click their name. This will copy their details to your local store and they will appear in your patient list.

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patients_name.png)

  <div class="tip">
  Note though, that you cannot edit this patient. This is indicated by the book icon in the edit column, rather than the pencil which shows for your local patients.
  </div>

  * If no patients match your criteria you will be shown the message below. Try making your search more general, for example search just for the first letter of their name.

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patient_no_match.png)

### Adding a new Patient

  * To create a new patient, tap the **New Patient** button.

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patient_new.png)

  * You’ll see a new window
  * The fields marked with IS REQUIRED are fields which must be filled in
  * The other fields are optional
  * The Save button will only be enabled if you have filled out all the required fields
  * Once you have entered all the details that are required, tap the  **SAVE** button. 

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patient_save.png)

### Editing a Patient's details

To edit a patient's details, tap the **edit** button at the end of the row for that patient. Easy!

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patient_edit.png)

### Viewing a Patient's History

You can also view the history for a patient by tapping the **history** button.

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patient_view_history.png)

## Prescribers

You can show, add and edit prescribers in just the same way as you do for patients.

Simply tap the "Prescribers" toggle button at the top of the window:

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patients_final.png)

To edit a prescriber, tap the edit (pen icon) button for the row you wish to edit. You're then shown the prescriber's details:

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_prescribers.png)

As for patients, only when you've entered all the required fields you'll be able to save the record.

### Searching for a Prescriber (on the server)

  * If a prescriber does not exist in your current store, and you have internet access, you can search for the prescriber on the server
  * Click the **Lookup prescriber** button.

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_prescriber_search.png)

  * You’ll see a new window
  * Enter some or all of the prescriber's first name, last name and/or Registration code
  * Click **Search**.

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_prescriber_search2.png)

  * You will see a list of prescribers which are configured on the server, but which are not in your local store
  * If you see the prescriber you are looking for, click their name. This will copy their details to your local store and they will appear in your prescriber list.

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_prescriber_search3.png)

<div class="note">
Note though, that you cannot edit this prescriber. This is indicated by the book icon in the edit column, rather than the pencil which shows for your local prescribers.
</div>

  * If no prescribers match your criteria you will be shown the message below. Try making your search more general, for example search just for the first letter of their name.

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patient_no_info.png)

## Dispensing to a Patient

  * Firstly, find the patient to dispense to (as above for viewing/editing a patient)
  * Then click the **Dispense** button on that row.

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_to_patient.png)

Dispensing is a three step process. Each step must be completed before you can move to the next step.

  1. Step 1: you must select a prescriber by clicking on the **select** icon
      * NOTE: You can press the **history** and **edit** icons next to the patients name to edit the patients details or view their history at any time
      * You can filter the list using the search bar
      * Once you have selected a prescriber, you can edit the prescriber at any time using the **edit** icon next to the prescribers name
  1. Step 2: You must select an item to dispense by selecting the row on the left hand side. You can filter the items using the search bar.

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patient_filter.png)

You must select at least one row to continue.

Once you select an item, you can adjust the quantity using the **+** and **-** buttons, or type quantity into the text area (tap first to bring up the keyboard).

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patient_adjust_quantity.png)

You can remove an item using the **X** button.

Type directions for the item into the directions text area.

Once you’ve updated the quantity, the **Next** button is available and you can continue to step 3.

<div class="note">
Clicking cancel, or navigating away from this prescription will delete this prescription
</div>

Step 3: You can view the final results of the prescription and add any other details such as a comment.

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_patient_prescription_comment.png)

Tapping the **Complete** button will finalise the prescription. That means that it's locked - you can't edit it any more.

![Custom invoices button on Navigator](/mobile/introduction/images/dispensing_patient_finalize.png)

That was easy! If you've enabled payments, you can go to the next step to receive payment. If not, you'll continue and dispense the next prescription.

## Payments

The payments module needs to be configured on the server, so if it's turned off, you won't see it. 
Configuration instructions are [here](/mobile/setup/server-setup/#setting-up-the-server).

The 2 configuration settings that must be set to "true" are:

  * usesDispensarymodule
  * usesPaymentsmodule

Once enabled, when you arrive at the summary page where you check the details of a prescription, you will be shown a payment summary and each item will show its price:

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_payment.png)

The dropdown list under the "Payment" allows you to select the type of the payment. (Types are configured on the server).

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_payment_dropdown.png)

  * The **Payment Amount** is the amount the patient is paying
  * If they have any available credit, this will be listed under the **Payment Amount**
  * There can only be a **Payment Amount** less than the **Total**, if the patient has sufficient available credit to cover the difference.
  * The amount of credit is shown under **Credit Used**
  * The change required is the amount of change to give to the patient
  * It is only possible to finalise a prescription when payments are enabled, when the payment amount is a valid value

Here's an example if the patient doesn't have enough credit:

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_payment_credit.png)

And here's an example of where the payment gave you more in cash than the amount to pay, and you need to give them back change:

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_payment_repayment.png)

## Insurance

If the server has insurance providers enabled, the mobile store will also.

This will enable the insurance drop-down list and the **add** button (The orange "plus" button to the right):

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_insurance_drop_down.png)

When entering the payment details, if the patient has an insurance policy, you can select it from the drop-down list:

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_insurance_drop_down2.png)

You can use the **Edit** (the "pen") or **Add** (the "plus") buttons to add or edit insurance policies.

If you click the **Add** button you can add an insurance policy:

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_insurance_add.png)

The **Save** button is only enabled when you've entered a valid value in each field that is labelled as "required".

If you have set up transaction categories on the server, then you'll be able to choose one at the top left of the window:

![Custom invoices button on Navigator](/mobile/introduction/images/dispense_insurance_final.png)


