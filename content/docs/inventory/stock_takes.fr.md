+++
title = "Inventaires"
description = "Counting and adjusting stock."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Comptage et ajustement des stocks"
toc = true
top = false
+++

mSupply gardera automatiquement une trace de vos niveaux de stock pour vous, au fur et à mesure que vous les recevez et les distribuez. Mais parfois, les données sont saisies de manière incorrecte ou le stock s'épuise sans que personne ne fasse d'entrée dans le système.

Bien sûr, nous essayons de ne pas laisser cela se produire, mais si cela se produit, nous pouvons apporter des corrections. Le moyen le plus simple de corriger les erreurs est de **faire un inventaire** .

Dans mSupply, vous pouvez facilement faire un inventaire pour :

* Un inventaire complet
* Une gamme limitée d'articles
* Un seul article


## Affichage des inventaires

Pour visualiser vos inventaires, allez sur `Inventory`puis `Stocktakesdans` le panneau de navigation :

![Stocktake: nav](/docs/inventory/stocktake_gotost.png)

Cela fait apparaître une liste de tous vos inventaires :

![Stocktake: list](/docs/inventory/stocktake_stocktakelist.png)

Pour chaque participation en actions, vous pouvez voir :

* Le numéro d'inventaire
* Le statut d'inventaire . Il existe deux statuts d'inventaire :
  *   Nouveau : un état des lieux sur lequel vous travaillez encore
  *   Finalisé : un état des lieux qui a déjà été réalisé. Vous ne pouvez plus le modifier.
* Une description de l'inventaire (par exemple, inventaire de mars)
* Le cas échéant, un commentaire sur le stock
* La date de l'inventaire


<div class="warning">
Il ne sert à rien de conserver les anciens inventaires avec status = NEW, surtout si vous êtes sur le point de créer un nouvel inventaire contenant les mêmes éléments. En effet, il peut être assez dangereux de laisser d'anciens inventaires avec statut NEW dans votre système. Si du temps s'est écoulé depuis la création de l'inventaire, l'instantané et les quantités réelles sont presque certainement incorrects. Pour des raisons de bonne gestion, il est recommandé de supprimer les anciens NEW inventaires. </div>

## Création d'un nouvel inventaire

Commençons un nouvel inventaire. Pour ce faire, appuyez sur le New Stocktakebouton dans le coin droit de l'écran

![Stocktake: new](/docs/inventory/stocktake_newstocktake.png)

Une fenêtre apparaît, vous invitant à sélectionner les éléments à comptabiliser :

![Stocktake: Add item](/docs/inventory/stocktake_additem2.png)

### Sélection d'éléments

Sélectionnez les éléments que vous souhaitez compter à l'aide des cases à cocher. Vous pouvez en sélectionner plusieurs :

![Stocktake: add item count](/docs/inventory/stocktake_additem_checkbox.png)

Si vous souhaitez inclure tous les éléments (ou la plupart des éléments), cochez la `Select All` case et cliquez sur `OK`:

![Stocktake: select all](/docs/inventory/stocktake_additem_selectall.png)

Utilisez la barre de recherche pour rechercher un article précis en tapant son nom ou son code :

![Stocktake: add item search](/docs/inventory/stocktake_additem_search.gif)

Cliquez sur OK lorsque vous avez sélectionné tous les éléments que vous souhaitez compter.

<div class="tip">
Ne vous inquiétez pas si vous oubliez un élément. Vous aurez la possibilité d'ajouter d'autres articles à votre inventaire par la suite. 
</div>

### Impression de la feuille d'inventaire

Lorsque vous consultez un inventaire spécifique, cliquez simplement sur le Printbouton qui se trouve en haut à droite de la page. Lors de l'impression, un fichier PDF est généré pour vous, qui s'ouvrira ensuite dans un nouvel onglet du navigateur. Celui-ci peut ensuite être imprimé à l'aide de votre navigateur en cliquant sur imprimer ou en utilisant les touches `control+ P` (si vous utilisez Windows) ou `cmd+ P` de votre clavier (si vous utilisez un mac).

![Print button](/docs/print_button.png)

Cela va soit:
* Affiche un menu de rapports possibles parmi lesquels choisir avant de créer un PDF. Cela se produira si plusieurs rapports sont définis pour le Stocktaketype de rapport.
* Créez un PDF immédiatement, s'il n'y a qu'un seul rapport à sélectionner

![Print menu](/docs/distribution/os_print_menu.png)