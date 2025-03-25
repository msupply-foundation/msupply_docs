+++
title = "Supply Chain Overview"
description = "Supply chain overview."
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 203
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

### Overall workflow

For an overview of supply chain processes.

{%mermaid ()%}

flowchart LR
    subgraph s1["Ordering Store"]
        n1(Create Internal Order) --- n2(Finalise Order)
        n3(Receive Shipment as **Inbound Shipment**)
    end
    subgraph s2["Supplying Store"]
        n2 --- d1(Receive as **Requisition**)
        d1 --- d2
        d2(Process Requisition)
        d2 --- d3(Create and Send Outbound Shipment)
        d3 --- n3
    end
    style s1 fill:#FFBD59
{%end%}

---

### What is an Ordering Store and a Supplying Store?

An **Ordering Store** is the location or facility that identifies the need for certain items and creates internal orders to request the items. This store manages the stock requirements for its operations and communicates those needs to other stores, typically a **Supplying Store**, to fulfill the order.

A **Supplying Store**, is the location or facility responsible for fulfilling the order placed by the **Ordering Store**. The Supplying Store processes the requisition, prepares the items, and sends them out to the **Ordering Store**. The Supplying Store may manage a larger inventory and supply multiple **Ordering Stores**.

---

### **Supply Chain Overview**

This process outlines the flow of stock between the ***Ordering Store*** and the ***Supplying Store*** in a typical supply chain.

1. **Ordering Store Process**:
   - **Create Internal Order**: The process begins in the ***Ordering Store***, where a need for stock is identified. The store creates an internal order based on the stock requirements.
   - **Finalize Order**: Once the internal order is created, it is finalized, and the details are sent to the ***Supplying Store*** for processing.

2. **Supplying Store Process**:
   - **Receive as Requisition**: The ***Supplying Store*** receives the order from the ***Ordering Store*** as a requisition, indicating the requested items.
   - **Process Requisition**: The ***Supplying Store*** processes the requisition by checking the availability of items and preparing them for shipment.
   - **Create and Send Outbound Shipment**: Once the requisition is processed, the ***Supplying Store*** creates an outbound shipment and sends it to the ***Ordering Store***.

3. **Receiving the Shipment**:
   - **Receive Shipment as Inbound Shipment**: The ***Ordering Store*** receives the shipment from the ***Supplying Store***. The stock is then recorded as an inbound shipment in the ***Ordering Store***, completing the supply chain cycle.
