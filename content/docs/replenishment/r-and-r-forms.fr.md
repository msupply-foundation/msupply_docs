+++
title = "Formulaires Rapport&Réquisitions"
description = "Introduction aux formulaires R&R"
date = 2024-08-06T00:00:00+00:00
updated = 2024-08-06T00:00:00+00:00
draft = false
weight = 46
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Les formulaires de rapport et de réquisition (R&R) sont utilisés pour rendre compte de l'utilisation des articles et demander des stocks aux fournisseurs. Ils permettent de garantir que vous disposez de suffisamment de stock pour répondre aux besoins de vos patients."
toc = true
top = false
+++

## Installation

Pour utiliser les formulaires R&R, assurez-vous d'activer la préférence du site pour 'Ouvrir mSupply : utilisez le module du programme' au niveau de l'administration du serveur.

![Store preference](/docs/programs/images/program_pref.png)

Vous aurez également besoin d'un programme configuré et visible dans votre site, et le programme aura besoin d'un calendrier périodique qui lui sera associé.

Commencez par configurer [les périodes et les calendriers](https://docs.msupply.org.nz/admin:schedules_periods), puis créez un programme et associez le calendrier.

Voir [mSupply docs](https://docs.msupply.org.nz/items:programs) pour configurer des programmes - notez cependant que vous n'aurez besoin que du début de ce processus, qui consiste à créer un programme et à lui associer un calendrier. Pour les formulaires R&R, les autres aspects de la configuration du programme ne sont pas encore utilisés.

## Formulaires R&R - Vue en liste

Aller sur `Approvisionnement` > `Formulaires R&R` pour voir la liste des formulaires R&R.

![R&R Navigation](/docs/replenishment/images/goto_rnr.png)

Vous pouvez cliquer sur les en-têtes de colonne pour trier la liste par cette colonne.

![R&R List](/docs/replenishment/images/rnr_list.png)

En cliquant sur un formulaire R&R, vous accéderez à la page de détails.

### Ajouter un formulaire R&R

Pour ajouter un formulaire R&R, cliquez sur le bouton « Ajouter un formulaire » dans le coin supérieur droit de l'écran.

![Add Button](/docs/replenishment/images/rnr_add_button.png)

Une fenêtre s'ouvrira pour vous permettre de sélectionner le programme, l'horaire, la période et le fournisseur pour le formulaire R&R.

![Add R&R: empty](/docs/replenishment/images/add_rnr_empty.png)

La première fois que vous créez un formulaire R&R, vous devrez sélectionner chacune de ces options. Après cela, les entrées seront pré-remplies avec les données de la période précédente.

<div class="imagetitle">ONotre formulaire R&R le plus récent date d'avril 2024, pour le programme de la Tuberculose (Tb). Le même programme, le même calendrier et le même fournisseur sont sélectionnés, et la période suivante est choisie automatiquement.</div>

![Add R&R: pre-filled](/docs/replenishment/images/add_rnr.png)

La première fois que vous créez un formulaire R&R, vous pouvez sélectionner n'importe quelle période disponible. Après cela, vous ne pourrez sélectionner que la période suivante de la séquence.

<div class="imagetitle">Le formulaire R&R précédent concernait la période du 24 avril</div>

![Add R&R: pre-selected period](/docs/replenishment/images/add_rnr_selected_period.png)

Notez que vous ne pouvez pas créer le formulaire R&R suivant tant que le précédent n'est pas finalisé :

![Warning: need to finalise previous](/docs/replenishment/images/add_rnr_error_finalise.png)

Une fois que vous êtes satisfait de vos saisies, cliquez sur `OK` pour générer le formulaire. Vous serez redirigé vers la page de détails du formulaire R&R.

## Vue détaillée

![R&R Detail view](/docs/replenishment/images/rnr_detail.png)

Le formulaire R&R contient les colonnes suivantes. Les colonnes calculées/non modifiables sont grisées. Les colonnes marquées d'un astérisque (\*) ci-dessous sont modifiables.

| Colonne                               | Description                                                                                                                                                                                                   |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Code**                              | Code Produit                                                                                                                                                                                                     |
| **Nom**                              | Nom du produit                                                                                                                                                                                                     |
| **Concentration**                          | Concentration du produit                                                                                                                                                                                          |
| **Unité**                              | Unité de mesure du produit                                                                                                                                                                                  |
| **VEN**                               | Catégorie VEN: Vital (V), Essentiel (E), Non-essentiel (N)                                                                                                                                                |
| **Solde Initial\***                 | Stock disponible pour cet article au début de la période. Utilisez le solde final du formulaire R&R précédent (s'il existe) ou tentez de calculer le solde en fonction des données de transaction dans Open mSupply. |
| **Reçu\***                        | Quantité de ce produit reçue pendant la période. Renseigné par les quantités reçues via les livraisons entrantes.                                                                                                 |
| **Consommé/distribué\***            | Quantité de cet article consommée au cours de la période. Renseigné par les quantités distribuées par livraisons sortantes ou prescriptions.                                                                            |
| **Consommation/distribution ajustée** | Consommation ajustée en fonction des ruptures journalieres. La formule est <code>Consommé x Jours de la période / Jours avec stock disponible /</code>                                                                                        |
| **Ajustements +/-\***                 | Pertes/ajustements effectués pour cet élément au cours de la période. Peuvent être positifs ou négatifs. Alimentés par les données des inventaires ou de l'inventaire Ajustements.                                                             |
| **Durée de rupture\***              | Nombre de jours dans la période où le stock disponible pour l'article était de 0.                                                                                                                                          |
| **Balance Finale**                     | Stock disponible pour l'article à la fin de la période. Le calcul est le suivant : <code>Solde initial + Reçu - Consommé + Ajustements</code>                                                                          |
| **CMM/DMM**                           | Consommation mensuelle moyenne (distribution) sur les 3 dernières périodes                                                                                                                                            |
| **Maximum**                           | Quantité idéale de stock à avoir en main, la quantité demandée peut être n'importe quelle quantité jusqu'à cette valeur. Calculé comme <code>ACMM x 2</code>                                                                            |
| **Péremption\***                          | Date d'expiration du premier lot de cet article disponible                                                                                                                                             |
| **Demandé\***                       | Quantité à demander dans la réquisition. Calculée comme <code>Maximum - Solde final</code>                                                                                                               |
| **Stock faible**                         | Avertissement si votre solde final est faible par rapport au niveau de stock idéal. Affiche `!` lorsque le `solde final` est inférieur à la moitié du `maximum` et `!!` lorsqu'il est inférieur au quart                     |
| **Commentaire\***                         | Vous pouvez ajouter des commentaires à la ligne selon vos besoins                                                                                                                                                                |
| **Confirmé\***                       | Utilisez cette colonne pour suivre les lignes terminées. Elle sert également de bouton d'enregistrement pour les modifications apportées à une ligne.                                                                                                     |
| **Quantité Approuvée**                 | Une fois le formulaire R&R finalisé, cette colonne affichera la quantité approuvée par l'autorisateur (si l'autorisation est configurée)                                                                                |

### Modifier le formulaire R&R

Vous pouvez modifier les données d'utilisation de chaque article dans le formulaire R&R, ainsi que la quantité à demander au fournisseur.

Une fois que vous êtes satisfait des informations relatives à un article, cochez la case « Confirmé » pour enregistrer les données.

![Edit line](/docs/replenishment/images/rnr_edit_line.gif)

### Imprimer et exporter

Vous pouvez imprimer ou exporter le formulaire R&R en cliquant sur les boutons `Imprimer` ou `Exporter` dans le coin supérieur droit de l'écran.

![Print and export buttons](/docs/replenishment/images/rnr_print_and_export.png)

- Le bouton `Imprimer` ouvrira la fenêtre d'impression de votre navigateur. Vous pouvez également enregistrer le rapport au format PDF à partir d'ici.
- Le bouton `Exporter` téléchargera le formulaire R&R sous forme de fichier Excel.

<div class="note">
Pour imprimer ou exporter, vous aurez besoin d'un rapport de formulaire R&R configuré. Veuillez contacter le support pour obtenir de l'aide.
</div>

### Finaliser un formulaire R&R

![Finalise](/docs/replenishment/images/rnr_finalise.png)

Lorsque vous êtes prêt à finaliser le formulaire R&R, cliquez sur le bouton `Finaliser` en bas à droite de l'écran. À ce stade :

- Le formulaire R&R ne sera plus modifiable
- Une commande interne sera créée et envoyée au fournisseur sélectionné. Les valeurs saisies pour chaque article dans le formulaire R&R sont utilisées pour remplir la commande interne, vérifiez donc la valeur `Demandé` avant de confirmer !
- Une fois la commande interne approuvée par l'autorisateur, la colonne `Quantité approuvée` sera renseignée avec les quantités approuvées.

Vous pouvez également cliquer sur le bouton `Fermer` à tout moment pour revenir à la vue de liste.
