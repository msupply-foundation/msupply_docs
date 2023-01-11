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
----## Supplier Requisitions (Program Orders)

If you need to order stock from your supplier for a [program](https://docs.msupply.org.nz/items:programs) then you need to create a **Program Order**, which will automatically populate your requisition with items in the program.

### Click on Supplier Requisitions

[<img src="/_media/mobile:015supplierrequisitions.jpg?w=600&amp;tok=33682e" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/mobile:015supplierrequisitions.jpg?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions_program)

When your store has access to at least one program, creating a Supplier Requisition will prompt you to choose from either a **Program Order** or a **General Order**.

### Click on Program Order

[<img src="/_media/en:mobile:user_guide:requisition_program_tab.png?w=600&amp;tok=2ab156" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:requisition_program_tab.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions_program)

### Select the Program, Supplier, Order Type and Period

This information must be completed **sequentially**. The arrow points to which step you are up to, and the tick shows which steps have been completed.

When selecting the **Order Type**, further details can be seen on the right:

  * **Maximum MOS:** maximum number of months' stock to be kept for each item, which will help determine the suggested quantities to order
  * **Threshold MOS:** items with number of months' stock *less* than this value will appear in the order by default
  * **Maximum orders per period:** maximum number of orders that can be placed in a given period
  * **Max items:** maximum number of items allowed to be ordered for an emergency order (an alert will appear if the maximum number of items is exceeded)

[<img src="/_media/en:mobile:user_guide:requisition_program_order_type.png?w=600&amp;tok=43b2fa" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:requisition_program_order_type.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions_program)

When selecting the **Period**, further details can be seen on the right:

  * **Period dates** i.e. the interval of the period
  * **Number of requisitions already created** for the same period, supplier and order type

[<img src="/_media/en:mobile:user_guide:requisition_program_period.png?w=600&amp;tok=96e3d5" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:requisition_program_period.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions_program)

### Click OK and review the requisition

The requisition is created and is populated with all program items. 

**Note that you cannot add additional items to a Program Requisition.**

[<img src="/_media/en:mobile:user_guide:requisition_program_hide_overstocked.png?w=600&amp;tok=a89cf2" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:requisition_program_hide_overstocked.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions_program)

Why are there are no items visible in this example?

  * The **Hide Over Stocked** button is selected by default, which hides all items that have stock over the threshold MOS.
  * All the stock on hand in this example is over the threshold MOS, so no items are visible.
  * When you click the **Show Over Stocked** button, all items that are over the threshold MOS appear.

[<img src="/_media/en:mobile:user_guide:requisition_program_show_overstocked.png?w=600&amp;tok=252ca7" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:requisition_program_show_overstocked.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions_program)

Note that the **Price** displayed in a Program Requisition is the price the supplier sells the item for.

### Entering quantities to order

By default, the suggested quantity for a program requisition will be set to the suggested quantity. If you have edited suggested quantities, the **Use Suggested Quantities** button will reset the requested quantities to their original values.

[<img src="/_media/en:mobile:user_guide:requisition_program_suggested_requested.png?w=600&amp;tok=71ceec" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:requisition_program_suggested_requested.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions_program)

If you want to manually change a requested quantity you can do so.

However, if you have [reasons configured on the mSupply server](https://docs.msupply.org.nz/preferences:options) you will also see a reasons column, 

[<img src="/_media/en:mobile:user_guide:pasted:20200312-040317.png?w=800&amp;tok=86b368" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:pasted:20200312-040317.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions_program)

You will have have to choose a reason whenever the requested quantity differs from the suggested quantity:

[<img src="/_media/en:mobile:user_guide:pasted:20200312-040433.png?w=800&amp;tok=7c28dd" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:pasted:20200312-040433.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions_program)

The reason is shown after you've chosen one:

[<img src="/_media/en:mobile:user_guide:pasted:20200312-040518.png?w=800&amp;tok=150540" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:pasted:20200312-040518.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions_program)

If you tap on a reason, you'll be able to edit it in the same way you choose a new reason (above).

### Entering Regimen Data

Regimen data is "extra information" that you might need to collect on a periodic basis.
For instance, you might want to record the number of new TB cases each month, possibly broken down into males and females.

Tap the **Regimen data** button at the top-right of the requisition window:

[<img src="/_media/en:mobile:user_guide:requisition_program_regimen_data.png?w=800&amp;tok=7f24d1" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:requisition_program_regimen_data.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions_program)

If [regimen data](https://docs.msupply.org.nz/items:programs) is necessary for the requisition, enter values and comments then close the screen.

[<img src="/_media/en:mobile:user_guide:requisition_program_regimen_data_details.png?w=800&amp;tok=887c09" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:requisition_program_regimen_data_details.png?id=en%3Amobile%3Auser_guide%3Asupplier_requisitions_program)

### When you are completely sure that everything is correct...

Click the **Finalise** button, then **Confirm** and your order will go to the supply store. 
<img src="/_media/mobile:finalise.png" class="mediacenter" loading="lazy" alt="" />

Even if you don't have internet at the time, it's ok! The order will send automatically when you do have internet later.          

Once your supplying store sends you the stock, they will create an invoice, and you will see it appear in mSupply mobile as a **Supplier Invoice**

[This chapter](/en:mobile:user_guide:supplier_invoices) tells you how to receive stock.

|  *  Previous:  **[Supplier Requisitions (General Orders)](/en:mobile:user_guide:supplier_requisitions)** | | Next: **[Supplier Invoices](/en:mobile:user_guide:supplier_invoices)** *  

