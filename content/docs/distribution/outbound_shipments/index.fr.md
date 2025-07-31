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

- Un envoi de stock vers un autre dépôt qui utilise mSupply
- Une sortie de stock au bénéfice d'un client
- Le traitement d'une réquisition (commande client)

## Voir les Expéditionns

### Ouvrir le Menu Expéditions

Choisir `Distribution` > `Expédition` dans le panneau de navigation.

![gotooos](images/gotoos2_fr.png)

La liste des Expéditions s'affichera (Si vous ne voyez aucune ligne, rassurez-vous. Vous venez probablement de commencer!).

De cet écran, vous pouvez:

- Voir la liste des Expéditions
- Créer une nouvelle Expédition
- Exporter les Expéditions dans un fichier `.csv`
- Imprimer une ou plusieurs Expéditions

### Liste des expéditions

1. La liste des expéditions comprend 7 colonnes:

| Colonne         | Description                            |
| :-------------- | :------------------------------------- |
| **Nom**         | Nom du Client                          |
| **Statut**      | Le statut actuel de l'expédition       |
| **Numéro**      | Le numéro de référence de l'expédition |
| **Créée le**    | La date de création                    |
| **Reference**   | La référence du Client                 |
| **Commentaire** | Commentaire sur l'expédition           |
| **Total**       | Valeur totale                          |

2. La liste peut afficher un nombre fixe d'expéditions par page. Au bas de liste, à gauche, on peut voir le nombre d'expéditons actuellement affiché à l'écran.

![Page](../../images/list_showing.png)

3. S'il y a plus de 20 expéditions, vous pouvez vous déplacer vers une autre page en cliquant sur le numéro de la page ou en utilisant les flèches droite ou gauche (coin inférieur droit).

![Page](../../images/list_pagenumbers.png)

### Recherche par nom de client

Vous pouvez filter la liste des expéditions par nom de client. Cela peut être utile si vous êtes à la recherche d'une expédition en particulier!

Entrez le nom du client dans le champs `Search by name` (à gauche, juste au-dessus des en-têtes de liste). Toutes les expéditions pour ce client apparaissent dans la liste.

### Exporter des expéditions

La liste des expéditions peut être exportée dans un fichier (csv). Cliquez simplement sur le bouton _**Exporter**_ (à droite, en haut de la page)

![Export button](images/export_fr.png)

et le fichier sera téléchargé. La fonction d'exportation téléchargera toutes les expéditions, pas seulement la page actuelle, si vous en avez plus de 20. Les expéditions sont exportées en utilisant l'ordre de tri sélectionné dans la liste, bien que vous puissiez facilement trier la liste dans Excel ou tout autre outil avec lequel vous ouvrez le fichier .csv !

### Supprimer une expédition

Vous pouvez, à partir de la liste, supprimer une expédition.

1. Sélectionnez l'expédition que vous souhaitez supprimer en cochant la case à l'extrémité gauche de la liste. Vous pouvez sélectionner plus d'une expédition à supprimer. Vous pouvez même tous les sélectionner à l'aide de la case à cocher principale dans les en-têtes de liste.

2. Ouvrez la liste déroulante `Sélectionner` (coin supérieur droit, au-dessus de la liste) et sélectionnez `Supprimer lignes sélectionnées`.

3. Une notification confirme le nombre d'expéditions supprimées (coin inférieur gauche).

<div class="remarque">
Vous ne pouvez supprimer que les expéditions avec un statut <code>NOUVEAU</code>.
</div>

![Outbound list: delete](images/os_list_deleteshipment.gif)

## Créer une expédition

1. Allez à `Distribution` > `Expédition`.

2. Cliquez sur le bouton `Nouveau` en haut à dorite de l'écran

![New Shipment](images/clicknewshipment_fr.png)

3. Une nouvelle fenêtre `Clients` s'affiche pour vous inviter à sélctionner un client.

#### Sélectionner un client

1. Dans la fenêtre `Clients`, une liste de Clients disponibles vous sera présentée. Vous pouvez sélectionner votre client dans la liste ou vous pouvez entrer manuellement le nom d'un Client. La liste sera filtrée au fil des caractères saisis.

