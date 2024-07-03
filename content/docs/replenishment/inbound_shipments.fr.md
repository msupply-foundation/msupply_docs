+++
title = "Livraisons"
description = "Récevoir du stock des fournisseurs."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 4
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

La fonctionnalité _Livraison_ peut être utilisée pour récevoir du stock venant d'un ou plusieurs fournisseurs.

Si vous aviez utilisé mSupply par le passé, vous devriez être familier du terme **Facture Fournisseur** au lieu de **_Livraison_**.

Toutes les articles reçus doivent être enregistrés dans mSupply soit par :

- Création manuelle d'une livraison (livraison manuelle)
- Traitement d'une livraison qui a été créée automatiquement dans votre dépôt suite à un envoi de stock venant d'un autre dépôt fournisseur.

## Vusialisation des Livraisons

### Ouvrir le Menu Livraison

![Go to Inbound Shipments](/docs/replenishment/images/is_gotois_fr.png)

Pour accéder au menu **Livraison** :

1. Allez dans `Approvisionnement` dans le panneau de navigation à gauche
2. Cliquez sur `Livraison`

### Liste des Livraisons

La première chose que vous voyez est une liste des Livraisons.

La liste des livraisons comprend 7 colonnes:

| Colonne         | Description                          |
| :-------------- | :----------------------------------- |
| **Nom**         | Nom du fournisseur                   |
| **Statut**      | Statut de la livraison               |
| **Numéro**      | Numéro de référence de la livraison  |
| **Créée le**    | Date de création de la livraison     |
| **Confirmée**   | Date de confirmation de la livraison |
| **Commentaire** | Commentaire sur la livraison         |
| **Total**       | Valeur totale                        |

1. La liste peut afficher **20 livraisons par page**. Dans le coin inférieur gauche, vous pouvez voir combien de livraisons sont actuellement affichées sur votre écran.

![Page](/docs/distribution/images/os_list_showing.png)

2. S'il y a plus de 20 livraisons, vous pouvez vous déplacer vers une autre page en cliquant sur le numéro de la page ou en utilisant les flèches droite ou gauche (coin inférieur droit).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

### Recherche par nom de Fournisseur

Vous pouvez filtrer la liste des livraisons par nom de fournisseur. Cela peut être utile si vous recherchez une livraison en particulier !

Saisissez le nom du fournisseur dans le champ `Recherche par nom` (à gauche, juste au-dessus des en-têtes de liste). Toutes les livraisons de ce fournisseur apparaîtront dans la liste.

### Exporter la liste des livraisons

La liste des livraisons peut être exportée dans un fichier CSV. Cliquez simplement sur le bouton _Exporter_ (à droite, en haut de la page).

![Export button](/docs/distribution/images/export_fr.png)

et le fichier sera téléchargé. La fonction d'exportation téléchargera toutes les livraisons, pas seulement la page actuelle, si vous en avez plus de 20.

### Supprimer une livraison

Vous pouvez supprimer une livraison de la liste.

1. Sélectionnez la livraison que vous souhaitez supprimer en cochant la case à l'extrémité gauche de la liste. Vous pouvez sélectionner plus d'une livraison à supprimer. Vous pouvez même toutes les sélectionner à l'aide de la case à cocher principale dans les en-têtes de liste.

2. Ouvrez la liste déroulante `Sélectionner` (coin supérieur droit, au-dessus de la liste) et sélectionnez `Supprimer lignes sélectionnées`.

3. Une notification confirme le nombre de livraisons supprimées (coin inférieur gauche)

<div class="remarque">
Vous ne pouvez supprimer que les expéditions avec un statut <code>NOUVEAU</code>.
</div>

## Créer une nouvelle livraison manuelle

1. Allez dans `Approvisionnement`> `Livraison`
2. Cliquez sur le bouton `Nouvelle Livraison`, dans le coin supérieur droit
3. Une nouvelle fenêtre `Fournisseurs` vous invitant à sélectionner un _Fournisseur_ s'affiche.

### Sélectionner un Fournisseur

1. Dans la fenêtre `Fournisseurs`, vous verrez afficher une liste de fournisseurs. Vous pouvez sélectionner directement ou saisir le nom d'un fournisseur.

<div class="conseil">
Vous pouvez savoir si un fournisseur utilise également mSupply dans son dépôt. Si c'est le cas, vous verrez une icône comme celle-ci (<img src="/docs/replenishment/images/is_msupplystoreicon.png" alt="Store" style="width:auto">) à côté du code fournisseur. 
</div>

