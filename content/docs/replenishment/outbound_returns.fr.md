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

3. Une nouvelle fenêtre s'ouvre `Fournisseurs`, vous invitant à sélectionner un fournisseur.

#### Sélectionner un fournisseur

1. Dans la fenêtre `Fournisseurs`, une liste des fournisseurs disponibles s'affiche. Vous pouvez sélectionner votre fournisseur dans la liste ou saisir autant de noms de fournisseurs que vous le souhaitez.
<div class="imagetitle">
Dans l'exemple ci-dessous, nous voulons renvoyer le stock à <b>Entrepôt régional de Kamo</b>. 
</div>

![Search supplier list](/docs/replenishment/images/or_select_supplier.png)

<div class="tip">
Vous pouvez savoir si un fournisseur utilise également mSupply dans son magasin. Si c'est le cas, vous verrez une icône comme celle-ci (<img src="/docs/replenishment/images/is_msupplystoreicon.png" alt="Store" style="width:auto">) à côté du code du fournisseur. 
</div>

2. Une fois que vous avez tapé ou appuyé sur `Entrer`, ou cliquez sur un fournisseur, votre retour sortant est automatiquement créé

<div class=imagetitle>
Si tout s'est bien passé, vous devriez voir le nom de votre fournisseur dans le coin supérieur gauche et le statut devrait être le suivant <code>NOUVEAU</code> 
</div>

![Outbound return: created](/docs/replenishment/images/or_created.png)

### Saisir une référence fournisseur
Une fois le retour sortant créé, vous pouvez saisir une référence fournisseur dans le champ `Référence`, s'il en a un (par exemple _PO#1234567_)

### Consulter ou modifier le panneau d'information sur les retours sortants
Le panneau d'information vous permet de consulter ou de modifier des informations sur le retour sortant. Il est divisé en plusieurs sections :

- Informations complémentaires
- Documents connexes
- Détails du transport

Nous prévoyons d'ajouter d'autres sections à l'avenir, au fur et à mesure de la croissance d'Open mSupply.

#### Comment ouvrir et fermer le panneau d'information ?
Si vous utilisez un grand écran, le panneau d'information sera automatiquement ouvert pour vous. En revanche, sur un écran de taille moyenne, le panneau d'information sera fermé par défaut.

