+++
title = "Supplier Requisitions (Program Orders)"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01
updated = 2021-05-01
sort_by = "weight"
weight = 1
template = "mobile/page.html"

[extra]
toc = true
top = false 
+++



If you need to order stock from your supplier for a [program](https://docs.msupply.org.nz/items:programs) then you need to create a **Program Order**, which will automatically populate your requisition with items in the program.

### Click on Supplier Requisitions

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_requisitions.png)

When your store has access to at least one program, creating a Supplier Requisition will prompt you to choose from either a **Program Order** or a **General Order**.

### Click on Program Order

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_program_order.png)

### Select the Program, Supplier, Order Type and Period

This information must be completed **sequentially**. The arrow points to which step you are up to, and the tick shows which steps have been completed.

When selecting the **Order Type**, further details can be seen on the right:

  * **Maximum MOS:** maximum number of months' stock to be kept for each item, which will help determine the suggested quantities to order
  * **Threshold MOS:** items with number of months' stock *less* than this value will appear in the order by default
  * **Maximum orders per period:** maximum number of orders that can be placed in a given period
  * **Max items:** maximum number of items allowed to be ordered for an emergency order (an alert will appear if the maximum number of items is exceeded)

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_requisition_select_type.png)

When selecting the **Period**, further details can be seen on the right:

  * **Period dates** i.e. the interval of the period
  * **Number of requisitions already created** for the same period, supplier and order type

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_requisitions_type2.png)

### Click OK and review the requisition

The requisition is created and is populated with all program items. 

**Note that you cannot add additional items to a Program Requisition.**

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_review_requisitions.png)

Why are there are no items visible in this example?

  * The **Hide Over Stocked** button is selected by default, which hides all items that have stock over the threshold MOS.
  * All the stock on hand in this example is over the threshold MOS, so no items are visible.
  * When you click the **Show Over Stocked** button, all items that are over the threshold MOS appear.

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_review_requisitions2.png)

Note that the **Price** displayed in a Program Requisition is the price the supplier sells the item for.

### Entering quantities to order

By default, the suggested quantity for a program requisition will be set to the suggested quantity. If you have edited suggested quantities, the **Use Suggested Quantities** button will reset the requested quantities to their original values.

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_requisitions_entering_quantity.png)

If you want to manually change a requested quantity you can do so.

However, if you have [reasons configured on the mSupply server](https://docs.msupply.org.nz/preferences:options) you will also see a reasons column: 

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_requisitions_entering_quantity2.png)

You will have have to choose a reason whenever the requested quantity differs from the suggested quantity:

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_requisitions_entering_quantity3.png)

The reason is shown after you've chosen one:

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_requisitions_entering_quantity4.png)

If you tap on a reason, you'll be able to edit it in the same way you choose a new reason (above).

### Entering Regimen Data

Regimen data is "extra information" that you might need to collect on a periodic basis.
For instance, you might want to record the number of new TB cases each month, possibly broken down into males and females.

Tap the **Regimen data** button at the top-right of the requisition window:

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_requisition_regimen_data.png)

If [regimen data](https://docs.msupply.org.nz/items:programs) is necessary for the requisition, enter values and comments then close the screen.

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_requisition_regimen_data2.png)

### When you are completely sure that everything is correct...

Click the **Finalise** button, then **Confirm** and your order will go to the supply store. 

![Custom invoices button on Navigator](/mobile/introduction/images/supplier_requisition_finalise.png)

Even if you don't have internet at the time, it's ok! The order will send automatically when you do have internet later.          

Once your supplying store sends you the stock, they will create an invoice, and you will see it appear in mSupply mobile as a **Supplier Invoice**

[This chapter](/mobile/order_and_receive/supplier-invoices) tells you how to receive stock.
