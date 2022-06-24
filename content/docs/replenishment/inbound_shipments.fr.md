+++
title = "Livraisons"
description = "Récevoir du stock des fournisseurs."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

La fonctionnalité _Livraison_ peut être utilisée pour récevoir du stock venant d'un ou plusieurs fournisseurs.

Si vous aviez utilisé mSupply par le passé, vous devriez être familier du terme **Facture Fournisseur** au lieu de **_Livraison_**. 

Toutes les articles reçus doivent être enregistrés dans mSupply soit par :
* Création manuelle d'une livraison (livraison manuelle)
* Traitement d'une livraison qui a été créée automatiquement dans votre dépôt suite à un envoi de stock venant d'un autre dépôt fournisseur.

## Voir les Livraisons

### Ouvrir le Menu Livraison

![Go to Inbound Shipments](/docs/replenishment/images/is_gotois_fr.png)

Pour accéder au menu **Livraison** :
1. Allez dans `Approvisionnement` dans le panneau de navigation à gauche
2. Cliquez sur `Livraison`

### Liste des Livraisons

La première chose que vous voyez est une liste des Livraisons. 

La liste des livraisons comprend 7 colonnes: 

| Colonne| Description |
| :---------- | :---------- |
| **Nom** | Nom du fournisseur | 
| **Statut** | Statut de la livraison | 
| **Numéro** | Numéro de référence de la livraison| 
| **Créée le** | Date de création de la livraison | 
| **Confirmée** | Date de confirmation de la livraison | 
| **Commentaire** | Commentaire sur la livraison |
| **Total** | Valeur totale |

1. La liste peut afficher **20 livraisons par page**. Dans le coin inférieur gauche, vous pouvez voir combien de livraisons sont actuellement affichées sur votre écran. 

![Page](/docs/distribution/images/os_list_showing.png)

2. S'il y a plus de 20 livraisons, vous pouvez vous déplacer vers une autre page en cliquant sur le numéro de la page ou en utilisant les flèches droite ou gauche (coin inférieur droit). 

![Page](/docs/distribution/images/os_list_pagenumbers.png)

### Recherche par nom de Fournisseur

Vous pouvez filtrer la liste des livraisons par nom de fournisseur. Cela peut être utile si vous recherchez une livraison en particulier !

Saisissez le nom du fournisseur dans le champs `Search by name` (à gauche, juste au-dessus des en-têtes de liste). Toutes les livraisons de ce fournisseur apparaîtront dans la liste. 

### Exporter la liste des livraisons

La liste des livraisons peut être exportée dans un fichier CSV. Cliquez simplement sur le bouton _Exporter_ (à droite, en haut de la page).

![Export button](/docs/distribution/images/export_fr.png)

et le fichier sera téléchargé. La fonction d'exportation téléchargera toutes les livraisons, pas seulement la page actuelle, si vous en avez plus de 20. Les livraisons sont exportées en utilisant l'ordre de tri sélectionné dans la liste, bien que vous puissiez facilement trier la liste dans Excel ou tout autre outil avec lequel vous ouvrez le fichier .csv !


### Supprimer une livraison

Vous pouvez supprimer une livraison de la liste.

1. Sélectionnez la livraison que vous souhaitez supprimer en cochant la case à l'extrémité gauche de la liste. Vous pouvez sélectionner plus d'une livraison à supprimer. Vous pouvez même toutes les sélectionner à l'aide de la case à cocher principale dans les en-têtes de liste.

2. Ouvrez la liste déroulante `Sélectionner` (coin supérieur droit, au-dessus de la liste) et sélectionnez `Supprimer lignes sélectionnées`.

3. Une notification confirme le nombre de livraisons supprimées (coin inférieur gauche)

<div class="note">
Vous ne pouvez supprimer que les expéditions avec un statut <code>NOUVEAU</code>.
</div>

## Creating a new manual Inbound Shipment

1. Go to `Replenishment`> `Inbound Shipment`
2. Press the `New Shipment` button, in the top right corner
3. A new window `Suppliers` opens, inviting you to select a supplier

### Select a Supplier

1. In the `Suppliers` window, you will be presented with a list of suppliers. You can select your supplier from the list or you can type as much of a supplier name. 

