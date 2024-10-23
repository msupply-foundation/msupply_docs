+++
title = "Commandes internes"
description = "Requesting stock from your suppliers."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 42
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Les commandes internes portent plusieurs autres noms dans certains pays ou systèmes :

- Réquisitions
- Commandes
- Rapport et demande
- R&R

Les commandes internes sont un moyen d'aider les utilisateurs à demander de nouveaux stocks à un autre magasin.

## Vusialisation des commandes internes

Si vous souhaitez commander du stock à votre fournisseur :

1. Naviguez jusqu'à la page `Réapprovisionnement` menu
2. Appuyez sur `Commandes internes`

![Internal Order: nav](/docs/replenishment/images/intord_access.png)

Une liste de tous les ordres internes existants s'affiche :

![Internal Order: list](/docs/replenishment/images/intord_list.png)

Vous pouvez utiliser les filtres pour filtrer la liste en fonction du nom ou du statut des commandes internes :

![Internal Order: filter](/docs/replenishment/images/intord_filter.png)

Vous pouvez trier la liste à l'aide des en-têtes de colonne :

1. Appuyez sur l'en-tête de la colonne que vous souhaitez trier. La colonne est triée par ordre croissant.
2. Touchez à nouveau l'en-tête de la colonne et les colonnes seront triées dans l'ordre inverse.

## Création d'une nouvelle commande interne

### Sélectionner un fournisseur

1. Cliquez sur `Nouvel Commande` (en haut à droite) :

![Internal Order: new order](/docs/replenishment/images/intord_newreqbutton.png)

2. Une nouvelle fenêtre s'ouvre, vous invitant à sélectionner un fournisseur :

![Internal Order: select supplier](/docs/replenishment/images/intord_selectsupplier2.png)

3. Sélectionnez un fournisseur en appuyant sur son nom. Vous serez redirigé vers une fenêtre comme celle-ci :

![Internal Order: newly created order](/docs/replenishment/images/intord_newintord.png)

### Définition du MOS (MOS maximum)

La définition du MOS (mois de stock) est essentielle pour le calcul de la **Quantité suggérée**:

- Il existe une règle générale selon laquelle, le _MOS_ doit être fixé à trois fois le cycle de commande.
- Le _MOS_ par défaut est `3.0`, ce qui est basé sur un cycle de commande mensuel.
- Si, par exemple, le cycle de commande a lieu tous les deux mois, le _MOS_ doit être fixé à 3 x 2 = `6.0`

<div class="imagetitle">
Dans l'exemple ci-dessous, nous fixons notre MOS cible à 3 mois.  
</div>

![MaxMOS](/docs/replenishment/images/intord_maxmos.png)

Cette opération peut être effectuée avant ou après l'ajout d'articles à votre commande.

### Ajout d'un seul élément

Cliquez sur `Ajouter un article` pour ajouter un seul article à votre commande. Une nouvelle fenêtre s'ouvre :

![Internal Order: add item](/docs/replenishment/images/intord_additem2.png)

Sélectionnez d'abord l'article que vous souhaitez ajouter à votre commande. Vous pouvez également taper tout ou une partie du nom (ou du code) d'un article pour rechercher un article spécifique.

Une fois l'élément sélectionné, les informations suivantes s'affichent dans la fenêtre :

