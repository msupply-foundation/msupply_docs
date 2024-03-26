+++
title = "Foire Aux Questions"
description = "aka FAQ."
date = 2023-02-01
updated = 2023-02-01
draft = false
weight = 3
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Questions sur Open mSupply"
toc = true
top = true
+++

#### Open mSupply fonctionne-t-il hors ligne ?

Oui ! Open mSupply est conçu pour fonctionner en priorité en mode hors ligne, ce qui signifie que les utilisateurs peuvent continuer à effectuer leurs opérations quotidiennes sans avoir besoin d'une connexion Internet. Une connexion Internet occasionnelle est nécessaire pour synchroniser les données des sites distants vers le serveur central. 

#### Quelles sont les limites de traitement des données ?

Cette question comporte trois aspects avec Open mSupply :
* **Sites Distants**: ce sont les endroits où vous effectuez vos tâches quotidiennes.
* **Sites distants hébergés dans le cloud**: ils peuvent être utilisés lorsque vous disposez d'un accès Internet permanent de haute qualité.
* **Serveur central** : c'est là où les données principales sont gérées et où toutes les données des sites distants sont agrégées pour la création de rapports.

##### Sites Distants
Sur un site distant particulier, la base de données sera SQLite si vous utilisez Android, ou généralement Postgres si vous utilisez un serveur de bureau. Nous partons du principe que si vous avez un site très actif, vous passerez à un ordinateur de bureau (ce qui est un processus facile), de sorte que les limites d'Android sont moins pertinentes.

|  Type d'enregistrement   |  Limite d'enregistrement  |
|-------|-------:|
| Produits   | > 1,000,000   |
| Articles gérés   | > 1,000,000,000   |
| Utilisateurs   | configuration centralisée - pas de limite par site  |
| Fournisseurs   | configuration centralisée - pas de limite par site  |
| Transactions   | > 1,000,000,000    |

##### Sites distants hébergés dans le cloud
Si vous hébergez votre site distant dans le cloud, il peut avoir des milliers d'utilisateurs connectés. Les limites d'enregistrement sont les mêmes que celles mentionnées précédemment, mais les performances seront déterminées par la bande passante disponible, à la fois pour le serveur et pour la connexion Internet de chaque utilisateur.

##### Serveur central
Le serveur central utilise Postgres et agrège toutes les données de tous les sites. Il agit également comme serveur de données principal pour les sites, les produits (articles), les installations, les fournisseurs et les utilisateurs.

|  Type d'enregistrement   |  Limite d'enregistrement   |
|-------|-------:|
| Produits   | > 1,000,000   |
| Articles gérés   | > 1,000,000,000   |
| Utilisateurs   | > 100,000   |
| Fournisseurs   | > 100,000  |
| Sites  | > 100,000   |
| Transactions   | > 1,000,000,000    |

Note importante : En 2023, nous sommes toujours en train de réécrire le serveur central en tant que projet open source. Les limites du serveur central commercial mSupply sont plus basses, mais nous avons toujours des sites avec des dizaines de millions de transactions, et ce chiffre ne cesse d'augmenter. Nous ne prévoyons pas qu'un site atteigne ses limites avant la transition vers un serveur central open source.

#### Peut-on avoir plusieurs utilisateurs sur une tablette Android avec Open mSupply ?
Oui ! Plusieurs utilisateurs peuvent se connecter sur la même tablette.

#### Peut-on avoir plusieurs dépôts sur une tablette avec Open mSupply ?

Oui ! Les dépôts visibles sur chaque tablette de chaque site sont configurés de manière centralisée. Lorsque vous vous connectez, vous verrez tous les dépôts auxquels vous avez l'autorisation d'accéder. Si vous ne voyez pas un dépôt que vous attendez, vérifiez les permissions sur le serveur central et assurez-vous que le site distant s'est synchronisé après la mise à jour des permissions.

#### Plusieurs utilisateurs sur plusieurs tablettes Open mSupply peuvent-ils accéder simultanément au même magasin ?

Oui ! Vous pouvez également accéder à un serveur Open mSupply fonctionnant sur une tablette Android depuis un appareil exécutant Open mSupply Desktop ou depuis un navigateur Web sur n'importe quel appareil.

De plus, Open mSupply "publie" sa disponibilité sur le réseau local, ce qui vous permet de vous connecter au serveur sans vous soucier des adresses IP et autres.

#### Plusieurs personnes peuvent-elles consulter/modifier simultanément le même envoi/inventaire/demande de stock ?
Oui ! Cependant, la dernière modification remplacera les modifications précédentes si vous modifiez tous les deux la même ligne en même temps. L'intégrité du stock sera toutefois maintenue.

#### Existe-t-il des restrictions sur les licences simultanées ?

Il n'y a aucune restriction sur le nombre d'utilisateurs connectés à un serveur.
