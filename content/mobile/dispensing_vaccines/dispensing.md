+++
title = "Introduction"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 1
template = "mobile/page.html"

[extra]
lead = "Welcome to mSupply Mobile!"
toc = true
top = false
+++

# Dispensing

Dispensing mode only shows if the store is configured correctly on the server. Read how [here](/en:mobile:setup:server_side:config)

## Patients

When you tap the **Dispensary** icon you will get a list of your patients. You can search for a particular patient using the field in the search bar.

TIP: you can search by first and last name by using a comma. For example: g, j will search for all patients whose last name starts with G and first name starting with J.

[<img src="/_media/en:mobile:user_guide:dispensary-patients.png?w=800&amp;tok=aa07d2" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:dispensary-patients.png?id=en%3Amobile%3Auser_guide%3Adispensing)

### Searching for a Patient ( on the server )

  * If a patient does not exist in your current store, and you have internet access, you can search for the patient on the server
  * Click the **Lookup patient** button

[<img src="/_media/en:mobile:user_guide:lookup-patient.png?w=400&amp;tok=8ad146" class="mediacenter" loading="lazy" title=" " alt=" " width="400" />](/_detail/en:mobile:user_guide:lookup-patient.png?id=en%3Amobile%3Auser_guide%3Adispensing)

  * You’ll see a new window
  * Enter some or all of the patient's first name, last name and/or date of birth and insurance policy number ( if used )
  * Click **Search**

[<img src="/_media/en:mobile:user_guide:dispensary-lookup-results.png?w=800&amp;tok=144e5c" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:dispensary-lookup-results.png?id=en%3Amobile%3Auser_guide%3Adispensing)

  * You will see a list of patients which are configured on the server, but which are not in your local store
  * If you see the patient you are looking for, click their name. This will copy their details to your local store and they will appear in your patient list

[<img src="/_media/en:mobile:user_guide:patient-list-including-lookup.png?w=800&amp;tok=5d120f" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:patient-list-including-lookup.png?id=en%3Amobile%3Auser_guide%3Adispensing)

  * Note though, that you cannot edit this patient. This is indicated by the book icon in the edit column, rather than the pencil which shows for your local patients.
  * If no patients match your criteria you will be shown the message below. Try making your search more general, for example search just for the first letter of their name

[<img src="/_media/en:mobile:user_guide:patient-lookup-no-records.png?w=250&amp;tok=adfc62" class="mediacenter" loading="lazy" title=" " alt=" " width="250" />](/_detail/en:mobile:user_guide:patient-lookup-no-records.png?id=en%3Amobile%3Auser_guide%3Adispensing)

### Adding a new Patient

  * To create a new patient, tap the **New Patient** button.

[<img src="/_media/en:mobile:user_guide:pasted:20200206-082343.png?w=800&amp;tok=1a5ea4" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200206-082343.png?id=en%3Amobile%3Auser_guide%3Adispensing)

  * You’ll see a new window. 
  * The fields marked with IS REQUIRED are fields which must be filled in. 
  * The other fields are optional.
  * The Save button will only be enabled if you have filled out all the required fields.
  * Once you have entered all the details that are required, tap the  **SAVE** button. 

[<img src="/_media/en:mobile:user_guide:pasted:20200206-082602.png?w=800&amp;tok=d3e198" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200206-082602.png?id=en%3Amobile%3Auser_guide%3Adispensing)

### Editing a patient's details

To edit a patient's details, tap the **edit** button at the end of the row for that patient. Easy!

[<img src="/_media/en:mobile:user_guide:pasted:20200206-082736.png?w=800&amp;tok=478950" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200206-082736.png?id=en%3Amobile%3Auser_guide%3Adispensing)

### Viewing a patient's History

You can also view the history for a patient by tapping the **history** button.

[<img src="/_media/en:mobile:user_guide:pasted:20200206-082856.png?w=800&amp;tok=79027d" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200206-082856.png?id=en%3Amobile%3Auser_guide%3Adispensing)

## Prescribers

You can show, add and edit prescribers in just the same way as you do for patients.

Simply tap the "Prescribers" toggle button at the top of the window:

To edit a prescriber, tap the edit (pen icon) button for the row you wish to edit. You're then shown the prescriber's details:

[<img src="/_media/en:mobile:user_guide:pasted:20200206-083207.png?w=800&amp;tok=92a1b0" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200206-083207.png?id=en%3Amobile%3Auser_guide%3Adispensing)

As for patients, only when you've entered all the required fields you'll be able to save the record.

[<img src="/_media/en:mobile:user_guide:pasted:20200206-083028.png?w=800&amp;tok=d567c2" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200206-083028.png?id=en%3Amobile%3Auser_guide%3Adispensing)

### Searching for a Prescriber ( on the server )

  * If a prescriber does not exist in your current store, and you have internet access, you can search for the prescriber on the server
  * Click the **Lookup prescriber** button

[<img src="/_media/en:mobile:user_guide:lookup-prescriber.png?w=400&amp;tok=3c082a" class="mediacenter" loading="lazy" title=" " alt=" " width="400" />](/_detail/en:mobile:user_guide:lookup-prescriber.png?id=en%3Amobile%3Auser_guide%3Adispensing)

  * You’ll see a new window
  * Enter some or all of the prescriber's first name, last name and/or Registration code
  * Click **Search**

[<img src="/_media/en:mobile:user_guide:prescriber-lookup-results.png?w=800&amp;tok=5b8ff6" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:prescriber-lookup-results.png?id=en%3Amobile%3Auser_guide%3Adispensing)

  * You will see a list of prescribers which are configured on the server, but which are not in your local store
  * If you see the prescriber you are looking for, click their name. This will copy their details to your local store and they will appear in your prescriber list

[<img src="/_media/en:mobile:user_guide:prescriber-list-including-lookup.png?w=800&amp;tok=285701" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:prescriber-list-including-lookup.png?id=en%3Amobile%3Auser_guide%3Adispensing)

  * Note though, that you cannot edit this prescriber. This is indicated by the book icon in the edit column, rather than the pencil which shows for your local prescribers.
  * If no prescribers match your criteria you will be shown the message below. Try making your search more general, for example search just for the first letter of their name

[<img src="/_media/en:mobile:user_guide:patient-lookup-no-records.png?w=250&amp;tok=adfc62" class="mediacenter" loading="lazy" title=" " alt=" " width="250" />](/_detail/en:mobile:user_guide:patient-lookup-no-records.png?id=en%3Amobile%3Auser_guide%3Adispensing)

## Dispensing to a patient

  * Firstly, find the patient to dispense to (as above for viewing/editing a patient)
  * Then click the **Dispense** button on that row.

[<img src="/_media/en:mobile:user_guide:pasted:20200206-083434.png?w=800&amp;tok=4a7655" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200206-083434.png?id=en%3Amobile%3Auser_guide%3Adispensing)

Dispensing is a three step process. Each step must be completed before you can move to the next step

  1. Step 1 you must select a prescriber by clicking on the SELECT icon
    * NOTE: You can press the HISTORY and EDIT icons next to the patients name to edit the patients details or view their history at any time.
    * You can filter the list using the search bar
    * Once you have selected a prescriber, you can edit the prescriber at any time using the EDIT icon next to the prescribers name
  1. Step 2: You must select an item to dispense by selecting the row on the left hand side. You can filter the items using the search bar

[<img src="/_media/en:mobile:user_guide:pasted:20200206-083750.png?w=800&amp;tok=066b30" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200206-083750.png?id=en%3Amobile%3Auser_guide%3Adispensing)

You must select at least one row to continue.

Once you select an item, you can adjust the quantity using the **+** and **-** buttons, or type quantity into the text area (tap first to bring up the keyboard).

[<img src="/_media/en:mobile:user_guide:pasted:20200206-083920.png?w=800&amp;tok=283819" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200206-083920.png?id=en%3Amobile%3Auser_guide%3Adispensing)

You can remove an item using the **X** button.

Type directions for the item into the directions text area.

Once you’ve updated the quantity, the Next button is available and you can continue to step 3. 

Note that clicking cancel, or navigating away from this prescription will **DELETE** this prescription

[<img src="/_media/en:mobile:user_guide:pasted:20200206-084106.png?w=800&amp;tok=3e91eb" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200206-084106.png?id=en%3Amobile%3Auser_guide%3Adispensing)

  1. Step 3: You can view the final results of the prescription and add any other details such as a comment.

[<img src="/_media/en:mobile:user_guide:pasted:20200206-084212.png?w=800&amp;tok=dc5430" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200206-084212.png?id=en%3Amobile%3Auser_guide%3Adispensing)

