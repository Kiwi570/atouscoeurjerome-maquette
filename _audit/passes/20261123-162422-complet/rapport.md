# Rapport d’audit

Projet : `atouscoeurjerome-maquette` · 23/11/2026 17:46:27 · 22 min · 6 page(s) · audit complet

## Résumé

- Statut : **16 échec(s)**
- Passe : `20261123-162422-complet` · version ?v=2
- Échecs : **16**
- À regarder : **13**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (4), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (8), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (6), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ⚠ à regarder | voile par défaut (glisse) |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /reserver |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-161336-rapide-cible | rapide | /,/services,/jerome,/reserver,/contact,/404 | toutes | 36 | 12 | 5 | échecs |
| **20261123-162422-complet** (celle-ci) | complet | toutes | toutes | 16 | 13 | 1 | échecs |

## Échecs

### zone tactile sous 44 px (10)

- **zone tactile sous 44 px** — `/` — div.composeur > ol.composeur-semaine > li.jour:nth-of-type(1) > button.jour-cible « Lun Lundi » — 43 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/` — div.composeur > ol.composeur-semaine > li.jour:nth-of-type(3) > button.jour-cible « Mer Mercredi » — 43 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/` — div.composeur > ol.composeur-semaine > li.jour:nth-of-type(4) > button.jour-cible « Jeu Jeudi » — 43 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/` — div.composeur > ol.composeur-semaine > li.jour:nth-of-type(6) > button.jour-cible « Sam Samedi » — 43 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/` — div.composeur > ol.composeur-semaine > li.jour:nth-of-type(7) > button.jour-cible « Dim Dimanche » — 43 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/services` — div.composeur:nth-of-type(2) > ol.composeur-semaine > li.jour:nth-of-type(1) > button.jour-cible « Lun Lundi » — 43 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/services` — div.composeur:nth-of-type(2) > ol.composeur-semaine > li.jour:nth-of-type(3) > button.jour-cible « Mer Mercredi » — 43 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/services` — div.composeur:nth-of-type(2) > ol.composeur-semaine > li.jour:nth-of-type(4) > button.jour-cible « Jeu Jeudi » — 43 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/services` — div.composeur:nth-of-type(2) > ol.composeur-semaine > li.jour:nth-of-type(6) > button.jour-cible « Sam Samedi » — 43 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/services` — div.composeur:nth-of-type(2) > ol.composeur-semaine > li.jour:nth-of-type(7) > button.jour-cible « Dim Dimanche » — 43 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_

### texte coupé (4)

- **texte coupé** — `/` — li.jour:nth-of-type(2) > div.jour-pile > button.bloc > span « Ménage » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansJs, 1000×560 sansJs, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/` — li.jour:nth-of-type(5) > div.jour-pile > button.bloc > span « Ménage » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansJs, 1000×560 sansJs, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/services` — li.jour:nth-of-type(2) > div.jour-pile > button.bloc > span « Ménage » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansJs, 1000×560 sansJs, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/services` — li.jour:nth-of-type(5) > div.jour-pile > button.bloc > span « Ménage » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansJs, 1000×560 sansJs, 1024×768 sansWebgl, 1000×560 sansWebgl)_

### élément recouvert (1)

- **élément recouvert** — `/services` — section#debut > div.conteneur.tete-scindee-grille > div.tete-scindee-texte:nth-of-type(1) > p.tete-fourchette.hero-anim:nth-of-type(3) « De 25 € à 35 € de l'heure de 12,50 € à 17,50 € ave » — par section#debut > div.conteneur.tete-scindee-grille > div.tete-scindee-visuel:nth-of-type(2) > span.tete-bande _(768×1024 normal)_

### lien profond (1)

- **lien profond** — `/reserver → /services#avance` — section pas en haut de l'écran (5230 px) _(1366×768 lien profond)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : voile par défaut (point 3) (1)

- **grille : voile par défaut (point 3)** — formeVoile « glisse » : la grille demande la forme du monde du client (iris, vague, rideau dans le socle, ou une forme propre). Si la glisse est voulue (page qu’on tourne, store qui descend), le déclarer dans config.json (grille.dispenses.voile)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### typographie française (1)

- **typographie française** — `/` — section#zone > div.conteneur.zone-grille > figure.carte-oise > p.carte-info « Mouy : 3 km de Hondainville, à vol d'oiseau. » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### section sans visuel (2)

- **section sans visuel** — `/reserver` — section#debut « RÉSERVATION Réservez un créneau. Appeler Jérôme Pr » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 844×390 normal, 1024×768 normal, 1000×560 normal, 1280×720 normal, +15)_
- **section sans visuel** — `/reserver` — section#debut « RÉSERVATION Réservez un créneau. Choisissez un ser » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, 2560×1440 normal, +12)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/services` — à 87 ms (différence 47 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/services` — à 72 ms (différence 42 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### fluidité (1)

- **fluidité** — `/` — 5 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2797 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2887 ms depuis le premier octet
- Ouverture /jerome (1366×768) : 2749 ms depuis le premier octet
- film de l'ouverture /jerome 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /reserver (1366×768) : 2695 ms depuis le premier octet
- Ouverture /services (1366×768) : 2834 ms depuis le premier octet
- Ouverture / (390×844) : 2759 ms depuis le premier octet
- Ouverture /contact (390×844) : 2905 ms depuis le premier octet
- Ouverture /jerome (390×844) : 2708 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2671 ms depuis le premier octet
- Ouverture /services (390×844) : 2840 ms depuis le premier octet
- Bords de l’écran : 375 images d’intro, 16 de voile et 133 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /jerome : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 179, tâche la plus longue 0 ms
- Fluidité /jerome 1366×768 (molette) : 0 % d'images lentes sur 327, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 174, tâche la plus longue 0 ms
- Fluidité /services 1366×768 (molette) : 0 % d'images lentes sur 440, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1401, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /jerome 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /services 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Vitesse / : 0.54 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /jerome : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /services : 0.46 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --seulement=fichiers,mesures,parcours
```
