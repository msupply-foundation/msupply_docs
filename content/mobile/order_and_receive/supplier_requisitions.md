+++
title = "Supplier Requisitions"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01
updated = 2021-05-01
sort_by = "weight"
weight = 1
template = "mobile/page.html"

[extra]
lead = "Supplier Requisitions (General Orders)"
toc = true
top = false
+++

If you would like to order some stock from your supplier, tap on **Supplier Requisitions**.

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_requisitions_GO.png)

### Current Supplier Requisitions

The Supplier Requisition window will start by displaying **Current** requisitions.

![Custom invoices button on Navigator](/mobile/introduction/images/current_supplier_requisitions_GO.png)

These are the requisitions that are **In Progress** (see the **Status** column). These are supplier requisitions that you have not yet sent off to your supplying store. You can tap on any **In Progress** requisitions to open and continue work.

<div class="tip">

**In Progress** Supplier Requisitions in mSupply Mobile are the same as mSupply Desktop Internal Orders with status = `sg`.

</div>
<div class="note">

The orange badge above **Supplier Requisitions** on the home page tells you if there are any unfinalised supplier requisitions - in the screenshots above, you can see that there is one unfinalised supplier requisition.

</div>

### Past Supplier Requisitions

To view past Supplier Requisitions, tap the **Past** tab.

![Custom invoices button on Navigator](/mobile/introduction/images/past_supplier_requisitions.png)

The list of past requisitions will all have a **Status** of **Finalised**. You can tap on any row to view a finalised requisition. However, no further changes can be made to finalised requisitions.

<div class="tip">

**Finalised** Supplier Requisitions in mSupply Mobile are the same as mSupply Desktop Internal Orders with status = `fn`.

</div>

### New Supplier Requisition

If you wish to create a new requisition, tap on **New Requisition**.

![Custom invoices button on Navigator](/mobile/introduction/images/new_supplier_requisitions.png)

### Adding items to a Supplier Requisition

#### Small Orders

If you only have a few items, tap **New Item**. This is the best option for small orders.

![Custom invoices button on Navigator](/mobile/introduction/images/addding_items_requisition.png)

Start typing to search for the item.

![Custom invoices button on Navigator](/mobile/introduction/images/adding_items_search.png)

In this case, we need to purchase **Ibuprofen 200mg tablets** so we select this item.

![Custom invoices button on Navigator](/mobile/introduction/images/adding_items_search2.png)

When you select an item, it will be added to the requisition. The following information is provided about the item:

- **Item Code** and **Item Name**: as per your mSupply item list details
- **Current Stock**: how much stock currently available in your facility
- **Monthly Use**: how much stock your facility uses each month on average (based on a configurable number of months (refer [Store Preferences tab](/mobile/setup/config/#other-preferences), but defaults to **3**).
- **Suggested Quantity**: how much stock mSupply Mobile suggests that you order. This is calculated as:
  - **Monthly Use** x **Max MOS** - **Current Stock**
  - So, for the above example for Ibuprofen 200mg tablets, **Suggested Quantity** = (**453** x **2**) - **80** = **827**

<div class="tip">

What should **Max MOS** be set to?

Max MOS = Lead time + Order cycle + Buffer stock

- Lead time: The time between creating the requisition and receiving the stock. For most facilities using mSupply Mobile, we can hope that this will be no more than **1** month
- Order cycle: This is the frequency of ordering. If it is every month, this will be **1**, if it is once per quarter, then this will be **3**.
- Buffer stock: This is the safety margin of stock that the facility _plans_ for. The safety margin accounts for things such as an order being missed, or delivery delayed. A common approach is to set this to _twice_ the Order cycle.

So, if we have:

- Lead time = **1**
- Order cycle = **1**
- Buffer stock = **2** x **1** = **2**

Then:

- Max MOS = **1** + **1** + **2** = 4

  </div>

- **Requested Quantity**: This is set to zero by default. You can do either of the following:
  - Accept the **Suggested Quantities** by tapping on the **Use Suggested Quantities** button. This populates all cells.
  - Change the values manually by tapping in the cell and changing the number. You can also do this after accepting the **Suggested Quantities** by tapping on the **Use Suggested Quantities** button.

#### Larger Orders

If you have a lot of items to order (for example, when you are placing your main order), it can be slow to add them one by one.

To add a lot of items at once, tap **Add Master List Items**.

![Custom invoices button on Navigator](/mobile/introduction/images/requisitions_add_larger_order.png)

Select one or more master lists by tapping on the check box next to the master list (the row will turn orange once selected). Only master lists visible to your store are shown. In this example, there is only one master list available. Once you have made your selection, tap **Done**.

![Custom invoices button on Navigator](/mobile/introduction/images/requisitions_add_larger_order2.png)

The items on the selected master list(s) will then automatically appear in the supplier requisition.

![Custom invoices button on Navigator](/mobile/introduction/images/requisitions_add_larger_order3.png)

The columns are the same as above for adding **New Item**.

### Use Suggested Quantities

If you tap **Use Suggested Quantities** on the requisition header, mSupply Mobile will automatically copy the values in the **Suggested Quantity** column into the **Requested Quantity** column.

![Custom invoices button on Navigator](/mobile/introduction/images/requisition_suggested_quantities.png)

<div class="tip">
Please note, when you tap **Use Suggested Quantities**, this will overwrite any value that had previously been entered in the **Requested Quantity** column.  However, you can still manually overwrite the amount of stock requested for each item afterward.
</div>

### Create Automatic Order

If you tap **Create Automatic Order** on the requisition header, mSupply Mobile will automatically create a supplier requisition with all items stocked at your facility (from all Master Lists) that require stock. That is, any item at your facility that has a suggested quantity greater than zero will be listed. The **Requested Quantity** column will also be filled with the suggested quantity value.

![Custom invoices button on Navigator](/mobile/introduction/images/requisitions_automatic_order.png)

Once again, you can still check the amount of stock requested for each item and change if required.

### Finalising a Supplier Requisition

Tap the **Finalise** button, then **Confirm** and your order will go to the supply store.

![Custom invoices button on Navigator](/mobile/introduction/images/requisitions_final.png)

Even if you don't have a current internet connection, it's ok! The order will send automatically once your device is able to connect to the internet.

<div class="tip">

Remember:

A **Supplier Requisition** is an order that you have placed with your supplier.

A **Supplier Invoice** is a record of what your supplier has actually sent you.

These are not always the same, as your supplier might not have enough stock to fill your requisition, or they might have sent you some extra stock. When stock arrives at your facility, you should check it off against the **Supplier Invoice**.

</div>
