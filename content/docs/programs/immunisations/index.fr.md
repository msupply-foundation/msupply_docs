+++
title = "Vaccins"
description = "Programmes Vaccin"
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 62
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Remarque : Les programmes vaccins ne sont visibles que sur le [Serveur Central Open mSupply](/docs/getting_started/central).

Choisir `Programmes` > `Vaccins` dans le panneau de navigation.

![goto: immunizations](/docs/programs/images/goto_immunizations.png)

Une liste de programmes de vaccin vous sera présentée :

![immunizations list](/docs/programs/images/immunizations.png)

La liste des programmes de vaccin est divisée en 2 colonnes :

| Colonne              | Description                                                      |
| :------------------ | :--------------------------------------------------------------- |
| **Nom du programme**    | Le nom du Programme vaccin                             |
| **Vaccines courses** | The Vaccine Courses that are a part of that Immunization Program |

## Ajout d’un nouveau programme de vaccin

Pour ajouter un nouveau programme de vaccin, cliquez sur le bouton `Nouveau Programme` en haut à droite.

![immunizations: new program button](/docs/programs/images/immunizations_new_program_button.png)

Cela ouvrira une nouvelle fenêtre dans laquelle vous pourrez entrer le nom du nouveau programme de vaccin. Notez que tous les programmes doivent avoir un nom unique.

![immunizations: new program modal](/docs/programs/images/immunizations_new_program_modal.png)

- Cliquez sur `OK` une fois que vous êtes satisfait de vos modifications
  - Vous serez redirigé vers la vue détaillée de votre nouveau programme de vaccin
- OU : Cliquez sur `Annuler` pour fermer la fenêtre si vous avez changé d’avis

## Suppression d’un programme de vaccination

Vous pouvez supprimer des programmes de vaccination à partir de la liste.

Sélectionnez le programme de vaccination que vous souhaitez supprimer en cochant la case à l’extrémité droite de la liste. Vous pouvez sélectionner plus d’un programme de vaccination à supprimer à la fois. Vous pouvez même tous les sélectionner à l’aide de la case à cocher principale dans l’en-tête du tableau.

![immunizations: select to delete](/docs/programs/images/immunizations_select.png)

Ouvrez le menu déroulant `Actions` dans le coin supérieur droit, au-dessus de la liste, et sélectionnez `Supprimer les lignes selectionnées`.

![immunizations: actions](/docs/programs/images/immunizations_actions.png)

Il vous sera demandé de confirmer que vous souhaitez supprimer les programmes sélectionnés. Appuyez sur `Annuler` pour empêcher la suppression, ou sur `Ok` pour confirmer.

![immunizations: confirm delete](/docs/programs/images/immunizations_confirm_delete.png)

Une notification dans le coin inférieur gauche confirmera le nombre de programmes supprimés.

![immunizations: delete success](/docs/programs/images/immunizations_delete_success.png)

## Consulter les détails du programme vaccin

Pour voir un programme d’immunisation plus en détail, cliquez dessus. Cela vous amènera à la page de détails de ce programme.

![immunizations: detail](/docs/programs/images/immunizations_detail.png)

Vous pouvez utiliser le bouton `Fermer` en bas à droite pour fermer la vue détaillée et revenir à la liste des programmes de vaccin.

Si vous devez modifier le nom du programme de vaccin, faites-le en mettant à jour le champ de saisie en haut de l’écran de détail.

Une fois que vous êtes satisfait de vos modifications, utilisez le bouton `Enregistrer` en bas à droite pour les enregistrer.

### Vaccine Courses

La vue détaillée du programme de vaccination vous présente une liste des cours de vaccination qui font partie du programme.

La liste des cours de vaccination est divisée en 3 colonnes :

| Column                 | Description                                           |
| :--------------------- | :---------------------------------------------------- |
| **Nom**               | Le nom du cours de vaccination                        |
| **Cible démographique** | The demographic to receive the vaccine Vaccine Course |
| **Doses**              | The number of doses included in the course            |

### Adding a new Vaccine Course

To add a new Vaccine Course, click the `Add vaccine course` button in the top right.

![vaccine course: add button](/docs/programs/images/vaccine_course_add_button.png)

This will open a new window, where you can enter the name of the new Vaccine Course.

![vaccine course: create modal](/docs/programs/images/vaccine_course_add.png)

- Click `OK` once you are happy with your changes
  - You will be redirected to the detail view of your newly created Vaccine Course
- OR: Click `Cancel` to close the window if you've changed your mind

### Deleting a Vaccine Course

You can delete Vaccine Course from the list.

Select the Vaccine Course that you wish to delete by checking the box on the right end of the list. You can select more than one Vaccine Course to be deleted at once. You can even select them all using the master checkbox in the table header.

![vaccine courses: select to delete](/docs/programs/images/vaccine_courses_select.png)

Open the `Actions` dropdown in the top right corner, above the list, and select `Delete selected lines`.

![vaccine courses: actions](/docs/programs/images/immunizations_actions.png)

You will be asked to confirm that you wish to delete the selected Vaccine Courses. Press `Cancel` to prevent deleting, or `Ok` to confirm.

![vaccine courses: confirm delete](/docs/programs/images/vaccine_courses_confirm_delete.png)

A notification in the bottom left corner will confirm how many courses were deleted.

## Viewing Vaccine Course Details

To view a Vaccine Course in more detail, click on it. This will take you to the detail page for that course.

![vaccine course: detail](/docs/programs/images/vaccine_course_detail.png)

You can use the `Close` button in the bottom right to close the detail view, and go back to the list of Vaccine Courses within this Immunization Program.

From this view, you can edit all the relevant information for the Vaccine Course, including its name, details like its wastage rate, and the number of doses.

Once you are happy with your changes, you can use the `Save` button in the bottom right to save them.

## Autorisations et restrictions

Les programmes de vaccination ne sont visibles que sur le [Serveur Central Open mSupply](/docs/getting_started/central) et nécessite la préférence du dépot [`mobile: Uses vaccine module`](https://docs.msupply.org.nz/cold_chain_equipment:mobile?s[]=vaccine#enable_the_vaccine_module_for_the_mobile_store).

![mSupply Store Preference Vaccine Module](/docs/programs/images/vaccine_module.png)

Pour créer, modifier ou supprimer des programmes de vaccination ou des cours de vaccination, vous devez disposer de l’autorisation `Peut modifier les données centrale` activée dans l’onglet [Autorisations omSupply](https://docs.msupply.org.nz/admin:managing_users?s[]=permission#omsupply_permissions_tab) de votre dépot central.

![Can Modify Central Data Permission](/docs/programs/images/can_modify_central.png)
