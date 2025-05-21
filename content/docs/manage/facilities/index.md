+++
title = "Facilities"
description = "Manage all stores"
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The Facilities list is available only on the [Open mSupply Central Server](/docs/getting_started/central). This is where you can view all stores, and manage their properties.

## Viewing Facilities

Choose `Manage` > `Facilities` in the navigation panel.

![goto: facilities](/docs/manage/images/goto_facilities.png)

You will be presented with a list of stores in your system.

![facility list](/docs/manage/images/facilities.png)

The list of Stores is divided into 5 columns:

| Column       | Description                      |
| :----------- | :------------------------------- |
| **Code**     | The code for the store           |
| **Name**     | Store name                       |
| **Supplier** | Whether this store is a supplier |
| **Customer** | Whether this store is a customer |
| **Donor**    | Whether this store is a donor    |

<div class="tip">
You can tell if a customer is also using Open mSupply in their store if they have an icon like this <img src="/docs/replenishment/images/is_msupplystoreicon.png" alt="Store" style="width:auto"> next to the code. 
</div>

The list can display a fixed number of stores per page. On the bottom left corner, you can see how many stores are currently displayed on your screen.

![Pagination: showing](../../images/list_showing.png)

If you have more stores than the current limit, you can navigate to the other pages by clicking on the page number or using the right of left arrows (bottom right corner).

![Pagination: navigating](../../images/list_pagenumbers.png)

You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](../../images/rows-per-page-select.png)

### Searching facilities

You can filter the list of facilities by name or by code. This can be useful if you're looking for one particular store!

In the search bar in the top left of your screen, type some (or all) of a store name or store code. The list will now contain all matching facilities:

![Facilities filter](/docs/manage/images/facilities_filter.png)

## Editing store preferences

Store Preferences are used to configure functionality for a particular Open mSupply store.

To edit a store’s properties, click that store in the list. This will open a new `Edit Facility` window.

From this window, you can edit the store properties.

![Edit facility](/docs/manage/images/edit_facility_preferences.png)

You will see the list of available store preferences. Any changes will be saved automatically.

- Click `OK` to save your changes and close the window
- Click `OK & Next` to save your changes and start editing the next store

### Available store preferences

- Manage VVM status for stock
- Sort available batches by VVM status then expiry
- Use simplified mobile UI

<div class='note'>
Note that some facilities are not stores (they do not use mSupply). You can only configure preferences for stores.
Most store preferences are still managed through Legacy central server. Only new store preferences for Open mSupply systems are configured on Open mSupply central server for now. These will be consolidated in a future version.
</div>

## Editing store properties

To edit the properties of a store in the list, click on it. This will open a new `Edit Facility` window.

Select the tab `Properties` to see the store properties.

<div class='tip'>
If you see a message like this when you open the Edit Facility window, that means you have no store properties configured! To set these up, please contact support or <a href='/docs/settings/configuration/#gaps-store-properties'>enable GAPS Properties</a>.

![Facilities: no properties](/docs/manage/images/facilities-no-properties-defined.png)

</div>

From this window, you can edit the store properties.

![Edit facility](/docs/manage/images/edit_facility_properties.png)

- Click `OK` to save your changes and close the window
- Click `OK & Next` to save your changes and start editing the next store
- Click `Cancel` at any time to revert your changes and close the window

### Editing your store properties

Any store can view and edit their own properties. If properties have been configured, an additional `Edit` button will be visible in the app footer, next to your store name:

![Footer: store edit](/docs/manage/images/footer_store_edit.png)

Click the `Edit` button to open a new window, and select the tab `Properties` where you can edit the properties for your store.

<div class='note'>
Some properties can be disabled here. This means they are only editable on the Open mSupply Central Server.
The `Preferences` tab is visible on Remote Sites, but is only editable form the Open mSupply Central Server.
</div>

![Edit own store](/docs/manage/images/edit_remote_store.png)

Once you are happy with your changes, click `OK` to save and close the window.

Click `Cancel` at any time to revert your changes and close the window.

## Permissions & Restrictions

Facilities are only visible on the [Open mSupply Central Server](/docs/getting_started/central).

To Edit facilities centrally you need the `Can modify central data` permission, enabled in the [omSupply Permissions Tab](https://docs.msupply.org.nz/admin:managing_users?s[]=permission#omsupply_permissions_tab) on your Central Store.

![Can Modify Central Data Permission](/docs/programs/images/can_modify_central.png)