Pour ouvrir le panneau d'information, vous pouvez appuyer sur le bouton `Plus d'informations`, situé dans le coin supérieur droit de la vue des retours sortants.
Vous pouvez fermer l'application en appuyant sur le bouton `X Fermer`, dans le coin supérieur droit du panneau d'information.

![Open and close the Information Panel](/docs/replenishment/images/or_sidepanel.gif)

#### Informations complémentaires

Dans la section **Informations complémentaires** vous pouvez le faire :

- Voir qui a créé le retour sortant (nom de l'utilisateur)
- Afficher et modifier la couleur du retour sortant. Pour modifier la couleur, tapez sur le cercle coloré et sélectionnez une couleur dans le menu déroulant.
- Rédiger ou modifier un commentaire

#### Documents connexes

Dans la section **Documents connexes**, vous pouvez consulter d'autres documents de transaction liés au retour sortant.
Si votre retour sortant a été créé à partir d'un **Envoi entrant**, le numéro de référence de l'envoi entrant apparaît dans cette section.
À l'avenir, nous inclurons également d'autres documents tels que les documents de transport ou les bordereaux de prélèvement.

#### Détails du transport

Dans cette section, vous pouvez voir ou modifier un numéro de référence de transport (par exemple, un numéro de référence de réservation ou de suivi).

#### Actions

1. **Supprimer:** Vous pouvez appuyer sur la touche `Supprimer` pour supprimer le retour. Vous ne pouvez supprimer les retours sortants que s'ils n'ont pas été <code>EXPÉDIÉ</code>.

2. **Copier dans le presse-papiers**: Vous pouvez taper sur la touche `Copier dans le presse-papiers` pour copier les détails de la facture dans le presse-papiers.

### Séquence d'état des retours sortants

L'ordre des statuts se trouve dans le coin inférieur gauche de l'écran des retours sortants.

Les statuts passés sont mis en évidence en bleu, les statuts suivants apparaissent en gris.

<figure>
<img src="/docs/replenishment/images/or_statussequence2.png" alt="Outbound Return Status Sequence (New)" style="width:100%">
<figcaption align = "center">Séquence d'état : l'état actuel est <code>NOUVEAU</code>.</figcaption>
</figure>

<figure>
<img src="/docs/replenishment/images/or_statussequence.png" alt="Outbound Return Status Sequence (Shipped)" style="width:100%">
<figcaption align = "center">Séquence d'état : l'état actuel est </i><code>EXPÉDIÉ</code>.</figcaption>
</figure>

Il y a 5 statuts pour le retour sortant :

| Statut | Description                                                                                                                                           |
| :------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **New**       | Il s'agit du premier statut lorsque vous créez un retour. Les marchandises sont réservées (elles ne sont plus disponibles pour d'autres envois) mais font toujours partie de votre inventaire. |
| **Picked**    | Le retour est prélevé et est maintenant prêt à être expédié. Les marchandises ne font plus partie de votre inventaire.                                                                |
| **Shipped**   | Le retour a été expédié                                                                                                                               |
| **Delivered** | Votre fournisseur a reçu le retour                                                                                                                 |
| **Verified**  | Votre fournisseur a vérifié la quantité du retour. Les marchandises font désormais partie de son stock.                                                         |

Si vous survolez la séquence de statuts, une fenêtre d'historique des retours s'affiche. Vous pouvez voir la date à laquelle un retour a été mis à jour d'un statut à un autre.

<div class="imagetitle">
Ce retour a été créé le 03/03/2022, prélevé le 04/03/2022 et expédié le 07/03/2022.
</div>

![Outbound status: hover](/docs/replenishment/images/is_statussequence_hover.png)

### Case à cocher Hold

Situé dans le coin inférieur gauche, à gauche de la séquence d'état.

Vérification de la `Tenir` empêche la mise à jour du retour sortant vers le statut suivant.

![Outbound checkbox](/docs/distribution/images/os_holdcheckbox.png)

### Bouton de fermeture et de confirmation

#### Bouton de fermeture

Cliquez sur le bouton `Fermer` pour quitter la vue des retours sortants et revenir à la liste des retours sortants.

#### Bouton de confirmation

Le bouton `Confirmer` met à jour le statut d'un retour. L'état que vous pouvez confirmer dépend de l'état actuel du retour et suit la séquence indiquée ci-dessous.

Lorsque vous gérez un retour sortant, vous ne pouvez confirmer que les statuts Enlevé et Expédié.

| Confirm...          | Statut actuel | Statut suivant |
| :------------------ | :------------- | :---------- |
| **Confirmer la sélection**  | Nouveau            | Choisi      |
| **Confirmer l'envoi** | Choisi         | Expédié     |

Il n'est pas nécessaire de mettre à jour un retour au statut suivant dans la séquence. Vous pouvez choisir de sauter `Choisi` pour accéder directement à `Expédié` par exemple.

Comme indiqué ci-dessous, appuyez sur la flèche vers le bas du bouton `Confirmer` et sélectionnez le statut dans lequel vous souhaitez que le retour soit mis à jour.

![Skip Status](/docs/replenishment/images/or_confirm_skip_status.gif)

## Ajouter des lignes à un retour sortant

Tap on the `Add Item` button (top right corner).

A new `Add Item` window opens.

![Add Item button](/docs/replenishment/images/or_additembutton.png)

### Select an Item

Dans la fenêtre `Ajouter un article`, vous pouvez rechercher un article par :
- En lisant la liste des éléments disponibles
- ou en tapant tout ou partie du nom de l'article
- ou en tapant une partie ou la totalité du code d'un article

Une fois que l'élément est en surbrillance, tapez sur son nom ou appuyez sur `Entrer`.

![Select an item](/docs/replenishment/images/or_additem.gif)

#### Liste des lots disponibles :
Il s'agit d'une liste de numéros de lots que vous avez en stock pour cet article :

- **Code**: Code de l'article
- **Nom**: Nom de l'article
- **Lot**: Numéro de lot. Il s'agit d'une désignation donnée aux produits fabriqués au cours d'un même cycle de fabrication.
- **Expiration**: Date d'expiration du lot (format : MM/AAAA)
- **Emballage**: Nombre d'unités par paquet
- **Quantité disponible pour le retour**: Nombre d'emballages disponibles (non déjà affectés à d'autres envois ou retours)
- **Quantité à renvoyer**: Nombre d'emballages à renvoyer

![List of available batch numbers](/docs/replenishment/images/or_additem_listofbatches.png)

### Return a quantity of packs

As you can see above, initially the quantity of packs to return from each batch will be 0. You can adjust this to return some or all of the available stock in that batch.

<div class="imagetitle">
In the example below, we are returning all 17 packs of the first batch in the list, and just 5 packs from the second batch.
</div>

![Set quantities to return](/docs/replenishment/images/or_addquantities.png)

#### Avertissements

Il se peut que cet écran affiche un ou plusieurs messages d'avertissement :

![return quantity warning!](/docs/replenishment/images/or_addquantities_warning.png)

Si vous oubliez de saisir une quantité à restituer pour un lot et que vous cliquez sur `Prochaine étape`, vous verrez apparaître ce message d'avertissement. Vous devrez ajouter une quantité à retourner à partir d'au moins un lot.. Vous pouvez cliquer sur `Annuler` si vous ne souhaitez plus renvoyer ce stock.
### Fournir des raisons
<div class="note">

Les motifs de retour sont configurés sur le serveur central mSupply via **[options](https://docs.msupply.org.nz/preferences:options)**

</div>

Lorsque vous êtes satisfait des quantités, vous pouvez appuyer sur le bouton `Next step`. La liste des lots sera filtrée pour n'inclure que les lots pour lesquels vous avez défini une quantité de retour. Dans cette vue, vous pouvez indiquer un motif de retour pour chaque lot, ainsi qu'un commentaire supplémentaire.

![Provide return reasons](/docs/replenishment/images/or_additem_returnstep.png)

### Confirmer

Lorsque vous êtes satisfait des quantités et des raisons, vous pouvez continuer :

- le bouton `OK`. Votre article sera ajouté au retour sortant. Les quantités de chaque lot seront réservées à ce retour.
- le bouton `OK & Suivant` pour ajouter immédiatement un autre élément
- le bouton `Retour` pour revenir à l'écran `Sélectionner la quantité` 

## Modification d'une ligne de retour sortante

Pour modifier une ligne de retour, tapez dessus. L'écran suivant s'affiche `Edit Item` qui est identique à la fenêtre `Ajouter un article`, sauf que l'article est déjà choisi.

### Modifier une ligne de retour

<div class="note">
 <b></b> Vous pouvez traiter une ligne de retour si le statut du retour est inférieur à <code>EXPÉDIÉ</code>. 
</div>

1. Ouvrez le retour sortant que vous souhaitez modifier.
2. Tapez sur la ligne que vous souhaitez modifier. Une fenêtre identique à celle de `Ajouter un article` apparaît. À ce stade, vous pouvez

   - Modifier la quantité à renvoyer pour chaque lot
   - Cliquez sur `Prochaine étape` pour consulter/ajuster les motifs et les commentaires

Si vous réglez la quantité à restituer sur `0`, cette ligne sera supprimée de la déclaration.

Si vous réglez toutes les quantités de retour sur `0`, et cliquez sur `Prochaine étape` vous verrez apparaître ce message d'avertissement. Il vous informe qu'aucune quantité de retour n'a été fournie ; à partir de là, vous pouvez cliquer sur `OK` pour confirmer, auquel cas la fenêtre se fermera et toutes les lignes relatives à cet élément seront supprimées.

![no quantities warning!](/docs/replenishment/images/or_edit_noquantities.png)

<div class="note">
 <b></b> Lorsque vous modifiez une ligne de retour, vous ne pouvez pas modifier le poste. Vous devez supprimer la ligne de retour et en créer une nouvelle. 
</div>

### Supprimer une ligne de retour

1. Ouvrez le retour sortant que vous souhaitez modifier.
2. Sélectionnez la ou les ligne(s) à supprimer en cochant la ou les case(s) à droite de la liste.
3. Aller à la page `Actions` menu déroulant (en haut à droite, au-dessus de la liste)
4. Sélectionner `Supprimer les lignes sélectionnées`

![Outbound return actions dropdown](/docs/replenishment/images/or_actions_deletelines.png)

<div class="imagetitle">
Dans l'exemple ci-dessous, nous supprimons 2 articles, avec les codes 030453 et 201116.
</div>

![Alt Text](/docs/replenishment/images/or_deleteselectedlines.gif)

<div class="tip">
 <b></b> Vous pouvez supprimer plusieurs lignes à la fois. Veillez à vérifier ce qui est sélectionné avant d'effectuer l'action Supprimer. 
</div>

## Traitement d'un retour sortant

### Confirmation de l'enlèvement des retours sortants

La préparation des commandes est le processus par lequel des articles individuels sont prélevés dans un centre de traitement des commandes (généralement un entrepôt ou un magasin de produits pharmaceutiques).

Une fois qu'un retour a été créé, l'étape suivante consiste à aller chercher les articles pour préparer le retour proprement dit. Pour vous aider dans cette tâche, vous pouvez générer un document **le bordereau de prélèvement**. Un bordereau de prélèvement indique

- les articles à prélever
- la quantité et le numéro de lot de chaque article
- Si vous gérez vos stocks à l'aide de magasins, l'endroit où se trouvent les articles.

Une fois tous les articles prélevés et emballés, vous pouvez confirmer le prélèvement du retour pour indiquer qu'il est prêt à être expédié. Vous pouvez alors confirmer le prélèvement du retour pour indiquer qu'il est prêt à être expédié.
Pour confirmer qu'un retour a été prélevé, appuyez sur le bouton `Confirmer la sélection`.

![Alt Text](/docs/replenishment/images/or_confirmpicked.gif)

Une fois la sélection confirmée :

- Le statut du retour est maintenant `CHOISI`
- Les marchandises ne font plus partie de votre inventaire
- Vous êtes maintenant invité à confirmer l'expédition par le biais du bouton `Confirmer l'envoi`
- Si votre fournisseur utilise également mSupply, il est possible d'obtenir un **Retour entrant** a été généré et est maintenant visible par votre fournisseur

