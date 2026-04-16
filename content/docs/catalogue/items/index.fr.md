+++
title = "Articles"
description = "Consulter les articles."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 52
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Gérer votre catalogue"
toc = true
top = false
+++

Un article dans Open mSupply est généralement un produit que vous achetez auprès d'un fournisseur, que vous gardez en stock et que vous fournissez à un client.
Depuis le menu **Articles**, vous pouvez voir tous les articles qui sont actuellement visibles dans votre dépôt. La visibilité des articles est contrôlée par les listes maîtresses dans Open mSupply. L'article doit figurer sur une liste visible dans votre dépôt pour être visible.

## Visualiser la liste des articles

Dans le panneau de navigation, appuyez sur `Catalogue` > `Articles` pour afficher la liste des articles :

![Navigation articles](images-en/cat_gotoitems.png)

Vous pouvez voir tous les articles qui sont disponibles pour utilisation par votre dépôt :

La liste des articles est divisée en 6 colonnes :

| Colonne           | Description                                                                                                                                                     |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code**          | Code assigné à cet article dans mSupply                                                                                                                         |
| **Nom**           | C'est le nom par lequel mSupply fera référence à l'article                                                                                                      |
| **Unité**         | L'unité de mesure pour l'article                                                                                                                                |
| **Stock total**   | Combien de stock est physiquement dans votre dépôt                                                                                                              |
| **CMM**           | Consommation Mensuelle Moyenne. C'est combien de stock votre dépôt utilise chaque mois en moyenne (basé sur un nombre configurable de mois, par défaut 3 mois). |
| **Mois de stock** | Nombre de mois de consommation restant avec le stock actuel. Ceci est calculé comme : `Stock total en Dépôt / CMM`.                                             |

![Liste des articles](images-en/cat_itemslist.png)

## Visualiser les détails d'un article

Pour voir les détails d'un article, appuyez simplement dessus. Une nouvelle fenêtre s'ouvre :