<div class="imagetitle">
Dans l'exemple ci-dessous, nous recevons du stock de <b>Tamaki Central Medical Store</b>. 
</div>

![Select a Supplier](/docs/replenishment/images/is_selectsupplier.gif)

2. Une fois que vous avez sélection un Fournisseur, la livraison est créée.

<div class="imagetitle">
Si tout s'est bien passé, vous devriez voir le nom de votre fournisseur dans le coin supérieur gauche et le statut actuel devrait être <code>LIVRE</code>.
</div>

![New manual Inbound Shipment](/docs/replenishment/images/is_newinboundshipment_fr.png)

<div class="remarque">
Lorsque vous créez une <b>nouvelle</b> livraison manuelle, mSupply admet que la livraison a été exécutée par le fournisseur et que vous êtes sur le point de réceptionner les articles. <br /> Raison pour laquelle le statut d'une livraison manuelle a toujours la valeur <code>LIVRE</code>.
</div>

### Modifier le nom du Fournisseur

Si vous n'avez pas sélectionné le bon fournisseur, vous pouvez toujours modifié le nom du fournisseur dans le champs `Nom du fournisseur` ou sélectionner un autre:

<div class="imagetitle">
Dans l'exemple ci-dessous, nous remplaçons <b>Tamaki Central Medical Store</b> par <b>Waikato District Store</b>. 
</div>

![gif](/docs/replenishment/images/is_editsuppliername.gif)

### Saisir une référence fournisseur

Une fois que la livraison a été créée, vous pouvez renseigner la référence du fournisseur dans le champs `Fournisseur Réf.` s'il en a un: (Exple. _ PO#1234567 _)

### Afficher ou modifier le panneau d'informations sur les livraisons

Le panneau d'information vous permet de voir ou de modifier les informations sur la livraison. Il est divisé en plusieurs sections :

- Information additionnelle
- Documents connexes
- Détails de la facture
- Détails des transports

<div class="mise-a-jour">
Nous prévoyons d'ajouter d'autres sections à l'avenir au fur et à mesure de la croissance d'Open mSupply. 
</div>

#### Comment ouvrir et fermer le panneau d'information ?

