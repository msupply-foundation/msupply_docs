+++
title = "Outbound Shipments"
description = "Issuing stock to your customers."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Issuing stock to your customers"
toc = true
top = false
+++

Outbound Shipments can used to issue stock to a customer. 

If you used mSupply in the past, you may be familiar with the term **Customer Invoice**. An Outbound Shipment can be used to:
* Transfer stock to another store using mSupply
* Issue stock to a customer
* Fulfill requisitions (customer orders)

To access the **Outbound Shipment** menu, press the **Distribution** menu in the navigation panel. 

![gotooos](/docs/gotoos2.png)

## Creating a new Outbound Shipment

### Create a New Outbound Shipment

1. Go to **Distribution** > **Outbound Shipment**
2. Press the **New Shipment** button, in the top right corner

![login!](/docs/clicknewshipment.png)


3. In the new window, you will be presented with a list of available choice. You can select your customer from the list or you can type as much of a customer name and select it. 

> **Note:** *In our example, we are issuing stock to the* `Kopu Health Center`.


![gif](/docs/os_select_customer.gif)


4.  If you have selected the wrong customer, you can always type the name of another customer or select one the dropdown list.  


![gif](/docs/os_change_customer.gif)


### Add Items to an Outbound Shipment

#### Select an item


1. Click on the **Add Item** button (top right corner). 

![Add Item button](/docs/distribution/additembutton.png)

2. in the new window, you can look up an item by:
* reading through the list of available items using the dropdown list
* or by typing as much of an item name
* or by typing as much of an item code

Once you have selected your item, tap on the name or press `Enter`

> **Note:** *In our example, we are issuing the item '030453 - Amoxicillin 250mg tabs'. When selecting an item, you can see on the right side of the list, how many units are available. 

![Alt Text](/docs/os_additem.gif)

Once you have selected an item, you have have access to the following information 
* Item code and name (eg. 030453 Amoxicillin 250 mg Tabs)
* the available stock quantity for this item (eg. 3527 units)
* the item's unit (eg. Tab)

> **Note:** For the item 030453 - Amoxicillin 250mg tabs, there are 3527 units available. 

![login!](/docs/additem_headers.png)

#### Issue a quantity of units

By default, you will be invited to issue a quantity of **units**, regardless of the packsize (number of units in a pack). 

When entering a quantity in the `issue` field, system automatically chooses the batch with the shortest expiry date (First to Expire, First Out - FEFO).   

In below screenshot, we are issuing 100 units of the item. All 100 units will taken from the XXX batch. 

![additem!](/docs/os_additem_issueunits.png)

Another example but this time we are issuing 1200 units. System selects two batches with different pack sizes. 

![additem!](/docs/os_additem_issueunitstwobatches.png)

#### Issue a quantity of packs

You can choose to issue a quantity of **packs**. 

Let's imagine that your customer only wants pack of 12 units. You can change the dropdown value from `Any` to `12`. 

![Alt Text](/docs/os_additem_switchtopack.gif)

You are now offered to issue a number of packs of 12 units. In below example, we are issuing 10 packs of 12 units. 

![additem!](/docs/os_additem_issuepacks.png)


> **Note:** if you had previously entered a quantity of units and you switch to issue a quantity a packs. The quantity of units will automatically be converted into the relevant quantity of packs.  

![Alt Text](/docs/os_issuepacks.gif)

#### Manual allocation


## Outbound Shipment Headers


## Outbound Shipment Information Panel





