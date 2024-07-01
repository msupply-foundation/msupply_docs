+++
title = "Retours sortants"
description = "Returning stock to your suppliers."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 45
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Les retours sortants peuvent être utilisés pour renvoyer des stocks à un fournisseur.

Il est important de pouvoir renvoyer des marchandises à un fournisseur sans qu'elles soient comptabilisées comme des marchandises délivrées à un client. Si vous ne faites que distribuer des marchandises à votre fournisseur par le biais d'un envoi sortant, ces marchandises seront comptabilisées dans la "sortie" (consommation) de votre magasin. Un retour sortant est la bonne façon de renvoyer des marchandises à un fournisseur.


Si vous avez utilisé mSupply dans le passé, vous connaissez peut-être le terme **Crédit fournisseur** au lieu de Retour sortant.

## Visualisation des retours sortants

### Ouvrir le menu des retours sortants

Choisir `Réapprovisionnement` > `Retours sortants` dans le panneau de navigation.

![gotooor](/docs/replenishment/images/gotoor.png)

Une liste de retours sortants s'affiche (si vous n'en voyez aucun, c'est que vous venez de commencer !)

À partir de cet écran, vous pouvez

- Voir la liste des retours sortants
- Créer un nouveau retour sortant
- Exporter les retours sortants vers un fichier `.csv` 

### Liste des retours sortants

1. La liste des retours sortants est divisée en 6 colonnes :

| Colonne        | Description                    |
| :------------ | :----------------------------- |
| **Nom**      | Nom du fournisseur           |
| **Statut**    | État actuel du retour   |
| **Nombre**    | Numéro de référence du retour |
| **Créée**   |Date de création du retour    |
| **Référence** | Référence du fournisseur             |
| **Commentaire**   | Commentaire pour le retour         |

1. La liste peut afficher un nombre fixe de déclarations par page. Dans le coin inférieur gauche, vous pouvez voir combien de déclarations sont actuellement affichées sur votre écran.

![Page](/docs/distribution/images/os_list_showing.png)

3. Si vous avez plus de déclarations que la limite actuelle, vous pouvez naviguer vers les autres pages en tapant sur le numéro de la page ou en utilisant les flèches droite ou gauche (en bas à droite).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

4. Vous pouvez également sélectionner un nombre différent de lignes à afficher par page en utilisant l'option située en bas à droite de la page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Recherche par nom de fournisseur

Vous pouvez filtrer la liste des déclarations par nom de fournisseur ou par statut. Cela peut s'avérer utile si vous recherchez une déclaration en particulier !
Sélectionnez l'option `Nom` pour filtrer la liste en fonction du nom du fournisseur :

![Outbound return filter](/docs/replenishment/images/or_filter.png)

Saisissez le nom d'un fournisseur dans le champ `Nom` champ. Toutes les déclarations de ce fournisseur apparaîtront dans la liste.

### Exportation des retours sortants
La liste des retours sortants peut être exportée dans un fichier séparé par des virgules (csv). Il suffit de cliquer sur le bouton d'exportation (à droite, en haut de la page).

![Export button](/docs/distribution/images/export.png)

et le fichier sera téléchargé. La fonction d'exportation téléchargera tous les retours sortants, et pas seulement la page en cours, si vous en avez plus de 20.

### Supprimer un retour sortant

Vous pouvez supprimer un retour de la liste des retours sortants.

1. Sélectionnez la déclaration à supprimer en cochant la case située à gauche de la liste. Vous pouvez sélectionner plusieurs déclarations à supprimer. Vous pouvez même les sélectionner toutes en utilisant la case à cocher principale dans les en-têtes de liste.

2. Ouvrir le `Sélectionner` (en haut à droite, au-dessus de la liste) et sélectionnez `Supprimer les lignes sélectionnées`.

3. Une notification confirme le nombre de déclarations supprimées (en bas à gauche).
<div class="note">
Vous ne pouvez supprimer les retours sortants que s'ils n'ont pas été <code>EXPÉDIÉ</code>.
</div>

![Outbound list: delete](/docs/replenishment/images/or_delete.gif)

## Création d'un retour sortant

### Créer à partir d'un envoi entrant

Il arrive souvent que vous retourniez des marchandises que vous avez reçues par le biais d'un envoi entrant. Dans ce cas, vous pouvez [créer un retour sortant à partir de l'envoi entrant](../inbound-shipments/#returning-stock-from-an-inbound-shipment) itself.

### Créer manuellement

1. Aller à `Réapprovisionnement` > `Retour sortant`.

2. Appuyer sur le bouton `Nouveau retour`, dans le coin supérieur droit

![New Return](/docs/replenishment/images/clicknewreturn.png)

3. A new window `Suppliers` opens, inviting you to select a supplier.

#### Select a Supplier

1. In the `Suppliers` window, you will be presented with a list of available suppliers. You can select your supplier from the list or you can type as much of a supplier name as you want.

<div class="imagetitle">
In the below example, we are wanting to return stock to <b>Kamo Regional Warehouse</b>. 
</div>

![Search supplier list](/docs/replenishment/images/or_select_supplier.png)

<div class="tip">
You can tell if a supplier is also using mSupply in their store. If they do, you will see icon like this (<img src="/docs/replenishment/images/is_msupplystoreicon.png" alt="Store" style="width:auto">) next to the supplier code. 
</div>

2. Once you tap or press `Enter`, or click on a supplier, your Outbound Return is automatically created

<div class=imagetitle>
If everything went well, you should see the name of your supplier in the top left corner and the status should be <code>NEW</code> 
</div>

![Outbound return: created](/docs/replenishment/images/or_created.png)

### Enter a Supplier Reference

Once your Outbound Return has been created, you can enter a supplier reference in the `Reference` field, if they have one (eg. _PO#1234567_)

### View or edit the Outbound Return Information Panel

The Information Panel allows you to see or edit information about the Outbound Return. It is divided into multiple sections:

- Additional Info
- Related Documents
- Transport Details

We are planning to add more sections in the future as Open mSupply grows.

#### How to open and close the Information Panel?

If you are using a large screen, the information panel will be automatically opened for you. However, on an average sized screen, the information panel will be closed by default.

To open the Information Panel, you can tap on the `More` button, located in the top right corner of the Outbound Return view.

You can close by tapping on the `X Close` button, on the top right corner of the information panel.

![Open and close the Information Panel](/docs/replenishment/images/or_sidepanel.gif)

#### Additional Info

In the **Additional Info** section, you can:

- See who created the Outbound Return (name of the user)
- View and edit the Outbound Return color. To edit the color, tap on the coloured circle and select a color from the pop-up
- Write or edit a comment

#### Related Documents

In the **Related Documents** section, you can see other related transaction documents for the Outbound Return.

If your Outbound Return was created from an **Inbound Shipment**, the reference number of the Inbound Shipment would appear in this section.

In the future, we would also include other documents such as transportation documents or pick slips.

#### Transport Details

In this section, you can see or edit a transport reference number (eg. a booking or a tracking reference number).

#### Actions

1. **Delete:** You can tap on the `Delete` button to delete the return. You can only delete Outbound Returns if they have not been <code>SHIPPED</code>.
2. **Copy to Clipboard**: You can tap on the `Copy to Clipboard` button to copy the invoice details to the clipboard.

### Outbound Return Status Sequence

The status sequence is located at the bottom left corner of the Outbound Return screen.

Passed statuses are hightlighted in blue, next statuses appear in grey.

<figure>
<img src="/docs/replenishment/images/or_statussequence2.png" alt="Outbound Return Status Sequence (New)" style="width:100%">
<figcaption align = "center">Status Sequence: current status is <code>NEW</code>.</figcaption>
</figure>

<figure>
<img src="/docs/replenishment/images/or_statussequence.png" alt="Outbound Return Status Sequence (Shipped)" style="width:100%">
<figcaption align = "center">Status Sequence: current status is </i><code>SHIPPED</code>.</figcaption>
</figure>

There are 5 status for the Outbound Return:

| Status        | Description                                                                                                                                           |
| :------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **New**       | This is the first status when you create a return. Goods are reserved (no longer available for other shipments) but are still part of your inventory. |
| **Picked**    | Return is picked and is now ready to ship. Goods are no longer part of your inventory.                                                                |
| **Shipped**   | Return has been shipped                                                                                                                               |
| **Delivered** | Your supplier has received the return                                                                                                                 |
| **Verified**  | Your supplier has verified the quantity of the return. Goods are now part of their inventory.                                                         |

If you hover over the status sequence, a return history window appears. You can see the date when a return was updated from one status to another.

<div class="imagetitle">
This return has been created on 03/03/2022, picked on 04/03/2022 and shipped on 07/03/2022
</div>

![Outbound status: hover](/docs/replenishment/images/is_statussequence_hover.png)

### Hold checkbox

Located on the bottom left corner, on the left of the status sequence.

Checking the `Hold` checkbox prevents the Outbound Return from being updated to the next status.

![Outbound checkbox](/docs/distribution/images/os_holdcheckbox.png)

### Close and Confirm button

#### Close Button

Tap on the `Close` button to quit the Outbound Return view and return to the Outbound Returns list.

#### Confirm Button

The `Confirm` button updates the status of a return. The status which you can confirm depends on the current status of the return and follows the sequence shown below.

When managing an Outbound Return, you can only confirm the Picked and Shipped statuses.

| Confirm...          | Current Status | Next Status |
| :------------------ | :------------- | :---------- |
| **Confirm Picked**  | New            | Picked      |
| **Confirm Shipped** | Picked         | Shipped     |

You don't have to update a return to the next status in the sequence. You can choose to skip `Picked` to go directly to `Shipped` for example.

As demonstrated below, tap on the down arrow of the `Confirm` button and select the status you want the return to be updated to.

![Skip Status](/docs/replenishment/images/or_confirm_skip_status.gif)

## Adding lines to an Outbound Return

Tap on the `Add Item` button (top right corner).

A new `Add Item` window opens.

![Add Item button](/docs/replenishment/images/or_additembutton.png)

### Select an Item

In the `Add Item` window, you can look up an item by:

- Reading through the list of available items
- or by typing some or all of the item name
- or by typing some or all of an item code

Once your item is highlighted, tap on the name or press `Enter`.

![Select an item](/docs/replenishment/images/or_additem.gif)

#### List of available batches:

This is a list of batch numbers that you have in store for this item:

- **Code**: Item code
- **Name**: Item name
- **Batch**: Batch number. It is a designation given to products made in the same manufacturing run.
- **Expiry**: Expiry date of the batch (format: MM/YYYY)
- **Pack**: Number of units per pack
- **Quantity Available for Return**: Number of packs available (not already allocated to other shipments or returns)
- **Quantity to Return**: Number of packs to be returned

![List of available batch numbers](/docs/replenishment/images/or_additem_listofbatches.png)

### Return a quantity of packs

As you can see above, initially the quantity of packs to return from each batch will be 0. You can adjust this to return some or all of the available stock in that batch.

<div class="imagetitle">
In the example below, we are returning all 17 packs of the first batch in the list, and just 5 packs from the second batch.
</div>

![Set quantities to return](/docs/replenishment/images/or_addquantities.png)

#### Warnings

You may see one or more warning messages on this screen:

![return quantity warning!](/docs/replenishment/images/or_addquantities_warning.png)

If you forget to enter a quantity to return for any batch and click `Next step`, you will see this warning message. You'll need to add a quantity to return from at least one batch. You can click `Cancel` if you no longer want to return any of this stock.

### Provide Reasons

<div class="note">

Return reasons are configured on the mSupply central server via **[options](https://docs.msupply.org.nz/preferences:options)**

</div>

When you are happy with the quantities, you can press the `Next step` button. The list of batches will be filtered to only include the batches you set a return quantity for. In this view, you can provide a reason for returning each batch, and an additional comment.

![Provide return reasons](/docs/replenishment/images/or_additem_returnstep.png)

### Confirm

When you are happy with the quantities and reasons, you can press on:

- the `OK` button. Your item will be added to the Outbound Return. The quantities for each batch will be reserved for this return.
- the `OK & Next` button to add another item right away
- the `Back` button, to go back to the `Select quantity` step

## Editing an Outbound Return Line

To edit a return line, tap on it. You will be presented with the `Edit Item` window, which is identical to the `Add Item` window, except that the item is already chosen.

### Edit a Return Line

<div class="note">
 <b></b> You can edit a return line if the return has a status lower than <code>SHIPPED</code>. 
</div>

1. Open the Outbound Return you want to edit.
2. Tap on the line you want to edit. An identical window to `Add Item` appears. At this stage you can:

   - Edit quantity to return for each batch
   - Click `Next step` to view/adjust the reasons and comments

If you set the Quantity to Return to `0`, that line will be removed from the return.

If you set all return quantities to `0`, and click `Next step` you will see this warning message. It is informing you that no return quantities were provided; from here you can click `OK` again to confirm, in which case the window will close and all lines for that item will be removed.

![no quantities warning!](/docs/replenishment/images/or_edit_noquantities.png)

<div class="note">
 <b></b> When editing a return line, you cannot change the item. You would need to delete the return line and create a new one. 
</div>

### Delete a Return Line

1. Open the Outbound Return you want to edit.
2. Select the line(s) you want to delete by checking the box(es) on the right of the list.
3. Go to the `Actions` dropdown menu (top right corner, above the list)
4. Select the action `Delete selected lines`

![Outbound return actions dropdown](/docs/replenishment/images/or_actions_deletelines.png)

<div class="imagetitle">
In the below example, we are deleting 2 items, with the item codes 030453 and 201116
</div>

![Alt Text](/docs/replenishment/images/or_deleteselectedlines.gif)

<div class="tip">
 <b></b> You can delete multiple lines at once. Be sure to review what is selected before performing the Delete action. 
</div>

## Processing an Outbound Return

### Confirming Outbound Return picking

Picking refers to the process where individual items are picked from a fulfilment facility (usually a warehouse or a pharmacy store).

Once a return has been created, the next step is to go get the items to prepare the actual return. To help with that, you are able to generate a **pick slip** document. A pick slip indicates:

- The items to be picked
- The quantity and batch numbers for each item
- If you manage your inventory with storage locations, where the items are located

Once all items are picked and packed. You can then confirm the picking of the return to indicate that it is ready to be dispatched.

To confirm that a return has been picked, tap on the `Confirm Picked` button.

![Alt Text](/docs/replenishment/images/or_confirmpicked.gif)

Once picking is confirmed:

- Return status is now `PICKED`
- Goods are no longer part of your inventory
- You are now invited to confirm the shipping via the `Confirm Shipped` button
- If your supplier is also using mSupply, then an **Inbound Return** has been generated and is now visible to your supplier

At this stage, you are still able to edit return lines, to add items or to delete existing lines. However, if picking has been confirmed, you need to make sure to inform your fulfilment facility of any change so they can make sure that the return is still correct.

### Confirming the Outbound Return shipping

The last step to return stock with an Outbound Return is to confirm that stock has been shipped.

To confirm that an Outbound Return has been shipped, tap on the `Confirm Shipped` button.

Once shipping has been confirmed:

- Return status is now `SHIPPED`
- You can no longer edit return lines
- You can no longer delete the return
- Your supplier is able to mark the return as `DELIVERED` once they receive the return

### Tracking Progress of Outbound Returns

If your supplier is also using mSupply, you will be able to see when they receive your returns:

- status will become `DELIVERED` when goods are received: your supplier confirmed that they received your return
- status will become `VERIFIED` when the return has been verified by your supplier. Goods are now a part of their inventory.

## Viewing an Outbound Return

When viewing a specific return, you can view the batches on that return grouped by item or with each batch listed separately.
To change the view mode, click the `Group by item` switch.

When grouped by item, you can expand the item to see individual batches, or use the expand in the table header to expand all grouped rows. If you click on an item you will also see all selected batches, as shown in this example:

![Group by Item](/docs/replenishment/images/or_group_by_item.gif)

If you do not have enough room on your screen, or simply aren't interested in some of the columns shown, you have the option of hiding which columns are shown in this view.

Click on the `Show / hide columns` button which is at the top right of the table. This gives a list of the columns available - you can check the columns you want to see. The options chosen are stored for the current browser, so next time you view an Outbound Return, you will see the selected columns only. If you have chosen which columns to show, then the button is shown in blue to remind you that there are more columns available.

<div class="imagetitle">
In the below example, we are hiding the pricing columns
</div>

![Hide columns](/docs/replenishment/images/or_filter_columns.gif)
