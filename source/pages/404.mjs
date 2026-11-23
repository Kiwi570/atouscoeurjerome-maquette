/* Page 404 aux couleurs d'ATOUS CŒUR : un sac de courses resté seul sur la table. */
import { html } from '../../outils/gabarit.mjs';
import { image } from '../gabarits/blocs.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  ${image(c, 'grok/page-404', { priorite: true, classe: 'introuvable-media', sizes: '100vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
  <div class="conteneur introuvable-texte">
    <h1 class="introuvable-titre"><span class="ligne-masque"><span class="hero-ligne">${c.t('introuvable.titre1')}</span></span> <span class="ligne-masque"><span class="hero-ligne"><em>${c.t('introuvable.titre2')}</em></span></span></h1>
    <p class="hero-anim">${c.t('introuvable.texte')}</p>
    <p class="hero-anim" data-info-cle><a class="lien-tel" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
    <p class="hero-anim">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('services', { classe: 'bouton bouton--contour', texte: c.t('commun.voirServices') })}</p>
  </div>
</section>
`;
