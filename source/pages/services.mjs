/* Services et tarifs : ouverture scindée (titre et fourchette de prix, photo de l'entrée), six services en rangées,
   tarifs, avance immédiate pas à pas avec simulateur, questions fréquentes, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { image, picto, prixBloc, prix, appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'services', fichier: 'services', imagePartage: 'grok/services-ouverture-1168.webp' };

export const simulateur = (c, id) => html`<form class="simulateur" data-simulateur data-anime onsubmit="return false" aria-labelledby="${id}">
  <p class="simulateur-titre" id="${id}">${c.t('accueil.avance.simTitre')}</p>
  <div class="simulateur-champs">
    <label class="champ"><span>${c.t('accueil.avance.simService')}</span>
      <select name="service">${c.donnees.services.filter((s) => s.prix != null).map((s, i) => html`<option value="${s.prix}"${i === 0 ? ' selected' : ''}>${s.nom} · ${s.prix} €/h</option>`)}</select></label>
    <div class="champ"><span id="${id}-h">${c.t('accueil.avance.simHeures')}</span>
      <div class="pas-a-pas" role="group" aria-labelledby="${id}-h">
        <button type="button" data-moins aria-label="${c.s('accueil.avance.simMoins')}">−</button>
        <output aria-live="polite">2</output>
        <button type="button" data-plus aria-label="${c.s('accueil.avance.simPlus')}">+</button>
      </div></div>
  </div>
  <dl class="simulateur-resultat" aria-live="polite">
    <div><dt>${c.t('accueil.avance.simPrix')}</dt><dd data-total>${prix(c.donnees.services[0].prix * 8)}</dd></div>
    <div class="simulateur-vous"><dt>${c.t('accueil.avance.simVous')}</dt><dd data-vous>${prix(c.donnees.services[0].prix * 4)}</dd></div>
  </dl>
</form>`;

export default (c) => html`
<section class="tete-scindee" id="debut">
  <div class="conteneur tete-scindee-grille">
    <div class="tete-scindee-texte">
      <p class="surtitre hero-anim">${c.t('services.tete.surtitre')}</p>
      <h1 class="tete-titre"><span class="ligne-masque"><span class="hero-ligne">${c.t('services.tete.titre1')}</span></span> <span class="ligne-masque"><span class="hero-ligne"><em>${c.t('services.tete.titre2')}</em></span></span></h1>
      <p class="tete-intro hero-anim">${c.t('services.tete.texte')}</p>
      <p class="tete-fourchette hero-anim" data-info-cle><strong data-prix>${c.t('services.tete.infoPrix')}</strong><span>${c.t('services.tete.infoAvance')}</span></p>
      <p class="tete-actions hero-anim">${c.lien('reserver', { classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale data-survol="magnetique"' })} <a class="bouton bouton--contour" href="#tarifs">${c.t('services.tete.tarifs')}</a></p>
    </div>
    <div class="tete-scindee-visuel">
      <span class="tete-bande" aria-hidden="true"><i data-effet="bande"></i></span>
      ${image(c, 'grok/services-ouverture', { priorite: true, classe: 'tete-media', sizes: '(max-width: 760px) 100vw, 45vw', ratio: '4 / 5', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
    </div>
  </div>
</section>

<section class="liste-services" id="liste">
  <div class="conteneur">
    <h2 class="visuellement-cache">${c.t('services.liste.titre')}</h2>
    ${c.donnees.services.map((s, i) => html`<article class="rangee${i % 2 ? ' rangee--inverse' : ''}" id="${s.cle}">
      ${image(c, s.image, { classe: 'rangee-media', sizes: '(max-width: 760px) 100vw, 50vw', ratio: '4 / 3', attrs: 'data-anime="rideau"' })}
      <div class="rangee-texte">
        <span class="service-picto service-picto--statique" data-effet="picto">${picto(s.picto)}</span>
        <h3 data-anime="lignes">${s.nom}</h3>
        <p data-anime>${s.detail}</p>
        <div data-anime>${prixBloc(c, s)}</div>
        <p data-anime>${c.lien('reserver', { params: `service=${s.cle}`, classe: 'bouton', texte: c.t('commun.reserverService'), attrs: `aria-label="${c.s('commun.reserverService')} : ${s.nom}"` })}</p>
      </div>
    </article>`)}
    <aside class="aussi" data-anime>
      <span class="aussi-picto" aria-hidden="true">${picto('inscription', 'coche-coeur')}</span>
      <div><h3>${c.t('services.liste.aussiTitre')}</h3><p>${c.t('services.liste.aussiTexte')}</p></div>
    </aside>
  </div>
</section>

<section class="tarifs theme-lin" id="tarifs">
  <div class="conteneur tarifs-grille">
    <header class="section-tete">
      <p class="surtitre" data-anime>${c.t('services.tarifs.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('services.tarifs.titre1')} <em>${c.t('services.tarifs.titre2')}</em></h2>
      <p class="note" data-anime>${c.t('services.tarifs.note')}</p>
    </header>
    <div class="tarifs-tableau" data-visuel data-effet="tarifs">
      <table>
        <thead><tr><th scope="col">${c.t('services.tarifs.colService')}</th><th scope="col">${c.t('services.tarifs.colPrix')}</th><th scope="col">${c.t('services.tarifs.colAvance')}</th></tr></thead>
        <tbody>
          ${c.donnees.services.map((s) => html`<tr><th scope="row">${s.nom}</th>${s.prix == null ? html`<td colspan="2" data-prix>${c.t('commun.surDemande')}</td>` : html`<td data-prix><s>${prix(s.prix)}</s></td><td data-prix><strong>${prix(s.prix / 2)}</strong></td>`}</tr>`)}
          <tr class="tarifs-gratuit"><th scope="row">${c.t('services.tarifs.inscription')}</th><td colspan="2" data-prix><strong>${c.t('services.tarifs.gratuit')}</strong></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="avance theme-sombre" id="avance">
  <div class="conteneur avance-grille">
    <div class="avance-texte">
      <p class="surtitre" data-anime>${c.t('services.avance.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('services.avance.titre1')} <em>${c.t('services.avance.titre2')}</em></h2>
      <p data-anime>${c.t('services.avance.texte')}</p>
      <ol class="pas" role="list" data-anime="cascade">
        ${[1, 2, 3].map((n) => html`<li><span class="pas-num">${n}</span><div><h3>${c.t(`services.avance.e${n}titre`)}</h3><p>${c.t(`services.avance.e${n}texte`)}</p></div></li>`)}
      </ol>
      <p class="note" data-anime>${c.t('services.avance.note')}</p>
    </div>
    <div class="avance-visuel" data-visuel data-effet="prix-coupe">
      <p class="visuellement-cache">${c.t('accueil.avance.lecteur')}</p>
      <div class="coupe" aria-hidden="true">
        <div class="coupe-avant"><span class="coupe-libelle">${c.t('accueil.avance.prixAvant')}</span><span class="coupe-cadre"><span class="coupe-prix">${c.t('accueil.avance.valeurAvant')}</span><span class="coupe-bande" data-superpose><i></i></span></span></div>
        <div class="coupe-apres"><span class="coupe-libelle">${c.t('accueil.avance.prixApres')}</span><span class="coupe-nouveau">${c.t('accueil.avance.valeurApres')}</span></div>
      </div>
      ${simulateur(c, 'sim-services')}
    </div>
  </div>
</section>

<section class="faq" id="faq">
  <div class="conteneur faq-grille">
    <div>
      <h2 data-anime="lignes">${c.t('services.faq.titre')}</h2>
      ${[1, 2, 3, 4].map((n) => html`<details class="faq-item" data-anime><summary>${c.t(`services.faq.q${n}`)}</summary><p>${c.t(`services.faq.r${n}`)}</p></details>`)}
    </div>
    ${image(c, 'route', { classe: 'faq-media', sizes: '(max-width: 760px) 100vw, 40vw', ratio: '4 / 5', attrs: 'data-fx="zoom"' })}
  </div>
</section>

${appelFinal(c)}
`;