<div class="imagetitle">
Dans l'exemple ci-dessous, du stock sera livré au client <b>Kamo Regional Warehouse</b>. 
</div>

![gif](images/os_select_customer.gif)

<div class="conseil">
Vous pouvez savoir si un client utilise également mSupply dans son dépôt. Si c'est le cas, vous verrez cette icône (images/is_msupplystoreicon.png" alt="Store" style="width:auto">) près du code du fournisseur. 
</div>

2. Une fois que vous pressez la touche `Entrer`, votre Expédition est automatiquement créée.

<div class=imagetitle>
Si tout s'est bien passé, vous devriez voir le nom de votre client dans le coin supérieur gauche et le statut devrait être <code>NOUVEAU</code> 
</div>

![Outbound shipment: created](images/os_created_fr.png)

### Modifier le nom du client

Si vous avez sélectionné le mauvais client, vous pouvez modifier le nom du client dans le champ `Customer Name` ou le sélectionner dans la liste déroulante :

![gif](images/os_change_customer.gif)

### Saisir une référence client

Une fois l'expédition créé, vous pouvez saisir une référence client dans le champ `Customer Ref`, s'il y en a une. (ex. _PO#1234567_)

### Afficher ou modifier le panneau d'information sur les expéditions

Le panneau d'information permet d'afficher ou de modifier des informations sur l'expédition. Il est divisé en plusieurs sections :

- Informations complémentaires
- Documents connexes
- Détails de la facture
- Détails du transport

Nous prévoyons ajouter d'autres sections à l'avenir, au fur et à mesure de la croissance d'Open mSupply.

#### Comment ouvrir et fermer le panneau d'information ?

Si vous utilisez un grand écran, le panneau d'information sera automatiquement ouvert pour vous. En revanche, sur un écran de taille moyenne, le panneau d'information sera fermé par défaut.

Pour ouvrir le panneau d'information, vous pouvez cliquer sur le bouton `More`, situé dans le coin supérieur droit de la vue de l'expédition..

Vous pouvez fermer la fenêtre en cliquant sur le bouton `X Close`, situé dans le coin supérieur droit de la fenêtre d'information.

![Open and close the Information Panel](images/os_infopanel_openclose.gif)

#### Informations complémentaires

Dans la section **Informations complémentaires**, vous pouvez :

- Voir qui a créé l'expédition (nom de l'utilisateur)
- Afficher et modifier la couleur de l'envoi sortant. Pour modifier la couleur, tapez sur le cercle coloré et sélectionnez une couleur dans le menu déroulant.
- Écrire ou modifier un commentaire

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
<img src="images/os_statussequence2.png" style="width:100%">
<figcaption align="center">Status Sequence: status actuel est <code>NEW</code>.</figcaption>
</figure>

<figure>
<img src="images/os_statussequence3.png" alt="Trulli" style="width:100%">
<figcaption align="center">Status Sequence: status actuel est </i><code>PICKED</code>.</figcaption>
</figure>

Il y a 6 statuts pour l'expédition :

| Status        | Description                                                                                                                               | mSupply | Editable |
| :------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :------: |
| **New**       | Il s'agit du premier status lorsque vous créez un transfert.                                                                              |   sg    |    ✓     |
| **Allocated** | L'allocation est confirmée. Les produits ne sont plus disponibles pour d'autres transferts mais font toujours partie de votre inventaire. |   sg    |    ✓     |
| **Picked**    | Le transfert est prélevé et prêt à être expédié. Les produits font toujours partie de votre inventaire.                                   |   cn    |    ✓     |
| **Shipped**   | Le transfert a été effectué et les produits ne font plus partie de votre inventaire.                                                      |   fn    |    ✓     |
| **Delivered** | Votre client a reçu le transfert                                                                                                          |   fn    |          |
| **Verified**  | Votre client a vérifié la quantité du transfert. Les produits font désormais partie de son inventaire.                                    |   fn    |          |

Si vous survolez le statut des séquences, une fenêtre d'historique des transferts s'affiche. Vous pouvez voir la date à laquelle un transfert est passé d'un statut à un autre.

<div class="imagetitle">
Ce transfert a été créé, attribué et prélevé le 29/03/2022.
</div>

