+++
title = "Patient Programs"
description = "Introduction to Patient Programs"
date = 2023-01-27T00:00:00+00:00
updated = 2023-01-27T00:00:00+00:00
draft = false
weight = 60
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Afficher et gérer les programmes des patients"
toc = true
top = false
+++

Vous pouvez gérer les patients par programmes dans Open mSupply. Cela implique certains paramètres spéciaux. Veuillez consulter [Patients](/docs/dispensary/patients) pour plus d’informations sur la façon de visualiser et de créer des patients.

Pour utiliser les programmes pour patients, assurez-vous que votre dépot est réglé sur le mode `Dispensaire` (Voir la documentation [virtual stores](https://docs.msupply.org.nz/other_stuff:virtual_stores#store_type) pour savoir comment procéder).

Vous devrez également activer la préférence de dépot pour le module de programme `Open mSupply: Uses program module`.
Cette préférence est compatible avec Open mSupply `v1.2.0+` et mSupply `v7-07-00-beta9+`.

![Store preference](/docs/programs/images/program_pref.png)

Vous devrez également activer les autorisations d’utilisateur indiquées ci-dessous sur le serveur central :

<div class="note">Voici un exemple des autorisations requises pour qu’un utilisateur puisse afficher et gérer les fonctionnalités spécifiques d’un programme. Les autorisations requises peuvent varier en fonction de vos configurations.</div>

![User permissions](/docs/programs/images/program_user_permissions.png)

<div class="note">Le module Patient Programs est hautement personnalisable et peut avoir un aspect différent selon vos configurations. Veuillez contacter votre administrateur pour les personnalisations.</div>

### liste de patients

Une nouvelle colonne intitulée `Inscriptions au Programme` sera ajoutée à la liste des patients pour indiquer les programmes auxquels le patient est inscrit si le module Programmes pour patients a été activé. 

![Program Enrolments](/docs/programs/images/patient_enrolment_column.png)

#### Consultation d’un patient

Il y a quatre onglets sur la page informations du patient :

1. **informations du patient**: Cet onglet renferme les informations du patient.

La page d'information du patient sera très différente de la page d'information du patient standard. Cette vue est hautement personnalisable et peut être adaptée à des besoins spécifiques. Veuillez contacter votre administrateur si vous souhaitez personnaliser cette vue.

![Patient detail](/docs/programs/images/patient_detail_view.gif)

2. **Programmes**: Cet onglet contient les programmes auxquels le patient est inscrit.

Cliquer sur un programme vous mènera aux détails de l’inscription au programme du patient. Voir [Program Enrolment](/docs/programs/program-module/#program) pour plus de renseignements.

Cet onglet de programme affichera 5 colonnes : 

| colonne      | Description                         |
| :---------- | :---------------------------------- |
| **Programme**    | Le nom du programme                |
| **Identifiation Patient ID**  | L'identification du programme du patient ID  |
| **Informations complémentaires**  | Affiche les renseignements propres au programme. Par ex., _LTFU_ perdu pour le suivi |
| **Statut du programme**  | Le statut du programme  |
| **Date d'inscription** | La date à laquelle le patient a été inscrit au programme |

![Programs](/docs/programs/images/patient_program_tab.png)

3. **Rencontres**: Cet onglet contient les rencontres que le patient a eues.

Cliquer sur une rencontre pour accéder aux détails de la rencontre. Voir [Encounter](/docs/programs/program-module/#encounter) pour plus d’information.

Cet onglet des rencontres affichera 6 colonnes :

| Colonne      | Description                         |
| :---------- | :---------------------------------- |
| **Type**    | Le type de rencontre                |
| **Programme** | Le programme auquel la rencontre est associée  |
| **Date**  | La date du rendez-vous |
| **Début** | Le moment de début du rendez-vous  |
| **Fin** | La fin du rendez-vous |
| **Informations complémentaires** | Affiche des renseignements supplémentaires sur la rencontre. _Rencontre prévue_ signifie que le rendez-vous pour cette rencontre a été fixé. |

![Encounters](/docs/programs/images/patient_encounter_tab.png)

4. **recherche de contacts**: Cet onglet contient les informations de suivi des contacts pour le patient.

Cliquer sur un contact vous mènera aux coordonnées. Voir [Contact Tracing](/docs/programs/program-module/#contact-tracing) pour plus d’informations.

Cet onglet de suivi des contacts affichera 7 colonnes :

| Colonnes      | Description                         |
| :---------- | :---------------------------------- |
| **Programme**    | Le nom du programme auquel ce contact est associé               |
| **Date de création**  | La date de création du contact  |
| **Prénom**  | Prénom du contact  |
| **Nom de famille**  | Nom de famille du contact  |
| **Genre** | Sexe du contact | 
| **Relation** | La relation du contact avec le patient  |
| **Âge** | L’âge du contact  |

![Contact Tracing](/docs/programs/images/patient_contact_tracing_tab.png)

Il y a aussi un bouton `Historique` dans le coin inférieur gauche de la page des informations du patient. Cliquer sur ce bouton vous montrera un historique simple des modifications apportées au dossier du patient.

![Patient History](/docs/programs/images/patient_history.png)

### Programme

Les patients peuvent être inscrits à un programme qui est pertinent pour leur état de santé. Un patient peut être inscrit à plusieurs programmes.

#### Inscription d’un patient à un programme

Pour inscrire un patient à un programme, cliquez sur le bouton  `Ajouter Programme` dans le coin supérieur droit de l’écran ou cliquez sur la flèche vers le bas à côté du bouton et sélectionnez `Ajouter Programme` si le bouton ne dit pas `Ajouter Programme`. Une nouvelle fenêtre s’affiche pour sélectionner le programme dans lequel vous souhaitez inscrire le patient. Les programmes auxquels le patient est déjà inscrit seront grisés. 

![Add Program](/docs/programs/images/add_program_button.png)

![Add Program](/docs/programs/images/select_program_enrolment.png)

Après avoir sélectionné le programme, une autre fenêtre s’affiche pour que vous puissiez saisir des renseignements spécifiques au programme. 

<div class="imagetitle">
Dans cet exemple, nous inscrivons le patient au programme de soins et de traitement du VIH.
</div>

![Program Enrolment](/docs/programs/images/hiv_enrolment_form.gif)

### Rencontre

Une rencontre est une visite enregistrée du patient et de son traitement dans le cadre d’un programme spécifique. 

#### Affichage de la liste des rencontres

Allez à la section `Dispensaire` > `Rencontres` pour voir la liste des rencontres.

![Encounter Navigation](/docs/programs/images/dispensary_gotoencounters.png)

La liste des rencontres est divisée en 8 colonnes : 

| Colonnes      | Description                         |
| :---------- | :---------------------------------- |
| **Type**    | Le type de rencontre                |
| **Programme** | Le programme auquel la rencontre est associée  |
| **Date** | La date du rendez-vous |
| **Début** | Le moment de début du rendez-vous  |
| **Fin** | La fin du rendez-vous |
| **Patient** | Le patient à qui la rencontre est associée |
| **Informations complémentaires** | Affiche des renseignements supplémentaires sur la rencontre. _Rencontre Prévue_ signifie que le rendez-vous pour cette rencontre a été fixé. |
| **Statut** | Le statut de la rencontre |

Cliquer sur une rencontre vous mènera aux détails de la rencontre.

![Encounter List](/docs/programs/images/encounter_list.png)

#### Ajouter une rencontre

Pour ajouter une rencontre pour le patient, cliquez sur le bouton `Ajouter rencontre` dans le coin supérieur droit de l’écran. Cliquez sur la flèche vers le bas à côté du bouton et sélectionnez `Ajouter rencontre` si le bouton ne dit pas `Ajouter rencontre`.

![Add Encounter](/docs/programs/images/add_encounter_button.gif)

Une fenêtre s’ouvrira pour que vous puissiez sélectionner la rencontre (cette sélection varie selon les programmes auxquels le patient est inscrit), la date de visite, le prescripteur et ajouter des notes pour cette rencontre.

<div class="imagetitle">Dans l’exemple ci-dessous, nous créons une rencontre de soins sur le VIH</div>

![Add Encounter](/docs/programs/images/add_encounter.gif)

Si la rencontre a lieu dans l’heure précédente, vous serez redirigé vers la page de rencontre ; sinon, vous serez redirigé vers l’onglet de rencontre dans la vue détaillée du patient.

Chaque document de rencontre aura une apparence différente, mais il y a des caractéristiques communes :
- Le haut de chaque rencontre contient les détails communs de la rencontre, dont certains peuvent être modifiés comme _Prescripteur_ et _Date et heure de la visite.

Une rencontre peut avoir trois statuts :
- **En cours**: La rencontre est prévue, mais n’est pas encore terminée.
- **Consulté**: La rencontre est terminée.
- **Annulé**: La rencontre a été annulée.

![Encounter](/docs/programs/images/encounter_header.png)

- Le panneau latéral (ouvert en cliquant sur `Plus` dans le coin supérieur droit) contient des renseignements supplémentaires, comme les rencontres précédentes.

![Encounter](/docs/programs/images/encounter_side_panel.png)

<div class="imagetitle">Dans cet exemple, nous regardons la rencontre de soins sur le VIH</div>

![Encounter](/docs/programs/images/encounter_detail_view.png)

### Traçage des contacts

Le traçage des contacts est le processus d’identification de personnes qui ont pu être exposées à une maladie par l’intermédiaire du patient. Le contact peut ensuite être contacté, inscrit et inscrit dans un programme de jumelage si nécessaire.

#### Ajouter un contact

Pour ajouter un contact pour un patient, cliquez sur le bouton `Ajouter Contact` dans le coin supérieur droit de l’écran. Cliquez sur la flèche vers le bas à côté du bouton et sélectionnez `Ajouter Contact` si le bouton ne dit pas `Ajouter Contact`.

![Add Contact](/docs/programs/images/add_contact_button.png)

Une fenêtre s’ouvrira, vous invitant à sélectionner le type de contact que vous voulez ajouter. À l’heure actuelle, seul le test de dépistage du VIH par les partenaires est disponible. Cliquez sur OK pour continuer.

![Add Contact](/docs/programs/images/contact_tracing_modal.png)

#### Modifier un contact

![Edit Contact](/docs/programs/images/contact_trace.gif)

#### Liaison d’un contact à un patient

Une fois qu’un contact a été ajouté à mSupply, il peut être lié au patient qui est entré en contact avec lui. Cliquez sur le bouton `Lien vers Patient` en haut à droite de l’écran.

![Link to Patient](/docs/programs/images/link_to_patient_button.png)

Cela ouvrira une fenêtre de recherche où vous pourrez rechercher le patient souhaité par son prénom, son nom ou son ID. Une fois le patient trouvé, cliquez sur le patient pour le lier au contact.

![Link to Patient](/docs/programs/images/link_to_patient.gif)

Si le patient est déjà lié au contact, mais que vous voulez changer de patient parce que vous avez lié le mauvais patient, cliquez sur le bouton `Délier Patient` en haut à droite de l’écran.

![Unlink Patient](/docs/programs/images/unlink_patient.png)