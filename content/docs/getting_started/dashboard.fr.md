+++
title = "Tableau de bord"
description = "Introduction à Open mSupply."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 30
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Autrement dit la page d'accueil"
toc = true
top = true
+++

## Plus d'un Tableau de Bord!

En effet nous utilisons le terme _Tableau de bord_ pour plus d'une chose dans Open mSupply.
La première utilisation du terme _Tableau de bord_ est pour la page d'accueil. Elle offre non seulement un aperçu sur quelques statistiques, mais aussi quelques liens utiles. Nous verrons ici les détails de ce _Tableau de bord_. 
La deuxième utilisation du terme _Tableau de bord_ est pour le système de visualisation des données avec Grafana. Il s'agit d'un ensemble de tableaux de bord qui permet d'avoir une vue centralisée pour l'ensemble des sites d'un pays (ou une organisation).

## Aperçu de la page d'accueil

![The dashboard!](/docs/introduction/images/dashboard_fr.png)

Vous pouvez voir quelques statistiques sur les mouvements et l'état du stock:

- Approvisionnement
  - Livraisons 
     - **Aujourd'hui** affiche le nombre de livraisons créées aujourd'hui
     - **Cette semaine** affiche le nombre de livraisons créées au cours de cette semaine
  - Commandes internes
     - **Nouveau** affiche le nombre de commandes internes ayant le statut `nouveau` 
- Distribution
  - Expéditions
     - **pas encore expédiés** affiche le nombre de commandes qui n'ont pas atteint le statut `envoyé` (ou ultérieur)
  - Réquisitions
    - **Nouveau** affiche les réquisitions avec le statut `nouveau`
- Gestion des Stock
  - Stock en voie de péremption
    - **Lots expiré(s)** affiche le nombre de lignes de stock dans le dépôt actuel périmés pour ce dépôt.
    - **Lots périmant dans les 30 jours** affiche dans le dépôt actuel le nombre de ligne de stock à date de péremption proche (dans les 30 prochains jours).
  - Etat des stocks
    - **Total articles** affiche le nombre total d'articles pour ce dépôt.
    - **Articles sans aucune quantité** affiche le nombre d'articles visibles n'ayant aucune quantité pour ce dépôt.
    - **Moins de 3 mois de stock** affiche le nombre d'articles ayant moins de 3 mois de stock basé sur la CMM (Consommation Moyenne Mensuelle) pour cet article et pour ce dépôt.
    - **Plus de 6 mois de stock** affiche le nombre d'articles ayant plus de 6 mois de stock basé sur la CMM (Consommation Moyenne Mensuelle) pour cet article et pour ce dépôt.

Il y a des boutons vers le bas de la page qui vous permettent de créer des livraisons et des expéditions.

Cliquer sur les titres (comme `Livraisons`, `Expéditions` etc) vous redirige directement sur la page correspondante.
In addition, clicking on the text beside an item (e.g. `Have not been shipped`) will take you to a view which gives you a list which is filtered to show all the records which match the condition listed. The exception to this is the statistics shown under `Stock levels` which currently do not have filters available.