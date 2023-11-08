+++
title = "Current Road Map"
description = "Open mSupply Road Map."
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

This road map will be updated about once every six weeks.
It only covers our immediate committed work stream. Our planned feature list is much larger.

### Road map
{% mermaid ()%}
gantt
 title Open mSupply Road Map 2023
 dateFormat YY-MM-DD
 axisFormat %B
 section Version 1.1.11
  Barcode scanning :t1-1-12-1,23-04-10, 15d
  Program based requisitions :t1-1-12-2,23-03-15, 30d
  Remote authorisation :t1-1-12-2,23-04-15, 7d
 section Version 1.1.12
  Barcode scanning :t1-1-12-1,23-04-30, 15d
 section Version 1.1.15
  Repacks :t1-1-2,23-05-01, 35d
  Programs feature RC1 :t1-1-3,23-02-01, 30d
  Android stabilisation :t1-1-4,23-02-01, 25d
 section Version 1.2
  Preferences: t1-2-3, after t1-1-2, 28d
  Patient programs feature: t1-2-2, after t1-1-3, 150d
 section Version 1.3
  Basic dispensing: t1-3-1, 23-06-01, 85d
  Dispensing : milestone, m2, after t2-0-1, 
section Version 1.4
  Dispensing updates: t1-4-1, 23-06-01, 85d
section Version 1.5
  Cold chain integration :t1-5-1, after t1-4-1, 58d
  Multi unit item: t1-5-2, 23-08-15, 120d
section Version 1.6
  Reporting phase 1: t1-6-2, after t1-5-1, 14d
  Front-end plugin framework :t1-6-1, 23-09-01, 40d
section Version 1.7
  Cold chain equipment :t1-7-1, after t1-5-1, 60d
section Version 1.8
  Customer returns: t1-8-1, after t1-7-1, 32d
  Supplier returns: t1-8-2, after t1-7-1, 32d
{% end %} 


### Planned features