À ce stade, vous pouvez encore modifier les lignes de retour, ajouter des articles ou supprimer des lignes existantes. Toutefois, si le prélèvement a été confirmé, vous devez veiller à informer votre service d'exécution des commandes de tout changement afin qu'il puisse s'assurer que le retour est toujours correct.

### Confirmation de l'expédition du retour sortant

La dernière étape d'un retour sortant consiste à confirmer que le stock a été expédié.

Pour confirmer qu'un retour sortant a été expédié, cliquez sur `Confirm Shipped`.

Une fois l'expédition confirmée :

- Le statut du retour est maintenant `EXPÉDIÉ`
- Vous ne pouvez plus modifier les lignes de retour
- Vous ne pouvez plus supprimer le retour
- Votre fournisseur peut marquer le retour comme `LIVRÉ` une fois qu'ils ont reçu le retour

### Suivi de la progression des retours sortants

Si votre fournisseur utilise également mSupply, vous pourrez voir quand il reçoit vos retours :
- le statut deviendra `LIVRÉ` à la réception des marchandises : votre fournisseur a confirmé qu'il avait reçu votre retour
- le statut deviendra `VERIFIEE` lorsque le retour a été vérifié par votre fournisseur. Les marchandises font désormais partie de leur inventaire.

## Visualisation d'un retour sortant
Lorsque vous consultez une déclaration spécifique, vous pouvez visualiser les lots de cette déclaration groupés par article ou avec chaque lot listé séparément.
Pour modifier le mode d'affichage, cliquez sur le commutateur `Regroupement par poste`.

Lorsque les lots sont regroupés par élément, vous pouvez développer l'élément pour voir les lots individuels, ou utiliser le développement dans l'en-tête du tableau pour développer toutes les lignes regroupées. Si vous cliquez sur un élément, vous verrez également tous les lots sélectionnés, comme le montre cet exemple :
![Group by Item](/docs/replenishment/images/or_group_by_item.gif)

Si vous manquez de place sur votre écran, ou si certaines colonnes ne vous intéressent tout simplement pas, vous avez la possibilité de masquer les colonnes affichées dans cette vue.

Cliquez sur le bouton `Afficher / masquer les colonnes` qui se trouve en haut à droite du tableau. La liste des colonnes disponibles s'affiche. Vous pouvez cocher les colonnes que vous souhaitez voir. Les options choisies sont enregistrées pour le navigateur actuel, de sorte que la prochaine fois que vous consulterez un retour sortant, vous ne verrez que les colonnes sélectionnées. Si vous avez choisi les colonnes à afficher, le bouton apparaît en bleu pour vous rappeler que d'autres colonnes sont disponibles.



<div class="imagetitle">
Dans l'exemple ci-dessous, nous masquons les colonnes de tarification
</div>

![Hide columns](/docs/replenishment/images/or_filter_columns.gif)
