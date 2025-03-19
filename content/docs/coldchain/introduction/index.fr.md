+++
title = "Introduction"
description = "Surveillance des températures"
date = 2023-11-08T15:20:00+00:00
updated = 2023-11-08T15:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Les fonctionnalités de la chaîne du froid au sein d'Open mSupply vous permettent de:
- Visualiser et gérer les capteurs de température
- Importer des données des enregistreurs de température Berlinger [Fridge-tag](https://www.berlinger.com/cold-chain-management/refrigerator-temperature-logger-solution-1) et [Q-tag](https://www.berlinger.com/shipment-monitoring-solutions). erlinger et la fondation mSupply ont collaboré pour garantir une prise en charge optimale des moniteurs de température Berlinger dans Open mSupply; pour en savoir plus, en Anglais [ici](https://www.berlinger.com/partnership-msupply)).
- Visualiser les journaux et les données d'anomalie des capteurs 
- Recevoir des notifications en cas d'anomalie de température et de divergence de température
- Associer les capteurs à un emplacement de stockage.Liez les capteurs à des zones de stockage spécifiques pour associer les enregistrements et les anomalies de température à des stocks particuliers.
 - Visualiser l'historique des données.Vérifiez le fonctionnement correct de votre chaîne du froid et l'impact potentiel des variations de température sur vos stocks en accédant à l'historique des données.

Une notification d'avertissement s'affiche sur toutes les pages d'Open mSupply en cas d'anomalie de température, vous invitant à contrôler les stocks potentiellement affectés. La notification disparaît une fois l'alerte confirmée.

Open mSupply s'intégre avec l'application mobile de la chaîne du froid; Configurez votre application mobile de la chaîne du froid pour qu'elle se synchronise avec l'adresse du serveur Open mSupply à l'aide d'un nom d'utilisateur et d'un mot de passe. Les capteurs de température, les anomalies et les journaux apparaîtront alors dans Open mSupply.

<div class="note">Dans ce contexte, la "chaîne du froid" fait référence aux fonctionnalités intégrées d'Open mSupply et non à une application distincte. Il existe une documentation séparée pour l'application Android Chaîne du Froid.

## Configuration

Pour commencer, activer la préférence du site `mobile: Uses Vaccine Module` .Voir en Anglais les instructions [préférences pour les sites](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab).

Les utilisateurs qui ont besoin de visualiser et de gérer les fonctionnalités de la chaîne du froid doivent disposer des permissions suivantes activées :

- Vaccins
  - Visualiser les détails des capteurs
  - Modifier l'emplacement des capteurs

Voir en Anglais les [permissions utilisateurs](https://docs.msupply.org.nz/admin:managing_users#permissions_tabs) pour plus d'information.

## Intégration de l'application chaîne du froid

L'application [chaîne du froid](/coldchain/introduction/) peut synchroniser ses données avec un serveur. Le serveur peut être une instance d'Open mSupply ou de mSupply.

Pour configurer l'intégration, il vous suffit simplement de paramétrer un utilisateur, puis de mettre à jour l'application Chaîne du Froid.

L'utilisateur utilisé pour l'intégration est un utilisateur standard de mSupply avec la configuration suivante :
- L'utilisateur doit être associé au site par défaut qui correspond à l'emplacement des capteurs de température et auquel les données de température seront rattachées. 
- Le site doit faire partie du site synchronisé avec Open mSupply. Référez-vous à la section  [Administrateur](https://wiki.msupply.foundation/fr:mobile:setup:server_side:2) pour voir avec quel site omSupply se synchronise avec, ainsi que l'écran [Synchronisation](https://docs.msupply.org.nz/synchronisation:sync_sites#viewing_sync_sites) que votre site se synchronise avec le serveur correct.
- L'utilisateur doit avoir la permission pour  `Accès à l'API de la chaîne du froid` (voir ci-dessous)

![Permission API de la chaîne du froid](/docs/coldchain/images/coldchain_permission.png)



À partir de là, suivez simplement les étapes de la documentation de l'application Chaîne du froid pour [Intégration avec mSupply Desktop](/coldchain/desktop-integration/#msupply-desktop-setup-steps)
