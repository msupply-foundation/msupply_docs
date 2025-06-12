+++
title = "Replenishment & Distribution Workflow"
description = "Receiving stock from suppliers."
date = 2025-02-18
updated = 2025-02-18
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

### Terminology Updates

We've changed the names in Open mSupply to align with industry best practice - we agree that this can take a bit of getting used to!

### Overall workflow

For an overview of supply chain processes, remember to review [the introduction chapter](/docs/introduction/introduction/)

{%mermaid ()%}
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#FF9a00', 'primaryTextColor': '#000', 'primaryBorderColor': '#00008B', 'secondaryColor': '#FFFFFF', 'secondaryTextColor': '#000', 'secondaryBorderColor': '#FFD7BE', 'lineColor': '#000',  'clusterBkg': '#e1f1fd','tertiaryTextColor':'#000'}}
}%%

flowchart LR
    subgraph s1["**Receiving Store**"]
        n1(Create Internal Order) --- n2(Send Order)
        n3(Receive Shipment as **Inbound Shipment**)
    end
    subgraph s2["**Supplying Store**"]
        n2 --- d1(Receive as **Requisition**)
        d1 --- d2
        d2(Process Requisition)
        d2 --- d3(Create and Send Outbound Shipment)
        d3 --- n3
    end
    style s1 fill:#fffacd
{%end%}


### A more complex workflow including authorisation:

{%mermaid ()%}
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#FF9a00', 'primaryTextColor': '#000', 'primaryBorderColor': '#00008B', 'secondaryColor': '#FFFFFF', 'secondaryTextColor': '#000', 'secondaryBorderColor': '#FFD7BE', 'lineColor': '#000',  'clusterBkg': '#e1f1fd','tertiaryTextColor':'#000'}}
}%%

flowchart TD
  subgraph s1["**Supplying Store**"]
  A[Customer Requisition Received] --> B[Review Requisition using Authorization module]
  B -->|Approved| C[Generate Shipment]
  B -->|Rejected| X[Notify Customer & End Process]
  C --> D[Print pick list]
  D --> E[Pick Goods]
  E -->|Checked & Correct| F[Arrange Transport]
  E -->|Errors in 
   Pick list 
   vs 
   Physical Stock?| Y[Resolve Issues & Retry]
  Y -->E
  F --> G[Mark shipment with status _Shipped_]
  end
  G --> H[Inspect Shipment]
  
subgraph s2["**Receiving Store**"]
  H -->|Accepted| I[Update Inventory & Notify Customer]
  H -->|Rejected| Z[Report Issue & Return to Supplier]
  I --> J[Process Inbound Shipment Completion]
  J --> K[End Process]
  end
  style s2 fill:#fffacd


{%end%}