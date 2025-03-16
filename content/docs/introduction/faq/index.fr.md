+++
title = "Foire Aux Questions"
description = "la FAQ."
date = 2023-02-01
updated = 2023-02-01
draft = false
weight = 40
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Questions sur Open mSupply"
toc = true
top = true
+++

#### Open mSupply fonctionne-t-il hors ligne (sans internet) ?

Oui. Open mSupply a été créé pour une utilisation <i/>hors ligne</i> ce qui signifie que les utilisateurs peuvent continuer à mener leurs tâches quotidennes sans se connecter a internet. Une connection internet ocassionnelle est nécessaire pour synchroniser les données des sites distants vers le serveur central.

#### Quelles limites dans le traitement des données ?

Avec Open mSupply, il y a 3 niveaux à considérer :

- Les **Sites distants** ou l'utilisateur fait ses tâches quotidiennes.
- Les **Sites distants hébergés sur le Cloud** qui peuvent être utilisés avec une connection internet de qualité et continue.
- Le **Serveur Central** est l'endroit où les données centrales ainsi que les données des sites distants sont agregées pour le reporting.

##### Sites distants

Pour un site distant spécifique, la base de données sera SQLite si elle est exécutée sur Android, ou dans la plupart des cas Postgres si elle est exécutée sur un ordinateur de bureau. Nous partons du principe que sur un site très fréquenté, une mise à niveau rapide vers la version Desktop est à faire pour être moins impacté par les limites d'Android.

| Type de contenu |                                       Limite des données |
| --------------- | -------------------------------------------------------: |
| Produits        |                                              > 1,000,000 |
| Articles        |                                          > 1,000,000,000 |
| Utilisateurs    | configuration centrale - pas de limite pratique par site |
| Fournisseurs    | configuration centrale - pas de limite pratique par site |
| Transactions    |                                          > 1,000,000,000 |

##### Sites distants hébergés dans le cloud

Si un site distant est hebergé dans le cloud, il peut accueillir des milliers d'utilisateurs connectés en même temps. Les limites des données sont les mêmes que ci-dessus, mais les performances seront déterminées par la bande passante disponible à la fois pour le serveur et pour la connexion internet de chaque utilisateur.

##### Le Serveur Central

Le serveur central utilise Postgres et regroupe toutes les données de tous les sites, tout en étant le serveur de données principales pour les sites, les produits (articles), les dépots, les fournisseurs et les utilisateurs.

| Type de contenu | Limite des données |
| --------------- | -----------------: |
| Produits        |        > 1,000,000 |
| Articles        |    > 1,000,000,000 |
| Utilisateurs    |          > 100,000 |
| Forunisseurs    |          > 100,000 |
| Sites           |          > 100,000 |
| Transactions    |    > 1,000,000,000 |

(Depuis 2023, nous travaillons en priorité à rendre le serveur central open source, en attendant il est important de noter que le serveur central de la version commerciale mSupply a des limites plus basses. Bien que certains sites en constante croissance ont déjà des dizaines de millions de transactions, nous sommes très loin d'arriver aux limites du serveur central avant de passer à sa version open source).

#### Pouvez-vous avoir plusieurs utilisateurs sur une tablette Android avec Open mSupply ?

Oui! Plusieurs utilisateurs peuvent se connecter à une même tablette.

#### Pouvez-vous avoir plusieurs dépôts sur une seule tablette avec Open mSupply ?

Oui!

Les dépôts visibles sur chaque tablette de chaque site sont configurés de manière centralisée.
Lorsque vous vous connectez, vous verrez tous les dépôts auxquels vous avez l'autorisation de vous connecter.
Si un de vos dépôts est manquant, vérifiez les autorisations sur le serveur central et assurez-vous que le site distant s'est synchronisé après la mise à jour des autorisations.

#### Est-ce que plusieurs utilisateurs sur différentes tablettes Open mSupply peuvent accéder simultanément au même dépôt ?

Oui!

Vous pouvez même accéder à un serveur Open mSupply installé sur une tablette Android à partir d'un ordinateur installé avec Open mSupply Desktop ou à partir d'un navigateur Web depuis n'importe quel appareil.

De plus, Open mSupply « rend public » sa disponibilité sur le réseau local, ce qui vous permet de vous connecter au serveur sans avoir à vous soucier de créer du désordre dans les adresses IP.

#### Plusieurs personnes peuvent-elles visualiser / modifier la même expédition / le même inventaire / la même réquisition en même temps ?

Oui! Bien que la dernière modification remplace les modifications précédentes si vous modifiez la même ligne en même temps, l'intégrité du stock sera néanmoins préservée.

#### Existe-t-il des restrictions de licences simultanées ?

Il n'y a aucune restriction sur le nombre d'utilisateurs connectés à un serveur.

#### Est-ce que ma monnaie locale est supportée dans le logiciel ?

Lorsqu'un prix est affiché, il est possible de modifier le symbole monétaire pour celui de son choix. Il est également possible de configurer des monnaies étrangères afin d'envoyer et de recevoir des livraisons dans des monnaies différentes de votre devise principale. Pour configurer les devises étrangères, merci de suivre [ces instructions](https://docs.msupply.org.nz/other_stuff:currencies) dans la documentation du serveur central. Il vous faudra également actionner au niveau du dépôt la préférence `Dépôt: Capacité d'émettre en devises étrangères`. Cette préference est compatible avec Open mSupply `v1.7.0+`.

![Store preference](images-en/store-pref-issue-in-foreign-currencies.png)

Voici les codes et symboles des monnaies supportées par Open mSupply:

| Code | Symbol |
| ---- | ------ |
| COP  | $      |
| DJF  | DJF    |
| EUR  | €      |
| KMF  | FC     |
| NZD  | $      |
| PGK  | K      |
| QAR  | ر.ق.   |
| RUB  | ₽      |
| SBD  | SI$    |
| SSP  | SSP    |
| USD  | $      |