- **Code de l'article** et **Nom de l'article**
- **Unités/Paquets**: Cela vous permet de passer d'une commande en unités à une commande en paquets.
- **Unité**: l'unité par défaut utilisée pour cet élément (_eg. Tablet, Vial_)
- **CMM**: Consommation mensuelle moyenne. La quantité de stock que votre magasin utilise en moyenne chaque mois (sur la base d'un nombre de mois configurable, la valeur par défaut est de 3 mois).
- **SDU**: Stock Disponible. Quantité de stock dont dispose actuellement le magasin
- **Taille de l'emballage par défaut**: la taille d'emballage par défaut de l'article
- **Quantité suggérée**: quantité de stock mSupply suggère que votre commande atteigne votre quantité cible de stock
- **Quantité demandée**: la quantité d'unités que vous demandez à votre fournisseur

Vous devriez également voir les graphiques suivants :

- **Quantité cible**: Dans ce tableau, vous trouverez les informations suivantes :
  - La _quantité cible_ de l'article. Elle est calculée comme suit : MOS x CMM.
  - Votre _Stock Disponible_ actuel (en gris)
  - La _Quantité de commande suggérée_ calculée par mSupply

<div class="imagetitle">
Dans l'exemple ci-dessous, notre quantité cible est de 609 unités, ce qui équivaut à 3 mois de stock (3 x 203 = 609 unités). Notre stock disponible (en gris) est de 269 unités. Pour atteindre mon objectif, mSupply me suggère de commander 342 unités (609 - 269). 
</div>

![Stock Distribution](/docs/replenishment/images/intord_charts_stockdistri.png)
Ce graphique montre la consommation mensuelle jusqu'à 12 mois dans le passé (en gris), la CMM actuelle (en gris foncé), la consommation prévue (en orange) et la moyenne mobile (ligne bleue) :
<div class="imagetitle">
Dans l'exemple ci-dessous, la quantité cible est de 408 unités. Comme nous avons déjà 467 unités en stock (en gris), la quantité suggérée est de zéro. 
</div>

![Stock Distribution 2](/docs/replenishment/images/intord_charts_stockdistri2.png)

- **Historique de la consommation (mensuel)**: Ce graphique montre la consommation mensuelle jusqu'à 12 mois dans le passé (en gris), la CMM actuelle (en gris foncé), la consommation prévue (en orange) et la moyenne mobile (ligne bleue) :
![Consumption](/docs/replenishment/images/intord_charts_consumption.png)

- **Évolution des stocks**: ce graphique vous montre votre niveau de stock pour les 30 derniers jours et votre stock prévisionnel pour les 30 prochains jours. Le stock prévisionnel sera mis à jour en fonction des données que vous aurez saisies dans le champ `Quantité demandée` :

![Stock Evolution](/docs/replenishment/images/intord_charts_stockevolution.png)

### Demander une quantité en paquets

Isi l'article que vous avez sélectionné a une taille d'emballage par défaut configurée (voir la documentation de mSupply sur [unités d'édition](https://docs.msupply.org.nz/items:adding_a_new_item#general_tab) pour plus de détails sur la manière de procéder), vous verrez quelques éléments supplémentaires dans la fenêtre "Ajouter un élément" :

### Ajout d'éléments à l'aide d'une liste de base
Si votre organisation utilise les listes maîtresses, vous pouvez ajouter plusieurs articles à la fois en utilisant les listes maîtresses de votre magasin. Cette fonction est particulièrement utile lorsque vous avez beaucoup d'articles dans votre commande et que vous ne voulez pas les ajouter tous un par un.

1. Tapez sur l'icône `Ajouter à partir de la liste principale` bouton
2. Sélectionner une liste de base
3. Une fenêtre de dialogue s'ouvre pour vous demander si vous souhaitez ajouter tous les éléments de cette liste de base. Appuyez `OK` si vous souhaitez poursuivre.

Tous les articles de la liste principale figurent désormais dans votre commande. Si vous avez déjà ajouté un seul article, il ajoutera les articles qui ne sont pas déjà présents.

Tapez sur une ligne de commande pour modifier la **Quantité demandée** ou tapez sur le bouton `Quantités suggérées pour l'utilisation`

![Commande interne : ajouter à partir de la liste de base](/docs/replenishment/images/intord_addfromml.gif)

<div class="note"> 
Les listes de base sont définies et attribuées aux points de vente au niveau du serveur central. Vous ne pouvez voir que les listes maîtresses visibles par votre point de vente. 
<br>Sachez également que si vous utilisez la fonctionnalité des programmes, seules les listes de base qui ne font pas partie d'un programme peuvent être sélectionnées.
<br> <br>
Si vous ne trouvez pas la liste maîtresse que vous recherchez et si vous souhaitez en créer une nouvelle, veuillez contacter votre administrateur.
</div>

<div class="tip">
Vous pouvez créer des commandes internes à partir de plusieurs listes de base en répétant les actions ci-dessus avec une autre liste de base. 
</div>

### Lecture de la liste de l'ordre interne
Lorsque vous ajoutez des articles (à l'aide d'une liste de base ou non), l'article est ajouté au tableau de la commande. Les informations suivantes sont fournies pour chaque ligne de commande :
| Status                   | Description                                                                                                                                        |
| :----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code**                 | Code de l'article                                                                                                                                  |
| **Nom**                  | Nom de l'article                                                                                                                                   |
| **Unité**                | Unité de l'article, par exemple comprimé, gélule, flacon                                                                                                       |
| **DPS**                  | Taille d'emballage par défaut de l'article                                                                                                                     |
| **SDU (Est. restant)**   | Stock disponible : quelle est la quantité de stock actuellement disponible dans votre magasin pour ce magasin ?
| **CMM**                  | Consommation mensuelle moyenne : la quantité de stock que votre magasin utilise en moyenne chaque mois 
(sur la base d'un nombre de mois configurable, la       valeur par défaut étant de 3 mois).                                                                                     |
| **Stock cible**          | C'est le stock que vous visez. Calculé comme suit : CMM x MOS cible                                                                                |
| **Quantité suggérée**    | La quantité de stock que mSupply suggère pour votre commande. Cette quantité est calculée comme suit : (AMC x MOS cible) - SoH                                 |
| **Demandé**              | Cette valeur est fixée par défaut à zéro. Il s'agit de la quantité d'unités que vous commandez à votre fournisseur.                                |           

### Utilisation des quantités suggérées

Si vous tapez sur le bouton `Quantités suggérées pour l'utilisation` oDans l'en-tête de la demande d'achat, mSupply copiera automatiquement les valeurs de l'en-tête de la demande d'achat. **Quantité suggérée** dans la colonne **Quantité demandée** colonne.

Vous pouvez toujours modifier manuellement la quantité commandée pour chacun d'entre eux en cliquant sur une ligne de commande.

![Use Suggested Quantities](/docs/replenishment/images/intord_reqtosug.png)

### Impression d'un ordre interne

Pour consulter un ordre interne spécifique, il suffit de cliquer sur le bouton `Imprimer` qui se trouve en haut à droite de la page.
Lors de l'impression, un fichier PDF est généré pour vous, qui s'ouvre alors dans un nouvel onglet du navigateur. Vous pouvez ensuite l'imprimer à l'aide de votre navigateur en cliquant sur "Imprimer" ou en utilisant le bouton "Imprimer". `contrôle`+`P` (si vous utilisez Windows) ou `cmd`+`P` de votre clavier (si vous utilisez un Mac).

![Print button](/docs/introduction/images/print_button.png)

Il s'agit soit

- Affiche un menu de rapports possibles à sélectionner avant de créer un PDF. Cela se produira si plusieurs rapports sont définis pour le fichier `Requisition` type de rapport.
- Créer un PDF immédiatement, s'il n'y a qu'un seul rapport à sélectionner

![Print menu](/docs/replenishment/images/intord_print_menu.png)

### Envoi d'une commande interne

Vous devez obtenir l'autorisation [Confirmation de l'envoi de l'ordre interne](/docs/administration/permissions/) pour pouvoir envoyer un ordre interne :

1. Tapez sur l'icône `Confirmer l'envoi` (en bas à droite)
2. Une fenêtre de dialogue s'ouvre pour vous demander si vous êtes sûr de vouloir envoyer la commande. Tapez sur `OK` de procéder
3. Le statut de votre commande est maintenant `ENVOI` et l'ordre n'est plus modifiable
<div class="warning">
Assurez-vous que votre commande est correcte avant de l'envoyer à votre fournisseur. Une fois envoyées, les commandes finalisées ne peuvent plus être modifiées. 
</div>

## Approbation des commandes internes
### Processus d'approbation à distance

Certains magasins peuvent exiger que leurs demandes soient approuvées par des utilisateurs spécifiques avant de pouvoir être exécutées. Pour une description complète de ce processus, voir le site mSupply [Autorisation à distance](https://docs.msupply.org.nz/other_stuff:remote_authorisation) la documentation.
To do this:

- Dans le point de vente demandeur, activez la préférence du point de vente `Inclure les demandes provenant de ce magasin dans le processus d'autorisation à distance du fournisseur`
- Dans le point de vente fournisseur, activez la préférence du point de vente `Utiliser l'autorisation à distance pour les demandes de réponse`

Pour plus d'informations sur la configuration des préférences des magasins, voir la page [Documentation mSupply](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab) sur le sujet.

Lorsqu'il est configuré de cette manière, le magasin demandeur verra une colonne supplémentaire dans la liste des commandes internes, indiquant le statut d'approbation :

![Internal Order: approval status columns](/docs/replenishment/images/internal_order_list_with_approval.png)

De plus, lors de la consultation d'un ordre interne spécifique, des colonnes indiquent la quantité approuvée, le nombre d'emballages approuvés et un commentaire saisi par l'approbateur, s'il y en a un :

![Internal Order detail with approval columns](/docs/replenishment/images/internal_order_detail_approval.png)

De même, le magasin fournisseur disposera d'une colonne supplémentaire dans la vue de la liste des demandes d'achat, indiquant le statut d'approbation :

![Internal Order detail with approval columns](/docs/distribution/images/requisition_list_approval.png)

Enfin, une demande d'achat spécifique comporte également de nouvelles colonnes, pour la quantité approuvée et un commentaire d'approbation, s'il a été saisi par l'approbateur :

![Internal Order detail with approval columns](/docs/distribution/images/requisition_detail_approval.png)

### Procédure d'approbation locale
Une autre option pour mettre en œuvre une étape d'approbation pour les commandes internes consiste à activer ce que l'on appelle l'"approbation locale". Vous pouvez ainsi autoriser uniquement certains utilisateurs à modifier le statut d'une commande interne pour qu'elle devienne `Envoyé`. Pour permettre à un utilisateur de changer le statut d'un ordre interne en `Envoyé`, ils requièrent l'autorisation `Confirmation de l'envoi de l'ordre interne` à activer.

Pour définir l'autorisation, modifiez l'utilisateur dans mSupply et passez à l'option `Ouvrir les autorisations de mSupply` illustré ci-dessous :

![Internal Order detail with approval comment](/docs/replenishment/images/mSupply_intord_permission.png)

Si cette option n'est pas cochée, l'utilisateur ne pourra pas mettre à jour le statut de l'ordre interne à `Envoyé` et la commande ne peut être traitée.

Lors du passage au statut `Envoyé`, les coordonnées de l'utilisateur sont ajoutées au champ de commentaire ; ceci est visible lors de la consultation de l'ordre interne, dans le panneau des détails :

![Internal Order detail with approval comment](/docs/replenishment/images/intord_approval_comment.png)

et est également montré à l'approbateur dans l'application web d'autorisation à distance si celle-ci est utilisée.

Le texte supplémentaire se présente sous la forme suivante

`Approuvé par [nom complet de l'utilisateur]. Courriel : [adresse électronique de l'utilisateur] et numéro de téléphone : [numéro de téléphone de l'utilisateur].`

Ces informations proviennent de l'utilisateur, tel qu'il est configuré dans mSupply. Se référer au [Gestion des utilisateurs](https://docs.msupply.org.nz/admin:managing_users#details_tab) pour savoir comment procéder.