![Outbound status: hover](images/os_statussequence_hover.png)

### Case à cocher Hold

Situé dans le coin inférieur gauche, à gauche du statuts de la séquence.

Le fait de cocher la case `Hold` empêche la mise à jour du transfert sortant vers le statut suivant.

![Outbound checkbox](../../images/holdcheckbox.png)

### Bouton d'annulation et de confirmation

#### Bouton d'annulation

Tapez sur le bouton `Cancel` pour quitter la vue des transfert sortants et revenir à la liste des transferts sortants.

#### Bouton de confirmation

Le bouton `Confirm` permet de mettre à jour le statut d'un transfert. Le statut que vous pouvez confirmer dépend du statut actuel du transfert et suit la séquence indiquée ci-dessous.

Lors de la gestion d'un transfert sortant, vous ne pouvez que confirmer l'allocation, le prélèvement et le transfert.

| Confirmer...               | Statut actuel | Statut suivant |
| :------------------------- | :------------ | :------------- |
| **Confirmer l'allocation** | Nouveau       | Attribué       |
| **Confirmer la sélection** | Alloué        | Choisi         |
| **Confirmer l'envoi**      | Choisi        | Expédié        |

Il n'est pas nécessaire de mettre à jour un transfert pour qu'il passe au statut suivant dans la séquence. Vous pouvez choisir d'ignorer certains d'entre eux pour passer directement à `Confirm Shipped` par exemple.

Comme indiqué ci-dessous, appuyez sur la flèche vers le bas du bouton `Confirm` et sélectionnez le statut dans lequel vous souhaitez que le transfert soit mis à jour.

![Skip Status](images/os_confirmbutton_skipstatuses.gif)

## Ajout de lignes à une expédition

Bouton de réapprovisionnement `Add Item` (en haut à droite).

Une nouvelle fenêtre `Add Item` s'ouvre.

![Add Item button](images/additembutton.png)

### Sélectionner un article

Dans la fenêtre `Add Item` vous pouvez rechercher un élément par :

- Lecture de la liste des éléments disponibles
- ou en tapant tout ou une partie du nom de l'article
- ou en tapant tout ou une partie d'un code article

Une fois que votre article est mis en évidence, tapez sur le nom ou appuyez sur `Enter`.

![Add Item list](../../images/adding-an-item-all.png)
![Add Item by name](../../images/adding-an-item-name.png)
![Add Item by code](../../images/adding-an-item-code.png)

Une fois l'élément sélectionné, les informations suivantes s'affichent :

#### En-têtes

- Code et nom de l'article (ex. _030453 Amoxicilline 250 mg Tabs_)
- la quantité de stock disponible pour cet article (ex. _3527 unités_)
- l'unité de l'article (ex. _Tab_)

<div class="imagetitle">
<b>Example:</b> For the item *030453 - Amoxicillin 250mg tabs*, there are 3527 tabs available. 
</div>

![add item headers](images/additem_headers.png)

#### [Quantité] d'unités à délivrer en paquets de [Taille de l'emballage].

Dans le champ `Issue Quantity`, vous pouvez saisir la quantité que vous souhaitez délivrer à votre client.

Par défaut, vous êtes invité à délivrer une quantité de **units**. Cependant, vous avez la possibilité de délivrer une quantité de paquets en changeant la valeur dans la deuxième liste déroulante (`Taille de l'emballage`).

La valeur par défaut est `Any` lorsque vous délivrez des unités.

![Outbound Issue quantity](images/os_issuequantityinunits.png)

#### Liste des lots disponibles :

Il s'agit d'une liste de numéros de lots que vous avez en stock pour cet article :

