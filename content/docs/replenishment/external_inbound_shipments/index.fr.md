+++
title = "Expéditions Entrantes Externes"
description = "Réception du stock de fournisseurs externes via des Bons de Commande."
date = 2026-04-10
updated = 2026-04-10
draft = false
weight = 44
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Les Expéditions Entrantes Externes sont utilisées pour recevoir du stock de fournisseurs externes. Elles sont généralement basées sur un [Bon de Commande](/docs/replenishment/purchase-orders/), mais vous pouvez également créer une _Expédition Entrante_ manuelle pour demander du stock à un fournisseur externe de la même façon que pour un fournisseur interne. Pour les détails sur les expéditions entrantes non liées à un bon de commande, consultez la page <a href="/docs/replenishment/inbound-shipments">Expéditions Entrantes</a>.

Lorsqu'une Expédition Entrante Externe est liée à un Bon de Commande, elle offre des fonctionnalités supplémentaires pour le suivi des livraisons, la gestion des devises étrangères et l'autorisation optionnelle des lignes individuelles avant la réception des articles.

## Consulter les Expéditions Entrantes Externes

Les Expéditions Entrantes Externes apparaissent aux côtés des Expéditions Entrantes régulières dans la liste des Expéditions Entrantes.

### Identifier les Expéditions Entrantes Externes

Dans la liste des _Expéditions Entrantes_, vous pouvez distinguer les _Expéditions Entrantes Externes_ des autres types par l'icône affichée à côté du nom du fournisseur :

- Une **icône de camion** indique une Expédition Entrante Externe (depuis un Bon de Commande ou un fournisseur externe)
- Une **icône de maison** indique une expédition interne (depuis un autre dépôt de votre système mSupply)

## Créer une nouvelle Expédition Entrante Externe

Pour créer une Expédition Entrante Externe, vous avez besoin d'un Bon de Commande existant au statut `Envoyé`.

1. Allez dans `Réapprovisionnement` > `Expédition Entrante`
2. Cliquez sur la flèche déroulante à côté du bouton `Nouvelle Expédition`
3. Sélectionnez `Nouvelle Expédition Externe`

![Bouton Nouvelle Expédition Externe](images/eis_new_external_button.png)

### Sélectionner un Bon de Commande

Une fenêtre apparaîtra affichant tous les Bons de Commande au statut `Envoyé`. La liste affiche :

| Colonne          | Description                              |
| :--------------- | :--------------------------------------- |
| **Fournisseur**  | Nom du fournisseur                       |
| **Numéro**       | Numéro du Bon de Commande                |
| **Réf.**         | Votre référence pour le Bon de Commande  |
| **Commentaire**  | Tout commentaire sur le Bon de Commande  |

Sélectionnez un Bon de Commande dans la liste. Vous aurez alors deux options :

- **Ajouter avec toutes les lignes** : crée l'Expédition Entrante Externe et la remplit automatiquement avec toutes les lignes du Bon de Commande. C'est l'option recommandée dans la plupart des cas.
- **Ajouter sans lignes** : crée une Expédition Entrante Externe vide liée au Bon de Commande. Vous pouvez ensuite ajouter des lignes manuellement.

Une fois créée, l'expédition s'ouvrira dans la vue détaillée avec le nom du fournisseur affiché dans le coin supérieur gauche et un statut `Nouvelle`.

<div class="note">
Vous avez besoin de la permission <code>Ajouter/modifier des marchandises reçues</code> pour créer des Expéditions Entrantes Externes.
</div>

## Vue Détaillée de l'Expédition Entrante Externe

La vue détaillée d'une Expédition Entrante Externe comporte plusieurs onglets supplémentaires par rapport à une Expédition Entrante manuelle :

- **Détails** : la vue principale des lignes de l'expédition
- **Financier** : informations de tarification ligne par ligne
- **Devise** : gestion des devises étrangères et des frais supplémentaires
- **Livraison** : suivi des livraisons par rapport au Bon de Commande
- **Documents** : téléchargement et gestion des documents liés
- **Journal d'activité** : historique des modifications

### Onglet Détails

L'onglet Détails affiche les lignes de l'expédition. Pour les Expéditions Entrantes Externes, les lignes sont groupées par **numéro de ligne BC** plutôt que par code article. Cela permet de voir facilement à quelle ligne du Bon de Commande correspond chaque ligne de l'expédition.

Les colonnes affichées incluent :

