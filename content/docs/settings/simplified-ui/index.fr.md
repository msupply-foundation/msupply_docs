+++
title = "Interface tablette simplifiée"
description = "Utiliser l'interface simplifiée pour les appareils tablette"
date = 2026-03-30
updated = 2026-03-30
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

L'interface utilisateur (UI) tablette simplifiée offre une interface allégée conçue pour être utilisée sur des tablettes dans les dépôts de niveau inférieur ou de dernier kilomètre. Elle réduit le nombre de colonnes et d'éléments affichés à l'écran, facilitant l'interaction avec l'application via le toucher.

Lorsqu'elle est activée, l'UI simplifiée :

- Supprime les colonnes non essentielles aux opérations quotidiennes des dépôts de niveau inférieur
- Améliore la convivialité tactile de l'interface
- Remplace les boutons de statut multi-étapes par des boutons à action unique (ex. `Finaliser` ou `Vérifier`)
- Réduit la navigation gauche par défaut pour maximiser l'espace à l'écran

<div class="note">
L'UI simplifiée ne supprime aucune fonctionnalité essentielle. Tous les flux de travail principaux pour commander, recevoir et distribuer du stock restent disponibles.
</div>

## Activer l'interface tablette simplifiée

L'UI simplifiée est activée en tant que préférence de dépôt. Pour l'activer :

1. Sur le serveur central, allez dans la section `Options` dans la partie inférieure du panneau de navigation, puis `Dépôts`
2. Accédez aux préférences du dépôt que vous souhaitez configurer (voir [Dépôts](/docs/manage/facilities/) pour plus de détails)
3. Activez la préférence **Utiliser l'interface mobile simplifiée**
4. Vous pouvez également y accéder en modifiant directement les préférences du dépôt auquel vous êtes **actuellement connecté** dans `Modifier` puis `Préférences`

De plus :

