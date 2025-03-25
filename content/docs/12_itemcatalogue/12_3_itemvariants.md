+++
title = "Item Variants"
description = "Item Variants"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 204
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

## Viewing items list

In the navigation panel, tap on `Catalogue` > `Items` to show the items list.

## Item Variants

**Item Variants** allow you to manage different versions of an item, such as variations in manufacturers or packaging sizes. This feature is particularly useful when there are different configurations of a product that need to be tracked separately.

On the [Open mSupply Central Server](/docs/5a_clientserver/5a-2-omscentral/), a third tab, Item Variants, is available. This tab allows you to configure variations of the item, such as different manufacturers or packaging sizes.

Currently, Item Variants are only used for GAPS functionality.

![variants tab](/docs/catalogue/images/variants_tab.png)

### Adding an Item Variant

To create a new Item Variant, click the `Add Variant` button in the top right corner.

![add variant button](/docs/catalogue/images/add_variant_button.png)

This will open a new window, where you can enter a name for the variant, and its details:

![add variant window](/docs/catalogue/images/add_item_variant_modal.png)

Temperature options are configured as [Location Types](https://docs.msupply.org.nz/items:item_locations?s[]=location&s[]=type#location_types) on the mSupply Central Server. [Manufacturers](https://docs.msupply.org.nz/names:adding_and_editing?s[]=manufacturers#adding_a_customer_supplier_manufacturer_donor_or_benchmark) are also managed in mSupply.

#### Packaging

Different facilities work in different levels of packaging, e.g. a warehouse may work in cartons, while a clinic works in boxes or individual units. In the Packaging section, you can define the pack size (units per pack) and packaging volume for the different packaging levels of an item variant.

This allows GAPS calculations to accurately account for the cold storage requirements for this item variant, at the packaging level used by a particular facility.

<div class="note">
The pack sizes defined in Item Variants are used for GAPS calculations ONLY, to provide greater accuracy across item variations. It does not affect the pack sizes used in your usual ordering workflows in Open mSupply.
</div>

### Editing an Item Variant

To edit an Item Variant, click the `Edit` button next to the variant you wish to update.

![edit variant button](/docs/catalogue/images/item_variant_edit_button.png)

This will open the same window as when adding a new variant, with the existing details pre-filled. Make any changes you need, and click `OK` to update the variant.

![edit variant window](/docs/catalogue/images/edit_item_variant_modal.png)

### Deleting an Item Variant

To delete an Item Variant, click the `Delete` button next to the variant you wish to remove.

![delete variant button](/docs/catalogue/images/item_variant_delete_button.png)

You will be asked to confirm the deletion. Click `OK` to confirm, or `Cancel` if you no longer wish to delete the variant.

<p align="center">
    <img src="/docs/catalogue/images/item_variant_confirm_delete.png" width="450">
</p>

### Bundling items

You can also add bundled items to each Item Variant. These are other items that are always issued with this item, so GAPS calculations should consider the storage required for all items in the bundle.

<div class="note">
  Bundled items are not implemented in dispensing workflows in Open mSupply. You still need to dispense each item in the bundle separately.
</div>

Bundling is done at the Item Variant level, giving you fine-grained control over which variants should be bundled together. For example, a vaccine may only be able to be bundled with a specific diluent from the same manufacturer.

#### Adding bundled items

To bundle an item with the current variant, click the `Add bundled item` button under the `Bundled with` section.

<p align="center">
    <img src="/docs/catalogue/images/add_bundled_item.png" width="300">
</p>

This will open a new window, where you can search for the item you wish to bundle with the current variant.

<p align="center">
    <img src="/docs/catalogue/images/add_bundled_item_select_item.png" width="700">
</p>

After selecting the item, you will be prompted to select the specific variant of that item, along with the ratio at which it should be bundled.

<div class="imagetitle">
In this example, 0.2 units of Silverfern Normal Saline should be bundled with every 1 unit of Silverfern Adsorbed (Paediatric) DPT Vaccine.
</div>

<p align="center">
    <img src="/docs/catalogue/images/add_bundled_item_modal.png" width="700">
</p>

Click OK to add the bundled item. It will then appear in the `Bundled with` section.

![item variant with bundled item](/docs/catalogue/images/item_variant_with_bundled_item.png)

#### Editing bundled items

To edit a bundled item, click the row in the `Bundled with` section. This will open the same window as when adding a new bundled item, with the existing details pre-filled. Make any changes you need, and click `OK` to update the bundle.

<p align="center">
    <img src="/docs/catalogue/images/add_bundled_item_modal.png" width="700">
</p>

#### Removing bundled items

To remove a bundled item, click the Delete icon next to the item you wish to remove.

![remove bundled item button](/docs/catalogue/images/remove_bundled_item.png)

You will be asked to confirm the removal of the bundled item. Click `OK` to confirm, or `Cancel` if you no longer wish to remove it.

<p align="center">
    <img src="/docs/catalogue/images/confirm_remove_from_bundle.png" width="450">
</p>

#### Item variants that are a part of bundles

You aren't able to bundle items for an item variant that is already part of another bundle.

The `Add bundled item` button will be disabled, and you will instead see a list of the item variants that this variant is already bundled with.

![item variant part of another bundle](/docs/catalogue/images/item_variant_is_bundled.png)
