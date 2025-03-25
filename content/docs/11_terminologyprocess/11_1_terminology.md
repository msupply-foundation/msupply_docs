+++
title = "OMS Terminology"
description = "Terminology"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 202
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

The following table outlines some of the common terms used in Open mSupply, and also guides users of legacy mSupply regarding terminology improvements we have made.

| Open mSupply Term | Legacy mSupply term   | Definition                                                               |
|:-----------------:|:---------------------:|:------------------------------------------------------------------------ |
| Outbound Shipment | Customer Invoice      | The creation of a supply of goods to a particular customer (facility)    |
| Inbound Shipment  | Supplier Invoice      | The receiving of a supply of goods from a particular supplier            |
| Inbound Shipment  | Supplier Invoice      | The receiving of a supply of goods from a particular supplier            |
| Requisition       | Customer Requisitions | An order for supply of goods made by a particular customer (facility)    |
| Internal Orders   | Supplier Requisitions | A request for stock made to a particular supplier (facility)             |
| Supplier Return   | Supplier Credit       | The return of supplied goods to a particular supplier (facility)         |
| Customer Return   | Customer Credit       | The receiving of a return of goods from a particular customer (facility) |

Other terms used in Open mSupply (and original mSupply):

| **Term**  | **Definition**                                                                                                                                                                                                                                        |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Items         | Products managed in mSupply (includes medicines, consumables, equipment, laboratory/radiology items, and larger assets such as vehicles and furniture).                                                                                                                                                         |
| Stores        | Departments within a facility who may or may not manage inventory independently from a larger entity. For example, there may be two stores in a hospital - one inpatient pharmacy store and one outpatient pharmacy store.                                                                                 |
| Locations     | Specific place inside a store where items are kept. For example, a large central warehouse may have many locations (e.g. A.02.04, B.01.03), while small stores may have less (e.g. Room 1, Room 2). Items may also be stored without assigning a location (i.e., just stored alphabetically).             |
| Suppliers     | Suppliers are facilities that a store orders or receives stock from. Suppliers may be external (e.g. private drug companies or wholesalers) or internal (e.g. central medical store, provincial warehouses).                                                                                               |
| Donors        | External entities who pay for donated stock (e.g. UNICEF, USAID). No donor is entered when the government or medical store is paying in a normal financial transaction. When the donor is recorded, you can track donated items through the supply chain and run donor transaction reports and stocktakes. |
| Customers     | Recipients of items, excluding patients. This includes health centres, hospitals, wards, private clinics and pharmacies, outreach services and any other entity that an mSupply store issues stock to.                                                                                                     |
| Patients      | Individuals who receive items from a prescription. When a store uses mSupply in dispensary mode, patients receive unique ID numbers and we can track their prescription history, allergies, payment history, insurers, and notes.                          |
| Prescribers   | Prescribers are authorised medical professionals who provide prescriptions to patients, which we can dispense in mSupply. Prescribers may include doctors, nurses and other authorised individuals. |
| Users         | Users are the people using mSupply (you!). Each user has their own password and set of permissions (which can vary from store to store). System logs track everything that users do in mSupply.                                                                                   |
