+++
title = "Intégration avec SAGE"
description = "L'intégration Open mSupply avec SAGE."
date = 2022-03-17
updated = 2022-03-17
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "L'intégration d'Open mSupply avec le logiciel de comptabilité et de gestion financière SAGE"
toc = true
+++

## SAGE
[Sage](https://www.sage.com) est un logiciel de gestion financière dont l'utilisation est répandue dans les dépôts médicaux centraux, notamment dans les pays francophones.

Open mSupply s'intègre à Sage à l'aide d'une application d'interopérabilité personnalisée que la mSupply Foundation a développée et qu'elle maintient.

### Versions de Sage Supportées
**Sage 100 series** - Possède une interface COM très complexe.

Notre intégration utilise une application personnalisée qui s'exécute sur le serveur SAGE et sert d'intermédiaire entre la l' API d'Open mSupply et l'API (peu avenante) de SAGE 100. ;-)

L'application est bidirectionnelle : elle reçoit les commandes des installations utilisant mSupply et les transmet à SAGE pour exécution. Une fois la commande expédiée depuis SAGE, l'application crée le projet d'expédition entrant correspondant pour l'installation qui a passé la commande, leur permettant de recevoir des marchandises sans saisie de données fastidieuse.
Le seul travail à effectuer est la vérification du produit, du lot, de la date d'expiration et de la quantité, ainsi que tout ajustement saisi avant que les marchandises puissent être reçues en stock.