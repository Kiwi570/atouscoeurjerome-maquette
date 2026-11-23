# Rapport d’audit

Projet : `atouscoeurjerome-maquette` · 23/11/2026 16:26:08 · 15 min · 6 page(s) · audit standard

## Résumé

- Statut : **43 échec(s)**
- Passe : `20261123-151041-standard` · version ?v=1
- Échecs : **43**
- À regarder : **36**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (66), balayage (5), films d’ouverture (8), films de transition (8), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (4), liens vers la page en cours (5), changements de hauteur (4), tient dans l’écran (5), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (6), souris immobile (4), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ⚠ à regarder | voile par défaut (glisse) |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `jerome.html` — fichier introuvable : /assets/partage/jerome-fr.jpg
- **image de partage** — `reserver.html` — fichier introuvable : /assets/partage/reserver-fr.jpg
- **image de partage** — `services.html` — fichier introuvable : /assets/partage/services-fr.jpg

### textes qui se chevauchent (7)

- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte.conteneur > p.hero-intro.hero-anim:nth-of-type(2) « Ménage, jardin, courses, repas, rendez-vous et pap » — avec section#debut > aside.hero-info.hero-anim > strong « Première inscription gratuite » _(768×1024 normal)_
- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte.conteneur > p.hero-intro.hero-anim:nth-of-type(2) « Ménage, jardin, courses, repas, rendez-vous et pap » — avec section#debut > aside.hero-info.hero-anim > span.hero-info-prix:nth-of-type(1) « 30 € → 15 € » _(768×1024 normal)_
- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte.conteneur > p.hero-actions.hero-anim:nth-of-type(3) > a.bouton.bouton--clair:nth-of-type(2) « Réserver un créneau » — avec section#debut > aside.hero-info.hero-anim > span:nth-of-type(2) « l'heure de ménage avec l'avance immédiate » _(768×1024 normal)_
- **textes qui se chevauchent** — `/` — div.avance-visuel:nth-of-type(1) > div.coupe > div.coupe-avant:nth-of-type(1) > span.coupe-libelle:nth-of-type(1) « PRIX DE L'HEURE » — avec div.avance-visuel:nth-of-type(1) > div.coupe > div.coupe-avant:nth-of-type(1) > span.coupe-prix:nth-of-type(2) « 30 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/` — div.avance-visuel:nth-of-type(1) > div.coupe > div.coupe-apres:nth-of-type(2) > span.coupe-libelle:nth-of-type(1) « VOUS PAYEZ » — avec div.avance-visuel:nth-of-type(1) > div.coupe > div.coupe-apres:nth-of-type(2) > span.coupe-nouveau:nth-of-type(2) « 15 € » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/services` — div.avance-visuel:nth-of-type(2) > div.coupe > div.coupe-avant:nth-of-type(1) > span.coupe-libelle:nth-of-type(1) « PRIX DE L'HEURE » — avec div.avance-visuel:nth-of-type(2) > div.coupe > div.coupe-avant:nth-of-type(1) > span.coupe-prix:nth-of-type(2) « 30 € » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/services` — div.avance-visuel:nth-of-type(2) > div.coupe > div.coupe-apres:nth-of-type(2) > span.coupe-libelle:nth-of-type(1) « VOUS PAYEZ » — avec div.avance-visuel:nth-of-type(2) > div.coupe > div.coupe-apres:nth-of-type(2) > span.coupe-nouveau:nth-of-type(2) « 15 € » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### contraste insuffisant (6)

- **contraste insuffisant** — `/` — section#etapes > div.conteneur > header.section-tete.section-tete--centre > p.surtitre « POUR COMMENCER » — 4.18:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — section#engagements > div.conteneur.engagements-grille > div.engagements-texte > p.surtitre:nth-of-type(1) « NOS ENGAGEMENTS » — 4.18:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/jerome` — section#voiture > div.conteneur > header.section-tete > p.surtitre:nth-of-type(1) « SUR LA ROUTE » — 4.18:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/jerome` — section#confiance > div.conteneur.confiance-grille > div > p.surtitre « LA CONFIANCE » — 4.18:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/reserver` — section#appeler > div.conteneur.appel-tel-grille > div > p.surtitre:nth-of-type(1) « VOUS PRÉFÉREZ APPELER ? » — 4.18:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/services` — section#tarifs > div.conteneur.tarifs-grille > header.section-tete > p.surtitre:nth-of-type(1) « TARIFS » — 4.18:1 (minimum 4.5:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte coupé (5)

- **texte coupé** — `/` — div.avance-visuel:nth-of-type(1) > div.coupe > div.coupe-avant:nth-of-type(1) > span.coupe-prix:nth-of-type(2) « 30 € » — coupé par section#avance « Ménage : 30 € de l'heure, 15 € avec l'avance imméd » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte coupé** — `/jerome` — div.conteneur.tete-grand:nth-of-type(1) > h1.tete-mots > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Passionnés. » — coupé par section#debut > div.conteneur.tete-grand:nth-of-type(1) > h1.tete-mots > span.ligne-masque:nth-of-type(1) « Passionnés. » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **texte coupé** — `/jerome` — div.conteneur.tete-grand:nth-of-type(1) > h1.tete-mots > span.ligne-masque:nth-of-type(2) > span.hero-ligne « Expérimentés. » — coupé par section#debut > div.conteneur.tete-grand:nth-of-type(1) > h1.tete-mots > span.ligne-masque:nth-of-type(2) « Expérimentés. » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **texte coupé** — `/jerome` — h1.tete-mots > span.ligne-masque:nth-of-type(3) > span.hero-ligne > em « Attentionnés. » — coupé par section#debut > div.conteneur.tete-grand:nth-of-type(1) > h1.tete-mots > span.ligne-masque:nth-of-type(3) « Attentionnés. » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **texte coupé** — `/services` — div.avance-visuel:nth-of-type(2) > div.coupe > div.coupe-avant:nth-of-type(1) > span.coupe-prix:nth-of-type(2) « 30 € » — coupé par section#avance « AVANCE IMMÉDIATE Comment ça marche ? L'avance immé » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### élément recouvert (7)

- **élément recouvert** — `/` — section#debut > div.hero-texte.conteneur > p.hero-actions.hero-anim:nth-of-type(3) > a.bouton.bouton--clair:nth-of-type(2) « Réserver un créneau » — par section#debut > aside.hero-info.hero-anim > span:nth-of-type(2) « l'heure de ménage avec l'avance immédiate » _(768×1024 normal)_
- **élément recouvert** — `/` — div.conteneur.zone-grille > figure.carte-oise > svg > g.carte-ville:nth-of-type(2) — par figure.carte-oise > svg > g.carte-ondes:nth-of-type(1) > circle:nth-of-type(3) _(390×844 normal)_
- **élément recouvert** — `/` — div.conteneur.zone-grille > figure.carte-oise > svg > g.carte-ville:nth-of-type(7) — par div.conteneur.zone-grille > figure.carte-oise > svg > path.carte-route:nth-of-type(7) _(1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/` — div.conteneur.zone-grille > figure.carte-oise > svg > g.carte-centre:nth-of-type(8) — par figure.carte-oise > svg > g.carte-ondes:nth-of-type(1) > circle:nth-of-type(2) _(1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/` — div.conteneur.zone-grille > figure.carte-oise > svg > g.carte-ville:nth-of-type(5) — par figure.carte-oise > svg > g.carte-ondes:nth-of-type(1) > circle:nth-of-type(1) _(1920×1080 normal)_
- **élément recouvert** — `/contact` — div.conteneur.zone-grille > figure.carte-oise > svg > g.carte-ville:nth-of-type(5) — par figure.carte-oise > svg > g.carte-ondes:nth-of-type(1) > circle:nth-of-type(1) _(1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/contact` — div.conteneur.zone-grille > figure.carte-oise > svg > g.carte-ville:nth-of-type(7) — par div.conteneur.zone-grille > figure.carte-oise > svg > path.carte-route:nth-of-type(7) _(1366×768 normal, 1920×1080 normal)_

### accessibilité (axe) : color-contrast (6)

- **accessibilité (axe) : color-contrast** — `/` — .section-tete--centre > .surtitre.vu[data-anime=""] ; .engagements-texte > .surtitre.vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/` — .coupe-avant > .coupe-libelle ; .section-tete--centre > .surtitre.vu[data-anime=""] ; .engagements-texte > .surtitre.vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/jerome` — .section-tete > .surtitre.vu[data-anime=""] ; .confiance-grille > div > .surtitre.vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/reserver` — .surtitre.vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/services` — .section-tete > .surtitre.vu[data-anime=""] ; tr:nth-child(1) > td:nth-child(2) > s ; tr:nth-child(1) > td:nth-child(3) > strong — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/services` — .section-tete > .surtitre.vu[data-anime=""] ; tr:nth-child(1) > th[scope="row"] ; tr:nth-child(1) > td:nth-child(2) > s — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > aside.hero-info.hero-anim « Première inscription gratuite 30 € → 15 € l'heure  » _(390×844 sansJs, 1366×768 sansJs)_
- **premier écran : information clé hors de l’écran** — `/` — section#debut > aside.hero-info.hero-anim « 30 € → 15 € l'heure de ménage avec l'avance immédi » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/jerome` — div.conteneur.tete-grand:nth-of-type(1) > div.tete-grand-bas > div.hero-anim > p.pastille:nth-of-type(2) « Déclaré services à la personne · SAP 924824808 » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/services` — section#debut > div.conteneur.tete-scindee-grille > div.tete-scindee-texte:nth-of-type(1) > p.tete-fourchette.hero-anim:nth-of-type(3) « De 25 € à 35 € de l'heure de 12,50 € à 17,50 € ave » _(320×568 normal, 320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.hero-texte.conteneur > p.hero-actions.hero-anim:nth-of-type(3) > a.bouton:nth-of-type(1) « Appeler Jérôme · 06 87 54 68 88 » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/services` — div.conteneur.tete-scindee-grille > div.tete-scindee-texte:nth-of-type(1) > p.tete-actions.hero-anim:nth-of-type(4) > a.bouton:nth-of-type(1) « Réserver » _(320×568 normal, 320×568 sansJs)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/404` — section#debut > div.conteneur.introuvable-texte > p.hero-anim:nth-of-type(3) > a « 06 87 54 68 88 » — 136 × 24 px _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : voile par défaut (point 3) (1)

- **grille : voile par défaut (point 3)** — formeVoile « glisse » : la grille demande la forme du monde du client (iris, vague, rideau dans le socle, ou une forme propre). Si la glisse est voulue (page qu’on tourne, store qui descend), le déclarer dans config.json (grille.dispenses.voile)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (7)

- **section sans visuel** — `/` — section#appel « UN COUP DE MAIN ? Un coup de fil suffit. 06 87 54  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#ecrire « Écrire à Jérôme. Formulaire de démonstration : rie » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/jerome` — section#appel « UN COUP DE MAIN ? Un coup de fil suffit. 06 87 54  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/reserver` — section#debut « RÉSERVATION Réservez un créneau. Choisissez un ser » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 390×844 sansJs, 1920×1080 normal, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/reserver` — section#savoir « Bon à savoir La première inscription est gratuite  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/reserver` — section#debut « RÉSERVATION Réservez un créneau. Appeler Jérôme Pr » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **section sans visuel** — `/services` — section#appel « UN COUP DE MAIN ? Un coup de fil suffit. 06 87 54  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (17)

- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.services-grille > li.service-carte:nth-of-type(1) > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.services-grille > li.service-carte:nth-of-type(2) > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.services-grille > li.service-carte:nth-of-type(3) > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.services-grille > li.service-carte:nth-of-type(4) > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.services-grille > li.service-carte:nth-of-type(6) > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#engagements > div.conteneur.engagements-grille > figure.media.engagements-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.tete-numero-grille > figure.media.tete-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/jerome` — section#confiance > div.conteneur.confiance-grille > figure.media.confiance-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/reserver` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · SERVICE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/reserver` — section#appeler > div.conteneur.appel-tel-grille > figure.media.appel-tel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — div.conteneur.tete-scindee-grille > div.tete-scindee-visuel:nth-of-type(2) > figure.media.tete-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — article#menage > figure.media.rangee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — article#jardin > figure.media.rangee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — article#courses > figure.media.rangee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — article#repas > figure.media.rangee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — article#papiers > figure.media.rangee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/services` — à 83 ms (différence 53 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/services` — à 86 ms (différence 40 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/services` — écran différent à la même position après rechargement (4.2 %), voir comparaisons/rechargement-services-*.png _(1366×768)_

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

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 36 min de travail pour 75 min de budget, 6 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 7 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /jerome, /reserver, /services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2873 ms depuis le premier octet
- Ouverture /jerome (1366×768) : 2735 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2702 ms depuis le premier octet
- Ouverture /services (1366×768) : 2760 ms depuis le premier octet
- film de l'ouverture /services 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2790 ms depuis le premier octet
- Ouverture /jerome (390×844) : 2736 ms depuis le premier octet
- film de l'ouverture /jerome 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /reserver (390×844) : 2687 ms depuis le premier octet
- Ouverture /services (390×844) : 2766 ms depuis le premier octet
- Bords de l’écran : 238 images d’intro, 18 de voile et 101 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /jerome : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.
- Fluidité /jerome 1366×768 (molette) : 0 % d'images lentes sur 337, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 182, tâche la plus longue 0 ms
- Fluidité /services 1366×768 (molette) : 0 % d'images lentes sur 394, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1408, tâche la plus longue 0 ms
- Fluidité /jerome 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /services 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Vitesse / : 0.61 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /jerome : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /services : 0.43 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures
```
