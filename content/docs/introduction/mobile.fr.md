+++
title = "Solution Mobile"
description = "Open mSupply sur mobile."
date = 2023-02-24T18:20:00+00:00
updated = 2023-02-24T18:20:00+00:00
draft = false
weight = 6
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Comment démarrer avec l'application mobile Open mSupply"
toc = true
+++

## Prise en main

Au premier lancement de l'application mobile, vous serez accueilli par un écran de bienvenue vous demandant de choisir l'un des deux modes de fonctionnement :

- **Client** L'application mobile se connecte à un serveur sur votre réseau local.
- **Serveur** L'application exécute localement une version complète du serveur Open mSupply. Vous pouvez configurer ce serveur pour qu'il se synchronise avec un serveur central.

![Mobile welcome screen](/docs/introduction/images/mobile_welcome.png)

Cliquez simplement sur le bouton de l'option souhaitée. Ce choix peut être modifié ultérieurement. Si vous accédez aux paramètres après avoir configuré votre application, vous disposerez d'une option supplémentaire sur mobile.

![Mobile settings](/docs/introduction/images/mobile_settings.png)

## Mode Client

Après avoir sélectionné le mode client, vous verrez une liste des serveurs disponibles. Il s'agit des serveurs présents sur votre réseau local.

Vous verrez peut-être la mention `[ Non Configuré ]` à côté de certains serveurs, ce qui indique que le serveur n'a pas encore été configuré pour se synchroniser avec un serveur central.

![Mobile server selection](/docs/introduction/images/mobile_server_selection.png)

Cliquez sur le nom du serveur pour le sélectionner. Si vous souhaitez changer de serveur plus tard, vous pouvez le faire à partir de l'écran de connexion. Sur mobile, l'écran de connexion comporte deux éléments supplémentaires, comme indiqué. Cliquer sur l'icône en forme de crayon vous redirigera vers l'écran de sélection du serveur.

![Mobile login](/docs/introduction/images/mobile_login.png)

## Mode Serveur

En mode serveur, vous configurez le serveur pour qu'il fonctionne sur l'appareil mobile et se synchronise avec un serveur central. L'écran d'initialisation est le même que pour les versions bureau et web, avec les détails du serveur en bas à droite :

![Mobile initialisation](/docs/introduction/images/mobile_initialisation.png)

## Visualisation des journaux

Dans l'application Android, vous verrez une section supplémentaire. Elle vous permet de changer de mode entre client et serveur, et de visualiser le fichier journal :

![Mobile settings](/docs/introduction/images/mobile_settings.png)

Cliquez sur le bouton `Afficher` pour ouvrir une fenêtre affichant le journal du serveur :

![Mobile log viewer](/docs/introduction/images/mobile_view_log.png)

À partir de là, vous pouvez enregistrer le journal en tant que fichier texte sur votre appareil : cliquez simplement sur `Enregistrer` et choisissez un emplacement pour sauvegarder le fichier.