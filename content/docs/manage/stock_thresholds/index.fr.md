+++
title = "Seuils de stock"
description = "Comprendre les paramètres de seuil de stock"
date = 2026-03-18
updated = 2026-03-18
draft = false
weight = 3
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Open mSupply utilise plusieurs paramètres de seuil pour vous aider à gérer les niveaux de stock — en vous indiquant quand vous avez trop peu ou trop de stock. Ces paramètres sont utilisés dans différentes parties du système, notamment dans les [formulaires R&R](/docs/replenishment/r-and-r-forms/), le [Tableau de bord](/docs/getting_started/dashboard/), les rapports et les prévisions basées sur la population.

Cette page explique chaque paramètre de seuil, où il est configuré et comment le système l'utilise.

## Résumé des paramètres

| Paramètre                                                             | Où configurer                                                                                                                                                                         | Utilisé pour                                                                                |
| :-------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------ |
| **Seuil de sur-stock**                                                | Serveur central mSupply hérité <a href="https://docs.msupply.org.nz/other_stuff:virtual_stores?s%5B%5D=threshold&s%5B%5D=overstock#notification_preferences">préférences du dépôt</a> | Définit le niveau de stock maximum dans les formulaires R&R et le rapport d'état des stocks |
| **Seuil de sous-stock**                                               | Préférences du dépôt du serveur central mSupply hérité                                                                                                                                | Définit le niveau de stock minimum dans les formulaires R&R et le rapport d'état des stocks |
| **Tampon de sécurité du stock (mois)**                                | <a href="/docs/manage/facilities/#store-properties">Propriétés du dépôt</a>                                                                                                           | Prévisions de vaccins basées sur la population                                              |
| **Intervalle d'approvisionnement (mois)**                             | Propriétés du dépôt                                                                                                                                                                   | Prévisions de vaccins basées sur la population                                              |
| **Seuil en nombre de mois pour afficher les alertes de stock faible** | <a href="/docs/manage/facilities/#store-preferences">Préférences du dépôt</a>                                                                                                         | Widget du tableau de bord : « Produits à risque de rupture de stock »                       |
| **Seuil en nombre de mois pour afficher les alertes de sur-stock**    | Préférences du dépôt                                                                                                                                                                  | Widget du tableau de bord : « Articles avec plus de X mois de stock »                       |

## Seuils d'alerte du tableau de bord

Les seuils d'alerte du tableau de bord contrôlent quand les articles apparaissent dans les widgets d'alerte de stock du [tableau de bord](/docs/getting_started/dashboard/). Les deux valeurs sont mesurées en mois de stock et sont configurées dans les préférences du dépôt Open mSupply.

Pour configurer ces paramètres, accédez à `Options` > `Dépôts`, sélectionnez un dépôt et ajustez les préférences. Voir [Préférences du dépôt](/docs/manage/facilities/#store-preferences) pour plus de détails.

Pour ces deux paramètres, si la préférence n'est pas configurée, le widget du tableau de bord ne sera pas affiché.

### Seuil d'alerte de stock faible

**Seuil en nombre de mois pour afficher les alertes de stock faible**

Les produits sont signalés si leurs mois de stock actuels sont **inférieurs** à ce seuil. Les produits signalés apparaissent dans le widget « Produits à risque de rupture de stock » du tableau de bord.

Par exemple, si ce seuil est défini à **3**, tout produit avec moins de 3 mois de stock apparaîtra dans le widget d'alerte de stock faible.

### Seuil d'alerte de sur-stock

**Seuil en nombre de mois pour afficher les alertes de sur-stock**

Les produits sont signalés si leurs mois de stock actuels sont **supérieurs** à ce seuil. Les produits signalés apparaissent dans le widget « Articles avec plus de X mois de stock » du tableau de bord.

Par exemple, si ce seuil est défini à **6**, tout produit avec plus de 6 mois de stock apparaîtra dans le widget d'alerte de sur-stock.

## Seuils de prévision basée sur la population

Ces paramètres sont utilisés dans les prévisions de vaccins basées sur la population pour calculer les niveaux de stock cibles. Ils sont configurés comme propriétés du dépôt sur le serveur central Open mSupply. Voir [Propriétés du dépôt](/docs/manage/facilities/#store-properties) pour les détails de configuration, et [Plugins](/docs/plugins/general-plugins/) pour plus d'informations sur les prévisions basées sur la population.

### Tampon de sécurité du stock (mois)

Un tampon ajouté au calcul du stock cible pour tenir compte des variations inattendues de la demande ou des retards d'approvisionnement. Cette valeur représente le nombre de mois de stock supplémentaires que vous souhaitez conserver en réserve.

### Intervalle d'approvisionnement (mois)

Le nombre de mois entre les commandes ou les livraisons de stock pour un dépôt. Cela représente la fréquence à laquelle le dépôt s'attend à recevoir du nouveau stock.

### Formule du stock cible

Le tampon de sécurité et l'intervalle d'approvisionnement sont combinés pour calculer le niveau de stock cible :

<code>Stock cible = (Intervalle d'approvisionnement + Tampon de sécurité) x Demande prévue par mois</code>

Par exemple, si l'intervalle d'approvisionnement est de **3 mois**, le tampon de sécurité est de **1 mois** et la demande prévue est de **200 unités par mois**, le stock cible est **(3 + 1) x 200 = 800 unités**.

## Où configurer

Il existe trois emplacements de configuration pour les paramètres de seuil de stock :

### Préférences du dépôt Open mSupply

Configurées sur le Serveur Central Open mSupply via `Options` > `Dépôts`. C'est ici que vous définissez :

- Seuil en nombre de mois pour afficher les alertes de stock faible
- Seuil en nombre de mois pour afficher les alertes de sur-stock

Voir [Préférences du dépôt](/docs/manage/facilities/#store-preferences) pour plus de détails.

### Propriétés du dépôt Open mSupply

Configurées sur le Serveur Central Open mSupply via `Options` > `Dépôts`, sous l'onglet propriétés du dépôt. C'est ici que vous définissez :

- Tampon de sécurité du stock (mois)
- Intervalle d'approvisionnement (mois)

Voir [Propriétés du dépôt](/docs/manage/facilities/#store-properties) pour plus de détails.

### Serveur central mSupply hérité

Configuré sur le serveur central mSupply hérité dans les préférences du dépôt. C'est ici que vous définissez :

- Seuil de sur-stock
- Seuil de sous-stock

Voir la [documentation mSupply](https://docs.msupply.org.nz/other_stuff:virtual_stores#notification_preferences) pour plus de détails.

<div class="note">
Les seuils de sur-stock et de sous-stock sont prévus pour être migrés du serveur central mSupply hérité vers Open mSupply dans une version future.
</div>
