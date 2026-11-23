/* Accueil d'ATOUS CŒUR : ouverture plein cadre sur le vrai jardin, services, avance immédiate, Jérôme et sa voiture,
   trois étapes sur la route, zone autour de Hondainville, engagements, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { image, cartesServices, picto, zone, appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'accueil-ouverture-1280.webp' };

const sim = (c) => c.donnees.services.filter((s) => s.prix != null);

export default (c) => html`
<section class="hero" id="debut" data-plein-ecran>
  ${image(c, 'accueil-ouverture', { priorite: true, classe: 'hero-media', sizes: '100vw', attrs: 'data-effet="hero-photo"' })}
  <span class="hero-bande" data-iris-centre data-superpose aria-hidden="true"><i data-effet="bande"><b class="bande-reflet"></b></i></span>
  <div class="hero-texte conteneur">
    <p class="surtitre hero-anim">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="hero-titre"><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span> <span class="ligne-masque"><span class="hero-ligne"><em>${c.t('accueil.hero.titre2')}</em></span></span></h1>
    <p class="hero-intro hero-anim masque-ecran-bas">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions hero-anim">
      <a class="bouton" href="tel:${c.site.contact.telephoneLien}" data-action-principale data-survol="magnetique">${c.t('commun.appelerJerome')}<span class="masque-telephone"> · ${c.site.contact.telephone}</span></a>
      ${c.lien('reserver', { classe: 'bouton bouton--clair', texte: c.t('accueil.hero.reserver') })}
    </p>
  </div>
  <aside class="hero-info hero-anim" data-info-cle>
    <strong>${c.t('accueil.hero.infoTitre')}</strong>
    <span class="hero-info-prix" data-prix>${c.t('accueil.hero.infoPrix')}</span>
    <span>${c.t('accueil.hero.infoTexte')}</span>
  </aside>
</section>

<section class="services" id="services">
  <div class="conteneur">
    <header class="section-tete">
      <p class="surtitre" data-anime>${c.t('accueil.services.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.services.titre1')} <em>${c.t('accueil.services.titre2')}</em></h2>
      <p class="section-intro" data-anime>${c.t('accueil.services.texte')}</p>
    </header>
    ${cartesServices(c)}
    <div class="services-pied" data-anime>
      <p>${c.t('accueil.services.aussi')}</p>
      ${c.lien('services', { classe: 'bouton bouton--contour', texte: c.t('accueil.services.tout') })}
    </div>
  </div>
</section>

<section class="avance theme-sombre" id="avance">
  <div class="conteneur avance-grille">
    <div class="avance-visuel" data-visuel data-effet="prix-coupe">
      <p class="visuellement-cache">${c.t('accueil.avance.lecteur')}</p>
      <div class="coupe" aria-hidden="true">
        <div class="coupe-avant"><span class="coupe-libelle">${c.t('accueil.avance.prixAvant')}</span><span class="coupe-cadre"><span class="coupe-prix">${c.t('accueil.avance.valeurAvant')}</span><span class="coupe-bande" data-superpose><i></i></span></span></div>
        <div class="coupe-apres"><span class="coupe-libelle">${c.t('accueil.avance.prixApres')}</span><span class="coupe-nouveau">${c.t('accueil.avance.valeurApres')}</span></div>
      </div>
    </div>
    <div class="avance-texte">
      <p class="surtitre" data-anime>${c.t('accueil.avance.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.avance.titre1')} <em>${c.t('accueil.avance.titre2')}</em></h2>
      <p data-anime>${c.t('accueil.avance.texte')}</p>
      <form class="simulateur" data-simulateur data-anime onsubmit="return false">
        <p class="simulateur-titre">${c.t('accueil.avance.simTitre')}</p>
        <div class="simulateur-champs">
          <label class="champ"><span>${c.t('accueil.avance.simService')}</span>
            <select name="service">${sim(c).map((s, i) => html`<option value="${s.prix}"${i === 0 ? ' selected' : ''}>${s.nom} · ${s.prix} €/h</option>`)}</select></label>
          <div class="champ"><span id="sim-heures-l">${c.t('accueil.avance.simHeures')}</span>
            <div class="pas-a-pas" role="group" aria-labelledby="sim-heures-l">
              <button type="button" data-moins aria-label="${c.s('accueil.avance.simMoins')}">−</button>
              <output name="heures" aria-live="polite">2</output>
              <button type="button" data-plus aria-label="${c.s('accueil.avance.simPlus')}">+</button>
            </div></div>
        </div>
        <dl class="simulateur-resultat" aria-live="polite">
          <div><dt>${c.t('accueil.avance.simPrix')}</dt><dd data-total>240 €</dd></div>
          <div class="simulateur-vous"><dt>${c.t('accueil.avance.simVous')}</dt><dd data-vous>120 €</dd></div>
        </dl>
      </form>
      <p class="note" data-anime>${c.t('accueil.avance.note')}</p>
      <p data-anime>${c.lien('services', { ancre: 'avance', classe: 'lien-fleche', texte: html`${c.t('accueil.avance.lien')} <span aria-hidden="true">→</span>` })}</p>
    </div>
  </div>
</section>

<section class="jerome-bloc" id="jerome">
  <div class="conteneur jerome-grille">
    ${image(c, 'voiture', { classe: 'jerome-media', sizes: '(max-width: 760px) 100vw, 55vw', ratio: '16 / 10', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <div class="jerome-texte">
      <p class="surtitre" data-anime>${c.t('accueil.jerome.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.jerome.titre1')} <em>${c.t('accueil.jerome.titre2')}</em></h2>
      <p data-anime>${c.t('accueil.jerome.texte')}</p>
      <ul class="trois-mots" data-anime="cascade" role="list"><li>${c.t('accueil.jerome.mot1')}</li><li>${c.t('accueil.jerome.mot2')}</li><li>${c.t('accueil.jerome.mot3')}</li></ul>
      <p data-anime>${c.lien('jerome', { classe: 'bouton bouton--contour', texte: c.t('accueil.jerome.lien') })}</p>
    </div>
  </div>
</section>

<section class="etapes theme-lin" id="etapes">
  <div class="conteneur">
    <header class="section-tete section-tete--centre">
      <p class="surtitre" data-anime>${c.t('accueil.etapes.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.etapes.titre1')} <em>${c.t('accueil.etapes.titre2')}</em></h2>
    </header>
    <div class="route" data-effet="route" data-visuel>
      <svg class="route-trace" viewBox="0 0 1200 220" preserveAspectRatio="none" aria-hidden="true">
        <path class="route-fond" d="M0 150 C 180 150, 220 60, 400 70 S 640 180, 800 160 S 1040 50, 1200 80"/>
        <path class="route-ligne" d="M0 150 C 180 150, 220 60, 400 70 S 640 180, 800 160 S 1040 50, 1200 80"/>
        <path class="route-faite" d="M0 150 C 180 150, 220 60, 400 70 S 640 180, 800 160 S 1040 50, 1200 80" pathLength="1"/>
      </svg>
      <span class="route-voiture" aria-hidden="true"><svg viewBox="0 0 64 32"><defs><linearGradient id="voiture-bande" x1="0" x2="1"><stop offset="0" stop-color="#5B2A86"/><stop offset="1" stop-color="#D7262E"/></linearGradient></defs><path d="M6 22c0-4 2-7 6-8l8-7h18l10 7h6c3 0 5 2 5 5v3z" fill="#fff" stroke="#2D1838" stroke-width="2" stroke-linejoin="round"/><path d="M9 21l40-10 3 3-40 10z" fill="url(#voiture-bande)"/><circle cx="17" cy="24" r="5" fill="#2D1838"/><circle cx="48" cy="24" r="5" fill="#2D1838"/></svg></span>
      <span class="route-verticale" aria-hidden="true"></span>
      <ol class="route-etapes" role="list">
        <li class="route-etape"><span class="route-num">1</span><h3>${c.t('accueil.etapes.e1titre')}</h3><p>${c.t('accueil.etapes.e1texte')}</p></li>
        <li class="route-etape"><span class="route-num">2</span><h3>${c.t('accueil.etapes.e2titre')}</h3><p>${c.t('accueil.etapes.e2texte')}</p></li>
        <li class="route-etape"><span class="route-num">3</span><h3>${c.t('accueil.etapes.e3titre')}</h3><p>${c.t('accueil.etapes.e3texte')}</p></li>
      </ol>
    </div>
  </div>
</section>

${zone(c)}

<section class="engagements" id="engagements">
  <div class="conteneur engagements-grille">
    <div class="engagements-texte">
      <p class="surtitre" data-anime>${c.t('accueil.engagements.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.engagements.titre1')} <em>${c.t('accueil.engagements.titre2')}</em></h2>
      <ul class="engagements-liste" role="list">
        ${[1, 2, 3, 4].map((n) => html`<li data-anime style="--delai:${(n - 1) * 0.08}s"><span class="coche" aria-hidden="true">${picto('inscription', 'coche-coeur')}</span><div><h3>${c.t(`accueil.engagements.e${n}titre`)}</h3><p>${c.t(`accueil.engagements.e${n}texte`)}</p></div></li>`)}
      </ul>
      <p class="engagements-sap" data-anime>${c.t('commun.sap')}</p>
    </div>
    ${image(c, 'grok/calme', { classe: 'engagements-media', sizes: '(max-width: 760px) 100vw, 45vw', ratio: '4 / 5', attrs: 'data-fx="zoom" data-fx-force="14"' })}
  </div>
  <p class="conteneur grande-phrase" data-anime="mots">${c.t('accueil.engagements.phrase')}</p>
</section>

${appelFinal(c)}
`;
