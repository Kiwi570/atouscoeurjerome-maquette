# Rapport d’audit

Projet : `atouscoeurjerome-maquette` · 23/11/2026 16:38:14 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261123-153144-complet-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (8)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-151041-standard | standard | toutes | toutes | 43 | 36 | 1 | échecs |
| 20261123-152758-standard-partiel | standard | toutes | fichiers, mesures | 5 | 4 | 0 | échecs |
| 20261123-153027-standard-cible-partiel | standard | /,/404,/services | fichiers, mesures | 0 | 2 | 0 | complet |
| **20261123-153144-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 2 | 2 | 0 | échecs |

## Échecs

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — svg > g.carte-ville:nth-of-type(2) > g > text — avec svg > g.carte-ville:nth-of-type(5) > g > text _(844×390 sansJs, 768×1024 sansJs)_
- **textes qui se chevauchent** — `/contact` — svg > g.carte-ville:nth-of-type(2) > g > text — avec svg > g.carte-ville:nth-of-type(5) > g > text _(844×390 sansJs, 768×1024 sansJs)_

## À regarder

### section sans visuel (2)

- **section sans visuel** — `/reserver` — section#debut « RÉSERVATION Réservez un créneau. Appeler Jérôme Pr » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 844×390 normal, 1024×768 normal, 1000×560 normal, 1280×720 normal, +15)_
- **section sans visuel** — `/reserver` — section#debut « RÉSERVATION Réservez un créneau. Choisissez un ser » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, 2560×1440 normal, +12)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /jerome : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/contact --seulement=fichiers,mesures
```