| Colonne              | Description                                                        |
| :------------------- | :----------------------------------------------------------------- |
| **Ligne BC**         | Le numéro de ligne du Bon de Commande lié                          |
| **Code**             | Code de l'article                                                  |
| **Nom**              | Nom de l'article                                                   |
| **Lot**              | Numéro de lot                                                      |
| **Expiration**       | Date d'expiration du lot                                           |
| **Taille de paquet** | Nombre d'unités par paquet                                         |
| **Paquets**          | Nombre de paquets reçus                                            |
| **Qté unitaire**     | Total d'unités reçues                                              |
| **Statut autor.**    | Statut d'autorisation de la ligne (si l'autorisation est activée)  |

<div class="tip">
Vous pouvez modifier le groupement et afficher/masquer des colonnes en utilisant les options en haut à droite du tableau.
</div>

### Onglet Financier

L'onglet Financier fournit une vue détaillée de la tarification pour chaque ligne. Cet onglet est uniquement disponible pour les Expéditions Entrantes Externes.

Les colonnes incluent :

| Colonne                  | Description                                                          |
| :----------------------- | :------------------------------------------------------------------- |
| **Nom de l'article**     | Nom de l'article                                                     |
| **Ligne BC**             | Numéro de ligne du Bon de Commande                                   |
| **Qté paquets**          | Nombre de paquets                                                    |
| **Taille de paquet**     | Unités par paquet                                                    |
| **Unité**                | Unité de mesure                                                      |
| **Prix BC**              | Prix par paquet du Bon de Commande                                   |
| **Prix de coût local**   | Prix de coût en devise locale (affiché si devise étrangère utilisée) |
| **Prix de vente**        | Prix de vente par paquet                                             |
| **Total ligne**          | Valeur totale de la ligne                                            |
| **Total ajusté**         | Total après ajustements                                              |

### Onglet Devise

L'onglet Devise vous permet de gérer les paramètres de devise étrangère et les frais supplémentaires pour l'expédition.

| Champ                          | Description                                                              |
| :----------------------------- | :----------------------------------------------------------------------- |
| **Devise BC**                  | La devise du Bon de Commande lié (lecture seule)                         |
| **Taux de change**             | Taux de change entre la devise BC et la devise locale                    |
| **Frais (devise BC)**          | Frais supplémentaires (ex. transport) dans la devise du Bon de Commande  |
| **Frais (devise locale)**      | Frais supplémentaires dans votre devise locale                           |

L'onglet affiche également un récapitulatif avec les valeurs totales et le pourcentage d'ajustement de coût appliqué aux lignes.

<div class="note">
Le taux de change peut être modifié si la devise BC diffère de votre devise locale.
</div>

### Onglet Livraison

L'onglet Livraison fournit un aperçu de la quantité livrée de chaque article du Bon de Commande, par cette expédition et les livraisons précédentes. Cela permet de suivre les quantités restantes.

| Colonne                     | Description                                    |
| :-------------------------- | :--------------------------------------------- |
| **Nom de l'article**        | Nom de l'article                               |
| **Livraisons précédentes**  | Quantité livrée dans les expéditions précédentes |
| **Cette livraison**         | Quantité sur cette expédition                  |
| **En transit**              | Quantité actuellement en transit               |
| **Restant**                 | Quantité encore à livrer                       |
| **Quantité BC**             | Quantité totale commandée sur le Bon de Commande |

<div class="tip">
Les valeurs affichées dans l'onglet Livraison changent selon le statut de l'expédition. Par exemple, une fois l'expédition marquée comme Livrée, les quantités passent de « En transit » à « Cette livraison ».
</div>

### Panneau d'informations

Comme pour les Expéditions Entrantes manuelles, vous pouvez ouvrir le panneau d'informations en cliquant sur le bouton `Plus` dans le coin supérieur droit. Il donne accès à :

- **Informations supplémentaires** : créateur, couleur, commentaire
- **Documents liés** : liens vers le Bon de Commande associé et d'autres transactions liées
- **Détails de la facture** : totaux des coûts et frais de service
- **Détails de transport** : numéros de réservation ou de suivi

## Séquence de statuts de l'Expédition Entrante Externe

| Statut           | Description                                                           | Modifiable |
| :--------------- | :-------------------------------------------------------------------- | :--------: |
| **Nouvelle**     | Statut initial lors de la création de l'expédition                    |    Oui     |
| **Expédiée**     | Les articles ont été expédiés et sont en transit                      |    Oui     |
| **Livrée**       | Vous avez confirmé que les articles sont arrivés dans votre dépôt     |    Oui     |
| **Réceptionnée** | Les articles ont été inspectés et intégrés à votre inventaire         |    Oui     |
| **Vérifiée**     | La vérification finale est terminée. L'expédition ne peut plus être modifiée. | Non  |

