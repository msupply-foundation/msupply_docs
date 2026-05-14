+++
title = "Stores"
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

The Stores list is available only on the [Open mSupply Central Server](/docs/getting-started/central-server). This is where you can view all stores, and manage their properties.

## Viewing Stores

Choose `Manage` > `Stores` in the navigation panel.

You will be presented with a list of stores in your system.

![store list](images/facilities.png)

The list of Stores is divided into 5 columns:

| Column       | Description                      |
| :----------- | :------------------------------- |
| **Code**     | The code for the store           |
| **Name**     | Store name                       |
| **Supplier** | Whether this store is a supplier |
| **Customer** | Whether this store is a customer |
| **Donor**    | Whether this store is a donor    |

<div class="tip">
You can tell if a customer is also using Open mSupply in their store if they have an icon like this <img src="images/is_msupplystoreicon.png" alt="Store" style="width:auto"> next to the code. 
</div>

1. The list can display a fixed number of stores per page. On the bottom left corner, you can see how many stores are currently displayed on your screen.
2. If you have more stores than the current limit, you can navigate to the other pages by clicking on the page number or using the right of left arrows (bottom right corner).
3. You can also select a different number of rows to show per page using the option at the bottom right of the page.

### Searching stores

You can filter the list of stores by name or by code. This can be useful if you're looking for one particular store!

In the search bar in the top left of your screen, type some (or all) of a store name or store code. The list will now contain all matching stores:

![Stores filter](images/facilities_filter.png)

## Store Preferences

Store preferences allow the configuration of Open mSupply for a specific store. A short description of each preference is given below, with further detail in their related areas of the documentation.

To configure preferences for a store, select that store from the list - a new window will open.

![Store preferences](images/store_preferences.png)

Toggle the preferences on or off as required, and close when you are finished.

### Available Preferences

<table class="docs">
    <thead>
        <tr>
            <th>Preference Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Show indicative price on internal orders and requisitions</td>
            <td>When this preference is enabled, an Indicative Price column is displayed on internal orders (in the requesting store) and on the corresponding requisitions (in the supplying store).</td>
        </tr>
        <tr>
            <td>Order in packs</td>
            <td>Defaults the Internal Order/Requisition representation to packs instead of units</td>
        </tr>
        <tr>
            <td>Use procurement functionality</td>
            <td>Enables procurement functionality including <code>Purchase Orders</code> and
                <code>External inbound shipments</code></td>
        </tr>
        <tr>
            <td>Sort available batches by VVM status then expiry</td>
            <td>Auto-allocation in Outbound Shipments and Prescriptions uses VVM status first, then FEFO</td>
        </tr>
        <tr>
            <td>Use simplified mobile UI</td>
            <td>Reduces number of fields and elements for tablets - see the <a
                    href="/docs/settings/simplified-ui">simplified tablet UI</a> page for details. Requires legacy store
                preference.</td>
        </tr>
        <tr>
            <td>Disable manual returns</td>
            <td>When this preference is enabled, the option to create supplier or customer returns manually is removed. Returns can only be created from an existing shipment.</td>
        </tr>
        <tr>
            <td>Auto finalise fulfilled requisitions</td>
            <td>Turn this on to have customer requisitions close automatically when all requested quantities have been
                shipped on outbound shipments.</td>
        </tr>
        <tr>
            <td>Automatically verify inbound shipments</td>
            <td>When enabled and a supplier sends an outbound shipment to the store, the automatically created inbound
                shipment will be in the <code>Verified</code> status and stock will be available.</td>
        </tr>
        <tr>
            <td>Manage VVM status for stock</td>
            <td>Enables a <code>VVM status</code> field on stock</td>
        </tr>
        <tr>
            <td>Manage vaccines in doses</td>
            <td>View stock levels and transactions for vaccine items in doses, rather than units or packs</td>
        </tr>
        <tr>
            <td>Can create Internal Order from a Requisition</td>
            <td>Allows users to create an Internal Order from a Requisition</td>
        </tr>
        <tr>
            <td>Select destination store for an Internal Order</td>
            <td>Allows users to select the destination store when creating an Internal Order from a Requisition to
                change the destination of the supplier's Outbound Shipment</td>
        </tr>
        <tr>
            <td>Inbound shipment (external) lines must be authorised</td>
            <td>When this preference is enabled, lines on inbound shipments from external suppliers (i.e. suppliers who are not also Open mSupply stores) cannot be confirmed and added to your stock until they have been authorised by a user with the appropriate permission.</td>
        </tr>
        <tr>
            <td>Number of months to check for consumption when calculating out of stock products</td>
            <td>Sets how many past months are checked for item usage. If an item was used but is now out of stock, it
                will be flagged as out of stock on the Dashboard.</td>
        </tr>
        <tr>
            <td>Number of months threshold to show low stock alerts for products</td>
            <td>Flags products as low stock if their months of stock are below the set threshold.</td>
        </tr>
        <tr>
            <td>Number of months threshold to show overstock alerts for products</td>
            <td>Flags products as overstock if their months of stock are above the set threshold.</td>
        </tr>
        <tr>
            <td colspan="2" class="parent">Batches expiring in between days</td>
        </tr>
        <tr>
            <td class="child">◦ First threshold for expiring items (days)</td>
            <td>Days before expiry to start flagging as "expiring soon." Used in the <code>Expiring Stock</code> widget.
                Note that the widget isn't displayed if both of these threshold settings are unconfigured.</td>
        </tr>
        <tr>
            <td class="child">◦ Second threshold for expiring items (days)</td>
            <td>Days before expiry to stop flagging as "expiring soon." Used in Expiring Stock widget.</td>
        </tr>
        <tr>
            <td>Custom colour of page footer</td>
            <td>The colour of the page footer can be changed to a store-specific value</td>
        </tr>
        <tr>
            <td colspan="2" class="parent">Warn users when creating internal order if there is no recent stocktake</td>
        </tr>
        <tr>
            <td class="child">Enable</td>
            <td>Enable this feature</td>
        </tr>
        <tr>
            <td class="child">Max age</td>
            <td>Days since the last stocktake with the required minimum items has been taken</td>
        </tr>
        <tr>
            <td class="child">Min items</td>
            <td>A minimum number of items that the stocktake must contain to be considered - you may wish to ignore
                stocktakes which only have one or two items in them, for example. </td>
            </tr,>
        <tr>
            <td>Invoice status options</td>
            <td>Configure which invoice statuses are available for Outbound shipments / supplier returns, and inbound
                shipments / customer return.</td>
        </tr>
    </tbody>
</table>
When selecting a store custom colour, you can enter a HEX colour value directly or use the colour picker:

![Colour picker](images/store_colour_picker.png)

<div class='note'>
Most store preferences are still managed through the Legacy mSupply central server (see the <a href="/docs/settings/configuration/#store-preferences">list of preferences</a>). Only new store preferences for Open mSupply are configured on Open mSupply central server for now. All store preferences will be migrated to Open mSupply in a future version.
</div>

## Store Properties

To edit the properties of a store in the list, click on it. This will open a new `Edit Store` window.

![Facility Properties tab showing no properties defined](images/facilities-no-properties-defined.png)

From this window, you can edit the store properties.

![Edit facility](images/edit_properties.png)

- Click `OK` to save your changes and close the window
- Click `OK & Next` to save your changes and start editing the next store
- Click `Cancel` at any time to revert your changes and close the window

### Editing your store properties

Any store can view and edit their own properties. If properties have been configured, an additional `Edit` button will be visible in the app footer, next to your store name:

![Footer: store edit](images/footer_store_edit.png)

Click the `Edit` button to open a new window, where you can edit the properties for your store.

<div class='note'>
Some properties can be disabled here. This means they are only editable on the Open mSupply Central Server.
</div>

![Edit own store](images/edit_remote_store.png)

Once you are happy with your changes, click `OK` to save and close the window.

Click `Cancel` at any time to revert your changes and close the window.

## Permissions & Restrictions

Stores are only visible on the [Open mSupply Central Server](/docs/getting-started/central-server).

To Edit stores centrally you need the `Can modify central data` permission, enabled in the [omSupply Permissions Tab](https://docs.msupply.org.nz/admin:managing_users?s[]=permission#omsupply_permissions_tab) on your Central Store.

![Can Modify Central Data Permission](images/can_modify_central.png)
