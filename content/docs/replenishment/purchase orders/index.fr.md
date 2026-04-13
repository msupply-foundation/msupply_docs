+++
title = "Bons de Commande"
description = "Commander du stock auprès de fournisseurs externes."
date = 2025-09-26
updated = 2025-09-26
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Les Bons de Commande peuvent être utilisés pour commander du stock auprès de fournisseurs externes.

## Préférences

### Utiliser les Bons de Commande

Pour utiliser les bons de commande, vous devez avoir activé la préférence de dépôt [Utiliser la fonctionnalité d'achat](/docs/manage/facilities/#store-preferences) pour votre dépôt.

![Préférence du dépôt](images/po_store_pref.png)

### Autoriser les Bons de Commande

L'autorisation est requise si la [préférence globale](/docs/manage/global-preferences/) `Autoriser les Bons de Commande` est activée.

Lorsqu'elle est activée, le prochain statut d'un bon de commande après `Nouveau` est `Prêt pour approbation`. Seul un utilisateur disposant des permissions d'autorisation peut confirmer le passage au statut suivant, `Prêt pour envoi`.

## Permissions

### Autoriser les Bons de Commande

Les utilisateurs devant être en mesure d'autoriser les bons de commande doivent avoir la [permission utilisateur](https://docs.msupply.org.nz/admin:managing_users#permissions_tabs) `Autoriser les bons de commande` activée.

Cette permission permet à l'utilisateur de faire passer le statut d'un bon de commande de `Prêt pour approbation` à `Prêt pour envoi` si l'autorisation est requise.

Elle permet également à l'utilisateur de modifier la valeur `Paquets ajustés` une fois que le bon de commande est au statut `Prêt pour envoi` ou ultérieur. Les utilisateurs sans cette permission ne peuvent pas modifier ce champ.

## Consulter les Bons de Commande

### Accéder au menu Bons de Commande

Avec la préférence `Utiliser la fonctionnalité d'achat` activée, vous pourrez accéder au menu **Bons de Commande** :

![Accéder aux Bons de Commande](images/po_navigation.png)

1. Allez dans le menu `Réapprovisionnement` dans le panneau de navigation
2. Cliquez sur `Bons de Commande`

### Liste des Bons de Commande

La première chose que vous voyez est une liste des Bons de Commande existants.

La liste des Bons de Commande est divisée en les colonnes suivantes :

| Colonne                      | Description                              |
| :--------------------------- | :--------------------------------------- |
| **Fournisseur**              | Nom du fournisseur                       |
| **Numéro**                   | Numéro du Bon de Commande                |
| **Créé**                     | Date de création                         |
| **Confirmé**                 | Date de confirmation                     |
| **Envoyé**                   | Date d'envoi                             |
| **Livraison demandée**       | Date de livraison demandée               |
| **Statut**                   | Statut actuel                            |
| **Mois cibles**              | Mois d'approvisionnement cibles          |
| **Lignes**                   | Nombre de lignes sur le bon de commande  |
| **Commentaire**              | Commentaire du bon de commande           |

### Filtrer les Bons de Commande

Vous pouvez filtrer la liste des bons de commande par fournisseur, statut, date de confirmation, date de livraison demandée et date d'envoi.

![Filtre des Bons de Commande](images/po_filter.png)

![Résultats filtrés](images/po_filtered.png)

### Exporter les Bons de Commande

La liste des Bons de Commande peut être exportée en fichier CSV. Cliquez simplement sur le bouton d'export (à droite, en haut de la page).

![Bouton d'export](images/po_export.png)

La fonction d'export téléchargera tous les Bons de Commande, pas seulement la page actuelle, si vous en avez plus de 20.

### Supprimer un Bon de Commande

Vous pouvez supprimer une commande depuis la liste des Bons de Commande.

1. Sélectionnez le bon de commande à supprimer en cochant la case à gauche de la liste. Vous pouvez en sélectionner plusieurs. Vous pouvez même tous les sélectionner en utilisant la case principale dans les en-têtes de liste.

2. Le pied de page `Actions` s'affichera en bas de l'écran lorsqu'un bon de commande est sélectionné. Cliquez sur `Supprimer`.

Une notification confirme le nombre de bons de commande supprimés (coin inférieur gauche).

<div class="note">
Vous ne pouvez supprimer que les Bons de Commande avec le statut <code>Nouveau</code>.
</div>

## Lignes de Bons de Commande en attente

Pour voir les lignes actuellement en attente sur les bons de commande, appuyez sur le bouton `Lignes en attente`.

Cela vous amènera à une liste des lignes actuellement en attente — des lignes qui ont été envoyées au fournisseur mais n'ont pas encore été reçues ou sont partiellement reçues.

<div class="tip">
Appuyer sur une ligne vous amènera au bon de commande, où vous pourrez voir les lignes et mettre à jour le statut de ligne.
</div>

### Colonnes des lignes en attente

| Colonne                          | Description                                            |
| :------------------------------- | :----------------------------------------------------- |
| **N° BC**                        | Numéro du Bon de Commande                              |
| **Référence BC**                 | Référence fournisseur                                  |
| **Créé par**                     | Utilisateur ayant créé le bon de commande              |
| **Code fournisseur**             | Code du fournisseur                                    |
| **Nom fournisseur**              | Nom du fournisseur                                     |
| **Nom de l'article**             | Nom de l'article en attente                            |
| **BC confirmé**                  | Date de confirmation                                   |
| **Date de livraison prévue**     | Date de livraison prévue                               |
| **Unités ajustées (prévues)**    | Quantité d'unités commandées dans ce bon de commande   |
| **Unités reçues**                | Quantité d'unités reçues pour ce bon de commande       |
| **Unités en attente**            | Nombre d'unités encore en attente                      |

## Créer un nouveau Bon de Commande

1. Allez dans `Réapprovisionnement` > `Bons de Commande`
2. Appuyez sur le bouton `Nouveau Bon de Commande`, dans le coin supérieur droit
3. Une nouvelle fenêtre `Fournisseurs` s'ouvre, vous invitant à sélectionner un fournisseur
4. Lorsqu'un fournisseur est sélectionné, le bon de commande est créé

### Sélectionner un fournisseur

1. Dans la fenêtre `Fournisseurs`, une liste de fournisseurs vous est présentée. Vous pouvez sélectionner votre fournisseur dans la liste ou commencer à saisir le nom d'un fournisseur pour filtrer la liste.

<div class="tip">
Les bons de commande ne peuvent être créés que pour des fournisseurs externes — c'est-à-dire un fournisseur qui n'est <em>pas</em> un dépôt dans votre système mSupply.
</div>

<div class="imagetitle">
Dans l'exemple ci-dessous, nous commandons du stock auprès de <b>Ravenclaw Clinic</b>.
</div>

![](images/po_supplier.png)

2. Une fois que vous avez sélectionné un fournisseur, votre Bon de Commande est créé.

<div class="imagetitle">
Si tout s'est bien passé, vous devriez voir le nom de votre fournisseur dans le coin supérieur gauche et le statut actuel devrait être <code>Nouveau</code>.
</div>

![Nouveau Bon de Commande](images/po_new_order.png)

### Modifier le nom du fournisseur

Si vous avez sélectionné le mauvais fournisseur, vous pouvez changer le nom dans le champ `Nom du fournisseur` ou en sélectionner un dans la liste déroulante :

![](images/po_change_supplier.png)

### Saisir une référence fournisseur

Une fois votre Bon de Commande créé, vous pouvez saisir une référence fournisseur dans le champ `Réf. fournisseur`, s'ils en ont une (ex. BC#1234567)

### Saisir une date de livraison demandée

Saisissez la date de livraison demandée pour le bon de commande. Si certains articles nécessitent une date différente, elle peut être ajoutée lors de la création ou de la modification de l'article.

### Saisir une date de livraison prévue

Saisissez la date de livraison prévue pour le bon de commande, fournie par le fournisseur. Si certains articles nécessitent une date différente, elle peut être ajoutée lors de la création ou de la modification de l'article.

### Devises étrangères

Vous pouvez sélectionner une devise étrangère pour le bon de commande. Il s'agit généralement de la devise de votre fournisseur. Cliquez sur le menu déroulant et sélectionnez la devise souhaitée.

<div class="tip">Voir la <a href="/docs/introduction/faq/#is-there-support-for-my-currency">question sur la prise en charge des devises</a> pour la liste des codes pris en charge</div>

### Consulter ou modifier le panneau d'informations du Bon de Commande

Le panneau d'informations vous permet de voir ou de modifier les informations relatives au Bon de Commande. Il est divisé en plusieurs sections :

- Tarification
- Autre
- Dates

#### Comment ouvrir et fermer le panneau d'informations ?

Pour ouvrir le panneau d'informations, appuyez sur le bouton `Plus`, situé dans le coin supérieur droit de la vue du Bon de Commande.

Vous pouvez le fermer en appuyant sur le bouton `X Fermer`, dans le coin supérieur droit du panneau d'informations.

![Panneau d'informations](images/po_information_panel.png)

#### Tarification

Dans la section **Tarification**, vous pouvez voir les informations de prix pour le Bon de Commande, notamment : sous-total, frais supplémentaires, pourcentage de remise fournisseur, montant de remise fournisseur et coût final.

#### Autre

Dans la section **Autre**, vous pouvez : renseigner un nom de donateur, sélectionner un mode d'expédition, et rédiger ou modifier un commentaire.

<div class="note">
La configuration des donateurs est effectuée sur le serveur central mSupply. Cette <a href="https://docs.msupply.org.nz/receiving_goods:donors?s[]=donor#adding_or_editing_donors">page de documentation</a> vous explique comment procéder.
</div>

#### Dates

Dans cette section, vous verrez les dates clés du Bon de Commande : confirmé, envoyé, contrat signé, avance payée.

### Séquence de statuts du Bon de Commande

La séquence de statuts est située dans le coin inférieur gauche de l'écran du Bon de Commande.

Les statuts passés sont mis en surbrillance en bleu, les statuts suivants apparaissent en gris.

<figure>
    <img src="images/po_statussequence1.png" alt="Séquence de statuts du Bon de Commande (Envoyé)" style="width:100%">
    <figcaption align="center">Séquence de statuts : le statut actuel est <code>Envoyé</code>.</figcaption>
</figure>

Il y a 5 statuts pour les Bons de Commande (vous pourriez en voir moins si l'autorisation n'est pas requise) :

| Statut                   | Description                                                                                                                             | mSupply | Lignes modifiables | Lignes modifiables pour les utilisateurs autorisés |
| :----------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :----------------: | :------------------------------------------------: |
| **Nouveau**              | Premier statut lors de la création d'un nouveau Bon de Commande                                                                         |   nw    |         ✓          |                         ✓                          |
| **Prêt pour approbation**| La commande est prête à être approuvée par quelqu'un disposant d'une autorisation (uniquement si la préférence d'autorisation est activée) |   sg    |         ✓          |                         ✓                          |
| **Prêt pour envoi**      | Le bon de commande est prêt à être envoyé au fournisseur                                                                                |   cn    |                    |                         ✓                          |
| **Envoyé**               | Le bon de commande a été envoyé au fournisseur. Les lignes seront mises à jour au statut `Envoyé`                                       |   cn    |                    |                         ✓                          |
| **Finalisé**             | Lorsque vous confirmez que la commande a été reçue. Les lignes seront mises à jour au statut `Clôturé`                                  |   fn    |                    |                                                    |

<figure align="center">
    <img src="images/po_statussequence2.png" alt="Séquence de statuts du Bon de Commande (Prêt pour envoi)" style="width:60%">
    <figcaption align="center">Séquence de statuts : le statut actuel est <code>Prêt pour envoi</code>.</figcaption>
</figure>

<div class="imagetitle">
Ce bon de commande a été créé le 24/09/2025, prêt pour envoi le 24/09/2025 et envoyé le 30/09/2025
</div>

![Dates de statut du bon de commande](images/po_status_dates.png)

### Bouton Confirmer

Le bouton `Confirmer` permet de mettre à jour le statut d'un bon de commande. Les statuts ne peuvent pas être sautés.

| Confirmer...              | Statut actuel          | Statut suivant (autorisation activée) | Statut suivant (autorisation désactivée) |
| :------------------------ | :--------------------- | :------------------------------------ | ---------------------------------------- |
| **Nouveau**               | Nouveau                | Prêt pour approbation                 | Prêt pour envoi                          |
| **Prêt pour approbation** | Prêt pour approbation  | Prêt pour envoi                       | N/A                                      |
| **Prêt pour envoi**       | Prêt pour envoi        | Envoyé                                | Envoyé                                   |
| **Envoyé**                | Envoyé                 | Finalisé                              | Finalisé                                 |

![](images/po_confirm.png)

## Ajouter des lignes à un Bon de Commande

Pour ajouter une ligne, appuyez sur le bouton `Ajouter un Article` dans le coin supérieur gauche de votre écran.

Une nouvelle fenêtre `Ajouter un Article` s'ouvre.

![Bon de commande : bouton ajouter un article](images/po_add_item.png)

### Sélectionner un article

Dans la fenêtre `Ajouter un Article`, vous pouvez rechercher un article par : la liste des articles disponibles, tout ou partie d'un nom d'article, ou tout ou partie d'un code article.

Une fois votre article mis en surbrillance, appuyez sur son nom ou sur `Entrée`.

![Liste Ajouter un article](images/po_add_item_list.png)
![Ajouter un article par nom](images/po_add_item_name.png)
![Ajouter un article par code](images/po_add_item_code.png)

### Détails de l'article

Plusieurs champs contiennent des informations sur l'article. La plupart des champs sont modifiables lorsque le bon de commande est au statut Nouveau ou Prêt pour approbation.

| Champ                                  | Description                                                                                                                                                                                                                                              |
| :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Statut**                             | Le statut de cette ligne. Modifiable uniquement lorsque le bon de commande est au statut `Envoyé`                                                                                                                                                        |
| **Numéro de ligne**                    | La ligne sur laquelle se trouve cet article pour ce bon de commande.                                                                                                                                                                                     |
| **Stock en dépôt**                     | Le nombre d'unités de cet article dans votre dépôt.                                                                                                                                                                                                      |
| **Unité**                              | Le type d'unités commandées, par exemple « comprimé ».                                                                                                                                                                                                   |
| **Code article fournisseur**           | Le code article utilisé par le fournisseur. Laisser vide si non applicable.                                                                                                                                                                              |
| **Fabricant**                          | Sélectionnez un fabricant dans la liste déroulante.                                                                                                                                                                                                      |
| **Paquets demandés**                   | Le nombre de paquets que vous demandez — modifiable uniquement aux statuts `Nouveau` et `Prêt pour approbation`                                                                                                                                           |
| **Paquets ajustés**                    | Si le bon de commande est au statut `Prêt pour envoi` ou `Envoyé`, les utilisateurs autorisés peuvent modifier ce champ. Cela devient le nouveau nombre de paquets commandés. Ne peut pas être inférieur à la quantité déjà reçue pour cet article.      |
| **Taille de paquet**                   | Le nombre d'unités par paquet (par défaut, taille de paquet = 1).                                                                                                                                                                                        |
| **Demandé**                            | Champ en lecture seule avec le nombre de paquets demandés.                                                                                                                                                                                               |
| **Prix par paquet (avant remise)**     | Le prix de base par paquet dans la devise sélectionnée.                                                                                                                                                                                                  |
| **Pourcentage de remise**              | Le montant de remise applicable à cet article.                                                                                                                                                                                                           |
| **Prix par paquet (après remise)**     | Le prix par paquet remisé dans la devise sélectionnée.                                                                                                                                                                                                   |
| **Coût total**                         | Champ en lecture seule avec le coût calculé de tous les paquets pour cet article, après remise.                                                                                                                                                          |
| **Date de livraison demandée**         | Date de livraison demandée pour cet article. Peut différer de celle du bon de commande.                                                                                                                                                                  |
| **Date de livraison prévue**           | Date de livraison prévue pour cet article.                                                                                                                                                                                                               |
| **Commentaire**                        | Champ de texte libre pour un commentaire sur cet article.                                                                                                                                                                                                |
| **Notes**                              | Champ de texte libre pour des notes sur cet article.                                                                                                                                                                                                     |

<div class="note">
Si le bon de commande est au statut <code>Envoyé</code> et que les <code>Paquets ajustés</code> sont modifiés pour un article, le statut du bon de commande passera à <code>Prêt pour envoi</code> et le statut de la ligne passera à <code>Nouveau</code>.
</div>

<div class="imagetitle">
Dans l'exemple ci-dessous, nous commandons 50 paquets de 100 pour l'article <i>030063 - Acide Acétylsalicylique 100mg comprimés</i> au prix de 35$ par paquet avec une remise article de 5%.
</div>

![Ajouter des quantités d'article](images/po_additem_quantities.png)

### Confirmer l'article et les quantités

Une fois terminé, vous pouvez ajouter la nouvelle ligne en appuyant sur :

- `OK` si vous ne souhaitez pas ajouter d'autre ligne à votre bon de commande
- `OK & Suivant` si vous avez d'autres lignes à créer

Vous pouvez également appuyer sur `Annuler` pour annuler sans enregistrer.

## Ajouter des lignes via une liste maîtresse

Appuyez sur le bouton `Ajouter depuis une liste maîtresse` dans la sélection du bouton Ajouter.

<div class="note">
Le bouton sera désactivé si le statut du Bon de Commande est autre que <strong>Nouveau</strong> ou <strong>Prêt pour approbation</strong>.
</div>

![Bouton Ajouter un article](images/po_add_button_masterlist.png)

Une nouvelle fenêtre `Listes Maîtresses` s'ouvre. Cliquez simplement sur l'une des listes disponibles.

![Bouton Ajouter un article](../../images/add-item-master-lists.png)

Cliquez sur `OK` sur le message de confirmation :
![Bouton Ajouter un article](../../images/add-item-master-list-prompt.png)

Des lignes de remplacement seront ajoutées à votre bon de commande, affichées en police bleue avec une quantité de paquets à zéro. Vous pouvez ensuite les modifier en suivant les étapes décrites ci-dessus.

![Bouton Ajouter un article](images/po_placeholder_lines.png)

## Ajouter des lignes via une importation

Appuyez sur le bouton `Importer des lignes` dans la sélection du bouton Ajouter.

<div class="note">
Le bouton sera désactivé si le statut du Bon de Commande est autre que <strong>Nouveau</strong> ou <strong>Prêt pour approbation</strong>.
</div>

![Bouton Ajouter un article](images/po_add_button_import.png)

Une fenêtre d'importation s'ouvrira. Cliquez sur `Télécharger un modèle` pour télécharger un modèle CSV que vous pouvez utiliser pour importer des articles.

Lorsque vous êtes prêt, glissez-déposez le fichier CSV dans la fenêtre ou cliquez sur `Parcourir les fichiers` pour le sélectionner depuis votre ordinateur.

![](images/po_download_template.png)

##### Erreurs d'import

Après le chargement de votre fichier CSV, vos données seront validées et affichées pour révision. Si les données ne sont pas valides, un message d'erreur s'affichera et vous ne pourrez pas continuer.

![](images/po_upload_file.png)

Vous pouvez utiliser le bouton `Exporter` en bas de la fenêtre d'import pour télécharger un CSV incluant les messages d'erreur.

![](images/po_upload_lines.png)

## Modifier une ligne de Bon de Commande

Pour modifier une ligne, appuyez simplement dessus.

<div class="note">
La plupart des champs sont modifiables lorsque le Bon de Commande est aux statuts <code>Nouveau</code> ou <code>Prêt pour approbation</code>. À des statuts ultérieurs, différents champs sont disponibles.
</div>

| Champ                                      | Nouveau ou Prêt pour approbation | Prêt pour envoi | Envoyé |
| :----------------------------------------- | :------------------------------: | :-------------: | :----: |
| **Paquets demandés**                       |                ✓                 |                 |        |
| **Taille de paquet**                       |                ✓                 |                 |        |
| **Prix par paquet et remise article**      |                ✓                 |                 |        |
| **Nom de l'unité**                         |                ✓                 |                 |        |
| **Code fournisseur**                       |                ✓                 |        ✓        |   ✓    |
| **Fabricant**                              |                ✓                 |                 |        |
| **Dates de livraison demandée et prévue**  |                ✓                 |                 |        |
| **Date de livraison prévue**               |                ✓                 |        ✓        |        |
| **Commentaire et note**                    |                ✓                 |        ✓        |   ✓    |
| **Paquets ajustés**                        |                                  |        ✓        |   ✓    |
| **Statut de la ligne**                     |                                  |                 |   ✓    |

### Supprimer une ligne de Bon de Commande

1. Ouvrez le Bon de Commande à modifier
2. Assurez-vous que le statut n'est pas encore `Prêt pour envoi`
3. Sélectionnez la ou les lignes à supprimer en cochant les cases à gauche
4. Cliquez sur le bouton `Supprimer` en bas de la page

![Supprimer une ligne de bon de commande](images/po_delete_lines.png)

### Autres actions sur les lignes

| Action                              | Effet                                                                                                                                                           |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Supprimer                           | Supprime les lignes sélectionnées                                                                                                                               |
| Mettre à jour la date de livraison prévue | Ouvre une fenêtre pour choisir une date de livraison prévue pour toutes les lignes sélectionnées                                                         |
| Clôturé pour réception              | Définit le `Statut de la ligne` à `Clôturé` pour toutes les lignes sélectionnées. Disponible uniquement lorsque le Bon de Commande est au statut `Envoyé`       |
| Effacer la sélection                | Efface les cases de sélection                                                                                                                                   |

## Onglets du Bon de Commande

### Marchandises reçues

Cet onglet affiche les `Marchandises reçues` liées à ce bon de commande.

![Onglet marchandises reçues](images/po_goods_received_tab.png)

### Détails

Des informations supplémentaires sur le bon de commande peuvent être saisies ici : officier d'autorisation 1 & 2, instructions supplémentaires, agent du fournisseur, message d'en-tête, conditions de fret, commission de l'agent, frais documentaires, frais de communication, frais d'assurance, frais de fret.

![Onglet détails](images/po_details_tab.png)

### Documents

L'onglet `Documents` affiche les documents téléchargés pour le bon de commande.

Appuyez sur le bouton `Télécharger un document` pour ouvrir une fenêtre d'upload. Glissez-déposez votre document ou cliquez sur `Parcourir les fichiers`.

![Onglet documents](images/po_documents_tab.png)
![Modal documents](images/po_documents_modal.png)

### Journal

L'onglet `Journal` affiche le journal d'activité de ce bon de commande, enregistrant toutes les actions des utilisateurs effectuées via Open mSupply.

![Onglet journal](images/po_log_tab.png)
