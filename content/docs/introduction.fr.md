+++
title = "Introduction à Open mSupply"
description = "Open mSupply Introduction."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Bienvenue sur Open mSupply!"
toc = true
top = true
+++

## Historique

Open mSupply s'appuie sur plus de 20 années d'expériences enrichissantes de mSupply, au cours desquelles il est devenu le système d'information de gestion logistique (SIGL) le plus utilisé dans les pays à revenu faible et intermédiaire.

## Qu'est ce que Open mSupply permet de réaliser?

En bref, Open mSupply gère votre inventaire, génère votre commande, enregistre chaque réception et sortie de produits, et fournit ainsi un solde courant actualisé de votre stock disponible pour chaque produit.

Open mSupply fait bien plus que cela. Les fonctionnalités incluent:

- Gestion de l'inventaire
  - Voir facilement le stock disponible par lot
  - Gère les emplacements des rayons pour votre depot/entrepôt
  - Attribuer des emplacements au stock entrant, ou changez d'emplacement lorsque vous réorganisez le stock dans votre dépôt/entrepôt
  - Effectuer des inventaires, et indiquer les raisons des ajustements d'inventaire
- Recevoir et exécuter les commandes des clients (entités que vous fournissez)
- Commander auprès de votre dépôt/entrepôt fournisseur
  - Quantifier automatiquement les besoins futurs à partir de formules simples ou complexes
  - Suivre l'état de la commande au fur et à mesure que votre fournisseur traite et expédie les produits commandés
  - Faire entrer les produits en stock après vérifications
- Être alerté des niveaux de stock critiques depuis le tableau de bord

## Qu'est-ce qui rend Open mSupply si spécial?

Il existe de nombreux systèmes de gestion de stocks. mSupply possède des fonctionnalités uniques qui le rendent idéal pour une utilisation dans les chaînes d'approvisionnement de santé dans les pays à faibles ressources :

- **Hors ligne d'abord** mSupply est conçu dès le départ pour fonctionner sans Internet. Nous savons, grâce à 20 ans d'expérience, que même les connexions Internet les plus fiables peuvent se montrer instables voir s'interrompre. mSupply vous permet de travailler sans avoir à vous soucier de la qualité ou de la continuité d'Internet. Bien sûr, lorsque vous devez passer des commandes ou recevoir des mises à jour, vous avez besoin d'Internet pendant quelques minutes.
- **Evolutif** Nous avons conçu Open mSupply non seulement pour gérer des milliards de transactions par an, mais aussi pour avoir la possibilité de travailler sur une tablette Android! Vous pouvez implémenter mSupply dans un dépôt/entrepôt, sachant que si vous décidez par la suite de déployer des milliers de sites, mSupply sera toujours l'outil adéquat pour continuer.

Pour avoir un aperçu de l'étendue des fonctionnalités de mSupply, jetez un oeil par ici sur cet héritage [https://www.msupply.org.nz](https://www.msupply.org.nz) - C'est presque 1000 pages si vous imprimez tout (Alors n'essayez surtout pas ☺️)

### Terminologie

Le tableau suivant décrit certains des termes courants utilisés dans mSupply, et guide également les utilisateurs de l'ancienne version de mSupply sur les améliorations terminologiques que nous avons apportées.

| Terme Open mSupply | Terme ancienne version   | Définition                                                               |
| :---------------:  | :-------------------:    | :---------------------------------------------------------------------   |
| Expédition | Facture Client           | La création d'une livraison de produit à un client particulier           |
| Livraison      | Facture Fournisseur      | La réception d'une livraison de produits d'un fournisseur particulier    |
| Réquisition        | Réquisitions Client      | Une commande de produits effectuée par un client particulier             |
| Commandes Internes | Réquisitions Fournisseur | Une demande de stock faite pour un fournisseur particulier               |

## Commencer

Si vous démarrez le serveur pour la toute première fois, vous pouvez voir cet écran:

![Initialisation](/docs/images/initialisation.png)

Ne paniquez surtout pas! Cela signifie simplement que le serveur doit savoir comment se connecter au serveur central mSupply. Veuillez contacter l'équipe support pour bénéficier d'une assistance, si vous ne savez pas comment renseigner.
