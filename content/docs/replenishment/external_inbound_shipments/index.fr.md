+++
title = "Livraisons Entrantes Externes"
description = "Réception du stock de fournisseurs externes via des Commandes d'Achat."
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

Les Livraisons Entrantes Externes sont utilisées pour recevoir du stock de fournisseurs externes. Elles sont généralement basées sur un [Commande d'Achat](/docs/replenishment/purchase-orders/), mais vous pouvez également créer une _Livraison Entrante_ manuelle pour demander du stock à un fournisseur externe de la même façon que pour un fournisseur interne. Pour les détails sur les livraisons entrantes non liées à une commande d'achat, consultez la page <a href="/docs/replenishment/inbound-shipments">Livraisons Entrantes</a>.

Lorsqu'une Livraison Entrante Externe est liée à une Commande d'Achat, elle offre des fonctionnalités supplémentaires pour le suivi des livraisons, la gestion des devises étrangères et l'autorisation optionnelle des lignes individuelles avant la réception des articles.

## Consulter les Livraisons Entrantes Externes

Les Livraisons Entrantes Externes apparaissent aux côtés des Livraisons Entrantes régulières dans la liste des Livraisons Entrantes.

### Identifier les Livraisons Entrantes Externes

Dans la liste des _Livraisons Entrantes_, vous pouvez distinguer les _Livraisons_ Entrantes Externes_ des autres types par l'icône affichée à côté du nom du fournisseur :

- Une **icône de camion** indique une Livraison Entrante Externe (depuis une Commande d'Achat ou un fournisseur externe)
- Une **icône de maison** indique une livraison interne (depuis un autre dépôt de votre système mSupply)

## Créer une nouvelle Livraison Entrante Externe

Pour créer une Livraison Entrante Externe, vous avez besoin d'une Commande d'Achat existant au statut `Envoyé`.

1. Allez dans `Réapprovisionnement` > `Livraison Entrante`
2. Cliquez sur la flèche déroulante à côté du bouton `Nouvelle Livraison`
3. Sélectionnez `Nouvelle Livraison Externe`

![Bouton Nouvelle Expédition Externe](images/eis_new_external_button.png)

### Sélectionner une Commande d'Achat

Une fenêtre apparaîtra affichant toutes les Commande d'Achat au statut `Envoyé`. La liste affiche :

| Colonne         | Description                              |
| :-------------- | :--------------------------------------- |
| **Fournisseur** | Nom du fournisseur                       |
| **Numéro**      | Numéro de la Commande d'Achat            |
| **Réf.**        | Votre référence pour la Commande d'Achat |
| **Commentaire** | Tout commentaire sur la Commande d'Achat |

Sélectionnez une Commande d'Achat dans la liste. Vous aurez alors deux options :

- **Ajouter avec toutes les lignes** : crée la Livraison Entrante Externe et la remplit automatiquement avec toutes les lignes de la Commande d'Achat. C'est l'option recommandée dans la plupart des cas.
- **Ajouter sans lignes** : crée une Livraison Entrante Externe vide liée à la Commande d'Achat. Vous pouvez ensuite ajouter des lignes manuellement.

Une fois créée, la livraison s'ouvrira dans la vue détaillée avec le nom du fournisseur affiché dans le coin supérieur gauche et un statut `Nouveau`.

<div class="note">
Vous avez besoin de la permission <code>Ajouter/modifier des marchandises reçues</code> pour créer des Livraisons Entrantes Externes.
</div>

## Vue Détaillée de la Livraison Entrante Externe

La vue détaillée d'une Livraison Entrante Externe comporte plusieurs onglets supplémentaires par rapport à une Livraison Entrante manuelle :

- **Détails** : la vue principale des lignes de la livraison
- **Financier** : informations de tarification ligne par ligne
- **Devise** : gestion des devises étrangères et des frais supplémentaires
- **Livraison** : suivi des livraisons par rapport à la Commande d'Achat
- **Documents** : téléchargement et gestion des documents liés
- **Journal d'activité** : historique des modifications

### Onglet Détails

L'onglet Détails affiche les lignes de la livraison. Pour les Livraisons Entrantes Externes, les lignes sont groupées par **numéro de ligne BC** plutôt que par code article. Cela permet de voir facilement à quelle ligne de la Commande d'Achat correspond chaque ligne de la livraison.

Les colonnes affichées incluent :

| Colonne                       | Description                                                       |
| :---------------------------- | :---------------------------------------------------------------- |
| **Ligne BC**                  | Le numéro de ligne de la Commande d'Achat liée                    |
| **Code**                      | Code de l'article                                                 |
| **Nom**                       | Nom de l'article                                                  |
| **Lot**                       | Numéro de lot                                                     |
| **Expiration**                | Date d'expiration du lot                                          |
| **Taille de conditionnement** | Nombre d'unités par conditionnement                               |
| **Conditionnements**          | Nombre de conditionnements reçus                                  |
| **Qté unitaire**              | Total d'unités reçues                                             |
| **Statut autor.**             | Statut d'autorisation de la ligne (si l'autorisation est activée) |

<div class="tip">
Vous pouvez modifier le groupement et afficher/masquer des colonnes en utilisant les options en haut à droite du tableau.
</div>

### Onglet Financier

L'onglet Financier fournit une vue détaillée de la tarification pour chaque ligne. Cet onglet est uniquement disponible pour les Livraisons Entrantes Externes.

Les colonnes incluent :

| Colonne                       | Description                                                          |
| :---------------------------- | :------------------------------------------------------------------- |
| **Nom de l'article**          | Nom de l'article                                                     |
| **Ligne BC**                  | Numéro de ligne de la Commande d'Achat                               |
| **Qté conditionnements**      | Nombre de conditionnements                                           |
| **Taille de conditionnement** | Unités par conditionnement                                           |
| **Unité**                     | Unité de mesure                                                      |
| **Prix BC**                   | Prix par conditionnement de la Commande d'Achat                      |
| **Prix de coût local**        | Prix de coût en devise locale (affiché si devise étrangère utilisée) |
| **Prix de vente**             | Prix de vente par conditionnement                                    |
| **Total ligne**               | Valeur totale de la ligne                                            |
| **Total ajusté**              | Total après ajustements                                              |

### Onglet Devise

L'onglet Devise vous permet de gérer les paramètres de devise étrangère et les frais supplémentaires pour l'expédition.

| Champ                     | Description                                                                 |
| :------------------------ | :-------------------------------------------------------------------------- |
| **Devise BC**             | La devise de la Commande d'Achat liée (lecture seule)                       |
| **Taux de change**        | Taux de change entre la devise BC et la devise locale                       |
| **Frais (devise BC)**     | Frais supplémentaires (ex. transport) dans la devise de la Commande d'Achat |
| **Frais (devise locale)** | Frais supplémentaires dans votre devise locale                              |

L'onglet affiche également un récapitulatif avec les valeurs totales et le pourcentage d'ajustement de coût appliqué aux lignes.

<div class="note">
Le taux de change peut être modifié si la devise BC diffère de votre devise locale.
</div>

### Onglet Livraison

L'onglet Livraison fournit un aperçu de la quantité livrée de chaque article de la Commande d'Achat, par cette livraison et les livraisons précédentes. Cela permet de suivre les quantités restantes.

| Colonne                    | Description                                       |
| :------------------------- | :------------------------------------------------ |
| **Nom de l'article**       | Nom de l'article                                  |
| **Livraisons précédentes** | Quantité livrée dans les livraisons précédentes   |
| **Cette livraison**        | Quantité sur cette livraison                      |
| **En transit**             | Quantité actuellement en transit                  |
| **Restant**                | Quantité encore à livrer                          |
| **Quantité BC**            | Quantité totale commandée sur la Commande d'Achat |

<div class="tip">
Les valeurs affichées dans l'onglet Livraison changent selon le statut de la livraison. Par exemple, une fois la livraison marquée comme Livrée, les quantités passent de « En transit » à « Cette livraison ».
</div>

### Panneau d'informations

Comme pour les Livraisons Entrantes manuelles, vous pouvez ouvrir le panneau d'informations en cliquant sur le bouton `Plus` dans le coin supérieur droit. Il donne accès à :

- **Informations supplémentaires** : créateur, couleur, commentaire
- **Documents liés** : liens vers la Commande d'Achat associée et d'autres transactions liées
- **Détails de la facture** : totaux des coûts et frais de service
- **Détails de transport** : numéros de réservation ou de suivi

## Séquence de statuts de l'Expédition Entrante Externe

| Statut       | Description                                                                   | Modifiable |
| :----------- | :---------------------------------------------------------------------------- | :--------: |
| **Nouvelle** | Statut initial lors de la création de la livraison                            |    Oui     |
| **Expédiée** | Les articles ont été expédiés et sont en transit                              |    Oui     |
| **Livrée**   | Vous avez confirmé que les articles sont arrivés dans votre dépôt             |    Oui     |
| **Reçue**    | Les articles ont été inspectés et intégrés à votre inventaire                 |    Oui     |
| **Vérifiée** | La vérification finale est terminée. L'expédition ne peut plus être modifiée. |    Non     |

<div class="note">
Vous pouvez sauter des statuts si nécessaire. Par exemple, vous pouvez passer directement de <code>Nouvelle</code> à <code>Livrée</code> si les articles arrivent avant que vous ayez eu le temps d'enregistrer la livraison comme expédiée.
</div>

### Transitions de statut

Le bouton `Confirmer` en bas à droite de l'écran vous permet d'avancer la livraison vers le statut suivant. Utilisez la flèche déroulante pour passer à un statut ultérieur.

| Confirmer...           | Statut actuel | Statut suivant |
| :--------------------- | :------------ | :------------- |
| **Confirmer Expédiée** | Nouvelle      | Expédiée       |
| **Confirmer Livrée**   | Expédiée      | Livrée         |
| **Confirmer Reçue**    | Livrée        | Reçue          |
| **Confirmer Vérifiée** | Reçue         | Vérifiée       |

<div class="note">
La confirmation <b>Vérifiée</b> nécessite la permission <code>Finaliser les marchandises reçues</code>.
</div>

### Case à cocher En attente

Située dans le coin inférieur gauche, la case `Bloquer` empêche l'expédition d'être mise à jour vers le statut suivant tant qu'elle est cochée.

## Ajouter des lignes à une Livraison Entrante Externe

### Lignes auto-remplies depuis une Commande d'Achat

Si vous avez sélectionné **Ajouter avec toutes les lignes** lors de la création de la livraison, les lignes seront automatiquement remplies depuis la Commande d'Achat avec les informations d'article, de quantité et de tarification.

### Ajouter des lignes manuellement

Vous pouvez également ajouter des lignes manuellement en cliquant sur le bouton `Ajouter un Article`. Le processus est le même que pour une [Livraison Entrante](/docs/replenishment/inbound-shipments/#ajouter-des-lignes-à-une-expédition-entrante) régulière, à l'exception que seuls les articles figurant sur la commande d'achat sont disponibles.

### Modifier une ligne

Pour modifier une ligne, cliquez dessus pour ouvrir la fenêtre de modification. Vous pouvez ajuster : le lot et la date d'expiration, la taille de paquet et les conditionnements reçus, la tarification, l'emplacement de stockage, et le statut d'autorisation (si activé).

### Supprimer des lignes

1. Sélectionnez les lignes en cochant la case à gauche de la liste
2. Cliquez sur `Supprimer` dans la barre de pied de page

<div class="note">
Les lignes ne peuvent être supprimées que si le statut de la livraison est inférieur à <code>Vérifiée</code>.
</div>

### Autres actions sur les lignes

| Action                                 | Description                                                                 |
| :------------------------------------- | :-------------------------------------------------------------------------- |
| **Supprimer**                          | Supprime les lignes sélectionnées                                           |
| **Modifier Campagne/Programme**        | Associe les lignes sélectionnées à une campagne ou un programme             |
| **Définir les quantités à 0**          | Définit les quantités de paquets à zéro pour les lignes sélectionnées       |
| **Retourner les lignes sélectionnées** | Crée un retour fournisseur pour les lignes sélectionnées                    |
| **Approuver**                          | Définit le statut d'autorisation à Approuvé (si l'autorisation est activée) |
| **Rejeter**                            | Définit le statut d'autorisation à Rejeté (si l'autorisation est activée)   |
| **En attente**                         | Remet le statut d'autorisation à En attente (si l'autorisation est activée) |

