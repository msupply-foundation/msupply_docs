+++
title = "Accounting Integration Options"
description = "Open mSupply Integration options for all Accounting Systems."
date = 2022-03-17
updated = 2025-02-20
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

## Can you do without an accounting system
If you have to have double-entry accounting and/or payroll, must keep your accounting system. (If no, can use only mSupply)
.

# Option one: mSupply handles inventory and invoicing, your accounting system handles Payments, Receipts and All accounting ledgers

#### Sales Invoices

These are done in mSupply. Once a month (or when the invoice is finalised) it is sent to your accounting system. The transaction total is recorded against a sales account (the individual items on the invoice are not sent to your accounting system). 

#### Purchase Invoice for inventory items

These are done in mSupply. Once a month (or when the invoice is finalised) it is sent to your accounting system. The transaction total is recorded against a stock purchases account (the individual items on the invoice are not sent to your accounting system). 

#### Purchase Invoices for non-inventory items

These are done in your accounting system - e.g. the purchase of electricity to run the warehouse

#### Inventory levels

The accounting system needs to be updated monthly with the inventory level in mSupply, which may have changed due to stocktakes adjusting the stock, or discards due to expiry etc.

This can be done by running a simple report in mSupply to show total stock value (or get it from the dashboard), and entering a journal in your accounting system for the difference between your accounting system’s recorded inventory level and the level reported in mSupply.

It is also possible to automate creation of this journal in Open mSupply, although it has not been done yet.

  

### Advantages

- Simple. We have warehouses using mSupply who have successfully used such a system for decades.
    
- Only customer and supplier codes need to be matched between the two systems, and these rarely change.
    
- Clear delineation between the two systems that can be described like this
    

- For anything that involves detailed inventory transactions and reporting, use mSupply
    
- For everything else, use your accounting system
    

### Disadvantages

- You can not see detailed inventory in your accounting system
    
- Inventory levels in your accounting system are only updated periodically (usually once a month), and balance sheets and other reports will only be accurate as of the date of the last inventory update.
    

# Option two: mSupply matches all inventory invoices exactly the same with your accounting system

#### Sales and Purchase invoices

Invoices are entered in mSupply, and each invoice is mirrored to your accounting system, including all the stock lines

#### Inventory adjustments

Any inventory adjustment done in mSupply is also mirrored to your accounting system, including the items and the 

### Advantages

- Can run inventory reports in your accounting system
    
- Inventory value stays up to date in your accounting system - no need for a journal to adjust inventory value
    

### Disadvantages

- Every item code needs to match in both systems (e.g. if a new item is added in mSupply it also needs to be added in your accounting system with the same item code
    
- More fragile integration - due to the above constraint, it is very easy to break the integration
    
- There are lots of edge cases such as item repacks and building kits which would be very expensive to model in both systems
    
- Requires lots of setup for items, account codes for various functions, as well as supplier/customer codes.

We recommend Option 1 as best for almost all systems in low resource countries.