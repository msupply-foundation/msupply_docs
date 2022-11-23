+++
title = "Carte routière"
description = "Open mSupply Carte routière."
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

This road map will be updated about once every six weeks.
It only covers our immediate committed work stream. Our planned feature list is much larger.

### Carte routière
{% mermaid ()%}
gantt
 title Open mSupply Road Map
 dateFormat YY-MM-DD
 axisFormat %B
 section Version 1.0
  Piste d'audit :t1-0-1, 22-08-01 , 28d
  Installer :22-08-10 , 14d
  Application Android :t1-0-2, after t1-0-1 , 28d
  Application de bureau :after t1-0-1 , 21d
 section Version 1.0.4
  Remplacement de découverte de serveur (android+desktop) :22-11-07,21d
  Modification de la ligne de stock :t1-0-3, 22-11-07, 21d
 section Version 1.0.5
  Intégration Fridgetag :22-11-21, 35d
  Fractionnement des packs :after t1-0-3, 35d
 section Version 1.1
  Intégration chaîne du froid :t1-1-1, 22-11-28, 56d
  Modifier les patients  :t1-1-2, 22-10-01 , 28d
  Formulaires personnalisables  :after t1-0-2 , 56d
  Programmes :t1-1-3, after t1-1-2, 21d
  Rencontres: after t1-1-2, 21d
  Périodes: t1-1-4, after t1-1-3, 28d
  Caractéristique des programmes : milestone, m1, after t1-1-4, 
 section Version 2.0
  Distribution: t2-0-1, after t1-1-1, 70d
  Préférences: t2-0-2, after t1-1-1, 28d
  Fonctionnalité R&R améliorée: after t2-0-2, 56d
  Intégration DHIS2: t2-0-3, after t2-0-2, 28d
  Intégration HL7: t2-0-4, after t2-0-3, 28d
  Délivrance : milestone, m2, after t2-0-1, 
section Version 2.1
  Retours client: t2-1-1, after t2-0-4, 32d
  Retours fournisseur: t2-1-2, after t2-0-4, 32d
section Version 3.0
  Propriétés de l'objet: t3-0-1, after t2-1-1, 14d
  Sérialisation: t3-0-2, after t3-0-1, 21d
  Framework de plug-in frontal: after t2-1-1, 32d
{% end %} 


### Fonctionnalités prévues

