+++
title = "Intégration DHIS2"
description = "Intégrations ouvertes de mSupply avec DHIS2."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = ""
toc = true
+++

## DHIS2

DHIS2 est devenu le système d'information sanitaire par défaut utilisé dans les pays à revenu moyen et faible.

Nous intégrons DHIS2 de deux manières

### Envoi de données logistiques récapitulatives à DHIS2

mSupply contient beaucoup de données et vous ne devez pas (_ne pas_) essayer d'envoyer toutes les données de mSupply à DHIS2 - vous ralentiriez votre instance DHIS2 au point qu'elle ne soit pas agréable à utiliser!
Nous vous suggérons d'envoyer des données récapitulatives qui montrent les KPI. Si une enquête plus approfondie est nécessaire, cela peut être fait avec le propre tableau de bord d'Open mSupply
Données que vous pourriez vouloir envoyer

- Stock disponible pour les articles clés (exprimé en "mois de stock" est mieux)
- Données de consommation pour les articles clés
- Taux de gaspillage
- Taux de rapport des installations de niveau inférieur

### Intégration avec l'application Real Time Stock Management de DHIS2

L'application Real Time Stock Management est destinée à être utilisée aux points de prestation de services. Si une installation utilise déjà DHIS2 et n'utilise pas Open mSupply, cette étape intermédiaire est une solution viable.
Cependant, si vous passez des commandes à l'aide de l'application Real Time Stock Management, vous avez besoin d'un système tel qu'Open mSupply pour recevoir la commande, l'exécuter et envoyer des mises à jour à l'établissement, le cas échéant.
