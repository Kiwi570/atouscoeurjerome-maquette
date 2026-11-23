# Rapport d’audit

Projet : `atouscoeurjerome-maquette` · 23/11/2026 16:30:11 · 2 min · 6 page(s) · audit standard (étapes : fichiers, mesures)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261123-152758-standard-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-151041-standard | standard | toutes | toutes | 43 | 36 | 1 | échecs |
| **20261123-152758-standard-partiel** (celle-ci) | standard | toutes | fichiers, mesures | 5 | 4 | 0 | échecs |

## Échecs

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — div.avance-visuel:nth-of-type(1) > div.coupe > div.coupe-avant:nth-of-type(1) > span.coupe-libelle:nth-of-type(1) « PRIX DE L'HEURE » — avec div.coupe > div.coupe-avant:nth-of-type(1) > span.coupe-cadre:nth-of-type(2) > span.coupe-prix:nth-of-type(1) « 30 € » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/services` — div.avance-visuel:nth-of-type(2) > div.coupe > div.coupe-avant:nth-of-type(1) > span.coupe-libelle:nth-of-type(1) « PRIX DE L'HEURE » — avec div.coupe > div.coupe-avant:nth-of-type(1) > span.coupe-cadre:nth-of-type(2) > span.coupe-prix:nth-of-type(1) « 30 € » _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_

### contraste sur image (2)

- **contraste sur image** — `/404` — h1.introuvable-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne > em « faire les courses. » — 2.89:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_
- **contraste sur image** — `/404` — section#debut > div.conteneur.introuvable-texte > p.hero-anim:nth-of-type(3) > a.lien-tel « 06 87 54 68 88 » — 1.73:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.hero-anim:nth-of-type(3) « 06 87 54 68 88 » _(320×568 sansJs)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (2)

- **section sans visuel** — `/reserver` — section#debut « RÉSERVATION Réservez un créneau. Appeler Jérôme Pr » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 844×390 normal, 1366×768 normal, 1366×768 sansJs, 320×568 sansJs, 1366×768 sansWebgl)_
- **section sans visuel** — `/reserver` — section#debut « RÉSERVATION Réservez un créneau. Choisissez un ser » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 390×844 sansJs, 1920×1080 normal, 390×844 sansWebgl)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 33 min de travail pour 115 min de budget, 6 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /jerome, /reserver, /services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/services --seulement=fichiers,mesures
```
