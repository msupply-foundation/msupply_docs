+++
title = "Commandes Internes"
description = "Commander chez des fournisseurs utilisant mSupply."
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

Les commandes internes portent plusieurs autres noms dans certains pays ou systèmes :

- Réquisitions
- Commandes
- Rapports Commande

Les commandes internes sont un moyen qui permet aux utilisateurs d'adresser une commande à l'endroit d'un autre dépôt.

## Voir les Commandes Internes

Pour adresser une commande à un fournisseur:

1. Allez dans le menu `Approvisionnement`
2. Cliquez sur `Commandes internes`

![Internal Order: nav](/docs/replenishment/images/intord_access_fr.png)

Une liste de commandes internes s'affiche à l'écran:

![Internal Order: list](/docs/replenishment/images/intord_list_fr.png)

Vous pouvez utiliser le champs `Search by comment` pour filter la liste par commentaire:

![Internal Order: filter by comment](/docs/replenishment/images/intord_filterlistbycomment.gif)

Vous pouvez trier la liste à l'aide des en-têtes de colonne :

1. Appuyez sur l'en-tête de la colonne que vous souhaitez trier. La colonne est triée par ordre croissant.
2. Appuyez à nouveau sur l'en-tête, la colonne sera triée dans l'ordre inverse.

## Créer une nouvelle commande interne

### Sélectionner un fournisseur

1. Cliquez sur le bouton `Nouvelle Commande` (dans le coin supérieur droit):

![Internal Order: new order](/docs/replenishment/images/intord_newreqbutton_fr.png)

2. Une nouvelle fenêtre vous invitant à choisir un fournisseur s'ouvre:

![Internal Order: select supplier](/docs/replenishment/images/intord_selectsupplier2_fr.png)

3. Sélectionnez un fournisseur en cliquant sur son nom. Vous verrez une fenêtre comme celle-ci :

![Internal Order: newly created order](/docs/replenishment/images/intord_newintord_fr.png)

### Définition du Stock Mensuel Maximum (SMM ou Maximum MOS)

La définition du Stock Mensuel Maximum est un élément essentiel pour le calcul de la **Quantité suggérée**. Vous pouvez modifier cette valeur librement.


- Règle générale du secteur : En règle générale, le _SMM_ doit être défini à 3 fois le cycle de commande.

- SMM par défaut : Le SMM par défaut est de `3.0`, ce qui est basé sur un cycle de commande mensuel.
- Exemple : Si le cycle de commande est de deux mois, le SMM doit alors être défini sur 3 x 2 = Exemple : Si le cycle de commande est de deux mois, le SMM doit alors être défini sur 3 x 2 = `6.0`.

<div class="imagetitle">
Dans l'exemple ci-dessous, nous définissons notre SMM à 3 mois.  
</div>

![MaxMOS](/docs/replenishment/images/intord_maxmos.png)

Remarque importante : Vous pouvez définir le SMM avant ou après l'ajout d'articles à votre commande.

### Ajout d'un article unique

Pour ajouter un article unique à votre commande, appuyez sur `Ajouter un article`. Une nouvelle fenêtre apparaît :

![Internal Order: add item](/docs/replenishment/images/intord_additem2.png)

Sélectionnez l'article que vous souhaitez ajouter à votre commande. Ouvrez le menu déroulant `Détails du stock` et choisissez l'article dans la liste. Vous pouvez également saisir une partie ou la totalité du nom (ou du code) de l'article pour effectuer une recherche spécifique.

Une fois l'article sélectionné, apparaissent les informations suivantes dans la fenêtre :

- **Code Article** and **Nom Article**
- **Unité**:  l'unité par défaut utilisée pour cet article (ex. :_comprimé, flacon_)
- **CMM**: Consommation Moyenne Mensuelle. Il s'agit de la quantité moyenne de stock utilisée par votre dépôt chaque mois (calculée sur la base d'un nombre configurable de mois, la valeur par défaut étant de 3 mois).
- **Quantité Suggérée**: la quantité de stock que mSupply vous suggère de commander pour atteindre votre quantité cible de stock.
- **Quantité commandée**: la quantité d'unités que vous demandez à votre fournisseur.

Apparaissent également les graphiques suivants :

- **Répartition du stock**: ce graphique présente les informations suivantes.
  - La _Quantité cible_ pour l'article. Elle est calculée comme suit : _SMM x CMM_.
  - Votre Stock actuel (_en gris_).
  - La _Quantité suggérée_ calculée par mSupply.

