+++
title = "Serveur central Open mSupply"
description = "Fonctionnalitées du serveur central Open mSupply"
date = 2022-06-10T11:38:00+00:00
updated = 2022-06-10T11:38:00+00:00
draft = false
weight = 20
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = true
+++

<div class="tip">Voir la section <a href="#configuration-and-synchronisation">configuration</a> pour apprendre comment configurer le serveur central.</div>

Le serveur central d'Open mSupply est un site spécial qui permet de configurer des sous-ensembles de données centrales. Veuillez consulter la section [Configuration requise](/fr/docs/introduction/requirements/#open-msupply-requirements) pour plus de détails sur comment faire fonctionner open mSupply, et spécifiquement la section [Serveur central](/fr/docs/introduction/requirements/#open-msupply-central-server) pour plus de détails sur la configuration requise pour le serveur central Open mSupply.

## Qu'est-ce que le serveur central Open mSupply ?

Il s'agit essentiellement d'une autre instance Open mSupply. Cependant, les différences par rapport à un site distant classique sont les suivantes:

- Seule une instance du serveur central Open mSupply existe dans le système Open mSupply.
- Il sera configuré par notre personnel d'assistance et devra être disponible en ligne (généralement sous la forme d'un serveur cloud, mais il peut également être hébergé dans le pays).
- Tous les sites distants Open mSupply faisant partie du [système de synchronisation](/docs/sync/synchronisation/) communiqueront avec le serveur central Open mSupply. 
- Il permet de configurer des sous-ensembles de données centrales

## À quoi cela ressemble-t-il ?

L'interface du serveur central ressemble beaucoup à n'importe quelle autre interface Open mSupply, mais vous verrez une barre de couleur distincte en bas de l'interface qui identifie le site comme étant le serveur central :

![central server identifier bar!](/docs/introduction/images/central_server_bar_identifier.png)

Comme pour le serveur central mSupply classique, il n'existe qu'une seule instance du serveur central Open mSupply dans le système Open mSupply.

## Site distant et serveur central

Certaines opérations ne sont autorisées que dans le serveur central d'Open mSupply. Si une opération est interdite sur le site distant, vous verrez l'alerte suivante

![only allowed on central!](/docs/introduction/images/only_allowed_on_central.png)

Tout au long de cette documentation, vous verrez des sections qui font référence aux fonctionnalités du serveur central open mSupply. Pour l'indiquer, elles comporteront cette image sur la page:

[![central server only](/docs/introduction/images/central_server.png '🔗 Available on central server only ')](/docs/getting_started/central/#remote-site-vs-central-server)

En cliquant sur l'image, vous accéderez à la page ci-dessous.

## Configuration et synchronisation

Open mSupply est configuré comme un autre site sur le serveur central mSupply avec [quelques réglages supplémentaires](https://docs.msupply.org.nz/synchronisation:sync_sites#open_msupply_central_server_settings). 

Pour configurer votre site Open mSupply afin qu'il utilise un serveur central, vous avez plusieurs possibilités.

#### Utilisation d'un serveur central Open mSupply à part et d'un serveur distant

* Dans mSupply, créez un nouveau site auquel vous attribuerez un dépôt (il peut s'agir d'un dépôt fictif).
* Cochez la case (comme indiqué dans le lien "quelques réglages supplémentaires" ci-dessus).
* Saisissez l'URL du serveur. Notez que cette URL est celle de votre nouveau serveur central Open mSupply. Il sera différent du serveur Open mSupply habituel et du serveur mSupply!

<div class="warning">Le serveur central Open mSupply peut être configuré et se synchroniser parfaitement même si cette URL est fausse. Ce champs n'est utilisé que par les sites distants pour savoir ou se trouve le serveur central Open mSupply.</div>

#### Configurer un site Open mSupply existant en tant que serveur central

* Dans mSupply, modifiez le site Open mSupply, puis
* Cochez la case (comme indiqué dans le lien "paramètres supplémentaires" ci-dessus).
* Saisir l'URL actuelle de Open mSupply en tant qu'URL du serveur central


Lorsque le site Open mSupply passe par le cycle de synchronisation, il interroge le serveur central mSupply et demande l'URL où réside le serveur central Open mSupply, puis il utilise cette URL pour se synchroniser avec le site central Open mSupply.

La synchronisation avec le serveur central Open mSupply s'effectue via l'API V6 et nécessite quelques étapes supplémentaires, comme les étapes push et pull V6 dans l'étape de synchronisation.

![sync steps v6!](/docs/introduction/images/sync_steps_v6.png)

## Types de données dans le serveur central Open mSupply

<div class="note">Depuis la version<code>v2.0.00</code></div>

Données configurées dans le serveur central Open mSuppy:

- Taille d'emballage des articles
- Catalogue des équipements
- Raisons du statut des équipements
- Indicateurs démographiques

### Données synchronisées avec le serveur central Open mSupply

- Equipements
- Fichiers
- Fichier journal des équipements
- Propriétés des dépôts
- Programme d'immunisation et vaccinations

