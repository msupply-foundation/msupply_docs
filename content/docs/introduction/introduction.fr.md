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

## Quelles plateformes pour Open mSupply ?

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


## Open mSupply en bref

Open mSupply gère votre inventaire, génère une commande, enregistre chaque entrée et sortie de produits, et fournit ainsi un aperçu actualisé de votre stock disponible pour chaque produit.

Mais Open mSupply fait bien plus que cela. Les fonctionnalités incluent:

- Gestion de l'inventaire
  - Voir facilement le stock disponible par lot de chaque article
  - Gérer les emplacements de rayons pour votre dépôt/entrepôt
  - Attribuer des emplacements au stock entrant, ou modifier les emplacements si vous réorganisez le stock dans votre dépôt/entrepôt
  - Effectuer des inventaires et indiquer les raisons des ajustements d'inventaire
  - Reconditionnement d'articles
- Reception et exécution des commandes de clients (c'est-à-dire les entités que vous fournissez)
- Commander auprès de votre entrepôt fournisseur
  - Quantifier automatiquement les besoins futurs à partir de formules simples ou complexes
  - Suivre l'état de la commande au fur et à mesure que votre fournisseur traite et expédie les produits commandés
  - Faire entrer les produits en stock après vérification
- Être alerté des niveaux de stock critiques depuis le tableau de bord
- Distribution simple de médicaments
  - Gérer les fichiers patients
  - Créer une ordonnance pour un patient
- Supervision de la chaîne du froid
  - Accéder aux enregistrements de température
  - Téléchargement des données depuis un capteur de température USB
  - Être alerté en cas d'excursions ou de rupture de températures 
  -  Associer un capteur de température à un article grâce aux emplacements de stock
- Les fonctionnalités système de base peuvent être améliorées grâce aux plugins front-end. Ils permettent de personnaliser des tâches simples telles que l'ajout de champs à certains enregistrements. Ces derniers pourront être accessibles via des listes ou des formulaires modifiables. Pour plus de détails, merci de consulter la documentation [readme plugin](https://github.com/msupply-foundation/open-msupply/blob/main/client/packages/plugins/README.md).

## Les spécificités d'Open mSupply

Open mSupply possède des fonctionnalités uniques qui le rendent idéal pour une utilisation dans les chaînes d'approvisionnement de santé dans les pays à faibles ressources :

- **Hors ligne avant tout** Open mSupply est conçu pour fonctionner sans internet. Notre expérience nous a montré que même les connexions internet les plus fiables peuvent se montrer instables voire s'interrompre. Open mSupply vous permet de travailler sans avoir à vous soucier de la qualité ou de la continuité d'Internet. A noter que vous aurez besoin d'internet pendant quelques minutes pour placer vos commandes ou recevoir des mises à jour.

- **Evolutif** Nous avons conçu Open mSupply non seulement pour gérer des milliards de transactions par an, mais aussi pouvoir travailler sur une simple tablette Android! Vous pouvez mettre en place Open mSupply sur un site, et ensuite le déployer sur des milliers de sites si vous le souhaitez.

 Pour avoir un aperçu de l'étendue des fonctionnalités d'Open mSupply, regardez la documentation du logiciel mSupply historique [https://www.msupply.org.nz](https://www.msupply.org.nz) - Avec presque 1000 pages à imprimer, n’essayez pas… ☺️

### Terminologie

Le tableau suivant décrit certains des termes couramment utilisés dans Open mSupply, et aide également les utilisateurs de l'ancien logiciel mSupply sur les changements de terminologie.

| Terme Open mSupply | Terme mSupply (ancien logiciel)   | Définition                                                               |
| :---------------:  | :-------------------:    | :---------------------------------------------------------------------   |
| Expédition | Facture Client           | La création d'une livraison de produits à un client           |
| Livraison      | Facture Fournisseur      | La réception d'une livraison de produits d'un fournisseur    |
| Réquisition        | Réquisitions Client      | Une commande de produits effectuée par un client             |
| Commandes Internes | Réquisitions Fournisseur | Une demande de stock faite pour un fournisseur               |  
| Retour Fournisseur| Crédit Fournisseur | Renvoyer des produits à un fournisseur spécifique               |  
| Retour Client| Crédit Client | Recevoir des retours produits de la part d'un client spécifique               |  

## Démarrer

Pour utiliser Open mSupply, il vous faudra un serveur mSupply qui servira de serveur central. 
Une nouvelle version open source de ce serveur central est en cours de développement et sera bientôt disponible.

Notons également que nous sommes en cours de test du processus de migration et d'intégration d'Open mSupply dans un système mSupply existant. Pour le moment, il est donc recommandé de prendre contact avec nos équipes avant de faire la transition. 

### Installation

#### Notes préalables

1.  Il est nécessaire d'avoir un système mSupply existant comprenant un serveur mSupply classique avec les modules de serveur sync et serveur web. Pour en savoir plus, vous pouvez consulter la documentation sur la configuration requise d'un serveur mSupply classique [ici](https://docs.msupply.org.nz/setting_up_msupply:requirements#requirements).
2. Depuis Decembre 2023, il n'est pas possible de migrer un dépot mSupply existant (qu'il soit sur mSupply Desktop ou mobile) vers Open mSupply. Seuls de nouveaux dépôts peuvent être crées dans Open mSupply.

#### Déroulement

1. Tout dépôt Open mSupply doit être créé sur le serveur central mSupply classique tel que détaillé dans [Comment créer un dépôt](https://docs.msupply.org.nz/other_stuff:virtual_stores#creating_new_stores). Veuillez noter que [Transformer un client externe en dépôt mSupply](https://docs.msupply.org.nz/other_stuff:virtual_stores#transition_a_customer_to_a_virtual_store) n'est pour l'instant pas disponible pour les sites Open mSupply.
2. Chaque utilisateur doit être créé et configuré pour le ou les dépot(s) sur le serveur mSupply classique tel que détaillé dans [Gérer les utilisateurs](https://docs.msupply.org.nz/admin:managing_users).
3. Le site Open mSupply doit être créé sur le serveur central mSupply classique tel que détaillé dans [Créer de nouveaux Sync Sites](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites).
4. Le ou les dépots doivent être ajouté(s) au site Open mSupply sur le serveur central mSupply classique tel que détaillé dans [Ajouter un dépot](https://docs.msupply.org.nz/synchronisation:sync_sites#adding_stores).
5. Installer Open mSupply sur votre appareil à partir du [réferentiel GitHub Open mSupply](https://github.com/msupply-foundation/open-msupply). Contactez les équipes de Support TMF pour confirmer la version installée.
6. Lancer Open mSupply sur l'appareil. L'écran ci-dessous devrait apparaître.
   - URL: Contactez les équipes de Support TMF pour confirmer que l'URL est correct
   - Nom du site : tel que saisi lors de la [Creation de nouveaux Sync Sites](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)
   - Mot de passe : tel que saisi lors de la [Creation de nouveaux Sync Sites](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)

![Initialisation](/docs/introduction/images/initialisation.png)