<div class="tip">
You can tell if a supplier is also using mSupply in their store. If they do, you will see icon like this (<img src="/docs/replenishment/is_msupplystoreicon.png" alt="Store" style="width:auto">) next to the supplier code. 
</div>

<div class="imagetitle">
In below example, we are receiving stock from <b>Tamaki Central Medical Store</b>. 
</div>

![Select a Supplier](/docs/replenishment/is_selectsupplier.gif)

2. Once you have selected a supplier, you Inbound Shipment is created. 

<div class="imagetitle">
If everything went well, you should see the name of your supplier in the top left corner and current status should be <code>SHIPPED</code>.
</div>

![New manual Inbound Shipment](/docs/replenishment/is_newinboundshipment.png)


<div class="note">
When you create a <b>new</b> manual Inbound Shipment, mSupply assumes that shipment has already been shipped by the supplier and is coming your way. <br /> That's why first status of a manual Inbound Shipment is always <code>SHIPPED</code>.
</div>

### Edit the Supplier Name

If you have selected the wrong supplier, you can change the supplier name in the `Supplier Name` field or select one the dropdown list: 

<div class="imagetitle">
In below example, we are replacing <b>Tamaki Central Medical Store</b> by <b>Waikato District Store</b>. 
</div>

![gif](/docs/replenishment/is_editsuppliername.gif)

### Enter a Supplier Reference

