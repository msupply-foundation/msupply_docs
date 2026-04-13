+++
title = "Dépannage"
description = "Dépannage d'une installation Open mSupply"
date = 2023-11-10T16:20:00+00:00
updated = 2023-11-10T16:20:00+00:00
draft = false
weight = 50
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Si vous rencontrez des difficultés pour configurer ou utiliser une installation Open mSupply, voici quelques pistes et correctifs."
toc = true
top = false
+++

## Vérifier votre configuration

Vous ne savez pas par où commencer ? Une option rapide est de cliquer sur `test-connection-sqlite` ou `test-connection-postgres` dans le répertoire Open mSupply (la version disponible dépend du type de base de données installée).

![Testeur de connexion](images/connection_tester.png)

Cette application effectuera plusieurs vérifications de base :

- **Config** Le fichier de configuration est-il lisible ? Contient-il des erreurs ?
- **Ping** Le serveur peut-il être contacté / répond-il à une requête web ?
- **Base de données** Est-il possible de se connecter au serveur de base de données ?
- **Connexion** Le système est-il capable de se connecter au serveur central mSupply ?
- **Sync v5** mSupply répond-il à une demande de synchronisation ?
- **Sync v6** Le serveur central Open mSupply répond-il à une demande de synchronisation ?
- **Connexion mail** Le serveur mail répond-il à une demande ?

## Impossible de se connecter au serveur sur votre machine

Si vous avez installé le client ou la version autonome d'Open mSupply sur votre machine, mais que vous ne pouvez pas vous connecter au serveur, essayez les étapes suivantes :

1. Vérifiez le nom de l'ordinateur. Sur Windows, vous pouvez généralement le trouver via le Panneau de configuration > Système et sécurité > Système. Modifiez le nom du PC pour qu'il comporte 15 caractères ou moins. Le nom peut contenir des lettres, des chiffres ou des tirets, mais ne peut pas être trop long. Redémarrez l'ordinateur et essayez de vous reconnecter.
2. Si l'étape ci-dessus ne fonctionne pas, vous devrez peut-être installer un adaptateur de bouclage réseau sur votre ordinateur en suivant [ces instructions](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/install-microsoft-loopback-adapter#method-2).

## Sur Windows, si le service ne démarre pas

Si le service ne démarre pas sur Windows, c'est frustrant ! Il est difficile de savoir quoi changer si le service échoue silencieusement.
Voici quelques pistes :

1. Vérifiez le journal des événements Application de Windows
2. Assurez-vous que la journalisation est activée et consultez le fichier journal d'Open mSupply
3. Vérifiez que les binaires postgreSQL sont disponibles, si utilisés
4. Essayez de modifier le compte de connexion utilisé par le service

Les erreurs rencontrées lors du démarrage du service sont enregistrées dans le journal des événements Windows — consultez le journal Application pour voir s'il y a des entrées provenant d'Open mSupply. Ensuite, la journalisation standard démarre ; configurez la journalisation au niveau fichier comme indiqué dans le fichier `example.yaml` et essayez de démarrer le service. Les erreurs y seront enregistrées.

**Observateur d'événements Windows :**

![Observateur d'événements](images/event_viewer.png)

Une autre possibilité est que le service ne puisse pas démarrer en raison de permissions. Vous pouvez essayer de définir les informations de connexion du service sur un compte disposant de droits administratifs.

![Connexion au service](images/service_login.png)

Si vous utilisez la version postgreSQL, il peut y avoir un problème avec le service qui ne trouve pas les fichiers binaires postgreSQL. Assurez-vous que le chemin postgreSQL est ajouté à la variable d'environnement `path`, par exemple :

```
C:\Program Files\PostgreSQL\14\lib;
```

## Impossible de se connecter

Si vous avez créé un utilisateur, configuré les permissions, et que vous obtenez toujours une erreur lors de la connexion, voici quelques étapes à essayer :

- Assurez-vous que l'utilisateur a un dépôt coché comme « Dépôt par défaut » dans l'[écran d'administration des utilisateurs](https://docs.msupply.org.nz/admin:managing_users#login_rights_tab) mSupply
- Vérifiez que l'utilisateur a également `Connexion en tant qu'utilisateur Desktop` coché
- Vérifiez que l'utilisateur [dispose de la permission](https://docs.msupply.org.nz/admin:managing_users#permissions_tabs) de se connecter à un dépôt faisant partie du site de synchronisation
- Modifiez l'utilisateur dans mSupply et vérifiez que l'utilisateur n'est pas bloqué (vous verrez une erreur spécifique à ce sujet dans Open mSupply)
- Essayez d'actualiser la page si vous utilisez la version web

<div class="note">Les noms d'utilisateur ne sont pas sensibles à la casse, mais les mots de passe le sont !</div>

## Android : Les boutons de la barre inférieure ne répondent pas

Sur certains appareils Android, en particulier ceux fonctionnant avec des versions plus récentes d'Android (ex. Android 16), la barre de navigation système peut chevaucher la barre inférieure d'Open mSupply. Cela peut bloquer l'accès au bouton **Aide**, au **sélecteur de dépôt**, au bouton **utilisateur** et au **sélecteur de langue**.

Ce problème survient lorsque la barre de navigation Android est configurée pour utiliser des **Boutons** (les trois boutons à l'écran pour retour, accueil et applications récentes) plutôt que les **Gestes de glissement**.

Pour résoudre ce problème, modifiez le paramètre de la barre de navigation sur votre appareil Android :

1. Ouvrez les **Paramètres** de votre appareil
2. Allez dans **Affichage**
3. Appuyez sur **Barre de navigation**
4. Sélectionnez **Gestes de glissement** au lieu de **Boutons**

<div class="note">L'emplacement exact de ce paramètre peut varier selon le fabricant de votre appareil et la version d'Android. Si vous ne le trouvez pas dans Affichage, essayez de rechercher « Barre de navigation » dans la recherche des Paramètres.</div>
