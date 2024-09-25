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

![Internal Order: new order](/docs/replenishment/images/intord_newreqbutton.png)

2. If you have programs configured, you'll see a different modal to the usual one:

![Internal Order: new program order](/docs/programs/images/new_internal_order.png)

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

![Internal Order: program order](/docs/programs/images/internal_order_detail.png)

1. The `Add item` and `Add from master list` buttons are disabled. Items in a program based Internal Order are configured by the program.
2. A message explaining that you also cannot edit the target and reorder threshold MOS values on a program based Internal Order. These values are configured by the program.
3. Additional information telling you which program, order type and period this Internal Order is for. This detail panel can be opened by clicking the `More` button in the top right of the page.

### Requisitions

The list view has gained some additional columns, showing the program related data:

![Requisition: list](/docs/programs/images/requisition-list.png)

- **Program**: the name of the program this Internal Order was created for
- **Order type**: the name of the order type ( typically, a normal or emergency order )
- **Period**: the name of the period selected

And the detail view also has program information shown:

![Requisition: detail](/docs/programs/images/requisition-detail.png)
