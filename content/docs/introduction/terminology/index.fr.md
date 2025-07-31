+++
title = "Guide terminologique"
description = "Vous aider à comprendre comment les termes que nous utilisons et à quoi ils correspondent dans d'autres systèmes"
date = 2025-07-29T18:20:00+00:00
updated = 2025-07-29T18:20:00+00:00
draft = false
weight = 4
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = true
+++

## Introduction

Il y a une vieille blague en informatique : "Il y a 3 choses qui sont difficiles en informatique : l'invalidation du cache, les erreurs de décalage unitaire, et nommer les choses"

En mettant de côté la partie clichée de la blague, la partie "nommer les choses" est très vraie.
Nous pourrions passer notre temps à débattre sur des nomenclatures, et ne jamais produire de système utile du tout !

Notre approche consiste à essayer de combiner les nomenclatures standards de l'industrie, suivant ce qui est habituel dans les chaînes d'approvisionnement médicales dans différents pays, tout en faisant un clin d'œil aux noms historiques de mSupply.
Il est clairement impossible de trouver des noms qui satisferont tous ces critères, donc cette page du guide utilisateur espère atténuer la douleur.

#### Articles, Produits, SKU
Open mSupply se distingue des autres systèmes de gestion d'inventaire par son approche centrée sur le concept d' **article** comme élément fondamental de la gestion des stocks - qui est généralement un médicament générique ou un produit avec l'unité de mesure spécifiée, mais sans conditionnement spécifique. Il y a une bonne raison à cela :
* La plupart des systèmes de santé publique fonctionnent avec des noms génériques
* Les rapports veulent généralement connaître la quantité totale d'article générique, pas seulement d'un produit/SKU[^1] particulier qui a été utilisé

Les **variantes d'articles** dans Open mSupply sont l'équivalent d'une SKU - elles ont une marque, un code-barre, un conditionnement spécifique, etc.

#### Installations, Entrepôts, Dépôts, Sites, Unités Organisationnelles
Chacun des principaux systèmes ERP utilise une terminologie différente pour les unités organisationnelles qui gèrent des inventaires :

Dans mSupply, nous avons les concepts suivants

| Concept           | Explication                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Dépôt**         | Un dépôt (virtuel) est une unité qui gère son propre inventaire et ses transactions. Les dépôts ont leurs propres utilisateurs avec leurs propres ensembles de permissions                                                                                                                                                                                                                                   |
| **Site**          | Un site (distant) a un serveur Open mSupply qui se synchronise avec le serveur central Open mSupply.<br>Un site peut contenir 1 ou plusieurs dépôts (par exemple, il pourrait avoir un dépôt de médicaments essentiels, un dépôt d'articles de laboratoire, et un dépôt EPI, tous gérés par différents utilisateurs, mais tous se connectant \[généralement sur le même réseau wifi local\] au même serveur) |
| **Etablissement** | L'infrastructure physique à un emplacement géographique particulier. Généralement, un établissement aura un seul site Open mSupply, même si il a beaucoup de dépôts physiques. La seule raison d'avoir plus d'un site dans une installation est si les dépôts ne peuvent pas tous se connecter au même réseau local.                                                                                         |

##### Comparaison avec d'autres systèmes ERP :
Dans **Odoo**, ce concept est généralement appelé "Entrepôt". Chaque entrepôt représente un emplacement physique où l'inventaire est stocké et géré, tout en faisant partie de la structure plus large de l'entreprise.

Dans **SAP**, cela s'appellerait "Site" ou "Emplacement de Stockage" selon le contexte. Un site représente une installation séparée ou un site de fabrication qui gère son propre inventaire.

Dans **Microsoft Dynamics**, ce concept s'appelle "Site" ou "Entrepôt" selon le produit Dynamics que vous utilisez (Dynamics 365 Business Central vs. Dynamics 365 Supply Chain Management).

[^1]: SKU = Stock Keeping Unit (Unité de Gestion des Stocks) - une marque particulière, un conditionnement (et peut-être des variations de packaging) d'un article.