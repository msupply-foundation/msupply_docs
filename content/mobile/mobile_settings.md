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

[<img src="/_media/banner_mobile_userguide.png?w=600&amp;tok=9b9def" class="media" loading="lazy" title="mSupply Mobile User Guide menu" alt="mSupply Mobile User Guide menu" width="600" />](/en:mobile:user_guide)
----## Mobile Settings

The Mobile Settings is where a user with appropriate permissions can carry out certain administration tasks including:

  * Edit the **Sync URL** and **Sync Password** for your mobile store
  * Configure the **Sync interval** and **Idle logout** interval
  * View the **Realm Explorer**
  * **Export Data** (i.e. export your database file).
  * **Import Data** (i.e. import a database file from another device).
  * Perform a **Factory Reset** (i.e. remove all app-related data, including sync settings from the device)
  * **Check Connection** (verifies connectivity between mSupply mobile and mSupply Desktop)

### Permission to Edit Mobile Settings

To edit mobile settings, the user must have the **View/Edit Preferences** permission set for the mobile store on the Central server - please see the  [5. Setting up the Users to access the store](/en:mobile:setup:server_side:users#setting_up_admin_access_to_the_device_settings) page for details.

### Access Mobile Settings

Users with the appropriate permissions will see the **Settings** button on the bottom right of the main screen:

[<img src="/_media/en:mobile:user_guide:mobile_settings.png?w=800&amp;tok=fba553" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:mobile_settings.png?id=en%3Amobile%3Auser_guide%3Amobile_settings)

Tapping on this button opens the *Settings* window:

[<img src="/_media/en:mobile:user_guide:pasted:20210803-030345.png?w=800&amp;tok=9f5228" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:pasted:20210803-030345.png?id=en%3Amobile%3Auser_guide%3Amobile_settings)

#### Editing Sync URL or Sync Password

Be careful when editing this, as synchronisation will not work if the **Sync URL** or **Sync Password** do not match what is set on the primary server.

When edited, the following warning will appear:

[<img src="/_media/en:mobile:user_guide:settings_warning.png?w=800&amp;tok=a08b28" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:settings_warning.png?id=en%3Amobile%3Auser_guide%3Amobile_settings)

For changes to occur, tap the **Save Changes** button:
[<img src="/_media/en:mobile:user_guide:pasted:20210803-031133.png?w=800&amp;tok=35de78" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:pasted:20210803-031133.png?id=en%3Amobile%3Auser_guide%3Amobile_settings)

When prompted, re-enter your password to confirm the changes:
[<img src="/_media/en:mobile:user_guide:settings_password.png?w=800&amp;tok=404fee" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:settings_password.png?id=en%3Amobile%3Auser_guide%3Amobile_settings)

#### Editing the Sync Interval

  * mSupply Mobile will attempt to sync to the Primary server at regular intervals.
  * The default sync interval is 10 minutes.
  * From v8.1.0, it is possible to edit the sync interval to be from 1 minute to 10 minutes.
  * To edit, drag the **Sync interval (minutes):** slider left to decrease the value or right to increase the value. 
  * It is also possible to enter a specific value into the text field to the right of the slider.

[<img src="/_media/en:mobile:user_guide:pasted:20220120-233520.png?w=800&amp;tok=4562c4" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:pasted:20220120-233520.png?id=en%3Amobile%3Auser_guide%3Amobile_settings)

You will need to tap the **Save Changes** button and enter your password when done for the changes to be saved.

#### Export data to backup mSupply Mobile database

For support purposes, it may be necessary to recover a backup of the mSupply Mobile database from the device.  Tap the **Export Data** button to generate the backup. You will get a [toast notification](https://developer.android.com/guide/topics/ui/notifiers/toasts.html) saying *Exported data file* when the export is complete:

[<img src="/_media/en:mobile:user_guide:pasted:20200722-002737.png" class="mediacenter" loading="lazy" alt="" />](/_detail/en:mobile:user_guide:pasted:20200722-002737.png?id=en%3Amobile%3Auser_guide%3Amobile_settings)

The backup file is saved in the *Download > mSupplyMobile_data* folder on the device and can be copied from there and used in another copy of mSupply mobile on another device.

#### Import backup mSupply Mobile database

This functionality is available from mSupply mobile v8.1.0 onwards

For support purposes (e.g. replicating an issue locally that was reported on a remote device), previously backed up files (using the **Export Data** functionality described above) are able to be imported into mSupply mobile. To do this, tap the **Import Data** button on the settings page. This will take you to your device's file system where you can specify the backup file to be used for the import.

When a file is successfully selected and imported, you will get a [toast notification](https://developer.android.com/guide/topics/ui/notifiers/toasts.html) saying *Imported data file. mSupply app will restart now*. The app will then restart and be ready for testing with the imported database file:

[<img src="/_media/en:mobile:user_guide:pasted:20210803-032717.png?w=800&amp;tok=cfa916" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:pasted:20210803-032717.png?id=en%3Amobile%3Auser_guide%3Amobile_settings)

#### Perform a Factory Reset of mSupply Mobile

To avoid having to manually clear app data (which is sometimes not possible on remote devices), there is a **Factory Reset** option available in the settings menu which will do this for you. After tapping the button, you will be prompted with a warning and dialog to enter your user password (note the warning and be sure you really want to clear everything!):

[<img src="/_media/en:mobile:user_guide:pasted:20210803-042127.png?w=800&amp;tok=067e0d" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:pasted:20210803-042127.png?id=en%3Amobile%3Auser_guide%3Amobile_settings)

After entering the correct details and tapping **Done**, you will be taken back to the mSupply mobile initialisation page, where you can re-initialise the tablet. See [here](https://docs.msupply.foundation/en:mobile:user_guide:getting_started#connecting_to_the_central_server) for details on configuring mSupply mobile to connect to the central server.

#### Check Connection

This functionality is available from mSupply mobile v8.1.0 onwards

This feature provides a quick and easy way of verifying that the tablet has connectivity established with mSupply Desktop. This is particularly useful after updating the **Sync URL** or **Sync Password**. Simply tap the **Check Connection** button. If the connection is all good, you will get a [toast notification](https://developer.android.com/guide/topics/ui/notifiers/toasts.html) saying *Connection successful*:
[<img src="/_media/en:mobile:user_guide:pasted:20210803-050215.png?w=800&amp;tok=36abd0" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:pasted:20210803-050215.png?id=en%3Amobile%3Auser_guide%3Amobile_settings)

If there are any problems (like an incorrect URL, incorrect password, bad internet connection) the notification will instead have a description of the error, e.g. *Unable to connect* or *Invalid username or password*.
|  *Previous:  **[The Cash Register](/en:mobile:user_guide:cash_register)** | | Return to home page:  **[Userguide - mSupply Mobile](/en:mobile:user_guide)***  

