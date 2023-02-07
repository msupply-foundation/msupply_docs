+++
title = "Ordering and Receiving"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 1
template = "mobile/page.html"

[extra]
lead = "Ordering and Receiving stock from suppliers"
toc = true
top = false
+++

In mSupply Mobile, incoming stock is handled differently depending on whether it is coming from a:

  * **Internal Supplier**:  Another store in your mSupply system
  * **External Supplier**:  A supplier that is *not* a store in your mSupply system.

### Stock coming from an Internal Supplier

#### Placing a Supplier Requisition

If your medical supply system is a **'Pull'** system, then the process of ordering stock from an **Internal Supplier** starts with creating a **Supplier Requisition** (internal order), either as a [General Order](/mobile/order_and_receive/supplier-requisitions/#current-supplier-requisitions) or a [Program Order](/en:mobile:user_guide:supplier_requisitions_program).

<div class="warning">

You can **ONLY** create Supplier Requisitions for **Internal Suppliers**.  You can **NOT** create Supplier Requisitions for **External Suppliers**.
  </div>

#### Supplying store processes requisition

After you've finalised your **Supplier Requisition**, that information will be sent to the **Internal Supplier** for processing.  The **Internal Supplier** should process your requisition into a **Customer Invoice** to your store.  As this **Customer Invoice** is finalised, you will see a corresponding **Supplier Invoice** in your store.  This is exactly like the hard-copy (paper) invoice you would usually receive with your order.  You may still continue to receive a paper invoice when your order arrives, but this electronic version in mSupply is the one that you will need to process.

<div class="tip">

  * An **Internal Supplier** can also **'Push'** stock to your store without any requisition from you.  In this case, you did not create a **Supplier Requisition**.  A [Supplier Invoice](https://docs.msupply.foundation/mobile/order_and_receive/supplier-invoices/#open-supplier-invoices) will just appear in your store and the stock will hopefully follow soon after.
  * The **Supplier Invoice** is processed in the same way, regardless of whether you created a **Supplier Requisition** or not.
  </div>

#### Processing the Supplier Invoice

Once the stock arrives, process the [Supplier Invoice](https://docs.msupply.foundation/mobile/order_and_receive/supplier-invoices/#open-supplier-invoices).

### Stock coming from an External Supplier

Stock coming from an **External Supplier** will come without any warning in mSupply.  You will not have created a **Supplier Requisition**, and there will be no **Supplier Invoice** waiting for you to process.  The first opportunity for you to tell mSupply about the stock will normally be when it arrives at your store.  When this happens, you will will need to [Create a new Supplier Invoice for an External Supplier](/mobile/order_and_receive/supplier-invoices/#create-a-new-supplier-invoice-for-an-external-supplier).

<div class="warning">

You can **ONLY** create Supplier Invoices for **External Suppliers**.  You can **NOT** create Supplier Invoices for **Internal Suppliers**.
  </div>



