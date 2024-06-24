+++
title = "Mieux connaître  Open mSupply"
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

Open mSupply s'appuie sur plus de 20 années d'expérience de mSupply, au cours desquelles il est devenu le système d'information de gestion logistique (SIGL) le plus utilisé dans les pays à revenu faible et intermédiaire.

## Sur quelles plateformes Open mSupply est-il compatible ?

Open mSupply fonctionne sur ordinateur de bureau (Windows, Linux et Mac), en tant qu'application web dans votre navigateur, ou également en tant qu'application Android (pour tablettes, pas pour téléphones portables à ce stade).

## Où puis-je le télécharger ?

Nous proposons un certain nombre de téléchargements sur notre [pages de versions](https://github.com/openmsupply/open-msupply/releases) hébergée dans notre dépôt GitHub.
La dernière version sera affichée en haut de la liste des versions - nous recommandons généralement d'utiliser la version la plus récente possible.

Dans chaque version, il y a une section `Ressources` qui contient les fichiers dont vous avez besoin pour installer Open mSupply.

### Windows

Il existe des programmes d'installation créés pour chaque version, fournissant :

- **Serveur**: qui prend en charge SQLite ou PostgreSQL et fonctionne comme un service Windows. Le nom du programme d'installation du serveur est `Open_mSupply_Server_[version].exe`
- **Bureau**: Une application Windows qui vous permet de vous connecter à un serveur en cours d'exécution. Le nom du programme d'installation du serveur est `Open_mSupply_Desktop_[version].exe`
- **Autonome**: combine les deux éléments ci-dessus ; exécute un serveur en tant que service Windows et dispose d'une application Windows qui s'y connectera. Le programme d'installation du serveur est `Open_mSupply_Standalone_[version].exe`
- **Démo**:  Une installation de serveur préconfigurée qui ne nécessite pas de serveur central pour fonctionner. Le nom du programme d'installation du serveur est `Open_mSupply_Demo_[version].exe`

### Android

La version Android est distribuée sous forme de fichier `.apk` que vous pouvez installer. Ce fichier porte le nom `open-msupply-[version]-release.apk`

### MacOS

Pour la version de bureau Mac, nous fournissons un fichier `.dmg` qui porte le nom `Open_mSupply_[version].dmg`.


## Open MSupply en bref

Open mSupply gère votre inventaire, génère votre commande, enregistre chaque réception et sortie de produits, et fournit ainsi un solde courant actualisé de votre stock disponible pour chaque produit.

Mais Open mSupply fait bien plus que cela. Les fonctionnalités incluent:

- Gestion de l'inventaire
  - Voir facilement le stock disponible par lot
  - Gérer les emplacements des rayons pour votre dépôt/entrepôt
  - Attribuer des emplacements au stock entrant, ou changez d'emplacement lorsque vous réorganisez le stock dans votre dépôt/entrepôt
  - Effectuer des inventaires, et indiquer les raisons des ajustements d'inventaire
- Recevoir et exécuter les commandes des clients (entités que vous fournissez)
- Commander auprès de votre dépôt/entrepôt fournisseur
  - Quantifier automatiquement les besoins futurs à partir de formules simples ou complexes
  - Suivre l'état de la commande au fur et à mesur que votre fournisseur traite et expédie les produits commandés
  - Faire entrer les produits en stock après vérification
- Être alerté des niveaux de stock critiques depuis le tableau de bord

## Les spécificités de MSupply

mSupply possède des fonctionnalités uniques qui le rendent idéal pour une utilisation dans les chaînes d'approvisionnement de santé dans les pays à faibles ressources :

- **Hors ligne d'abord** Hors ligne d'abord mSupply est conçu pour fonctionner sans Internet. même les connexions Internet les plus fiables peuvent se montrer instables voire s'interrompre. mSupply vous permet de travailler sans avoir à vous soucier de la qualité ou de la continuité d'Internet. vous avez besoin d'Internet pendant quelques minutes pour transmettre vos commandes ou recevoir des mises à jour.
- **Evolutif** NNous avons conçu Open mSupply non seulement pour gérer des milliards de transactions par an, mais aussi pour avoir la possibilité de travailler sur une tablette Android! Vous pouvez mettre en place  mSupply dans un dépôt/entrepôt, et ensuite le déployer sur des milliers de sites.

 Pour avoir un aperçu de l'étendue des fonctionnalités de mSupply, regardez ici  [https://www.msupply.org.nz](https://www.msupply.org.nz) - Avec presque 1000 pages à imprimer, n’essayez pas… ☺️

### Terminologie

Le tableau suivant décrit certains des termes courants utilisés dans mSupply, et guide également les utilisateurs de l'ancienne version de mSupply sur les évolutions  terminologiques.

| Terme Open mSupply | Terme ancienne version   | Définition                                                               |
| :---------------:  | :-------------------:    | :---------------------------------------------------------------------   |
| Expédition | Facture Client           | La création d'une livraison de produit à un client           |
| Livraison      | Facture Fournisseur      | La réception d'une livraison de produits d'un fournisseur    |
| Réquisition        | Réquisitions Client      | Une commande de produits effectuée par un client             |
| Commandes Internes | Réquisitions Fournisseur | Une demande de stock faite pour un fournisseur               |

## Commencer

Si vous démarrez le serveur pour la toute première fois, vous verrez cet écran:

![Initialisation](/docs/introduction/images/initialisation.png)

Cela signifie que votre serveur cherche à configurer la connection  au serveur central mSupply. Veuillez contacter l'équipe support pour bénéficier d'une assistance, si vous ne savez pas comment renseigner cette information.
