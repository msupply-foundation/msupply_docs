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

Lorsqu'un client qui utilise Open mSupply souhaite vous transmettre une commande, il crée dans son dépôt ce qu'on appelle une **Commande interne**. Cela apparaîtra comme une **Réquisition** dans votre dépôt.

## Afficher la commande d'un client

Pour savoir si vous avez reçu des commandes de vos clients, allez à `Distribution` > `Réquisitions clients`

![Requistion nav](/docs/distribution/images/req_gotoreq2_fr.png)

Vous devriez voir une liste de toutes les commandes envoyées par vos clients. 

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

2. La liste peut afficher un nombre fixe de commandes par page. Dans le coin inférieur gauche, vous pouvez voir combien de commandes sont actuellement affichées sur votre écran.

![Page](/docs/distribution/images/os_list_showing.png)

3. Si vous avez plus de 20 lignes de commandes, vous pouvez naviguer vers les autres pages en appuyant sur le numéro de page ou en utilisant les flèches droite ou gauche (Le coin inférieur droit).. 

![Page](/docs/distribution/images/os_list_pagenumbers.png)

### Rechercher par commentaire

Vous pouvez filtrer la liste des commandes par commentaire. Cela peut être utile si vous recherchez une commande avec un commentaire en particulier !

Commencez à saisir dans le champ  `Search by comment` (à gauche, juste au-dessus des en-têtes de liste). Toutes les commandes qui ont un commentaire correspondant au texte saisi apparaîtront dans la liste. 

### Exporter des commandes

La liste des demandes peut être exportée dans un fichier séparé par des virgules (csv). Cliquez simplement sur le bouton d'exportation (à droite, en haut de la page).

![Export button](/docs/distribution/images/export_fr.png)

et le fichier sera téléchargé. La fonction d'exportation téléchargera toutes les commandes, même si vous en avez plus de 20 lignes. 
