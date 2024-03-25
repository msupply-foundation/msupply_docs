+++
title = "Configuration requise pour Open mSupply"
description = "Configuration requise pour Open mSupply"
date = 2022-06-10T11:38:00+00:00
updated = 2024-03-10T11:38:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = true
+++

## Configuration requise

Open mSupply fonctionne sur un certain nombre de plateformes et a des besoins matériels très modestes pour une installation de base.
Le client peut être un navigateur web, une tablette Android ou un PC sous Windows ou macOS.
Le serveur nécessite un peu plus de mémoire et de capacité de traitement, selon le nombre d'utilisateurs. Il peut fonctionner sur les systèmes d'exploitation Windows, Mac ou Linux.

## Configuration matérielle requise

### Recommandations générales relatives au matériel

- Dans les environnements où les coupures de courant sont fréquentes, il est recommandé de se procurer des ordinateurs portables plutôt que des ordinateurs de bureau. Les ordinateurs portables seront presque toujours la meilleure solution en termes de coût et d'efficacité pour les raisons suivantes :

  - Dans les environnements où l'alimentation électrique est de mauvaise qualité, les ordinateurs portables sont généralement plus fiables que les ordinateurs de bureau avec protection par onduleur (UPS). Dans de tels environnements, les batteries d'UPS tombent en panne en général sous 2 ans. Les batteries d'ordinateur portable ont une meilleure gestion de l'énergie et durent plus longtemps.
  - Même lorsque la batterie d'un ordinateur portable est épuisée, la gestion de l'alimentation provoque normalement l'arrêt de la machine en douceur.
  - Les ordinateurs portables ont un microphone et une caméra intégrés pour la prise en charge technique.
  - Les ordinateurs portables ont un adaptateur Wi-Fi intégré pour la connexion réseau.
  - Les ordinateurs portables sont plus petits et plus légers que les ordinateurs de bureau, et donc moins coûteux à expédier.

- Une imprimante connectée n'est pas absolument nécessaire dans toutes les situations, mais elle l'est dans la plupart des cas. Une imprimante à jet d'encre ou laser est préférable.
- Achetez du matériel pour lequel un bon service après-vente est disponible.
- Achetez des marques réputées pour leur qualité, même si cela signifie acheter une machine plus lente/ancienne.

### Configuration requise pour Windows, Mac et Linux

La configuration matérielle requise varie considérablement en fonction de l'utilisation prévue d'Open mSupply. Voici un guide informatif (en Anglais):

| Machine                                    | Technical Minimum                                                                                                                                              | Recommended                                                                                                                                                                                                                              |
| :----------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows Client machine for use with server | 64 bit processor<br/>Windows 10<br/>4 Gb RAM, 300Mb of disk space                                                                                              | 64 bit processor<br/>Windows 10<br/>8 Gb RAM, 500Mb of disk space                                                                                                                                                                        |
| Mac Client machine for use with server     | 64 bit processor<br/>macOS Mojave (10.14) – macOS Big Sur (11)(Latest release of major version is required, such as 10.14.6)<br/>4 Gb RAM, 300Mb of disk space | 64 bit processor<br/>Mac OS 10.14.6 or later<br/>8 Gb RAM, 500Mb of disk space                                                                                                                                                           |
| Windows server                             | 64 bit processor<br/>Windows 10 Pro or Win server 2019<br/>8 Gb RAM<br/>50 GB HDD/SDD volume with daily backups to an external volume                          | 64 bit processor<br/>Windows Server 2019+<br/>8 Gb RAM<br/>4 x HDD/SDD volumes, 3 configured as RAID1 or RAID5 with hot spare<br/>Daily backups to the fourth volume plus daily off-site backups<br/>Attached to a Smart UPS (see below) |
| Linux client or server                     | 64 bit processor<br/>Ubuntu 20+ or similar<br/>4 Gb RAM<br/>256 Gb storage                                                                                     | 64 bit processor<br/>Ubuntu 20+ or similar<br/>8 Gb RAM<br/>256 Gb storage                                                                                                                                                               |
| Android client or server                   | 64 bit processor<br/>Android 10 or later<br/>4 Gb RAM<br/>64 Gb storage                                                                                        | 64 bit processor<br/>Android 10 or later<br/>4 Gb RAM<br/>64 Gb storage                                                                                                                                                                  |

