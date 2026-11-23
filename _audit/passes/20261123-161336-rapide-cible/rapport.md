# Rapport d’audit

Projet : `atouscoeurjerome-maquette` · 23/11/2026 17:23:26 · 10 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/services,/jerome,/reserver,/contact,/404

## Résumé

- Statut : **36 échec(s)**
- Passe : `20261123-161336-rapide-cible` · version ?v=2
- Échecs : **36**
- À regarder : **12**
- Non lancé : **5**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (36), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (4), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (2), fluidité (6)

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

## Échecs

### zone tactile sous 44 px (22)

- **zone tactile sous 44 px** — `/` — div.composeur > ol.composeur-semaine > li.jour:nth-of-type(1) > button.jour-cible « Lun Lundi » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.composeur > ol.composeur-semaine > li.jour:nth-of-type(2) > button.jour-cible « Mar Mardi » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — ol.composeur-semaine > li.jour:nth-of-type(2) > div.jour-pile > button.bloc « Retirer Ménage du mardi » — 37 × 26 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.composeur > ol.composeur-semaine > li.jour:nth-of-type(3) > button.jour-cible « Mer Mercredi » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.composeur > ol.composeur-semaine > li.jour:nth-of-type(4) > button.jour-cible « Jeu Jeudi » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.composeur > ol.composeur-semaine > li.jour:nth-of-type(5) > button.jour-cible « Ven Vendredi » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — ol.composeur-semaine > li.jour:nth-of-type(5) > div.jour-pile > button.bloc « Retirer Ménage du vendredi » — 37 × 26 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.composeur > ol.composeur-semaine > li.jour:nth-of-type(6) > button.jour-cible « Sam Samedi » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.composeur > ol.composeur-semaine > li.jour:nth-of-type(7) > button.jour-cible « Dim Dimanche » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — ol.composeur-semaine > li.jour:nth-of-type(2) > div.jour-pile > button.bloc « Ménage » — 92 × 31 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/` — ol.composeur-semaine > li.jour:nth-of-type(5) > div.jour-pile > button.bloc « Ménage » — 92 × 31 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/services` — div.composeur:nth-of-type(2) > ol.composeur-semaine > li.jour:nth-of-type(1) > button.jour-cible « Lun Lundi » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/services` — div.composeur:nth-of-type(2) > ol.composeur-semaine > li.jour:nth-of-type(2) > button.jour-cible « Mar Mardi » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/services` — ol.composeur-semaine > li.jour:nth-of-type(2) > div.jour-pile > button.bloc « Retirer Ménage du mardi » — 37 × 26 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/services` — div.composeur:nth-of-type(2) > ol.composeur-semaine > li.jour:nth-of-type(3) > button.jour-cible « Mer Mercredi » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/services` — div.composeur:nth-of-type(2) > ol.composeur-semaine > li.jour:nth-of-type(4) > button.jour-cible « Jeu Jeudi » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/services` — div.composeur:nth-of-type(2) > ol.composeur-semaine > li.jour:nth-of-type(5) > button.jour-cible « Ven Vendredi » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/services` — ol.composeur-semaine > li.jour:nth-of-type(5) > div.jour-pile > button.bloc « Retirer Ménage du vendredi » — 37 × 26 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/services` — div.composeur:nth-of-type(2) > ol.composeur-semaine > li.jour:nth-of-type(6) > button.jour-cible « Sam Samedi » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/services` — div.composeur:nth-of-type(2) > ol.composeur-semaine > li.jour:nth-of-type(7) > button.jour-cible « Dim Dimanche » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/services` — ol.composeur-semaine > li.jour:nth-of-type(2) > div.jour-pile > button.bloc « Ménage » — 92 × 31 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/services` — ol.composeur-semaine > li.jour:nth-of-type(5) > div.jour-pile > button.bloc « Ménage » — 92 × 31 px _(844×390 normal)_

### accessibilité (axe) : color-contrast (4)

- **accessibilité (axe) : color-contrast** — `/` — button[aria-label="Lundi"] > .jour-court[aria-hidden="true"] ; button[aria-label="Mardi"] > .jour-court[aria-hidden="true"] ; button[aria-label="Retirer Ménage du mardi"] > span — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/` — button[aria-label="Lundi"] > .jour-court[aria-hidden="true"] ; button[aria-label="Mardi"] > .jour-court[aria-hidden="true"] ; button[aria-label="Mercredi"] > .jour-court[aria-hidden="true"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/services` — button[aria-label="Jeudi"] > .jour-court[aria-hidden="true"] ; button[aria-label="Vendredi"] > .jour-court[aria-hidden="true"] ; button[aria-label="Retirer Ménage du vendredi"] > span — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/services` — button[aria-label="Jeudi"] > .jour-court[aria-hidden="true"] ; button[aria-label="Vendredi"] > .jour-court[aria-hidden="true"] ; button[aria-label="Samedi"] > .jour-court[aria-hidden="true"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_

### bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile (5)

- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/services` — bande en rgb(88, 28, 58) à côté du voile en rgb(45, 24, 55), sur 5 image(s) sur 5 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/services` — bande en rgb(88, 28, 58) à côté du voile en rgb(45, 24, 55), sur 5 image(s) sur 5 (films/bords-voile-contact-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/services` — bande en rgb(88, 28, 58) à côté du voile en rgb(45, 24, 55), sur 5 image(s) sur 5 (films/bords-voile-jerome-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/services` — bande en rgb(88, 28, 58) à côté du voile en rgb(45, 24, 55), sur 3 image(s) sur 3 (films/bords-voile-reserver-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/jerome` — bande en rgb(88, 28, 58) à côté du voile en rgb(45, 24, 55), sur 5 image(s) sur 5 (films/bords-voile-services-1366.png) _(1366×768 barre de défilement classique (15 px))_

### bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile (5)

- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile** — `/services` — bande en rgb(88, 28, 58) à côté du voile en rgb(45, 24, 55), sur 5 image(s) sur 5 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile** — `/services` — bande en rgb(88, 28, 58) à côté du voile en rgb(45, 24, 55), sur 5 image(s) sur 5 (films/bords-voile-contact-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile** — `/services` — bande en rgb(88, 28, 58) à côté du voile en rgb(45, 24, 55), sur 5 image(s) sur 5 (films/bords-voile-jerome-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile** — `/services` — bande en rgb(88, 28, 58) à côté du voile en rgb(45, 24, 55), sur 3 image(s) sur 3 (films/bords-voile-reserver-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile** — `/jerome` — bande en rgb(88, 28, 58) à côté du voile en rgb(45, 24, 55), sur 5 image(s) sur 5 (films/bords-voile-services-1366.png) _(1366×768 barre de défilement classique (15 px))_

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

- **section sans visuel** — `/reserver` — section#debut « RÉSERVATION Réservez un créneau. Choisissez un ser » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs)_
- **section sans visuel** — `/reserver` — section#debut « RÉSERVATION Réservez un créneau. Appeler Jérôme Pr » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 844×390 normal, 320×568 sansJs)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 83 ms (différence 46 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/services` — à 67 ms (différence 42 %) (films/retour-avant-390.png) _(390×844 retour avant)_

## Non lancé

- **fluidite** : browserContext.close: Target page, context or browser has been closed
- **mouvement** : browser.newContext: Target page, context or browser has been closed
- **vitesse** : browser.newContext: Target page, context or browser has been closed
- **captures** : browser.newContext: Target page, context or browser has been closed
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Audit rapide : étapes lourdes sur /, /contact, /jerome, /reserver, /services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2787 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2890 ms depuis le premier octet
- Ouverture /jerome (1366×768) : 2721 ms depuis le premier octet
- film de l'ouverture /jerome 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /reserver (1366×768) : 2647 ms depuis le premier octet
- Ouverture /services (1366×768) : 2827 ms depuis le premier octet
- Ouverture / (390×844) : 2813 ms depuis le premier octet
- Ouverture /contact (390×844) : 2909 ms depuis le premier octet
- Ouverture /jerome (390×844) : 2740 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2650 ms depuis le premier octet
- Ouverture /services (390×844) : 2813 ms depuis le premier octet
- film de l'ouverture /services 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 327 images d’intro, 23 de voile et 113 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /jerome : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 2 % d'images lentes sur 429, tâche la plus longue 52 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 178, tâche la plus longue 0 ms
- Fluidité /jerome 1366×768 (molette) : 0 % d'images lentes sur 325, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 183, tâche la plus longue 0 ms
- Fluidité /services 1366×768 (molette) : 0 % d'images lentes sur 432, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1412, tâche la plus longue 0 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,bords,fluidite,mouvement,vitesse,captures
```
