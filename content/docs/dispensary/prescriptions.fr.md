+++
title = "Prescriptions"
description = "Prescribing stock to patients."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.fr.html"

[extra]
toc = true
top = false
+++

Les ordonnances permettent de prescrire des médicaments aux patients.

Une ordonnance peut être utilisée pour

- délivrer des médicaments à un patient

## Visualisation des prescriptions

Pour utiliser les prescriptions, assurez-vous que votre magasin est réglé sur le mode `Dispensaire`  (voir le [magasins virtuels](https://docs.msupply.org.nz/other_stuff:virtual_stores#store_type) pour savoir comment procéder).

### Ouvrir le menu Prescriptions

Choisir `Dispensaire` > `Prescription` dans le panneau de navigation.

![Go to Prescriptions](/docs/dispensary/images/goto_prescriptions.png)

Une liste de prescriptions vous est présentée (si vous n'en voyez aucune, c'est que vous commencez à peine !)

À partir de cet écran, vous pouvez

- consulter une liste de prescriptions
- Créer une nouvelle prescription
- Exporter une prescription vers un fichier `.csv`

### Liste des prescriptions

1. La liste des ordonnances est divisée en 5 colonnes :

| Colonne      | Description                         |
| :---------- | :---------------------------------- |
| **Nom**    | Nom du patient                 |
| **Statut**  | Statut actuel de la prescription  |
| **Numéro**  | Numéro de référence de la prescription |
| **Créée** | Date de création de la prescription   |
| **Commentaire** | Commentaire sur la prescription        |

2. La liste peut afficher un nombre fixe de prescriptions par page. Dans le coin inférieur gauche, vous pouvez voir combien de prescriptions sont actuellement affichées sur votre écran.

![Page](/docs/distribution/images/os_list_showing.png)

3. Si vous avez plus d'ordonnances que la limite actuelle, vous pouvez naviguer vers les autres pages en tapant sur le numéro de la page ou en utilisant les flèches droite ou gauche (en bas à droite).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

4. Vous pouvez également sélectionner un nombre différent de lignes à afficher par page en utilisant l'option située en bas à droite de la page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Recherche par nom de patient

Vous pouvez filtrer la liste des ordonnances par nom de patient. Cela peut s'avérer utile si vous recherchez une ordonnance en particulier !

Type le nom d'un patient dans le champ `Recherche par nom` (à gauche, juste au-dessus des en-têtes de liste). Toutes les prescriptions de ce patient apparaissent dans la liste.

![Search by name](/docs/dispensary/images/search_by_name.png)

### Exportation des prescriptions

La liste des prescriptions peut être exportée dans un fichier séparé par des virgules (csv). Il suffit de cliquer sur le bouton d'exportation (à droite, en haut de la page).

![Export button](/docs/distribution/images/export.png)

aet le fichier sera téléchargé. La fonction d'exportation téléchargera toutes les ordonnances, et pas seulement la page en cours, si vous en avez plus de 20. Les prescriptions sont exportées dans l'ordre de tri sélectionné dans le tableau, bien que vous puissiez facilement trier la liste dans Excel ou tout autre logiciel avec lequel vous ouvrez le fichier .csv !

### Supprimer une prescription

Vous pouvez supprimer une ordonnance de la liste des ordonnances.

1. Sélectionnez la prescription à supprimer en cochant la case située à gauche de la liste. Vous pouvez sélectionner plusieurs ordonnances à supprimer. Vous pouvez même les sélectionner toutes en utilisant la case à cocher principale dans les en-têtes de liste.

2. Ouvrir  `Sélectionner` (en haut à droite, au-dessus de la liste) et sélectionnez la liste déroulante  `Supprimer les lignes sélectionnées`.

3. Une notification confirme le nombre de prescriptions supprimées (en bas à gauche).

<div class="note">
Vous ne pouvez supprimer que les prescriptions ayant le statut <code>NOUVEAU</code>.
</div>

![Prescription list: delete](/docs/dispensary/images/prescription_list_deleteline.gif)

## Création d'une ordonnance

1. Aller à `Dispensaire` > `Prescriptions`.

2. Cliquer sur `Nouvelle prescription` dans le coin supérieur droit

![New Prescription](/docs/dispensary/images/click_new_prescription.png)

3. Une nouvelle fenêtre `Patients` s'ouvre, vous invitant à sélectionner un patient.

#### Sélectionner un patient

1. Dans la fenêtre  `Patients` la liste des patients disponibles s'affiche. La liste des patients affiche les 100 premiers patients et vous invite à affiner votre recherche en saisissant le plus possible le nom ou le code du patient.

<div class="imagetitle">
Dans l'exemple ci-dessous, nous prescrivons un médicament à <b>Luna Lovegood</b>. 
</div>

![gif](/docs/dispensary/images/prescription_select_patient.gif)

2. Votre ordonnance est automatiquement créée lorsque vous cliquez sur le patient dans la liste déroulante.

<div class=imagetitle>
If everything went well, you should see the name of your patient in the top left corner and the status should be <code>NEW</code> 
</div>

![Prescription: created](/docs/dispensary/images/prescription_created.png)

### Modifier le nom du patient

Si vous avez sélectionné le mauvais patient, vous pouvez modifier le nom du patient dans le champ `Nom du patient` ou sélectionnez une option dans la liste déroulante :

![Change patient](/docs/dispensary/images/prescription_change_patient.gif)

Si vous avez plus de 100 patients, il se peut que vous deviez taper une plus grande partie du nom ou du code du patient pour que le nom du patient apparaisse dans la liste déroulante.

### Sélectionner le clinicien

Une fois que votre ordonnance a été créée, vous pouvez sélectionner un clinicien à partir de l'écran d'accueil. `Clinicien` liste déroulante.

![Select Clinician](/docs/dispensary/images/prescription_clinician.gif)

### Consulter ou modifier le panneau d'information sur les prescriptions

Le panneau d'information vous permet d'afficher ou de modifier des informations sur la prescription. Il est divisé en plusieurs sections :

- Informations supplémentaires
- Détails de la facture

Nous prévoyons d'ajouter d'autres sections à l'avenir, au fur et à mesure de la croissance d'Open mSupply.

#### Comment ouvrir et fermer le panneau d'information ?

Si vous utilisez un grand écran, le panneau d'information s'ouvrira automatiquement pour vous. En revanche, sur un écran de taille moyenne, le panneau d'information sera fermé par défaut.

Pour ouvrir le panneau d'information, vous pouvez appuyer sur le bouton `Plus d'informations`, situé dans le coin supérieur droit de la vue Prescription.

Vous pouvez fermer l'application en appuyant sur le bouton `X Fermer`, dans le coin supérieur droit du panneau d'information.

![Open and close the Information Panel](/docs/dispensary/images/prescription_infopanel_openclose.gif)

#### Informations complémentaires

Dans la section **Informations complémentaires**, vous pouvez

- voir qui a créé la prescription (nom de l'utilisateur)
- Voir et modifier la couleur de la prescription. Pour modifier la couleur, appuyez sur le cercle coloré et sélectionnez une couleur dans le menu déroulant.
- Rédiger ou modifier un commentaire

#### Détails de la prescription

Dans cette section, vous verrez par défaut le prix de vente total des articles énumérés dans l'ordonnance.

### Séquence d'état de la prescription

La séquence d'état est située dans le coin inférieur gauche de l'écran de la prescription.

Les statuts passés sont surlignés en bleu, les statuts suivants apparaissent en gris.

<figure>
<center><img src="/docs/dispensary/images/prescription_statussequence1.png" style="width:40%"></center>
<figcaption align = "center">Séquence d'état : l'état actuel est<code>NOUVEAU</code>.</figcaption>
</figure>

<figure>
<center><img src="/docs/dispensary/images/prescription_statussequence2.png" alt="Trulli" style="width:40%"></center>
<figcaption align = "center">Séquence d'état : l'état actuel est</i><code>VERIFIEE</code>.</figcaption>
</figure>

Il existe trois statuts pour une ordonnance :

| Statut | Description                                                                                                                                  |
| :----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **New**      | Il s'agit du premier état lorsque vous créez un prescription.                                                                                     |
| **Picked**   | L'ordonnance est préparée et prête à être remise au patient. Les marchandises font toujours partie de votre inventaire et la prescription peut encore être modifiée. |
| **Verified** | Le patient a reçu son médicament.                                                                                                     |

Si vous survolez la séquence de statuts, une fenêtre d'historique de la prescription apparaît. Vous pouvez voir la date à laquelle une ordonnance a été mise à jour d'un statut à l'autre.

<div class="imagetitle">
Cette prescription a été créée, prélevée et vérifiée le 18/08/2023
</div>

![Prescription status: hover](/docs/dispensary/images/prescription_statussequence_hover.png)

### Bouton d'annulation et de confirmation

#### Bouton d'annulation

Tapez sur le bouton `Fermer` pour quitter la vue des prescriptions et revenir à la liste des prescriptions.

#### Bouton de confirmation

Le bouton `Confirm` met à jour l'état de la prescription. Le statut que vous pouvez confirmer dépend de l'état actuel de la prescription et suit la séquence indiquée ci-dessous.

Lorsque vous gérez une prescription, vous ne pouvez confirmer que les statuts Prélevé et Vérifié.

| Confirmer...           | Statut actuel | Statut suivant |
| :------------------- | :------------- | :---------- |
| **Confirmer la sélection**   | Nouveau            | Choisi      |
| **Confirmer Vérifié** | Choisi         | Vérifié    |

Il n'est pas nécessaire d'actualiser une prescription pour la faire passer au statut suivant dans la séquence. Vous pouvez choisir de sauter `Confirmer Vérifié` et se rendre directement sur le site `Confirmer l'envoi` par exemple.

Comme indiqué ci-dessous, tapez sur la flèche vers le bas du bouton `Confirmer` button et sélectionnez le statut dans lequel vous souhaitez que la prescription soit mise à jour.

![Skip Status](/docs/dispensary/images/prescription_confirmbutton_skipstatus.gif)

## Ajouter des lignes à une ordonnance

Cliquez sur le bouton `Ajouter un article` (en haut à droite).

Une nouvelle fenêtre `Ajouter un article` s'ouvre.

![Add Item button](/docs/dispensary/images/add_item_button.png)

### Sélectionner un article

Dans la fenêtre `Ajouter un article`, vous pouvez rechercher un article en

- en lisant la liste des éléments disponibles
- ou en tapant une partie ou la totalité du nom de l'article
- ou en tapant une partie ou la totalité du code de l'article.

Une fois l'élément mis en surbrillance, cliquez sur le nom ou appuyez sur `Enter`.

![Alt Text](/docs/dispensary/images/prescription_additem.gif)

Une fois l'élément sélectionné, les informations suivantes s'affichent :

#### En-têtes

- le code et le nom de l'article (ex. _030063 Acide acétylsalicylique 100mg tabs_)
- la quantité en stock disponible pour cet article (ex. _20 976 unités_)
- l'unité de l'article (ex. _Tab_)
- **Note**: Le mode d'emploi du médicament.

<div class="imagetitle">
<b>Exemple:</b> Pour l'article *030063 Acide acétylsalicylique 100mg tabs*, il y a 20 976 tabs disponibles. 
</div>

![add item headers](/docs/dispensary/images/additem_headers.png)

#### Enjeu [Quantity] d'unités dans des paquets de [Taille du paquet]

Dans le champ `Enjeu`, vous pouvez saisir la quantité que vous souhaitez délivrer à votre patient.

Par défaut, vous êtes invité à émettre une quantité de **unités**. Toutefois, vous avez la possibilité de délivrer une quantité de paquets à la place en modifiant la valeur dans la deuxième liste déroulante. (`Taille de l'emballage`).

La valeur par défaut est `Tous` lorsque vous émettez des unités.

![Prescription Issue quantity](/docs/dispensary/images/prescription_issuequantityunits.png)

#### Liste des lots disponibles :

Il s'agit d'une liste de numéros de lots que vous avez en stock pour cet article :

| Colonne              | Description                                                                                      |
| :--------------------- | :----------------------------------------------------------------------------------------------- |
| **Lot**              | Numéro de lot. Il s'agit d'une désignation donnée aux produits fabriqués au cours d'un même cycle de fabrication.         |
| **Expiration**             | Date d'expiration du lot (format : MM/AAAA)                                                      |
| **Localisation**           | Il s'agit du nom de l'emplacement où l'article est stocké si votre inventaire est géré avec des emplacements de stockage. |         
| **En attente**            | Indique si un lot est en attente ou non. Il n'est pas possible d'émettre un lot en attente.          |
| **En magasin (packs)**   | Nombre total d'emballages dans votre magasin                                                              |
| **Disponible (paquets)**  | Nombre d'emballages disponibles (non déjà affectés à d'autres envois)                             |
| **Taille de l'emballage**              | Quantité d'unités par paquet                       |
| **[Unité] Qté délivrée**  | Quantité totale d'unités à délivrer                                                             |
| **Qté d'emballage délivrée**    | Nombre de paquets à délivrer                                                                     |

![List of available batch numbers](/docs/dispensary/images/prescription_additem_listofbatches.png)

Les lots disponibles pour la sélection sont affichés en premier et les lots qui ne le sont pas (en attente ou pas de stock disponible) sont affichés en dessous et dans une police grise.

### Délivrer une quantité d'unités

Par défaut, vous êtes invité à émettre une quantité de **unités**, quelle que soit la taille du paquet (nombre d'unités dans un paquet).

<div class="imagetitle">
Dans l'exemple ci-dessous, nous émettons 1000 unités de l'article. Les 1000 unités seront toutes prélevées sur le même lot (troisième ligne). Les deux premiers lots n'ont pas été sélectionnés car ils sont périmés. 
</div>

![additem!](/docs/dispensary/images/prescription_additem_issueunits.png)

<div class="imagetitle">
Dans cet autre exemple, nous délivrons 82 unités. Le système sélectionne deux lots avec des tailles d'emballage différentes. 
</div>

![additem!](/docs/dispensary/images/prescription_additem_issueunitstwobatches.png)

#### Avertissements

Il se peut que cet écran affiche un ou plusieurs messages d'avertissement :

![placeholder warning!](/docs/distribution/images/os_warning_placeholder.png)

L'avertissement s'affiche pour vous signaler que le stock disponible n'est pas suffisant pour répondre à votre demande. Une quantité fictive est ajoutée automatiquement afin que vous puissiez suivre la quantité demandée tout en ajoutant du stock (par exemple en utilisant une commande interne ou un envoi entrant).

Cette image montre également l'avertissement qui vous indique que certaines lignes de stock sont expirées ; c'est peut-être la raison pour laquelle le système n'a pas alloué automatiquement certaines lignes de stock.
Toutefois, vous pouvez toujours sélectionner manuellement ces lignes et sortir le stock périmé ! 



![pack sizes warning!](/docs/distribution/images/os_warning_pack_sizes.png)

Cet avertissement vous indique qu'en raison des tailles d'emballage disponibles, le système a arrondi la quantité demandée à l'unité supérieure. Dans cet exemple, aucune taille d'emballage n'est inférieure à `12`. Il existe des paquets de `20` disponibles, de sorte que lorsque 12 comprimés sont demandés, le système a arrondi la demande à la valeur supérieure. `2` paquets de `20`.


![pack sizes warning!](/docs/distribution/images/os_warning_no_quantity.png)

Si vous ajoutez un article, que vous oubliez de saisir une quantité à sortir et que vous cliquez sur `OK` vous verrez ce message d'avertissement. Il vous informe qu'il n'y a pas de quantité de problèmes ; à partir de là, vous pouvez cliquer sur `OK` pour confirmer que vous avez l'intention d'entrer `0`, Dans ce cas, la fenêtre se ferme et une ligne de remplacement est ajoutée à l'envoi. Vous pouvez modifier cette ligne ultérieurement et ajouter une quantité. Toutefois, si vous oubliez d'ajouter une quantité et que vous confirmez l'attribution de l'envoi, cette ligne sera supprimée !

### Délivrer une quantité de paquets

Vous pouvez décider d'émettre une quantité de **paquets**. Pour ce faire, vous pouvez modifier la valeur du champ `Taille de l'emballage`

<div class="imagetitle">
Imaginons que vous ne souhaitiez distribuer que des paquets de 100 unités. Vous pouvez changer la valeur de la liste déroulante de `Tout` à `100`. 
</div>

![Alt Text](/docs/dispensary/images/prescription_additem_switchtopack.gif)

Il vous est maintenant proposé d'émettre un certain nombre de paquets de 10 unités. Seul(s) le(s) numéro(s) de lot avec une taille d'emballage de 10 unités peut(vent) être automatiquement délivré(s).

<div class="note">
Si vous aviez précédemment introduit une quantité d'unités et que vous passez à une quantité d'emballages, la quantité d'unités sera automatiquement convertie en la quantité correcte d'emballages.  
</div>

Lorsqu'une taille d'emballage est sélectionnée, les lignes de stock qui ont une taille d'emballage différente de celle sélectionnée ne sont pas disponibles pour la sélection. Ces lignes sont donc répertoriées plus bas dans le tableau et apparaissent en caractères gris, comme les autres lignes indisponibles.

### Allocation manuelle

Que vous ayez choisi de délivrer une quantité d'unités ou de paquets, vous pouvez toujours modifier manuellement la quantité au niveau du numéro de lot directement avant d'appuyer sur OK.

Il vous suffit de saisir ou de modifier la quantité dans le champ `Paquets Qté délivrée`.

Les valeurs dans le champ **Total** sera automatiquement mise à jour avec la nouvelle quantité.

<div class="note">
 <b></b> Lors de l'attribution de quantités au niveau du numéro de lot, la quantité saisie est toujours une quantité de paquets. 
</div>

<figure>
<img src="/docs/dispensary/images/prescription_additem_manualallocation.gif" style="width:100%">
<figcaption align = "center"><i>Attribution manuelle au niveau du numéro de lot.</i></figcaption>
</figure>

### Confirmer l'article et la quantité

Lorsque vous êtes satisfait de la quantité, vous pouvez soit appuyer sur :

- Le bouton `OK`. Vous êtes redirigé vers la vue Prescription et votre article a été ajouté à la liste.
- Le bouton `OK & Next` pour ajouter immédiatement un autre élément
- Le bouton `Cancel` si vous ne voulez plus ajouter l'article à la prescription.

## Modification d'une ligne de prescription

Pour modifier une ligne de prescription, tapez dessus. L'écran suivant s'affiche `Modifier l'article` , qui est identique à la `Ajouter d'un article`, sauf que l'article est déjà choisi.

### Modifier une ligne de prescription

<div class="note">
 <b></b> Vous pouvez modifier une ligne de prescription si le statut de la prescription est inférieur à <code>Vérifié</code>. 
</div>

1. Ouvrez la prescription que vous souhaitez modifier.
2. Tapez sur la ligne que vous souhaitez modifier. Une fenêtre identique à celle de `Ajouter un article` apparaît. À ce stade :

   - Modifier la page principale dans le champ `Enjeu`
   - ou modifier la valeur du nombre d'emballages au niveau du numéro de lot

<div class="note">
 <b></b> Lorsque vous modifiez une ligne de prescription, vous ne pouvez pas modifier l'article. Vous devez supprimer la ligne de prescription et en créer une nouvelle. 
</div>

### Supprimer une ligne de prescription

1. Ouvrez la prescription que vous souhaitez modifier.
2. Sélectionnez la ou les ligne(s) que vous souhaitez supprimer en cochant la ou les case(s) située(s) à droite de la liste.
3. Aller à la page `Actions` menu déroulant (en haut à droite, au-dessus de la liste)
4. Sélectionner l'action `Supprimer les lignes sélectionnées`

![Alt Text](/docs/distribution/images/os_actions_deleteselectedlines.png)

<div class="imagetitle">
Dans l'exemple ci-dessous, nous supprimons <i>item 030063 - Acide acétylsalicylique 100mg tabs</i>
</div>

![Alt Text](/docs/dispensary/images/prescription_deleteselectedlines.gif)

<div class="tip">
 <b></b> Vous pouvez supprimer plusieurs lignes à la fois. Veillez à vérifier ce qui est sélectionné avant d'effectuer l'action Supprimer. 
</div>

## Traitement d'une ordonnance

### Confirmation du prélèvement sur ordonnance

Le prélèvement désigne le processus par lequel des articles individuels sont prélevés dans la pharmacie.

Une fois qu'un article a été ajouté à votre ordonnance, son statut passe automatiquement au prélèvement :

- Le statut de la prescription est maintenant `CHOISI`
- Vous êtes maintenant invité à confirmer la prescription par l'intermédiaire de l'application bouton`Confirmer Vérifié` 

À ce stade, vous pouvez encore modifier les lignes d'expédition, ajouter des articles ou supprimer des lignes existantes.

### Vérifier la prescription

La dernière étape de la prescription d'un médicament consiste à vérifier l'ordonnance.

Pour vérifier une prescription, cliquez sur le bouton `Confirm Verified`.

Une fois la prescription confirmée :

- Le statut de la prescription est désormais `VERIFIEE`
- Les marchandises ne font plus partie de votre inventaire
- Vous ne pouvez plus modifier les lignes de prescription
- Vous ne pouvez plus supprimer la prescription

## Visualisation d'une ordonnance

Les lots sont automatiquement regroupés par élément lors de la consultation d'une ordonnance spécifique. Utilisez le bouton de développement dans l'en-tête du tableau pour développer toutes les lignes groupées.
toutes les lignes groupées.

![Group by Item](/docs/dispensary/images/prescription_group_by_item.gif)

Si vous manquez de place sur votre écran, ou si certaines colonnes ne vous intéressent tout simplement pas, vous avez la possibilité de masquer les colonnes affichées dans cette vue.

Cliquez sur le bouton `Afficher / masquer les colonnes` qui se trouve en haut à droite du tableau. La liste des colonnes disponibles s'affiche. Vous pouvez cocher les colonnes que vous souhaitez voir. Les options choisies sont enregistrées pour le navigateur actuel, de sorte que la prochaine fois que vous consulterez une ordonnance, vous ne verrez que les colonnes sélectionnées. Si vous avez choisi les colonnes à afficher, le bouton apparaît en bleu pour vous rappeler que d'autres colonnes sont disponibles.



![Hide columns](/docs/dispensary/images/prescription_show_hide_columns.gif)