- **# Emballages**: Nombre d'emballages à délivrer
- **Taille de l'emballage**: Quantité d'unités par emballage
- **Unit Qty**: Quantité totale d'unités à délivrer
- **Disponible**: Nombre de paquets disponibles (non déjà affectés à d'autres expéditions)
- **En stock**: Nombre total de paquets dans votre dépot
- **Lot**: Numéro de lot. Il s'agit d'une désignation donnée aux produits fabriqués au cours d'un même cycle de fabrication.
- **Expiration**: Date d'expiration du lot (format : MM/AAAA)
- **Emplacement**: Si votre inventaire est géré avec des emplacements de stockage, le nom de l'emplacement où l'article est stocké.
- **Vente**: Prix unitaire de vente de l'article
- **En attente**: Indiquer si un lot est en attente ou non. Il n'est pas possible d'émettre un lot en attente.
- **Espace reservé**: La ligne de remplacement est utilisée lorsque la quantité à délivrer est supérieure au stock disponible.

![List of available batch numbers](images/os_additem_listofbatches.png)

### Délivrer une quantité d'unités

Par défaut, vous êtes invité à délivrer une quantité de **units**, quelle que soit la taille de l'emballage (nombre d'unités dans un emballage).
Lors de la saisie d'un nombre dans le champ `Issue Quantity`, le système choisit automatiquement le(s) numéro(s) de lot ayant la date de péremption la plus courte (logique "Premier à expirer, premier à sortir" ou FIFO).

<div class="imagetitle">
Dans l'exemple ci-dessous, nous émettons 100 unités de l'article. Les 100 unités seront prélevées dans le même lot (deuxième ligne). Le premier lot n'a pas été sélectionné car il est périmé. 
</div>

![additem!](images/os_additem_issueunits.png)

<div class="imagetitle">
Dans cet autre exemple, nous émettons 1200 unités. Le système sélectionne deux lots avec des tailles d'emballage différentes. 
</div>

![additem!](images/os_additem_issueunitsthreebatches.png)

Notez que dans cette liste, les lots qui sont disponibles pour la sélection sont affichés en premier et les lots qui ne le sont pas (en attente ou pas de stock disponible) sont affichés en dessous et dans une police grise.

### Délivrer une quantité d'emballages

Vous pouvez décider de délivrer une quantité d'**emballages**. Pour ce faire, vous pouvez modifier la valeur de la liste déroulante `Taille de l'emballage`.

<div class="imagetitle">
Imaginons que votre client ne veuille que des emballages de 12 unités. Vous pouvez changer la valeur de la liste déroulante de `Any` à `12`. 
</div>

![Alt Text](images/os_additem_switchtopack_1.png)

![Alt Text](images/os_additem_switchtopack_2.png)

Il vous est maintenant proposé d'émettre un certain nombre d'emballages de 12 unités. Seul(s) le(s) numéro(s) de lot avec une taille d'emballage de 12 unités peut(vent) être automatiquement délivré(s).

<div class="imagetitle">
Dans l'exemple ci-dessous, nous délivrons 10 emballages de 12 unités :
</div>

![Alt Text](images/os_issuepacks_1.png)

Puis passer aux paquets

![Alt Text](images/os_issuepacks_2.png)

Ce qui change la valeur `Émettre` tout en gardant la quantité totale :

![Alt Text](images/os_issuepacks_3.png)

<div class="remarque">
<b></b> si vous avez déjà introduit une quantité d'unités et que vous passez à une quantité d'emballages, la quantité d'unités sera automatiquement convertie en la quantité correcte d'emballages.  
</div>

![Alt Text](images/os_issuepacks.gif)

Lorsqu'une taille d'emballage est sélectionnée, les lignes de stock qui ont une taille d'emballage différente ne sont pas disponibles pour la sélection. Ces lignes sont donc répertoriées plus bas dans le tableau et apparaissent en caractères gris, comme les autres lignes non disponibles.

### Allocation manuelle

Que vous ayez choisi de délivrer une quantité d'unités ou d'emballages, vous pouvez toujours modifier manuellement la quantité au niveau du numéro de lot directement avant d'appuyer sur OK.

Il vous suffit de saisir ou de modifier la quantité dans la colonne `# Packs`.

Le champ principal `Quantité à délivrer` sera automatiquement mis à jour avec la nouvelle quantité.

<div class="remarque">
 <b></b> Lors de l'allocation de quantités au niveau du numéro de lot, la quantité saisie est toujours une quantité d'emballages. 
</div>

<figure>
<img src="images/os_additem_manualallocation.gif" alt="Trulli" style="width:100%">
<figcaption align="center"><i>Allocation manuelle au niveau du numéro de lot.</i></figcaption>
</figure>

