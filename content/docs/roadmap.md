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
top = false
+++

This road map will be updated about once every six weeks.
It only covers our immediate committed work stream. Our planned feature list is much larger.

### Road map
{% mermaid ()%}
gantt
 title Open mSupply Road Map
 dateFormat YY-MM-DD
 axisFormat %B
 section Version 1.0
  Audit trail :t1-0-1, 22-08-01 , 28d
  Installer :22-08-10 , 14d
  Android app :t1-0-2, after t1-0-1 , 28d
  Desktop app :after t1-0-1 , 21d
 section Version 1.0.4
  Stock line editing :t1-0-3, 22-11-07, 21d
 section Version 1.1.0
  Server discovery replacement (android+desktop) :22-11-07,28d
  Database migrations :22-11-24,14d
 section Version 1.1.1
  Fridgetag integration :22-11-21, 35d
  Splitting packs :after t1-0-3, 35d
 section Version 1.1.2
  Cold chain integration :t1-1-1, 22-12-05, 56d
  Edit patients  :t1-1-2, 22-10-01 , 35d
  Customisable forms  :after t1-0-2 , 56d
  Programs :t1-1-3, after t1-1-2, 42d
  Encounters: after t1-1-2, 35d
  Periods: t1-1-4, after t1-1-3, 28d
  Programs feature : milestone, m1, after t1-1-4, 
 section Version 2.0.0
  Dispensing: t2-0-1, after t1-1-1, 70d
  Preferences: t2-0-2, after t1-1-1, 28d
  Enhanced R&R functionality: after t2-0-2, 56d
  DHIS2 Integration: t2-0-3, after t2-0-2, 28d
  HL7 Integration: t2-0-4, after t2-0-3, 28d
  Dispensing : milestone, m2, after t2-0-1, 
section Version 2.1.0
  Customer returns: t2-1-1, after t2-0-4, 32d
  Supplier returns: t2-1-2, after t2-0-4, 32d
