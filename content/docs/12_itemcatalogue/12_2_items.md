+++
title = "Items"
description = "Items"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 203
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

An item in Open mSupply is usually a product that you purchase from a supplier, hold in stock and supply to a customer.
From the **Items** menu, you can view all of the items that are currently visible in your store.

## Viewing items list

In the navigation panel, tap on `Catalogue` > `Items` to show the items list:

![Items nav](/docs/catalogue/images/cat_gotoitems.png)

You can see all the items which are available for use by your store:

The Items list is divided into 6 columns:

| Column   | Description                                                                                                                                                 |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code** | Code assigned to this item in mSupply                                                                                                                       |
| **Name** | This is the name by which mSupply will refer to the item                                                                                                    |
| **Unit** | The unit of measure for the item                                                                                                                            |
| **SOH**  | How much stock is available in your store                                                                                                                   |
| **AMC**  | Average Monthly Consumption. This is how much stock your store uses each month on average (based on a configurable number of months, defaults to 3 months). |
| **MOS**  | Number of months of consumption left with current stock. This is calculated as: `Stock on Hand / AMC`.                                                      |

![Items list](/docs/catalogue/images/cat_itemslist.png)

## Viewing an item's details

To view the details of an item, simply tap on one. A new window opens:

![Item detail](/docs/catalogue/images/cat_itemdetail.png)

On top of the screen, you can the following information:

- **Stock on Hand**: How much stock is currently available in your store
- **AMC**: Average Monthly Consumption. This is how much stock your store uses each month on average (based on a configurable number of months, defaults to 3 months).
- **Months of Stock**: Number of months of consumption left with current stock. This is calculated as: `Stock on Hand / AMC`.

<div class="imagetitle">
In the below example, we have 20,219 units of Acetylsalicylic Acid available in our store. The average consumption is 3,443.67 units per month which means that there is the equivalent of 5.87 months of stock in the inventory. 
</div>

![Item detail headers](/docs/catalogue/images/cat_itemdetailsheaders.png)

There are two tabs in the bottom part of the screen:

- **General**: The item's basic information
- **Master Lists**: Master lists associated with the item
<!-- - **Pack Variants**: Customisable pack sizes for the item. Can only be configured in Open mSupply's new central server. -->

### General

#### Details

- **Name**: This is the name by which mSupply will refer to the item
- **Code**: This should be unique for each item and is a helpful shorthand for referring to items
- **Unit**: The unit you use for this item. It is useful to distinguish items you issue by pack (eg. eye drops) from items you issue by volume (eg. oral liquids)
- **Strength**: For a medicine, the concentration of its active ingredients (eg. for Amoxillin 250mg, the strength is 250mg)
- **Defined Daily Dose**: The assumed average maintenance dose per day for a medicine used for its main indication in adults
- **Type**: The type of item (eg. Stock or Service)
- **Doses**: For vaccines, the number of dose per vial
- **Vaccine** (check box): If this is checked, this item is a vaccine and a number of dose can be assigned

#### Categories

- **ATC Category**: ATC stands for Anatomical, Therapeutic, Chemical and is a method of classifying entities, and identifying them by category
- **Universal Name**: if the item is linked to the [universal drug code database](https://codes.msupply.foundation/), this shows the universal, or generic name for the given item
- **Universal Code**: similarly, the code allocated to the universal drug code item

#### Packaging

- **Default pack size**: This is the default pack size that will be assigned to incoming stock as it is received
- **Outer pack size**: The number of units in a carton (outer pack). Not the number of preferred pack size packs in a carton (outer pack).
- **Volume per pack**: The default volume per preferred pack size pack. This is the volume that will be used by default when receiving goods. We recommend you divide a carton volume by the number of preferred pack size packs in a carton to get this figure. Open mSupply always stores volumes in m3 (cubic metres), but you can enter a volume as millilitres (ml) or litres (l) by entering the appropriate abbreviation after the number representing the volume. e.g. enter “0.5l” to enter a volume of 0.5 litres (= 0.0005m3).
- **Volume per outer pack**: The default volume of an Outer pack size pack of this item
- **Weight**: The weight of a preferred pack size pack in kg

#### Pricing

- **Margin**: This is the default margin that will be applied to this item on Inbound Shipments to calculate the selling price

### Master Lists

This tab lists the Master Lists associated with this item.
![Item detail headers](/docs/catalogue/images/cat_itemmasterlists.png)

### Ledger

The item ledger tab shows a history of transactions in this store for the item.

![](/docs/catalogue/images/item_ledger.png)

The ledger is divided into 16 columns:

| Column               | Description                                                      |
| :------------------- | :--------------------------------------------------------------- |
| **Type**             | The type of the transaction                                      |
| **Date**             | The date of the transaction was confirmed                        |
| **Time**             | The time of the transaction was confirmed                        |
| **Invoice Number**   | The invoice (shipment) number of the transaction                 |
| **Name**             | The name of the customer or supplier                             |
| **Status**           | The status of the transaction                                    |
| **Expiry**           | The expiry date of the stock line                                |
| **Batch**            | The batch number of the stock line                               |
| **Pack Size**        | The pack size                                                    |
| **Number of packs**  | The number of packs in the transaction                           |
| **Unit Qty**         | The quantity that was assigned to the transaction in units       |
| **Balance**          | The balance of the stock line                                    |
| **Pack cost price**  | The cost price of the pack                                       |
| **Pack sell price**  | The sell price of the pack                                       |
| **Total before tax** | The total cost of the transaction before tax (in local currency) |
| **Reason**           | The reason for the adjustment (if required)                      |