<div class="note">
Vous pouvez sauter des statuts si nécessaire. Par exemple, vous pouvez passer directement de <code>Nouvelle</code> à <code>Livrée</code> si les articles arrivent avant que vous ayez eu le temps d'enregistrer l'expédition comme expédiée.
</div>

### Transitions de statut

Le bouton `Confirmer` en bas à droite de l'écran vous permet d'avancer l'expédition vers le statut suivant. Utilisez la flèche déroulante pour passer à un statut ultérieur.

| Confirmer...              | Statut actuel | Statut suivant |
| :------------------------ | :------------ | :------------- |
| **Confirmer Expédiée**    | Nouvelle      | Expédiée       |
| **Confirmer Livrée**      | Expédiée      | Livrée         |
| **Confirmer Réceptionnée**| Livrée        | Réceptionnée   |
| **Confirmer Vérifiée**    | Réceptionnée  | Vérifiée       |

<div class="note">
La confirmation <b>Vérifiée</b> nécessite la permission <code>Finaliser les marchandises reçues</code>.
</div>

### Case à cocher En attente

Située dans le coin inférieur gauche, la case `En attente` empêche l'expédition d'être mise à jour vers le statut suivant tant qu'elle est cochée.

## Ajouter des lignes à une Expédition Entrante Externe

### Lignes auto-remplies depuis un Bon de Commande

Si vous avez sélectionné **Ajouter avec toutes les lignes** lors de la création de l'expédition, les lignes seront automatiquement remplies depuis le Bon de Commande avec les informations d'article, de quantité et de tarification.

### Ajouter des lignes manuellement

Vous pouvez également ajouter des lignes manuellement en cliquant sur le bouton `Ajouter un Article`. Le processus est le même que pour une [Expédition Entrante](/docs/replenishment/inbound-shipments/#ajouter-des-lignes-à-une-expédition-entrante) régulière, à l'exception que seuls les articles figurant sur le bon de commande sont disponibles.

### Modifier une ligne

Pour modifier une ligne, cliquez dessus pour ouvrir la fenêtre de modification. Vous pouvez ajuster : le lot et la date d'expiration, la taille de paquet et les paquets reçus, la tarification, l'emplacement de stockage, et le statut d'autorisation (si activé).

### Supprimer des lignes

1. Sélectionnez les lignes en cochant la case à gauche de la liste
2. Cliquez sur `Supprimer` dans la barre de pied de page

<div class="note">
Les lignes ne peuvent être supprimées que si le statut de l'expédition est inférieur à <code>Vérifiée</code>.
</div>

### Autres actions sur les lignes

| Action                          | Description                                                                              |
| :------------------------------ | :--------------------------------------------------------------------------------------- |
| **Supprimer**                   | Supprime les lignes sélectionnées                                                        |
| **Modifier Campagne/Programme** | Associe les lignes sélectionnées à une campagne ou un programme                          |
| **Définir les quantités à 0**   | Définit les quantités de paquets à zéro pour les lignes sélectionnées                   |
| **Retourner les lignes sélectionnées** | Crée un retour fournisseur pour les lignes sélectionnées                          |
| **Approuver**                   | Définit le statut d'autorisation à Approuvé (si l'autorisation est activée)              |
| **Rejeter**                     | Définit le statut d'autorisation à Rejeté (si l'autorisation est activée)                |
| **En attente**                  | Remet le statut d'autorisation à En attente (si l'autorisation est activée)              |

## Autorisation des lignes

Les Expéditions Entrantes Externes prennent en charge un flux de travail optionnel d'autorisation au niveau des lignes. Lorsqu'il est activé, les lignes individuelles doivent être approuvées ou rejetées avant que l'expédition puisse être réceptionnée.

### Activer l'autorisation des lignes

