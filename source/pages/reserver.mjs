/* Réserver : l'outil d'abord. Réservation simulée en quatre étapes (module formulaire-par-etapes de la bibliothèque),
   récapitulatif qui suit les choix avec le prix et le reste à charge, puis « Vous préférez appeler ? » et « Bon à savoir ». */
import { html, brut } from '../../outils/gabarit.mjs';
import { image, picto, prix, VOITURE_SVG } from '../gabarits/blocs.mjs';

export const page = { cle: 'reserver', fichier: 'reserver', imagePartage: 'grok/porte-1168.webp' };

export default (c) => html`
<section class="reservation" id="debut">
  <div class="conteneur reservation-grille">
    <div class="reservation-tete">
      <span class="reservation-bande" data-visuel aria-hidden="true"><i></i></span>
      <p class="surtitre hero-anim">${c.t('reserver.tete.surtitre')}</p>
      <h1 class="tete-titre" data-iris-centre><span class="ligne-masque"><span class="hero-ligne">${c.t('reserver.tete.titre1')}</span></span> <span class="ligne-masque"><span class="hero-ligne"><em>${c.t('reserver.tete.titre2')}</em></span></span></h1>
      <p class="tete-intro hero-anim masque-ecran-bas">${c.t('reserver.tete.texte')}</p>
      <p class="tete-actions hero-anim"><a class="bouton bouton--sombre" href="tel:${c.site.contact.telephoneLien}" data-action-principale>${c.t('commun.appelerJerome')}</a> <span class="pastille" data-info-cle>${c.t('reserver.tete.info')}</span></p>
      <aside class="recap hero-anim" data-recap-reservation data-gratuit="${c.s('services.tarifs.gratuit')}" aria-live="polite">
        <p class="recap-titre">${c.t('reserver.form.recapTitre')}</p>
        <dl>
          <div><dt>${c.t('reserver.form.recapService')}</dt><dd data-r="service">${c.t('reserver.form.recapVide')}</dd></div>
          <div><dt>${c.t('reserver.form.recapDuree')}</dt><dd data-r="duree">1 ${c.t('reserver.form.heure')}</dd></div>
          <div><dt>${c.t('reserver.form.recapJour')}</dt><dd data-r="jour">${c.t('reserver.form.recapVide')}</dd></div>
          <div class="recap-prix"><dt>${c.t('reserver.form.recapPrix')}</dt><dd data-r="prix" data-prix>—</dd></div>
          <div class="recap-vous"><dt>${c.t('reserver.form.recapVous')}</dt><dd data-r="vous" data-prix>—</dd></div>
        </dl>
      </aside>
    </div>

    <div class="fpe" data-module="formulaire-par-etapes">
      <div class="fpe__carton" data-fx="vitesse" data-fx-force="1">
        <form class="fpe__form" action="#" method="post" novalidate data-reservation>
          <div class="fpe__progression">
            <ol class="fpe__reperes" aria-label="Progression"></ol>
            <div class="fpe__barre" aria-hidden="true"><span></span></div>
            <p class="fpe__etat" aria-live="polite"></p>
          </div>

          <fieldset class="fpe__etape" data-etape="${c.s('reserver.form.etape1')}">
            <legend class="fpe__legende"><h2 class="fpe__titre">${c.t('reserver.form.q1')}</h2></legend>
            <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('reserver.form.recapService')}">
              ${c.donnees.services.map((s, i) => html`<label class="fpe__carte"><input type="radio" name="service" value="${s.cle}" data-prix="${s.prix ?? ''}" data-nom="${s.nom}"${i === 0 ? ' required' : ''}>
                <span class="fpe__icone">${picto(s.picto, 'picto picto--petit')}</span>
                <span class="fpe__carte-titre">${s.nom}</span><span class="fpe__carte-texte">${s.prix == null ? c.t('commun.surDemande') : html`${prix(s.prix)} ${c.t('commun.parHeure')}`}</span></label>`)}
              <label class="fpe__carte"><input type="radio" name="service" value="inscription" data-prix="0" data-nom="${c.s('reserver.form.inscription')}">
                <span class="fpe__icone">${picto('inscription', 'picto picto--petit')}</span>
                <span class="fpe__carte-titre">${c.t('reserver.form.inscription')}</span><span class="fpe__carte-texte">${c.t('reserver.form.inscriptionTexte')}</span></label>
            </div>
          </fieldset>

          <fieldset class="fpe__etape" data-etape="${c.s('reserver.form.etape2')}">
            <legend class="fpe__legende"><h2 class="fpe__titre">${c.t('reserver.form.q2')}</h2></legend>
            <fieldset class="fpe__groupe" data-libelle="${c.s('reserver.form.duree')}">
              <legend class="fpe__groupe-titre">${c.t('reserver.form.duree')}</legend>
              <div class="fpe__puces">
                ${[1, 2, 3].map((h) => html`<label class="fpe__puce"><input type="radio" name="duree" value="${h}"${h === 1 ? ' checked required' : ''}><span class="fpe__choix-texte">${h} ${c.t('reserver.form.heure')}</span></label>`)}
              </div>
            </fieldset>
            <fieldset class="fpe__groupe" data-libelle="${c.s('reserver.form.jour')}">
              <legend class="fpe__groupe-titre">${c.t('reserver.form.jour')}</legend>
              <div class="fpe__puces jours" data-jours data-aujourdhui="${c.s('reserver.form.aujourdhui')}">
                <div class="fpe__champ"><input type="date" name="jour" aria-label="${c.s('reserver.form.jour')}" required></div>
              </div>
              <p class="fpe__aide">${c.t('reserver.form.jourAide')}</p>
            </fieldset>
            <fieldset class="fpe__groupe" data-libelle="${c.s('reserver.form.moment')}">
              <legend class="fpe__groupe-titre">${c.t('reserver.form.moment')}</legend>
              <div class="fpe__puces">
                <label class="fpe__puce"><input type="radio" name="moment" value="matin" required><span class="fpe__choix-texte">${c.t('reserver.form.matin')}</span></label>
                <label class="fpe__puce"><input type="radio" name="moment" value="apres-midi"><span class="fpe__choix-texte">${c.t('reserver.form.apresMidi')}</span></label>
                <label class="fpe__puce"><input type="radio" name="moment" value="egal"><span class="fpe__choix-texte">${c.t('reserver.form.egal')}</span></label>
              </div>
            </fieldset>
          </fieldset>

          <fieldset class="fpe__etape" data-etape="${c.s('reserver.form.etape3')}">
            <legend class="fpe__legende"><h2 class="fpe__titre">${c.t('reserver.form.q3')}</h2></legend>
            <div class="fpe__grille">
              <div class="fpe__champ"><label for="r-nom">${c.t('reserver.form.nom')}</label><input id="r-nom" name="nom" autocomplete="name" required></div>
              <div class="fpe__champ"><label for="r-tel">${c.t('reserver.form.tel')}</label><input id="r-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" pattern="[0-9 +().\\-]{10,20}" required></div>
              <div class="fpe__champ"><label for="r-email">${c.t('reserver.form.email')}</label><input id="r-email" name="email" type="email" autocomplete="email"></div>
              <div class="fpe__champ"><label for="r-commune">${c.t('reserver.form.commune')}</label><input id="r-commune" name="commune" autocomplete="address-level2" required></div>
            </div>
            <div class="fpe__champ"><label for="r-message">${c.t('reserver.form.message')}</label><textarea id="r-message" name="message" rows="3"></textarea></div>
            <p class="fpe__aide">${c.t('reserver.form.donnees')}</p>
          </fieldset>

          <fieldset class="fpe__etape" data-etape="${c.s('reserver.form.etape4')}" data-recap>
            <legend class="fpe__legende"><h2 class="fpe__titre">${c.t('reserver.form.q4')}</h2></legend>
            <div class="fpe__recap"></div>
          </fieldset>

          <div class="fpe__nav">
            <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>${c.t('reserver.form.retour')}</button>
            <button class="fpe__bouton" type="button" data-suivant>${c.t('reserver.form.continuer')}</button>
            <button class="fpe__bouton" type="submit">${c.t('reserver.form.envoyer')}</button>
          </div>
        </form>
        <div class="fpe__fin" hidden>
          <div class="arrivee" aria-hidden="true" data-grille="retour">
            <svg class="arrivee-decor" viewBox="0 0 320 90"><path class="arrivee-route" d="M4 78 H316"/><path class="arrivee-maison" d="M252 74 V44 L276 24 L300 44 V74 Z"/><path class="arrivee-coeur" d="M276 62c-4-3-8-6-8-10a4 4 0 0 1 8-1.6 4 4 0 0 1 8 1.6c0 4-4 7-8 10z"/></svg>
            <span class="arrivee-voiture">${brut(VOITURE_SVG)}</span>
          </div>
          <h2>${c.t('reserver.form.finTitre')}</h2>
          <p data-resume></p>
          <p>${c.t('reserver.form.finTexte')}</p>
          <div class="fpe__fin-actions"><button class="fpe__bouton fpe__bouton--ligne" type="button" data-recommencer>${c.t('reserver.form.recommencer')}</button></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="appel-tel theme-lin" id="appeler">
  <div class="conteneur appel-tel-grille">
    ${image(c, 'grok/porte', { classe: 'appel-tel-media', sizes: '(max-width: 760px) 100vw, 40vw', ratio: '4 / 5', attrs: 'data-fx="parallaxe"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('reserver.appel.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('reserver.appel.titre1')} <em>${c.t('reserver.appel.titre2')}</em></h2>
      <p data-anime>${c.t('reserver.appel.texte')}</p>
      <p class="grand-tel" data-anime><a href="tel:${c.site.contact.telephoneLien}" data-survol="magnetique">${c.site.contact.telephone}</a></p>
    </div>
  </div>
</section>

<section class="savoir" id="savoir">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.t('reserver.savoir.titre')}</h2>
    <ul class="savoir-liste" role="list" data-visuel>
      ${[['inscription', 1], ['menage', 2], ['papiers', 3]].map(([p, n]) => html`<li class="savoir-carte" data-fx="vitesse" data-fx-force="2"><span class="service-picto service-picto--statique" data-effet="picto">${picto(p)}</span><h3>${c.t(`reserver.savoir.e${n}titre`)}</h3><p>${c.t(`reserver.savoir.e${n}texte`)}</p></li>`)}
    </ul>
    <p class="savoir-lien" data-anime>${c.lien('services', { ancre: 'avance', classe: 'lien-fleche', texte: html`${c.t('accueil.avance.lien')} <span aria-hidden="true">→</span>` })}</p>
  </div>
</section>
`;
