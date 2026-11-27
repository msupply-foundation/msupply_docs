+++
title = "HL7 (FHIR) Integration"
description = "Open mSupply Integrations with systems supporting the HL7 FHIR Standard."
date = 2022-03-17
updated = 2022-03-17
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Open mSupply Integrations with systems supporting the HL7 FHIR Standard"
toc = true
+++

## HL7
HL7 is the international standard for sharing electronic health information.
mSupply supports three different ways of integrating via HL7
#### Patient Master

mSupply can receive patient master records from systems that support HL7 FHIR. This allows you to run an electronic medical record system for patient management, and for patients generated in that system to populate Open mSupply as they are created or updated.

#### Prescribed medicine fetching
mSupply can receive prescribed medications and create a record for pharmacists to confirm the medications, actual quantities & which batch was given.
This can greatly speed up dispensing, and also eliminate errors, as the pharmacist no longer has to type in medications, quantities and directions from a paper prescription

#### Dispensed records pushing
mSupply can send records of what was actually dispensed (including batch and expiry date) back to the EMR system, so it has a complete record of what prescribed medications were actually dispensed to a patient