<div class="Remarque">
L'enregistrement des transactions de stocks est une activité centrale d'Open mSupply. La plupart des données sur les transactions de stocks sont numériques. Un clavier numérique est utile pour les machines sur lesquelles on saisit beaucoup de données..
</div>

### Configuration requise pour mobile/tablette

Connexion à un serveur Open mSupply

Vous pouvez utiliser un navigateur sur une tablette pour vous connecter à un serveur Open mSupply.
La seule exigence est une tablette suffisamment rapide dotée d'un navigateur tel que Chrome ou Firefox.

Solution hors ligne autonome

Une application mobile est également disponible pour les appareils Android pour une solution hors ligne autonome.

Spécifications recommandées

En résumé, Open mSupply mobile fonctionne sur les tablettes Android (pas sur les téléphones car les écrans de téléphone sont trop petits pour une utilisation efficace avec une grande quantité de données).
L'application nécessite au moins Android 5.0 (Lollipop).

|                 | Minimum           | Recommandé        |
| :-------------- | :---------------- | :---------------- |
| Display size    | 9.8 inches        | 10.1 inches       |
| Resolution      | 768 x 1024 pixels | 800 x 1200 pixels |
| Android version | 5.0               | 8.1               |
| Processor       |                   | Quad-core 1.3GHz  |
| Memory          |                   | 1.5 Gb RAM        |

Pour que nous puissions fournir une assistance, l'appareil doit également être compatible avec le logiciel de gestion des appareils mobiles (MDM) et prendre en charge les services Google. Veuillez contacter la [fondation mSupply](https://msupply.foundation/#contact) pour plus de détails.

N'hésitez pas à nous contacter pour des tests et/ou des conseils avant de faire un achat important de matériel.

### Onduleur Intelligent (Smart UPS)