L'autorisation des lignes est contrôlée par la préférence de dépôt **Les lignes d'expédition entrante externe doivent être autorisées**. Elle peut être activée dans [Gérer > Dépôts](/docs/manage/facilities/#editing-store-preferences).

Lorsque cette préférence est activée :

- Les lignes ajoutées depuis un Bon de Commande démarreront avec un statut d'autorisation `En attente`
- Une colonne **Statut autor.** apparaît dans la liste des lignes
- Le statut d'autorisation est également modifiable dans la fenêtre de modification de ligne

### Statuts d'autorisation

| Statut       | Description                                    |
| :----------- | :--------------------------------------------- |
| **En attente** | La ligne est en attente d'examen             |
| **Approuvée**  | La ligne a été approuvée et peut continuer   |
| **Rejetée**    | La ligne a été rejetée                        |

### Autoriser les lignes

Pour modifier le statut d'autorisation d'une ligne, vous pouvez soit :

1. **Sélectionner des lignes** dans la liste et utiliser les boutons **Approuver**, **Rejeter** ou **En attente** dans la barre de pied de page
2. **Modifier une ligne** et changer le menu déroulant Statut autor. dans la fenêtre de modification

<div class="note">
Passer le statut d'une ligne à <code>Approuvée</code> ou <code>Rejetée</code> nécessite la permission <code>Autoriser les marchandises reçues</code>. Les utilisateurs sans cette permission ne peuvent voir que le statut actuel.
</div>

### Impact sur les transitions de statut

Lorsque l'autorisation des lignes est activée, l'expédition **ne peut pas être confirmée comme Réceptionnée ou Vérifiée** tant que des lignes sont encore en statut `En attente`. Toutes les lignes doivent être soit Approuvées soit Rejetées avant que l'expédition puisse progresser.

## Recevoir du stock avec une Expédition Entrante Externe

### 1. Confirmer Expédiée (optionnel)

Si vous savez que les articles ont été expédiés, vous pouvez confirmer l'expédition comme `Expédiée`. C'est optionnel — vous pouvez passer directement à Livrée.

### 2. Confirmer Livrée

Confirmez que les articles sont physiquement arrivés dans votre dépôt en cliquant sur `Confirmer Livrée`.

<div class="note">
Les lignes non allouées avec 0 paquet seront automatiquement supprimées lors de la confirmation de livraison.
</div>

### 3. Confirmer Réceptionnée

Après inspection des articles, confirmez l'expédition comme `Réceptionnée`. À ce stade :

- Les articles de l'expédition sont ajoutés à votre stock en dépôt
- Les articles sont disponibles pour la distribution

<div class="note">
Si l'autorisation des lignes est activée, toutes les lignes doivent être en statut <code>Approuvée</code> ou <code>Rejetée</code> avant de pouvoir confirmer l'expédition comme Réceptionnée.
</div>

### 4. Confirmer Vérifiée

La vérification est l'étape finale. Vérifiez que toutes les informations sont correctes : numéros de lot et dates d'expiration, quantités et tailles de paquet, informations de tarification, et emplacements de stockage.

Une fois vérifiée :

- Le statut de l'expédition est défini à `Vérifiée`
- Les lignes de l'expédition ne peuvent plus être modifiées
- L'expédition ne peut pas être supprimée

## Permissions

Les Expéditions Entrantes Externes utilisent un ensemble de permissions distinct des Expéditions Entrantes régulières :

| Permission                          | Description                                                            |
| :---------------------------------- | :--------------------------------------------------------------------- |
| **Voir les marchandises reçues**    | Consulter les Expéditions Entrantes Externes                           |
| **Ajouter/modifier marchandises reçues** | Créer, modifier et supprimer des Expéditions Entrantes Externes   |
| **Autoriser les marchandises reçues** | Approuver ou rejeter des lignes (si l'autorisation est activée)      |
| **Finaliser les marchandises reçues** | Confirmer l'expédition comme Vérifiée                                |

Ces permissions peuvent être configurées pour chaque utilisateur dans le serveur central mSupply.

## Retourner du stock depuis une Expédition Entrante Externe

Vous pouvez retourner du stock reçu via une Expédition Entrante Externe en créant un [Retour fournisseur](/docs/replenishment/supplier-returns/). Le processus est le même que pour retourner du stock depuis une Expédition Entrante régulière :

1. Ouvrez l'Expédition Entrante Externe
2. Assurez-vous que le statut est au moins `Livrée`
3. Sélectionnez la ou les lignes à retourner
4. Cliquez sur `Retourner les lignes sélectionnées` dans la barre de pied de page
5. Suivez les instructions pour spécifier les quantités et les raisons

## Télécharger des documents

L'Expédition Entrante Externe inclut un onglet `Documents` où vous pouvez télécharger et gérer les documents liés (bons de livraison, documents de transport, relevés de température). Sélectionnez `Télécharger un document` en haut de l'écran et choisissez un fichier.

Vous pouvez télécharger ou supprimer des documents précédemment chargés en les sélectionnant dans la liste et en choisissant l'action appropriée dans la barre de pied de page.