### Émettre quand il n'y a pas assez de stock (ligne de remplacement)

Si la quantité à délivrer est supérieur au stock total disponible sur toutes les lignes disponibles, la quantité à délivrer sera automatiquement placée dans le champ `placeholder`, au bas de la liste des numéros de lots disponibles.

Les lignes de remplacement peuvent être attribuées ultérieurement lorsque de nouveaux stocks arrivent. Cependant, toutes les lignes d'expédition doivent être allouées avant de confirmer l'allocation.

<div class="imagetitle">
Étant donné qu'il n'y a pas de stock disponible pour les <i>042744-Diazepam Injection 5mg/ml Amp/2ml</i>, Le système délivre 100 unités dans le champ réservé. 
</div>

![Alt Text](images/os_additem_placeholder.png)

Lorsque vous examinez une expédition, vous pouvez voir si une ligne d'expédition n'a pas été allouée ou a été partiellement allouée lorsqu'elle est surlignée en bleu.

![Alt Text](images/os_placeholderlines.png)

### Confirm Item and Quantity

When you are happy with the quantity, you can either press on:

- the `OK` button. You are redirected to the Outbound Shipment view and your item has been added to the list.
- the `OK & Next` button to add another item right away
- the `Cancel` if you do not want to add the item to the Outbound Shipment anymore

## Editing an Outbound Shipment Line

To edit an shipment line, tap on it. You will be presented with the `Edit Item` window, which is identical to the `Add Item` window, except that the item is already chosen.

### Edit a Shipment Line

<div class="remarque">
 <b></b> you can edit a shipment line if the shipment has a status lower than <code>Shipped</code>. 
</div>

1. Open the Outbound Shipment you want to edit.
2. Tap on the line you want to edit. An identical window to `Add Item` appears. At this stage:

   - Edit the main `Issue Quantity` field
   - or change the number of packs value at the batch number level

<div class="remarque">
 <b></b> When editing a shipment line, you cannot change the item. You would need to delete the shipment line and to create a new one. 
</div>

### Delete a Shipment line

1. Open the Outbound Shipment you want to edit.
2. Select the line(s) you want to delete by checking the box(es) on the right of the list.
3. Go to the `Actions` dropdown menu (top right corner, above the list)
4. Select the action `Delete selected lines`

![Alt Text](images/os_actions_deleteselectedlines.png)

<div class="imagetitle">
In the below example, we are deleting <i>item 030063 - Acetylsalicylic Acid 100mg tabs</i>
</div>

![Alt Text](images/os_deleteselectedlines.gif)

<div class="conseil">
 <b></b> You can delete multiple lines at once. Be sure to review what is selected before performing the Delete action. 
</div>

## Processing an Outbound Shipment

### Allocating an Outbound Shipment

Allocation is the process of assigning one or multiple batch numbers from the inventory to a shipment line. In other words, you are assigning stock to your shipment. Once allocated, the stock is reserved for the shipment and thus for your customer.

There are 2 main ways to allocate a shipment line:

1. When adding items, system is automatically assigning stock to the new shipment line when you enter a quantity. If you don't have enough stock, system will add placeholder lines (unallocated lines).

2. Bulk action `Allocate placeholder lines`:
   - Select the lines that you want to allocate by checking boxes on the right on the list
   - In the `Actions` dropdown menu, select `Allocate placeholder lines`. System will check if there is available stock for each selected lines and allocate them using the First to Expire, First Out (FEFO) logic. A notification will let you know whether the operation is successful or not.

<div class="remarque">
You won't be able to process your Outbound Shipment if you have unallocated lines (shipment lines without batch number(s) assigned to it). You can wait for more stock to arrive or you can delete the placeholder lines. 
</div>

### Confirmer l'article et la quantité

Quand vous êtes satisfait de la quantité, vous pouvez appuyer sur :

- le bouton `OK`. Vous êtes redirigé vers la vue Expédition sortante et votre article a été ajouté à la liste
- le bouton `OK & Suivant` pour ajouter un autre article tout de suite
- le bouton `Annuler` si vous ne voulez plus ajouter l'article à l'expédition sortante

## Ajouter des lignes à une expédition sortante en utilisant une liste principale

