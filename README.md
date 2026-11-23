# ATOUS CŒUR · maquette (v2)

Maquette de site pour **ATOUS CŒUR**, services à la personne de Jérôme Sannier à Hondainville (Oise).
Site actuel : https://www.atouscoeurjerome.com (Wix). Maquette : https://atouscoeurjerome-maquette.vercel.app

Direction artistique : **les couleurs de la voiture**. Blanc chaud, lin, aubergine, rouge ; la bande rouge et violette de la voiture d'ATOUS CŒUR traverse l'écran à l'ouverture, coupe le prix en deux dans la section avance immédiate et revient dans l'appel final. Titres en Bricolage Grotesque, texte en Atkinson Hyperlegible (police conçue pour les personnes qui voient mal), en 18 px.

## Pages

| Page | Adresse | Contenu |
|---|---|---|
| Accueil | `/` | ouverture plein cadre (vrai jardin), six services avec prix, avance immédiate et simulateur, Jérôme et sa voiture, trois étapes, carte autour de Hondainville, engagements, appel final |
| Services | `/services` | six services en détail, tarifs, avance immédiate pas à pas et simulateur, questions fréquentes |
| Jérôme | `/jerome` | « Passionnés. Expérimentés. Attentionnés. », l'idée, la voiture annotée, sur la route, la confiance, déclaré SAP |
| Réserver | `/reserver` | réservation simulée en quatre étapes, récapitulatif avec prix et reste à charge |
| Contact | `/contact` | numéro en grand, formulaire simulé, carte |
| 404 | `/404` | « Cette page est partie faire les courses. » |

Pages du site actuel non reprises (disponibles en v2) : Blog (un seul article, sur la déclaration SAP et l'avance immédiate), Galerie partagée et Members (pages Wix vides).

## À fournir par le client (à compléter)

- **Mentions légales** : raison sociale exacte, forme juridique, adresse du siège, directeur de la publication. SIRET 924 824 808 00019 et déclaration SAP 924824808 sont repris du site actuel.
- **Hébergeur** : Vercel Inc., adresse à vérifier sur le site de Vercel au moment de la mise en ligne.
- **Politique de confidentialité** (RGPD) : données des formulaires, finalité, durée de conservation, droits.
- **Assurance** responsabilité civile professionnelle : aucune mention sur le site actuel, rien n'est affiché.
- **Crédits** : photos du client (voiture, jardin, chemin, pôle santé) ; onze illustrations générées par IA, marquées « Illustration générée » à l'écran.

### Retiré ou remplacé faute d'information

- **Horaires** : aucun sur le site actuel ; aucun horaire ni « ouvert maintenant » n'est affiché (page Réserver : moment souhaité, matin ou après-midi).
- **Zone d'intervention** : non précisée ; la carte montre Hondainville et des villes voisines comme repères, avec leur distance à vol d'oiseau (calculée) et la phrase « La zone d'intervention se précise par téléphone ».
- **Tarifs de l'aide aux repas et de l'aide à la toilette** : absents ; « Tarif sur demande ».
- **Photo de Jérôme** : aucune ; la page Jérôme s'appuie sur sa voiture et ses photos de terrain.
- **Témoignages, chiffres, équipe** : aucun sur le site actuel, rien n'est inventé.
- **Réseaux sociaux** : la voiture mentionne Facebook « ATOUS CŒUR Jerome » et Instagram « sannier.jerome », mais le lien Facebook du site actuel mène à wix.com ; aucun lien n'est posé. Adresses exactes à fournir.

## Points à vérifier avec Jérôme

- **Aide à la toilette, accompagnement hors du domicile** de personnes âgées ou handicapées : en mode prestataire, ces activités demandent une **autorisation du président du Conseil départemental**, en plus de la déclaration SAP. Gardées dans la maquette comme sur le site actuel ; à confirmer avant la mise en ligne.
- **Avance immédiate** : le blog l'annonce (« AVANCE IMMEDIATE URSSAF ») ; la maquette affiche le reste à charge (moitié du prix, sous conditions). À confirmer que le service est bien actif chez ATOUS CŒUR.
- **Prix** : repris de la page « Réserver en ligne » du site actuel (séances d'une heure) ; à confirmer.
- **Nom** : trois écritures sur le site et la voiture (ATOUS COEUR JEROME, ATOUS CŒUR, ATOUSCOEUR JEROME) ; la maquette retient « ATOUS CŒUR ».
- **Logo** : le logo « S! services à la personne » du site actuel est le logo national du secteur, pas celui d'ATOUS CŒUR. La maquette compose le nom en lettres, avec la bande de la voiture (`assets/images/logo.svg`).

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`), réservation et formulaire simulés (à brancher sur un vrai service), mentions « à compléter » du pied de page, phrase « Maquette de démonstration ».
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Fabrication

- Pages générées depuis `donnees/` (textes dans `donnees/textes/fr.json`, services dans `donnees/services.json`) par `node outils/generer.mjs` ; ne jamais modifier les pages HTML à la main.
- Images : `plan-images.json` et le pipeline de la bibliothèque (`produire.mjs`, `partage.mjs`).
- Effets propres (`assets/js/site.js`) : bande, respiration du premier écran, prix coupé, route des étapes, carte de l'Oise et voiture à faire rouler, composeur de semaine, voiture de lecture sous l'en-tête, pictogrammes, bandeau, portière, tampon, tarifs, numéro, réservation et arrivée.
- Module de la bibliothèque : `formulaire-par-etapes` (réservation).
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/`).
