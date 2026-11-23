/* Jérôme : grand titre (les trois mots du site) puis bandeau de la voiture qui s'ouvre en diagonale, l'idée,
   la voiture annotée, sur la route, la confiance, déclaré SAP, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { image, picto, appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'jerome', fichier: 'jerome', imagePartage: 'voiture-1600.webp' };

/* Repères sur la photo de la voiture, en % de l'image affichée (16:10, recadrage de produire.mjs). */
const REPERES = [{ x: 47, y: 44 }, { x: 24, y: 49 }, { x: 60, y: 41 }];

export default (c) => html`
<section class="tete-titre-bandeau" id="debut">
  <div class="conteneur tete-grand">
    <p class="surtitre hero-anim">${c.t('jerome.tete.surtitre')}</p>
    <h1 class="tete-mots" data-iris-centre><span class="ligne-masque"><span class="hero-ligne">${c.t('jerome.tete.mot1')}</span></span> <span class="ligne-masque"><span class="hero-ligne">${c.t('jerome.tete.mot2')}</span></span> <span class="ligne-masque"><span class="hero-ligne"><em>${c.t('jerome.tete.mot3')}</em></span></span></h1>
    <div class="tete-grand-bas">
      <p class="tete-intro hero-anim">${c.t('jerome.tete.texte')}</p>
      <div class="hero-anim">
        <p class="tete-actions"><a class="bouton" href="tel:${c.site.contact.telephoneLien}" data-action-principale data-survol="magnetique">${c.t('commun.appelerJerome')}</a> ${c.lien('services', { classe: 'bouton bouton--contour', texte: c.t('jerome.tete.services') })}</p>
        <p class="pastille" data-info-cle>${c.t('commun.sap')}</p>
      </div>
    </div>
  </div>
  <div class="bandeau" data-effet="bandeau">
    ${image(c, 'jardin-bandeau', { priorite: true, classe: 'bandeau-media', sizes: '100vw' })}
  </div>
</section>

<section class="idee" id="idee">
  <div class="conteneur idee-grille">
    <svg class="idee-dessin" viewBox="0 0 240 220" aria-hidden="true" data-visuel data-fx="trace">
      <path d="M20 110 L120 26 L220 110" pathLength="1"/>
      <path d="M44 92 V200 H196 V92" pathLength="1"/>
      <path d="M120 170 c-9-14-36-10-31 9 3 11 31 30 31 30 s28-19 31-30 c5-19-22-23-31-9z" pathLength="1"/>
    </svg>
    <div>
      <p class="surtitre" data-anime>${c.t('jerome.idee.surtitre')}</p>
      <h2 class="citation" data-anime="lignes">${c.t('jerome.idee.phrase1')} <em>${c.t('jerome.idee.phrase2')}</em></h2>
      <p class="section-intro" data-anime>${c.t('jerome.idee.texte')}</p>
    </div>
  </div>
</section>

<section class="voiture-annotee theme-lin" id="voiture">
  <div class="conteneur">
    <header class="section-tete">
      <p class="surtitre" data-anime>${c.t('jerome.voiture.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('jerome.voiture.titre1')} <em>${c.t('jerome.voiture.titre2')}</em></h2>
      <p class="section-intro" data-anime>${c.t('jerome.voiture.texte')}</p>
    </header>
    <div class="portiere" data-effet="portiere">
      ${image(c, 'voiture', { classe: 'portiere-media', sizes: '(max-width: 760px) 100vw, 80vw', ratio: '16 / 10' })}
      ${REPERES.map((r, i) => html`<span class="portiere-point" data-superpose data-repere aria-hidden="true" style="left:${r.x}%;top:${r.y}%">${i + 1}</span>`)}
    </div>
    <ol class="portiere-legende" role="list">
      ${[1, 2, 3].map((n) => html`<li data-anime style="--delai:${(n - 1) * 0.1}s"><span class="portiere-num" aria-hidden="true">${n}</span>${c.t(`jerome.voiture.p${n}`)}</li>`)}
    </ol>
  </div>
</section>

<section class="route-photos" id="route">
  <div class="conteneur route-photos-grille">
    <div class="route-photos-texte">
      <h2 data-anime="lignes">${c.t('jerome.route.titre1')} <em>${c.t('jerome.route.titre2')}</em></h2>
      <p data-anime>${c.t('jerome.route.texte')}</p>
    </div>
    ${image(c, 'route', { classe: 'route-photo route-photo--1', sizes: '(max-width: 760px) 100vw, 40vw', ratio: '4 / 3', legende: c.t('jerome.route.legende1'), attrs: 'data-fx="vitesse"' })}
    ${image(c, 'rendez-vous', { classe: 'route-photo route-photo--2', sizes: '(max-width: 760px) 100vw, 40vw', ratio: '4 / 3', legende: c.t('jerome.route.legende2'), attrs: 'data-fx="vitesse" data-fx-force="2"' })}
  </div>
</section>

<section class="confiance" id="confiance">
  <div class="conteneur confiance-grille">
    ${image(c, 'grok/cles', { classe: 'confiance-media', sizes: '(max-width: 760px) 100vw, 40vw', ratio: '4 / 5', attrs: 'data-fx="parallaxe"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('jerome.confiance.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('jerome.confiance.titre1')} <em>${c.t('jerome.confiance.titre2')}</em></h2>
      <ul class="confiance-liste" role="list" data-anime="cascade">
        ${[1, 2, 3, 4].map((n) => html`<li><span class="coche" aria-hidden="true">${picto('inscription', 'coche-coeur')}</span>${c.t(`jerome.confiance.e${n}`)}</li>`)}
      </ul>
    </div>
  </div>
</section>

<section class="sap theme-sombre" id="sap">
  <div class="conteneur sap-grille">
    <svg class="tampon" viewBox="0 0 200 200" aria-hidden="true" data-visuel data-effet="tampon">
      <defs><path id="tampon-cercle" d="M100 100 m-74 0 a74 74 0 1 1 148 0 a74 74 0 1 1 -148 0"/></defs>
      <circle cx="100" cy="100" r="92"/><circle cx="100" cy="100" r="56"/>
      <text><textPath href="#tampon-cercle">${c.t('commun.introLigne')} · ${c.t('commun.base')} ·</textPath></text>
      <path class="tampon-coeur" d="M100 121c-12-8-24-17-24-29a12 12 0 0 1 24-5 12 12 0 0 1 24 5c0 12-12 21-24 29z"/>
    </svg>
    <div>
      <p class="surtitre" data-anime>${c.t('jerome.sap.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('jerome.sap.titre1')} <em>${c.t('jerome.sap.titre2')}</em></h2>
      <p data-anime>${c.t('jerome.sap.texte')}</p>
      <p class="sap-numeros" data-anime>${c.t('commun.sap')}<br>${c.t('commun.siret')}</p>
      <p data-anime>${c.lien('services', { ancre: 'avance', classe: 'lien-fleche', texte: html`${c.t('jerome.sap.lien')} <span aria-hidden="true">→</span>` })}</p>
    </div>
  </div>
</section>

${appelFinal(c)}
`;
