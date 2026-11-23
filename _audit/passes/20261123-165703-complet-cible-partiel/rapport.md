# Rapport d’audit

Projet : `atouscoeurjerome-maquette` · 23/11/2026 18:00:44 · 4 min · 3 page(s) · audit complet ciblé sur /,/services,/contact (étapes : fichiers, grille, mesures)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261123-165703-complet-cible-partiel` · version ?v=2
- Échecs : **0**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (117), balayage (3)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil et 1 autre(s) page(s) |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | — dispensé | glisse voulue : bord d'attaque et bord de fuite en diagonale, à la pente de la bande de la voiture |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /reserver |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-161336-rapide-cible | rapide | /,/services,/jerome,/reserver,/contact,/404 | toutes | 36 | 12 | 5 | échecs |
| 20261123-162422-complet | complet | toutes | toutes | 16 | 13 | 1 | échecs |
| 20261123-164719-complet-partiel | complet | toutes | fichiers, mesures, parcours | 0 | 6 | 0 | complet |
| **20261123-165703-complet-cible-partiel** (celle-ci) | complet | /,/services,/contact | fichiers, grille, mesures | 0 | 3 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 3 étape(s) notée(s), 47 min de travail pour 95 min de budget, 0 min d’attente de l’utilisateur.
- Grille wouahou : point « 3. La transition reprend le motif » dispensé (config.json) : glisse voulue : bord d'attaque et bord de fuite en diagonale, à la pente de la bande de la voiture.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