Appuyez sur le bouton `Ajouter depuis la liste principale` (coin supérieur droit).

![Bouton Ajouter un article](images/os-add-from-master-list-button.png)

Une nouvelle fenêtre `Listes principales` s'ouvre. Cela vous permet de sélectionner la liste principale requise. Cliquez simplement sur une des listes (si vous en avez de disponibles).
Notez que les listes montrées sont celles qui sont visibles pour le client de l'expédition.

![Bouton Ajouter un article](../../images/add-item-master-lists.png)

Cliquez sur `OK` sur l'invite :
![Bouton Ajouter un article](../../images/add-item-master-list-prompt.png)

Vous aurez alors des lignes non allouées (espace réservé) ajoutées à votre expédition, qui ressemblera alors à ceci :

![Bouton Ajouter un article](images/os-after-master-list.png)

Comme vous pouvez le voir - toutes les quantités sont zéro. Vous pouvez suivre les étapes pour modifier ces lignes, comme détaillé ci-dessus.

## Modifier une ligne d'expédition sortante

Pour modifier une ligne d'expédition, appuyez dessus. La fenêtre `Modifier l'article` vous sera présentée, qui est identique à la fenêtre `Ajouter un article`, sauf que l'article est déjà choisi.

### Modifier une ligne d'expédition

<div class="note">
 <b></b> Vous pouvez modifier une ligne d'expédition si l'expédition a un statut inférieur à <code>Expédié</code>. 
</div>

1. Ouvrez l'expédition sortante que vous voulez modifier.
2. Appuyez sur la ligne que vous voulez modifier. Une fenêtre identique à `Ajouter un article` apparaît. À cette étape :

   - Modifiez le champ principal `Émettre`
   - ou changez la valeur du nombre de paquets au niveau du numéro de lot

<div class="note">
 <b></b> Lors de la modification d'une ligne d'expédition, vous ne pouvez pas changer l'article. Vous devriez supprimer la ligne d'expédition et en créer une nouvelle. 
</div>

### Supprimer une ligne d'expédition

1. Ouvrez l'expédition sortante que vous voulez modifier.
2. Sélectionnez la/les ligne(s) que vous voulez supprimer en cochant la/les case(s) sur le côté gauche de la liste.
3. Cliquez sur le bouton `Supprimer` qui apparaît en bas de la page.

<div class="imagetitle">
Dans l'exemple ci-dessous, nous supprimons <i>trois lignes d'espace réservé</i>.
</div>

![Alt Text](images/delete-outbound-shipment-line.gif)

<div class="tip">
 <b></b> Vous pouvez supprimer plusieurs lignes à la fois. Assurez-vous de vérifier ce qui est sélectionné avant d'effectuer l'action Supprimer. 
</div>

## Traiter une expédition sortante

### Allouer une expédition sortante

L'allocation est le processus d'assignation d'un ou plusieurs numéros de lot de l'inventaire à une ligne d'expédition. En d'autres termes, vous assignez du stock à votre expédition. Une fois alloué, le stock est réservé pour l'expédition et donc pour votre client.

Il y a 2 façons principales d'allouer une ligne d'expédition :

1. Lors de l'ajout d'articles, le système assignera automatiquement du stock à la nouvelle ligne d'expédition quand vous entrez une quantité. Si vous n'avez pas assez de stock, le système ajoutera des lignes d'espace réservé (lignes non allouées).

2. Action en lot `Allouer les lignes d'espace réservé` : Sélectionnez les lignes que vous voulez allouer en cochant les cases sur le côté gauche de la liste

3. Cliquez sur le bouton `Allouer les lignes d'espace réservé` qui apparaît en bas de la page. Le système vérifiera s'il y a du stock disponible pour chaque ligne sélectionnée et les allouera en utilisant la logique Premier à expirer, Premier sorti (FEFO). Une notification vous fera savoir si l'opération est réussie ou non.

