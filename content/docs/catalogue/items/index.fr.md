+++
title = "Articles"
description = "Consulter les articles."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Gérer votre catalogue"
toc = true
top = false
+++

Un article dans Open mSupply est généralement un produit que vous achetez auprès d'un fournisseur, vous le rangez en stock et le fournissez à un client.
Dans le menu **Articles**, vous pouvez consulter tous les articles qui sont actuellement visibles dans votre dépôt.

## Consulter la liste des articles

Dans le panneau de navigation à gauche, sélectionnez `Catalogue` > `Articles` pour voir afficher la liste des produits:

![Items nav](/docs/catalogue/images/cat_gotoitems.png)

Vous pouvez voir tous les articles disponibles et visibles pour votre dépôt :

![Items list](/docs/catalogue/images/cat_itemslist.png)

## Consulter les détails d'un article

Pour consulter les détails d'un article, un seul clique sur la ligne de l'article suffit. Une nouvelle fenêtre apparaît:

![Item detail](/docs/catalogue/images/cat_itemdetail.png)

En haut de l'écran, vous pouvez lire les informations suivantes:

- **Stock disponible**: Quelle quantité est actuellement disponible dans votre dépôt pour cet article
- **CMM**: Consommation Mensuelle Moyenne. Il s'agit de la quantité utilisée en moyenne chaque mois (sur la base d'un nombre de mois configurable, par défaut configuré sur 3 mois).
- **Mois de Stock**: Nombre de mois de consommation restant avec le stock actuel. Ce nombre est déterminé par calcul en suivant la formule: `Stock disponible / CMM`.

<div class="imagetitle">
Dans l'exemple ci-dessous, nous avons 1542 unités d'amoxicilline disponibles. La consommation moyenne est de 53,3 unités par mois ce qui signifie qu'il y a l'équivalent de 28,9 mois de stock dans le dépôt. 
</div>

![Item detail headers](/docs/catalogue/images/cat_itemdetailsheaders.png)

Dans la partie inférieure, les détails de l'article sont divisés en plusieurs sections :

### Détails

- **Nom**: C'est le nom par lequel mSupply fera référence à l'article
- **Code**: Cela devrait être unique pour chaque article et c'est un raccourci utile pour faire référence aux articles
- **Unité**: L'unité que vous utilisez pour cet article. Il est utile de distinguer les articles que vous distribuez par paquet ou boîte (ex. les gouttes pour les yeux) des articles que vous distribuez par volume (ex. les liquides)
- **Concentration**: Pour un médicament, il s'agit de la concentration de ses principes actifs (ex. pour l'Amoxilline 250mg, le dosage est de 250mg)
- **Dose journalière**: La dose moyenne supposée par jour, pour un médicament utilisé pour son indication principale chez l'adulte
- **Doses**: Pour les vaccins, le nombre de dose par flacon
- **Vaccin** (case à cocher): Si cette case est cochée, cet élément est un vaccin et un numéro de dose peut lui être attribué

### Catégories

- **Catégorie ATC**: ATC signifie Anatomique, Thérapeutique et Chimique. C'est un système de classification des entités et de leur identification par catégorie
- **Nom Universel**: si l'article est lié au [universal drug code database](https://codes.msupply.foundation/), cela montre le nom universel ou générique de l'élément donné
- **Code Universel**: de même, le code attribué à la rubrique du code universel des médicaments

### Emballage

- **Taille par défaut**: Il s'agit de la taille du paquet par défaut qui sera attribuée au stock entrant au fur et à mesure de sa réception
- **Taille du carton**: Il s'agit de la taille du carton (emballage extérieur), le nombre d'unité dans le carton. Il ne s'agit pas du nombre de paquets habituels d'un carton (emballage extérieur).
- **Volume du paquet**: Le volume par défaut d'un paquet habituel. C'est le volume qui sera utilisé par défaut lors de la réception des produits. Nous vous recommandons de diviser le volume d'un carton par le nombre de paquet habituel dans un carton pour obtenir ce chiffre. Open mSupply stocke toujours les volumes en m3 (mètres cubes), mais vous pouvez entrer un volume en millilitres (ml) ou en litres (l) en saisissant l'abréviation appropriée après le nombre représentant le volume. Ex. saisir « 0,5 l » pour saisir un volume de 0,5 litre (= 0,0005 m3).
- **Volume du carton**: Le volume par défaut d'un carton de cet article
- **Poids**: Le poids d'un paquet habituel en kg

### Tarification

- **Marge**: Il s'agit de la marge par défaut qui sera appliquée à cet article lors de la réception pour calculer le prix de vente
