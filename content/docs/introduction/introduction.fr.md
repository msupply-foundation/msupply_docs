+++
title = "Mieux connaître Open mSupply"
description = "Open mSupply Introduction."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Bienvenue sur Open mSupply!"
toc = true
top = true
+++

## Historique

Open mSupply s'appuie sur plus de 20 années d'expérience de mSupply, au cours desquelles il est devenu le système d'information de gestion logistique (SIGL) le plus utilisé dans les pays à revenu faible et intermédiaire.

## Open mSupply en bref

Open mSupply gère votre inventaire, génère votre commande, enregistre chaque réception et sortie de produits, et fournit ainsi un solde courant actualisé de votre stock disponible pour chaque produit.

Open mSupply fait bien plus que cela. Les fonctionnalités incluent:

- Gestion de l'inventaire
  - Voir facilement le stock disponible par lot
  - Gère les emplacements des rayons pour votre depot/entrepôt
  - Attribuer des emplacements au stock entrant, ou changez d'emplacement lorsque vous réorganisez le stock dans votre dépôt/entrepôt
  - Effectuer des inventaires, et indiquer les raisons des ajustements d'inventaire
- Recevoir et exécuter les commandes des clients (entités que vous fournissez)
- Commander auprès de votre dépôt/entrepôt fournisseur
  - Quantifier automatiquement les besoins futurs à partir de formules simples ou complexes
  - Suivre l'état de la commande au fur et à mesure que votre fournisseur traite et expédie les produits commandés
  - Faire entrer les produits en stock après vérifications
- Être alerté des niveaux de stock critiques depuis le tableau de bord

## Les spécificités de Open mSupply

mSupply possède des fonctionnalités uniques qui le rendent idéal pour une utilisation dans les chaînes d'approvisionnement de santé dans les pays à faibles ressources :

- **Hors ligne d'abord** mSupply est conçu pour fonctionner sans Internet. Même les connexions Internet les plus fiables peuvent se montrer instables voire s'interrompre. mSupply vous permet de travailler sans avoir à vous soucier de la qualité ou de la continuité d'Internet. Bvous avez besoin d'Internet pendant quelques minutes pour transmettre vos commandes ou recevoir des mises à jour.

- **Evolutif**Nous avons conçu Open mSupply pour gérer des milliards de transactions par an, tout en tenant sur une simple tablette ! Vous pouvez installer mSupply dans un entrepôt et le déployer par la suite sur des milliers de sites. mSupply est l'outil adéquat pour toutes les échelles de projet.

Pour avoir un aperçu de l'étendue des fonctionnalités de mSupply, jetez un oeil par ici sur cet héritage [https://www.msupply.org.nz](https://www.msupply.org.nz) - Il y a environ 1000 pages d'impression, n'essayez pas...

## Avec quelles plateformes Open mSupply est-il compatible ?

 -  Ordinateur de bureau (Windows, Linux et Mac)
 -  Navigateur web en tant qu'application web
 -  Tablette Android (application Android, non disponible sur les téléphones portables pour le moment)

## Où puis-je le télécharger ?

