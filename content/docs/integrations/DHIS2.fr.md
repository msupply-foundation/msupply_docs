+++
title = "Intégration avec DHIS2"
description = "Intégration de Open mSupply avec DHIS2"
date = 2022-03-17
updated = 2022-03-17
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Intégration de Open mSupply avec DHIS2"
toc = true
+++

## A propos de DHIS2
DHIS2 est devenu le système de rapportage des informations sanitaires par défaut utilisé dans les pays à revenu moyen et faible.
C'est un excellent logiciel qui permet l'intégration de données et la création de tableaux de bors pour la prise de décision au niveau national. Il est important de rappeler que DHIS2 n'est pas un logiciel de gestion des stocks, un aspect essentiel de la logistique. 

Nous intégrons avec DHIS2 de 2 manières.

### Envoi de données logistiques vers DHIS2

mSupply contient beaucoup de données. N'essayez pas d'envoyer toutes les données de mSupply à DHIS2 - vous ralentirez votre instance DHIS2 au point qu'elle ne sera pas agréable à utiliser.
Nous vous suggérons d'envoyer des données récapitulatives qui montrent les indicateurs clés de performance. Si une enquête plus approfondie est nécessaire, cela peut être fait avec le tableau de bord d'Open mSupply.
Données que vous pourriez vouloir envoyer

- Stock disponible pour les articles clés (exprimé en « mois de stock » de préférence)
- Données de consommation pour les articles clés
- Taux de gaspillage
- Taux de déclaration des installations de niveau inférieur

### Intégration avec l'application de gestion des stocks en temps réel de DHIS2

L'application Real Time Stock Management est destinée à être utilisée dans les points de prestation de services (dispensiation). Si un établissement utilise déjà DHIS2 et n'utilise pas Open mSupply, cette étape intermédiaire est une solution viable. Plus d'information [ici] (https://docs.dhis2.org/fr/implement/logistics/real-time-stock-rts.html)
Cependant, si vous passez des commandes à l'aide de l'application Real Time Stock Management, vous avez besoin d'un système tel qu'Open mSupply pour recevoir la commande, l'exécuter et envoyer des mises à jour à l'établissement, le cas échéant.
