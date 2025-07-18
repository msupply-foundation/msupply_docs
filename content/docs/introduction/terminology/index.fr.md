+++
title = "Explication de la Terminologie"
description = "Vous aider à comprendre comment les termes que nous utilisons correspondent à d'autres systèmes"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 4
sort_by = "weight"
template = "docs/page.html"
ai_generated = true

[extra]
toc = true
top = true
+++

## Introduction

Il y a une vieille blague d'informatique : "Il y a 2 choses qui sont difficiles en informatique : l'invalidation du cache, les erreurs off-by-1, et nommer les choses"

En mettant de côté la partie ringarde off-by-1 de la blague, la partie "nommer les choses" est très vraie.
Nous pourrions passer tout notre temps à discuter de nommer les choses, et ne jamais livrer aucun système utile du tout !

Notre approche est d'essayer de combiner la nomenclature standard de l'industrie, ce qui est habituel dans les chaînes d'approvisionnement de santé dans différents pays, le tout avec un clin d'œil aux noms historiques de mSupply pour les choses.
Il est clairement impossible de trouver des noms qui satisferont tous ces critères, donc cette page de guide utilisateur devrait, espérons-le, atténuer la douleur.

#### Articles, Produits, SKUs
Open mSupply est différent des autres systèmes de gestion d'inventaire en ce que le concept central pour l'inventaire est un **article** - qui est généralement un médicament ou produit générique avec l'unité de mesure spécifiée, mais sans taille d'emballage. Il y a une bonne raison à cela :
* La plupart des systèmes de santé publique opèrent sur des noms génériques
* Les rapports veulent généralement connaître la quantité totale d'article générique, pas seulement d'un produit/SKU[^1] particulier qui a été utilisé

Les **variantes d'articles** dans Open mSupply sont l'équivalent d'un SKU - elles ont une marque, un code-barres, une taille d'emballage, etc.

#### Installations, Entrepôts, Magasins, Sites, Unités Organisationnelles
Chacun des systèmes ERP majeurs utilise une terminologie différente pour les unités organisationnelles au niveau du site qui gèrent l'inventaire :

Dans mSupply, nous avons les concepts suivants

| Concept      | Explication                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Magasin**    | Un magasin (virtuel) est une unité qui gère son propre inventaire et ses propres transactions. Il a ses propres utilisateurs avec leur propre ensemble d'autorisations                                                                                                                                                                                                                         |
| **Site**     | Un site (distant) a un serveur Open mSupply qui se synchronise avec le serveur central Open mSupply.<br>Un site peut contenir 1 ou plusieurs magasins (par exemple, il pourrait avoir un magasin de médicaments essentiels, un magasin d'articles de laboratoire, et un magasin EPI, tous gérés par différents utilisateurs, mais tous se connectant [généralement sur le réseau wifi local] au même serveur) |
| **Installation** | Le complexe physique à un emplacement géographique particulier. Habituellement, une installation aura un seul site Open mSupply, même si elle a beaucoup de magasins physiques. La seule raison d'avoir plus d'un site dans une installation est si les magasins ne peuvent pas tous se connecter au même réseau local.                                                                           |
##### Comparaison avec d'autres systèmes ERP :
Dans **Odoo**, ce concept est généralement appelé un "Entrepôt." Chaque entrepôt représente un emplacement physique où l'inventaire est stocké et géré, tout en faisant partie de la structure plus large de l'entreprise.

Dans **SAP**, cela serait appelé une "Usine" ou "Emplacement de Stockage" selon le contexte exact. Une Usine représente une installation ou un site de fabrication séparé qui gère son propre inventaire.

Dans **Microsoft Dynamics**, ce concept est appelé un "Site" ou "Entrepôt" selon quel produit Dynamics vous utilisez (Dynamics 365 Business Central vs Dynamics 365 Supply Chain Management).

[^1]: SKU = Stock Keeping Unit - une marque particulière, taille d'emballage (et peut-être variation d'emballage) d'un article. 