Vous trouverez plusieurs téléchargements sur notre [page de versions](https://github.com/openmsupply/open-msupply/releases) hébergée dans notre dépôt GitHub. La version la plus récente sera affichée en haut de la liste. Dans la mesure du possible, nous vous recommandons d'utiliser la version la plus récente.

Chaque version possède une section `Ressources` qui contient les fichiers nécessaires à l'installation d'Open mSupply.

### Téléchargement selon le système d'exploitation

### Windows

Des programmes d'installation sont disponibles pour chaque version, proposant :

- **Serveur**: compatible avec SQLite ou PostgreSQL, fonctionnant comme service Windows. Le programme d'installation du serveur est `omSupply_Server_[version].exe`
- **Bureau**: une application Windows permettant de se connecter à un serveur en cours d'exécution. Le nom du programme d'installation du bureau est `omSupply_Desktop_[version].exe`
- **Autonome (standalone)**: combine les deux options précédentes. Exécute un serveur en tant que service Windows et dispose d'une application Windows qui s'y connecte. Le nom du programme d'installation de la version autonome est `omSupply_Standalone_[version].exe`
- **Démo**: une installation de serveur préconfigurée qui ne nécessite pas de serveur central pour fonctionner. Le nom du programme d'installation de la version démo est  `omSupply_Demo_[version].exe`

### Android

La version Android est distribuée sous forme de fichier `.apk` que vous pouvez installer. Ce fichier porte le nom `open-msupply-[version]-release.apk`

### MacOS

Pour la version de bureau MacOS, nous fournissons un fichier `.dmg` nommé  `omSupply_[version].dmg`.

### Terminologie

Le tableau suivant décrit certains des termes courants utilisés dans mSupply, et guide également les utilisateurs de l'ancienne version de mSupply sur les évolutions terminologiques.

| Terme Open mSupply | Terme ancienne version   | Définition                                                               |
| :---------------:  | :-------------------:    | :---------------------------------------------------------------------   |
| Expédition | Facture Client           | La création d'une livraison de produit à un client particulier           |
| Livraison      | Facture Fournisseur      | La réception d'une livraison de produits d'un fournisseur particulier    |
| Réquisition        | Réquisitions Client      | Une commande de produits effectuée par un client particulier             |
| Commandes Internes | Réquisitions Fournisseur | Une demande de stock faite pour un fournisseur particulier               |

## Commencer

Si vous démarrez le serveur pour la toute première fois, vous pouvez voir cet écran:



Cela signifie que votre serveur cherche comment se connecter au serveur central mSupply. Veuillez contacter l'équipe support pour bénéficier d'une assistance, si vous ne savez pas comment renseigner cette information.


Pour exécuter Open mSupply, vous aurez besoin d'un serveur mSupply qui fonctionnera comme un serveur central. Bien que nous prévoyons de créer un nouveau serveur central open source, celui-ci n'est pas encore disponible.

Veuillez noter que nous sommes également en train de tester le processus de migration et l'intégration d'Open mSupply avec un système mSupply existant. Par conséquent, nous vous déconseillons de procéder à la mise à niveau sans nous en parler au préalable.

**Installation**

**Conditions préalables**

Vous avez besoin d'un système mSupply existant avec un serveur Legacy mSupply doté de modules de serveur Web et de synchronisation.
Depuis décembre 2023, il n'est pas possible de migrer un dépôt Legacy (ou Mobile) mSupply existant vers un dépôt Open mSupply ; seuls les nouveaux dépôts peuvent être créés dans Open mSupply.

**Procédure**

**1.Création de dépôts Open mSupply**

Les dépôts Open mSupply doivent être créés dans le serveur central Legacy mSupply comme détaillé dans la section [Création de nouveaux dépôts](https://docs.msupply.org.nz/other_stuff:virtual_stores#creating_new_stores). Notez que vous  [transformerez normalement un client existant en dépôt](https://docs.msupply.org.nz/other_stuff:virtual_stores#transition_a_customer_to_a_virtual_store).

**2.Création et configuration des utilisateurs**

Les utilisateurs doivent être créés et configurés pour le(s) dépôt(s) dans le serveur central Legacy mSupply comme détaillé dans la section [Gestion des utilisateurs](https://docs.msupply.org.nz/admin:managing_users).

**3.Création du site Open mSupply**

Le site Open mSupply doit être créé dans le serveur central Legacy mSupply comme détaillé dans la section [Création de nouveaux sites de synchronisation](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites).

**4.Ajout de dépôt au site Open mSupply**

Le(s) dépôt(s) doivent être ajouté(s) au site Open mSupply dans le serveur central Legacy mSupply comme détaillé dans la section [Ajout de dépôt](https://docs.msupply.org.nz/synchronisation:sync_sites#adding_stores).

**5.Déploiement d'Open mSupply**

Déployez Open mSupply sur votre appareil à partir du [dépôt GitHub d'Open mSupply](https://github.com/msupply-foundation/open-msupply). Consultez le support TMF pour vous assurer de déployer la version correcte.

**6.Lancement d'Open mSupply**

Lancez Open mSupply sur l'appareil. Vous devriez voir quelque chose comme l'écran ci-dessous.

![Initialisation](/docs/introduction/images/initialisation.png)

Informations de connexion :

URL : Consultez le support TMF pour vous assurer d'avoir l'URL correcte.
Nom du site : Tel qu'indiqué dans la section [Création de nouveaux sites de synchronisation](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites).
Mot de passe : Tel qu'indiqué dans la section [Création de nouveaux sites de synchronisation](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites).