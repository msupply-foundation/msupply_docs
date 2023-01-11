+++
title = "Introduction"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 1
template = "mobile/page.html"

[extra]
lead = "Welcome to mSupply Mobile!"
toc = true
top = false
+++

# Adverse Drug Reaction Reporting

From version 7.1 mSupply mobile includes the ability to report on Adverse Drug Reactions
It is able to be used with AEFI (Adverse Events From Immunisation) reporting.

# Set up

# Entering an adverse reaction report

To report, a patient must be entered. If you are at the facility where the drug was administered, the patient should already be in the system.

If the patient isn't in the list:

  1. Tap the **Lookup Patient** button to query the central server to retrieve their name.
  1. If you still can't find them (which should be rare), then you can tap **New Patient** to enter their details.

Once the patient is found, tap the **plus** icon in the ADR column to add an adverse event report for that patient.

[<img src="/_media/en:mobile:user_guide:pasted:20210321-002225.png?w=800&amp;tok=c03a3f" class="mediacenter" loading="lazy" alt="" width="800" />](/_detail/en:mobile:user_guide:pasted:20210321-002225.png?id=en%3Amobile%3Auser_guide%3Aadverse_drug_reactions)
What is shown on the form is configurable on the server. If more than 1 adverse reaction form has been defined, you will be shown a list of forms, and you need to choose the appropriate one before proceeding. If only 1 form has been configured, you will be taken directly to the form to enter the adverse event details.

The fields you enter, their order and the allowed values are all configured on the server, so will vary for each installation.
Here's an example that implements a typical ADR form:

[<img src="/_media/en:mobile:user_guide:pasted:20210326-025554.png?w=600&amp;tok=0fc984" class="media" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210326-025554.png?id=en%3Amobile%3Auser_guide%3Aadverse_drug_reactions)  [<img src="/_media/en:mobile:user_guide:pasted:20210326-051330.png?w=600&amp;tok=405973" class="media" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210326-051330.png?id=en%3Amobile%3Auser_guide%3Aadverse_drug_reactions)  [<img src="/_media/en:mobile:user_guide:pasted:20210326-051404.png?w=600&amp;tok=72982a" class="media" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210326-051404.png?id=en%3Amobile%3Auser_guide%3Aadverse_drug_reactions)

Once you have entered all the data you are able to, tap **Save**

The data will be synchronised to the central server, where it can be displayed on the dashboard (anonymised of course!), or sent to other aggregating systems.

