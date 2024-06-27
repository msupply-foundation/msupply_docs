+++
title = "Expéditions"
description = "Livrer du stock aux clients."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 3
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++


La fonction _Expédition_ peut être utilisée pour livrer du stock à un client. 

Si vous utilisiez mSupply par le passé, vous devriez être familier au terme **Facture Client** au lieu de **Expédition**. 
La fonction Expédition est utilisée pour:
* Un envoi de stock vers un autre dépôt qui utilise mSupply
* Une sortie de stock au bénéfice d'un client
* Le traitement d'une réquisition (commande client)

## Voir les Expéditionns

### Ouvrir le Menu Expéditions

Choisir `Distribution` > `Expédition` dans le panneau de navigation.

![gotooos](/docs/distribution/images/gotoos2_fr.png)

La liste des Expéditions s'affichera (Si vous ne voyez aucune ligne, rassurez-vous. Vous venez probablement de commencer!). 

De cet écran, vous pouvez:
* Voir la liste des Expéditions
* Créer une nouvelle Expédition
* Exporter les Expéditions dans un fichier `.csv`
* Imprimer une ou plusieurs Expéditions

### Liste des expéditions

1. La liste des expéditions comprend 7 colonnes:

| Colonne| Description |
| :---------- | :---------- |
| **Nom** | Nom du Client | 
| **Statut** | Le statut actuel de l'expédition | 
| **Numéro** | Le numéro de référence de l'expédition | 
| **Créée le** | La date de création | 
| **Reference** | La référence du Client | 
| **Commentaire** | Commentaire sur l'expédition |
| **Total** | Valeur totale |

2. La liste peut afficher un nombre fixe d'expéditions par page. Au bas de liste, à gauche, on peut voir le nombre d'expéditons actuellement affiché à l'écran. 

![Page](/docs/distribution/images/os_list_showing.png)

3. S'il y a plus de 20 expéditions, vous pouvez vous déplacer vers une autre page en cliquant sur le numéro de la page ou en utilisant les flèches droite ou gauche (coin inférieur droit). 

![Page](/docs/distribution/images/os_list_pagenumbers.png)

### Recherche par nom de client

Vous pouvez filter la liste des expéditions par nom de client. Cela peut être utile si vous êtes à la recherche d'une expédition en particulier!

Entrez le nom du client dans le champs `Search by name` (à gauche, juste au-dessus des en-têtes de liste). Toutes les expéditions pour ce client apparaissent dans la liste. 

### Exporter des expéditions

La liste des expéditions peut être exportée dans un fichier (csv). Cliquez simplement sur le bouton _**Exporter**_ (à droite, en haut de la page)

![Export button](/docs/distribution/images/export_fr.png)

et le fichier sera téléchargé. La fonction d'exportation téléchargera toutes les expéditions, pas seulement la page actuelle, si vous en avez plus de 20. Les expéditions sont exportées en utilisant l'ordre de tri sélectionné dans la liste, bien que vous puissiez facilement trier la liste dans Excel ou tout autre outil avec lequel vous ouvrez le fichier .csv !

### Supprimer une expédition

Vous pouvez, à partir de la liste, supprimer une expédition. 

1. Sélectionnez l'expédition que vous souhaitez supprimer en cochant la case à l'extrémité gauche de la liste. Vous pouvez sélectionner plus d'une expédition à supprimer. Vous pouvez même tous les sélectionner à l'aide de la case à cocher principale dans les en-têtes de liste. 

2. Ouvrez la liste déroulante `Sélectionner` (coin supérieur droit, au-dessus de la liste) et sélectionnez `Supprimer lignes sélectionnées`. 

3. Une notification confirme le nombre d'expéditions supprimées (coin inférieur gauche). 

<div class="remarque">
Vous ne pouvez supprimer que les expéditions avec un statut <code>NOUVEAU</code>.
</div>

![Outbound list: delete](/docs/distribution/images/os_list_deleteshipment.gif)

