+++
title = "Items"
description = "Viewing items."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 52
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Managing your catalogue"
toc = true
top = false
+++

An item in Open mSupply is usually a product that you purchase from a supplier, hold in stock and supply to a customer.
From the **Items** menu, you can view all of the items that are currently visible in your store.

## Viewing items list

In the navigation panel, tap on `Catalogue` > `Items` to show the items list:

![Items nav](/docs/catalogue/images/cat_gotoitems.png)

You can see all the items which are available for use by your store:

![Items list](/docs/catalogue/images/cat_itemslist.png)

## Viewing an item's details

To view the details of an item, simply tap on one. A new window opens:

![Item detail](/docs/catalogue/images/cat_itemdetail.png)

On top of the screen, you can the following information:

- **Stock on Hand**: How much stock is currently available in your store
- **AMC**: Average Monthly Consumption. This is how much stock your store uses each month on average (based on a configurable number of months, defaults to 3 months).
- **Months of Stock**: Number of months of consumption left with current stock. This is calculated as: `Stock on Hand / AMC`.

<div class="imagetitle">
In below example, we have 1542 units of Amoxicillin available in our store. The average consumption is 53.3  units per month which means that there is the equivalent of 28.9 months of stock in the inventory. 
</div>

![Item detail headers](/docs/catalogue/images/cat_itemdetailsheaders.png)

In the bottom part, item details are divided into several sections:

### Details

- **Name**: This is the name by which mSupply will refer to the item
- **Code**: This should be unique for each item and is a helpful shorthand for referring to items
- **Unit**: The unit you use for this item. It is useful to distinguish items you issue by pack (eg. eye drops) from items you issue by volume (eg. oral liquids)
- **Strength**: For a medicine, the concentration of its active ingredients (eg. for Amoxillin 250mg, the strength is 250mg)
- **Defined Daily Dose**: The assumed average maintenance dose per day for a medicine used for its main indication in adults
- **Doses**: For vaccines, the number of dose per vial
- **Vaccine** (check box): If this is checked, this item is a vaccine and a number of dose can be assigned

### Categories

- **ATC Category**: ATC stands for Anatomical, Therapeutic, Chemical and is a method of classifying entities, and identifying them by category
- **Universal Name**: if the item is linked to the [universal drug code database](https://codes.msupply.foundation/), this shows the universal, or generic name for the given item
- **Universal Code**: similarly, the code allocated to the universal drug code item

### Packaging

- **Default pack size**: This is the default pack size that will be assigned to incoming stock as it is received
- **Outer pack size**: The number of units in a carton (outer pack). Not the number of preferred pack size packs in a carton (outer pack).
- **Volume per pack**: The default volume per preferred pack size pack. This is the volume that will be used by default when receiving goods. We recommend you divide a carton volume by the number of preferred pack size packs in a carton to get this figure. Open mSupply always stores volumes in m3 (cubic metres), but you can enter a volume as millilitres (ml) or litres (l) by entering the appropriate abbreviation after the number representing the volume. e.g. enter “0.5l” to enter a volume of 0.5 litres (= 0.0005m3).
- **Volume per outer pack**: The default volume of an Outer pack size pack of this item
- **Weight**: The weight of a preferred pack size pack in kg

### Pricing

- **Margin**: This is the default margin that will be applied to this item on Inbound Shipments to calculate the selling price
