+++
title = "Customer Requisitions"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 6
template = "mobile/page.html"

[extra]
lead = "Ordering from a Supplying Store"
toc = true
top = false
+++


When a customer order stocks from you, they create a Supplier Requisition in their system. This will appear as a Customer Requisition in your system. 

Customer Requisitions can ONLY be created by an mSupply store customer.  They can not be manually created in the Supplying store.

On the home screen, an orange badge on the Customer Requisitions button indicates how many pending Customer Requisitions you have, if any (in this example, there is one pending Customer Requisition). 

Tap on the **Customer Requisitions** button to review the Customer Requisitions. 

[<img src="/_media/en:mobile:user_guide:pasted:20210224-032745.png?w=600&amp;tok=bd48eb" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210224-032745.png?id=en%3Amobile%3Auser_guide%3Acustomer_requisitions)

**Current** Customer Requisitions are displayed by default. You can review finalised requisitions by tapping on **Past**.

Tap on the Customer Requisition you want to review (in this example, we are going to tap on the Requisition ID 7). 

[<img src="/_media/en:mobile:user_guide:pasted:20210224-035407.png?w=600&amp;tok=9a9b6a" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210224-035407.png?id=en%3Amobile%3Auser_guide%3Acustomer_requisitions)

You can now review the Customer Requisition before finalising it.

[<img src="/_media/en:mobile:user_guide:pasted:20210224-042632.png?w=600&amp;tok=5fa9a9" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210224-042632.png?id=en%3Amobile%3Auser_guide%3Acustomer_requisitions)

  * **Max MOS:** The number of months worth of stock to supply
  * **Current Stock:** this will be auto-filled with your current quantity of stock for this item. 
  * **Their Stock:** this will be auto-filled your customer current quantity of stock for this item. 
  * **Monthly Use:** calculated as *average monthly consumption=(outgoing stock*average number of days a month)/(days in period-days out of stock).
  * **Suggested Quantity:** calculated as *suggested quantity=(monthly consumption*months to supply)-stock on hand*.
  * **Requested Quantity:** this will be auto-filled by the quantity requested by the customer.
  * **Supply this Invoice:** editable cell for the current time period.  You can also use the auto-fill buttons in the header:
  * **Use Requested Quantities:** auto-fills the supply this invoice column for all items with the value from the requested quantity column.
  * **Use Suggested Quantities:** auto-fills the supply this invoice column for all items with the value from the suggested quantity column.

You can use either of the above options or you can manually enter a quantity in the column **Supply this invoice**.

 Selecting either of the auto-fill buttons will overwrite all values in the supply this invoice column.  

When you are completely sure that everything is correct, tap the **Finalise** button, then **Confirm**. 

Finalising the requisition will also generate a finalised [customer invoice](/en:mobile:user_guide:customer_inv).

[<img src="/_media/en:mobile:user_guide:pasted:20210224-045053.png?w=600&amp;tok=8e6512" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210224-045053.png?id=en%3Amobile%3Auser_guide%3Acustomer_requisitions)

[<img src="/_media/en:mobile:user_guide:pasted:20210224-045210.png?w=600&amp;tok=2de2cc" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210224-045210.png?id=en%3Amobile%3Auser_guide%3Acustomer_requisitions)