## Créer une expédition


1. Allez à `Distribution` > `Expédition`. 

2. Cliquez sur le bouton  `Nouveau` en haut à dorite de l'écran

![New Shipment](/docs/distribution/images/clicknewshipment_fr.png)

3. Une nouvelle fenêtre `Clients` s'affiche pour vous inviter à sélctionner un client.

#### Sélectionner un client

1. Dans la fenêtre `Clients`, une liste de Clients disponibles vous sera présentée. Vous pouvez sélectionner votre client dans la liste ou vous pouvez entrer manuellement le nom d'un Client. La liste sera filtrée au fil des caractères saisis.

<div class="imagetitle">
Dans l'exemple ci-dessous, du stock sera livré au client <b>Kamo Regional Warehouse</b>. 
</div>

![gif](/docs/distribution/images/os_select_customer.gif)

<div class="conseil">
Vous pouvez savoir si un client utilise également mSupply dans son dépôt. Si c'est le cas, vous verrez cette icône (<img src="/docs/replenishment/is_msupplystoreicon.png" alt="Store" style="width:auto">) près du code du fournisseur. 
</div>

2. Une fois que vous pressez la touche `Entrer`, votre Expédition est automatiquement créée. 

<div class=imagetitle>
Si tout s'est bien passé, vous devriez voir le nom de votre client dans le coin supérieur gauche et le statut devrait être <code>NOUVEAU</code> 
</div>

![Outbound shipment: created](/docs/distribution/images/os_created_fr.png)

### Modifier le nom du client

Si vous avez sélectionné le mauvais client, vous pouvez modifier le nom du client dans le champ `Customer Name` ou le sélectionner dans la liste déroulante : 

![gif](/docs/distribution/images/os_change_customer.gif)

### Saisir une référence client

Une fois l'expédition créé, vous pouvez saisir une référence client dans le champ `Customer Ref`, s'il y en a une. (ex. *PO#1234567*)

### Afficher ou modifier le panneau d'information sur les expéditions

Le panneau d'information permet d'afficher ou de modifier des informations sur l'expédition. Il est divisé en plusieurs sections : 
* Informations complémentaires
* Documents connexes
* Détails de la facture
* Détails du transport

Nous prévoyons ajouter d'autres sections à l'avenir, au fur et à mesure de la croissance d'Open mSupply. 

#### Comment ouvrir et fermer le panneau d'information ?

Si vous utilisez un grand écran, le panneau d'information sera automatiquement ouvert pour vous. En revanche, sur un écran de taille moyenne, le panneau d'information sera fermé par défaut.

Pour ouvrir le panneau d'information, vous pouvez cliquer sur le bouton `More`, situé dans le coin supérieur droit de la vue de l'expédition.. 

Vous pouvez fermer la fenêtre en cliquant sur le bouton `X Close`, situé dans le coin supérieur droit de la fenêtre d'information. 

![Open and close the Information Panel](/docs/distribution/images/os_infopanel_openclose.gif)

#### Informations complémentaires

Dans la section **Informations complémentaires**, vous pouvez :
* Voir qui a créé l'expédition (nom de l'utilisateur)
* Afficher et modifier la couleur de l'envoi sortant. Pour modifier la couleur, tapez sur le cercle coloré et sélectionnez une couleur dans le menu déroulant.
* Écrire ou modifier un commentaire

#### Documents connexes

Dans la section **Documents connexes**, vous pouvez consulter d'autres documents de transaction liés à l'expédition. 

Si votre expédition a été créé pour répondre à une **Requisition**, le numéro de référence de la réquisition apparaît dans cette section. 

À l'avenir, nous inclurons également d'autres documents tels que des relevés de température, des documents de transport ou des fiches de prélèvement. 

#### Détails de la facture

Dans cette section, vous verrez par défaut le prix de vente total des articles énumérés dans l'expédition. 

