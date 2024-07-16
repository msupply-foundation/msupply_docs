+++
title = "Notifications"
description = "Temperature breach / excursion notifications"
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

Open mSupply utilise un système de notifications pour vous alerter des variations de température enregistrées par les capteurs de la chaîne du froid.

## Anomalies

Une barre de notification apparaîtra en haut de toutes les pages si toutes les conditions suivantes sont remplies :

- Le module Vaccin est activé pour le depot actuel.
- L'utilisateur actuellement connecté est autorisé à consulter les enregistrements de température.
- Un ou plusieurs capteurs ont enregistré un dépassement de température.
- Un ou plusieurs de ces dépassements n'ont pas été confirmés.


Voici à quoi ressemble la barre de notification, affichée en haut de la page du tableau de bord :

![notification bar](/docs/coldchain/images/notification_bar.png)

<div class="tip">ISi le module Vaccin est activé pour le site et que l'utilisateur n'est pas autorisé à consulter les enregistrements de température, ou si une autre erreur se produit, une notification s'affiche lors de la première connexion ou du changement de msite : <p><img src="/docs/coldchain/images/notification_warning.png" alt="Notification permission warning" /></p>Cette notification a pour seul but d'informer l'utilisateur qu'il ne sera pas averti en cas de dépassement de température.</div>

<br/>

Le panneau de notification affiche les informations suivantes :
1. Heure d'enregistrement du dépassement
2. Valeur de la température enregistrée
3. Nom du capteur ayant enregistré le dépassement
4. Nom de l'emplacement auquel le capteur est attribué, s'il y en a un
5. Un bouton permettant d'accéder à la page des dépassements, où vous pouvez consulter tous les détails du dépassement concerné, ainsi que d'autres dépassements.

Pour faire disparaître la barre de notification, vous devez confirmer le dépassement. Vous pouvez le faire à partir de la vue en [liste des dépassements](/docs/coldchain/monitoring/#acknowledging-breaches)


## Écarts de température

YVous pouvez également être averti lorsque la température dépasse un seuil configuré. C'est ce que l'on appelle un 'écart de température'. Une fois que la température est revenue dans la plage de tolérance, la notification ne s'affiche plus.
