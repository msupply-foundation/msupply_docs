+++
title = "Feuille de route"
description = "Feuille de route pour Open mSupply."
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 20
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = true
+++

Une mise à jour de cette feuille de route est prévue toutes les six semaines.
Elle couvre uniquement les chantiers validés en cours. La liste complète de fonctionnalités prévues est bien plus importante.

### Feuille de route
![Feuille de route](/docs/introduction/images/roadmap_fr.png)


### Fonctionnalités prévues

| Thème | Transaction | Fonctionnalité/Capacité |
|--------------------------------------------------------------- ----|--------------------------------------------------|-- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------|
| QUANTIFICATION | Planification de la demande | Calcul des besoins en volume basé sur des règles définis multiplié par le nombre de niveau de distribution et le nombre de périodes définies |
| QUANTIFICATION | Planification de l'approvisionnement | |
| QUANTIFICATION | Planification de la demande | Modification manuelle des prévisions |
| APPROVISIONNEMENT | Appels d'offre/Demande de devis | Acheteur : créer un nouvel appel d'offres |
| APPROVISIONNEMENT | Appels d'offre/Demande de devis | Acheteur : publication d'appel d'offres auprès d'une liste de fournisseurs |
| APPROVISIONNEMENT | Appels d'offre/Demande de devis | Acheteur : Création de demande de devis électronique (EDI 840) |
| APPROVISIONNEMENT | Appels d'offre/Demande de devis | Acheteur : Création de prix de référence |
| APPROVISIONNEMENT | Appels d'offre/Demande de devis | Fournisseurs : peuvent importer leur réponse dans Open mSupply (portail web) |
| APPROVISIONNEMENT | Appels d'offre/Demande de devis | Acheteur : Réception manuelle de devis des fournisseurs |
| APPROVISIONNEMENT | Appels d'offre/Demande de devis | Acheteur : Réception automatique de devis des fournisseurs (portail web) |
| APPROVISIONNEMENT | Appels d'offre/Demande de devis | Acheteur : Réception d'une réponse électronique à une demande de devis (EDI 843 / PEPPOL) |
| APPROVISIONNEMENT | Appels d'offre/Demande de devis | Acheteurs : évaluation des devis reçus |
| APPROVISIONNEMENT | Appels d'offre/Demande de devis | Acheteurs : sélection des fournisseurs choisis (Attribution du travail) |
| APPROVISIONNEMENT | Appels d'offre/Demande de devis | Gestion des contrats et subventions |
| APPROVISIONNEMENT | Bons de commande | Création de bon de commande à partir d'un appel d'offres |
| APPROVISIONNEMENT | Bons de commande | Création de bon de commande pré-rempli |
| APPROVISIONNEMENT | Bons de commande | Création de bon de commande vierge |
| APPROVISIONNEMENT | Bons de commande | Création de bon de commande électronique (EDI 850) |
| APPROVISIONNEMENT | Bons de commande | Ajout d'articles issus de listes maitresses |
| APPROVISIONNEMENT | Bons de commande | Catégories de bons de commande |
| APPROVISIONNEMENT | Bons de commande | Attributs des lignes de commande |
| APPROVISIONNEMENT | Gestion des fournisseurs | Créer/Afficher/Modifier des fournisseurs |
| APPROVISIONNEMENT | Avis préalable d'expédition  | Créer un APE manuel à partir d'un bon de commande |
| APPROVISIONNEMENT | Avis préalable d'expédition | Recevoir un APE électronique (EDI 856) |
| APPROVISIONNEMENT | Bons de livraison | Impression de bons de livraison (pdf, csv) à partir d'une livraison (lorsque le statut VÉRIFIÉ est confirmé) |
| APPROVISIONNEMENT | Paiements | Impression de facture fournisseur (pdf, csv) à partir d'une livraison (lorsque le statut VÉRIFIÉ est confirmé) |
| APPROVISIONNEMENT | Paiements | Enregistrement des paiements faits aux fournisseurs (à partir d'une facture fournisseur) |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Accepter la notification d'arrivée de l'expédition |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Réception automatique des données de livraisons avant l'arrivée |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Enregistrement manuel des données de livraisons avant l'arrivée |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Affichage des différence entre les quantités commandées (requisition ou PO) et les quantités notifiées |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Notifier les structures concernées des différences |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Rejet de la commande si nécessaire |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Affichage des besoins de stockage en fonction des quantités expédiées |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Affichage de l'espace de stockage disponible par type de stockage |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Signalement en case d'espace de stockage insuffisant (par type de stockage) |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Confirmation de l'arrivée de la livraison |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Enregistrement manuel des données de livraison à l'arrivée |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Scan de codes barres pour la réception de marchandises |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Signalement des différences par rapport aux marchandises reçues |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Enregistrement des indicateurs et données en cas de dégradations, anomalies, non concordance des lots par ligne d'articles |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Rédaction de notes en cas d'anomalies et variations des marchandises reçues |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Signalement des dégradations et anomalies aux intervenants appropriés |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Confirmation du transfert des marchandises dans le stock (mise à jour des registres d'inventaire) |
| LIVRAISON | Livraisons (ex Facture fournisseur) | Impression de bons de réception, de formulaire de sortie de stock, autorisations de réception, etc... |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Affectation d'un opérateur à une livraison pour la mise en rayon|
| LIVRAISON | Livraisons (ex Factures fournisseur) | Application de Mise en rayon : affichage de la liste des articles livrés et des instructions pour le rayonnage. |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Affichage des règles de stockage des articles (par ex, contrôle des températures) |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Affichage de l'emplacement de stockage par défaut pour chaque article |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Proposition d'un espace de stockage pour chaque article en fonction de règles définies (par ex, disponibilité actuelle de l'espace, catégories ABC) |
| LIVRAISON | Livraisons (ex Factures fournisseur) | Impression d'étiquettes pour palettes/étagères spécifiant le statut des marchandises, le cas échéant |
| GESTION DES STOCKS | Emplacements | Créer/modifier les emplacements de stockage (Allée, Bac, rayons , etc.) |
| GESTION DES STOCKS | Emplacements | Définition de la hiérarchie des emplacements de stockage |
| GESTION DES STOCKS | Emplacements | Définition des conditions de stockage (chaîne du froid, volume, restrictions selon les articles, restrictions selon utilisation, etc...) |
| GESTION DES STOCKS | Emplacements | Enregistrement des températures par lieux de stockage (voir catégorie CHAÎNE DU FROID) |
| GESTION DES STOCKS | Articles - Mouvement de stock et expiration | Enregistrement du statut PCV (Pastille de contrôle du vaccins) |
| GESTION DES STOCKS | Emplacements | Enregistrement du statut des conditions de congelation |
| GESTION DES STOCKS | Articles - Listes maitresses | Définition des niveaux de seuil de température par produit, le cas échéant |
| GESTION DES STOCKS | Articles - Mouvement de stock et expiration | Alertes en cas de dépassement des seuils|
| GESTION DES STOCKS | Articles - Mouvement de stock et expiration | Suivi des lots et dates d'expiration |
| GESTION DES STOCKS | Articles - Mouvement de stock et expiration | Transfer de stock d'un emplacement à un autre |
| GESTION DES STOCKS | Articles - Mouvement de stock et expiration | Affichage et envoi d'alertes/notifications pour les expirations en cours |
| GESTION DES STOCKS | Articles - Mouvement de stock et expiration | Affichage et envoi d'alertes et notifications en case de rupture de stock, surstock, sous-stock |
| GESTION DES STOCKS | Articles - Listes maitresses | Signalement d'articles dangereux, le cas échéant |
| GESTION DES STOCKS | Inventaire | Créer/modifier un inventaire pour une liste d'articles |
| GESTION DES STOCKS | Inventaire | Filtres pour le stock à inclure : par attributs d'article (catégorie, rayon, date de péremption, etc...) |
| GESTION DES STOCKS | Inventaire | Filtres pour le stock à inclure : par emplacement |
| GESTION DES STOCKS | Inventaire | Filtres le stock à inclure : par liste maitresse |
| GESTION DES STOCKS | Inventaire | Impression des fiches d'inventaire (format PDF) |
| GESTION DES STOCKS | Inventaire | Impression des fiches d'inventaire (format CSV) |
| GESTION DES STOCKS | Inventaire | |
| GESTION DES STOCKS | Inventaire | Application d'inventaire : charger la feuille d'inventaire sur un appareil mobile |
| GESTION DES STOCKS | Inventaire | Application d'inventaire : Enregistrement d'un article dans l'inventaire avec un lecteur de codes barres / appareil photo d'un téléphone mobile |
| GESTION DES STOCKS | Inventaire | Lecture de codes barres pour l'inventaire |
| GESTION DES STOCKS | Inventaire | Créer des ajustements d'inventaire (pour finaliser l'inventaire) |
| GESTION DES STOCKS | Inventaire | Ajout de notes en cas d'ajustement d'inventaire |
| GESTION DES STOCKS | Inventaire | Décomptes de cycles |
| GESTION DES STOCKS | Kits | |
| GESTION DES STOCKS | Ajustements d'inventaire | |
| GESTION DES STOCKS | Reconditionnements | |
| GESTION DES STOCKS | Articles - Mouvement de stock et expiration | Fractionner des lignes de stock |
| GESTION DES STOCKS | Articles - Mouvement de stock et expiration | Fusionner des lignes de stock |
| GESTION DES STOCKS | Réapprovisionnement des emplacements (Pickface) | |
| GESTION DES STOCKS | Gestion des opérateurs | Créer/modifier des opérateurs d'entrepôt |
| DISPATCH | Expédition | Création de bordereau de prélèvement à partir d'une expédition alloué |
| DISPATCH | Expédition | Bordereau de prélèvement : Afficher le(s) emplacement(s) actuel(s) pour les articles réquisitionnés |
| DISPATCH | Expédition | Bordereau de prélèvement : créer un bordereau de prélèvement organisé par emplacements de stockage |
| DISPATCH | Expédition | Bordereau de prélèvement : Afficher les dates de péremption du stock |
| DISPATCH | Expédition | Application de bordereau de prélèvement : charger un bordereau de prélèvement sur un appareil mobile. |
| DISPATCH | Expédition | Lecture de codes barres et préparation de commandes |
| DISPATCH | Expédition | Confirmation de l'expédition comme préparée |
| DISPATCH | Expédition | Commande en pack |
| DISPATCH | Expédition | Commande en pack : boites / mise en carton |
| DISPATCH | Expédition | Impression de documents pour l'expédition : liste de colisage, facture client, bon de livraison |
| DISPATCH | Expédition | Confirmation de l'envoi de l'expédition (Mise à jour des registres d'inventaire) |
| TRANSPORTS | Commande/demande de transport | Rédaction des commandes de transport |
| TRANSPORTS | Commande/demande de transport | Attribution d'une ou plusieurs expéditions "préparées" à la commande de transport (même trajet ou destination) |
| TRANSPORTS | Commande/demande de transport | Définition de la charge utile, du volume et des dimensions |
| TRANSPORTS | Commande/demande de transport | Sélectionner le mode et le type de transport |
| TRANSPORTS | Commande/demande de transport | Définition des critères de contrôle de la température |
| TRANSPORTS | Commande/demande de transport | Confirmation de la commande de transport |
| TRANSPORTS | Commande/demande de transport | Planification des ressources de transport |
| TRANSPORTS | Commande/demande de transport | Enregistrer/Afficher les instructions de livraison |
| TRANSPORTS | Commande/demande de transport | Enregistrer/afficher le numéro de suivi, le véhicule, le conducteur |
| TRANSPORTS | Commande/demande de transport | Confirmation du chargement de l'expédition |
| TRANSPORTS | Commande/demande de transport | Suivi de la localisation et mise à jour de l'ETA (Heure d'arrivée prévue) |
| TRANSPORTS | Commande/demande de transport | Enregistrement de l'historique de transport (localisation, température) |
| TRANSPORTS | Commande/demande de transport | Confirmation de la livraison / imprimer/envoyer une preuve de livraison |
| TRANSPORTS | Transporteur | Créer/modifier des transporteurs |
| TRANSPORTS | Itinéraire | Créer/modifier des itinéraires |
| TRANSPORTS | Gestion de flotte | |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Suggestion des quantités à commander en fonction de l'historique des données de consommation (par exemple, CMM) |
| RÉQUISITIONS | Réquisition Générale (Commande interne)| Suggestion des quantités à commander en fonction du seuil minimum de quantité  |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Suggestion des quantités à commander en fonction des données de dossiers/registres patients |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Estimation des besoins de stock en agrégeant les réquisitions des niveaux intermédiaires |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Estimation des besoins de stocks en fonction des populations cibles |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Estimation des quantités de stock à commander sur la base de prévisions statistiques |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | estimation des points de besoins en stock sur la base de critères définis par l'utilisateur |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Afficher l'historique des données de consommation |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Afficher la quantité actuelle disponible et utilisable de chaque article en stock |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Affichage des commandes en cours et des livraisons|
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Affichage des expéditions  en cours et de l'utilisation prévue |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Afficher les niveaux de stock actuels (SOH) à tous les niveaux nécessaires |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Afficher les dates de péremption du stock disponible |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Générer des quantités à commander suggérées (demandées - SOH) = Qté suggérée |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Afficher le délai d'exécution de la commande |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Afficher le coût de l'article au moment où la réquisition est générée |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Calculer le coût de la commande au moment où la réquisition est générée |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Soumettre la réquisition (de façon électronique ou manuelle) |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Mise à disposition d'un mécanisme de validation/refus de la réquisition aux niveaux appropriés |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | L'approbateur peut modifier la réquisition, si nécessaire |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Enregistrer la date de validation de la réquisition |
| DISTRIBUTION PATIENT | Dispensation | Enregistrer les médicaments délivrés à un patient individuel |
| DISTRIBUTION PATIENT | Ordonnance | Créer/modifier une ordonnance |
| DISTRIBUTION PATIENT | Ordonnance | Abréviations |
| DISTRIBUTION PATIENT | Ordonnance | Interactions médicamenteuses groupées|
| DISTRIBUTION PATIENT | Ordonnance | Paiements et reçus / caisse enregistreuse |
| DISTRIBUTION PATIENT | Ordonnance | Créer/modifier des patients |
| DISTRIBUTION PATIENT | Ordonnance | Créer/modifier des prescripteurs |
| DISTRIBUTION PATIENT | Ordonnance | Renouvellement |
| APPROVISIONNEMENT | Bon de réception pour vérifier le stock sur les bons de commande | Créer un bon de réception / une livraison |
| APPROVISIONNEMENT | Bon de réception pour vérifier le stock sur les bons de commande | Ajouter des lignes d'un bon de commande à une livraison |
| CHAÎNE DU FROID | Contrôle des températures | Affichage et envoi d'alertes en cas d'excursions de température (sur le tableau de bord de l'écran d'accueil), affectation d'un ou plusieurs capteurs de température à un emplacement de stockage, définition du seuil de température par article |
| CHAÎNE DU FROID | Contrôle des températures | Synchronisation des relevés de température vers le serveur pour alimenter le tableau de bord mSupply (via l'application Cold Chain) |
| CHAÎNE DU FROID | Contrôle des températures | Intégration avec les capteurs de froid et registres de température Berlinger|
| SYNC | Transfert de synchronisation | https://github.com/openmsupply/open-msupply/issues/608 |
| SYSTÈME GÉNÉRAL | Autorisation utilisateur | Différents accès utilisateur intégrés |
| SYSTÈME GÉNÉRAL | Devise | Capacité à supporter plusieurs devises et leur taux de change |
| SYSTÈME GÉNÉRAL | Tous | Importation de documents numérisés |
| APPROVISIONNEMENT | Gestion des templates | Capacité à maintenir des templates |
| TABLEAUX DE BORD | Affichage des données | Rapports sur la consommation |
| APPROVISIONNEMENT | Bons de commande | Tous les approbateurs peuvent accéder au système pour approuver les formulaires d'approvisionnement |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Template de réquisition intuitif avec menus déroulants |
| RÉQUISITIONS | Réquisition Générale (Commande interne) | Les articles de la réquisition peuvent être acheminés pour transfert ou distribution |
| APPROVISIONNEMENT | Ajout de notes et dérogations aux procédures| Capacité d'ajouter des notes aux dossiers et dérogations au processus d'approvisionnement |
| SYSTÈME GÉNÉRAL | Tous | Possibilité d'enregistrer des contrats et des accusé de réception dans le système |
| APPROVISIONNEMENT | Référencement | Faciliter la validation avec 3 références pour les paiements des fournisseurs (Bons de commande, Accusé de réception, facture) |
| APPROVISIONNEMENT | Bons de commande | Notifier le changement de statut du bon de commande à différents utilisateurs ou lorsque le bon de commande n'est pas complet |
| APPROVISIONNEMENT | Correspondance des informations | Les modules d'approvisionnement et d'inventaire se transmettent les données sur les marchandises reçues, les bons de commande et les listes maitresses |
| DISPATCH | Expédition | Envoi d'une notification pour la validation d'une expédition |
| DISPATCH | Expédition | Système de validation des expéditions |
| APPROVISIONNEMENT | Générer un bon de livraison | Générer un bon de livraison et une feuille de route/liste de colisage |
| TRANSPORTS | Fiche technique du véhicule | Enregistrement pour chaque véhicule des  paramètres clés (VIN, modèle, plaque, type de carburant, année de production, données et numéro d'enregistrement, date et numéro de police d'assurance, prix, etc.) |
| TRANSPORTS | Rapports | Suivi mensuel des données clés du véhicule (nombre de jours d'utilisation du véhicule et jours de réparation, km parcourus, relevé du compteur kilométrique, coût du carburant, litres de carburant consommés) |
| TRANSPORTS | Rapports | Suivi mensuel des données clés du moteur (heures de fonctionnement, coûts de maintenance, carburant consommé) |
| TRANSPORTS | Rapports | Ajout de notifications lorsque les niveaux attendus ne sont pas atteints | 
| TRANSPORTS | Rapports | Suivi des réparations par véhicule et moteurs (type, date, coût, pièces détachées & consommables utilisés) |
| TRANSPORTS | Interopérabilité | Intégration possible au système de tracking des véhicules pour capturer les kilomètres parcourus |
| TRANSPORTS | Général | Envoi de notifications lorsque des contrats clés arrivent bientôt à expiration (assurance, enregistrement, etc.) |
| SYSTÈME GÉNÉRAL | Commentaires | Les utilisateurs peuvent communiquer sur la plateforme (c'est-à-dire laisser des commentaires pendant le processus de validation) |
| APPEL D'OFFRE | Général | Gestion du processus d'appel d'offres |
| APPEL D'OFFRE | Général | maintien d'une liste de prix fixes pour des fournisseurs sélectionnés |
| APPEL D'OFFRE | Général | maintien d'une liste standard de produits avec estimation des prix |