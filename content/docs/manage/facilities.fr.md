+++
title = "Facilities"
description = "Manage all stores"
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

La liste des dépôts n'est disponible que sur le [Serveur Central Open mSupply](/docs/getting_started/central). C'est ici que vous pouvez voir tous les dépôts et gérer leurs propriétés..

## Affichage des établissements

Cliquez sur `Manage` > `Facilities` dans le panneau de navigation.

![goto: facilities](/docs/facilities/images/goto_facilities.png)

Une liste des dépôts de votre système s'affiche..

![facility list](/docs/facilities/images/facilities.png)

La liste des dépôts est divisées en 5 colonnes:

| Colonne           | Description                            |
| :-----------------|:---------------------------------------|
| **Code**          | Le code du dépôt                       |
| **Nom**           | Nom du dépôt                           |
| **Fournisseur**   | Indique que ce dépôt est un founisseur |
| **Client**        | Indique que ce dépôt est un client     |
| **Donateur**      | Indique que ce dépôt est un donateur   |

<div class="tip">
Vous pouvez savoir si un client utilise également Open mSupply dans son dépôt s'il a une icône comme celle-ci <img src="/docs/replenishment/images/is_msupplystoreicon.png" alt="Store" style="width:auto"> à côté du code. 
</div>

La liste peut afficher un nombre fixe de dépôt par page. Dans le coin inférieur gauche, vous pouvez voir combien de magasins sont actuellement affichés sur votre écran.

![Pagination: showing](/docs/distribution/images/os_list_showing.png)

Si vous avez plus de dépôts que la limite actuelle, vous pouvez naviguer vers les autres pages en cliquant sur le numéro de la page ou en utilisant les flèches droite ou gauche (en bas à droite).

![Pagination: navigating](/docs/distribution/images/os_list_pagenumbers.png)

Vous pouvez également sélectionner un nombre différent de lignes à afficher par page en utilisant l'option située en bas à droite de la page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Rechercher des dépôts

Vous pouvez filtrer la liste des établissements par nom ou par code. Cela peut s'avérer utile si vous recherchez un magasin en particulier !

Dans la barre de recherche située en haut à gauche de votre écran, tapez une partie (ou la totalité) du nom ou du code d'un dépôt. La liste contiendra alors tous les établissements correspondants:

![Facilities filter](/docs/manage/images/facilities_filter.png)

## Modifier les propriétés d'un dépôt

Pour modifier les propriétés d'un magasin de la liste, cliquez dessus. Une nouvelle fenêtre `Modifier le dépôt` s'ouvre alors.

<div class='tip'>
Si vous voyez un message de ce type lorsque vous ouvrez la fenêtre Modifier l'installation, cela signifie que vous n'avez pas configuré les propriétés du magasin ! Pour les configurer, veuillez contacter le service d'assistance ou <a href='/docs/settings/configuration/#gaps-store-properties'>activer les propriétés GAPS</a>.

![Facilities: no properties](/docs/manage/images/facilities-no-properties-defined.png)

</div>

Dans cette fenêtre, vous pouvez modifier les propriétés d'un dépôt.

![Edit facility](/docs/manage/images/edit_facility.png)

- cliquez sur `OK` pour enregistrer vos modifications et fermer la fenêtre
- cliquez sur `OK & Suivant` pour enregistrer vos modifications et passer à la modification des propriétés du dépôt suivant
- Click `Annuler` à tout moment pour annuler vos modifications et fermer la fenêtre.

### Modifier les propriétés de votre dépôt

Chaque dépôt peut voir et modifier ses propres propriétés. Si des propriétés ont été configurées, un bouton `Modifier` supplémentaire sera visible dans le pied de page de l'application, à côté du nom de votre dépôt:

![Footer: store edit](/docs/manage/images/footer_store_edit.png)

Cliquez sur le bouton `Modifier` pour ouvrir une nouvelle fenêtre, dans laquelle vous pouvez modifier les propriétés de votre dépôt.

<div class='note'>
Certaines propriétés peuvent être désactivées ici. Cela signifie qu'elles ne peuvent être modifiées que sur le serveur central d'Open mSupply.
</div>

![Edit own store](/docs/manage/images/edit_remote_store.png)

Une fois que vous êtes satisfait de vos modifications, cliquez sur `OK` pour enregistrer et fermer la fenêtre.

Cliquez sur `Annuler` à tout moment pour annuler vos modifications et fermer la fenêtre.

## Permissions & Restrictions

Les dépôts ne sont visibles que sur le [Serveur Central Open mSupply](/docs/getting_started/central).

Pour modifier les dépôts de façon centralisée, vous devez avoir la permission `Peut modifier les données principales` , activée dans l'onglet [Permissin omSupply](https://docs.msupply.org.nz/admin:managing_users?s[]=permission#omsupply_permissions_tab) sur le dépôt central.

![Permission peut modifier les données Centrales](/docs/programs/images/can_modify_central.png)
