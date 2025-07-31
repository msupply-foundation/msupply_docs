+++
title = "Formulaires Rapports & Réquisitions"
description = "Introduction aux formulaires R&R"
date = 2024-08-06
updated = 2024-08-06
draft = false
weight = 46
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Les formulaires de rapports et de réquisitions (R&R) sont utilisés pour rendre compte de l'utilisation des articles et demander du stock aux fournisseurs. Ils permettent de garantir que vous disposez de suffisamment de stock pour répondre aux besoins de vos patients."
toc = true
top = false
+++

## Installation

Pour utiliser les formulaires R&R, assurez-vous d'avoir activé la préférence du site pour 'Open mSupply : utilisez le module du programme'.

![Store preference](../../programs/Program-module/images/program_pref.png)

Vous aurez également besoin d'un programme configuré et visible pour votre dépôt, et le programme aura besoin d'un calendrier périodique qui lui sera associé.

Commencez par configurer [les périodes et les calendriers](https://docs.msupply.org.nz/admin:schedules_periods), puis créez un programme et associez lui le calendrier.

Allez voir [mSupply docs](https://docs.msupply.org.nz/items:programs) pour configurer des programmes - notez cependant que vous n'aurez besoin que du début de ce processus, qui consiste à créer un programme et à lui associer un calendrier. Pour les formulaires R&R, les autres aspects de la configuration du programme ne sont pas encore utilisés. Vous devrez également [connecter un programme à un dépôt](https://docs.msupply.org.nz/items:programs#connecting_a_program_to_a_store).

Notez également que les programmes marqués comme `Programme de vaccination` ne seront pas affichés dans la liste des programmes disponibles lors de la création d'un formulaire R&R.

Assurez-vous que les seuils corrects pour les ruptures de stock et les excédents de stock sont définis dans vos [préférences de dépôt](https://docs.msupply.org.nz/other_stuff:virtual_stores?s%5B%5D=threshold&s%5B%5D=overstock#notification_preferences). Ces seuils sont utilisés pour calculer les niveaux de stock minimum et maximum de chaque article.

## Formulaires R&R - Vue Liste

Allez dans `Approvisionnement` > `Formulaires R&R` pour voir la liste des formulaires R&R.

![R&R Navigation](images-en/goto_rnr.png)

Vous pouvez cliquer sur les en-têtes de colonne pour trier la liste par cette colonne.

![R&R List](images-en/rnr_list.png)

En cliquant sur un formulaire R&R, vous accéderez à la page de détails.

### Ajouter un formulaire R&R

Pour ajouter un formulaire R&R, cliquez sur le bouton « Ajouter un formulaire » dans le coin supérieur droit de l'écran.

![Add Button](images-en/rnr_add_button.png)

Une fenêtre s'ouvrira pour vous permettre de sélectionner le programme, le calendrier, la période et le fournisseur pour le formulaire R&R.

Notre dernier formulaire R&R date d'avril 2024 et concerne le programme Tb. Les mêmes programme, calendrier et fournisseur sont sélectionnés, et la période suivante est choisie automatiquement.

![Add R&R: empty](images-en/add_rnr_empty.png)

La première fois que vous créez un formulaire R&R, vous devrez sélectionner chacune de ces options. Après cela, les entrées seront pré-remplies avec les données de la période précédente.

<div class="imagetitle">Notre formulaire R&R le plus récent date d'avril 2024, pour le programme de la Tuberculose (Tb). Le même programme, le même calendrier et le même fournisseur sont sélectionnés, et la période suivante est choisie automatiquement.</div>

![Add R&R: pre-filled](images-en/add_rnr.png)

La première fois que vous créez un formulaire R&R, vous pouvez sélectionner n'importe quelle période disponible. Après cela, vous ne pourrez sélectionner que la période suivante de la séquence.

<div class="imagetitle">Le formulaire R&R précédent concernait la période du 24 avril</div>

![Add R&R: pre-selected period](images-en/add_rnr_selected_period.png)

Notez que vous ne pouvez pas créer le formulaire R&R suivant tant que le précédent n'est pas finalisé :

![Warning: need to finalise previous](images-en/add_rnr_error_finalise.png)

Une fois que vous êtes satisfait de votre saisie, cliquez sur `OK` pour générer le formulaire. Vous serez redirigés vers la page de détails du formulaire R&R.

## Vue Détaillée

![R&R Detail view](images-en/rnr_detail.png)

Le formulaire R&R contient les colonnes suivantes. Les colonnes calculées/non modifiables sont grisées. Les colonnes marquées d'un astérisque (\*) ci-dessous sont modifiables.

| Colonne                                    | Description                                                                                                                                                                                                                          |
| :----------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code**                                   | Code article                                                                                                                                                                                                                         |
| **Nom**                                    | Nom de l'article                                                                                                                                                                                                                     |
| **Concentration**                          | Concentration de l'article                                                                                                                                                                                                           |
| **Unité**                                  | Unité de mesure de l'article                                                                                                                                                                                                         |
| **VEN**                                    | Catégorie VEN: Vital (V), Essentiel (E), Non-essentiel (N)                                                                                                                                                                           |
| **Solde Initial\***                        | Stock disponible pour cet article au début de la période. Ce champ utilise le solde final du formulaire R&R précédent (s'il existe) ou tente de calculer le solde à partir des données de transaction disponibles dans Open mSupply. |
| **Reçu\***                                 | Quantité de cet article reçu pendant la période. Calculé grâce aux quantités reçues via les livraisons entrantes.                                                                                                                    |
| **Consommation\***                         | Quantité de cet article consommée au cours de la période. Calculé grâce aux quantités distribuées via les livraisons sortantes ou les prescriptions.                                                                                 |
| **Ajusté(e)**                              | Consommation ajustée en fonction des jours de rupture de stock. Le calcul est <code>Consommation x Jours de la période / Jours en stock</code>                                                                                       |
| **Pertes\***                               | Pertes enregistrées pour cet article au cours de la période. Saisies manuellement.                                                                                                                                                   |
| **Ajustements +/-\***                      | Pertes/ajustements effectués pour cet élément au cours de la période. Peuvent être positifs ou négatifs. Alimentés par les données provenant des inventaires ou des ajustements de stock.                                            |
| **Durée de rupture de stock (en jours)\*** | Nombre de jours dans la période où le stock disponible pour l'article était de 0.                                                                                                                                                    |
| **Solde Final**                            | Stock disponible pour l'article à la fin de la période. Le calcul est le suivant : <code>Solde initial + Reçu - Consommé + Ajustements</code>                                                                                        |
| **CMM**                                    | Consommation mensuelle moyenne (distribution) sur les 3 dernières périodes                                                                                                                                                           |
| **Minimum**                                | Quantité minimale de stock à avoir en main, la quantité demandée devrait garantir que le stock ne descende pas en dessous de cette valeur. Calculé comme <code>CMM x Seuil de stock faible</code> (préférence du dépôt)              |
| **Maximum**                                | Quantité idéale de stock à avoir en main, la quantité demandée peut être n'importe quelle quantité jusqu'à cette valeur. Calculé comme <code>CMM x Seuil de surstock</code> (préférence du dépôt)                                    |
| **Péremption\***                           | Date d'expiration du premier lot de cet article disponible                                                                                                                                                                           |
| **Demandé\***                              | Quantité à demander dans la réquisition. Calculée comme <code>Maximum - Solde final</code>                                                                                                                                           |
| **Stock faible**                           | Alerte si votre solde final est faible par rapport au niveau de stock idéal. Affiche `!` lorsque le `solde final` est inférieur à la moitié du `maximum` et `!!` lorsqu'il est inférieur au quart                                    |
| **Commentaire\***                          | Vous pouvez ajouter des commentaires pour chaque ligne selon vos besoins                                                                                                                                                             |
| **Confirmé\***                             | Utilisez cette colonne pour suivre les lignes complétées. Elle sert également de bouton d'enregistrement pour les modifications apportées à une ligne.                                                                               |
| **Quantité Approuvée**                     | Une fois le formulaire R&R finalisé, cette colonne affichera la quantité approuvée par l'utilisateur autorisé (si les autorisations sont configurées)                                                                                |

### Modifier le formulaire R&R

Vous pouvez modifier les données d'utilisation de chaque article dans le formulaire R&R, ainsi que la quantité à demander au fournisseur.

Une fois que vous êtes satisfaits des informations relatives à un article, cochez la case « Confirmé » pour enregistrer les données.

![Edit line](images-en/rnr_edit_line.gif)

### Imprimer et exporter

Vous pouvez imprimer ou exporter le formulaire R&R en cliquant sur les boutons `Imprimer` ou `Exporter` dans le coin supérieur droit de l'écran.

![Print and export buttons](images-en/rnr_print_and_export.png)

- Le bouton `Imprimer` ouvrira la fenêtre d'impression de votre navigateur. Vous pouvez également enregistrer le rapport en format PDF à partir d'ici.
- Le bouton `Exporter` téléchargera le formulaire R&R sous forme de fichier Excel.

<div class="note">
Pour imprimer ou exporter, vous aurez besoin d'un rapport de formulaire R&R configuré. Veuillez contacter le support pour obtenir de l'aide.
</div>

### Volet de détails

Le bouton `Plus` dans le coin supérieur droit de l'écran ouvrira le volet de détails. Ici, vous pouvez voir des informations supplémentaires sur le formulaire R&R, telles que le nom du programme et le fournisseur.

![R&R detail panel](images-en/rnr_more_info.png)

Vous pouvez également définir une référence, qui sera incluse dans la commande interne envoyée au fournisseur.

### Mode Plein Écran

Il y a beaucoup d'informations sur les formulaires R&R, et parfois il peut être difficile de tout voir en même temps. Cliquez sur le bouton `Plein Écran` dans le coin supérieur droit de l'écran pour agrandir la fenêtre.

![R&R full screen](images-en/rnr_full_screen.gif)

Cliquez sur le bouton `Quitter` dans le coin supérieur droit de l'écran pour revenir à la fenêtre normale, ou vous pouvez utiliser la touche `Échap` si vous utilisez un clavier.

### Finaliser un formulaire R&R

![Finalise](images-en/rnr_finalise.png)

Lorsque vous êtes prêt à finaliser le formulaire R&R, cliquez sur le bouton `Finaliser` en bas à droite de l'écran. À ce stade :

- Le formulaire R&R ne sera plus modifiable
- Une commande interne sera créée et envoyée au fournisseur sélectionné. Les valeurs saisies pour chaque article dans le formulaire R&R sont utilisées pour remplir la commande interne, vérifiez donc bien la valeur `Demandé` avant de confirmer !
- Une fois la commande interne approuvée par l'utilisateur autorisé, la colonne `Quantité approuvée` sera renseignée avec les quantités approuvées.

Vous pouvez également cliquer sur le bouton `Fermer` à tout moment pour revenir à la vue de liste.
