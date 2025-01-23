+++
title = "Internal Orders"
description = "Requesting stock from your suppliers."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 42
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Internal Orders go by several other names in certain countries or systems:

- Requisitions
- Orders
- Report & Requisition
- R&R

Internal Orders are a way to support users in requesting new stock from another store.

## Viewing Internal Orders

If you would like to order some stock from your supplier:

1. Navigate to the `Replenishment` menu
2. Tap on `Internal Orders`

![Internal Order: nav](/docs/replenishment/images/intord_access.png)

You will see a list of all existing Internal Orders:

![Internal Order: list](/docs/replenishment/images/intord_list.png)

You can use the filters to filter the list by the name or status of the Internal Orders:

![Internal Order: filter](/docs/replenishment/images/intord_filter.png)

You can sort the list using the column headers:

1. Tap the column header of the column that you want to sort. The column is sorted in ascending order.
2. Tap the column header again and column will be sorted in the opposite order.

## Creating a new Internal Order

### Select a supplier

1. Click on the `New Order` button (top right corner):

![Internal Order: new order](/docs/replenishment/images/intord_newreqbutton.png)

2. A new window opens, inviting your to select a supplier:

![Internal Order: select supplier](/docs/replenishment/images/intord_selectsupplier2.png)

3. Select a Supplier by pressing on their name. You will be redirected to a window like this:

![Internal Order: newly created order](/docs/replenishment/images/intord_newintord.png)

### Defining Target MOS (Maximum MOS)

Additional information and configuration for the Internal Order can be found in the detail panel, which you can access by clicking the `More` button in the top right:

![MaxMOS](/docs/replenishment/images/intord_moreinfo.png)

Defining the Target MOS (Month of Stock) is critical to the calculation of the **Suggested Quantity**:

- There is an industry rule of thumb that the _Target MOS_ should be set to 3 times the ordering cycle
- The default _Target MOS_ is `3.0`, which is based on a monthly ordering cycle
- If for example, the ordering cycle was every two months, then _Target MOS_ should be set to 3 x 2 = `6.0`

<div class="imagetitle">
In the below example, we are setting our Target MOS to 3 Months.  
</div>

![MaxMOS](/docs/replenishment/images/intord_maxmos.png)

This can be done before or after adding items to your order.

### Adding a single item

Tap on `Add Item` to add a single item to your order. You will be redirected to
a new page.

![Internal Order: add item](/docs/replenishment/images/intord_additem2.png)

First select the item you want to add to your order. You can also type some or all of an item name (or code) to look for a specific item.

Once item is selected, you should see the following information on the page:

- **Item Name**
- **SOH**: Stock on Hand. How much stock the store currently has available
- **AMC**: Average Monthly Consumption. How much stock your store uses each month on average (based on a configurable number of months, default is set to 3 months)
- **Units/Packs toggle**: this allows you to switch between ordering in units or packs
- **Default pack size**: the default pack size of the item
- **Requested quantity**: the quantity of units that you request from your supplier
- **Default pack size**: the default pack size of the item
- **Suggested Quantity**: how much stock mSupply suggests that your order to reach your stock target quantity
- **Comments**: any comments you want to add to the order

You should also see the following charts if you click the bar graph icon next to
requested quantity:

![](/docs/replenishment/images/io_bar_graph_icon.png)

- **Target Quantity**: In this chart, you will see the following information:
  - The _Target Quantity_ for the item. This is calculated as: Target MOS x AMC.
  - Your current _Stock on Hand_ (in grey)
  - The _Suggested Order Quantity_ calculated by mSupply

<div class="imagetitle">
In the below example, our target quantity is 609 units which is the equivalent of 3 months of stock (3 x 203 = 609 units). Our stock on hand (in grey) is 269 so in order to reach my target, mSupply suggests to order 342 units (609 - 269). 
</div>

![Stock Distribution](/docs/replenishment/images/intord_charts_stockdistri.png)

<div class="imagetitle">
In the below example, the target quantity is 408 units. Since we already have 467 units in stock (in grey), the suggested quantity is zero. 
</div>

![Stock Distribution 2](/docs/replenishment/images/intord_charts_stockdistri2.png)

- **Consumption History (monthly)**: this chart shows the monthly consumption up to 12 months in the past (in grey), the current AMC (in dark grey), the projected consumption (in orange) and the moving average (blue line):

![Consumption](/docs/replenishment/images/intord_charts_consumption.png)

- **Stock Evolution**: this chart shows you your stock level for the last 30 days and your projected inventory for the next 30 days. The projected stock will be updated based on your inputs in the `Requested quantity` field:

![Stock Evolution](/docs/replenishment/images/intord_charts_stockevolution.png)

### Requesting a quantity in packs

