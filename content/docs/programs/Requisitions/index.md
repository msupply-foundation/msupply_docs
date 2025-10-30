+++
title = "Requisitions"
description = "Program based requisitions"
date = 2023-05-19
updated = 2023-05-19
draft = false
weight = 61
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Program based Requisitions"
toc = true
top = false
+++

You can manage Internal Orders by program within Open mSupply. This involves using some special settings for master lists. In this method, a program is an extension to a master list. A program includes a standard list of items as well as:

- **Order Types**: defined categories setting the maximum number of orders and quantity of stock to be ordered per period
- **Period Schedules**: defined time intervals when orders can be placed; schedules and periods must be set up before creating programs
- **Regimen Data**: a defined list of additional information that may need to be provided by a customer when making a program requisition

Examples of items commonly managed by programs include Malaria, HIV and TB medicines and medical supplies.

The configuration changes needed when setting up a program are made on the central server. See the documentation below for an explanation:

- [Creating a program](https://docs.msupply.org.nz/items:programs#creating_a_program)

## Creating a program Internal Order

Let's create a program based Internal Order.

1. Click on the `New Order` button (top right corner):

![Internal Order: new order](images/intord_newreqbutton.png)

2. If you have programs configured, you'll see a different modal to the usual one:

![Internal Order: new program order](images/new_internal_order.png)

Here, you can select the:

- Program
- Supplier
- Order Type
- Period

The programs and order period you see will be affected by the store tags and program preference. [Click here to find out how to connect a program to a store](https://docs.msupply.org.nz/items:programs#connecting_a_program_to_a_store).

3. Only when you have selected all of the above, can you click `Create` and continue.

<div class="note">The program you select will affect which suppliers, order types and periods are available for selection</div>

## Differences when using program requisitions

### Internal Orders

There are several areas where you'll see additional information when using a program based Internal Order.

![Internal Order: program order](images/internal_order_detail.png)

1. The `Add item` and `Add from master list` buttons are disabled. Items in a program based Internal Order are configured by the program.
2. A message explaining that you also cannot edit the target and reorder threshold MOS values on a program based Internal Order. These values are configured by the program.
3. Additional information telling you which program, order type and period this
   Internal Order is for. This detail panel can be opened by clicking the `More`
   button in the top right of the page.

#### Extra Requisition Fields

In Internal Orders, it is possible to display additional columns of data for
reporting and forcing purposes. These columns are calculated and are not
editable. To enable these columns you need to configure store preferences to
enable these extra columns as described in the [mSupply Desktop
documentation](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab).

![Show extra fields on requisitions preference](images/show_extra_fields_on_requisitions.png)

Enabling the preference will show the extra columns on the requisition list page:

<!-- TODO: Calculations (currently aren't calculated)  -->

| Column                    | Description                                                                                                  |
| :------------------------ | :----------------------------------------------------------------------------------------------------------- |
| **Initial stock on hand** | The customer's stock on hand at the start of the program period                                              |
| **Incoming**              | The customer's incoming stock in units for this item                                                         |
| **Outgoing**              | The customer's outgoing stock in units for this item                                                         |
| **Losses**                | Inventory Adjustment                                                                                         |
| **Additions**             | Inventory Adjustment                                                                                         |
| **Available**             | Initial stock on hand + incoming stock +/- inventory adjustment - outgoing stock                             |
| **Short Expiry**          | Sum of available stock for the item which has an expiry date after the program end date                      |
| **Days out of stock**     | (Target MOS \* AMC) - available stock                                                                        |
| **AMC**                   | The customer's average monthly consumption for this item                                                     |
| **MOS**                   | Months of stock for the item                                                                                 |
| **Reason**                | A reason will be provided if their is a difference between the suggested quantity and the requested quantity |

The line edit page will also contain the extra columns.

![Program Requisition Line Edit](images/internal_order_extra_fields_edit.png)

If your store has the store preference `Use consumption &
stock from customers for internal orders` enabled

![Use consumption & stock from customers for internal orders](images/consumption_data_pref.png)

Then you will see an extra table underneath the input fields which shows the
customer's data based on their program requisitions for that period.

![](images/internal_order_item_info.png)

The table has 6 columns:

| Column          | Description                                                                                                                                  |
| :-------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**        | The customer's name or the current store name                                                                                                |
| **AMC**         | The customer's average monthly consumption. For the currently logged in store, this will be the sum of all customer AMC                      |
| **Unit Qty**    | Stock on hand at the end of the program period                                                                                               |
| **Adjustments** | Calculated using the following calculation for the item. Delivered inbound shipments - picked outbound shipments +- any inventory adjuments. |
| **Outgoing**    | Quantity of item in picked outbound shipments                                                                                                |
| **Date range**  | The end date of the program period                                                                                                           |

### Requisitions

The list view has gained some additional columns, showing the program related data:

![Requisition: list](images/requisition-list.png)

- **Program**: the name of the program this Internal Order was created for
- **Order type**: the name of the order type ( typically, a normal or emergency order )
- **Period**: the name of the period selected

#### Manual Program Requisitions

Program Requisitions can also be created manually. This would typically be for customers who do not use mSupply, or in exceptional circumstances for other mSupply stores. It is **strongly** advised not to do this for customers that are mSupply Stores, unless their device is destroyed or mSupply is otherwise not operable. The risk is creating duplicate requisitions and indicator data for periods and schedules if users at the customer store are also entering the same data into mSupply.

See the configuration steps above, and also the [Customer
tag](https://docs.msupply.org.nz/names:adding_and_editing#tags_tab)
documentation to find out how to set up programs and add tags to customers.

On the Requisitions page, click on the `New Requisition` button (top right
corner).

![New Requisition](images/add_requisition_button.png)

If you have programs set up, you'll see a different modal to the usual one:

![New Program Requisition](images/add_program_requisition.png)

From the `Program` tab, you can create a Program Requisition by selecting the:

- Program
- Customer
- Order Type
- Period

Only when you have selected all of the above, can you click `Create`.

You will now be redirected to the Requisition detail page. The lines will be
pre-populated with the items from the program; this means that you cannot add
items manually to the Requisition.

#### Extra Requisition Fields

In manual requisitions it is possible to collect many additional columns of data
for reporting and forecasting purposes. You will need the `Show extra fields on
requisitions` store preference. See above for details.

Enabling the preference will show the extra columns on the requisition list page:

| Column                    | Description                                                                                                  |
| :------------------------ | :----------------------------------------------------------------------------------------------------------- |
| **Initial stock on hand** | The customer's stock on hand at the start of the program period                                              |
| **Incoming**              | The customer's incoming stock in units for this item                                                         |
| **Outgoing**              | The customer's outgoing stock in units for this item                                                         |
| **Losses**                | Inventory Adjustment                                                                                         |
| **Additions**             | Inventory Adjustment                                                                                         |
| **Available**             | Initial stock on hand + incoming stock +/- inventory adjustment - outgoing stock                             |
| **Short Expiry**          | Sum of available stock for the item which has an expiry date after the program end date                      |
| **Days out of stock**     | (Target MOS \* AMC) - available stock                                                                        |
| **AMC**                   | The customer's average monthly consumption for this item                                                     |
| **MOS**                   | Months of stock for the item                                                                                 |
| **Reason**                | A reason will be provided if there is a difference between the suggested quantity and the requested quantity |

The line edit page will also contain the extra columns as well.

![Program Requisition Line Edit](images/program_requisition_line_edit.png)

An additional section will be visible in the side panel showing the program
information.

![Requisition: detail](images/requisition-detail.png)
