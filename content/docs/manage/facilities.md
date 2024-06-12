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
lead = "The Facilities list is where you can view all stores, and manage their properties"
toc = true
top = false
+++

## Viewing Facilities

Choose `Manage` > `Facilities` in the navigation panel.

![goto: facilities](/docs/manage/images/goto_facilities.png)

You will be presented with a list of stores in your system.

<!-- TODO -->

![facility list](/docs/manage/images/facilities.png)

The list of Stores is divided into 5 columns:

| Column       | Description                      |
| :----------- | :------------------------------- |
| **Code**     | The code for the store           |
| **Name**     | Store name                       |
| **Supplier** | Whether this store is a supplier |
| **Customer** | Whether this store is a customer |
| **Donor**    | Whether this store is a donor    |

<div>
You will also see an icon like this (<img src="/docs/replenishment/images/is_msupplystoreicon.png" alt="Store" style="width:auto">) next to the store code - meaning this is an mSupply store.
</div>

The list can display a fixed number of stores per page. On the bottom left corner, you can see how many stores are currently displayed on your screen.

![Pagination: showing](/docs/distribution/images/os_list_showing.png)

If you have more stores than the current limit, you can navigate to the other pages by clicking on the page number or using the right of left arrows (bottom right corner).

![Pagination: navigating](/docs/distribution/images/os_list_pagenumbers.png)

You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Searching facilities

You can filter the list of facilities by name or by code. This can be useful if you're looking for one particular store!

In the search bar in the top left of your screen, type some (or all) of a store name or store code. The list will now contain all matching facilities:

<!-- TODO -->

![Facilities filter](/docs/manage/images/facilities_filter.gif)

## Editing store properties

To edit the properties of a store, click on it. This will open a new `Edit Facility` window.

<div class='tip'>
If nothing happens when you click on a store, that's because you have no store properties configured! To set these up, please contact support.
</div>

![Edit facility](/docs/manage/images/edit_facility.png)

From here, you can edit the store properties. Once you are happy with your changes:

- Click `OK` to save your changes and close the window
- Click `OK & Next` to save your changes and start editing the next store

OR: Click `Cancel` at any time to revert your changes and close the window

### Editing your store properties

Any store can view and edit their own properties. If properties have been configured, an additional `Edit` button will be visible in the app footer, next to your store name:

![Footer: store edit](/docs/manage/images/footer_store_edit.png)

Click the `Edit` button to open a new window, where you can edit the properties for your store.

<div class='note'>
Some properties can be disabled here. This means they are only editable on the Open mSupply Central Server.
</div>

![Edit own store](/docs/manage/images/edit_remote_store.png)

Once you are happy with your changes:

- Click `OK` to save your changes and close the window
- Click `OK & Next` to save your changes and start editing the next store

OR: Click `Cancel` at any time to revert your changes and close the window
