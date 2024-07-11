+++
title = "Patients"
description = "Introduction to the Patients"
date = 2023-01-27T00:00:00+00:00
updated = 2023-01-27T00:00:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.fr.html"

[extra]
lead = "View and Manage Patients"
toc = true
top = false
+++

Les patients peuvent être ajoutés et leurs informations modifiées à partir de cette page. 

### Les patients

Pour utiliser les patients, assurez-vous que votre magasin est réglé sur le mode `Dispensaire` (voir le [magasins virtuels](https://docs.msupply.org.nz/other_stuff:virtual_stores#store_type) pour savoir comment procéder).

### Ouvrir le menu Patient

Cliquez sur `Dispensaire` > `Les patients` dans le panneau de navigation. 
![dispensary menu](/docs/dispensary/images/dispensary_menu.png)

Vous obtiendrez une liste des patients visibles dans votre magasin.

### Liste des patients

La liste des patients est divisée en 8 colonnes : 

| Colonne      | Description                         |
| :---------- | :---------------------------------- |
| **ID du patient**    | L'identifiant du patient                |
| **CINU**  | Code d'identification national unique  |
| **Prénom**  | Prénom  |
| **Nom**  | Nom de famille  |
| **Genre** | Genre | 
| **Date of Birth**  | La date de naissance du patient  |
| **Décédé** | Si le patient est décédé  |

2. La liste peut afficher un nombre fixe de patients par page. Dans le coin inférieur gauche, vous pouvez voir combien de patients sont actuellement affichés sur votre écran.

![Page](/docs/distribution/images/os_list_showing.png)

3. Si vous avez plus de patients que la limite actuelle, vous pouvez naviguer vers les autres pages en tapant sur le numéro de la page ou en utilisant les flèches droite ou gauche (dans le coin inférieur droit).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

4. Vous pouvez également sélectionner un nombre différent de lignes à afficher par page en utilisant l'option située en bas à droite de la page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Filtrer les patients

Vous pouvez filtrer la liste des patients en utilisant la barre de recherche en haut de la page. Cela peut s'avérer utile si vous recherchez un patient spécifique. Par défaut, la barre de recherche contient les filtres suivants : Prénom, Nom et ID du patient.

![Patient filter](/docs/dispensary/images/patient_filter.png)

Par exemple, pour filtrer par sexe, cliquez sur le bouton `Filtres`, sélectionner `Genre`, puis sélectionnez le sexe que vous souhaitez filtrer. 

![Patient filter gender](/docs/dispensary/images/patient_filter.gif)

### Exportation de patient 

La liste des patients peut être exportée dans un fichier séparé par des virgules (csv). Il suffit de cliquer sur le bouton d'exportation (à droite, en haut de la page).

![Export button](/docs/distribution/images/export.png)

et le fichier sera téléchargé. La fonction d'exportation téléchargera tous les patients, et pas seulement la page en cours, si vous en avez plus de 20.

### Création d'un nouveau patient

Appuyez sur le bouton `Nouveau patient` dans le coin supérieur droit.
Une nouvelle fenêtre s'affiche pour vous permettre de saisir les données du patient. Vous devez saisir le code, le prénom et le nom du patient afin de pouvoir `Ok & Suivant` bouton. Si vous ne souhaitez pas saisir le vrai nom du patient, vous pouvez utiliser un pseudonyme.

![New Patient](/docs/dispensary/images/patient_new.png)

Si vous avez un ou plusieurs patients correspondant au nom que vous avez saisi, vous serez invité à sélectionner le patient dans la nouvelle fenêtre. 

![New Patient](/docs/dispensary/images/patient_search.png)

En cliquant sur le patient correspondant, vous serez redirigé vers la page des détails du patient.

Toutefois, si vous n'avez aucun patient correspondant ou si vous souhaitez créer un nouveau patient avec les mêmes détails qu'un patient existant, vous pouvez cliquer sur le bouton `Ok & Suivant` pour être redirigé vers la page de détails du patient où vous pouvez créer le patient.
Cliquez ensuite sur le bouton `Créer` en bas à droite de la page pour créer le patient.

![New Patient](/docs/dispensary/images/patient_creation_detail.png)

### Modifier un patient
Pour modifier un patient, cliquez sur son nom dans la liste des patients. 