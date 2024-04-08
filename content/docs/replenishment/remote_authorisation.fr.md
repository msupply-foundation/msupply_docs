+++
title = "Autorisation à distance"
description = "Autorisation / processus d'approbation"
date = 2023-05-05T18:20:00+00:00
updated = 2023-05-05T18:20:00+00:00
draft = false
weight = 43
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Autoriser les réquisitions client à distance "
toc = true
top = false
+++

L'autorisation à distance permet aux personnes disposant des permissions appropriées d'autoriser les demandes de programme à l'aide d'une application web. Cela permet d'ajouter une étape de validation supplémentaire au processus de commande avant la création d'une expédition et l'envoi de stock aux clients.

<div class="note">
Le processus d'autorisation à distance n'est actuellement disponible que pour les demandes créées dans le cadre d'un programme. Vous devez avoir des programmes configurés pour utiliser cette fonctionnalité.
</div>

Lorsque vous utilisez l'autorisation à distance, le processus se déroule comme suit :

- Création d'une commande interne dans un dépôt client, à l'aide d'un programme
- Synchronisation du dépôt client et envoi de la demande au magasin fournisseur
- Le processus attend que le statut de la commande interne soit défini sur `Envoyé`
- La demande est automatiquement créée dans le magasin fournisseur, avec un statut d'approbation `En attente`
- Les responsables d'autorisation sont informés par e-mail qu'une demande nécessite une autorisation.
- En cliquant sur le lien dans l'e-mail, le responsable de l'autorisation est dirigé vers l'application web (hébergée par le serveur central)
- Après s'être connecté, il peut ajuster, commenter et autoriser (ou refuser) la demande
- Une fois autorisée, le statut est mis à jour :
  - pour la commande interne (dans le dépôt client)
  - pour la demande (dans le dépôt fournisseur)
- Les commentaires faits par le responsable de l'autorisation et les quantités ajustées, sont affichés dans la commande interne du dépôt client.

## Configuration

La mise en place du schéma d'autorisation nécessite quelques modifications de configuration sur le serveur central :

1. Activation de l'autorisation à distance : Suivez [les instructions de la documentation du serveur central](https://docs.msupply.org.nz/other_stuff:remote_authorisation#turn_on_remote_authorisation)
2. Configuration des responsables d'autorisation : Voir [les instructions](https://docs.msupply.org.nz/other_stuff:remote_authorisation#set_up_authorisers)
3. Vous devrez également [activer l'envoi d'e-mails](https://docs.msupply.org.nz/other_stuff:remote_authorisation#enable_emailing_of_authorisers) sur le serveur central

De plus, vous devez avoir les dépôts configurés pour une utilisation normale dans Open mSupply, avec les relations entre fournisseurs et clients configurées. Les dépôts devront avoir des  
 [listes principales](https://docs.msupply.org.nz/items:master_lists) attribuées aux dépôts clients et fournisseurs, et des programmes et périodes de programme configurés.

## Utilisation de l'autorisation à distance

### Commandes internes

Suivez le processus de création d'une commande interne basée sur un programme. Si les préférences du dépôt sont correctement configurées, vous verrez une colonne supplémentaire dans la liste des commandes internes, qui indique l'état d'approbation de la commande nouvellement créée :

![Internal Order list](/docs/replenishment/images/authorisation-internal-order-list.png)

De plus, lorsque vous consultez les détails de la commande interne, vous verrez deux nouvelles colonnes et l'état d'approbation de la commande :

![Internal Order list](/docs/replenishment/images/authorisation-internal-order-detail.png)

**Quantité approuvée** :  la quantité approuvée par le responsable de l'autorisation. Elle peut être différente de la quantité demandée. Si c'est le cas, le responsable de l'autorisation a la possibilité de saisir un commentaire explicatif, qui apparaît dans la colonne 
 **Commentaire d'approbation**

### Autorisation

Le processus d'autorisation est détaillé dans la [documentation du serveur central](https://docs.msupply.org.nz/other_stuff:remote_authorisation#authorising_using_the_web_app). Veuillez vous y référer pour connaître les étapes nécessaires à l'autorisation. 

### Réquisitions

Dans le dépôt fournisseur, vous verrez également quelques changements. La liste des réquisitions a gagné une colonne supplémentaire :

![Requisition list](/docs/replenishment/images/authorisation-requisition-list.png)

En consultant les détails, vous pouvez voir l'état d'approbation et les nouvelles colonnes, tout comme dans la commande interne. Lorsque la demande est dans l'état `En attente` d'approbation, vous ne pouvez pas non plus confirmer la finalisation ou créer une expédition

![Requisition list](/docs/replenishment/images/authorisation-requisition-detail-pending.png)

Une fois approuvée par le processus d'autorisation à distance, le statut est mis à jour et vous pouvez modifier la demande.

![Requisition list](/docs/replenishment/images/authorisation-requisition-detail-approved.png)

Le statut d'autorisation peut avoir différentes valeurs:

- **Aucun**: la réquisition n'a pas besoin d'autorisation et n'est pas soumise au système d'autorisation à distance. C'est le cas des réquisitions qui ne font pas partie d'un programme. Toutes les réquisitions avec ce statut peuvent être modifiées normalement.
- **En attente**: la réquisition est en attente d'autorisation d'une ou plusieurs de ses lignes. Une réquisition avec ce statut ne peut pas être modifiée et vous ne pouvez pas créer d'expéditions sortantes à partir de celle-ci.
- **Autorisée**: toutes les lignes qui attendaient une autorisation ont été autorisées (avec ou sans ajustements). Les commentaires et la quantité à fournir peuvent être modifiés et des expéditions sortantes peuvent être créées à partir de réquisitions autorisées.
- **Refusée**: L'auteur a examiné la réquisition et toutes les lignes ont été refusées. Tout comme pour le statut `En attente`, une réquisition avec ce statut ne peut pas être modifiée et vous ne pouvez pas créer d'expéditions à partir de celle-ci.

