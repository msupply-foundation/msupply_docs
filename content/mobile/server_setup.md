+++
title = "mSupply server setup"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 1
template = "mobile/page.html"

[extra]
lead = "Setting up mSupply Server for mobile"
toc = true
top = false
+++

## Setting up the server


The following details the steps of setting up mSupply from your organisation's mSupply Server

Note - the mSupply Support Team will complete these steps for you.
The following instructions are for your information only.

### Where to start
Requirements

    A server running mSupply with a web server license registered
    Sync server has a static IP and any network permissions required configured
    A mobile tablet fitting the recommended specifications here

Information needed

    Store name
    The item master list to be attached to the store
    If you are converting an existing mSupply site (customer) to mSupply Mobile, then you also need to provided the existing customer name that the store is being created for

Creating mobile stores for new sites

EACH individual mobile store needs to have the following steps done on the server, which are detailed later in this Server setup guide:

1. Create the sync site 
2. Create the mobile store 
3. Configure the mobile store section 4 of this guide
4. Create user(s) to access the store section 5 of this guide

Items 1 and 2 can now be carried out using the Sync site wizard. See [here](https://docs.msupply.org.nz/synchronisation:sync_sites)


### Custom settings

 These are set on the Custom fields tab of the store preferences in mSupply desktop (**Special > Show Stores**, Double-click on store > Custom fields tab). 

| Setting name                            | Allowed Value(s) | Description | 
|-----------------------------------------|---------------------|--------------| 
|| *default value in italics*       || 
| usesDashboardModule                     | true or *false*       | Needs to be set to true if using the dashboard         | 
| usesVaccineModule                       | true or *false*       | Needs to be set to true if using the vaccines module                                | 
| usesCashRegisterModule                  | true or *false*       | Needs to be set to true if using the cash register                   | 
| usesPaymentModule                       | true or *false*       | Needs to be set to true if handling cash payments. There are some (good!) side effects if this setting is true: The sell and cost price columns are shown on Supplier Invoices and are also shown when editing batches in a stocktake where the sell price is editable. See below for examples. | 
| usesPatientTypes                        | true or *false*       | If set to true then you can choose between “Inpatient and Outpatient” when dispensing. The data is stored in the transact.user1 field. Of course, usesDispensaryModule must be set to true for this to have any effect  (see above)    | 
| monthsLeadTime                          | number *(0)*          | The months of lead time - will be multiplied by 30 to use in mobile as months of lead time            | 
| monthlyConsumptionLookBackPeriod        | number *(12)*         | The number of months to look back when calculating average monthly consumption (AMC)                | 
| monthlyConsumptionEnforceLookBackPeriod | true or false       | if True, then the full lookbackup period will be used, even if there is no consumption in those periods. We don't recommend this, but it's here to comply with the rules in some countries          | 

### Other preferences

You can set other preferences for mobile in the Store preferences by going to Special > Show Stores, Double-click on store > Preferences tab) in mSupply desktop:

Here are the preferences and what they do:

| Item                    | Description                                                                                                                                                 | 
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| Programs                | If you have a master list configured as a program, in mobile you will then be able to perform stock takes or supplier requisitions by program.              | 
| Reasons                 | If you have BOTH positive and negative inventory adjustments, have to apply a reason to stocktake lines with a difference = 0                               | 
| Prescription Categories | If you have transaction categories with type of “prescription” mobile will display a drop down list of prescription categories to select from               | 
| Insurance Providers     | If you configured an insurance provider, then mobile will give you the ability to choose a policy, and to edit and create them at the end of a prescription | 
| Payment Types           | If you have configured any payment types, they’ll show up in a list at the end of a prescription                                                            | 

#### Dispensary mode

Ensure that your store is a Dispensary by choosing Dispensary from the drop-down list on the General tab of the store preferences.

![Mobile dispesning pref on desktop!](/mobile/images/dispensary_mode_desktop.png)

You will need to synchronise mSupply mobile with the server before the mobile device receives these configuration settings. After sync, your Navigator window will look like this:

![mobile navigator with dispensing enabled!](/mobile/images/mobile_nav_w_dispensing.png)

#### Vaccine dispensing

If you want to use mobile for dispensing vaccines then see the setup instructions on the Vaccine Dispensing Setup page.


#### When the Payments module is on

The cost and sell price are visible on supplier invoices:

The cost and sell price are visible when doing stocktakes:

