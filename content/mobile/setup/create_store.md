+++
title = "Create the Store"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 315
template = "mobile/page.html"

[extra]
lead = "Server Set up: Create the Store"
toc = true
top = false
+++

This step is best carried out using the [Sync site wizard](https://docs.msupply.org.nz/synchronisation:site_wizard).  These instructions are retained here for reference only.

After the sync sites have been set up, there are three approaches to creating and configuring the store that will be operated on that site.

  * **[Manually create a store](/en:mobile:setup:server_side:create_store#manually_create_store)** - this method is suitable if you are creating only a handful of stores
  * **[Create a store for an existing customer](/en:mobile:setup:server_side:create_store#create_store_for_existing_customer)**
  * **[Create stores by cloning another sync store](/en:mobile:setup:server_side:create_store#create_stores_by_cloning_another_sync_store_using_sync_clone_sync_site)** - if you're creating a larger number of stores, then it is more appropriate for the mSupply Support Team to use footrunner code

### Manually create store

  1. On mSupply desktop go to **Special > Stores > New Store**[<img src="/_media/mobile:mob2_001.jpg?w=600&amp;tok=f4f059" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/mobile:mob2_001.jpg?id=en%3Amobile%3Asetup%3Aserver_side%3Acreate_store)[<img src="/_media/mobile:newstore.jpg" class="mediacenter" loading="lazy" alt="" />](/_detail/mobile:newstore.jpg?id=en%3Amobile%3Asetup%3Aserver_side%3Acreate_store)
  1. Enter the Store Code and the Store Name[<img src="/_media/mobile:mob2_002.jpg" class="mediacenter" loading="lazy" alt="" />](/_detail/mobile:mob2_002.jpg?id=en%3Amobile%3Asetup%3Aserver_side%3Acreate_store)
  * The Store Code can not include spaces
  * The Store Name needs to be something that users will recognise.

 `Mobile Store 1` is not likely to be a good name to use. ;-)
  1. [Configure items visibility](/en:mobile:setup:server_side:config#making_items_visible_in_the_new_store_using_master_list_s)
  1. [Configure synchronisation settings](/en:mobile:setup:server_side:config#setting_up_the_correct_synchronisation_settings)
  1. [Configure store visibility to other stores](/en:mobile:setup:server_side:config#make_the_store_visible_to_other_stores)

### Create a store for an existing customer

This method is only useful if you already have a customer that you want to convert to a store.

We must first **clone** the existing customer then **merge** the new store with the existing customer.

#### Cloning the existing customer to a store

  1. The mSupply Support Team will use the footrunner code  [&#039;&#039;store_create_from_name&#039;&#039;](https://sussol.net/wiki/doku.php/msupply:specifications:admin:sync#store_create_from_name) to **clone** the original store.  We will need to provide:
    1. `Name **ID**` (not name **Code** :-() to create the store for (must not be blank or already a store)
    1. Store mode for new store (one of `store`, `dispensary` or `report`).  Almost always, this should be `store`
    1. `Sync ID` for site on which the new store will be Active (optional; if left blank, will default to the current site ID)
  1. [Configure items visibility](/en:mobile:setup:server_side:config#making_items_visible_in_the_new_store_using_master_list_s)
  1. [Configure synchronisation settings](/en:mobile:setup:server_side:config#setting_up_the_correct_synchronisation_settings)
  1. [Configure store visibility to other stores](/en:mobile:setup:server_side:config#make_the_store_visible_to_other_stores)

#### Merging the new store with the existing customer

Using the mSupply Desktop User Guide [merge the new store name with the existing customer name](https://docs.msupply.org.nz/names:merging_names).  There is some footrunner code that can facilitate this for multiple sites.

**Before merging** all unfinalised Customer Invoices from supplying stores to the existing customer must be finalised.  On a system with supplying stores on multiple sync sites, this can take a long time.  Start early, and if possible, ask the supplying stores to refrain from creating any new Customer Invoices until the merging is done…

If you try to do the merge before finalising all customer invoices, you will get an error message, and the merge will not proceed
[<img src="/_media/en:mobile:pasted:20200116-222550.png?w=500&amp;tok=a7ad8f" class="mediacenter" loading="lazy" alt="" width="500" />](/_detail/en:mobile:pasted:20200116-222550.png?id=en%3Amobile%3Asetup%3Aserver_side%3Acreate_store)

### Create store by cloning another sync store using sync_clone_sync_site

First [manually create and appropriately configure a single store](/en:mobile:setup:server_side:create_store#manually_create_store).

Make ***sure*** the relevant [sync sites have been created](/en:mobile:setup:server_side:create_sync_site) and then, for **EACH** store:

  1. The mSupply Support Team will use the footrunner code `[sync_clone_sync_site](https://sussol.net/wiki/doku.php/msupply:specifications:admin:sync#sync_clone_sync_site)` to clone the original store.  We will need:
    1. `Sync ID` for source sync site

    1. `Sync ID` for clone sync site

    1. `Sync version` (v1 for desktop, v3 for mobile)

    1. Decision on whether the cloned store will have 'group' store visibility (visible to all other stores with the same supplying store) or not

    1. Decision on whether to also clone locations, transactions, stock, requisitions.  (almost always **NO**!)

    1. new **store** code *and* name for each cloned store

    1. new **user** name *and* password for the each cloned store's default user

  1. If there are actually existing customers for each of these stores, you will then need to [merge the existing customer name with the new store](https://docs.msupply.org.nz/names:merging_names)

  1. The new store will have the same item visibility configuration as the original store.  Review, and if necessary, [configure items visibility](/en:mobile:setup:server_side:config#making_items_visible_in_the_new_store_using_master_list_s)

  1. The new store will have the correct 'basic' sync settings.  Review, and if necessary, [configure synchronisation settings](/en:mobile:setup:server_side:config#setting_up_the_correct_synchronisation_settings)

  1. The new store will have the correct 'basic' store visibility settings, including, if you have selected it, 'group' store visibility.  Review, and if necessary, [configure store visibility to other stores](/en:mobile:setup:server_side:config#make_the_store_visible_to_other_stores)