<div class="note">
Vous ne pourrez pas traiter votre expédition sortante si vous avez des lignes non allouées (lignes d'expédition sans numéro(s) de lot assigné(s)) avec une quantité supérieure à 0. Vous pouvez attendre que plus de stock arrive ou vous pouvez supprimer les lignes d'espace réservé. Toutes les lignes non allouées avec une quantité de 0 seront automatiquement supprimées pour vous quand vous allouez.
</div>

### Confirmer l'allocation d'une expédition sortante

Une fois que toutes vos lignes d'expédition ont été allouées, vous pouvez **confirmer l'allocation** :

- Le statut actuel de l'expédition doit être `NOUVEAU`
- Les lignes doivent être assignées avec un ou plusieurs numéros de lot. Vous ne pourrez pas confirmer l'allocation si votre expédition contient des lignes sans numéros de lot assignés (lignes d'espace réservé).

Pour confirmer l'allocation, appuyez sur le bouton `Confirmer alloué`.

![Alt Text](images/confirm-allocated-outbound-shipment-line.gif)

Une fois l'allocation confirmée :

- Le statut de l'expédition est `ALLOUÉ`
- Vous êtes maintenant invité à confirmer le prélèvement via le bouton `Confirmer prélevé`
- Tous les articles et leurs quantités seront réservés, ce qui signifie qu'ils ne sont plus disponibles pour allocation
- Vous pouvez imprimer un **bordereau de prélèvement** à envoyer à votre entrepôt pour qu'ils puissent commencer à préparer l'expédition

### Confirmer le prélèvement d'expédition sortante

Le prélèvement fait référence au processus où les articles individuels sont prélevés d'une installation de réalisation (habituellement un entrepôt ou un magasin de pharmacie).

Une fois qu'une expédition a été allouée, l'étape suivante est d'aller chercher les articles pour préparer l'expédition actuelle. Pour aider avec cela, vous êtes capable de générer un **bordereau de prélèvement**. Un bordereau de prélèvement indique :

- Les articles à prélever
- La quantité et les numéros de lot pour chaque article
- Si vous gérez votre inventaire avec des emplacements de stockage, où les articles sont situés

Une fois que tous les articles sont prélevés et emballés. Vous pouvez alors confirmer le prélèvement de l'expédition pour indiquer qu'elle est prête à être expédiée. Les marchandises ne font plus partie de votre inventaire et ne peuvent pas être allouées à d'autres expéditions une fois que le statut a été changé à `PRÉLEVÉ`.

Pour confirmer qu'une expédition a été prélevée, appuyez sur le bouton `Confirmer prélevé`.

Une fois le prélèvement confirmé :

- Le statut de l'expédition est maintenant `PRÉLEVÉ`
- Vous êtes maintenant invité à confirmer l'expédition via le bouton `Confirmer expédié`
- Si votre client utilise également mSupply, alors une **expédition entrante** a été générée et est maintenant visible pour votre client

À cette étape, vous êtes encore capable de modifier les lignes d'expédition, d'ajouter des articles ou de supprimer des lignes existantes. Cependant, si le prélèvement a été confirmé, vous devez vous assurer d'informer votre installation de réalisation de tout changement pour qu'ils puissent s'assurer que l'expédition est encore correcte.

### Confirmer l'expédition sortante

La dernière étape pour émettre du stock avec une expédition sortante est de confirmer que le stock a été expédié. C'est une étape critique car quand les marchandises sont confirmées comme expédiées, elles ne font plus partie de vos enregistrements d'inventaire.

Pour confirmer qu'une expédition sortante a été expédiée, appuyez sur le bouton `Confirmer expédié`.

Une fois l'expédition confirmée :

- Le statut de l'expédition est maintenant `EXPÉDIÉ`
- Les marchandises ne font plus partie de votre inventaire
- Vous ne pouvez plus modifier les lignes d'expédition
- Vous ne pouvez plus supprimer l'expédition
- Vous pouvez imprimer un **bon de livraison** ou une **facture**

### Suivre le progrès des expéditions sortantes

Si votre client utilise également mSupply, vous serez capable de voir quand ils recevront vos expéditions :

- le statut deviendra `LIVRÉ` quand les marchandises sont reçues : votre client a confirmé qu'il a reçu vos marchandises
- le statut deviendra `VÉRIFIÉ` quand l'expédition a été vérifiée par votre client. Les marchandises font maintenant partie de leur inventaire.

## Traiter le retour de stock d'une expédition sortante

