+++
title = "Setting up the Users"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 315
template = "mobile/page.html"
toc = true
top = false
+++

### Setting up the Users to access the store

At least one user needs to be added to the new store on the Primary server.  The users will access the store from the device, but their credentials need to be set up on the Primary server.

If you have used method [3.03 to create the store by cloning another sync store](/en:mobile:setup:server_side:create_store#create_store_by_cloning_another_sync_store_using_sync_clone_sync_site), the following steps are only required if you have further users to add.

### Setting up Store access for Users

  * To set up users on the Primary Server please refer to the mSupply User Guide [managing users](http://docs.msupply.org.nz/admin:managing_users).

For mSupply Mobile, User configuration should be set as:

  * Active
  * Permitted to login to the store
  * No permissions needed in the store, unless the user needs to edit [mobile settings](/en:mobile:user_guide:mobile_settings).

  * More than one user can be configured to log in to the facility.

When creating new users who will be using mSupply Mobile, there are few restrictions.  Spaces, hyphens, capitals and special characters are permitted.  However, consider the following to make them easier to enter on a tablet:

  * Only use lower-case letters for both username and password
  * Consider using short, single word usernames and passwords
  * Strongly recommend that you take care not to have trailing spaces at the end of the username or password

### Setting up Store access for Admin Users

At least one Admin User needs to be set up to have have access to the new store on the Primary server.  This user will normally be the `Sussol` user that was used to set up the new store, but there could well be other local mSupply administrators that need access.

  1. Go to **Admin > Edit Users**[<img src="/_media/mobile:mob2_004.jpg?w=600&amp;tok=c320cf" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/mobile:mob2_004.jpg?id=en%3Amobile%3Asetup%3Aserver_side%3Ausers)
  1. Select the user and go to **Login Rights**[<img src="/_media/mobile:mob2_005.jpg?w=600&amp;tok=0c482f" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/mobile:mob2_005.jpg?id=en%3Amobile%3Asetup%3Aserver_side%3Ausers)
  1. Select the new Store
  1. Click **OK**

### Setting up Admin access to the device Settings

  * To carry out various admin functions on the device, the logged in user needs the appropriate permission to access the mobile **Settings** page.
  * You will likely *not* want the local users to have this permission.  If that is the case, then an Admin user needs to be configured to have this permission.
  * The Sustainable Solutions `Sussol` is hard-wired *not* to have this permission.  A special Sustainable Solutions user called `SussolMobile` can be set up to have this permission.

In the mSupply Central server:

  1. Log into the mobile store
  1. Go to File > Edit users
  1. Select the mobile user (whom you want to give permission to access Settings - remember, not the `Sussol` user :-)), double click it.  An edit user window will open.
  1. Go to **Permission (3)** tab and check the **View/edit preferences** permission on

[<img src="/_media/en:mobile:user_guide:settings_permission.png?w=800&amp;tok=52dca4" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:settings_permission.png?id=en%3Amobile%3Asetup%3Aserver_side%3Ausers)

Click **OK** to save it and again click **OK** to close **User list…** window.

Once these permissions are set, the **Settings** button will be visible the next time the user logs in to mSupply Mobile.
