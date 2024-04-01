+++
title = "SAGE Integration"
description = "Open mSupply Integrations with SAGE."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Open mSupply Integration with SAGE accounting/inventory software"
toc = true
+++

## SAGE
[Sage](https://www.sage.com) financial management software (aka accounting software) is widely used in central medical stores, especially in Francophone countries.

Open mSupply integrates with Sage using a custom interoperability application that the mSupply Foundation has written and maintains.

### Versions of Sage Supported
**Sage 100 series** - Has a very arcane COM interface.

Our integration uses a custom application that runs on the SAGE server and mediates between Open mSupply's very nice API and SAGE 100's very terrible one ;-)

It is bi-directional: it both receives orders from facilities using mSupply and passes them on to SAGE for fulfillment, and once the order is shipped from SAGE, it creates the corresponding draft inbound shipment for the facility that placed the order, allowing them to receive goods without tedious data entry.
The only work to perform is product, batch, expiry and quantity need verifcation, and any adjustments entered before the goods can be received into stock.