4. La préférence de dépôt `configurer l'emballage en unité` doit être activée (voir la [configuration des dépôts virtuels](https://docs.msupply.org.nz/other_stuff:virtual_stores?s%5B%5D=pack&s%5B%5D=one#preferences_tab) mSupply)
5. Vous devez utiliser une tablette ou un autre appareil avec un petit écran

Une fois activée, les utilisateurs accédant à ce dépôt verront l'interface simplifiée.

<div class="tip">
Il s'agit d'un paramètre par dépôt, vous pouvez donc l'activer pour des dépôts spécifiques (ex. centres de santé utilisant des tablettes) tout en conservant l'interface desktop complète pour les dépôts de niveau entrepôt.
</div>

## Ce qui change dans l'UI simplifiée

Les sections ci-dessous décrivent les différences entre les vues desktop et tablette simplifiée pour chaque partie de l'application.

### Commandes Internes

#### Liste des Commandes Internes

La vue liste affiche un ensemble réduit de colonnes :

| Colonne                   | Desktop | Tablette |
| :------------------------ | :-----: | :------: |
| **Sélection (case)**      |    ✓    |    ✓     |
| **Nom du fournisseur**    |    ✓    |    ✓     |
| **Numéro**                |    ✓    |    ✓     |
| **Nombre d'articles**     |         |    ✓     |
| **Créée**                 |    ✓    |    ✓     |
| **Programme**             |    ✓    |          |
| **Type de commande**      |    ✓    |          |
| **Période**               |    ✓    |          |
| **Statut**                |    ✓    |    ✓     |
| **Commentaire**           |    ✓    |          |

Sur tablette, le bouton **Exporter** et les **Filtres** (par nom ou statut) ne sont pas affichés. Le bouton **Nouvelle commande** est disponible sur les deux vues.

#### Créer / Modifier une Commande Interne

Lors de la création ou de la modification d'une commande interne, les colonnes suivantes sont disponibles :

| Colonne                                  | Desktop | Tablette |
| :--------------------------------------- | :-----: | :------: |
| **Sélection (case)**                     |    ✓    |    ✓     |
| **Code**                                 |    ✓    |    ✓     |
| **Nom**                                  |    ✓    |    ✓     |
| **Unité**                                |    ✓    |          |
| **Taille de conditionnement par défaut** |    ✓    |          |
| **Stock utilisable**                     |    ✓    |    ✓     |
| **CMM**                                  |    ✓    |    ✓     |
| **Stock cible**                          |    ✓    |          |
| **Quantité suggérée**                    |    ✓    |    ✓     |
| **Quantité Demandée**                    |    ✓    |    ✓     |

Différences de fonctionnalités clés pour la vue détaillée :

| Fonctionnalité                                | Desktop | Tablette |
| :-------------------------------------------- | :-----: | :------: |
| **Ajouter un article**                        |    ✓    |    ✓     |
| **Ajouter depuis une liste maîtresse**        |    ✓    |    ✓     |
| **Utiliser les quantités suggérées**          |    ✓    |    ✓     |
| **Créer une commande automatique**            |         |    ✓     |
| **Imprimer**                                  |    ✓    |    ✓     |
| **Nom du fournisseur**                        |    ✓    |    ✓     |
| **Référence**                                 |    ✓    |    ✓     |
| **Masquer le stock au-dessus du minimum**     |    ✓    |    ✓     |
| **Filtrer les articles**                      |    ✓    |    ✓     |
| **Changement de statut** (Confirmer envoyée / finalisée) | ✓ |    |
| **Bouton Finaliser**                          |         |    ✓     |
| **Panneau Plus d'infos**                      |    ✓    |    ✓     |

Sur tablette, le menu déroulant de changement de statut est remplacé par un seul bouton **Finaliser**, facilitant la complétion des commandes en un seul appui.

Le **Panneau Plus d'infos** est disponible sur les deux vues et inclut : Seuil de réapprovisionnement, MDS cible, Saisi par, Date de création, Couleur, Documents liés, Commentaire et Supprimer (pour les commandes en brouillon uniquement).

---

### Livraisons Entrantes

#### Liste des Livraisons Entrantes

| Colonne                   | Desktop | Tablette |
| :------------------------ | :-----: | :------: |
| **Sélection (case)**      |    ✓    |    ✓     |
| **Nom**                   |    ✓    |          |
| **Statut**                |    ✓    |    ✓     |
| **Numéro de facture**     |    ✓    |    ✓     |
| **Créée**                 |    ✓    |    ✓     |
| **Livrée**                |    ✓    |          |
| **Commentaire**           |    ✓    |    ✓     |
| **Référence**             |    ✓    |          |
| **Total**                 |    ✓    |          |

Sur tablette, un champ **Recherche** est disponible à la place des contrôles de filtre desktop. Le bouton **Nouvelle livraison** est disponible sur les deux vues.

#### Créer / Modifier une Livraison Entrante

| Colonne                        | Desktop | Tablette |
| :----------------------------- | :-----: | :------: |
| **Sélection (case)**           |    ✓    |    ✓     |
| **Code**                       |    ✓    |    ✓     |
| **Nom**                        |    ✓    |    ✓     |
| **Lot**                        |    ✓    |    ✓     |
| **Expiration**                 |    ✓    |    ✓     |
| **Emplacement**                |    ✓    |          |
| **Unité**                      |    ✓    |          |
| **Taille de conditionnement**  |    ✓    |          |
| **Nombre de conditionnements** |    ✓    |    ✓     |
| **Quantité unités**            |    ✓    |          |
| **Coût par unité**             |    ✓    |          |
| **Total**                      |    ✓    |          |

Différences de fonctionnalités clés :

| Fonctionnalité                                                    | Desktop | Tablette |
| :---------------------------------------------------------------- | :-----: | :------: |
| **Ajouter un article**                                            |    ✓    |    ✓     |
| **Imprimer**                                                      |    ✓    |    ✓     |
| **Fournisseur**                                                   |    ✓    |    ✓     |
| **Référence**                                                     |    ✓    |    ✓     |
| **Grouper par article**                                           |    ✓    |          |
| **Changement de statut** (prélevée / expédiée / livrée / vérifiée) |    ✓    |         |
| **Bouton Vérifier**                                               |         |    ✓     |

Sur tablette, le changement de statut multi-étapes est remplacé par un seul bouton **Vérifier**.

Le **Panneau Plus d'infos** est disponible sur les deux vues et inclut : Saisi par, Date de création, Couleur, Commentaire, Documents liés, Frais et Supprimer.

#### Fenêtre de modification de ligne entrante

Lors de la modification d'une ligne sur tablette, la fenêtre affiche un ensemble simplifié de colonnes :

| Colonne                           | Desktop | Tablette |
| :-------------------------------- | :-----: | :------: |
| **Sélection (case)**              |    ✓    |    ✓     |
| **Lot**                           |    ✓    |    ✓     |
| **Expiration**                    |    ✓    |    ✓     |
| **Variante d'article**            |    ✓    |    ✓     |
| **Nombre de conditionnements**    |    ✓    |    ✓     |
| **Taille de conditionnement**     |    ✓    |          |
| **Quantité unités**               |    ✓    |          |
| **Coût par conditionnement**      |    ✓    |          |
| **Prix de vente conditionnement** |    ✓    |          |
| **Total ligne**                   |    ✓    |          |
| **Emplacement**                   |    ✓    |          |

---

### Livraisons Sortantes

#### Liste des Livraisons Sortantes

| Colonne                   | Desktop | Tablette |
| :------------------------ | :-----: | :------: |
| **Sélection (case)**      |    ✓    |    ✓     |
| **Nom** (client)          |    ✓    |          |
| **Statut**                |    ✓    |    ✓     |
| **Numéro de facture**     |    ✓    |    ✓     |
| **Créée**                 |    ✓    |    ✓     |
| **Référence**             |    ✓    |          |
| **Commentaire**           |    ✓    |    ✓     |
| **Total**                 |    ✓    |          |

Sur tablette, des filtres sont disponibles (par nom ou statut). Le bouton **Nouvelle Livraison** est disponible sur les deux vues. L'option **Grouper par article** est disponible uniquement sur desktop ; sur tablette, les lignes de lot sont affichées par défaut.

#### Créer / Modifier une Livraisons Sortante

| Colonne                        | Desktop | Tablette |
| :----------------------------- | :-----: | :------: |
| **Sélection (case)**           |    ✓    |    ✓     |
| **Code**                       |    ✓    |    ✓     |
| **Nom**                        |    ✓    |    ✓     |
| **Lot**                        |    ✓    |          |
| **Expiration**                 |    ✓    |          |
| **Emplacement**                |    ✓    |          |
| **Unité**                      |    ✓    |          |
| **Taille de conditionnement**  |    ✓    |          |
| **Nombre de conditionnements** |    ✓    |    ✓     |
| **Quantité unités**            |    ✓    |          |
| **Prix de vente unité**        |    ✓    |          |
| **Total**                      |    ✓    |          |

Différences de fonctionnalités clés :

| Fonctionnalité                                                                       | Desktop | Tablette |
| :----------------------------------------------------------------------------------- | :-----: | :------: |
| **Ajouter un article**                                                               |    ✓    |    ✓     |
| **Ajouter depuis une liste maîtresse**                                               |    ✓    |    ✓     |
| **Imprimer**                                                                         |    ✓    |    ✓     |
| **Changement de statut** (allouée / prélevée / expédiée / livrée / vérifiée)        |    ✓    |          |
| **Bouton Vérifier**                                                                  |         |    ✓     |
| **Panneau Plus d'infos**                                                             |    ✓    |    ✓     |

Le **Panneau Plus d'infos** inclut : Saisi par, Date de création, Couleur, Commentaire, Documents liés, Détails de la facture (coût / taxe / frais de service), Détails de transport et Supprimer.

#### Modification de ligne sortante

Sur tablette, la fenêtre de modification de ligne est simplifiée. Elle affiche :

- Un champ de saisie pour le nombre de paquets ou d'unités à émettre
- Un menu de sélection pour la taille de paquet préférée

Le tableau de sélection des lots est réduit à :

| Colonne                             | Desktop | Tablette |
| :---------------------------------- | :-----: | :------: |
| **Lot**                             |    ✓    |          |
| **Expiration**                      |    ✓    |          |
| **Emplacement**                     |    ✓    |          |
| **Prix de vente conditionnement**   |    ✓    |          |
| **Taille de conditionnement**       |    ✓    |          |
| **En dépôt (conditionnements)**     |    ✓    |          |
| **Disponible (conditionnements)**   |    ✓    |    ✓     |
| **Nombre de conditionnements émis** |    ✓    |    ✓     |
| **Quantité unités émise**           |    ✓    |          |
| **En attente**                      |    ✓    |          |

---

### Inventaires

#### Liste des Inventaires

| Colonne                   | Desktop | Tablette |
| :------------------------ | :-----: | :------: |
| **Sélection (case)**      |    ✓    |    ✓     |
| **Numéro**                |    ✓    |          |
| **Statut**                |    ✓    |    ✓     |
| **Description**           |    ✓    |    ✓     |
| **Créé**                  |    ✓    |    ✓     |
| **Date**                  |    ✓    |          |

Le bouton **Nouvel inventaire** est disponible sur les deux vues. Le bouton **Exporter** et le **Filtre par statut** sont réservés au desktop.

#### Modifier un Inventaire

| Colonne                                  | Desktop | Tablette |
| :--------------------------------------- | :-----: | :------: |
| **Sélection (case)**                     |    ✓    |    ✓     |
| **Code**                                 |    ✓    |    ✓     |
| **Nom**                                  |    ✓    |    ✓     |
| **Lot**                                  |    ✓    |          |
| **Expiration**                           |    ✓    |          |
| **Emplacement**                          |    ✓    |          |
| **Unité**                                |    ✓    |          |
| **Taille de Conditionnement**            |    ✓    |          |
| **Nombre de conditionnements théorique** |    ✓    |    ✓     |
| **Nombre de conditionnements comptés**   |    ✓    |    ✓     |
| **Différence**                           |    ✓    |    ✓     |
| **Raison**                               |    ✓    |    ✓     |

Fonctionnalités disponibles sur les deux vues : Ajouter un article, Imprimer, Bouton Plus, Description, Date d'inventaire. L'option **Filtrer les articles** est réservée au desktop.

Le **Panneau Plus d'infos** inclut Commentaire et Supprimer sur les deux vues.

#### Fenêtre de modification de ligne d'inventaire

Lors de la modification d'une ligne d'inventaire, la fenêtre affiche :

| Colonne                                  | Desktop | Tablette |
| :--------------------------------------- | :-----: | :------: |
| **Compter cette ligne (case)**           |    ✓    |    ✓     |
| **Lot**                                  |    ✓    |    ✓     |
| **Variante d'article**                   |    ✓    |    ✓     |
| **Taille de conditionnement**            |    ✓    |          |
| **Nombre de conditionnements théorique** |    ✓    |    ✓     |
| **Nombre de conditionnements comptés**   |    ✓    |    ✓     |
| **Expiration**                           |    ✓    |    ✓     |
| **Raison**                               |    ✓    |    ✓     |
| **Prix de vente**                        |    ✓    |          |
| **Coût**                                 |    ✓    |          |
| **Emplacement**                          |    ✓    |          |
| **Commentaire**                          |    ✓    |          |

---

### Consulter le Stock

#### Liste du Stock

| Colonne                        | Desktop | Tablette |
| :----------------------------- | :-----: | :------: |
| **Code**                       |    ✓    |    ✓     |
| **Nom**                        |    ✓    |    ✓     |
| **Lot**                        |    ✓    |          |
| **Expiration**                 |    ✓    |          |
| **Emplacement**                |    ✓    |          |
| **Unité**                      |    ✓    |          |
| **Taille de conditionnement**  |    ✓    |          |
| **Nombre de conditionnements** |    ✓    |    ✓     |
| **Stock en dépôt**             |    ✓    |          |
| **Coût conditionement**        |    ✓    |          |
| **Total**                      |    ✓    |          |
| **Fournisseur**                |    ✓    |          |

Le bouton **Nouveau stock** et les **Filtres** (par code/nom, emplacement, liste maîtresse, expiration) sont disponibles sur les deux vues. Le bouton **Exporter** est réservé au desktop.

#### Consulter un article en stock

Lors de la consultation d'un article de stock individuel, tous les champs de détail sont affichés sur desktop et tablette :

- Quantité paquets, Coût, Prix de vente, Expiration, Lot, Taille de conditionnement, En attente, Emplacement, Code-barres, Fournisseur

Les onglets **Journal** et **Grand Livre** sont réservés au desktop.

## Conseils pour utiliser l'interface tablette

- **Navigation** : Le menu de navigation gauche est réduit par défaut. Appuyez sur l'icône du menu pour le développer lorsque vous devez naviguer entre les sections.
- **Tri** : Vous pouvez toujours trier les listes en appuyant sur les en-têtes de colonnes, comme sur le desktop.
- **Défilement** : Glissez vers le haut et le bas pour faire défiler les listes. Si un tableau a plus de colonnes que ne peut en afficher l'écran, glissez vers la gauche et la droite pour voir les colonnes supplémentaires.
- **Commentaires** : Dans les vues liste, les commentaires sont affichés sous forme d'icône. Appuyez sur l'icône pour voir le texte complet du commentaire.
