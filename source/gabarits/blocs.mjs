/* Blocs communs à plusieurs pages d'ATOUS CŒUR : image depuis donnees/images.json, pictogrammes des services,
   prix, cartes des services, carte autour de Hondainville, appel final. */
import { html, brut, texteBrut } from '../../outils/gabarit.mjs';
export const VOITURE_SVG = '<svg viewBox="0 0 64 32" aria-hidden="true"><path d="M6 22c0-4 2-7 6-8l8-7h18l10 7h6c3 0 5 2 5 5v3z" fill="#fff" stroke="#2D1838" stroke-width="2" stroke-linejoin="round"/><path d="M9 21l40-10 3 3-40 10z" fill="#D7262E"/><circle cx="17" cy="24" r="5" fill="#2D1838"/><circle cx="48" cy="24" r="5" fill="#2D1838"/></svg>';

/* Image du pipeline (donnees/images.json) : alt et cadrages relus dans la fiche. */
export function image(c, nom, o = {}) {
  const f = (c.donnees.images || {})[nom] || {};
  const r = c.media({ nom, alt: f.alt || '', cadrage: f.cadrage || '50% 50%', cadrageMobile: f.mobile?.cadrage, ...o });
  /* Aperçu flou (20 px) en fond des images d'ouverture : jamais de case grise au retour arrière ou avant. */
  const a = (c.donnees.apercus || {})[nom];
  if (!a) return r;
  return brut(texteBrut(r).replace('style="--cadrage:', `style="--apercu:url(${a.d})${a.m ? `;--apercu-mobile:url(${a.m})` : ''};--cadrage:`));
}

/* Pictogrammes au trait (48 × 48), comme les autocollants de la portière : ils se dessinent (data-effet="picto"). */
const PICTOS = {
  menage: ['M10 22h20l-2.5 18h-15z', 'M13 22c0-7 14-7 14 0', 'M37 5v25', 'M31.5 30h11l2 11h-15z', 'M35 34v6M39 34v6'],
  jardin: ['M24 42V22', 'M24 31c-9 0-13-7-13-15 9 0 13 7 13 15z', 'M24 25c0-8 4-13 13-13 0 9-4 13-13 13z', 'M9 42h30'],
  courses: ['M7 18h34l-4.5 21h-25z', 'M16 18l6-11', 'M32 18l-6-11', 'M18 25v8M24 25v8M30 25v8'],
  repas: ['M9 24h30v9a9 9 0 0 1-9 9H18a9 9 0 0 1-9-9z', 'M5 24h38', 'M18 17c-2.5-3 2.5-5 0-9', 'M24 17c-2.5-3 2.5-5 0-9', 'M30 17c-2.5-3 2.5-5 0-9'],
  rendezvous: ['M8 11h32v30H8z', 'M8 19h32', 'M16 6v9M32 6v9', 'M24 24v12', 'M18 30h12'],
  papiers: ['M12 5h18l8 8v30H12z', 'M30 5v8h8', 'M18 21h14', 'M18 27h14', 'M18 33h9'],
  inscription: ['M24 41s-15-9-15-20a8 8 0 0 1 15-4 8 8 0 0 1 15 4c0 11-15 20-15 20z'],
};
export function picto(nom, classe = 'picto') {
  return brut(`<svg class="${classe}" viewBox="0 0 48 48" aria-hidden="true" focusable="false">${(PICTOS[nom] || []).map((d) => `<path d="${d}" pathLength="1"/>`).join('')}</svg>`);
}

/* Prix : « 30 € / h », et la moitié avec l'avance immédiate. */
const euros = (n) => (Number.isInteger(n) ? `${n}` : n.toFixed(2).replace('.', ',')) + ' €';
export const prix = (n) => euros(n);
export function prixBloc(c, s) {
  if (s.prix == null) return html`<p class="prix prix--demande" data-prix>${c.t('commun.surDemande')}</p>`;
  return html`<p class="prix" data-prix><strong>${euros(s.prix)}</strong> <span class="prix-unite">${c.t('commun.parHeure')}</span><span class="prix-avance">${euros(s.prix / 2)} ${c.t('commun.avecAvance')}</span></p>`;
}