Vous pouvez également ajouter un **Service charges** si vous souhaitez ajouter d'autres frais tels que les frais de transport. Pour ajouter des frais de service aux détails de la facture : 

1. Tapez sur le bouton `Edit Service Charges`. Une nouvelle fenêtre s'ouvre. 
2. Tapez sur le bouton `Add charge` dans la nouvelle fenêtre. Une nouvelle ligne apparaît dans la liste des frais. Si vous ne souhaitez rien ajouter, cliquez sur `Cancel`. 
3. **Name:** Sélectionnez un service dans la liste déroulante. Vous pouvez personnaliser la liste des frais disponibles. Contactez votre administrateur
4. **Comment:** Vous pouvez ajouter un commentaire pour fournir des détails supplémentaires sur la nouvelle taxe.
5. **Amount:** Indiquer le montant de la taxe
6. **Tax:** Entrer un % de taxe pour la charge
7. **Total:** Le champ total est automatiquement calculé sur la base du montant et du pourcentage de la taxe.
8. **Delete:** Vous pouvez appuyer sur l'icône `Delete` pour effacer la charge.

Dans cette section, vous pouvez également modifier le taux de taxe (%) pour le prix de vente des articles. Tapez sur l'icône du crayon et entrez une valeur.

#### Détails du transport

Dans cette section, vous pouvez voir ou modifier un numéro de référence de transport (par exemple, un numéro de référence de réservation ou de suivi). 

### Status de séquence des expéditions

Le status de la séquence se trouve dans le coin inférieur gauche de l'écran expédition. 

Les statuts passés sont mis en évidence en bleu, les statuts suivants apparaissent en gris. 

<figure>
<img src="/docs/distribution/os_statussequence2.png" style="width:100%">
<figcaption align = "center">Status Sequence: status actuel est <code>NEW</code>.</figcaption>
</figure>

<figure>
<img src="/docs/distribution/os_statussequence3.png" alt="Trulli" style="width:100%">
<figcaption align = "center">Status Sequence: status actuel est </i><code>PICKED</code>.</figcaption>
</figure>

Il y a 6 statuts pour l'expédition : 

| Status | Description |
| :--- | ---------- |
| **New** | This is the first status when you create a shipment |
| **Allocated** | Allocation is confirmed. Goods are no longer available for other shipments but are still part of your inventory. |
| **Picked** | Shipment is picked and is now ready to ship. Goods are still part of your inventory. |
| **Shipped** | Shipment has been shipped and goods are no longer part of your inventory |
| **Delivered** | Your customer has received the shipment |
| **Verified** | Your customer has verified the quantity of the shipment. Goods are now part of their inventory . |

If you hover over the status sequence, a shipment history window appears. You can see the date when a shipment was updated from one status to another. 

<div class="imagetitle">
This shipment has been created, allocated and picked on 29/03/2022
</div>

![Outbound status: hover](/docs/distribution/images/os_statussequence_hover.png)

### Hold checkbox

Located on the bottom left corner, on the left of the status sequence. 

Check the `Hold` checkbox prevents the Outbound Shipment from being updated to the next status. 

![Outbound checkbox](/docs/distribution/images/os_holdcheckbox.png)

### Cancel and Confirm button

#### Cancel Button

Tap on the `Cancel` button to quit the Outbound Shipment view and return to the Outbound Shipments list. 

#### Confirm Button

The `Confirm` button is the button to update the status of a shipment. The status which you can confirm depends on the current status of the shipment and follows the sequence shown below.

When managing an Outbound Shipment, you can only confirm the Allocation, the Picking and the Shipment. 

| Confirm... | Current Status | Next Status |
| :---------- | :---------- | :---------- |
| **Confirm Allocated** | New | Allocated|
| **Confirm Picked** | Allocated | Picked|
| **Confirm Shipped** | Picked | Shipped |

You don't have to update a shipment to next status in the sequence. You can choose to skip some of them to go directly to `Confirm Shipped` for example.