## Autorisation des lignes

Les Livraisons Entrantes Externes prennent en charge un flux de travail optionnel d'autorisation au niveau des lignes. Lorsqu'il est activé, les lignes individuelles doivent être approuvées ou rejetées avant que la livraison puisse être reçue.

### Activer l'autorisation des lignes

L'autorisation des lignes est contrôlée par la préférence de dépôt **Les lignes de livraison entrante externe doivent être autorisées**. Elle peut être activée dans [Gérer > Dépôts](/docs/manage/facilities/#editing-store-preferences).

Lorsque cette préférence est activée :

- Les lignes ajoutées depuis une Commande d'Achat démarreront avec un statut d'autorisation `En attente`
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

Lorsque l'autorisation des lignes est activée, la livraison **ne peut pas être confirmée comme Reçue ou Vérifiée** tant que des lignes sont encore en statut `En attente`. Toutes les lignes doivent être soit Approuvées soit Rejetées avant que la livraison puisse progresser.

## Recevoir du stock avec une Livraison Entrante Externe

### 1. Confirmer Expédiée (optionnel)

Si vous savez que les articles ont été expédiés, vous pouvez confirmer la livraison comme `Expédiée`. C'est optionnel — vous pouvez passer directement à Livrée.

### 2. Confirmer Livrée