section Version 3.0.0
  Item properties: t3-0-1, after t2-1-1, 14d
  Serialisation: t3-0-2, after t3-0-1, 21d
  Front-end plugin framework: after t2-1-1, 32d
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
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Accept notification of arrival of shipment    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Automatically receive inbound shipment data prior to arrival   | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Manually record inbound shipment data prior to arrival     | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Display any diffrerence between ordered (req or PO) quantities and notified quantities | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Notify appropriate parties of discrepancies    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Reject order if necessary    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Display the storage requirements based on quantity shipped gross volume | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Display amount of storage space available by type  | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Flag if insufficient storage space by type    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Acknowledge arrival of inbound shipment     | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Manually record inbound shipment data on arrival  | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Barcode scanning for goods receiving     | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Flag discrepancies compared to the shipment received     | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Record damage, discrepancy, batch mismatch, indicator, and variation information for individual line items    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Record notes concerning discrepancies and variations in goods received | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Report damages and discrepancies to appropriate individuals    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Confirm goods into stock (update of inventory records)     | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Print receiving reports, stock release form, receipt authorisation, etc...    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Assign an operator to an Inbound Shipment for putting away received stock    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Putaway app: load the inbound shipment's items list and instructions for putaway.  | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Display storage conditions for items (eg. temperature controlled)  | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Display default storage location for each item   | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Propose space/positions for each stock item based on define rules (eg. current space availability, based on ABC category)    | 
| RECEIVING   | Inbound Shipments (ex Supplier Invoices) | Print pallet/shelf tag specifying status of goods, if appropriate  | 
| INVENTORY MANAGEMENT    | Locations    | Create/edit inventory storage locations (Aisle, Bin, Slot, etc.)  | 
| INVENTORY MANAGEMENT    | Locations    | Define storage locations hierarchy  | 
| INVENTORY MANAGEMENT    | Locations    | Define storage conditions (cold chain, volume, item restrictions, use restrictions, etc...)    | 
| INVENTORY MANAGEMENT    | Locations    | Record temperatures for storage locations (see category COLD CHAIN)  | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Record VVM status  | 
| INVENTORY MANAGEMENT    | Locations    | Record frozen conditions status   | 
| INVENTORY MANAGEMENT    | Items - Master data  | Set temperature threshold conditions per product, as appropriate  | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Alert conditions outside threshold  | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Track lots and expiry dates    | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Transfer stock from one location to another    | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Display and transmit alerts and notifications for pending expiries  | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Display and transmit alerts and notifications for stock outs, overstock, understock  | 
| INVENTORY MANAGEMENT    | Items - Master data  | Flag items as hazardous, as appropriate     | 
| INVENTORY MANAGEMENT    | Stocktake    | Create/edit a stocktake for a list of items    | 
| INVENTORY MANAGEMENT    | Stocktake    | Filter the stock to be included: by item attributes (category, department, expiry date, etc...)   | 
| INVENTORY MANAGEMENT    | Stocktake    | Filter the stock to be included: by location   | 
| INVENTORY MANAGEMENT    | Stocktake    | Filter the stock to be included: by master list   | 
| INVENTORY MANAGEMENT    | Stocktake    | Print stocktake sheets (PDF format)  | 
| INVENTORY MANAGEMENT    | Stocktake    | Print stocktake sheets (CSV format)  | 
| INVENTORY MANAGEMENT    | Stocktake    |   | 
| INVENTORY MANAGEMENT    | Stocktake    | Stocktake app: load the stocktake sheet on a mobile device    | 
| INVENTORY MANAGEMENT    | Stocktake    | Stocktake app: use a barcode scanner/mobile device camera to select the item the operator is counting | 
| INVENTORY MANAGEMENT    | Stocktake    | Barcode scanning for stocktaking  | 
| INVENTORY MANAGEMENT    | Stocktake    | Create inventory adjustments (finalise stocktake)  | 
| INVENTORY MANAGEMENT    | Stocktake    | Add inventory adjustments reasons  | 
| INVENTORY MANAGEMENT    | Stocktake    | Cycle counting   | 
| INVENTORY MANAGEMENT    | Kits  |   | 
| INVENTORY MANAGEMENT    | Inventory Adjustments |   | 
| INVENTORY MANAGEMENT    | Repacks |   | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Split stock line  | 
| INVENTORY MANAGEMENT    | Items - Stock Movement and Expiry  | Merge stock line  | 
| INVENTORY MANAGEMENT    | Pickface replenishments |   | 
| INVENTORY MANAGEMENT    | Labor Management   | Create/edit warehouse operators   | 
| DISPATCH   | Outbound Shipment  | Create a pick slip from an allocated outbound shipment     | 
| DISPATCH   | Outbound Shipment  | Pick slip: Display current location(s) for requisitioned items   | 
| DISPATCH   | Outbound Shipment  | Pick slip: create pick slip sorted by storage locations     | 
| DISPATCH   | Outbound Shipment  | Pick slip: Display stock expiry date     | 
| DISPATCH   | Outbound Shipment  | Pick slip app: load a pick slip on a mobile device.  | 
| DISPATCH   | Outbound Shipment  | Barcode scanning and order picking  | 
| DISPATCH   | Outbound Shipment  | Confirm outbound shipment as picked  | 
| DISPATCH   | Outbound Shipment  | Pack Order    | 
| DISPATCH   | Outbound Shipment  | Pack Order: Box / cartonisation   | 
| DISPATCH   | Outbound Shipment  | Print documents for delivery: packing list, customer invoice, goods received note  | 
| DISPATCH   | Outbound Shipment  | Confirm outbound shipment as shipped (Update of inventory records)  | 
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
| REQUISITIONS  | General Request Requisition (Int. Order) | Suggest order quantities based on past comsumption data (eg. AMC)  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Suggest order quantities based on minimum quantity threshold   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Suggest order quantities based on patient records / registry data  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | estimate stock needs based on aggregating requisitions by intermediate levels   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | estimate stock needs based on target populations  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | estimate stock needs quantities based on statistical forecasts   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | estimate stock needs point based on user-defined criteria    | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display past consumption data   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display current available and usable on-hand quantity of each stock item    | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display open order and inbound shipments    | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display open outbound orders and projected usage  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display current stock levels (SOH) at all relevant levels    | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display expiry dates for on-hand stock     | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Generate suggested order quantities (Requested - SOH) = Suggested Qty | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display lead time for order fulfillment     | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display item cost at time requisition is generated  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Calculate order cost at time requisition is generated     | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Submit requisition (electronically or manually)   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Provide approval/rejection mechanism at appropriate levels    | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Approver can modify the requisition, if needed   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Record requisition approval date  | 
| PER-PATIENT DISPENSING    | Dispensing    | Record dispensed medicines to an individual patient  | 
| PER-PATIENT DISPENSING    | Prescription    | Create/edit a prescription    | 
| PER-PATIENT DISPENSING    | Prescription    | Abbreviations   | 
| PER-PATIENT DISPENSING    | Prescription    | Drug Interactions Group     | 
| PER-PATIENT DISPENSING    | Prescription    | Payments and receipt / cash register     | 
| PER-PATIENT DISPENSING    | Prescription    | Create/edit patients     | 
| PER-PATIENT DISPENSING    | Prescription    | Create/edit prescribers     | 
| PER-PATIENT DISPENSING    | Prescription    | Repeats     | 
| PROCUREMENT   | Good receipt to verify stock on POs  | Create Goods Receipt / Inbound Shipment     | 
| PROCUREMENT   | Good receipt to verify stock on POs  | Add lines from a PO to an Inbound Shipment    | 
| COLD CHAIN   | Temperature monitoring | Display and transmits alerts for temperature breach (home screen dashboard), assign one or several temperature sensors to a storage location, define threshold per item | 
| COLD CHAIN   | Temperature monitoring | Sync of temperature records to the server to feed mSupply dashboard (via Cold Chain app)    | 
| COLD CHAIN   | Temperature monitoring | Integration with Berlinger temperature loggers and fridge tab   | 
| SYNC    | Sync Carry over   | https://github.com/openmsupply/open-msupply/issues/608     | 
| OVERALL SYSTEM  | User permission   | Build in variable user access   | 
| OVERALL SYSTEM  | Currency | Ability to support several currency and their exchange rate    | 
| OVERALL SYSTEM  | Any  | Upload scanned documents    | 
| PROCUREMENT   | Manage templates   | Ability to maintain templates   | 
| DASHBOARDS   | View data on dashboards | Reports on stock consumption   | 
| PROCUREMENT   | Purchase Orders   | All approvers can access system to approve procurement forms   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Intuitive requisition template with pull-down menus  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Requested items can be routed for storage release or purchase   | 
| PROCUREMENT   | Add notes and process waivers   | Ability to document notes to file and procurement process waivers  | 
| OVERALL SYSTEM  | Any  | Ability to store contracts and Goods Received Note (GRN) in the system | 
| PROCUREMENT   | Referencing    | Facilitate 3-way matching for vendor payments (PO, GRN, invoice)  | 
| PROCUREMENT   | Purchase Orders   | Notify PO change in status to different users or when the full PO is not fulfilled  | 
| PROCUREMENT   | Matching information  | Procurement and inventory modules communicate data on received goods, POs, and master lists with each other    | 
| DISPATCH   | Outbound Shipment  | Send a notification of approved outbound shipment  | 
| DISPATCH   | Outbound Shipment  | Approval system of outbound shipment     | 
| PROCUREMENT   | Generate Delivery note | Generate Delivery note and Waybill/Packing List   | 
| TRANSPORT   | Vehicle data sheet  | Record for each vehicle with key parameters (VIN, model, plate, fuel type, model year, reg. data & number, insurance date & policy number, price, etc.) | 
| TRANSPORT   | Reporting    | Track key monthly vehicle data (# of days vehicle in use and under repair, km driven, odometer reading, fuel cost, liters of fuel consumed)    | 
| TRANSPORT   | Reporting    | "Track key monthly generator data (running hours, maintenance costs, fuel consumed) | 
| Add notifications when expected levels are not met" |   |   | 
| TRANSPORT   | Reporting    | "Track repairs per vehicle and generator (type, date, cost, spare parts & consumables used)    | 
| Add notifications when expected levels are not met" |   |   | 
| TRANSPORT   | Interoperability   | Can be integrated with vehicle tracking hardware to capture km traveled | 
| TRANSPORT   | General | Send notifications when key documents are soon to expire (insurance, registration, etc.)    | 
| OVERALL SYSTEM  | Comments | Users can communicate in the platform (i.e., leave comments during approvals process) | 
| TENDER    | General | Manage competitive bidding process  | 
| TENDER    | General | maintain fixed price list for preferred vendors   | 
| TENDER    | General | maintain standard list of products with estimated prices    | 