As demonstrated below, tap on the down arrow of the `Confirm` button and select the status you want the shipment to be updated to. 

![Skip Status](/docs/distribution/images/os_confirmbutton_skipstatuses.gif)

## Adding lines to an Outbound Shipment

Tap on the `Add Item` button (top right corner). 

A new `Add Item` window opens. 

![Add Item button](/docs/distribution/images/additembutton.png)

### Select an Item

In the `Add Item` window, you can look up an item by:
* Reading through the list of available items
* or by typing some or all of item name
* or by typing some or all of an item code

Once your item is highligthed, tap on the name or press `Enter`.

![Alt Text](/docs/distribution/images/os_additem.gif)

Once the item is selected, you can see the following information: 

#### Headers

* Item code and name (eg. *030453 Amoxicillin 250 mg Tabs*)
* the available stock quantity for this item (eg. *3527 units*)
* the item's unit (eg. *Tab*)

<div class="imagetitle">
<b>Example:</b> For the item *030453 - Amoxicillin 250mg tabs*, there are 3527 tabs available. 
</div>

![add item headers](/docs/distribution/images/additem_headers.png)

#### Issue [Quantity] of units in packs of [Pack Size]

In the `Issue Quantity` field, you can enter the quantity that you want to issue to your customer. 

By default, you are invited to issue a quantity of **units**. However, you have the possibility to issue a quantity of packs instead by changing the value in the second dropdown (`Pack Size`). 

Default value is `Any` when you are issuing units. 

![Outbound Issue quantity](/docs/distribution/images/os_issuequantityinunits.png)


#### List of available batches:

This is a list of batch numbers that you have in store for this item: 
* **# Packs**: Number of packs to be issued
* **Pack Size**: Quantity of units per pack
* **Unit Qty**: Total quantity of units to be issued
* **Available**: Number of packs available (not already allocated to other shipments)
* **In store**: Total number of packs in your store
* **Batch**: Batch number. It is a designation given to products made in the same manufacturing run. 
* **Expiry**: Expiry date of the batch (format: MM/YYYY)
* **Location**: If you inventory is managed with storage locations, the name of the location where the item is stored
* **Sell**: Selling unit price of the item
* **On Hold**: Indicate whether a batch is on hold or not. You cannot issue a batch that is on hold. 
* **Placeholder**: The placeholder line is used when the quantity you are issuing is higher than your available stock

![List of available batch numbers](/docs/distribution/images/os_additem_listofbatches.png)

### Issue a quantity of units

By default, you are invited to issue a quantity of **units**, regardless of the pack size (number of units in a pack). 

When entering a number in the `Issue Quantity` field, system automatically chooses the batch number(s) with the shortest expiry date (First to Expire, First Out or FEFO logic). 

<div class="imagetitle">
In the below example, we are issuing 100 units of the item. All 100 units will be taken from the same batch (second row). First batch was not selected because it is expired. 
</div>

![additem!](/docs/distribution/images/os_additem_issueunits.png)

<div class="imagetitle">
In this other example, we are issuing 1200 units. System selects two batches with different pack sizes. 
</div>

![additem!](/docs/distribution/images/os_additem_issueunitstwobatches.png)

Note that in this list, the batches which are available for selection are shown first and batches which are not (on hold or no stock available) are shown below and in a grey font.

### Issue a quantity of packs

You can decide to issue a quantity of **packs**. To do this, you can change the value in the `Pack Size` dropdown. 

<div class="imagetitle">
Let's imagine that your customer only wants pack size of 12 units. You can change the dropdown value from `Any` to `12`. 
</div>

![Alt Text](/docs/distribution/images/os_additem_switchtopack.gif)

You are now offered to issue a number of packs of 12 units. Only batch number(s) with a pack size of 12 units can be automatically issued.

<div class="imagetitle">
In the below example, we are issuing 10 packs of 12 units:
</div>