Pour ouvrir le panneau d'information, vous pouvez appuyer sur le bouton `Plus d'informations`, situé dans le coin supérieur droit de la vue des envois entrants.

Vous pouvez fermer cette fenêtre en cliquant sur le bouton `X Fermer`, dans le coin supérieur droit du panneau d'information.

![Open and close the Information Panel](/docs/replenishment/images/is_infopanel_openclose.gif)

#### Informations supplémentaires

Dans la section **Informations complémentaires**, vous pouvez :

- Voir qui a créé l'envoi entrant (nom de l'utilisateur)
- Afficher et modifier la couleur de l'envoi entrant. Pour modifier la couleur, appuyez sur le cercle coloré et sélectionnez une couleur dans le menu déroulant.
- Écrire ou modifier un commentaire

#### Documents connexes

Dans la section des **Documents connexes** , vous pouvez consulter d'autres documents de transaction liés à l'envoi entrant.

Si votre envoi entrant a été créé pour répondre à une **Commande interner**, le numéro de référence de votre commande apparaît dans cette section.

À l'avenir, nous inclurons également d'autres documents tels que des relevés de température, des documents de transport ou des fiches de prélèvement.

#### Détails de la facture

Dans cette section, vous verrez par défaut le prix de revient total des articles énumérés dans l'envoi entrant.
Vous pouvez également ajouter un **Service charges** si vous souhaitez ajouter d'autres frais tels que les frais de transport. Pour ajouter des frais de service aux détails de la facture :

1. Cliquez sur bouton `Modifier les frais de service`. Une nouvelle fenêtre s'ouvre.
2. Cliquez sur le bouton `Add charge` dans la nouvelle fenêtre. Une nouvelle ligne apparaît dans la liste des frais. Vous cliquez sur `Annuler` si vous ne souhaitez rien ajouter.
3. **Name:** sélectionnez un service dans la liste déroulante. Vous pouvez personnaliser la liste des frais disponibles. Contactez votre administrateur.
4. **Commentaire:** Vous pouvez ajouter un commentaire pour fournir des détails supplémentaires sur la nouvelle taxe.
5. **Montant:** Indiquer le montant de la taxe
6. **Impôts:** Entrer un % de taxe pour la charge
7. **Total:** Le champ total est automatiquement calculé sur la base du montant et du pourcentage de la taxe.
8. **Supprimer:** Vous pouvez cliquer sur `Supprimer` pour supprimer la charge

Dans cette section, vous pouvez également modifier le taux de taxe (%) pour le prix de revient. Cliquez sur l'icône du crayon et entrez

#### Détails du transport

Dans cette section, vous pouvez voir ou modifier un numéro de référence de transport (par exemple, un numéro de référence de réservation ou de suivi).

### Séquence d'état des envois entrants

L'ordre des statuts se trouve dans le coin inférieur gauche de l'écran "Expédition entrante".

Les statuts passés sont mis en évidence en bleu, les statuts suivants apparaissent en gris.

<figure>
    <img src="/docs/replenishment/images/is_statussequence2.png" alt="Inbound Shipment Status Sequence (New)" style="width:100%">
    <figcaption align="center">Séquence d'état : l'état actuel est <code>Nouveau</code>.</figcaption>
</figure>

<figure>
    <img src="/docs/replenishment/images/is_statussequence3.png" alt="Inbound Shipment Status Sequence (Shipped)" style="width:100%">
    <figcaption align="center">Séquence d'état : l'état actuel est </i><code>Expédié</code>.</figcaption>
</figure>

Il y a 5 statuts pour l'envoi entrant :
| Statut        | Description                                                                                                        |
| :------------ | ------------------------------------------------------------------------------------------------------------------ |
| **Nouveau**       | Il s'agit du premier état lorsque vous créez un nouveau transport entrant manuel.                                             |
| **Choisi**    | Le fournisseur a confirmé que l'envoi est prélevé et prêt à être expédié (ne s'applique qu'aux envois créés automatiquement). |
| **Expédié**   | L'envoi a été expédié et les marchandises sont maintenant en transit (ne s'applique qu'aux envois créés automatiquement).           |
| **Livré** | Lorsque vous confirmez que l'envoi a été livré                                                              |
| **Vérifié**  | Lorsque vous avez vérifié l'envoi entrant                                                                        |

Vous avez probablement remarqué que deux des valeurs de statut ne s'appliquent qu'aux envois créés automatiquement. Ces envois sont créés par le système lorsqu'un autre magasin du système crée un envoi sortant pour livrer du stock à votre magasin. Dans ce cas, un message apparaît en haut de la page :

![Automatic IS message](/docs/replenishment/images/is_message_automatic.png)

Toutefois, si vous avez créé manuellement un envoi entrant, le message suivant s'affiche :

![Manual IS message](/docs/replenishment/images/is_message_manual.png)

et vous verrez que la barre d'état ne contient que les valeurs d'état qui s'appliquent à ce type de transport.

<figure align="center">
    <img src="/docs/replenishment/is_statussequence4.png" alt="Inbound Shipment Status Sequence (New & manual)" style="width:60%">
    <figcaption align="center">Séquence d'état : l'état actuel est </i><code>Nouveau</code>.</figcaption>
</figure>

Si vous survolez la séquence de statuts, une fenêtre d'historique des envois s'affiche. Vous pouvez voir la date à laquelle un envoi est passé d'un statut à un autre.
<div class="imagetitle">
Cet envoi manuel a été créé le 03/03/2022
</div>

![Inbound status: hover 2](/docs/replenishment/images/is_statussequence_hover2.png)

<div class="imagetitle">
Cette expédition automatique a été créée le 03/03/2022, attribuée le 04/03/2022 et prélevée le 07/03/202.2
</div>

![Inbound status: hover](/docs/replenishment/images/is_statussequence_hover.png)

### Case à cocher Hold

Situé dans le coin inférieur gauche, à gauche de la séquence d'état.

Vérifier le `Tenir` empêche la mise à jour de l'envoi entrant vers le statut suivant.

![Outbound hold checkbox](/docs/distribution/images/os_holdcheckbox.png)

### Bouton d'annulation et de confirmation

#### Bouton d'annulation

Cliquez sur `Cancel` pour quitter la vue des envois entrants et revenir à la liste des envois entrants.

#### Bouton de confirmation

Le bouton `Confirmer` est le bouton qui permet de mettre à jour le statut d'un envoi. Le statut que vous pouvez confirmer dépend de l'état actuel de l'envoi et suit la séquence indiquée ci-dessous.

Lorsque vous gérez un envoi entrant, vous ne pouvez que le confirmer comme étant livré ou vérifié.

| Confirmer...            | Statut actuel | Statut suivant |
| :-------------------- | :------------- | :---------- |
| **Confirmer la livraison** | Expédié        | Livré   |
| **Confirmer Vérifié**  | Livré      | Vérifié    |

Il n'est pas nécessaire de mettre à jour un envoi pour qu'il passe au statut suivant dans la séquence. Vous pouvez choisir d'ignorer certains d'entre eux pour passer directement au statut `Confirmer Vérifié` par exemple.

Comme indiqué ci-dessous, tapez sur la flèche vers le bas de l'icône `Confirmer` et sélectionnez le statut de l'envoi à mettre à jour.
![Skip Status](/docs/replenishment/images/is_skipstatus.gif)

## Ajout de lignes à un envoi entrant

Pour ajouter une ligne, Cliquez sur le bouton `Ajouter un article` situé dans le coin supérieur gauche de votre écran.

Une nouvelle fenêtre s'ouvre avec le bouton `Ajouter un article`.

![Inbound: add item button](/docs/replenishment/is_additem_button.png)

### Sélectionner un article
Dans `Ajouter un article` vous pouvez rechercher un élément par :

- En lisant la liste des éléments disponibles
- ou en tapant tout ou partie du nom d'un article
- ou en tapant une partie ou la totalité du code d'un article

Une fois que votre élément est mis en surbrillance, tapez sur le nom ou appuyez sur `Entrer`.

![Add Item](/docs/distribution/os_additem.gif)

### Onglet Quantités

Dans `Quantités` vous pouvez mettre à jour les champs suivants :

1. **Lot**: Saisissez ici le numéro de lot. Laisser en blanc si l'article n'est pas géré avec un numéro de lot.
2. **Expiration**: La date d'expiration du numéro de lot. Laisser en blanc si non applicable
3. **# Paquets**: La quantité de paquets que vous recevez
4. **Taille de l'emballage**: La quantité d'unités par paquet (par défaut, la taille du paquet est de 1)
5. **Unité Qté** (en lecture seule) : Calculé automatiquement en fonction du nombre de paquets et de la taille du paquet. (`[# Paquets] x [Taille du paquet]`)
6. Si vous recevez plus d'un numéro de lot pour le même article, vous pouvez cliquer sur le bouton `Ajouter un lot`

<div class="imagetitle">
Dans l'exemple ci-dessous, nous recevons 2 numéros de lot pour l'article <i>030453 - Amoxicillin 250mg tabs</i> avec une taille d'emballage différente. 
</div>

![Add Item quantities](/docs/replenishment/is_additem_quantities.png)

### Onglet Prix

Le `Tarification`, vous pouvez mettre à jour les champs suivants (tous sont facultatifs) :

- **Vendre**: Prix unitaire de vente de l'article (valeur par défaut : 0)
- **Coût**: Le prix unitaire d'achat de l'article (valeur par défaut : 0)
- **Unité Qté** (en lecture seule) : Nombre total d'unités pour le numéro de lot
- **Ligne Total** (en lecture seule) : Valeur totale des achats pour le numéro de lot (`[Qté unitaire] x [Coût]`)

<div class="avertissement">
Les prix de vente et de revient s'entendent par unité et non par paquet. 
</div>

<div class="imagetitle">
Dans l'exemple ci-dessous, le prix de vente est de 12 dollars par unité et le prix de revient est de 10 dollars par unité. 
</div>

![Add Item pricing](/docs/replenishment/is_additem_pricing.png)

### Onglet Localisation

Dans le troisième onglet, `Localisation`, vous pouvez sélectionner un lieu de stockage pour affecter le numéro de lot à un lieu de votre installation de stockage.
Il suffit de sélectionner un emplacement storDans le troisième ongletage dans la liste des emplacements. `Localisation` menu déroulant.
![Add Item location](/docs/replenishment/is_additem_location.png)

<div class="remarque">
Vous ne connaissez pas encore le lieu de stockage ? Vous n'êtes pas obligé de le saisir immédiatement. Vous pouvez mettre à jour le lieu de stockage à tout moment si vous n'avez pas encore confirmé la vérification. 
</div>

### Confirmer l'article et les quantités

Lorsque vous avez terminé, vous pouvez ajouter la nouvelle ligne en appuyant sur :

- `OK`si vous ne voulez pas ajouter une ligne supplémentaire à votre envoi
- `OK & Suivant`si vous avez d'autres lignes à créer

Sinon, vous pouvez appuyer sur `Annuler` et vos modifications ne seront pas sauvegardées.
## Modification d'une ligne d'envoi entrant
Pour modifier une ligne d'envoi entrant, il suffit de taper dessus. L'écran `Modifier l'article` qui est identique à la fenêtre `Ajouter un article` sauf que l'élément est déjà choisi et ne peut être modifié.
### Modifier une ligne d'expédition

<div class="remarque">
 <b></b> vous pouvez modifier une ligne d'expédition si le statut de l'expédition est supérieur ou inférieur à <code>VERIFIEE</code>. 
</div>

1. Ouvrez l'envoi entrant que vous souhaitez modifier.
2. Tapez sur la ligne que vous souhaitez modifier. Une fenêtre identique à celle de `Ajouter un article` apparaît. À ce stade :
   - Modifier la page principale `Numéro Quantité` champ
   - ou modifier la valeur du nombre d'emballages au niveau du numéro de lot
<div class="remarque">
 <b></b> Lorsque vous modifiez une ligne d'expédition, vous ne pouvez pas modifier l'article. Vous devez supprimer la ligne d'expédition et en créer une nouvelle. 
</div>

### Supprimer une ligne de transport

1. Ouvrez l'envoi entrant que vous souhaitez modifier.
2. Assurez-vous que le statut n'est pas encore `VERIFIEE`
3. Sélectionnez la (les) ligne(s) à supprimer en cochant la (les) case(s) située(s) à droite de la liste.
4. Aller à la page `Actions` menu déroulant (en haut à droite, au-dessus de la liste)
5. Sélectionner l'action `Supprimer les lignes sélectionnées`

![Alt Text](/docs/distribution/os_actions_deleteselectedlines.png)

<div class="imagetitle">
Dans l'exemple ci-dessous, nous supprimons <i>item 030063 - Acide acétylsalicylique 100mg tabs</i>
</div>

![Alt Text](/docs/distribution/os_deleteselectedlines.gif)

<div class="conseil">
Vous pouvez supprimer plusieurs lignes à la fois. Veillez à vérifier ce qui est sélectionné avant d'effectuer l'action Supprimer. 
</div>

## Réception d'un stock avec un envoi entrant

### Confirmer la livraison de l'envoi

Que votre envoi entrant soit **manuel** or **automatique**, la première étape de la réception des marchandises consiste à confirmer la livraison.

À ce stade, vous ne devez pas vérifier si les quantités ou d'autres informations sont correctes, vous devez simplement reconnaître que vous avez reçu les marchandises de votre fournisseur.
Pour confirmer qu'un envoi entrant a été livré, cliquez sur le bouton `Confirmer la livraison`.

<div class="remarque">
Si votre envoi entrant est <b>automatique</b>, vous ne pouvez pas confirmer sa livraison si le fournisseur n'a pas confirmé son expédition. En d'autres termes, le statut de votre envoi doit être <code>EXPÉDIÉ</code> avant de pouvoir confirmer que vous avez reçu les marchandises. 
</div>

### Vérifier votre envoi entrant

La vérification est la dernière étape de la réception des marchandises dans mSupply. À ce stade, vous pouvez vérifier ce que vous avez reçu et vous assurer que les informations contenues dans mSupply sont correctes.

Vous avez la possibilité de vérifier les informations suivantes :

- Numéros de lots et dates de péremption
- Quantité d'emballages et taille de l'emballage
- Informations sur les prix : prix de revient et prix de vente

Vous pouvez également saisir l'endroit où les marchandises reçues doivent être stockées dans l'application `Localisation` tabulation.

Une fois que toutes les informations ont été saisies ou vérifiées, vous pouvez confirmer l'envoi comme suit `VERIFIEE` en tapant sur le bouton `Confirmer Vérifié` .

Une fois que vous avez fait cela :

- Les marchandises font désormais partie de votre inventaire
- Le statut de l'envoi est maintenant `VERIFIEE`
- Vous ne pouvez plus modifier les lignes d'expédition
- Vous ne pouvez plus supprimer l'envoi

## Visualisation d'un envoi entrant

Lors de la consultation d'un envoi spécifique, vous pouvez visualiser les lots de cet envoi regroupés par article ou avec chaque lot listé séparément.
Pour modifier le mode d'affichage, cliquez sur le bouton `Regroupement par poste` interrupteur.

Lorsque les lots sont groupés par article, vous pouvez développer l'article pour voir les lots individuels, ou utiliser le développement dans l'en-tête du tableau pour développer toutes les lignes groupées. Si vous cliquez sur un élément, vous verrez également tous les lots sélectionnés, comme le montre cet exemple :

![Group by Item](/docs/replenishment/is_group_by_item.gif)
