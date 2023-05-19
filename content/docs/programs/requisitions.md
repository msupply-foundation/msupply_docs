+++
title = "Requisitions"
description = "Program based requisitions"
date = 2023-05-19T00:00:00+00:00
updated = 2023-05-19T00:00:00+00:00
draft = false
weight = 61
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Program based requisitions"
toc = true
top = false
+++

Within open mSupply you can manage internal orders by program. This involves using some special settings for master lists. In this method, a program is an extension to a master list. A program includes a standard list of items as well as:

- Order Types: defined categories setting the maximum number of orders and quantity of stock to be ordered per period
- Period Schedules: defined time intervals when orders can be placed; schedules and periods must be set up before creating programs
- Regimen Data: a defined list of additional information that may need to be provided by a customer when making a program requisition

Examples of items commonly managed by programs include Malaria, HIV and TB medicines and medical supplies.

The configuration changes needed when setting up a program are made on the central server. See the documentation for an explanation:
- [Creating a program](https://docs.msupply.org.nz/items:programs#creating_a_program)
- [Connecting a program to a store](https://docs.msupply.org.nz/items:programs#connecting_a_program_to_a_store)

## Internal Order list changes

When you have program requisitions configured, there are some additional columns shown in the internal order list view:

![Internal Order: list](/docs/programs/images/internal_order_list.png)

- Program shows - the name of the program this internal order is created for
- Order type - the name of the order type ( typically, a normal or emergency order )
- Period - the name of the period selected

## Creating a program internal order

Let's create a program based internal order. 

1. Click on the `New Order` button (top right corner): 

![Internal Order: new order](/docs/replenishment/images/intord_newreqbutton.png)

2. If you have programs configured, you'll see a different modal to the usual one:

![Internal Order: new program order](/docs/programs/images/new_internal_order.png)

Here, you can select

- Program
- Supplier
- Order Type
- Period

3. Only when you have selected all of the above, can you click `Create` and continue.

<div class="note">The program you select will affect which suppliers, order types and periods are available for selection</div>

## Differences when using program requisitions

### Internal Orders

There are several areas where you'll see additional information when using a program based requisition.

![Internal Order: program order](/docs/programs/images/internal_order_detail.png)

1. As the message says, you cannot edit the maximum or minimum MOS on a program based internal order. These values are configured by the program.
2. The message also says that you cannot add items, so the `Add item` and `Add from master list` buttons are disabled too
3. There is some additional information shown, telling you which program, order type and period this internal order is for

### Requisitions

The list view has gained some additional columns, showing the program related data:

![Requisition: list](/docs/programs/images/requisition-list.png)

And the detail view also has program information shown:

![Requisition: detail](/docs/programs/images/requisition-detail.png)
