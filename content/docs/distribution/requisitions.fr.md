+++
title = "Réquisitions"
description = "Gérer les commandes des clients."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Gérer les commandes des clients"
toc = true
top = false
+++

Lorsqu'un client utilisant Open mSupply souhaite vous transmettre une commande, il crée dans son dépôt une **Commande interne**. Cette commande apparaît comme une **Réquisition** dans votre dépôt.

## Afficher la commande d'un client

Pour savoir si vous avez reçu des commandes de vos clients, allez à `Distribution` > `Réquisitions clients`

![Requistion nav](/docs/distribution/images/req_gotoreq2_fr.png)

S'affiche une liste de toutes les commandes envoyées par vos clients. 

Depuis cet écran, vous pouvez :
* Voir une liste de réquisitions
* Exporter les commandes dans un fichier `.csv`

![Requisition list](/docs/distribution/images/req_list.png)


### Liste des réquisitions

1. La liste des réquisitions comprend 5 colonnes:

| Colonne| Description |
| :---------- | :---------- |
| **Nom** | Nom du Client | 
| **Numéro** | Numéro de référence de la commande | 
| **Créée le** | Date de création de la commande | 
| **Statut** | État actuel de la commande | 
| **Commentaires** | Commentaire pour la commande |

2. La liste peut afficher un nombre fixe de commandes par page. En bas à gauche, apparaît le nombre de commandes  affichées sur votre écran.

![Page](/docs/distribution/images/os_list_showing.png)

3. Si vous avez plus de 20 lignes de commandes, vous pouvez naviguer vers les autres pages en appuyant sur le numéro de page ou en utilisant les flèches droite ou gauche (Le coin inférieur droit).. 

![Page](/docs/distribution/images/os_list_pagenumbers.png)

### Rechercher par commentaire

Vous pouvez filtrer la liste des commandes par commentaire. Cela peut être utile si vous recherchez une commande avec un commentaire en particulier !

Commencez à saisir dans le champ  `Recherche par commentaire` (à gauche, juste au-dessus des en-têtes de liste). Toutes les commandes qui ont un commentaire correspondant au texte saisi apparaîtront dans la liste. 

### Exporter des commandes

La liste des demandes peut être exportée dans un fichier séparé par des virgules (csv). Cliquez simplement sur le bouton d'exportation (à droite, en haut de la page).

![Export button](/docs/distribution/images/export_fr.png)

et le fichier sera téléchargé. La fonction d'exportation téléchargera toutes les commandes, même si vous avez plus de 20 lignes. 

### Visualisation d'une demande de stock

Pour visualiser les détails d'une demande de stock spécifique, cliquez simplement dessus dans la liste. Vous verrez alors la vue détaillée de la demande :

![Requisition Detail](/docs/distribution/images/requisition-detail.png)

Cliquer sur un article individuel dans cette vue vous montrera ensuite les détails de cet article. Ici, vous pouvez ajuster la quantité à fournir :

![Requisition Detail](/docs/distribution/images/requisition-item-detail.png)

La quantité demandée est également affichée, ainsi que les détails de l'article en stock.

Une autre façon d'ajuster la quantité à fournir consiste à cliquer sur le bouton `Fournir la quantité demandée` en haut de la page. Cela définira automatiquement la quantité à fournir sur la quantité demandée pour cet article. Cliquez sur le bouton et une confirmation vous sera demandée avant que l'ajustement ne soit effectué :

![Supply Requested Prompt](/docs/distribution/images/requisition-supply-to-requested.png)

Pour créer une expédition qui fournira les articles demandés, cliquez sur le bouton  `Créer une expédition`. Cela créera une expédition, ajoutera tous les articles qui ne sont pas entièrement fournis, puis ouvrira cette expédition dans un nouvel onglet. Auparavant, vous serez invité à confirmer :

![Create Shipment Prompt](/docs/distribution/images/requisition-create-shipment.png)

Si la quantité à fournir est modifiée pour un ou plusieurs articles de la demande après qu'une expédition a été créé pour celui-ci et qu'un nouvel envoi est créé en cliquant sur le bouton `Créer une expédition`, alors une nouvelle expédition sera créé avec la quantité restante à fournir (quantité à fournir moins toute quantité liée à une expédition).

![Create Shipment Detail](/docs/distribution/images/requisition-create-shipment.gif)

Après avoir créé cette expédition, vous verrez le numéro d'expédition, ainsi qu'un lien pour le visualiser, dans la section `Documents associés` du volet de détails supplémentaires situé à droite de l'écran.