/* Cartes des six services (accueil). Chaque carte : photo révélée en rideau, pictogramme qui se dessine, prix au recto. */
export function cartesServices(c) {
  return html`<ul class="services-grille" role="list">${c.donnees.services.map((s, i) => html`<li class="service-carte" data-fx="vitesse" data-fx-force="2" style="--i:${i}">
    ${image(c, s.image, { classe: 'service-media', sizes: '(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw', ratio: '16 / 10', attrs: 'data-anime="rideau"' })}
    <div class="service-corps">
      <span class="service-picto" data-effet="picto">${picto(s.picto)}</span>
      <h3>${s.nom}</h3>
      <p>${s.texte}</p>
      ${prixBloc(c, s)}
      ${c.lien('reserver', { params: `service=${s.cle}`, classe: 'service-lien', texte: html`${c.t('commun.reserverService')} <span aria-hidden="true">→</span>`, attrs: `aria-label="${c.s('commun.reserverService')} : ${s.nom}"` })}
    </div>
  </li>`)}</ul>`;
}

/* Carte schématique autour de Hondainville : positions calculées depuis les coordonnées réelles. */
const VILLES = [
  { nom: 'Hondainville', lat: 49.3379, lon: 2.3026, centre: true },
  { nom: 'Mouy', lat: 49.3153, lon: 2.3188, cote: 'b' },
  { nom: 'Noailles', lat: 49.3281, lon: 2.2011, cote: 'g' },
  { nom: 'Clermont', lat: 49.3786, lon: 2.4128, cote: 'd' },
  { nom: 'Liancourt', lat: 49.3303, lon: 2.4669, cote: 'g' },
  { nom: 'Creil', lat: 49.2597, lon: 2.4747, cote: 'g' },
  { nom: 'Beauvais', lat: 49.4295, lon: 2.0807, cote: 'd' },
];
const km = (a, b) => { const R = 6371, r = Math.PI / 180, dl = (b.lat - a.lat) * r, dg = (b.lon - a.lon) * r;
  const h = Math.sin(dl / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dg / 2) ** 2; return Math.round(2 * R * Math.asin(Math.sqrt(h))); };
