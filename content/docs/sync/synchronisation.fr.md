+++
title = "Synchronisation"
description = "Configurer les paramètres de synchronisation du serveur"
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 81
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "La synchronisation est le terme que nous utilisons pour désigner le processus de transfert de données entre votre serveur et le serveur central. Cette page explique comment visualiser l'état actuel et comment lancer manuellement la synchronisation."
toc = true
top = false
+++

## Affichage de l'état de synchronisation

Pour afficher l'état de synchronisation, accédez à `Synchronisation` dans la partie inférieure du panneau de navigation :

![sync: nav](/docs/sync/images/sync_nav.png)

La page affiche le nombre d'enregistrements en attente d'être envoyés vers les serveurs centraux et l'heure à laquelle la dernière synchronisation a eu lieu.

![sync: status](/docs/sync/images/sync_status.png)

Depuis la version 2.0.0, votre serveur Open mSupply se synchronise avec deux serveurs centraux ! Les étapes `Push V6` et `Pull V6` transfèrent les données vers et depuis le serveur central Open mSupply, dont vous pouvez en savoir plus [ici](../../getting_started/central). Les étapes `Push`, `Pull Central` et `Pull Remote` se synchronisent avec un serveur central mSupply.

## Synchronisation manuelle

Sur cet écran de synchronisation, vous pouvez également lancer la synchronisation immédiatement plutôt que d'attendre l'heure programmée. Rappelez-vous, l'intervalle de synchronisation est configuré dans la section Admin > Synchronisation, voir la page [Paramètres](/docs/settings/synchronisation/) pour plus de détails.

Pour démarrer la synchronisation manuellement, cliquez simplement sur le bouton `Synchroniser maintenant`. Lorsque vous le faites, vous verrez que le bouton se transforme en spinner et que la progression est indiquée par les icônes de pas à pas qui changent pour montrer quelle étape est actuellement active. Par exemple, dans l'image ci-dessous, vous verrez que l'étape « Push » est active.

![Syncronisation manuelle](/docs/sync/images/sync_in_progress.png)

Vous remarquerez les totaux sous les étapes `Push V6` et `Push` : il s'agit du nombre de modifications à _traiter_ par chaque étape.

Les enregistrements seront ensuite poussés vers le serveur central Open mSupply (V6) ou le serveur central mSupply, mais ils doivent être traités avant de savoir où aller !

Ainsi, dans l’exemple ci-dessus, 4 enregistrements de synchronisation sont envoyés au total, et non 8.

Voici le processus complet en action. Vous remarquerez que la plupart des étapes de synchronisation sont très rapides, même si cela dépend du nombre d'enregistrements que vous devez synchroniser :

<p><img src="/docs/sync/images/sync.gif" alt=:"sync: manual" width="800" /></p>

Si des erreurs surviennent pendant la synchronisation, vous les verrez également sur cet écran. Passez la souris sur l'icône « i » pour voir des détails supplémentaires.

![Erreurs de synchronisation](/docs/sync/images/sync_error.png)

## Détails du serveur

En haut à droite de la page `Synchronisation`, l'URL du serveur actuel est affichée, ainsi qu'un code QR. Le code contient l'URL du serveur et peut être utilisé pour configurer facilement [la chaîne du froid mSupply](https://docs.msupply.foundation/fr/docs/coldchain/introduction/) lors de la synchronisation avec Open mSupply. Si vous rencontrez des difficultés pour scanner le code, vous pouvez cliquer (ou appuyer, si vous utilisez une tablette) sur le code pour afficher une version plus grande.

![Synchronisation manuelle](/docs/sync/images/expand_qr.gif)