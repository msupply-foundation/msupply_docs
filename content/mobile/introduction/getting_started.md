+++
title = "Getting Started"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 304
template = "mobile/page.html"

[extra]
lead = "Getting Started for mobile"
toc = true
top = false
+++

### Android device hardware requirements

#### Google Mobile Services (GMS)

  * There is a good chance that if your proposed device is not on [this list](https://storage.googleapis.com/play_public/supported_devices.html) of supported models, then it will not support [Google Mobile Services (GMS)](https://www.android.com/intl/en_au/gms/), mSupply Mobile and/or the [mobile device management software](https://en.wikipedia.org/wiki/Mobile_device_management) used to remotely manage the device.
  * Even if it is on this list, please make sure the model has been validated by Sustainable Solutions before procuring any significant quantities of the device.  Please contact Sustainable Solutions on [&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#64;&#109;&#115;&#117;&#112;&#112;&#108;&#121;&#46;&#111;&#114;&#103;&#46;&#110;&#122;](mailto:&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#64;&#109;&#115;&#117;&#112;&#112;&#108;&#121;&#46;&#111;&#114;&#103;&#46;&#110;&#122;) to see which models have been validated so far.

#### Android version

  * mSupply may be able to work on older versions of Android, but, for ease of management, **Android 6** is the lowest acceptable version.  Enrollment and management is even less error prone with **Android 9+**.
  * Android 9 was released in August 6, 2018.  Why would you be installing hardware that is already several years closer to it's end of service life?

#### Hardware

##### Minimum specifications

  * Minimum display size: **9.8 inches** (measured diagonally)   
  * Minimum display resolution: **768 × 1024 pixels**
  * Android Version: **6.0**

But, if the operator's eyesight may be poor, or you will ever be wanting to monitor a fridge at the facility for very little extra cost, consider the…

##### Recommended specification

If [mSupply Vaccine](/en:mobile:user_guide:vaccine) or mSupply ColdChain are to be used on the device at any point, the following are required minimum specifications:

  * Minimum display size: **10.1 inch** (measured diagonally)
  * Minimum display resolution: **800 x 1280 pixels**
  * Android Version: **8.1**

The device must also be compatible with MDM (Mobile Device Management) software and support google services.  Please contact [Sustainable Solutions](https://sussol.net/contact) or [mSupply Foundation](https://msupply.foundation/#contact) for details.  

##### Processor and RAM

These recommended specifications will allow mSupply Mobile to operate well on the device.

  * **1.5 Gb** RAM
  * Quad-core 1.3 GHz

#### How will it connect to the internet?

The most challenging aspect of any remote data recording solution is management of the internet connection.    It may be worth procuring devices that are **mobile data enabled (3G minimum)**, at least to allow future flexibility.  But that doesn't answer the harder questions:

  * Who is responsible for keeping the device connected?
  * Who pays for it?
  * What happens when the bill isn't paid?
  * What happens when a generous data cap is exceeded and the internet connection is down?  (Somebody may have removed the SIM from the device and placed it in another device…)

<div class="tip">
Most officers in charge of an mSupply Mobile device are capable of keeping their personal cellular mobile device connected to the internet, at least occasionally, which is all that mSupply Mobile needs.  An officer could be happy to receive a nominal monthly fee to [tether](https://en.wikipedia.org/wiki/Tethering) the mSupply Mobile device to their personal cellular device hotspot and data.  This fee might only be payable if the officer meets certain pre-agreed KPIs such as:
</div>

  * Ensuring device has connecting to the internet at least, say, once per week,
  * Conducting stocktakes
  * placing internal orders
  * processing supplier invoices
  * others …

Of course, such an arrangement would still require management…

### Configuration on the mSupply Server

Before using mSupply Mobile, the mSupply central server needs to be configured for it - refer to [the mSupply User Guide](https://docs.msupply.org.nz/faq:what_do_i_need_to_setup_msupply_mobile_on_a_tablet) for details.

<div class="note">

If you are upgrading an existing mSupply Mobile device to version 2.0.0, there are a few changes that need to be made to your mSupply Desktop/Server:

  * Upgrade to mSupply Server v3.83 or higher
  * Set Visibility for Supplying Stores (including main Supplying Store)
  * Add a new Supplier as facility (External Supplier) and make it visible in mobile store
  * Set all other mobile/desktop stores that current mobile store needs to interact with (send/receive Requisition, send/receive Invoices) as 'transfers' in store/synchroniser (this needs to be done by your mSupply team)

</div>


### Installation

You can download the latest version of mSupply Mobile from GitHub [here](https://github.com/openmsupply/mobile/releases)

### Connecting to the central server

After the mSupply Mobile is installed on your tablet and you've started it, you need to enter the 'site' credentials (user name and password) and the URL for the mSupply server that will hold the data generated by the tablet.

  * Be careful to enter the correct credentials here.  If you fail to enter it three times in a row, you will be locked out from trying again for 1 hour!
  * Android auto-correct may try to add a space after each word.  This will result in incorrect credentials being entered.

### Logging in

After the device has synced to the central server you will see the login screen:

![Choose language](/mobile/introduction/images/chooselanguage2.jpg)

#### Selecting the language

  * The first thing to do is to choose your preferred language by clicking **Language** at the bottom left of the screen. For example, if your first language is [Tetum](https://en.wikipedia.org/wiki/Tetum_language), then you're in luck! - see [below](/en:mobile:user_guide:getting_started#tetum).

![Choose language next](/mobile/introduction/images/chooselanguage3.png)

#### Logging in the user

  * Users need to be configured on the mSupply central server -refer to [Setting up the Users to access the store](https://docs.msupply.foundation/en:mobile:setup:server_side:users).

Once you have selected the language of your choice, enter the credentials (user name and password) for the store user and tap **Login**

![Login screen](/mobile/introduction/images/loginscreen.jpg)

  * Be careful to enter the correct credentials here.  If you fail to enter it three times in a row, you will be locked out from trying again for 1 hour!
  * Android auto-correct may try to add a space after each word.  This will result in incorrect credentials being entered.

After 3 minutes of not using the app (either it is in the background, or the app is asleep), you will be logged out.

### Main screen

This brings us to the main screen. We will be returning to the main screen a lot as we use mSupply Mobile, so it's important to understand the main functions. Let's go through them one by one.

![Login screen](/mobile/introduction/images/mainscreen.png)

#### Icon badges

[Icon badges](https://www.leanplum.com/blog/what-are-app-icon-badges/) (orange circle with a number) indicate there are unfinalised transactions requiring attention. Click a badge for a description. Badges will automatically disappear when there are no unfinalised transactions remaining.

![Mobile badges](/mobile/introduction/images/mobile_badges.png)

#### Sync

  * mSupply Mobile will attempt to sync to the Primary server at regular intervals.
  * The default sync interval is 10 minutes.
  * The interval between these attempts (the sync interval) can be configured to be from 1 minute to 10 minutes by [Editing the Sync Interval](/en:mobile:user_guide:mobile_settings#editing_the_sync_interval).

A link on the top right of the screen shows the **Sync Status**.

![Choose language](/mobile/introduction/images/syncstatus.jpg)

Clicking this link will take you to a page where you can choose to do a manual sync if you want to re-sync in-between the automatic syncs.  

![Syncing manually](/mobile/introduction/images/manualsync.jpg)

You can close this page by clicking the cross on the top right.

#### Settings

Users with the appropriate permissions can access the mobile **[Settings](/en:mobile:user_guide:mobile_settings)** on the bottom right of the screen.

![Choose language](/mobile/introduction/images/mobile_settings.png)

#### Logging out

To log out, click the **Log Out** button on the bottom left of the screen.

![Choose language](/mobile/introduction/images/mobile_logout.png)

#### Customers

The **Customers** area is for all the stock that goes OUT of your facility. Customers can be **other facilities** you supply, **doctors and nurses** doing outreach tours, or **individual patients**.

The **Customer Invoices** button shows a list of orders sent TO your customers and allows you to create new ones.

The **Customer Requisitions** button shows a list of orders placed BY customers requesting stock from your store. 


#### Suppliers

The **Suppliers** area shows orders that you have placed and received for **your own stock**. Usually, you will only have ONE supplier (a medical store or other healthcare facility) and this will be pre-programmed for you. 

The **Supplier Invoices** button shows a list of orders you have **received** or are waiting to receive.

The **Supplier Requisitions** button allows you to **place an order** and shows a list of orders you have already placed.

#### Stock

The **Stock** section is used to manage the stock in your store. 

The **Current Stock** button allows you to easily see how much stock you have on hand (*"How many paracetamol tablets do I have?"*), search for an individual item, or check expiry dates. 

The **Stocktakes** button allows you to do a stocktake on all items or a small selection of items and shows you a list of all previous stocktakes. You can also use this area to update the stock levels of an item when you realise there is a mistake.                     

### Tetum

And here is the main screen in Tetum language !
![Choose language](/mobile/introduction/images/tetum.jpg)