| Area    | Transaction    | Feature / Capability     | 
|-----------------------------------------------------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| QUANTIFICATION  | Demand Planning   | Rules-based calculation of estimated product volume requirement X by distribution tier and user-defined time periods | 
| QUANTIFICATION  | Supply Planning   |   | 
| QUANTIFICATION  | Demand Planning   | Manually edit forecasts     | 
| PROCUREMENT   | Tender/Request for quotation    | Purchaser: create a new tender   | 
| PROCUREMENT   | Tender/Request for quotation    | Purchaser: publish tender to a list of suppliers  | 
| PROCUREMENT   | Tender/Request for quotation    | Purchaser: create electronic request for quotation (EDI 840)   | 
| PROCUREMENT   | Tender/Request for quotation    | Purchaser: create benchmark prices  | 
| PROCUREMENT   | Tender/Request for quotation    | Suppliers: can upload their response in Open mSupply (web portal)  | 
| PROCUREMENT   | Tender/Request for quotation    | Purchaser: manually receive supplier's responses/quotations    | 
| PROCUREMENT   | Tender/Request for quotation    | Purchaser: automatically receive supplier's responses/quotations (web portal)   | 
| PROCUREMENT   | Tender/Request for quotation    | Purchaser: receive an electronic response to a request for quotation (EDI 843 / PEPPOL)    | 
| PROCUREMENT   | Tender/Request for quotation    | Purchasers: evaluation of received quotations   | 
| PROCUREMENT   | Tender/Request for quotation    | Purchasers: select preferred suppliers (awarding)  | 
| PROCUREMENT   | Tender/Request for quotation    | Contracts and Grants management   | 
| PROCUREMENT   | Purchase Orders   | Create PO from a tender     | 
| PROCUREMENT   | Purchase Orders   | Create Calculated PO     | 
| PROCUREMENT   | Purchase Orders   | Create Blank PO   | 
| PROCUREMENT   | Purchase Orders   | Create an electronic Purchase Order (EDI 850)   | 
| PROCUREMENT   | Purchase Orders   | Add items from master list    | 
| PROCUREMENT   | Purchase Orders   | PO categories   | 
| PROCUREMENT   | Purchase Orders   | PO line attributes  | 
| PROCUREMENT   | Vendor Management  | Create/View/Edit Vendors    | 
| PROCUREMENT   | Advanced Shipping Notice | Create a manual ASN from a PO   | 
| PROCUREMENT   | Advanced Shipping Notice | Receive an electronic ASN (EDI 856)  | 
| PROCUREMENT   | Good Receipts   | Print a good receipt form (pdf, csv) from an inbound shipment (when VERIFIED status is confirmed)  | 
| PROCUREMENT   | Payments | Print a supplier invoice form (pdf, csv) from an inbound shipment (when VERIFIED status is confirmed) | 
| PROCUREMENT   | Payments | Record payments made to suppliers (from a supplier invoice)    | 
| PROCUREMENT   | Manage templates   | Ability to maintain templates   | 
| PROCUREMENT   | Good receipt to verify stock on POs  | Create Goods Receipt / Inbound Shipment     | 
| PROCUREMENT   | Good receipt to verify stock on POs  | Add lines from a PO to an Inbound Shipment    | 
| PROCUREMENT   | Purchase Orders   | All approvers can access system to approve procurement forms   | 
| PROCUREMENT   | Add notes and process waivers   | Ability to document notes to file and procurement process waivers  | 
| PROCUREMENT   | Referencing    | Facilitate 3-way matching for vendor payments (PO, GRN, invoice)  | 
| PROCUREMENT   | Purchase Orders   | Notify PO change in status to different users or when the full PO is not fulfilled  | 
| PROCUREMENT   | Matching information  | Procurement and inventory modules communicate data on received goods, POs, and master lists with each other    | 
| PROCUREMENT   | Generate Delivery note | Generate Delivery note and Waybill/Packing List   | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Display any difference between ordered (req or PO) quantities and notified quantities | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Notify appropriate parties of discrepancies    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Display the storage requirements based on quantity shipped gross volume | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Display amount of storage space available by type  | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Flag if insufficient storage space by type    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Barcode scanning for goods receiving     | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Flag discrepancies compared to the shipment received     | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Record damage, discrepancy, batch mismatch, indicator, and variation information for individual line items    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Report damages and discrepancies to appropriate individuals    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Assign an operator to an Inbound Shipment for putting away received stock    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Putaway app: load the inbound shipment's items list and instructions for putaway.  | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Display storage conditions for items (eg. temperature controlled)  | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Display default storage location for each item   | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Propose space/positions for each stock item based on define rules (eg. current space availability, based on ABC category)    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Print pallet/shelf tag specifying status of goods, if appropriate  | 
| INVENTORY MANAGEMENT    | Locations    | Define storage locations hierarchy  | 
| INVENTORY MANAGEMENT    | Locations    | Define storage conditions (cold chain, volume, item restrictions, use restrictions, etc...)    | 
| INVENTORY MANAGEMENT    | Locations    | Record temperatures for storage locations (see category COLD CHAIN)  | 
| INVENTORY MANAGEMENT    | Locations    | Record frozen conditions status   | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Record VVM status  | 
| INVENTORY MANAGEMENT    | Items - Master data  | Set temperature threshold conditions per product, as appropriate  | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Alert conditions outside threshold  | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Track lots and expiry dates    | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Transfer stock from one location to another    | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Display and transmit alerts and notifications for pending expiries  | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Display and transmit alerts and notifications for stock outs, overstock, understock  | 
| INVENTORY MANAGEMENT    | Items - Master data  | Flag items as hazardous, as appropriate     | 
| INVENTORY MANAGEMENT    | Stocktake    | Filter the stock to be included: by item attributes (category, department, expiry date, etc...)   | 
| INVENTORY MANAGEMENT    | Stocktake    | Print stocktake sheets (CSV format)  | 
| INVENTORY MANAGEMENT    | Stocktake    | Stocktake app: load the stocktake sheet on a mobile device    | 
| INVENTORY MANAGEMENT    | Stocktake    | Stocktake app: use a barcode scanner/mobile device camera to select the item the operator is counting | 
| INVENTORY MANAGEMENT    | Stocktake    | Barcode scanning for stocktaking  | 
| INVENTORY MANAGEMENT    | Stocktake    | Cycle counting   | 
| INVENTORY MANAGEMENT    | Kits  |   | 
| INVENTORY MANAGEMENT    | Inventory Adjustments |   | 
| INVENTORY MANAGEMENT    | Pickface replenishments |   | 
| INVENTORY MANAGEMENT    | Labour Management   | Create/edit warehouse operators   | 
| DISPATCH   | Outbound Shipment  | Create a pick slip from an allocated outbound shipment     | 
| DISPATCH   | Outbound Shipment  | Pick slip: Display current location(s) for requisitioned items   | 
| DISPATCH   | Outbound Shipment  | Pick slip: create pick slip sorted by storage locations     | 
| DISPATCH   | Outbound Shipment  | Pick slip: Display stock expiry date     | 
| DISPATCH   | Outbound Shipment  | Pick slip app: load a pick slip on a mobile device.  | 
| DISPATCH   | Outbound Shipment  | Pack Order    | 
| DISPATCH   | Outbound Shipment  | Pack Order: Box / cartonisation   | 
| DISPATCH   | Outbound Shipment  | Print documents for delivery: packing list, customer invoice, goods received note  | 
| TRANSPORT   | Transport order/request | Draft transport order     | 
| TRANSPORT   | Transport order/request | Assign one or multiple "picked" outbound shipments to transport order (same trip or location)   | 
| TRANSPORT   | Transport order/request | Determine Payload, Volume, and Dimensions    | 
| TRANSPORT   | Transport order/request | Select Transportation Mode and Type  | 
| TRANSPORT   | Transport order/request | Determine temperature control requirements    | 
| TRANSPORT   | Transport order/request | Confirm transport order     | 
| TRANSPORT   | Transport order/request | Schedule transport resources   | 
| TRANSPORT   | Transport order/request | Record/Display delivery instructions     | 
| TRANSPORT   | Transport order/request | Record/Display tracking number, vehicle, driver   | 
| TRANSPORT   | Transport order/request | Confirm outbound shipments have been loaded    | 
| TRANSPORT   | Transport order/request | Track location and update ETA   | 
| TRANSPORT   | Transport order/request | Record transport history (location, temperature)  | 
| TRANSPORT   | Transport order/request | Confirm delivery / print/send proof of delivery   | 
| TRANSPORT   | Carrier | Create/edit Carriers     | 
| TRANSPORT   | Route | Create/edit Routes  | 
| TRANSPORT   | Fleet Management   |   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Suggest order quantities based on patient records / registry data  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | estimate stock needs based on aggregating requisitions by intermediate levels   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | estimate stock needs based on target populations  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | estimate stock needs quantities based on statistical forecasts   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | estimate stock needs point based on user-defined criteria    | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display current stock levels (SOH) at all relevant levels    | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display expiry dates for on-hand stock     | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display lead time for order fulfilment     | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display item cost at time requisition is generated  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Calculate order cost at time requisition is generated     | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Intuitive requisition template with pull-down menus  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Requested items can be routed for storage release or purchase   | 
| PER-PATIENT DISPENSING    | Dispensing    | Record dispensed medicines to an individual patient  | 
| PER-PATIENT DISPENSING    | Prescription    | Abbreviations   | 
| PER-PATIENT DISPENSING    | Prescription    | Drug Interactions Group     | 
| PER-PATIENT DISPENSING    | Prescription    | Payments and receipt / cash register     | 
| PER-PATIENT DISPENSING    | Prescription    | Create/edit patients     | 
| PER-PATIENT DISPENSING    | Prescription    | Create/edit prescribers     | 
| PER-PATIENT DISPENSING    | Prescription    | Repeats     | 
| COLD CHAIN   | Temperature monitoring | Display and transmits alerts for temperature breach (home screen dashboard), assign one or several temperature sensors to a storage location, define threshold per item | 
| COLD CHAIN   | Temperature monitoring | Sync of temperature records to the server to feed mSupply dashboard (via Cold Chain app)    | 
| COLD CHAIN   | Temperature monitoring | Integration with Berlinger temperature loggers and fridge tab   | 
| SYNC    | Sync Carry over   | https://github.com/openmsupply/open-msupply/issues/608     | 
| OVERALL SYSTEM  | User permission   | Build in variable user access   | 
| OVERALL SYSTEM  | Currency | Ability to support several currency and their exchange rate    | 
| OVERALL SYSTEM  | Any  | Upload scanned documents    | 
| OVERALL SYSTEM  | Any  | Ability to store contracts and Goods Received Note (GRN) in the system | 
| OVERALL SYSTEM  | Any  | Add notifications when expected levels are not met |
| DASHBOARDS   | View data on dashboards | Reports on stock consumption   | 
| DISPATCH   | Outbound Shipment  | Send a notification of approved outbound shipment  | 
| DISPATCH   | Outbound Shipment  | Approval system of outbound shipment     | 
| TRANSPORT   | Vehicle data sheet  | Record for each vehicle with key parameters (VIN, model, plate, fuel type, model year, reg. data & number, insurance date & policy number, price, etc.) | 
| TRANSPORT   | Reporting    | Track key monthly vehicle data (# of days vehicle in use and under repair, km driven, odometer reading, fuel cost, litres of fuel consumed)    | 
| TRANSPORT   | Reporting    | "Track key monthly generator data (running hours, maintenance costs, fuel consumed) | 
| TRANSPORT   | Reporting    | "Track repairs per vehicle and generator (type, date, cost, spare parts & consumables used)    | 
| TRANSPORT   | Interoperability   | Can be integrated with vehicle tracking hardware to capture km travelled | 
| TRANSPORT   | General | Send notifications when key documents are soon to expire (insurance, registration, etc.)    | 
| TENDER    | General | Manage competitive bidding process  | 
| TENDER    | General | maintain fixed price list for preferred vendors   | 
| TENDER    | General | maintain standard list of products with estimated prices    | 
