+++
title = "Configuration requise"
description = "Configuration requise pour Open mSupply"
date = 2024-06-10T11:38:00+00:00
updated = 2024-06-10T11:38:00+00:00
draft = false
weight = 30
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = true
+++

## Configuration requise pour Open mSupply

Open mSupply fonctionne sur un certain nombre de plateformes et a des besoins matériels très simples pour une installation de base. Le client peut être un navigateur web, une tablette Android ou un PC sous Windows, linux ou macOS. Le serveur nécessite un peu plus de mémoire et de capacité de traitement, selon le nombre d'utilisateurs.

## Configuration matérielle requise

### Recommandations générales relatives au matériel

- Dans les environnements où les coupures de courant sont fréquentes, il est fortement recommandé de se procurer des ordinateurs portables plutôt que des ordinateurs de bureau. Les ordinateurs portables seront presque toujours la meilleure solution en termes de coût et d'efficacité pour les raisons suivantes :
  - Dans les environnements où l'alimentation électrique est de mauvaise qualité, les ordinateurs portables seront généralement plus fiables que les ordinateurs de bureau avec protection par onduleur (UPS). Dans ces conditions, les batteries d'UPS tombent en panne en général sous 2 ans. Les batteries d'ordinateur portable ont une meilleure gestion de l'énergie et durent plus longtemps.
  - Même lorsque la batterie d'un ordinateur portable est épuisée, la gestion de l'alimentation provoque normalement l'arrêt de la machine en douceur.
  - Les ordinateurs portables ont un microphone et une caméra intégrés pour la prise en charge technique.
  - Les ordinateurs portables ont un adaptateur Wi-Fi intégré pour la connexion réseau.
  - Les ordinateurs portables sont plus petits et plus légers que les ordinateurs de bureau, et donc moins coûteux à expédier.
- Une imprimante connectée n'est pas absolument nécessaire dans toutes les situations, mais elle l'est dans la plupart des cas. Une imprimante à jet d'encre ou laser est préférable.
- Achetez du matériel pour lequel un bon service après-vente est disponible.
- Achetez des marques réputées pour leur qualité (même si cela signifie acheter une machine plus lente/ancienne).

### Configuration requise pour ordinateurs (portables ou de bureaux)

La configuration matérielle requise varie considérablement en fonction de l'utilisation prévue d'Open mSupply. Voici un guide approximatif :

| Ordinateur                             | Minimum Technique                                                                                                                                                                                        | Recommandations                                                                                                                                                                                                                                         |
| :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Client Windows à utiliser avec serveur | Processeur 64 bit <br/>Windows 10<br/>4 Gb RAM, 300Mb d'espace disque                                                                                                                                    | Processeur 64 bit<br/>Windows 10<br/>8 Gb RAM, 500Mb d'espace disque                                                                                                                                                                                    |
| Client Mac à utiliser avec serveur     | Processeur 64 bit <br/>macOS Mojave (10.14) – macOS Big Sur (11)<br/><i/>(La dernière version de chaque mise à jour importante est nécessaire, par ex, 10.14.6)</i><br/> 4 Gb RAM, 300Mb d'espace disque | Processeur 64 bit<br/>Mac OS 10.14.6 ou version plus récente <br/>8 Gb RAM, 500Mb d'espace disque                                                                                                                                                       |
| Serveur Windows                        | Processeur 64 bit<br/>Windows 10 Pro ou serveur Windows 2019<br/>8 Gb RAM<br/> Volume 50 GB HDD/SDD avec des backups journaliers vers un volume externe                                                  | Processeur 64 bit<br/>Serveur Windows 2019+<br/>8 Gb RAM<br/>4 volumes HDD/SDD, 3 configurés comme RAID1 ou RAID5 avec hot spare<br/>Backups journaliers vers le quatrième volume + backups journaliers hors site<br/>Attaché à un onduleur intelligent |
| Client ou serveur Linux                | Processeur 64 bit<br/>Ubuntu 20+ ou similaire<br/>4 Gb RAM<br/>256 Gb de stockage                                                                                                                        | Processeur 64 bit<br/>Ubuntu 20+ ou similaire<br/>8 Gb RAM<br/>256 Gb de stockage                                                                                                                                                                       |

<div class="note">
L'enregistrement des transactions de stocks est une activité centrale d'Open mSupply. La plupart des données sur les transactions de stocks sont numériques. Un clavier numérique est souvent utile pour les machines sur lesquelles on saisit beaucoup de données.
</div>

### Configuration requise pour mobile/tablette

Il est possible d'utiliser un navigateur web sur une tablette pour se connecter à un serveur Open mSupply et la seule configuration requise dans ce cas est une tablette suffisamment rapide ayant un navigateur tel que chrome ou firefox.

Pour la solution autonome, hors ligne, une application mobile et aussi disponbile pour les appareils android.

Spécifications recommandées:
En résumé, Open mSupply mobile fonctionne sur tablette Android (pas sur les téléphones car les écrans de téléphone sont trop petits pour une utilisation efficace avec une grande quantité de données).
L'application nécessite au moins Android 10.

|                 | Minimum           | Recommandé        |
| :-------------- | :---------------- | :---------------- |
| Taille écran    | 9.8 inches        | 10.1 inches       |
| Résolution      | 768 x 1024 pixels | 800 x 1200 pixels |
| Version Android | 10                | 14                |
| Processeur      | 64 bit            | 64 bit            |
| RAM             | 2 Gb              | 4 Gb              |
| Stockage        | 32 Gb             | 64 Gb             |

Pour que nous puissions fournir une assistance, l'appareil doit également être compatible avec le logiciel de gestion des appareils mobiles (MDM) et prendre en charge les services Google. Veuillez contacter [la Fondation mSupply](https://msupply.foundation/#contact) pour plus de détails.

Recommandation avant achat: N'hésitez pas à nous contacter pour des tests et/ou des conseils avant de faire un achat important de matériel.

### Onduleur intelligent (UPS)

Un onduleur intelligent (UPS) ([Uninterruptible Power Supply](https://en.wikipedia.org/wiki/Uninterruptible_power_supply)) détecte une batterie sur le point de s'épuiser et envoie une notification au programme afin d'éteindre l'ordinateur en douceur. Pour ce faire, il faut une connexion par câble (généralement USB) entre l'onduleur et l'ordinateur, combinée à un logiciel fonctionnant sur l'ordinateur.

Selon notre expérience, la principale cause de défaillance matérielle des ordinateurs est la corruption des données due à des arrêts brutaux. Cela se produit lorsque l'alimentation de l'ordinateur est coupée instantanément, sans aucun avertissement permettant à l'ordinateur de s'arrêter correctement. Si la machine est "protégée" par un onduleur normal, cela peut toujours se produire lorsque la batterie est épuisée. Même si la machine est théoriquement protégée par un onduleur intelligent, il existe un certain nombre de circonstances où cette protection par UPS échoue :

- La connexion par câble et le logiciel peuvent tomber en panne.
  - Le câble peut se déconnecter.
  - Le logiciel n'est pas configuré correctement.
  - Le logiciel ne démarre pas.
- Les batteries de l'onduleur se dégradent (généralement dans les 2 ans suivant l'installation dans des environnements sujets aux coupures de courant) et leur capacité est insuffisante pour permettre à l'ordinateur de s'arrêter correctement après avoir reçu la notification de l'onduleur.

Les ordinateurs portables ont tendance à être plus résistants aux coupures de courant :

- Les UPS intégrés aux ordinateurs portables sont reconnus comme fiables
- Les batteries d'ordinateurs portables durent plus longtemps que celles des onduleurs intelligents autonomes
- Même si la batterie d'un ordinateur portable se dégrade, la fonction onduleur intelligent reste plus efficace qu'un UPS connecté à un ordinateur de bureau.

Voici quelques avantages supplémentaires des ordinateurs portable sur les ordinateurs de bureau :

- Frais de transport inférieurs:
  - Pour envoyer l'ordinateur sur site
  - Pour envoyer sur site des pièces détachées en cas de réparation
  - Pour rapatrier l'appareil en cas de grosse reparations qui ne peuvent pas se faire sur place
- Les ordinateurs portables ont la plupart du temps certaines fonctionnalités par défaut comme une caméra, une carte WiFi ou le Bluetooth contrairement aux ordinateurs de bureau (type tour).

Un des sujets d'inquiétude autour des ordinateurs portables reste la sécurité. Il est plus facile de voler un ordinateur portable dans un bureau que de voler un ordinateur type tour. C'est pour cette raison qu'une fonctionnalité antivol telle que [l'encoche de sécurité Kensington](https://fr.wikipedia.org/wiki/Encoche_de_s%C3%A9curit%C3%A9_Kensington) est généralement installée par défaut.

Étant donné qu'Open mSupply utilise beaucoup de chiffres (quantités de stock), <b/>il est fortement recommandé d'avoir un clavier avec un pavé numérique</b>. Les ordinateurs portables plus petits (écran de 14 pouces ou moins) n'en auront pas. Ces derniers ont généralement un écran trop petit et peu pratique. Il est donc recommandé de se procurer un ordinateur portable avec un clavier comprenant un pavé numérique, ce qui permettra d'avoir un écran suffisamment grand.

Voici quelques accessoires de productivité utiles pour les ordinateurs portables :

- Souris filaire (pas sans fil - le remplacement des piles est coûteux et pose des problèmes environnementaux).
- Clavier filaire (pas sans fil - le remplacement des piles est coûteux et pose des problèmes environnementaux).
- Écran externe

## Bande passante et latence requises

Avant de parler de bande passante et de latence, il convient de mentionner notre système de synchronisation, qui a évité des échecs d'installation dans de nombreux pays !

#### Mode hors ligne (synchronisation)

- Bande passante : 128 kbps
- Latence : élevée (par exemple, satellite) acceptable. Les utilisateurs ne la remarqueront pas dans les opérations quotidiennes, car la synchronisation s'effectue en arrière-plan et les demandes de données sont satisfaites à partir de la base de données locale, et non par internet.
- Connectivité : intermittente (une fois par semaine par exemple est un rythme acceptable).

#### Mode hébergé dans le cloud (en ligne)

- Téléchargement initial du code Javascript est d'environ 1 Mo, donc une connexion de 512 kbps ou plus est recommandée (chargement en 10 secondes environ).
- Connexion internet : nécessaire pour utiliser Open mSupply dans ce mode.
- Latence : une latence élevée (par exemple, satellite ou connexion surchargée) se traduira par des performances plus lentes.

## Système de sauvegarde

Une fois que vous commencez à utiliser Open mSupply, il est important d'avoir une méthode de sauvegarde de vos données. Dans une installation par défaut, Open mSupply stocke toutes ses données dans un fichier qui devient rapidement volumineux. Vous devez donc disposer d'un périphérique de stockage amovible de grande capacité. Nous recommandons vivement l'utilisation d'un disque dur externe via FireWire (IEEE 1394) ou USB2 pour faciliter le stockage hors site des sauvegardes.

- Si vous n'utilisez pas notre service de sauvegarde en ligne, vous devez pouvoir stocker les données sauvegardées hors site pour éviter les risques de perte dus à un incendie, un vol, etc.

## Antivirus

Les systèmes d'exploitation basés sur Windows sont particulièrement vulnérables aux logiciels malveillants si des précautions ne sont pas prises. Nous recommandons les précautions suivantes :

- Installez un antivirus réputé, y compris une protection Web si l'ordinateur a accès à Internet.
- Désactivez les ports USB - reportez-vous à [ce site](https://sospc.name/desactiver-ports-usb/) pour les méthodes suggérées

Assurez-vous que l'accès aux mots de passe permettant des exceptions aux deux mesures ci-dessus est sécurisé.

## Base de données

Open mSupply peut prendre en charge SQLite et postgreSQL en tant que serveur de bases de données. Le choix se fait lors de l'installation. Nous conseillons PostgreSQL dans le cas d'un serveur centralisé ou à usage élevé car ce dernier s'est avéré être plus performant que SQLite. PostgreSQL nécessite une installation à part - il est possible d'utiliser une version existante, installer Open mSupply à part, ou cocher la case correspondante lors de l'installation du serveur.

La version minimum de PostgreSQL est la version 12.

## Serveur Central

Une installation de mSupply est actuellement requise pour exécuter Open mSupply (elle permet de gérer un certain nombre d'aspects centralisés du système).

A partir de v2.0.00, le serveur central Open mSupply est aussi requis pour une synchronisation réussie. Voir en anglais [Open mSupply central server](/docs/getting_started/central-server/) et [Open mSupply central server site configuration in mSupply](https://docs.msupply.org.nz/synchronisation:sync_sites#open_msupply_central_server_settings) pour plus de détails.

Vous obtiendrez le message suivant si le serveur central n'est pas configuré :

![v6 not configured!](images-en/v6_not_configured.png)

Les versions du serveur central mSupply et Open mSupply sont importantes, car toutes les versions ne sont pas compatibles entre elles.

Le tableau ci-dessous indique la version de mSupply dont vous aurez besoin pour exécuter Open mSupply :

| Open mSupply Remote | mSupply Central | Open mSupply Central |
| :------------------ | :-------------- | -------------------- |
| 1.1.00 - 1.1.16     | 7.04.01+        | N/A                  |
| 1.2.00+             | 7.05.05+        | N/A                  |
| 1.4.00+             | 7.09.00+        | N/A                  |
| 2.0.00+             | 7.14.04+        | 2.0.00+              |
| 2.1.00+             | 7.14.04+        | 2.1.00+              |
| 2.2.00+             | 7.14.04+        | 2.2.00+              |

Si vous essayez de vous connecter a un serveur incompatible, vous obtiendrez le message suivant:

![server version mismatch!](images-en/version_mismatch.png)