Tapping the **Complete** button will finalise the prescription. That means that it's locked- you can't edit it any more.

[<img src="/_media/en:mobile:user_guide:pasted:20200206-084437.png?w=800&amp;tok=671dd4" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200206-084437.png?id=en%3Amobile%3Auser_guide%3Adispensing)

That was easy!. If you've enabled payments, you can go to the next step to receive payment. If not, you'll continue and dispense the next prescription.

## Payments

The payments module needs to be configured on the server, so if it's turned off, you won't see it. 
Configuration instructions are [here](/en:mobile:setup:server_side)
The 2 configuration settings that must be set to "true" are:

  * usesDispensarymodule
  * usesPaymentsmodule

Once enabled, when you arrive at the summary page where you check the details of a prescription, you will be shown a payment summary and each item will show its price:

[<img src="/_media/en:mobile:user_guide:pasted:20200208-013019.png?w=800&amp;tok=dcace1" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200208-013019.png?id=en%3Amobile%3Auser_guide%3Adispensing)

The dropdown list under the "Payment" allows you to select the type of the payment. (Types are configured on the server).

[<img src="/_media/en:mobile:user_guide:pasted:20200208-013446.png?w=350&amp;tok=72266c" class="mediacenter" loading="lazy" title="  " alt="  " width="350" />](/_detail/en:mobile:user_guide:pasted:20200208-013446.png?id=en%3Amobile%3Auser_guide%3Adispensing)

  * The **Payment Amount** is the amount the patient is paying
  * If they have any available credit, this will be listed under the **Payment Amount**
  * There can only be a **Payment Amount** less than the **Total**, if the patient has sufficient available credit to cover the difference.
  * The amount of credit is shown under **Credit Used**
  * The change required is the amount of change to give to the patient
  * It is only possible to finalise a prescription when payments are enabled, when the payment amount is a valid value

Here's an example if the patient doesn't have enough credit:

[<img src="/_media/en:mobile:user_guide:pasted:20200208-013826.png?w=800&amp;tok=5ceaa9" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200208-013826.png?id=en%3Amobile%3Auser_guide%3Adispensing)

And here's an example of where the payment gave you more in cash than the amount to pay, and you need to give them back change:

[<img src="/_media/en:mobile:user_guide:pasted:20200208-013930.png?w=800&amp;tok=92b90c" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200208-013930.png?id=en%3Amobile%3Auser_guide%3Adispensing)

## Insurance

If the server has insurance providers enabled, the mobile store will also.

This will enable the insurance drop-down list and the **add** button (The orange "plus" button to the right):

[<img src="/_media/en:mobile:user_guide:pasted:20200208-014947.png?w=800&amp;tok=e9fee5" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200208-014947.png?id=en%3Amobile%3Auser_guide%3Adispensing)

When entering the payment details, if the patient has an insurance policy, you can select it from the drop-down list:

[<img src="/_media/en:mobile:user_guide:pasted:20200208-015124.png?w=350&amp;tok=d9b2ed" class="mediacenter" loading="lazy" title=" " alt=" " width="350" />](/_detail/en:mobile:user_guide:pasted:20200208-015124.png?id=en%3Amobile%3Auser_guide%3Adispensing)

You can use the **Edit** (the "pen") or **Add** (the "plus") buttons to add or edit insurance policies.

If you click the **Add** button you can add an insurance policy:

[<img src="/_media/en:mobile:user_guide:pasted:20200208-015342.png?w=800&amp;tok=a0157f" class="mediacenter" loading="lazy" title=" " alt=" " width="800" />](/_detail/en:mobile:user_guide:pasted:20200208-015342.png?id=en%3Amobile%3Auser_guide%3Adispensing)

The **Save** button is only enabled when you've entered a valid value in each field that is labelled as "required".

If you have set up transaction categories on the server, then you'll be able to choose one at the top left of the window:

[<img src="/_media/en:mobile:user_guide:pasted:20200208-015623.png?w=303&amp;tok=3318fb" class="mediacenter" loading="lazy" title=" " alt=" " width="303" />](/_detail/en:mobile:user_guide:pasted:20200208-015623.png?id=en%3Amobile%3Auser_guide%3Adispensing)

|  *Previous:  **[Indicators](/en:mobile:user_guide:indicators)** | | Next:  **[The Cash Register](/en:mobile:user_guide:cash_register)***  