Confirmez que les articles sont physiquement arrivés dans votre dépôt en cliquant sur `Confirmer Livrée`.

<div class="note">
Les lignes non allouées avec 0 paquet seront automatiquement supprimées lors de la confirmation de livraison.
</div>

### 3. Confirmer Reçue

Après inspection des articles, confirmez la livraison comme `Reçue`. À ce stade :

- Les articles de la livraison sont ajoutés à votre stock en dépôt
- Les articles sont disponibles pour la distribution

<div class="note">
Si l'autorisation des lignes est activée, toutes les lignes doivent être en statut <code>Approuvée</code> ou <code>Rejetée</code> avant de pouvoir confirmer la livraison comme Reçue.
</div>

### 4. Confirmer Vérifiée

La vérification est l'étape finale. Vérifiez que toutes les informations sont correctes : numéros de lot et dates d'expiration, quantités et tailles de paquet, informations de tarification, et emplacements de stockage.

Une fois vérifiée :

- Le statut de la livraison est défini à `Vérifiée`
- Les lignes de la livraison ne peuvent plus être modifiées
- La livraison ne peut pas être supprimée

## Permissions

Les Livraisons Entrantes Externes utilisent un ensemble de permissions distinct des Livraisons Entrantes régulières :

| Permission                               | Description                                                     |
| :--------------------------------------- | :-------------------------------------------------------------- |
| **Voir les marchandises reçues**         | Consulter les Livraisons Entrantes Externes                     |
| **Ajouter/modifier marchandises reçues** | Créer, modifier et supprimer des Livraisons Entrantes Externes  |
| **Autoriser les marchandises reçues**    | Approuver ou rejeter des lignes (si l'autorisation est activée) |
| **Finaliser les marchandises reçues**    | Confirmer la livraison comme Vérifiée                           |

Ces permissions peuvent être configurées pour chaque utilisateur dans le serveur central mSupply.

## Retourner du stock depuis une Livraison Entrante Externe

Vous pouvez retourner du stock reçu via une Livraison Entrante Externe en créant un [Retour fournisseur](/docs/replenishment/supplier-returns/). Le processus est le même que pour retourner du stock depuis une Livraison Entrante régulière :

1. Ouvrez la Livraison Entrante Externe
2. Assurez-vous que le statut est au moins `Livrée`
3. Sélectionnez la ou les lignes à retourner
4. Cliquez sur `Retourner les lignes sélectionnées` dans la barre de pied de page
5. Suivez les instructions pour spécifier les quantités et les raisons

## Télécharger des documents

La Livraison Entrante Externe inclut un onglet `Documents` où vous pouvez télécharger et gérer les documents liés (bons de livraison, documents de transport, relevés de température). Sélectionnez `Télécharger un document` en haut de l'écran et choisissez un fichier.

Vous pouvez télécharger ou supprimer des documents précédemment chargés en les sélectionnant dans la liste et en choisissant l'action appropriée dans la barre de pied de page.
