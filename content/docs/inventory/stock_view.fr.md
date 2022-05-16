+++
title = "Stock"
description = "Consulter Le Stock"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

L'une des plus importantes, mais la plus simple des tâches dans mSupply est de vérifier combien de stock vous avez actuellement. Lorsque vous créez un expédition sortante et que vous sélectionnez un produit à sortir, mSupply vous dira si vous avez suffisamment de stock. Vous pourrez à bien d'autres moments, utiliser cette fonctionnalité pour avoir un apperçu rapide du niveau de vos stocks, et c'est très simple à faire.

## Consulter le stock

Dans le menu de navigation, allez dans `Inventaire` et cliquez sur le sous-menu  `Stock`: 

![Stock: nav](/docs/inventory/stock_gotostock.png)

Une liste détaillée contenant la liste de vos produits apparaît: 

![Stock: list](/docs/inventory/stock_viewstock.png)

La liste est divisée en 8 colonnes: 
* **Code**: Il s'agit du code attribué à ce produit dans mSupply
* **Noms**: C'est le nom par lequel mSupply fera référence au produit
* **Lot**: Numéro de lot de la ligne de stock
* **Expiration**: Date d'expiration du lot
* **Emplacement**: L'espace aménagé pour le rangement du produit dans le dépôt/entrepôt
* **Unité**: L'unité que vous utilisez pour ce produit
* **Pack Size**: Nombre d'unités par paquet
* **Quantité**: Nombre de paquets disponibles dans votre dépôt/entrepôt


## Recherche d'un produit spécifique

Vous pouvez filtrer la liste par le nom ou le code du produit. Cela peut être utile si vous recherchez un produit en particulier.

Tapez le nom du produit ou le code dans le champs `Entrez le code ou le nom du produit`: 

![Stock: search](/docs/inventory/stock_search.gif)