If the item which you have selected has a default pack size configured (see the mSupply documentation on [editing units](https://docs.msupply.org.nz/items:adding_a_new_item#general_tab) for details on how to do this) then you will see a few additional elements on the 'Add item' window:

### Adding items using a master list

If your organisation is using Master Lists, you can add multiple items at once using your store's master lists. It is particularly useful when you have a lot of items in your order and you don't want to add them all one by one.

1. Tap on the `Add from master list` button
2. Select a master list
3. A dialog window opens asking you whether you want to add all of the items from this master list. Tap `OK` if you wish to proceed.

All the items of the master list are now listed in your order. If you had previously added single item, it will add items that are not already there.

Tap on an order line to change the **Requested Quantity** or tap on the `Use
Suggested Quantities` button to automatically copy the values in the **Suggested Quantity** column into the **Requested Quantity** column.

![Internal Order: add from master list](/docs/replenishment/images/intord_addfromml.gif)

<div class="note"> 
Master Lists are defined and assigned to stores at the central server level. You can only see the master lists that are visible to your store. 
<br>Also be aware that if you are using programs functionality, only master lists which are not part of a program can be selected.
<br> <br>
If you don't find the master list you are looking for and if you want to create a new one, please contact your administrator.
</div>

<div class="tip">
You can create Internal Orders from multiple master lists by repeating above actions with another master list. 
</div>

### Reading the Internal Order's list

When you add items (using a master list or not), the item is added to the order's table. The following information is provided for each order line:

| Column                   | Description                                                                                                                                        |
| :----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code**                 | Code of the item                                                                                                                                   |
| **Name**                 | Name of the item                                                                                                                                   |
| **Unit**                 | Unit of the item e.g. Tablet, Capsule, Vial                                                                                                        |
| **DPS**                  | Default pack size of the item                                                                                                                      |
| **SoH (Est. remaining)** | Stock on Hand: how much stock is currently available in your store for this store                                                                  |
| **AMC**                  | Average Monthly Consumption: how much stock your store uses each month on average (based on a configurable number of months, defaults to 3 months) |
| **Target Stock**         | This is the stock you are aiming for. Calculated as: AMC x Target MOS MOS                                                                          |
| **Suggested Quantity**   | How much stock mSupply suggests that your order. This is calculated as: (AMC x Target MOS) - SoH                                                   |
| **Requested**            | This is set to zero by default. This is the quantity of units you are ordering from your supplier.                                                 |

### Printing an Internal Order

When viewing a specific Internal Order, simply click the `Print` button which is on the top right of the page.
When printing, a PDF file is generated for you, which will then open in a new browser tab. This can then be printed using your browser by clicking print or using `control`+`P` (if using windows) or `cmd`+`P` keys on your keyboard (if using a mac).

![Print button](/docs/introduction/images/print_button.png)

This will either

- Show a menu of possible reports for you to select from before creating a PDF. This will happen if there are more than one report defined for the `Requisition` report type.
- Create a PDF immediately, if there is only one report to select from

![Print menu](/docs/replenishment/images/intord_print_menu.png)

### Sending an Internal Order

You will need the permission [Can confirm Internal Order as Sent](/docs/settings/permissions/) to be able to send an Internal Order:

1. Tap on the `Confirm Sent` button (bottom right corner)
2. A dialog window opens asking you whether you are sure to want to send the order. Tap on `OK` to proceed
3. Status of your order is now `SENT` and the order is no longer editable

<div class="warning">
Ensure that your order is correct before sending it to your supplier. Once `SENT`, no further changes can be made to the order. 
</div>

## Approving Internal Orders

### Remote approval process

Some stores may require their requisitions to be approved by specific users before they can be fulfilled. For a full description of this process refer to the mSupply [Remote Authorisation](https://docs.msupply.org.nz/other_stuff:remote_authorisation) documentation.

To do this:

- In the requesting store, enable the store preference `Include requisitions from this store in supplier's remote authorisation process`
- In the supplying store, enable the store preference `Use remote authorisation for response requisitions`

For further detail on configuring store preferences, refer to the [mSupply documentation](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab) on the topic.

When configured in this way, the requesting store will see an additional column in the Internal Order list, showing the approval status:

![Internal Order: approval status columns](/docs/replenishment/images/internal_order_list_with_approval.png)

And when viewing a specific Internal Order, there are columns showing the approved quantity, approved number of packs and a comment entered by the approver, if there is one:

![Internal Order detail with approval columns](/docs/replenishment/images/internal_order_detail_approval.png)

Similarly, the supplying store will have an additional column in the requisition list view showing the approval status :

![Internal Order detail with approval columns](/docs/distribution/images/requisition_list_approval.png)

And finally, a specific requisition will also have new columns, for the approved quantity and an approval comment, if one has been entered by the approver:

![Internal Order detail with approval columns](/docs/distribution/images/requisition_detail_approval.png)

### Local approval process

Another option for implementing an approval step for Internal Orders is to enable what is called 'local approval'. With this, you can allow only certain users to change the status of an Internal Order to `Sent`. To allow a user to change the status of an Internal Order to `Sent`, they require the permission `Can confirm Internal Order as Sent` to be enabled.

To set the permission, edit the user within mSupply and change to the `Open mSupply permissions` tab, shown below:

![Internal Order detail with approval comment](/docs/replenishment/images/mSupply_intord_permission.png)

Without this option checked, the user will not be able to update the Internal Order status to `Sent` and the order is unable to be processed.

On changing the status to `Sent`, the user's details are added to the comment field; this can be seen when viewing the Internal Order, in the detail panel:

![Internal Order detail with approval comment](/docs/replenishment/images/intord_approval_comment.png)

and is also shown to the approver in the remote authorisation web application if that is being used.

The additional text is of the form:

`Approved by [user's full name]. Email: [user's email address] and Phone Number: [user's phone number].`

These details are taken from the user, as configured in mSupply. Refer to the [Managing Users](https://docs.msupply.org.nz/admin:managing_users#details_tab) section on how to do this.
