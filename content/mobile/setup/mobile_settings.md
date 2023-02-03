+++
title = "Mobile Settings"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 313
template = "mobile/page.html"

[extra]
toc = true
top = false
+++

The Mobile Settings is where a user with appropriate permissions can carry out certain administration tasks including:

  * Edit the **Sync URL** and **Sync Password** for your mobile store.
  * Configure the **Sync interval** and **Idle logout** interval.
  * View the **Realm Explorer**
  * **Export Data** (i.e. export your database file).
  * **Import Data** (i.e. import a database file from another device).
  * Perform a **Factory Reset** (i.e. remove all app-related data, including sync settings from the device)
  * **Check Connection** (verifies connectivity between mSupply mobile and mSupply Desktop)

### Permission to Edit Mobile Settings

To edit mobile settings, the user must have the **View/Edit Preferences** permission set for the mobile store on the Central server - please see the  [5. Setting up the Users to access the store](https://wiki.msupply.foundation/en:mobile:setup:server_side:users#setting_up_admin_access_to_the_device_settings) page for details.

### Access Mobile Settings

Users with the appropriate permissions will see the **Settings** button on the bottom right of the main screen:

![Custom invoices button on Navigator](/mobile/introduction/images/Mobile_Settings1.png)

Tapping on this button opens the *Settings* window:

![Custom invoices button on Navigator](/mobile/introduction/images/Mobile_Settings2.png)

#### Editing Sync URL or Sync Password

<div class="warning">

Be careful when editing this, as synchronisation will not work if the **Sync URL** or **Sync Password** do not match what is set on the primary server.

</div>

When edited, the following warning will appear:

![Custom invoices button on Navigator](/mobile/introduction/images/Mobile_Settings_Warning.png)

For changes to occur, tap the **Save Changes** button:

![Custom invoices button on Navigator](/mobile/introduction/images/Mobile_Settings_Save_Changes.png)

When prompted, re-enter your password to confirm the changes:

![Custom invoices button on Navigator](/mobile/introduction/images/Mobile_Settings_Password.png)

#### Editing the Sync Interval

  * mSupply Mobile will attempt to sync to the Primary server at regular intervals.
  * The default sync interval is 10 minutes.
  * From v8.1.0, it is possible to edit the sync interval to be from 1 minute to 10 minutes.
  * To edit, drag the **Sync interval (minutes):** slider left to decrease the value or right to increase the value. 
  * It is also possible to enter a specific value into the text field to the right of the slider.

![Custom invoices button on Navigator](/mobile/introduction/images/Mobile_Settings_Sync.png)

You will need to tap the **Save Changes** button and enter your password when done for the changes to be saved.

#### Export data to backup mSupply Mobile database

For support purposes, it may be necessary to recover a backup of the mSupply Mobile database from the device.  Tap the **Export Data** button to generate the backup. You will get a [toast notification](https://developer.android.com/guide/topics/ui/notifiers/toasts.html) saying *Exported data file* when the export is complete:

![Custom invoices button on Navigator](/mobile/introduction/images/Mobile_Settings_Export.png)

The backup file is saved in the *Download > mSupplyMobile_data* folder on the device and can be copied from there and used in another copy of mSupply mobile on another device.

#### Import backup mSupply Mobile database

<div class="warning">

This functionality is available from mSupply mobile v8.1.0 onwards

</div> 

For support purposes (e.g. replicating an issue locally that was reported on a remote device), previously backed up files (using the **Export Data** functionality described above) are able to be imported into mSupply mobile. To do this, tap the **Import Data** button on the settings page. This will take you to your device's file system where you can specify the backup file to be used for the import.

When a file is successfully selected and imported, you will get a [toast notification](https://developer.android.com/guide/topics/ui/notifiers/toasts.html) saying *Imported data file. mSupply app will restart now*. The app will then restart and be ready for testing with the imported database file:

![Custom invoices button on Navigator](/mobile/introduction/images/Mobile_Settings_Import.png)

#### Perform a Factory Reset of mSupply Mobile

To avoid having to manually clear app data (which is sometimes not possible on remote devices), there is a **Factory Reset** option available in the settings menu which will do this for you. After tapping the button, you will be prompted with a warning and dialog to enter your user password (note the warning and be sure you really want to clear everything!):

![Custom invoices button on Navigator](/mobile/introduction/images/Mobile_Settings_Factory_Rest.png)


After entering the correct details and tapping **Done**, you will be taken back to the mSupply mobile initialisation page, where you can re-initialise the tablet. See [here](https://docs.msupply.foundation/en:mobile:user_guide:getting_started#connecting_to_the_central_server) for details on configuring mSupply mobile to connect to the central server.

#### Check Connection

<div class="warning">

This functionality is available from mSupply mobile v8.1.0 onwards

</div>

This feature provides a quick and easy way of verifying that the tablet has connectivity established with mSupply Desktop. This is particularly useful after updating the **Sync URL** or **Sync Password**. Simply tap the **Check Connection** button. If the connection is all good, you will get a [toast notification](https://developer.android.com/guide/topics/ui/notifiers/toasts.html) saying *Connection successful*:

![Custom invoices button on Navigator](/mobile/introduction/images/Mobile_Settings_Connection.png)

If there are any problems (like an incorrect URL, incorrect password, bad internet connection) the notification will instead have a description of the error, e.g. *Unable to connect* or *Invalid username or password*.
  