Un onduleur intelligent (UPS)([Uninterruptible Power Supply](https://en.wikipedia.org/wiki/Uninterruptible_power_supply)) détecte quand une batterie est sur le point de mourir et envoie une notification à un logiciel sur le serveur, ce qui déclenche un arrêt ordonné de l'ordinateur.. Pour ce faire, il faut une connexion par câble (généralement USB) entre l'onduleur et l'ordinateur, combinée à un logiciel fonctionnant sur l'ordinateur.

Selon notre expérience, la principale cause de défaillance matérielle des ordinateurs est la corruption des données due à des arrêts brutaux. Cela se produit lorsque l'alimentation de l'ordinateur est coupée instantanément, sans aucun avertissement permettant à l'ordinateur de s'arrêter correctement. Si la machine est "protégée" par un onduleur normal, cela peut toujours se produire lorsque la batterie est épuisée. Même si la machine est théoriquement protégée par un onduleur intelligent, il existe un certain nombre de circonstances où cette protection par UPS échoue :

- La connexion par câble et le logiciel peuvent tomber en panne.
  - Le câble peut se déconnecter.
  - Le logiciel n'est pas configuré correctement.
  - Le logiciel ne démarre pas.
  - Les batteries de l'onduleur se dégradent (généralement dans les 2 ans suivant l'installation dans des environnements sujets aux coupures de courant) et leur capacité est insuffisante pour permettre à l'ordinateur de s'arrêter correctement après avoir reçu la notification de l'onduleur.

Ordinateurs portables vs ordinateurs de bureau
Les ordinateurs portables ont tendance à être beaucoup plus résistants aux coupures de courant :

- L'onduleur intelligent intégré d'un ordinateur portable est très fiable.
- Les batteries internes durent beaucoup plus longtemps que les batteries d'onduleur.
- Même si la batterie interne de l'ordinateur portable se dégrade, la fonction intelligente semble fonctionner de manière beaucoup plus fiable qu'un onduleur autonome communiquant avec un ordinateur tour.

Voici quelques avantages supplémentaires des ordinateurs portables par rapport aux ordinateurs de bureau :

- Coût de transport inférieur :
  - Pour envoyer la machine sur le site.
  - Pour envoyer des pièces de rechange pour une réparation sur site.
  - Pour récupérer la machine sur site pour toute réparation qui ne peut être effectuée sur site.
- Inclusion standard de fonctionnalités telles que le Wi-Fi, le Bluetooth et la caméra, ce qui n'est peut-être pas le cas des ordinateurs de bureau.

La sécurité est un point important avec les ordinateurs portables. Il est plus facile de voler un ordinateur portable dans un bureau qu'un ordinateur de bureau. C'est pourquoi les ordinateurs portables sont normalement configurés avec une fonction de verrouillage physique, telle qu'un emplacement pour verrou Kensington.

Étant donné qu'Open mSupply utilise beaucoup de chiffres (quantités de stock), <strong> il est fortement recommandé d'avoir un clavier avec un pavé numérique </strong>. Les ordinateurs portables plus petits (écran de 14 pouces ou moins) n'en auront pas. Les ordinateurs portables plus petits ont généralement un écran trop petit et peu pratique. Il est donc recommandé de se procurer un ordinateur portable avec un clavier comprenant un pavé numérique, ce qui nécessitera nécessairement un écran plus grand.

Accessoires de productivité pour ordinateurs portables

Voici quelques accessoires de productivité utiles pour les ordinateurs portables :

- Souris filaire (pas sans fil - le remplacement des piles est coûteux et pose des problèmes environnementaux).
- Clavier filaire (pas sans fil - le remplacement des piles est coûteux et pose des problèmes environnementaux).
- Écran externe

## Bande passante et latence requises

Avant de parler de bande passante et de latence, il convient de mentionner notre système de synchronisation, qui a évité des échecs d'installation dans de nombreux pays.

#### Mode hors ligne (synchronisation)

- Bande passante : 128 kbps
- Latence : élevée (par exemple, satellite) acceptable. Les utilisateurs ne la remarqueront pas dans les opérations quotidiennes, car la synchronisation s'effectue en arrière-plan et les demandes de données sont satisfaites à partir de la base de données locale, et non par internet.
- Connectivité : intermittente (une fois par semaine par exemple) acceptable.

#### Mode hébergé dans le cloud (en ligne)

- Téléchargement initial : environ 1 Mo de code Javascript, une connexion de 512 kbps ou plus est donc recommandée (chargement en 10 secondes environ).
- Connexion internet requise : nécessaire pour utiliser Open mSupply dans ce mode.
- Latence : une latence élevée (par exemple, satellite ou connexion surchargée) se traduira par des performances plus lentes.

## Système de sauvegarde

Une fois que vous commencez à utiliser Open mSupply, il est important d'avoir une méthode de sauvegarde de vos données. Dans une installation par défaut, Open mSupply stocke toutes ses données dans un fichier qui devient rapidement volumineux. Vous devez donc disposer d'un périphérique de stockage amovible de grande capacité. Nous recommandons vivement l'utilisation d'un disque dur externe via FireWire (IEEE 1394) ou USB2 pour faciliter le stockage hors site des sauvegardes.

- Si vous n'utilisez pas notre service de sauvegarde en ligne, vous devez pouvoir stocker les données sauvegardées hors site pour éviter les risques de perte dus à un incendie, un vol, etc.

## Antivirus

Les systèmes d'exploitation basés sur Windows sont particulièrement vulnérables aux logiciels malveillants si des précautions ne sont pas prises. Nous recommandons les précautions suivantes :

- Installez un antivirus réputé, y compris une protection Web si l'ordinateur a accès à Internet.
- Désactivez les ports USB - reportez-vous à ce site: URL disable usb port windows ON Microsoft support.microsoft.com pour les méthodes suggérées.
- Assurez-vous que l'accès aux mots de passe permettant des exceptions aux deux mesures ci-dessus est sécurisé.

## mSupply

Une installation de mSupply est actuellement requise pour exécuter Open mSupply (elle permet de gérer un certain nombre d'aspects centralisés du système).
<strong>La version d'mSupply et d'Open mSupply est importante, car toutes les versions ne sont pas compatibles entre elles.</strong>

Le tableau ci-dessous indique la version d'mSupply dont vous aurez besoin pour exécuter Open mSupply :

| Open mSupply    | mSupply  |
| :-------------- | :------- |
| 1.1.00 - 1.1.16 | 7.04.01+ |
| 1.2.00+         | 7.05.05+ |
| 1.4.00+         | 7.09.00+ |

Si vous essayez de vous connecter à un serveur incompatible, vous obtiendrez un message d'erreur ressemblant à ceci :

![server version mismatch!](/docs/introduction/images/version_mismatch.png)
