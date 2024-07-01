+++
title = "Autorisation à distance"
description = "Authorisation / approval process"
date = 2023-05-05T18:20:00+00:00
updated = 2023-05-05T18:20:00+00:00
draft = false
weight = 43
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Autoriser les demandes des clients à distance"
toc = true
top = false
+++

L'autorisation à distance permet aux personnes disposant des autorisations appropriées d'autoriser les demandes d'achat basées sur des programmes à l'aide d'une application web. Cela permet au processus de commande d'avoir une étape de validation supplémentaire avant qu'un envoi sortant ne soit créé et que le stock ne soit envoyé aux clients.
<div class="note">
Le processus d'autorisation à distance n'est actuellement disponible que pour les demandes d'achat créées pour un programme. Les programmes doivent être configurés pour pouvoir utiliser cette fonctionnalité.
</div>

Lors de l'utilisation de l'autorisation à distance, le processus se déroule comme suit :
- Une commande interne est créée dans un magasin client à l'aide d'un programme.
- Le point de vente client se synchronise et la demande est envoyée au point de vente fournisseur.
- Le processus attend que le statut de l'ordre interne soit défini sur `Envoyé`
- La demande d'achat est automatiquement créée dans le magasin fournisseur et a un statut d'approbation de `En attente`
- Les ordonnateurs sont informés par courrier électronique de l'existence d'une demande nécessitant une autorisation.
- En cliquant sur le lien figurant dans l'e-mail, l'auteur est dirigé vers l'application web (qui est hébergée par le serveur central).
- Après s'être connecté, il peut ajuster, commenter et autoriser (ou refuser) la demande.
- Une fois l'autorisation obtenue, le statut est mis à jour :
  - pour la commande interne (dans le magasin du client)
  - pour la demande d'achat ( dans le magasin du fournisseur )
- Les commentaires formulés par l'ordonnateur et les éventuelles quantités ajustées apparaissent dans la commande interne du magasin du client.


## Configuration

La mise en place du processus d'autorisation nécessite quelques changements de configuration sur le serveur central :
1. Activer l'autorisation à distance. Suivre [ces instructions](https://docs.msupply.org.nz/other_stuff:remote_authorisation#turn_on_remote_authorisation) dans la documentation du serveur central
2. Mettre en place des ordonnateurs. Voir [ces instructions](https://docs.msupply.org.nz/other_stuff:remote_authorisation#set_up_authorisers)
3. Il se peut que vous deviez également [activer l'envoi de courriels](https://docs.msupply.org.nz/other_stuff:remote_authorisation#enable_emailing_of_authorisers) sur le serveur central

En outre, les magasins doivent être configurés pour une utilisation normale dans Open mSupply, et les relations avec les fournisseurs et les clients doivent être configurées. Les magasins doivent avoir [listes principales](https://docs.msupply.org.nz/items:master_lists) affectés aux magasins des clients et des fournisseurs, et les programmes et périodes de programme configurés.
## Utilisation de l'autorisation à distance

### Commandes internes

Suivez la procédure de création d'une commande interne basée sur un programme.
Si les préférences du magasin sont correctement configurées, vous verrez une colonne supplémentaire dans la liste des commandes internes, qui indique le statut d'approbation de la commande nouvellement créée :
![Internal Order list](/docs/replenishment/images/authorisation-internal-order-list.png)

En outre, lorsque vous consultez les détails de la commande interne, vous verrez deux nouvelles colonnes et le statut d'approbation de la commande :

![Internal Order list](/docs/replenishment/images/authorisation-internal-order-detail.png)

Les **Quantité approuvée** is la quantité approuvée par l'ordonnateur. Cette quantité peut être différente de la quantité demandée. Dans ce cas, l'ordonnateur a la possibilité d'introduire un commentaire explicatif, qui apparaît dans le tableau de bord. **Commentaire d'approbation** colonne.

### Autorisation

La procédure d'autorisation est détaillée dans le [documentation du serveur central](https://docs.msupply.org.nz/other_stuff:remote_authorisation#authorising_using_the_web_app). Veuillez vous y référer pour connaître les étapes nécessaires à l'autorisation.
### Réquisitions
Dans le magasin d'approvisionnement, vous constaterez également quelques changements. La liste des réquisitions s'est enrichie d'une colonne supplémentaire :
![Requisition list](/docs/replenishment/images/authorisation-requisition-list.png)

Lorsque vous consultez les détails, vous pouvez voir le statut d'approbation et les nouvelles colonnes, tout comme dans la commande interne. Lorsque la demande se trouve dans la `En attente` vous ne pouvez pas non plus confirmer la finalisation ou la création d'un envoi :
![Requisition list](/docs/replenishment/images/authorisation-requisition-detail-pending.png)

Une fois approuvée par le processus d'autorisation à distance, le statut est mis à jour et vous pouvez modifier la demande :

![Requisition list](/docs/replenishment/images/authorisation-requisition-detail-approved.png)

Le statut de l'autorisation peut avoir plusieurs valeurs différentes :
- **Aucun**: la demande ne nécessite pas d'autorisation et n'est pas soumise au système d'autorisation à distance. Cela vaut pour les demandes qui ne concernent pas un programme. Toutes les demandes ayant ce statut peuvent être éditées normalement.
- **En attente**: la demande est en attente d'autorisation pour une ou plusieurs de ses lignes. Une demande ayant ce statut ne peut pas être modifiée et il n'est pas possible de créer des envois sortants à partir de cette demande.
- **Autorisé**: toutes les lignes en attente d'autorisation ont été autorisées (avec ou sans ajustements). Les commentaires et la quantité à fournir peuvent être modifiés et des expéditions sortantes peuvent être créées à partir des demandes d'achat autorisées.
- **Refusé**: l'ordonnateur a examiné la demande et les lignes ont toutes été refusées. Tout comme le statut En attente, une demande ayant ce statut ne peut pas être modifiée et vous ne pouvez pas créer d'envois sortants à partir de ce statut.
