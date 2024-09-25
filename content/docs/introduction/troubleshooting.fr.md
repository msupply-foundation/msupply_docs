+++
title = "Problemes d'installation et dépannage"
description = "Anomalies et dépannage pour l'installtion d'Open mSupply"
date = 2023-11-10T16:20:00+00:00
updated = 2023-11-10T16:20:00+00:00
draft = false
weight = 50
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Si vous rencontrez des difficultés lors de la configuration ou de l'utilisation d'une installation Open mSupply, pensez à ces mises à jour et correctifs."
toc = true
top = false
+++


## Si vous ne parvenez pas à vous connecter au serveur sur votre machine
Si vous avez installé le client Open mSupply ou une version autonome sur votre machine, mais que vous ne parvenez pas à vous connecter au serveur, essayez les étapes suivantes : 

1. Vérifiez le nom de l'ordinateur. Si vous utilisez un ordinateur Windows, vous pouvez généralement le trouver en passant par le Panneau de configuration > Système et sécurité > Système. Modifiez le nom de l'ordinateur pour vous assurer qu'il ne contient pas de caractères spéciaux et qu'il n'est pas très long. Redémarrez l'ordinateur et essayez de vous connecter à nouveau. 
2. Si l'étape ci-dessus ne fonctionne pas, vous devrez peut-être installer un adaptateur de bouclage réseau sur votre ordinateur à l'aide de [ces instructions](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/install-microsoft-loopback-adapter#method-2). 

## Sous Windows, si le service ne démarre pas

Si le service ne démarre pas sous Windows, cela peut être frustrant ! Il est difficile de savoir quoi changer si le service échoue sans plus de détails. 
Voici quelques trucs à essayer :
1. Vérifiez le journal des applications des événements Windows
2. Assurez-vous que la journalisation est activée et vérifiez le fichier journal Open mSupply
3. Vérifiez que les binaires postgreSQL sont disponibles, s'ils sont utilisés
4. Essayez de modifier le login utilisé par le service

Toutes les erreurs rencontrées lors du démarrage du service sont enregistrées dans le journal des événements Windows. Vérifiez dans le journal des applications si des entrées proviennent d'Open mSupply. Après cela, la journalisation standard est démarrée. Configurez la journalisation au niveau des fichiers, comme indiqué dans le fichier `example.yaml` et essayez de démarrer le service. Toutes les erreurs y seront enregistrées.

**Observateur d'événements Windows :**

![Observateur d'événements](/docs/introduction/images/event_viewer.png)

Une autre possibilité est que le service ne puisse pas démarrer en raison des autorisations. Vous pouvez essayer de définir les informations de connexion au service sur un compte disposant de droits d'administrateur.

![Connexion au service](/docs/introduction/images/service_login.png)

Si vous exécutez la version postgreSQL, il se peut que le service ne parvienne pas à trouver les fichiers binaires postgreSQL. Assurez-vous que le chemin postgreSQL est ajouté à la variable d'environnement `path` : par exemple

```
C:\Program Files\PostgreSQL\14\lib;
```

## Impossible de se connecter

Si vous avez créé un utilisateur, configuré des autorisations et que vous recevez toujours une erreur lorsque vous essayez de vous connecter, voici quelques étapes à essayer :
* Assurez-vous que l'utilisateur a un dépôtcoché comme « dépôt par défaut » dans mSupply [écran administrateur](https://docs.msupply.org.nz/admin:managing_users#login_rights_tab)
* Vérifiez que l'utilisateur a également coché `Connexion en tant qu'utilisateur de bureau`
* Vérifiez que l'utilisateur [a l'autorisation](https://docs.msupply.org.nz/admin:managing_users#permissions_tabs) pour se connecter à un dépôt qui fait partie du site de synchronisation
* Modifiez l'utilisateur dans mSupply et vérifiez que l'utilisateur n'est pas bloqué (vous verrez une erreur spécifique à ce sujet dans Open mSupply)
* Essayez d'actualiser la page si vous utilisez la version Web

<div class="note">Les noms d’utilisateur ne sont pas sensibles aux majuscules et minuscules, mais les mots de passe le sont !</div>