| Zone | Transaction | Fonctionnalité/Capacité |
|--------------------------------------------------------------- ----|--------------------------------------------------|-- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------|
| QUANTIFICATION | Planification de la demande | Calcul basé sur des règles du besoin en volume de produit estimé X par niveau de distribution et périodes définies par l'utilisateur |
| QUANTIFICATION | Planification de l'approvisionnement | |
| QUANTIFICATION | Planification de la demande | Modifier manuellement les prévisions |
| APPROVISIONNEMENT | Offre/Demande de devis | Acheteur : créez un nouvel appel d'offres |
| APPROVISIONNEMENT | Offre/Demande de devis | Acheteur : publier un appel d'offres auprès d'une liste de fournisseurs |
| APPROVISIONNEMENT | Offre/Demande de devis | Acheteur : créer une demande de devis électronique (EDI 840) |
| APPROVISIONNEMENT | Offre/Demande de devis | Acheteur : créer des prix de référence |
| APPROVISIONNEMENT | Offre/Demande de devis | Fournisseurs : peuvent télécharger leur réponse dans Open mSupply (portail web) |
| APPROVISIONNEMENT | Offre/Demande de devis | Acheteur : recevoir manuellement les réponses/cotations des fournisseurs |
| APPROVISIONNEMENT | Offre/Demande de devis | Acheteur : recevez automatiquement les réponses/cotations des fournisseurs (portail web) |
| APPROVISIONNEMENT | Offre/Demande de devis | Acheteur : recevoir une réponse électronique à une demande de devis (EDI 843 / PEPPOL) |
| APPROVISIONNEMENT | Offre/Demande de devis | Acheteurs : évaluation des devis reçus |
| APPROVISIONNEMENT | Offre/Demande de devis | Acheteurs : sélectionner les fournisseurs privilégiés (adjudication) |
| APPROVISIONNEMENT | Offre/Demande de devis | Gestion des contrats et subventions |
| APPROVISIONNEMENT | Bons de commande | Créer un bon de commande à partir d'un appel d'offres |
| APPROVISIONNEMENT | Bons de commande | Créer un bon de commande calculé |
| APPROVISIONNEMENT | Bons de commande | Créer un bon de commande vierge |
| APPROVISIONNEMENT | Bons de commande | Créer un bon de commande électronique (EDI 850) |
| APPROVISIONNEMENT | Bons de commande | Ajouter des éléments de la liste principale |
| APPROVISIONNEMENT | Bons de commande | Catégories de bons de commande |
| APPROVISIONNEMENT | Bons de commande | Attributs de la ligne de commande |
| APPROVISIONNEMENT | Gestion des fournisseurs | Créer/Afficher/Modifier des fournisseurs |
| APPROVISIONNEMENT | Avis d'expédition préalable | Créer un ASN manuel à partir d'un bon de commande |
| APPROVISIONNEMENT | Avis d'expédition préalable | Recevoir un ASN électronique (EDI 856) |
| APPROVISIONNEMENT | Bonnes recettes | Imprimer un bon de réception (pdf, csv) d'un envoi entrant (lorsque le statut VÉRIFIÉ est confirmé) |
| APPROVISIONNEMENT | Paiements | Imprimer un formulaire de facture fournisseur (pdf, csv) à partir d'un envoi entrant (lorsque le statut VÉRIFIÉ est confirmé) |
| APPROVISIONNEMENT | Paiements | Enregistrer les paiements effectués aux fournisseurs (à partir d'une facture fournisseur) |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Accepter la notification d'arrivée de l'expédition |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Recevez automatiquement les données d'expédition entrantes avant l'arrivée |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Enregistrer manuellement les données d'expédition entrantes avant l'arrivée |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Afficher toute différence entre les quantités commandées (req ou PO) et les quantités notifiées |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Informer les parties concernées des divergences |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Rejeter la commande si nécessaire |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Afficher les besoins de stockage en fonction du volume brut de la quantité expédiée |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Afficher la quantité d'espace de stockage disponible par type |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Signaler si espace de stockage insuffisant par type |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Confirmer l'arrivée de l'envoi entrant |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Enregistrer manuellement les données d'expédition entrantes à l'arrivée |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Lecture de codes-barres pour la réception de marchandises |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Signaler les écarts par rapport à l'envoi reçu |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Enregistrer les informations sur les dommages, les écarts, les incompatibilités de lots, les indicateurs et les variations pour les éléments de ligne individuels |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Enregistrer les notes concernant les écarts et les variations des marchandises reçues |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Signaler les dommages et les anomalies aux personnes appropriées |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Confirmation des marchandises en stock (mise à jour des registres d'inventaire) |
| RÉCEPTION | Expéditions entrantes (ex Facture fournisseur) | Imprimer les rapports de réception, le formulaire de sortie de stock, l'autorisation de réception, etc... |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Affecter un opérateur à un envoi entrant pour ranger le stock reçu |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Application Rangement : chargez la liste des articles de l'expédition entrante et les instructions pour le rangement. |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Afficher les conditions de stockage des articles (par exemple, température contrôlée) |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Afficher l'emplacement de stockage par défaut pour chaque élément |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Proposer un espace/des positions pour chaque article en stock en fonction de règles définies (par exemple, la disponibilité actuelle de l'espace, en fonction de la catégorie ABC) |
| RÉCEPTION | Expéditions entrantes (ex Factures fournisseur) | Imprimer l'étiquette de la palette/étagère spécifiant le statut des marchandises, le cas échéant |
| GESTION DES INVENTAIRES | Emplacements | Créer/modifier des emplacements de stockage d'inventaire (Allée, Bac, Fente, etc.) |
| GESTION DES INVENTAIRES | Emplacements | Définir la hiérarchie des emplacements de stockage |
| GESTION DES INVENTAIRES | Emplacements | Définir les conditions de stockage (chaîne du froid, volume, restrictions d'articles, restrictions d'utilisation, etc...) |
| GESTION DES INVENTAIRES | Emplacements | Enregistrer les températures des lieux de stockage (voir catégorie CHAÎNE DU FROID) |
| GESTION DES INVENTAIRES | Articles - Mouvement de stock et expiration | Enregistrer l'état VVM |
| GESTION DES INVENTAIRES | Emplacements | Enregistrer l'état des conditions gelées |
| GESTION DES INVENTAIRES | Articles - Données de base | Définir les conditions de seuil de température par produit, le cas échéant |
| GESTION DES INVENTAIRES | Articles - Mouvement de stock et expiration | Conditions d'alerte hors seuil |
| GESTION DES INVENTAIRES | Articles - Mouvement de stock et expiration | Suivre les lots et les dates d'expiration |
| GESTION DES INVENTAIRES | Articles - Mouvement de stock et expiration | Transférer le stock d'un endroit à un autre |
| GESTION DES INVENTAIRES | Articles - Mouvement de stock et expiration | Afficher et transmettre des alertes et des notifications pour les expirations en attente |
| GESTION DES INVENTAIRES | Articles - Mouvement de stock et expiration | Afficher et transmettre des alertes et des notifications de rupture de stock, de surstock, de sous-stock |
| GESTION DES INVENTAIRES | Articles - Données de base | Signaler les articles comme dangereux, le cas échéant |
| GESTION DES INVENTAIRES | Inventaire | Créer/modifier un inventaire pour une liste d'articles |
| GESTION DES INVENTAIRES | Inventaire | Filtrer le stock à intégrer : par attributs article (catégorie, rayon, date de péremption, etc...) |
| GESTION DES INVENTAIRES | Inventaire | Filtrer le stock à inclure : par emplacement |
| GESTION DES INVENTAIRES | Inventaire | Filtrez le stock à inclure : par liste principale |
| GESTION DES INVENTAIRES | Inventaire | Imprimer les fiches d'inventaire (format PDF) |
| GESTION DES INVENTAIRES | Inventaire | Imprimer les fiches d'inventaire (format CSV) |
| GESTION DES INVENTAIRES | Inventaire | |
| GESTION DES INVENTAIRES | Inventaire | Appli d'inventaire : chargez la feuille d'inventaire sur un appareil mobile |
| GESTION DES INVENTAIRES | Inventaire | Application d'inventaire : utilisez un lecteur de codes-barres/appareil photo d'un appareil mobile pour sélectionner l'article que l'opérateur compte |
| GESTION DES INVENTAIRES | Inventaire | Lecture de codes-barres pour l'inventaire |
| GESTION DES INVENTAIRES | Inventaire | Créer des ajustements d'inventaire (finaliser l'inventaire) |
| GESTION DES INVENTAIRES | Inventaire | Ajouter des motifs d'ajustement d'inventaire |
| GESTION DES INVENTAIRES | Inventaire | Comptage de cycles |
| GESTION DES INVENTAIRES | Kits | |
| GESTION DES INVENTAIRES | Ajustements d'inventaire | |
| GESTION DES INVENTAIRES | Reconditionne | |
| GESTION DES INVENTAIRES | Articles - Mouvement de stock et expiration | Ligne de stock fractionnée |
| GESTION DES INVENTAIRES | Articles - Mouvement de stock et expiration | Fusionner la ligne de stock |
| GESTION DES INVENTAIRES | Réapprovisionnements Pickface | |
| GESTION DES INVENTAIRES | Gestion du travail | Créer/modifier des opérateurs d'entrepôt |
| ENVOI | Expédition sortante | Créer un bordereau de prélèvement à partir d'un envoi sortant alloué |
| ENVOI | Expédition sortante | Bordereau de prélèvement : Afficher le(s) emplacement(s) actuel(s) pour les articles réquisitionnés |
| ENVOI | Expédition sortante | Bordereau de prélèvement : créer un bordereau de prélèvement trié par emplacements de stockage |
| ENVOI | Expédition sortante | Bordereau de prélèvement : Afficher la date de péremption du stock |
| ENVOI | Expédition sortante | Application de bordereau de prélèvement : chargez un bordereau de prélèvement sur un appareil mobile. |
| ENVOI | Expédition sortante | Lecture de codes-barres et préparation de commandes |
| ENVOI | Expédition sortante | Confirmer l'expédition sortante comme prélevée |
| ENVOI | Expédition sortante | Commande de pack |
| ENVOI | Expédition sortante | Pack Commande : Carton / cartonisation |
| ENVOI | Expédition sortante | Imprimer les documents de livraison : liste de colisage, facture client, bon de réception |
| ENVOI | Expédition sortante | Confirmer l'expédition sortante comme expédiée (Mise à jour de Translation types fiches d'inventaire) |
| TRANSPORTS | Ordre/demande de transport | Projet d'ordre de transport |
| TRANSPORTS | Ordre/demande de transport | Attribuez une ou plusieurs expéditions sortantes "cueillies" à l'ordre de transport (même trajet ou lieu) |
| TRANSPORTS | Ordre/demande de transport | Déterminer la charge utile, le volume et les dimensions |
| TRANSPORTS | Ordre/demande de transport | Sélectionnez le mode et le type de transport |
| TRANSPORTS | Ordre/demande de transport | Déterminer les exigences de contrôle de la température |
| TRANSPORTS | Ordre/demande de transport | Confirmer l'ordre de transport |
| TRANSPORTS | Ordre/demande de transport | Planifier les ressources de transport |
| TRANSPORTS | Ordre/demande de transport | Enregistrer/Afficher les instructions de livraison |
| TRANSPORTS | Ordre/demande de transport | Enregistrer/afficher le numéro de suivi, le véhicule, le conducteur |
| TRANSPORTS | Ordre/demande de transport | Confirmer que les envois sortants ont été chargés |
| TRANSPORTS | Ordre/demande de transport | Suivre l'emplacement et mettre à jour l'ETA |
| TRANSPORTS | Ordre/demande de transport | Enregistrer l'historique du transport (lieu, température) |
| TRANSPORTS | Ordre/demande de transport | Confirmer la livraison / imprimer/envoyer une preuve de livraison |
| TRANSPORTS | Transporteur | Créer/modifier des transporteurs |
| TRANSPORTS | Itinéraire | Créer/modifier des itinéraires |
| TRANSPORTS | Gestion de flotte | |
| DEMANDES | Requête générale Réquisition (Commande int.) | Suggérez des quantités de commande en fonction des données de consommation passées (par exemple, AMC) |
| DEMANDES | Requête générale Réquisition (Commande int.) | Suggérer des quantités de commande en fonction du seuil de quantité minimum |
| DEMANDES | Requête générale Réquisition (Commande int.) | Suggérez des quantités de commande en fonction des dossiers des patients / des données du registre |
| DEMANDES | Requête générale Réquisition (Commande int.) | estimer les besoins de stock en agrégeant les demandes par niveaux intermédiaires |
| DEMANDES | Requête générale Réquisition (Commande int.) | estimer les besoins en stocks en fonction des populations cibles |
| DEMANDES | Requête générale Réquisition (Commande int.) | estimer les quantités de besoins de stock sur la base de prévisions statistiques |
| DEMANDES | Requête générale Réquisition (Commande int.) | estimer le point des besoins en stock en fonction de critères définis par l'utilisateur |
| DEMANDES | Requête générale Réquisition (Commande int.) | Afficher les données de consommation passées |
| DEMANDES | Requête générale Réquisition (Commande int.) | Afficher la quantité actuelle disponible et utilisable de chaque article en stock |
| DEMANDES | Requête générale Réquisition (Commande int.) | Afficher la commande ouverte et les envois entrants |
| DEMANDES | Requête générale Réquisition (Commande int.) | Afficher les commandes sortantes ouvertes et l'utilisation projetée |
| DEMANDES | Requête générale Réquisition (Commande int.) | Afficher les niveaux de stock actuels (SOH) à tous les niveaux pertinents |
| DEMANDES | Requête générale Réquisition (Commande int.) | Afficher les dates de péremption du stock disponible |
| DEMANDES | Requête générale Réquisition (Commande int.) | Générer des quantités de commande suggérées (demandées - SOH) = Qté suggérée |
| DEMANDES | Requête générale Réquisition (Commande int.) | Afficher le délai d'exécution de la commande |
| DEMANDES | Requête générale Réquisition (Commande int.) | Afficher le coût de l'article au moment où la demande est générée |
| DEMANDES | Requête générale Réquisition (Commande int.) | Calculer le coût de la commande au moment où la demande est générée |
| DEMANDES | Requête générale Réquisition (Commande int.) | Soumettre la demande (électroniquement ou manuellement) |
| DEMANDES | Requête générale Réquisition (Commande int.) | Fournir un mécanisme d'approbation/de rejet aux niveaux appropriés |
| DEMANDES | Requête générale Réquisition (Commande int.) | L'approbateur peut modifier la demande, si nécessaire |
| DEMANDES | Requête générale Réquisition (Commande int.) | Enregistrer la date d'approbation de la demande |
| DISTRIBUTION PAR PATIENT | Distribution | Enregistrer les médicaments délivrés à un patient individuel |
| DISTRIBUTION PAR PATIENT | Ordonnance | Créer/modifier une ordonnance |
| DISTRIBUTION PAR PATIENT | Ordonnance | Abréviations |
| DISTRIBUTION PAR PATIENT | Ordonnance | Groupe Interactions médicamenteuses |
| DISTRIBUTION PAR PATIENT | Ordonnance | Paiements et reçus / caisse enregistreuse |
| DISTRIBUTION PAR PATIENT | Ordonnance | Créer/modifier des patients |
| DISTRIBUTION PAR PATIENT | Ordonnance | Créer/modifier des prescripteurs |
| DISTRIBUTION PAR PATIENT | Ordonnance | Répétitions |
| APPROVISIONNEMENT | Bonne réception pour vérifier le stock sur les bons de commande | Créer une entrée de marchandises / un envoi entrant |
| APPROVISIONNEMENT | Bonne réception pour vérifier le stock sur les bons de commande | Ajouter des lignes d'un bon de commande à un envoi entrant |
| CHAÎNE DU FROID | Surveillance de la température | Afficher et transmettre des alertes en cas de dépassement de température (tableau de bord de l'écran d'accueil), affecter un ou plusieurs capteurs de température à un emplacement de stockage, définir un seuil par article |
| CHAÎNE DU FROID | Surveillance de la température | Synchronisation des relevés de température vers le serveur pour alimenter le tableau de bord mSupply (via l'application Cold Chain) |
| CHAÎNE DU FROID | Surveillance de la température | Intégration avec les enregistreurs de température Berlinger et l'onglet réfrigérateur |
| SYNC | Transfert de synchronisation | https://github.com/openmsupply/open-msupply/issues/608 |
| SYSTÈME GLOBAL | Autorisation utilisateur | Accès utilisateur variable intégré |
| SYSTÈME GLOBAL | Devise | Capacité à supporter plusieurs devises et leur taux de change |
| SYSTÈME GLOBAL | N'importe lequel | Télécharger des documents numérisés |
| APPROVISIONNEMENT | Gérer les modèles | Capacité à maintenir des modèles |
| TABLEAUX DE BORD | Afficher les données sur les tableaux de bord | Rapports sur la consommation des stocks |
| APPROVISIONNEMENT | Bons de commande | Tous les approbateurs peuvent accéder au système pour approuver les formulaires d'approvisionnement |
| DEMANDES | Requête générale Réquisition (Commande int.) | Modèle de demande intuitif avec menus déroulants |
| DEMANDES | Requête générale Réquisition (Commande int.) | Les articles demandés peuvent être acheminés pour être libérés ou achetés |
| APPROVISIONNEMENT | Ajouter des notes et traiter les renonciations | Capacité de documenter les notes au dossier et les renonciations au processus d'approvisionnement |
| SYSTÈME GLOBAL | N'importe lequel | Possibilité de stocker des contrats et des notes de réception de marchandises (GRN) dans le système |
| APPROVISIONNEMENT | Référencement | Faciliter la correspondance à 3 voies pour les paiements des fournisseurs (PO, GRN, facture) |
| APPROVISIONNEMENT | Bons de commande | Notifier le changement de statut du bon de commande à différents utilisateurs ou lorsque le bon de commande complet n'est pas rempli |
| APPROVISIONNEMENT | Informations correspondantes | Les modules d'approvisionnement et d'inventaire communiquent entre eux les données sur les marchandises reçues, les bons de commande et les listes principales |
| ENVOI | Expédition sortante | Envoyer une notification d'expédition sortante approuvée |
| ENVOI | Expédition sortante | Système d'approbation des expéditions sortantes |
| APPROVISIONNEMENT | Générer un bon de livraison | Générer un bon de livraison et une lettre de voiture/liste de colisage |
| TRANSPORTS | Fiche technique du véhicule | Enregistrement pour chaque véhicule avec les paramètres clés (VIN, modèle, plaque, type de carburant, année modèle, données et numéro d'enregistrement, date et numéro de police d'assurance, prix, etc.) |
| TRANSPORTS | Rapports | Suivre les données mensuelles clés du véhicule (nombre de jours d'utilisation et de réparation du véhicule, km parcourus, relevé du compteur kilométrique, coût du carburant, litres de carburant consommés) |
| TRANSPORTS | Rapports | "Suivez les données mensuelles clés du générateur (heures de fonctionnement, coûts de maintenance, carburant consommé) |
| Ajouter des notifications lorsque les niveaux attendus ne sont pas atteints" | | |
| TRANSPORTS | Rapports | "Suivre les réparations par véhicule et groupe électrogène (type, date, coût, pièces détachées & consommables utilisés) |
| Ajouter des notifications lorsque les niveaux attendus ne sont pas atteints" | | |
| TRANSPORTS | Interopérabilité | Peut être intégré au matériel de suivi des véhicules pour capturer les kilomètres parcourus |
| TRANSPORTS | Général | Envoyer des notifications lorsque des documents clés arrivent bientôt à expiration (assurance, enregistrement, etc.) |
| SYSTÈME GLOBAL | Commentaires | Les utilisateurs peuvent communiquer sur la plateforme (c'est-à-dire laisser des commentaires pendant le processus d'approbation) |
| APPEL D'OFFRE | Général | Gérer le processus d'appel d'offres |
| APPEL D'OFFRE | Général | maintenir une liste de prix fixes pour les fournisseurs privilégiés |
| APPEL D'OFFRE | Général | maintenir une liste standard de produits avec des prix estimés |