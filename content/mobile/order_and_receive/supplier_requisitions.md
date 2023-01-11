+++
title = "Introduction"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 1
template = "mobile/page.html"

[extra]
lead = "Welcome to mSupply Mobile!"
toc = true
top = false
+++

[<img src="/_media/banner_mobile_userguide.png?w=600&amp;tok=9b9def" class="media" loading="lazy" title="mSupply Mobile User Guide menu" alt="mSupply Mobile User Guide menu" width="600" />](/en:mobile:user_guide)
----## Supplier Requisitions (General Orders)

If you would like to order some stock from your supplier, tap on **Supplier Requisitions**. 

[<img src="/_media/en:mobile:user_guide:pasted:20210201-214456.png?w=600&amp;tok=05d412" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210201-214456.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions)

### Current Supplier Requisitions

The Supplier Requisition window will start by displaying **Current** requisitions.  

[<img src="/_media/en:mobile:user_guide:pasted:20210201-214525.png?w=600&amp;tok=388b51" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210201-214525.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions)

These are the requisitions that are **In Progress** (see the **Status** column).  These are supplier requisitions that you have not yet sent off to your supplying store.  You can tap on any **In Progress** requisitions to open and continue work.

**In Progress** Supplier Requisitions in mSupply Mobile are the same as mSupply Desktop Internal Orders with status = `sg`.

 The orange badge above **Supplier Requisitions** on the home page tells you if there are any unfinalised supplier requisitions - in the screenshots above, you can see that there is one unfinalised supplier requisition.

### Past Supplier Requisitions

To view past Supplier Requisitions, tap the **Past** tab.  

[<img src="/_media/en:mobile:user_guide:pasted:20210201-214600.png?w=600&amp;tok=57bd58" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210201-214600.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions)

The list of past requisitions will all have a **Status** of **Finalised**. You can tap on any row to view a finalised requisition.  However, no further changes can be made to finalised requisitions.

**Finalised** Supplier Requisitions in mSupply Mobile are the same as mSupply Desktop Internal Orders with status = `fn`.

### New Supplier Requisition

If you wish to create a new requisition, tap on **New Requisition**.

[<img src="/_media/en:mobile:user_guide:pasted:20210201-215333.png?w=600&amp;tok=bcffff" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210201-215333.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions)

### Adding items to a Supplier Requisition

#### Small Orders

If you only have a few items, tap **New Item**. This is the best option for small orders.

[<img src="/_media/en:mobile:user_guide:pasted:20210201-220006.png?w=600&amp;tok=0f1102" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210201-220006.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions)

Start typing to search for the item.

[<img src="/_media/en:mobile:user_guide:pasted:20210201-215756.png?w=600&amp;tok=e6cc0c" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210201-215756.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions)

In this case, we need to purchase **Ibuprofen 200mg tablets** so we select this item. 
[<img src="/_media/en:mobile:user_guide:pasted:20210202-013508.png?w=600&amp;tok=c27261" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210202-013508.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions)

When you select an item, it will be added to the requisition. The following information is provided about the item:

  * **Item Code** and **Item Name**: as per your mSupply item list details
  * **Current Stock**: how much stock currently available in your facility
  * **Monthly Use**: how much stock your facility uses each month on average (based on a configurable number of months (refer [Store Preferences tab](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab)), but defaults to **3**).
  * **Suggested Quantity**: how much stock mSupply Mobile suggests that you order.  This is calculated as:
    * **Monthly Use** x **Max MOS** - **Current Stock**
    * So, for the above example for Ibuprofen 200mg tablets,  **Suggested Quantity** = (**453** x **2**) - **80** = **827**

What should **Max MOS** be set to?

Max MOS = Lead time + Order cycle + Buffer stock

  * Lead time:  The time between creating the requisition and receiving the stock.  For most facilities using mSupply Mobile, we can hope that this will be no more than **1** month
  * Order cycle:  This is the frequency of ordering.  If it is every month, this will be **1**, if it is once per quarter, then this will be **3**.
  * Buffer stock:  This is the safety margin of stock that the facility *plans* for.  The safety margin accounts for things such as an order being missed, or delivery delayed.  A common approach is to set this to *twice* the Order cycle.

So, if we have:

  * Lead time = **1**
  * Order cycle = **1**
  * Buffer stock = **2** x **1** = **2**

Then:

  * Max MOS = **1** + **1** + **2** = 4

  *** Requested Quantity**: this is set to zero by default. You can do either of the following:
    * Accept the **Suggested Quantities** by tapping on the **Use Suggested Quantities** button.  This populates all cells.
    * Change the values manually by tapping in the cell and changing the number.  You can also do this after accepting the **Suggested Quantities** by tapping on the **Use Suggested Quantities** button.

#### Larger Orders

If you have a lot of items to order (for example, when you are placing your main order), it can be slow to add them one by one.

To add a lot of items at once, tap `Add Master List Items`. 
[<img src="/_media/en:mobile:user_guide:pasted:20210201-223040.png?w=600&amp;tok=d4ad8c" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210201-223040.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions)

Select one or more master lists by tapping on the check box next to the master list (the row will turn orange once selected). Only master lists visible to your store are shown. In this example, there is only one master list available. Once you have made your selection, tap `Done`.

[<img src="/_media/en:mobile:user_guide:pasted:20210201-223157.png?w=600&amp;tok=a7e39a" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210201-223157.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions)

The items on the selected master list(s) will then automatically appear in the supplier requisition.

[<img src="/_media/en:mobile:user_guide:pasted:20210201-223319.png?w=600&amp;tok=da506a" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210201-223319.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions)

The columns are the same as above for adding **New Item**.  

### Use Suggested Quantities

If you tap **Use Suggested Quantities** on the requisition header, mSupply Mobile will automatically copy the values in the **Suggested Quantity** column into the **Requested Quantity** column.
[<img src="/_media/en:mobile:user_guide:pasted:20210202-010348.png?w=600&amp;tok=ffc6dd" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210202-010348.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions)

Please note, when you tap **Use Suggested Quantities**, this will overwrite any value that had previously been entered in the **Requested Quantity** column.  However, you can still manually overwrite the amount of stock requested for each item afterward.

### Create Automatic Order

If you tap **Create Automatic Order** on the requisition header, mSupply Mobile will automatically create a supplier requisition with all items stocked at your facility (from all Master Lists) that require stock.  That is, any item at your facility that has a suggested quantity greater than zero will be listed. The **Requested Quantity** column will also be filled with the suggested quantity value.  

[<img src="/_media/en:mobile:user_guide:pasted:20210202-011547.png?w=600&amp;tok=b80d18" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210202-011547.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions)

Once again, you can still check the amount of stock requested for each item and change if required.

### Finalising a Supplier Requisition

Tap the **Finalise** button, then **Confirm** and your order will go to the supply store. 
<img src="/_media/mobile:finalise.png" class="mediacenter" loading="lazy" alt="" />

Even if you don't have a current internet connection, it's ok! The order will send automatically once your device is able to connect to the internet.          

Remember:

A **Supplier Requisition** is an order that you have placed with your supplier. 

A **Supplier Invoice** is a record of what your supplier has actually sent you.

These are not always the same, as your supplier might not have enough stock to fill your requisition, or they might have sent you some extra stock. When stock arrives at your facility, you should check it off against the **Supplier Invoice**. 

[This chapter](/en:mobile:user_guide:supplier_invoices) tells you how to receive stock.
----

|  *  Previous:  **[Ordering and Receiving stock from suppliers](/en:mobile:user_guide:ordering_and_receiving)** | | Next: **[Supplier Requisitions (Program Orders)](/en:mobile:user_guide:supplier_requisitions_program)** *  