![additem!](/docs/distribution/images/os_additem_issuepacks.png)

<div class="remarque">
<b></b> if you had previously entered a quantity of units and you switch to a quantity a packs, the quantity of units will automatically be converted into the correct quantity of packs.  
</div>

![Alt Text](/docs/distribution/images/os_issuepacks.gif)

When a pack size is selected, and stock lines which have a different pack size are not available for selection. As such, those rows are listed lower down in the table and are shown in a grey font, in the same way as other unavailable rows.

### Manual Allocation 

Regardless if you chose to issue a quantity of units or packs, you can always manually change the quantity at the batch number level directly before pressing on OK. 

You simply have to enter or edit the quantity in the `# Packs` column. 

The main `Issue Quantity` field will be automatically updated with the new quantity.  

<div class="remarque">
 <b></b> when allocating quantities at the batch number level, the quantity you enter is always a quantity of packs. 
</div>

<figure>
<img src="/docs/distribution/os_additem_manualallocation.gif" alt="Trulli" style="width:100%">
<figcaption align = "center"><i>Manual allocation at the batch number level.</i></figcaption>
</figure>

### Issuing when there is not enough stock (Placeholder Line)

If the amount to be issued is greater than the total stock available from all of the available lines, then the quantity to be issued will automatically be placed in the `placeholder` field, at the bottom of the list of available batch numbers. 

Placeholder lines can be allocated later when new stock arrives. However, all shipment lines must be allocated before confirming the allocation. 

<div class="imagetitle">
Since there is no stock available for <i>042744-Diazepam Injection 5mg/ml Amp/2ml</i>, system is issuing a 100 units in the placeholder field. 
</div>

![Alt Text](/docs/distribution/images/os_additem_placeholder.png)

When you look at an Outbound Shipment, you can see if a shipment line has not been allocated or has been partially allocated when it is higlighted in blue. 

![Alt Text](/docs/distribution/images/os_placeholderlines.png)

### Confirm Item and Quantity

When you are happy with the quantity, you can either press on:
* the `OK` button. You are redirected to the Outbound Shipment view and your item has been added to the list. 
* the `OK & Next` button to add another item right away
* the `Cancel` if you do not want to add the item to the Outbound Shipment anymore

## Editing an Outbound Shipment Line

To edit an shipment line, tap on it. You will be presented with the `Edit Item` window, which is identical to the `Add Item` window, except that the item is already chosen. 

### Edit a Shipment Line

<div class="remarque">
 <b></b> you can edit a shipment line if the shipment has a status lower than <code>Shipped</code>. 
</div>

1. Open the Outbound Shipment you want to edit. 
2. Tap on the line you want to edit. An identical window to `Add Item` appears. At this stage:

    *  Edit the main `Issue Quantity` field 
    *  or change the number of packs value at the batch number level

<div class="remarque">
 <b></b> When editing a shipment line, you cannot change the item. You would need to delete the shipment line and to create a new one. 
</div>

### Delete a Shipment line

1. Open the Outbound Shipment you want to edit.
2. Select the line(s) you want to delete by checking the box(es) on the right of the list. 
3. Go to the `Actions` dropdown menu (top right corner, above the list)
4. Select the action `Delete selected lines`

![Alt Text](/docs/distribution/images/os_actions_deleteselectedlines.png)

<div class="imagetitle">
In the below example, we are deleting <i>item 030063 - Acetylsalicylic Acid 100mg tabs</i>
</div>

![Alt Text](/docs/distribution/images/os_deleteselectedlines.gif)

<div class="conseil">
 <b></b> You can delete multiple lines at once. Be sure to review what is selected before performing the Delete action. 
</div>

## Processing an Outbound Shipment

### Allocating an Outbound Shipment

Allocation is the process of assigning one or multiple batch numbers from the inventory to a shipment line. In other words, you are assigning stock to your shipment. Once allocated, the stock is reserved for the shipment and thus for your customer. 

