+++
title = "Foire Aux Questions"
description = "la FAQ."
date = 2023-02-01
updated = 2024-11-01
draft = false
weight = 40
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Questions autour d'Open mSupply"
toc = true
top = true
+++

#### mSupply fonctionne-t-il hors ligne (sans Internet)?

Oui...Open mSupply a été créé pour une utilisation 'hors ligne' ce qui signifie que les utilisateurs peuvent continuer a mener leurs taches quotiidennes sans se connecter a Internet. Une connection Internet occasionnelle, meme de quelques secondes ou minutes en fonction de la frequence de connection peut suffire pour les sites a se synchroniser(envoi et réception de données) au serveur central.

#### Quelles sont les limites pour ce qui est de la gestion des données?

Avec Open mSupply, 3 aspects peuvent etre évoqués:
* Les **Sites distants** ou l'utilisateur fait ses taches quotidiennes.
* Les **Sites distants hébergés sur le Cloud** qui peuvent etre utilises la ou il y a une connection Internet de qualité et continue.
* Le **Serveur Central** est l'endroit où les données principales ainsi que les données des sites distants sont agregées pour le reporting.

##### Sites distants
Sur un site distant particulier, la base de données sera SQLite si elle est exécutée sur Android, ou généralement Postgres si elle est exécutée sur un serveur de bureau. Nous partons du principe que si vous avez un site très fréquenté, vous effectuerez une mise à niveau vers un ordinateur de bureau (ce qui est un processus simple), de sorte que les limites d'Android sont moins pertinentes.

|  Type d'enregistrement   |  Limite d'enregistrement   |
|-------|-------:|
| Produits   | > 1,000,000   |
| Articles    | > 1,000,000,000   |
| Utilisateurs   | configuration centrale - pas de limite pratique par site  |
| SFournisseurs   | configuration centrale - pas de limite pratique par site  |
| Transactions   | > 1,000,000,000    |

##### Sites distants hébergés dans le cloud
Si vous hébergez votre site distant dans le cloud, il peut accueillir des milliers d'utilisateurs connectés. Les limites d'enregistrement sont les mêmes que ci-dessus, mais les performances seront déterminées par la bande passante disponible à la fois pour le serveur et pour la connexion Internet de chaque utilisateur.

##### Le Serveur Central
Le serveur central utilise Postgres et regroupe toutes les données de tous les sites, tout en étant le serveur de données principal pour les sites, les produits (articles), les dépots, les fournisseurs et les utilisateurs.

|  Type d'enregistrement   |  Limite d'enregistrement   |
|-------|-------:|
| Produits   | > 1,000,000   |
| Articles   | > 1,000,000,000   |
| Utilisateurs   | > 100,000   |
| Forunisseurs   | > 100,000  |
| Sites  | > 100,000   |
| Transactions   | > 1,000,000,000    |

(En 2024, nous devons encore réécrire le serveur central en tant que projet open source - les limites du serveur central commercial mSupply sont plus basses, mais nous avons toujours des sites avec des dizaines de millions de transactions et une croissance rapide. Nous ne prévoyons pas qu'un site rencontre des limites avant de passer à un serveur central open source).

#### Pouvez-vous avoir plusieurs utilisateurs sur une tablette Android avec Open mSupply ?
Oui! Plusieurs utilisateurs peuvent se connecter à une même tablette.

#### Pouvez-vous avoir plusieurs magasins sur une seule tablette avec Open mSupply ?

Oui!

Les dépôts visibles sur chaque tablette de chaque site sont configurés de manière centralisée.
Lorsque vous vous connectez, vous verrez tous les dépôts auxquels vous avez l'autorisation de vous connecter.
Si vous ne voyez pas un dépôt que vous attendez, vérifiez les autorisations sur le serveur central et assurez-vous que le site distant s'est synchronisé après la mise à jour des autorisations.

#### Pouvez-vous avoir plusieurs utilisateurs sur plusieurs tablettes Open mSupply accédant simultanément au même dépôt ?

Oui!

Vous pouvez également accéder à un serveur Open mSupply exécuté sur une tablette Android à partir d'une machine exécutant Open mSupply Desktop ou à partir d'un navigateur Web sur n'importe quel appareil.

De plus, Open mSupply « publie » sa disponibilité sur le réseau local, ce qui vous permet de vous connecter au serveur sans avoir à vous soucier des adresses IP et autres.

#### Plusieurs personnes peuvent-elles visualiser/modifier la même expédition/le même inventaire/la même demande en même temps ?
Oui! Bien que la dernière modification remplace les modifications précédentes si vous modifiez la même ligne en même temps, l'intégrité du stock sera néanmoins préservée.

#### Existe-t-il des restrictions de licences simultanées ?

Il n'y a aucune restriction sur le nombre d'utilisateurs connectés à un serveur.