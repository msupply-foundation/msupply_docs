+++
title = "ADR Reporting"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 351
template = "mobile/page.html"

[extra]
lead = "Adverse Drug Reaction Reporting"
toc = true
top = true
+++


From version 7.1 mSupply mobile includes the ability to report on Adverse Drug Reactions.
It is able to be used with AEFI (Adverse Events From Immunisation) reporting.

# Set up

## Entering an adverse reaction report

To report, a patient must be entered. If you are at the facility where the drug was administered, the patient should already be in the system.

If the patient isn't in the list:

  1. Tap the **Lookup Patient** button to query the central server to retrieve their name.
  1. If you still can't find them (which should be rare), then you can tap **New Patient** to enter their details.

Once the patient is found, tap the **plus** icon in the ADR column to add an adverse event report for that patient.

![Custom invoices button on Navigator](/mobile/introduction/images/ADR_entering.png)

What is shown on the form is configurable on the server. If more than 1 adverse reaction form has been defined, you will be shown a list of forms, and you need to choose the appropriate one before proceeding. If only 1 form has been configured, you will be taken directly to the form to enter the adverse event details.

The fields you enter, their order and the allowed values are all configured on the server, so will vary for each installation.
Here's an example that implements a typical ADR form:

![Custom invoices button on Navigator](/mobile/introduction/images/ADR_form1.png) ![Custom invoices button on Navigator](/mobile/introduction/images/ADR_form2.png) ![Custom invoices button on Navigator](/mobile/introduction/images/ADR_form3.png)

Once you have entered all the data you are able to, tap **Save**.

The data will be synchronised to the central server, where it can be displayed on the dashboard (anonymised of course!), or sent to other aggregating systems.