There are 2 main ways to allocate a shipment line: 

1. When adding items, system is automatically assigning stock to the new shipment line when you enter a quantity. If you don't have enough stock, system will add placeholder lines (unallocated lines). 

2. Bulk action `Allocate placeholder lines`: 
    * Select the lines that you want to allocate by checking boxes on the right on the list
    * In the `Actions` dropdown menu, select `Allocate placeholder lines`. System will check if there is available stock for each selected lines and allocate them using the First to Expire, First Out (FEFO) logic. A notification will let you know whether the operation is successful or not. 

<div class="remarque">
You won't be able to process your Outbound Shipment if you have unallocated lines (shipment lines without batch number(s) assigned to it). You can wait for more stock to arrive or you can delete the placeholder lines. 
</div>

### Confirming an Outbound Shipment's allocation

Once you all your shipments lines have been allocated, you can **confirm the allocation**:
* Current status of the shipment has to be `NEW`
* Lines must be assigned with one or several batch numbers. You won't be able to confirm the allocation if your shipment contains lines without batch numbers assigned to it (placeholder lines). 

To confirm the allocation, press the `Confirm Allocated` button. 

![Alt Text](/docs/distribution/os_confirmallocated.gif)

Once the allocation is confirmed:

* Shipment status is `ALLOCATED`
* You are now invited to confirm the picking via the `Confirm Picked` button
* All the items and their quantities will be reserved, meaning that they are no longer available for allocation
* You can print a **pick slip** to be sent to your warehouse so they can start preparing the shipment

### Confirming Outbound Shipment picking

Picking refers to the process where individual items are picked from a fulfillment facility (usually a warehouse or a pharmacy store).

Once a shipment has been allocated, next step is to go get the items to prepare the actual shipment. To help with that, you are able to generate a **pick slip** document. A pickslip indicates:
* What are the items to be picked
* The quantity and batch numbers for each item
* If you manage your inventory with storage locations, where the items are located

Once all items are picked and packed. You can then confirm the picking of the shipment to indicate to indicate that it is ready to be dispatched. 

To confirm that a shipment has been picked, tap on the `Confirm Picked` button. 

![Alt Text](/docs/distribution/images/os_confirmpicked.gif)

Once picking is confirmed:

* Shipment status is now `PICKED`
* You are now invited to confirm the shipping via the `Confirm Shipped` button
* An **Inbound Shipment** has been generated and is now visible to your customer

At this stage, you are still able to edit shipment lines, to add items or to delete existing lines. However, if picking has been confirmed, you need to make sure to inform your fulfillment facility of any change so they can make sure that the shipment is still correct. 

### Confirming the Outbound Shipment shipping 

The last step to issue stock with an Outbound Shipment is to confirm that stock has been shipped. This a critical step cause when goods are confirmed as shipped, they are no longer part of your inventory records. 

To confirm that an Outbound Shipment has been shipped, tap on the `Confirm Shipped` button. 

Once shipping has been confirmed: 
* Shipment status is now `SHIPPED`
* Goods are  no longer part of your inventory
* You can no longer edit shipment lines
* You can no longer delete the shipment
* You can print a **delivery note** or an **invoice**

### Tracking Progress of Outbound Shipments

If your customer is also using mSupply, you wil be able to see when they'll receive your shipments:
* status will become `DELIVERED` when goods are received: your customer confirmed that they received your goods
* status will become `VERIFIED` when shipment has been verified by your customer. Goods are now part of their inventory

## Viewing an Outbound Shipment

When viewing a specific shipment, you can view the batches on that shipment grouped by item or with each batch listed separately.
To change the view mode, click the `Group by item` switch. 

When grouped by item, you can expand the item to see individual batches, or use the expand in the table header to expand all grouped rows. If you click on an item you will also see all selected batches, as shown in this example:

![Group by Item](/docs/distribution/os_group_by_item.gif)