const proj = (v) => ({ x: Math.round(40 + (v.lon - 2.06) * 0.652 * 1900), y: Math.round(24 + (49.445 - v.lat) * 1900) });
export function carteOise(c) {
  const h = proj(VILLES[0]);
  const villes = VILLES.slice(1).map((v) => ({ ...v, ...proj(v) }));
  /* Routes schématiques depuis Hondainville (traits qui se dessinent). */
  const routes = villes.map((v) => `M${h.x} ${h.y} Q ${Math.round((h.x + v.x) / 2 + (v.y - h.y) * 0.12)} ${Math.round((h.y + v.y) / 2 - (v.x - h.x) * 0.12)} ${v.x} ${v.y}`);
  return html`<figure class="carte-oise" data-visuel data-effet="carte-oise">
  <svg viewBox="0 0 640 430" role="img" aria-label="${c.s('commun.zone.carteAria')}">
    <defs><linearGradient id="carte-bande" x1="0" x2="1"><stop offset="0" stop-color="#5B2A86"/><stop offset="1" stop-color="#D7262E"/></linearGradient></defs>
    <path class="carte-riviere" d="M70 70 C 150 120, 230 160, 300 200 S 400 268, 470 300 S 560 350, 610 372" pathLength="1"/>
    ${brut(routes.map((d) => `<path class="carte-route" data-superpose d="${d}" pathLength="1"/>`).join(''))}
    <g class="carte-ondes" data-superpose transform="translate(${h.x} ${h.y})"><circle r="40"/><circle r="40"/><circle r="40"/></g>
    ${brut(villes.map((v) => `<g class="carte-ville" data-repere transform="translate(${v.x} ${v.y})"><g><circle r="6"/><text x="${v.cote === 'g' ? -12 : v.cote === 'b' ? 0 : 12}" y="${v.cote === 'b' ? 30 : 6}" text-anchor="${v.cote === 'g' ? 'end' : v.cote === 'b' ? 'middle' : 'start'}">${v.nom}</text></g></g>`).join(''))}
    <path class="carte-trace" data-superpose d="M${h.x} ${h.y} L${h.x} ${h.y}"/>
    <g class="carte-centre" data-repere transform="translate(${h.x} ${h.y})"><g><circle r="13"/><path d="M0 5s-6.5-4-6.5-8.6a3.4 3.4 0 0 1 6.5-1.7 3.4 3.4 0 0 1 6.5 1.7C6.5 1 0 5 0 5z" fill="#fff"/><text x="0" y="-24" text-anchor="middle">Hondainville</text></g></g>
    <g class="carte-voiture" data-voiture data-superpose data-x="${h.x}" data-y="${h.y}" transform="translate(${h.x} ${h.y})"><g class="carte-voiture-corps"><rect x="-26" y="-30" width="52" height="40" fill="transparent"/><path d="M-20 0c0-4 2-6 5-7l6-6h14l8 6h5c2 0 4 2 4 4v3z" fill="#fff" stroke="#2D1838" stroke-width="2" stroke-linejoin="round"/><path d="M-18-1l32-8 3 3-33 8z" fill="url(#carte-bande)"/><circle cx="-12" cy="1" r="4" fill="#2D1838"/><circle cx="12" cy="1" r="4" fill="#2D1838"/></g></g>
  </svg>
  <p class="carte-info" data-carte-info data-suffixe="${c.s('commun.zone.volOiseau')}" role="status">${c.t('commun.zone.infoDepart')}</p>
  <ul class="carte-distances" role="list" aria-label="${c.s('commun.zone.villes')}">
    ${villes.map((v) => html`<li><button type="button" data-ville="${v.nom}" data-x="${v.x}" data-y="${v.y}" data-km="${km(VILLES[0], v)}">${v.nom} <span>${km(VILLES[0], v)} km</span></button></li>`)}
  </ul>
  <figcaption>${c.t('commun.zone.legende')}</figcaption>
</figure>`;
}

export function zone(c, id = 'zone') {
  return html`<section class="zone" id="${id}">
  <div class="conteneur zone-grille">
    <div class="zone-texte">
      <p class="surtitre" data-anime>${c.t('commun.zone.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('commun.zone.titre1')} <em>${c.t('commun.zone.titre2')}</em></h2>
      <p data-anime>${c.t('commun.zone.texte')}</p>
      <p class="zone-jeu" data-anime><strong>${c.t('commun.zone.jeu')}</strong> ${c.t('commun.zone.jeuAide')}</p>
      <p data-anime><a class="bouton" href="tel:${c.site.contact.telephoneLien}" data-survol="magnetique">${c.t('commun.appelerJerome')}</a></p>
    </div>
    ${carteOise(c)}
  </div>
</section>`;
}

/* Appel final, fond aubergine, la bande traverse au défilement. */
export function appelFinal(c) {
  return html`<section class="appel" id="appel">
  <span class="appel-bande" data-visuel aria-hidden="true"><i data-effet="bande"></i></span>
  <div class="conteneur appel-grille">
    <p class="surtitre" data-anime>${c.t('commun.fin.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('commun.fin.titre1')} <em>${c.t('commun.fin.titre2')}</em></h2>
    <p class="appel-tel" data-anime><a href="tel:${c.site.contact.telephoneLien}" data-survol="magnetique">${c.site.contact.telephone}</a></p>
    <p data-anime>${c.t('commun.fin.texte')}</p>
    <p class="appel-actions" data-anime>${c.lien('reserver', { classe: 'bouton', texte: c.t('commun.fin.reserver'), attrs: 'data-survol="magnetique"' })} ${c.lien('contact', { ancre: 'ecrire', classe: 'bouton bouton--contour', texte: c.t('commun.fin.ecrire') })}</p>
  </div>
</section>`;
}

