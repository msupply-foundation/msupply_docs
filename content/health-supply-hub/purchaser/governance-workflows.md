+++
title = "Governance Workflows"
description = "Health Supply Hub user documentation."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 6
template = "health-supply-hub/page.html"

[extra]
toc = true
top = false
+++

Governance Workflows allow additional control over editing permissions of your tenders and viewing permission of quotes. This is done by adding an additional higher level permission user type: Governance. Governance workflows can be used for larger tenders where your organisation might want to restrict what users are able to take key actions on a tender.

### Getting started with Governance Worflows

Your organisation will need to have Governance Workflows enabled before you can use them. To get started, get in touch with the [mSupply Support Team](mailto:health-supply-hub@msupply.foundation) who will be able to enable them for your organisation, and select which users are to have Governance permissions.

A [Health Supply Hub](https://health-supply-hub.msupply.org) admin user will also be able to select specific users within your organisation to have Governance Workflow permissions. There permissions are a higher level than organisation admin.

After publishing a tender, a user with governance workflow permissions will be able to set the tender to Governance Workflow type.

![image](/health-supply-hub/purchaser/images/governance-workflow-select.png)

[Organisation Admin](../organisation#users) and [Organisation Access](../organisation#users) users will then be able to see that the tender has been set to use Governance Workflows.

![image](/health-supply-hub/purchaser/images/normal_user_governance_tender.png)

### Differences of a Governance Workflow Tender

The key feature of a governance workflow tender is that it will be locked by default to normal orgainsation users. This means that when the tender closes, [Organisation Admin](../organisation#users) and [Organisation Access](../organisation#users) users will not be able to view attachments submitted by suppliers, or view the tender audit report until a Governance User has unlocked the tender.

Before it is unlocked, Organisation Access and Organisation Admin users will see a locked tender:

![image](/health-supply-hub/purchaser/images/locked-tender.png)

Attachments will also be hidden while the tender is locked:

![image](/health-supply-hub/purchaser/images/attachments-hidden.png)

To unlock a tender for all users to view, a governance user must unlock the tender in the tender detail view.

![image](/health-supply-hub/purchaser/images/unlock-tender-button.png)

Once it is unlocked, organisation admin and organisation access users will be able to view all quote details as normal.

![image](/health-supply-hub/purchaser/images/unlocked-tender.png)

### Permissions of Governance Workflows on Open Tenders

A tender with Governance Workflows enabled will also have different permission requirements for certain actions compared to a standard tender:

#### Standard Tender Permissions

| Action                  | Access User | Admin User | Governance User |
| ----------------------- | ----------- | ---------- | --------------- |
| view tender             | ✅          | ✅         | ✅              |
| view invited Suppliers  | ✅          | ✅         | ✅              |
| view Logs               | ✅          | ✅         | ✅              |
| View Questions          | ✅          | ✅         | ✅              |
| View quotes once closed | ✅          | ✅         | ✅              |
| Invite suppliers        | ❌          | ✅         | ✅              |
| Publish Tender          | ❌          | ✅         | ✅              |
| View Notices            | ❌          | ✅         | ✅              |
| Publish Notices         | ❌          | ✅         | ✅              |
| Answer Questions        | ❌          | ✅         | ✅              |
| Extend Closing Date     | ❌          | ✅         | ✅              |

<div class="note">
	Organisation Admin users are able to publish a tender as a governance workflow tender. However only a Governance user can set a tender to Governance type once it has been published.
</div>

#### Governance Tender Permissions

| Action                   | Access User | Admin User | Governance User |
| ------------------------ | ----------- | ---------- | --------------- |
| view tender              | ✅          | ✅         | ✅              |
| view invited Suppliers   | ✅          | ✅         | ✅              |
| view Logs                | ✅          | ✅         | ✅              |
| View Questions           | ✅          | ✅         | ✅              |
| View quotes once closed  | ❌          | ❌         | ✅              |
| Invite suppliers         | ❌          | ✅         | ✅              |
| Publish Tender           | ❌          | ✅         | ✅              |
| View Notices             | ❌          | ✅         | ✅              |
| Publish Notices          | ❌          | ✅         | ✅              |
| Answer Questions         | ❌          | ✅         | ✅              |
| Extend Closing Date      | ❌          | ❌         | ✅              |
| Set tender to Governance | ❌          | ❌         | ✅              |

<div class="note">
	Organisation Admin and Organisation Access users will be able to view quotes once a tender is closed only after a governance user unlocks the tender.
</div>
