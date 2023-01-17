+++
title = "Supplier Invoices"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 1
template = "mobile/page.html"

[extra]
lead = "Receiving Stock from suppliers"
toc = true
top = false
+++


Supplier Invoices will appear in your system automatically once they have been created by your Internal Supplier, either when the  [Supplying store processes your Supplier Requisition](/en:mobile:user_guide:ordering_and_receiving#supplying_store_processes_requisition), or if they **'push'** stock to your store and manually create a Customer Invoice (CI) in their store.

Only supplier invoices from **Internal Suppliers** (mSupply stores in your system) will appear automatically.  If you are receiving stock from an **External Supplier** (not an mSupply store), then a **Supplier Invoice** will not automatically appear.  You will need to create one - see [Create a new Supplier Invoice for an External Supplier](/en:mobile:user_guide:supplier_invoices#create_a_new_supplier_invoice_for_an_external_supplier).

Let's go through each step of processing a **Supplier Invoice** from an **Internal Supplier**.

### Open Supplier Invoices

Click on Supplier Invoices

![Custom invoices button on Navigator](/mobile/images/supplier_invoice.png)

A list of Supplier Invoices will appear.

You can use the **Status** column to check the processing status of each invoice.

  * **In Progress**:  You have not yet processed the stock in to your store.  It might not have even arrived yet!
  * **Finalised**:  You have processed the stock in to your store.  You can not edit this supplier invoice.

![Custom invoices button on Navigator](/mobile/images/supplier_invoice2.png)

If you are receiving stock from a supplier that is not an mSupply store, then you will need to create it manually - see [Create a new Supplier Invoice for a non-mSupply supplier](/en:mobile:user_guide:supplier_invoices#create_a_new_supplier_invoice_for_a_non-msupply_supplier).

### Edit the supplier invoice

Tap on the Supplier Invoice for the order you have received.  This will open the Supplier Invoice.

![Custom invoices button on Navigator](/mobile/images/edit_supplier_invoice.png)

The Supplier Invoice *should* match the stock you are receiving, but it may not.  Just as with paper invoices, it is very important that you check everything against the electronic invoice on mSupply Mobile when you order arrives.

Check each line on the supplier invoice in mSupply Mobile against what you have actually received.  If you have received a different quantity than what is displayed, or the batch or expiry details of the stock received are different to what appears in the supplier invoice, tap on the mismatching field(s) to adjust:

![Custom invoices button on Navigator](/mobile/images/edit_supplier_invoice2.png)

If there are lines in the supplier invoice that you did not receive, you are able to remove these lines from the invoice by selecting the radio button corresponding to the missing items and tapping **Remove** when prompted:

![Custom invoices button on Navigator](/mobile/images/edit_supplier_invoice3.png)

When you are satisfied that the Supplier Invoice matches the stock you have received, tap **Finalise** and then **Confirm**.  This will accept it into your stock. Your **Stock On Hand** numbers will automatically update!

### Create a new Supplier Invoice for an External Supplier

If you are receiving stock from a supplier that is not an mSupply store, then you will need to:

  1. Create a new Supplier Invoice by clicking on the **New Invoice** button
  1. Add the supplier you are wanting to receive stock from
  1. Add items to the Supplier Invoice and edit the quantities, batch and expiry details
  1. Once you are happy with the details, **Finalise** the Supplier Invoice