Parfois, le stock envoyé via une expédition sortante devra être retourné. Vous pouvez faire cela en créant un [Retour client](../customer-returns).

1. Ouvrez l'expédition sortante pour laquelle vous aimeriez traiter le retour d'une partie ou de tout le stock
2. Assurez-vous que le statut est au moins `EXPÉDIÉ`
3. Sélectionnez la/les ligne(s) pour laquelle vous voulez traiter le retour en cochant la/les case(s) à droite de la liste
4. Cliquez sur le bouton `Retourner les lignes sélectionnées` qui apparaît en bas de la page.

![Lignes de retour OS](images/return-selected-outbound-shipment-line.gif)

### Sélectionner la quantité retournée

Une modale s'ouvrira, contenant chaque ligne que vous avez sélectionnée pour le retour :

| Colonne                | Description                                                                                           |
| :--------------------- | :---------------------------------------------------------------------------------------------------- |
| **Code**               | Code de l'article                                                                                     |
| **Nom**                | Nom de l'article                                                                                      |
| **Lot**                | Numéro de lot. C'est une désignation donnée aux produits fabriqués dans la même série de fabrication. |
| **Expiration**         | Date d'expiration du lot (format : MM/AAAA)                                                           |
| **Taille de paquet**   | Quantité d'unités par paquet                                                                          |
| **Qté paquet émise**   | Nombre de paquets qui ont été émis dans l'expédition sortante                                         |
| **Quantité retournée** | Nombre de paquets à retourner                                                                         |

Les valeurs de `Quantité retournée` seront initialement `0` - vous pouvez ajuster cela pour retourner une partie ou tout le stock disponible.

#### Avertissements

Si vous oubliez d'entrer une `Quantité retournée` pour une ligne et cliquez sur `Étape suivante`, vous verrez ce message d'avertissement. Vous devrez ajouter une quantité retournée d'au moins une ligne. Vous pouvez cliquer sur `Annuler` si vous ne voulez plus traiter le retour de ce stock.
![Alt Text](images/os_selectquantity_warning.png)

### Fournir des raisons

Une fois que vous êtes satisfait de vos quantités retournées, vous pouvez cliquer sur `Étape suivante`. La liste des lignes sera filtrée pour inclure seulement les lignes pour lesquelles vous avez fourni une quantité de retour. Dans cette vue, vous pouvez entrer une raison pour le retour de chaque ligne, et un commentaire supplémentaire.

![Alt Text](images/os_return_lines_modal.gif)

### Confirmer

Quand vous êtes satisfait des quantités et des raisons, vous pouvez appuyer sur :

- le bouton `OK`. un Retour client sera créé, et vous serez redirigé pour le voir.
- le bouton `Retour`, pour retourner à l'étape `Sélectionner la quantité`

## Visualiser une expédition sortante

Lors de la visualisation d'une expédition spécifique, vous pouvez voir les lots sur cette expédition groupés par article ou avec chaque lot listé séparément.
Pour changer le mode de vue, cliquez sur l'interrupteur `Grouper par article`.

Quand groupé par article, vous pouvez développer l'article pour voir les lots individuels, ou utiliser le développement dans l'en-tête du tableau pour développer toutes les lignes groupées. Si vous cliquez sur un article vous verrez aussi tous les lots sélectionnés, comme montré dans cet exemple :

![Grouper par article](images/os_group_by_item.gif)

Si vous n'avez pas assez de place sur votre écran, ou simplement n'êtes pas intéressé par certaines des colonnes montrées, vous avez l'option de cacher quelles colonnes sont montrées dans cette vue.

Cliquez sur le bouton `Montrer / cacher les colonnes` qui est en haut à droite du tableau. Cela donne une liste des colonnes disponibles - vous pouvez cocher les colonnes que vous voulez voir. Les options choisies sont stockées pour le navigateur actuel, donc la prochaine fois que vous visualisez une expédition sortante, vous verrez seulement les colonnes sélectionnées. Si vous avez choisi quelles colonnes montrer, alors le bouton est montré en bleu pour vous rappeler qu'il y a plus de colonnes disponibles.

![Cacher les colonnes](images/os_show_hide_columns.gif)
