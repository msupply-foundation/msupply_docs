+++
title = "Creating Manual Requisitions"
description = "Managing your Customer orders."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 203
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

### Manual Requisition

Usually, Requisitions will be sent to you by your Customers. However, if they aren't using mSupply, you can create a Requisition manually.

#### Creating a Manual Requisition

1. Go to `Distribution` > `Requisition`
2. Press the `Create Requisition` button at the top right of the page

![New Requisition](/docs/distribution/images/click_new_requisition.png)

3. A new window will appear where you can select the customer for whom you want
   to create the requisition. You can search for the customer by typing their
   name or code in the search bar or by scrolling through the list of customers.

![Select Customer](/docs/distribution/images/requisition_customer_modal.png)

4. Once you have selected the customer, you will be taken to the requisition
   detail page where you can add items to the requisition.

<div class="note">
You cannot change the customer name after the requisition has been created. If you have made a mistake in selecting the customer, you will need to delete the requisition and create a new one.
</div>

#### Adding Lines to a Requisition

Tap on the `Add Item` button (top right corner).

You will be redirected to the edit page. You can look up an item by:

- Reading through the list of available items
- or by typing some or all of the item name
- or by typing some or all of an item code

Once your item is highlighted, tap on the name or press `Enter`.

Once an item has been selected, you will be redirected to the item edit page. Here you can enter the customer's stock on hand, average monthly consumption and
requested quantity. You can also enter how much you are going to supply to the
customer and any comments. The values are saved automatically.

![Requisition Line Edit](/docs/distribution/images/requisition_line_edit_page.png)

After this, the workflow will follow the [same steps](/docs/17_managingreqs/17-2-requisitions/#viewing-a-requisition) as for a requisition created from an Internal Order.