![Détail de l'article](images-en/cat_itemdetail.png)

En haut de l'écran, vous pouvez voir les informations suivantes :

- **Stock présent dans le Dépôt** : Combien de stock est actuellement dans votre dépôt
- **CMM** : Consommation Mensuelle Moyenne. C'est combien de stock votre dépôt utilise chaque mois en moyenne (basé sur un nombre configurable de mois, par défaut 3 mois).
- **Mois de Stock** : Nombre de mois de consommation restant avec le stock actuel. Ceci est calculé comme : `Stock en Dépôt / CMM`.

<div class="imagetitle">
Dans l'exemple ci-dessous, nous avons 20 219 unités d'Acide Acétylsalicylique disponibles dans notre dépôt. La consommation moyenne est de 3 443,67 unités par mois ce qui signifie qu'il y a l'équivalent de 5,87 mois de stock dans l'inventaire.
</div>

![En-têtes détails article](images-en/cat_itemdetailsheaders.png)

Il y a plusieurs onglets dans la partie inférieure de l'écran :

### Général

L'onglet général inclut les informations de base sur l'article, notamment :

**Détails**

- **Nom** : C'est le nom par lequel mSupply fera référence à l'article
- **Code** : Ceci doit être unique pour chaque article et est un raccourci utile pour faire référence aux articles
- **Unité** : L'unité que vous utilisez pour cet article. Il est utile de distinguer les articles que vous émettez par paquet (ex. gouttes pour les yeux) des articles que vous émettez par volume (ex. liquides oraux)
- **Concentration** : Pour un médicament, la concentration de ses ingrédients actifs (ex. pour Amoxilline 250mg, la concentration est 250mg)
- **Dose Quotidienne Définie** : La dose de maintenance moyenne supposée par jour pour un médicament utilisé pour son indication principale chez les adultes
- **Type** : Le type d'article (ex. Stock ou Service)
- **Doses** : Pour les vaccins, le nombre de doses par flacon
- **Vaccin** (case à cocher) : Si ceci est coché, cet article est un vaccin et un nombre de doses peut être assigné

**Catégories**

- **Catégorie ATC** : ATC signifie Anatomique, Thérapeutique, Chimique et est une méthode de classification des entités, et de les identifier par catégorie
- **Nom Universel** : si l'article est lié à la [base de données universelle de codes de médicaments](https://codes.msupply.foundation/), ceci montre le nom universel, ou générique pour l'article donné
- **Code Universel** : de même, le code alloué à l'article de code de médicament universel

**Stockage**

- **Type d'emplacement** : Le type d'emplacement auquel cet article est restreint. Utilisé pour les articles devant être stockés dans un type d'emplacement spécifique, tel que le stockage à froid.

**Emballage**

- **Taille de conditionnement par défaut** : C'est la taille de conditionnement par défaut qui sera assignée au stock entrant lors de sa réception
- **Taille de conditionnement externe** : Le nombre d'unités dans un carton (conditionnement externe). Pas le nombre de conditionnements de taille préférée dans un carton.
- **Volume par conditionnement** : Le volume par défaut par conditionnement de taille préférée. C'est le volume qui sera utilisé par défaut lors de la réception des marchandises. Nous recommandons de diviser le volume d'un carton par le nombre de conditionnements de taille préférée dans un carton pour obtenir ce chiffre. Open mSupply stocke toujours les volumes en m3 (mètres cubes), mais vous pouvez entrer un volume en millilitres (ml) ou litres (l) en entrant l'abréviation appropriée après le nombre représentant le volume. ex. entrez "0.5l" pour entrer un volume de 0,5 litres (= 0,0005m3).
- **Volume par conditionnement externe** : Le volume par défaut d'un paquet de taille de conditionnement externe de cet article
- **Poids** : Le poids d'un conditionnement de taille préférée en kg

**Tarification**

- **Marge** : C'est la marge par défaut qui sera appliquée à cet article sur les Livraisons Entrantes pour calculer le prix de vente

### Dépôt

L'onglet Dépôt affiche les configurations spécifiques à votre dépôt actuel pour cet article.

![Onglet dépôt détail article](images-en/item_store_properties.png)

- **Prix de vente par défaut** : C'est le prix de vente par défaut à définir sur un nouveau stock à son arrivée dans votre dépôt. Ce paramètre est prioritaire sur la `Marge par défaut` si les deux sont définis.

### Listes Maîtresses

Cet onglet liste les Listes Maîtresses associées à cet article.
![En-têtes détails article](images-en/cat_itemmasterlists.png)

### Grand Livre

L'onglet grand livre de l'article montre un historique des transactions dans ce dépôt pour l'article.

![Registre des mouvements de stock pour Ibuprofène 200mg comprimés](images-en/item_ledger.png)

Le grand livre est divisé en 16 colonnes :

| Colonne                       | Description                                                   |
| :---------------------------- | :------------------------------------------------------------ |
| **Type**                      | Le type de la transaction                                     |
| **Date**                      | La date à laquelle la transaction a été confirmée             |
| **Heure**                     | L'heure à laquelle la transaction a été confirmée             |
| **Numéro de facture**         | Le numéro de facture (expédition) de la transaction           |
| **Nom**                       | Le nom du client ou fournisseur                               |
| **Statut**                    | Le statut de la transaction                                   |
| **Expiration**                | La date d'expiration de la ligne de stock                     |
| **Lot**                       | Le numéro de lot de la ligne de stock                         |
| **Taille de conditionnement** | La taille du conditionnement                                  |
| **Nombre de paquets**         | Le nombre de conditionnements dans la transaction             |
| **Qté unitaire**              | La quantité qui a été assignée à la transaction en unités     |
| **Solde**                     | Le solde de la ligne de stock                                 |
| **Coût paquet**               | Le coût du conditionnement                                    |
| **Prix de vente paquet**      | Le prix de vente du conditionnement                           |
| **Total avant taxe**          | Le coût total de la transaction avant taxe (en devise locale) |
| **Raison**                    | La raison de l'ajustement (si requis)                         |

### Filtrer le grand livre par transactions

Vous pouvez filtrer les grands livres par la transaction : Type, Statut ou Plage de dates. Ceci est utile quand vous devez réviser un ensemble spécifique de transactions qui répondent à certains critères !

![Filtre article](images-en/ledger_filter.png)

Sélectionnez un ou plusieurs filtres pour affiner les résultats. La liste se mettra à jour pour montrer toutes les transactions du grand livre qui correspondent aux critères sélectionnés.

## Variantes d'Articles

Sur le [Serveur Central Open mSupply](../../getting_started/central-server/), un onglet Variantes d'Articles est disponible. Cet onglet vous permet de configurer des variations de l'article, telles que différents fabricants ou tailles de conditionnement.

![onglet variantes](images-en/variants_tab.png)

### Ajouter une Variante d'Article

Pour créer une nouvelle Variante d'Article, cliquez sur le bouton `Ajouter une Variante` dans le coin supérieur droit.

![bouton ajouter variante](images-en/add_variant_button.png)

Cela ouvrira une nouvelle fenêtre, où vous pouvez entrer un nom pour la variante, et ses détails :

![fenêtre ajouter variante](images-en/add_item_variant_modal.png)

Les options de température sont configurées comme [Types d'Emplacement](https://docs.msupply.org.nz/items:item_locations?s[]=location&s[]=type#location_types) sur le Serveur Central mSupply. Les [Fabricants](https://docs.msupply.org.nz/names:adding_and_editing?s[]=manufacturers#adding_a_customer_supplier_manufacturer_donor_or_benchmark) sont également gérés dans mSupply.

**conditionnement**

Différents établissements travaillent à différents niveaux de conditionnement, ex. un entrepôt peut travailler en cartons, tandis qu'une clinique travaille en boîtes ou unités individuelles. Dans la section Conditionnement, vous pouvez définir la taille du conditionnement (unités par conditionnement) et le volume du conditionnement pour les différents niveaux de conditionnement d'une variante d'article.

Lors de l'introduction d'une nouvelle ligne de stock, les utilisateurs sélectionneront la Variante d'Article appropriée (ex. selon le fabricant) via le panneau de sélection de Variante d'Article. Ce panneau affiche les variantes sous forme de cartes cliquables indiquant le nom de la variante, le fabricant et le type de VVM (pour les vaccins). Une option `Saisie manuelle` est également disponible si vous devez saisir des informations ne correspondant pas à une variante existante. Si vous avez configuré un niveau d'emballage pour cette variante, avec une taille de conditionnement correspondant à celle de la ligne de stock, Open mSupply définira automatiquement le `Volume par conditionnement` de la ligne de stock, sur la base du `Volume par unité` défini ici.

Le panneau de sélection de Variante d'Article est disponible lors de l'ajout ou de la modification de lignes dans les Livraisons Entrantes, lors de l'ajout de stock et dans les modifications de lignes d'inventaire.

### Modifier une Variante d'Article

Pour modifier une Variante d'Article, cliquez sur le bouton `Modifier` à côté de la variante que vous souhaitez mettre à jour.

![bouton modifier variante](images-en/item_variant_edit_button.png)

Cela ouvrira la même fenêtre que lors de l'ajout d'une nouvelle variante, avec les détails existants pré-remplis. Faites les changements nécessaires, et cliquez sur `OK` pour mettre à jour la variante.

![fenêtre modifier variante](images-en/edit_item_variant_modal.png)

### Supprimer une Variante d'Article

Pour supprimer une Variante d'Article, cliquez sur le bouton `Supprimer` à côté de la variante que vous souhaitez retirer.

![bouton supprimer variante](images-en/item_variant_delete_button.png)

Il vous sera demandé de confirmer la suppression. Cliquez sur `OK` pour confirmer, ou `Annuler` si vous ne souhaitez plus supprimer la variante.

<p align="center">
    <img src="images-en/item_variant_confirm_delete.png" width="450">
</p>

### Regroupement d'articles

Vous pouvez également ajouter des articles groupés à chaque Variante d'Article. Ce sont d'autres articles qui sont toujours émis avec cet article, donc les calculs GAPS devraient considérer le stockage requis pour tous les articles du groupe.

<div class="note">
  Les articles groupés ne sont pas implémentés dans les flux de travail de dispensation dans Open mSupply. Vous devez encore dispenser chaque article du groupe séparément.
</div>

Le regroupement se fait au niveau de la Variante d'Article, vous donnant un contrôle fin sur quelles variantes devraient être regroupées ensemble. Par exemple, un vaccin peut seulement pouvoir être regroupé avec un diluant spécifique du même fabricant.

**Ajouter des articles groupés**

Pour regrouper un article avec la variante actuelle, cliquez sur le bouton `Ajouter un article groupé` sous la section `Grouper avec`.

<p align="center">
    <img src="images-en/add_bundled_item.png" width="300">
</p>

Cela ouvrira une nouvelle fenêtre, où vous pouvez rechercher l'article que vous souhaitez regrouper avec la variante actuelle.

<p align="center">
    <img src="images-en/add_bundled_item_select_item.png" width="700">
</p>

Après avoir sélectionné l'article, il vous sera demandé de sélectionner la variante spécifique de cet article, ainsi que le ratio auquel il devrait être regroupé.

<div class="imagetitle">
Dans cet exemple, 0,2 unités de Silverfern saline 0,22% devraient être regroupées avec chaque 1 unité de Qdenga.
</div>

<p align="center">
    <img src="images-en/add_bundled_item_modal.png" width="700">
</p>

Cliquez sur OK pour ajouter l'article groupé. Il apparaîtra alors dans la section `Grouper avec`.

![variante d'article avec article groupé](images-en/item_variant_with_bundled_item.png)

**Modifier des articles groupés**

Pour modifier un article groupé, cliquez sur la ligne dans la section `Grouper avec`. Cela ouvrira la même fenêtre que lors de l'ajout d'un nouvel article groupé, avec les détails existants pré-remplis. Faites les changements nécessaires, et cliquez sur `OK` pour mettre à jour le groupe.

<p align="center">
    <img src="images-en/add_bundled_item_modal.png" width="700">
</p>

**Retirer des articles groupés**

Pour retirer un article groupé, cliquez sur l'icône Supprimer à côté de l'article que vous souhaitez retirer.

![bouton retirer article groupé](images-en/remove_bundled_item.png)

Il vous sera demandé de confirmer le retrait de l'article groupé. Cliquez sur `OK` pour confirmer, ou `Annuler` si vous ne souhaitez plus le retirer.

<p align="center">
    <img src="images-en/confirm_remove_from_bundle.png" width="450">
</p>

**Variantes d'articles qui font partie de groupes**

Vous n'êtes pas en mesure de regrouper des articles pour une variante d'article qui fait déjà partie d'un autre groupe.

Le bouton `Ajouter un article groupé` sera désactivé, et vous verrez à la place une liste des variantes d'articles avec lesquelles cette variante est déjà groupée.

![variante d'article partie d'un autre groupe](images-en/item_variant_is_bundled.png)
