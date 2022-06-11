+++
title = "Tableau de bord"
description = "Introduction à Open mSupply."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "La page d'accueil"
toc = true
top = false
+++

## Plus d'un Tableau de Bord!

En effet nous utilisons le terme _Tableau de bord_ pour plus d'une chose dans Open mSupply.
La première utilisation du terme _Tableau de bord_ est pour la page d'accueil. Elle offre non seulement un aperçu sur quelques statistiques, mais aussi quelques liens utiles. Nous verons les détails de ce _Tableau de bord_. 
La deuxième utilisation du terme _Tableau de bord_ est pour le système de visualisation des données avec Grafana. Il s'agit d'un ensemble de tableaux de bord qui permet d'avoir une vue centralisée pour l'ensemble des sites d'un pays (ou une organisation).

## Aperçu de la page d'accueil

![The dashboard!](/docs/images/dashboard_fr.png)

Vous pouvez voir quelques statistiques sur les mouvements et l'état du stock:

- Livraisons
  - **Aujourd'hui** Affiche le nombre de livraisons créées aujourd'hui
  - **Cette semaine** Le nombre de livraisons créées au cours de cette semaine
- Expéditions
  - **Aujourd'hui** Le nombre d'expéditions à préparer aujourd'hui. Il s'agit du nombre avec le statut `Allocated`
- Stock
  - **Expiré(s)** Il s'agit du nombre de lignes de stock périmé pour ce dépôt.
  - **Stock expirant** Le nombre de ligne de stock à date de péremption proche (dans les 3 prochains mois)
  - **Total articles** Nombre total d'articles pour ce dépôt
  - **Articles sans aucune quantité** Nombre total d'articles visibles n'ayant aucune quantité pour ce dépôt
  - **Moins de 3 mois de stock** Basé sur la CMM pour cet article et pour ce dépôt


Il y a des boutons vers le bas de la page qui vous permettent de créer des livraisons et des expéditions.
