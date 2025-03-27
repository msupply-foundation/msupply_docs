+++
title = "Remote Authorisation"
description = "Authorization / approval process"
date = 2023-05-05T18:20:00+00:00
updated = 2023-05-05T18:20:00+00:00
draft = false
weight = 202
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Authorise customer requisitions remotely"
toc = true
top = false
+++

## What is Remote Authorisation Approvals?
In some cases, purchases or orders may require approval before they can be processed. **Remote Authorisation Approvals** allow designated personnel to approve or deny orders from a remote location, providing flexibility and ensuring that purchasing decisions align with operational policies. This feature is especially useful for organizations with multiple locations, where approvals need to happen across different sites or by managers who are not physically present. 

The process typically involves sending purchase requests or orders for review, where authorised personnel can approve or reject them based on criteria such as budget, need, or stock availability.

In mSupply, Remote Authorisation allows people with the appropriate permission to authorise program-based requisitions using a web app. This allows the ordering process to have an additional validation step before an Outbound Shipment is created and stock is sent out to customers.

<div class="note">
The remote authorisation process is currently available only for requisitions which have been created for a program. You will need to have programs configured to use this feature.
</div>

## Remote Authorisation Workflow
When using remote authorisation, the process flow is as follows:

- An Internal Order is created in a customer store, using a program
- The customer store synchronises and the request is sent to the supplying store
- The process waits until the Internal Order status is set to `Sent`
- The Requisition is automatically created in the supplying store, and has an approval status of `Pending`
- Authorisers are notified via email that there is a Requisition requiring authorisation
- On clicking the link in the email, the authoriser is taken to the web app ( which is hosted by the central server )
- After logging in, they are able to adjust, comment and authorise ( or deny ) the request
- Once authorised, the status is updated:
  - for the Internal Order ( in the customer store )
  - for the Requisition ( in the supplying store )
- Comments made by the authoriser and any adjusted quantities, are shown in the customer store's Internal Order

This workflow diagram may help to explain it better:

{%mermaid ()%}
flowchart TD
  A[Customer Requisition Received] --> B[Review Requisition using Authorisation module]
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
subgraph s2["Receiving Store"]
  G --> H[Inspect Shipment]
  H -->|Accepted| I[Update Inventory & Notify Customer]
  H -->|Rejected| Z[Report Issue & Return to Supplier]
  I --> J[Process Inbound Shipment Completion]
  J --> K[End Process]
  end

{%end%}

## Configuration

The setting up of the authorisation workflow requires some configuration changes on the central server:

1. Turn on remote authorisation. Follow [these instructions](https://docs.msupply.org.nz/other_stuff:remote_authorisation#turn_on_remote_authorisation) in the central server documentation
2. Set up authorisers. See [these instructions](https://docs.msupply.org.nz/other_stuff:remote_authorisation#set_up_authorisers)
3. You may also need to [enable emailing](https://docs.msupply.org.nz/other_stuff:remote_authorisation#enable_emailing_of_authorisers) on the central server

In addition, you'll need to have the stores configured for normal usage in Open mSupply, with the supplier and customer relationships configured. Stores will need to have [master lists](https://docs.msupply.org.nz/items:master_lists) assigned to both customer and supplier stores, and programs and program periods configured.

## How Authorisers Approve Orders
The authorisation process is detailed in the [central server documentation](https://docs.msupply.org.nz/other_stuff:remote_authorisation#authorising_using_the_web_app). Please refer to that for the steps required when authorising.