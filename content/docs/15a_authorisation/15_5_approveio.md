+++
title = "Internal Order Authorisation"
description = "Approving stock requests."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 205
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Approving Internal Orders
For information about what this process is used for, refer to mSupply [Remote Authorisation Process](/docs/15_creatingorders/15-2-remoteauth/).

## Viewing Internal Orders

1. Navigate to the `Replenishment` menu
2. Tap on `Internal Orders`

![Internal Order: nav](/docs/replenishment/images/intord_access.png)

You will see a list of all existing Internal Orders:

![Internal Order: list](/docs/replenishment/images/intord_list.png)

### Remote Authorisation Approval Process

Some stores may require their requisitions to be approved by specific users before they can be fulfilled. For a full description of this process refer to the mSupply [Remote Authorisation](https://docs.msupply.org.nz/other_stuff:remote_authorisation) documentation.

To do this:

- In the requesting store, enable the store preference `Include requisitions from this store in supplier's remote authorisation process`
- In the supplying store, enable the store preference `Use remote authorisation for response requisitions`

For further detail on configuring store preferences, refer to [Remote Authorisation](/docs/15_creatingorders/15-2-remoteauth/#configuration) on the topic.

---
## Remote Authorisation of Internal Orders
Follow the process of creating a program based Internal Order.
If you have the store preferences configured correctly, you will see an additional column in the list view of Internal Orders, which shows the approval status of the newly created order:

![Internal Order list](/docs/replenishment/images/authorisation-internal-order-list.png)

In addition, when viewing the details of the Internal Order, you'll see two new columns and the approval status of the order:

![Internal Order list](/docs/replenishment/images/authorisation-internal-order-detail.png)

The **Approved Quantity** is the quantity approved by the authoriser. This may be different to the requested quantity. If so, the authoriser has the option of entering an explanatory comment, which is shown in the **Approval Comment** column.

---
#### For Authorisers: How to Authorise Orders
See details in [Remote Authorisation](/docs/15_creatingorders/15-2-remoteauth/#how-authorisers-approve-orders).



---

## Local Approval Process

Another option for implementing an approval step for Internal Orders is to enable what is called 'local approval'. With this, you can allow only certain users to change the status of an Internal Order to `Sent`. To allow a user to change the status of an Internal Order to `Sent`, they require the permission `Can confirm Internal Order as Sent` to be enabled.

To set the permission, edit the user within mSupply and change to the `Open mSupply permissions` tab, shown below:

![Internal Order detail with approval comment](/docs/replenishment/images/mSupply_intord_permission.png)

Without this option checked, the user will not be able to update the Internal Order status to `Sent` and the order is unable to be processed.

On changing the status to `Sent`, the user's details are added to the comment field; this can be seen when viewing the Internal Order, in the detail panel:

![Internal Order detail with approval comment](/docs/replenishment/images/intord_approval_comment.png)

and is also shown to the approver in the remote authorisation web application if that is being used.

The additional text is of the form:

`Approved by [user's full name]. Email: [user's email address] and Phone Number: [user's phone number].`

These details are taken from the user, as configured in mSupply. Refer to the [Managing Users](https://docs.msupply.org.nz/admin:managing_users#details_tab) section on how to do this.
