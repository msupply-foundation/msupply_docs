+++
title = "Capteurs"
description = "Gestion des capteurs de température"
date = 2023-11-08T15:20:00+00:00
updated = 2023-11-08T15:20:00+00:00
draft = false
weight = 3
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++


### Visualisation des capteurs

Sélectionnez `Chaîne du froid > Capteurs` dans le panneau de navigation.

![goto sensors](/docs/coldchain/images/goto_sensors.png)

Une liste de capteurs s'affiche (si vous n'en voyez aucun, c'est peut-être que vous n'avez pas importé de données ou intégré l'application de la chaîne du froid).

À partir de cet écran, vous pouvez visualiser la liste des capteurs et modifier un capteur.

### Liste des capteurs

![Sensor list](/docs/coldchain/images/sensor_list.png)

1. La liste des capteurs est divisée en 9 colonnes

| Column                 | Description                      |
| :----------------------| :------------------------------- |
| **Nom**                | Nom du capteur               |
| **CCE**                | Nom de l'équipement de la chaîne du froid auquel le capteur est associé   |
| **Emplacement**        | Emplacement actuel du capteur |
| **Numéro de série**    | Identifiant unique du capteur    |
| **Niveau de batterie** | Niveau de batterie le plus récent, en pourcentage              |
| **Dernière lecture**   | Température la plus récente rapportée par le capteur         |
| **Date/heure**         | Date et heure de l'activité la plus récente pour ce capteu     |
| **Type de capteur**    | Fabricant du capteur. Les options actuellement prises en charge sont `mSupply` & `Berlinger` |
| **Type de dépassement**| Si le capteur a enregistré un dépassement, cette colonne indique le type du dépassement le plus récent |

1. Le nombre de capteurs affichés par page est limité. Vous pouvez voir en bas à gauche le nombre de capteurs actuellement affichés sur votre écran.

![Page](/docs/introduction/images/list_showing.png)

2. Si vous avez plus de capteurs que la limite actuelle, vous pouvez naviguer vers les autres pages en appuyant sur le numéro de page ou en utilisant les flèches droite et gauche (coin inférieur droit).

![Page](/docs/introduction/images/list_pagenumbers.png)

3. YVous pouvez également sélectionner un nombre différent de lignes à afficher par page en utilisant l'option en bas à droite de la page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Modification d'un capteur

En cliquant sur une ligne de la liste, vous accédez aux détails de ce capteur

![Sensor details](/docs/coldchain/images/sensor_details.png)

Sur cet écran, vous pouvez :
- Modifier le nom du capteur
- Attribuer le capteur à un emplacement


<div class="note">Si le capteur est synchronisé avec l'application de la chaîne du froid son nom doit être modifié dans l'application de la chaîne du froid.</div>

Les autres détails du capteur, tels que le niveau de batterie et la dernière température enregistrée, sont également indiqués sur cet écran.