<div class="imagetitle">
Dans l'exemple ci-dessous, notre quantité cible est de 600 unités, ce qui équivaut à 3 mois de stock (3 x 200 = 600 unités). Notre stock actuel (en gris) est de 50 unités. Ainsi, pour atteindre mon objectif, mSupply suggère de commander 550 unités (600 - 50).

</div>

![Stock Distribution](/docs/replenishment/images/intord_charts_stockdistri.png)

<div class="imagetitle">
Dans un autre exemple, la quantité cible est de 62 unités. Comme nous avons déjà 250 unités en stock (en gris), la quantité suggérée est nulle.

</div>

![Stock Distribution 2](/docs/replenishment/images/intord_charts_stockdistri2.png)

- **Historique de consommation (mensuel)**:  Ce graphique présente la consommation mensuelle jusqu'à 12 mois en arrière (en gris) et la CMM actuelle (en orange).

![Consumption](/docs/replenishment/images/intord_charts_consumption.png)

- **Évolution du stock**: Ce graphique vous montre votre niveau de stock des 30 derniers jours et votre stock projeté pour les 30 prochains jours. Le stock projeté sera mis à jour en fonction de vos saisies dans le champ `Quantité commandée`.

![Stock Evolution](/docs/replenishment/images/intord_charts_stockevolution.png)

### Adding items using a master list

If your organisation is using Master Lists, you can add multiple items at once using your store's master lists. It is particularly useful when you have a lot of items in your order and you don't want to add them all one by one.

1. Tap on the `Add from master list` button
2. Select a master list
3. A dialog window opens asking you whether you want to add all of the items from this master list. Tap `OK` if you wish to proceed.

All the items of the master list are now listed in your order. If you had previously added single item, it will add items that are not already there.

Tap on an order line to change the **Order Quantity** or tap on the button `Requested to Suggested` button

![Internal Order: add from master list](/docs/replenishment/images/intord_addfromml.gif)

<div class="remarque"> 
Master Lists are defined and assigned to stores at the central server level. You can only see the master lists that are visible to your store. 
<br> <br>
If you don't find the master list you are looking for and if you want to create a new one, please contact your administrator.
</div>

<div class="conseil">
You can create Internal Orders from multiple master lists by repeating above actions with another master list. 
</div>

### Reading the Internal Order's list

When you add items (using a master list or not), the item is added to the order's table. The following information is provided for each order line:

| Status                   | Description                                                                                                                                        |
| :----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code**                 | Code of the item                                                                                                                                   |
| **Name**                 | Name of the item                                                                                                                                   |
| **SoH (Est. remaining)** | How much stock currently available in your store for this store                                                                                    |
| **AMC**                  | Average Monthly Consumption: how much stock your store uses each month on average (based on a configurable number of months, defaults to 3 months) |
| **Target Stock**         | This is the stock you are aiming for. Calculated as: AMC x Maximum MOS                                                                             |
| **Suggested Quantity**   | How much stock mSupply suggests that your order. This is calculated as: AMC x Maximum MOS - SoH                                                    |
| **Requested**            | This is set to zero by default. This is the quantity of units you are ordering from your supplier.                                                 |
| **Comment**              | A comment for the order line. Comments will be visible to your supplier.                                                                           |

### Using Suggested Quantities

If you tap on the `Use Suggested Quantities` on the requisition header, mSupply will automatically copy the values in the **Suggested Quantity** column into the **Requested Quantity** column.

You can always manually edit the order quantity for each by tapping on an order line.

![Use Suggested Quantities](/docs/replenishment/images/intord_reqtosug.png)

### Printing an Internal Order

When viewing a specific Internal Order, simply click the `Print` button which is on the top right of the page.
When printing, a PDF file is generated for you, which will then open in a new browser tab. This can then be printed using your browser by clicking print or using `control`+`P` (if using windows) or `cmd`+`P` keys on your keyboard (if using a mac).

![Print button](/docs/introduction/images/print_button.png)

This will either

- Show a menu of possible reports for you to select from before creating a PDF. This will happen if there are more than one report defined for the `Requisition` report type.
- Create a PDF immediately, if there is only one report to select from

![Print menu](/docs/distribution/images/os_print_menu.png)

### Sending an Internal Order

To send the order to your supplier:

1. Tap on the `Confirm Sent` button (bottom right corner)
2. A dialog window opens asking you whether you are sure to want to send the order. Tap on `OK` to proceed
3. Status of your order is now `SENT` and the order is no longer editable

<div class="avertissement">
Ensure that your order is correct before sending it to your supplier. Once sent, no further changes can be made to finalised orders. 
</div>
