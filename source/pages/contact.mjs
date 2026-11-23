/* Contact : le numéro en très grand, qui s'écrit chiffre à chiffre, la photo du téléphone de l'entrée,
   le formulaire simulé (mêmes champs que le site actuel) et la carte autour de Hondainville. */
import { html } from '../../outils/gabarit.mjs';
import { image, zone } from '../gabarits/blocs.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/telephone-1168.webp' };

export default (c) => html`
<section class="tete-numero" id="debut">
  <div class="conteneur tete-numero-grille">
    <div class="tete-numero-texte">
      <p class="surtitre hero-anim">${c.t('contact.tete.surtitre')}</p>
      <h1 class="tete-titre"><span class="ligne-masque"><span class="hero-ligne"><em>${c.t('contact.tete.titre')}</em></span></span></h1>
      <p class="tete-intro hero-anim">${c.t('contact.tete.texte')}</p>
      <p class="numero-geant"><a href="tel:${c.site.contact.telephoneLien}" data-action-principale data-effet="numero" aria-label="${c.s('commun.appelerJerome')} : ${c.site.contact.telephone}">${c.site.contact.telephone.split(' ').map((g) => html`<span class="numero-groupe hero-anim">${g}</span> `)}</a></p>
      <dl class="contact-infos hero-anim">
        <div><dt>${c.t('contact.tete.emailLibelle')}</dt><dd class="pied-email">${c.site.contact.email}</dd></div>
        <div data-info-cle><dt>${c.t('commun.zone.surtitre')}</dt><dd>${c.t('commun.base')}</dd></div>
      </dl>
    </div>
    ${image(c, 'grok/telephone', { priorite: true, classe: 'tete-media', sizes: '(max-width: 760px) 100vw, 40vw', ratio: '4 / 5', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
  </div>
</section>

<section class="ecrire theme-lin" id="ecrire">
  <div class="conteneur ecrire-grille">
    <div class="ecrire-texte">
      <h2 data-anime="lignes">${c.t('contact.form.titre1')} <em>${c.t('contact.form.titre2')}</em></h2>
      <p data-anime>${c.t('contact.form.texte')}</p>
      ${image(c, 'voiture', { classe: 'ecrire-media', sizes: '(max-width: 760px) 100vw, 35vw', ratio: '16 / 10', attrs: 'data-fx="zoom"' })}
    </div>
    <form data-formulaire class="formulaire" action="#" novalidate>
      <div class="champ"><label for="f-nom">${c.t('contact.form.nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="f-email">${c.t('contact.form.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="f-objet">${c.t('contact.form.objet')}</label><input id="f-objet" name="objet"></div>
      <div class="champ"><label for="f-message">${c.t('contact.form.message')}</label><textarea id="f-message" name="message" rows="6" required></textarea></div>
      <p class="mention-donnees">${c.t('contact.form.donnees')}</p>
      <button type="submit" class="bouton">${c.t('contact.form.envoyer')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
  </div>
</section>

${zone(c, 'zone')}
`;
