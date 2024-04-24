+++
title = "Item Pack Variants"
description = "Item pack variants overview"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 52
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Items can have pack variants which help:
- Display unit and pack size combination for stock batches in a more readable form
- Allows user to see item other then base unit, but in a pack size of the pack variant they've chosen

Pack variants are configured in item [pack variant tab](/docs/catalogue/items/#pack-variants)

For documentation below, let's consider these pack variants were created for Acetylsalicylic Acid 100mg item.

![pack variant example](/docs/catalogue/images/pack_variant_example.png)

## Pack variants for viewing stock batches

When pack variants were introduced, we've merged unit and pack size columns, into one **Pack** column, which will now display the following:

| Base Unit | Pack Size | Description                                                                           | **Pack**     |
|-----------|-----------|---------------------------------------------------------------------------------------|--------------|
|           | 1         | No unit is configured so will display as "Unit" and pack size 1 so no number is shown | Unit         |
|           | 10        | No unit is configured so will display as "Unit" and pack size is shown as multiplier  | 10 x Unit    |
| Capsule   | 1         | Unit is configured "Capsule"  will be displayed and pack size 1 so no number is shown | Capsule      |
| Capsule   | 10        | Unit is configured "Capsule"  will be displayed and pack size is shown as multiplier  | 10 x Capsule |


If pack variants are defined then the matching pack variant is shown in the **Pack** column. 

For example

![pack variant stock view example](/docs/catalogue/images/pack_variant_stock_view_example.png)

In above example Acetylisalicylic Acid has three batches in stock, two of them have defined pack variant that match stock pack size and one pack size does not match any pack variant (20). Ibuprofen and Amoxicillin don't have matching pack variants. Ibuprofen does not have defined unit and Amoxicillin unit is configured as 'Tab'.

## Pack variants for entering stock batches

If item has pack variants defined then stock entry view will allow you to select existing pack variant or enter custom pack size

![pack variant entry example](/docs/catalogue/images/pack_variant_stock_entry_example.png)

The [default pack variant](/docs/catalogue/pack-variants/#default-pack-variant) will always be pre selected for new bathes

## Pack variants for item view

When viewing items where stock lines are not visible, for example in item catalogue or when making internal order, pack variants replace the base unit. A drop down will be presented for items with pack variants and [default pack variant](/docs/catalogue/pack-variants/#default-pack-variant) will be pre selected. Quantities will adjust based on the selected pack variant.

Here **Blister** was selected, see AMC, SOH and MOS 

![pack variant entry example](/docs/catalogue/images/pack_variant_item_blister_selected.png)

Here **Tab** was selected, see AMC, SOH and MOS 

![pack variant entry example](/docs/catalogue/images/pack_variant_item_tab_selected.png)

## Default Pack Variant

Default pack variant would either be *last selected pack variant for this store, or if pack variant has not be selected yet, it would be the pack variant matching the most used pack size for this store 

*last selected pack - this preference is saved in the client, for example the browser instance or Open mSupply client instance (it's not saved for user and store for the entire Open mSupply instance)

## Ongoing work

As of <code>v2.0.00</code> Pack Variants are not supported in the entire system, the following areas still need Pack Variant implementation (pending user and stakeholder feedback)

- Outbound Shipment
- Prescriptions
- Requisition
- Repack