/* Composez votre semaine : jetons des services à glisser (ou toucher) sur les jours ; heures, prix et reste à charge.
   État de départ (sans JavaScript aussi) : deux heures de ménage, mardi et vendredi. */
const JOURS = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];
const DEPART = { 1: ['menage'], 4: ['menage'] };
export function composeur(c, id) {
  const services = c.donnees.services.filter((s) => s.prix != null);
  const teinte = (cle) => services.findIndex((s) => s.cle === cle) + 1;
  const nom = (cle) => services.find((s) => s.cle === cle).court;
  const mini = (cle) => services.find((s) => s.cle === cle).mini;
  const total0 = Object.values(DEPART).flat().reduce((t, k) => t + services.find((s) => s.cle === k).prix, 0);
  return html`<div class="composeur" data-composeur data-effet="composeur" data-grille="manipuler" aria-labelledby="${id}" data-t-plein="${c.s('commun.composeur.plein')}" data-t-ajoute="${c.s('commun.composeur.ajoute')}" data-t-retire="${c.s('commun.composeur.retire')}" data-t-vide="${c.s('commun.composeur.vide')}" data-t-ajouter="${c.s('commun.composeur.ajouter')}" data-t-retirer="${c.s('commun.composeur.retirer')}">
  <div class="composeur-tete">
    <p class="composeur-titre" id="${id}">${c.t('commun.composeur.titre')}</p>
    <p class="composeur-aide">${c.t('commun.composeur.aide')}</p>
  </div>
  <div class="composeur-jetons" role="group" aria-label="${c.s('commun.composeur.jetons')}">
    ${services.map((s) => html`<button type="button" class="jeton" data-jeton="${s.cle}" data-prix="${s.prix}" data-nom="${s.court}" data-mini="${s.mini}" aria-pressed="false" style="--t:var(--t${teinte(s.cle)})"><span class="jeton-picto">${picto(s.picto, 'picto picto--jeton')}</span><span class="jeton-nom">${s.court}</span><span class="jeton-prix">${s.prix} €/h</span></button>`)}
  </div>
  <ol class="composeur-semaine" role="list" aria-label="${c.s('commun.composeur.semaine')}">
    ${JOURS.map((j, i) => html`<li class="jour" data-jour="${i}" data-nom-jour="${c.s(`commun.composeur.${j}`)}">
      <button type="button" class="jour-cible"><span class="jour-court" aria-hidden="true">${c.s(`commun.composeur.${j}`).slice(0, 3)}</span><span class="visuellement-cache">${c.t(`commun.composeur.${j}`)}</span></button>
      <div class="jour-pile">${(DEPART[i] || []).map((k) => html`<button type="button" class="bloc" data-service="${k}" style="--t:var(--t${teinte(k)})" aria-label="${c.s('commun.composeur.retirer', { service: nom(k), jour: c.s(`commun.composeur.${j}`).toLowerCase() })}"><span>${mini(k)}</span></button>`)}</div>
    </li>`)}
  </ol>
  <dl class="composeur-totaux" aria-live="polite">
    <div><dt>${c.t('commun.composeur.heures')}</dt><dd data-c="heures">${Object.values(DEPART).flat().length} h</dd></div>
    <div><dt>${c.t('commun.composeur.total')}</dt><dd data-c="total">${prix(total0 * 4)}</dd></div>
    <div class="composeur-vous"><dt>${c.t('commun.composeur.vous')}</dt><dd data-c="vous"><span class="composeur-barre" aria-hidden="true"></span>${prix(total0 * 2)}</dd></div>
  </dl>
  <p class="composeur-pied"><span data-c="message" role="status">${c.t('commun.composeur.demo')}</span> <button type="button" class="lien-fleche composeur-vider" data-vider>${c.t('commun.composeur.vider')}</button></p>
</div>`;
}