Once your Inbound Shipment has been created, you can capture a supplier reference in the `Supplier Ref` field, if they have one (eg. * PO#1234567 *)

### View or edit the Inbound Shipment Information Panel

The Information Panel allows you see or to edit information about the Inbound Shipment. It is divided in multiple sections: 
* Additional Info
* Related Documents
* Invoice Details
* Transport Details

<div class="omsupdate">
We are planning to add more sections in the future as Open mSupply grows. 
</div>

#### How to open and close the Information Panel ?

To open the Information Panel, you can tap on the `More` button, located in the top right corner of the Inbound Shipment view. 

You can close by tapping on the `X Close` button, on the top right corner of the information panel. 

![Open and close the Information Panel](/docs/replenishment/is_infopanel_openclose.gif)

#### Additonal Info

In the **Additional Info** section, you can:
* See who created the Inbound Shipment (name of the user)
* View and edit the Inbound Shipment color. To edit the color, tap on the colored circle and select a color from the pop-up
* Write or edit a comment

#### Related Documents

In the **Related Documents** section, you can see other related transaction document for the Inbound Shipment. 

If your Inbound Shipment was created to fulfill a **Internal Order**, the reference number of your order would appear in this section. 

In the future, we would also include other documents such as temperature records, transportation documents or pickslips. 

#### Invoice Details

In this section, you will see by default the total cost price of the items listed in the Inbound Shipment. 

You can also add a **Service charges** if you wish to add other charges such as Freight Costs. To add a Service charges to the Invoice Details: 

1. Tap on the `Edit Service Charges` button. A new window opens. 
2. Tap on the `Add charge` button on the new window. A new line appears in the list of charges. You tap on `Cancel` if you do not wish to add anything. 
3. **Name:** select a service charges in the dropdown list. You can customise the list of available charges. Contact your administrator. 
4. **Comment:** You can add a comment to provide further details about the new charge
5. **Amount:** Enter the amount of the charge
6. **Tax:** Enter a % of tax for the charge
7. **Total:** The total field is automatically calculated based on the Amount and the Tax percentage
8. **Delete:** You can tap on the `Delete` icon to delete the charge

In this section, you can also edit the tax rate (%) for the cost price. Tap on the pencil icon and enter 

#### Transport Details

In this section, you can see or edit a transport reference number (eg. a booking or a tracking reference number). 

### Inbound Shipment Status Sequence

The status sequence is located at the bottom left corner of the Inbound Shipment screen. 

Passed statuses are hightlighted in blue, next statuses appear in grey. 

<figure>
    <img src="/docs/replenishment/is_statussequence2.png" alt="Inbound Shipment Status Sequence (New)" style="width:100%">
    <figcaption align="center">Status Sequence: current status is <code>New</code>.</figcaption>
</figure>

<figure>
    <img src="/docs/replenishment/is_statussequence3.png" alt="Inbound Shipment Status Sequence (Shipped)" style="width:100%">
    <figcaption align="center">Status Sequence: current status is </i><code>Shipped</code>.</figcaption>
</figure>

There are 5 status for the Inbound Shipment: 

| Status | Description |
| :--- | ---------- |
| **New** | This is the first status when you create a new manual Inbound Shipment |
| **Picked** | Supplier has confirmed that shipment is picked and ready to ship  (applies only to automatically created shipments) |
| **Shipped** | Shipment has been shipped and goods are now in transit (applies only to automatically created shipments) |
| **Delivered** | When you confirm that the shipment has been delivered |
| **Verified** | When you have verified the inbound shipment |

You probably noticed that two of the status values only apply to automatically created shipments. These are created by the system when another store in the system creates an Outbound Shipment to deliver stock to your store. If this is the case you'll see a message near the top of the page:

![Automatic IS message](/docs/replenishment/is_message_automatic.png)

If, however, you've created an Inbound Shipment manually, then the following message shows:

![Manual IS message](/docs/replenishment/is_message_manual.png)

and you'll see that the status bar has only the status values which apply to this type of shipment.

<figure align="center">
    <img src="/docs/replenishment/is_statussequence4.png" alt="Inbound Shipment Status Sequence (New & manual)" style="width:60%">
    <figcaption align="center">Status Sequence: current status is </i><code>New</code>.</figcaption>
</figure>

If you hover over the status sequence, a shipment history window appears. You can see the date when a shipment was updated from one status to another. 

<div class="imagetitle">
This manual shipment has been created on 03/03/2022
</div>

![Inbound status: hover 2](/docs/replenishment/is_statussequence_hover2.png)

<div class="imagetitle">
This automatic shipment has been created on 03/03/2022, allocated on 04/03/2022 and picked on 07/03/2022
</div>

![Inbound status: hover](/docs/replenishment/is_statussequence_hover.png)


### Hold checkbox

Located on the bottom left corner, on the left of the status sequence. 

Check the `Hold` checkbox prevents the Inbound Shipment from being updated to the next status. 

![Outbound hold checkbox](/docs/distribution/os_holdcheckbox.png)

### Cancel and Confirm button

#### Cancel Button

Click on the `Cancel` button to quit the Inbound Shipment view and return to the Inbound Shipments list. 

#### Confirm Button

The `Confirm` button is the button to update the status of a shipment. The status which you can confirm depends on the current status of the shipment and follows the sequence shown below.

When managing an Inbound Shipment, you can only confirm it as Delivered or Verified. 

| Confirm... | Current Status | Next Status |
| :---------- | :---------- | :---------- |
| **Confirm Delivered** | Shipped | Delivered|
| **Confirm Verified** | Delivered | Verified|

You don't have to update a shipment to next status in the sequence. You can choose to skip some of them to go directly to `Confirm Verified` for example.

As demonstrated below, tap on the down arrow of the `Confirm` button and select the status you want the shipment to be updated to. 

![Skip Status](/docs/replenishment/is_skipstatus.gif)

## Adding lines to an Inbound Shipment

To add a line, tap on the `Add Item` button located in the top left corner of your screen. 

A new `Add Item` window opens. 

![Inbound: add item button](/docs/replenishment/is_additem_button.png)

### Select an Item

In the `Add Item` window, you can look up an item by:
* Reading through the list of available items
* or by typing some or all of an item name
* or by typing some or all of an item code

Once your item is highlighted, tap on the name or press `Enter`.

![Add Item](/docs/distribution/os_additem.gif)


### Quantities tab

In the `Quantities` tab, you can update the following fields: 
1. **Batch**: Type here the batch number. Leave blank if item is not managed with batch number.
2. **Expiry**: The expiry date of the batch number. Leave blank is not applicable
3. **# Packs**: The quantity of packs you are receiving
4. **Pack Size**: The quantity of units per pack (by default, pack size is 1)
5. **Unit Qty** (read-only): Automatically calculated based on # Packs and Pack Size (`[# Packs] x [Pack Size]`)
6. If you are receiving more than one batch number for the same item, you can tap on the `Add Batch` button

<div class="imagetitle">
In below example, we are receiving 2 batch numbers for item <i>030453 - Amoxicillin 250mg tabs</i> with a different pack size. 
</div>

![Add Item quantities](/docs/replenishment/is_additem_quantities.png)

### Pricing tab

On the second tab, `Pricing`, you can update the following fields (all are optional): 
* **Sell**: The selling unit price of the item  (default value is 0)
* **Cost**: The purchasing unit price of the item (default value is 0)
* **Unit Qty** (read-only): Total number of units for the batch number
* **Line Total** (read-only): Total purchasing value for the batch number (`[Unit Qty] x [Cost]`) 

<div class="warning">
Sell & Cost prices are per units and not per pack. 
</div>

<div class="imagetitle">
In below example, sell price $12 per unit and cost price is $10 per unit. 
</div>

![Add Item pricing](/docs/replenishment/is_additem_pricing.png)

### Location tab

In the third tab, `Location`, you can select a storage location to assign the batch number to a location in your storage facility. 

Simply select a storage location from the `Location` dropdown menu.

![Add Item location](/docs/replenishment/is_additem_location.png)

<div class="note">
Don't know the storage location yet ? You don't have to capture it right away. You can update the storage location at any time if you haven't confirmed the verification yet. 
</div>

### Confirm item and quantities

When you're done, you can add the new line by tapping on:
* `OK`if you don't want to add another line to your shipment
* `OK & Next`if you have other lines to create

Otherwise, you can tap on `Cancel` and your changes won't be saved. 


## Editing an Inbound Shipment line

To edit an Inbound Shipment line, simply tap on it. You will be presented with the `Edit Item` window, which is identical to the `Add Item` window, except that the item is already chosen and cannot be modified. 

### Edit a Shipment Line

<div class="note">
 <b></b> you can edit a shipment line if the shipment has a status higher lower than <code>VERIFIED</code>. 
</div>

1. Open the Inbound Shipment you want to edit
2. Tap on the line you want to edit. An identical window to `Add Item` appears. At this stage:

    *  Edit the main `Issue Quantity` field 
    *  or change the number of packs value at the batch number level

<div class="note">
 <b></b> When editing a shipment line, you cannot change the item. You would need to delete the shipment line and to create a new one. 
</div>

### Delete a Shipment line

1. Open the Inbound Shipment that you would like to edit
2. Make sure that status is not yet `VERIFIED`
2. Select the line(s) you want to delete by checking the box(es) on the right of the list
3. Go to the `Actions` dropdown menu (top right corner, above the list)
4. Select the action `Delete selected lines`

![Alt Text](/docs/distribution/os_actions_deleteselectedlines.png)

<div class="imagetitle">
In below example, we are deleting <i>item 030063 - Acetylsalicylic Acid 100mg tabs</i>
</div>

![Alt Text](/docs/distribution/os_deleteselectedlines.gif)

<div class="tip">
You can delete multiple lines at once. Be sure to review what is selected before performing the Delete action. 
</div>


## Receiving stock with an Inbound Shipment

### Confirm the delivery of the shipment

Whether your Inbound Shipment is **manual** or **automatic**, the first step to receive the goods is to confirm the delivery. 

At this stage, you don't have to check if quantities or other information are correct, you just have to acknowledge that you have received the goods from your supplier. 

To confirm that an Inbound Shipment has been delivered, click on the `Confirm Delivered` button. 

<div class="note">
In case your Inbound Shipment is <b>automatic</b>, you cannot confirm its delivery unless the supplier has confirmed its shipment. In other words, your shipment status has to be <code>SHIPPED</code> before you can confirm that you have received the goods. 
</div>

### Verify your Inbound Shipment

Verification is the last step to receive goods in mSupply. At this stage, you can check what you have received and make sure that that information in mSupply are correct. 

You have the possibility to verify the following information: 
* Batch numbers and their expiry dates
* Quantity of packs and pack size 
* Pricing information: cost and sell prices

You can also capture where received goods are to be stored in the `Location` tab. 

Once all information have been captured or verified, you can confirm the Shipment as `VERIFIED` by tapping on the `Confirm Verified` button. 

Once you have done this:
* Goods are now part of your inventory
* Shipment status is now `VERIFIED`
* You can no longer edit shipment lines
* You can no longer delete the shipment

## Viewing an Inbound Shipment

When viewing a specific shipment, you can view the batches on that shipment grouped by item or with each batch listed separately.
To change the view mode, click the `Group by item` switch. 

When grouped by item, you can expand the item to see individual batches, or use the expand in the table header to expand all grouped rows. If you click on an item you will also see all selected batches, as shown in this example:

![Group by Item](/docs/replenishment/is_group_by_item.gif)