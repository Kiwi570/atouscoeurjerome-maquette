/* Effets propres à ATOUS CŒUR. Le socle gère l'ouverture, les transitions, l'en-tête, le menu, les mesures et la
   bibliothèque d'effets (lignes, cascade, rideau, parallaxe, zoom, vitesse, magnétique, posés dans les pages).
   Effets du plan (data-effet) : bande, hero-photo, prix-coupe, route, carte-oise, picto, simulateur, portiere, numero. */
import { demarrer, boucle, versObjet } from './socle/index.js?v=2';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const mm = gsap ? gsap.matchMedia() : null;
const euros = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ',')) + ' €';

/* ---------- La bande de la voiture : elle glisse au défilement (ouverture, appel final) ---------- */
function bandes() {
  $$('.hero-bande > i, .tete-bande > i').forEach((b) => {
    gsap.fromTo(b, { xPercent: 0 }, { xPercent: 9, ease: 'none', scrollTrigger: { trigger: b.closest('section'), start: 'top top', end: 'bottom top', scrub: 0.4 } });
  });
  const photo = $('[data-effet="hero-photo"] img');
  if (photo) gsap.fromTo(photo, { scale: 1 }, { scale: 1.1, ease: 'none', scrollTrigger: { trigger: photo.closest('section'), start: 'top top', end: 'bottom top', scrub: 0.4 } });
  $$('.appel-bande > i').forEach((b) => {
    gsap.fromTo(b, { xPercent: -14 }, { xPercent: 10, ease: 'none', scrollTrigger: { trigger: b.closest('section'), start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
  });
}

/* ---------- Le premier écran respire : la photo bouge à peine, un reflet passe sur la bande ---------- */
function respiration() {
  const hero = $('.hero');
  if (!hero) return;
  const pic = hero.querySelector('.hero-media picture'), reflet = hero.querySelector('.bande-reflet');
  boucle(hero, (dt, t) => {
    if (pic) pic.style.transform = `scale(${(1.025 + 0.025 * Math.sin(t * 0.4)).toFixed(4)})`;
    if (reflet) reflet.style.transform = `translateX(${(-120 + ((t % 6) / 6) * 640).toFixed(1)}%)`;
  });
}

/* ---------- 30 € coupé en deux par la bande : il reste 15 € ---------- */
function prixCoupe() {
  const v = $('[data-effet="prix-coupe"]');
  if (!v) return;
  const tl = gsap.timeline({ scrollTrigger: { trigger: v, start: 'top 85%', end: 'center 45%', scrub: 0.6 } });
  tl.fromTo(v.querySelector('.coupe-bande > i'), { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, duration: 0.35, ease: 'power2.inOut' }, 0.05)
    .fromTo(v.querySelector('.coupe-avant'), { opacity: 1 }, { opacity: 0.4, duration: 0.25 }, 0.3)
    .fromTo(v.querySelector('.coupe-apres'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, 0.45)
    .fromTo(v.querySelector('.coupe-nouveau'), { scale: 0.7 }, { scale: 1, duration: 0.45, ease: 'back.out(1.8)' }, 0.5);
}

/* ---------- La route des trois étapes : le trait rouge avance, la petite voiture roule dessus ---------- */
function route() {
  const r = $('[data-effet="route"]');
  if (!r) return;
  const voiture = r.querySelector('.route-voiture');
  const faite = r.querySelector('.route-faite');
  const etapes = $$('.route-etape', r);
  const atteindre = (p) => etapes.forEach((e, i) => e.classList.toggle('est-atteinte', p >= [0.08, 0.5, 0.9][i]));
  mm.add('(min-width: 761px)', () => {
    const svg = r.querySelector('.route-trace');
    const chemin = r.querySelector('.route-fond');
    /* Table de points calculée une fois (et au redimensionnement), jamais pendant le défilement. */
    let table = [];
    const mesurer = () => {
      const L = chemin.getTotalLength(), box = svg.getBoundingClientRect(), base = r.getBoundingClientRect();
      const sx = box.width / 1200, sy = box.height / 220, ox = box.left - base.left, oy = box.top - base.top;
      table = Array.from({ length: 61 }, (_, i) => { const p = chemin.getPointAtLength((L * i) / 60); return [ox + p.x * sx, oy + p.y * sy]; });
    };
    const poser = (p) => {
      if (!table.length) return;
      const f = Math.min(59.999, p * 60), i = Math.floor(f), t = f - i, a = table[i], b = table[i + 1];
      const x = a[0] + (b[0] - a[0]) * t, y = a[1] + (b[1] - a[1]) * t;
      const ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 57.3;
      gsap.set(voiture, { x, y, rotation: Math.max(-18, Math.min(18, ang)) });
    };
    const etat = { p: 0 };
    const tw = gsap.fromTo(etat, { p: 0 }, { p: 1, ease: 'none', onUpdate: () => { poser(etat.p); faite.style.strokeDashoffset = String(1 - etat.p); atteindre(etat.p); },
      scrollTrigger: { trigger: r, start: 'top 75%', end: 'bottom 55%', scrub: 0.6, onRefresh: () => { mesurer(); poser(etat.p); } } });
    faite.style.strokeDasharray = '1 1';
    mesurer(); poser(0);
    return () => { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); gsap.set(voiture, { clearProps: 'transform' }); faite.style.strokeDashoffset = ''; };
  });
  mm.add('(max-width: 760px)', () => {
    const ligne = r.querySelector('.route-verticale');
    const etat = { p: 0 };
    let haut = 0;
    const tw = gsap.fromTo(etat, { p: 0 }, { p: 1, ease: 'none', onUpdate: () => { gsap.set(voiture, { y: etat.p * haut, rotation: 90 }); gsap.set(ligne, { scaleY: etat.p }); atteindre(etat.p); },
      scrollTrigger: { trigger: r, start: 'top 70%', end: 'bottom 60%', scrub: 0.6, onRefresh: () => { haut = Math.max(0, r.offsetHeight - 30); } } });
    haut = Math.max(0, r.offsetHeight - 30);
    return () => { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); gsap.set([voiture, ligne], { clearProps: 'transform' }); };
  });
}

/* ---------- Carte autour de Hondainville : routes qui se tracent, villes qui se posent, ondes ---------- */
function carteOise() {
  $$('[data-effet="carte-oise"]').forEach((carte) => {
    const routes = $$('.carte-route', carte), villes = $$('.carte-ville', carte), ondes = $$('.carte-ondes circle', carte);
    gsap.set(routes, { strokeDasharray: '1 1' });
    const tl = gsap.timeline({ scrollTrigger: { trigger: carte, start: 'top 85%', end: 'center 50%', scrub: 0.6 } });
    tl.fromTo(routes, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1, stagger: 0.08, ease: 'none' }, 0)
      .fromTo(villes.map((g) => g.firstElementChild), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 }, 0.3)
      .fromTo(carte.querySelector('.carte-centre > g'), { scale: 0.4, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.5, ease: 'back.out(2)' }, 0);
    /* Trois ondes, trois fois, à l'entrée : jamais en boucle infinie. */
    ST.create({ trigger: carte, start: 'top 70%', once: true, onEnter: () => {
      gsap.fromTo(ondes, { scale: 0.2, opacity: 0.9 }, { scale: 3.2, opacity: 0, duration: 2.4, stagger: 0.8, repeat: 2, ease: 'power1.out', transformOrigin: '50% 50%' });
    } });
  });
}

/* ---------- Pictogrammes des services : ils se dessinent comme des autocollants posés sur la portière ---------- */
function pictos() {
  $$('[data-effet="picto"]').forEach((p) => {
    const traits = $$('path', p);
    gsap.set(traits, { strokeDasharray: '1 1' });
    gsap.fromTo(traits, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: p, start: 'top 92%', end: 'top 60%', scrub: 0.5 } });
  });
}

/* ---------- Simulateur du reste à charge ---------- */
function simulateurs() {
  $$('[data-simulateur]').forEach((f) => {
    const sel = f.querySelector('select'), out = f.querySelector('output');
    const total = f.querySelector('[data-total]'), vous = f.querySelector('[data-vous]');
    let h = Number(out.value || out.textContent) || 2;
    const maj = () => {
      out.value = String(h); out.textContent = String(h);
      const t = Number(sel.value) * h * 4;
      total.textContent = euros(t); vous.textContent = euros(t / 2);
    };
    f.querySelector('[data-moins]').addEventListener('click', () => { h = Math.max(1, h - 1); maj(); });
    f.querySelector('[data-plus]').addEventListener('click', () => { h = Math.min(20, h + 1); maj(); });
    sel.addEventListener('change', maj);
    maj();
  });
}

/* ---------- Ouverture des pages : titres en lignes, puis le reste ---------- */
const lignes = () => $$('.hero-ligne');
const autres = () => $$('.hero-anim');
function ouverturePage(tl, debut) {
  if (lignes().length) tl.fromTo(lignes(), { yPercent: 115, y: 0 }, { yPercent: 0, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, debut);
  if (autres().length) tl.fromTo(autres(), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' }, debut + 0.15);
  return tl;
}

/* ---------- Jérôme : le bandeau de la voiture s'ouvre en diagonale, comme la bande ---------- */
function bandeau() {
  const b = $('[data-effet="bandeau"]');
  if (!b) return;
  gsap.fromTo(b, { clipPath: 'polygon(0% 38%, 100% 8%, 100% 62%, 0% 92%)' }, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none',
    scrollTrigger: { trigger: b, start: 'top 95%', end: 'center 55%', scrub: 0.5 } });
}

/* ---------- La voiture annotée : les repères se posent l'un après l'autre ---------- */
function portiere() {
  const p = $('[data-effet="portiere"]');
  if (!p) return;
  const points = $$('.portiere-point', p);
  gsap.fromTo(points, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.2, ease: 'back.out(2.4)', duration: 0.5,
    scrollTrigger: { trigger: p, start: 'top 80%', end: 'center 50%', scrub: 0.5 } });
  gsap.fromTo(p.querySelector('img'), { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: p, start: 'top bottom', end: 'bottom top', scrub: 0.4 } });
}

/* ---------- Tampon « déclaré services à la personne » qui tourne au défilement ---------- */
function tampon() {
  $$('[data-effet="tampon"]').forEach((t) => {
    gsap.fromTo(t, { rotation: -30, scale: 0.85 }, { rotation: 20, scale: 1, ease: 'none', transformOrigin: '50% 50%',
      scrollTrigger: { trigger: t, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
  });
}

/* ---------- Tarifs : les lignes se posent l'une après l'autre ---------- */
function tarifs() {
  const t = $('[data-effet="tarifs"]');
  if (!t) return;
  gsap.fromTo($$('tbody tr', t), { x: -28 }, { x: 0, stagger: 0.1, ease: 'power2.out',
    scrollTrigger: { trigger: t, start: 'top 85%', end: 'bottom 70%', scrub: 0.5 } });
}

/* ---------- Contact : les groupes du numéro s'écartent un peu au défilement ---------- */
function numero() {
  const n = $('[data-effet="numero"]');
  if (!n) return;
  $$('.numero-groupe', n).forEach((g, i) => {
    gsap.fromTo(g, { y: 0 }, { y: (i % 2 ? 1 : -1) * 14, ease: 'none', scrollTrigger: { trigger: n, start: 'top 60%', end: 'bottom top', scrub: 0.4 } });
  });
}

/* ---------- Réservation : jours à venir, récapitulatif avec reste à charge, service prérempli ---------- */
async function reservation() {
  const form = $('[data-reservation]');
  if (!form) return;
  const racine = form.closest('[data-module="formulaire-par-etapes"]');
  /* Jours : les 14 prochains jours, à partir d'aujourd'hui (les jours passés ne sont jamais proposés). */
  const zone = form.querySelector('[data-jours]');
  if (zone) {
    const auj = zone.dataset.aujourdhui;
    const fmtJ = new Intl.DateTimeFormat('fr-FR', { weekday: 'short' });
    const fmtD = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short' });
    const d0 = new Date(); d0.setHours(12, 0, 0, 0);
    zone.innerHTML = Array.from({ length: 14 }, (_, i) => {
      const d = new Date(d0); d.setDate(d0.getDate() + i);
      const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const nom = i === 0 ? auj : fmtJ.format(d).replace('.', '');
      return `<label class="fpe__puce"><input type="radio" name="jour" value="${iso}" data-libelle-jour="${nom} ${fmtD.format(d)}"${i === 0 ? ' required' : ''}><span class="fpe__choix-texte"><span class="jour-nom">${nom}</span><span class="jour-date">${fmtD.format(d)}</span></span></label>`;
    }).join('');
  }
  const params = new URLSearchParams(location.search);
  const choisi = params.get('service') && form.querySelector(`input[name="service"][value="${CSS.escape(params.get('service'))}"]`);
  if (choisi) choisi.checked = true;
  const recap = $('[data-recap-reservation]');
  const R = (k) => recap && recap.querySelector(`[data-r="${k}"]`);
  const vide = R('service') ? R('service').textContent : '';
  const maj = () => {
    if (!recap) return;
    const s = form.querySelector('input[name="service"]:checked');
    const h = Number((form.querySelector('input[name="duree"]:checked') || {}).value || 1);
    const j = form.querySelector('input[name="jour"]:checked');
    R('service').textContent = s ? s.dataset.nom : vide;
    R('duree').textContent = `${h} h`;
    R('jour').textContent = j ? j.dataset.libelleJour : vide;
    const p = s && s.dataset.prix !== '' ? Number(s.dataset.prix) : null;
    const g = recap.dataset.gratuit || '';
    R('prix').textContent = p == null ? '—' : p === 0 ? g : euros(p * h);
    R('vous').textContent = p == null ? '—' : p === 0 ? g : euros((p * h) / 2);
  };
  form.addEventListener('change', maj);
  maj();
  try {
    const { init } = await import('./modules/formulaire-par-etapes.js?v=2');
    await init(racine, { sujet: 'Réservation ATOUS CŒUR' });
  } catch (err) { console.error('[réservation]', err); }
}

/* ---------- Composez votre semaine : jetons à glisser (souris) ou à toucher, heures empilées par jour ---------- */
function composeurs() {
  $$('[data-composeur]').forEach((cp) => {
    const jetons = $$('.jeton', cp), jours = $$('.jour', cp);
    const out = (k) => cp.querySelector(`[data-c="${k}"]`);
    const message = out('message'), barre = cp.querySelector('.composeur-barre');
    const T = (k, o = {}) => (cp.dataset['t' + k[0].toUpperCase() + k.slice(1)] || '').replace(/\{(\w+)\}/g, (_, x) => o[x] ?? '');
    let choisi = null, touche = false;
    const prixDe = (k) => Number((jetons.find((j) => j.dataset.jeton === k) || {}).dataset?.prix || 0);
    const nomDe = (k) => (jetons.find((j) => j.dataset.jeton === k) || {}).dataset?.nom || k;
    const compter = (el, v, suffixe) => {
      const o = { n: Number(el.dataset.v || 0) };
      gsap.to(o, { n: v, duration: 0.5, ease: 'power2.out', onUpdate: () => { el.lastChild.textContent = suffixe === 'h' ? `${Math.round(o.n)} h` : euros(Math.round(o.n * 2) / 2); } });
      el.dataset.v = v;
    };
    const totaux = (anime = true) => {
      const blocs = $$('.bloc', cp);
      const h = blocs.length, t = blocs.reduce((s, b) => s + prixDe(b.dataset.service), 0) * 4;
      if (anime) { compter(out('heures'), h, 'h'); compter(out('total'), t); compter(out('vous'), t / 2); }
      else { out('heures').dataset.v = h; out('total').dataset.v = t; out('vous').dataset.v = t / 2; }
      if (anime && barre) gsap.fromTo(barre, { scaleX: 0 }, { scaleX: 1, duration: 0.45, ease: 'power2.out' });
    };
    /* Le texte des totaux est le dernier nœud de chaque dd (la barre décorative reste devant). */
    ['heures', 'total', 'vous'].forEach((k) => { const el = out(k); if (el.lastChild.nodeType !== 3) el.appendChild(document.createTextNode(el.textContent)); });
    totaux(false);
    const etiquette = (b, jour) => b.setAttribute('aria-label', T('retirer', { service: nomDe(b.dataset.service), jour: jour.dataset.nomJour.toLowerCase() }));
    $$('.bloc', cp).forEach((b) => etiquette(b, b.closest('.jour')));
    const ajouter = (k, jour, depuis) => {
      const pile = jour.querySelector('.jour-pile');
      if (pile.children.length >= 4) { message.textContent = T('plein'); gsap.fromTo(jour, { x: -6 }, { x: 0, duration: 0.4, ease: 'elastic.out(1, 0.3)' }); return; }
      const j = jetons.find((x) => x.dataset.jeton === k);
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'bloc'; b.dataset.service = k; b.style.cssText = j.style.cssText;
      b.innerHTML = `<span>${j.dataset.mini || nomDe(k)}</span>`;
      etiquette(b, jour);
      pile.appendChild(b);
      const r1 = b.getBoundingClientRect(), r0 = (depuis || j).getBoundingClientRect();
      gsap.fromTo(b, { x: r0.left - r1.left, y: r0.top - r1.top, scale: 0.8, rotation: -6 }, { x: 0, y: 0, scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.6)' });
      message.textContent = T('ajoute', { service: nomDe(k), jour: jour.dataset.nomJour.toLowerCase() });
      totaux();
    };
    const choisir = (j) => {
      choisi = choisi === j ? null : j;
      jetons.forEach((x) => x.setAttribute('aria-pressed', String(x === choisi)));
      cp.classList.toggle('a-choisi', !!choisi);
      jours.forEach((jr) => { const n = choisi ? choisi.dataset.nom : ''; jr.querySelector('.jour-cible').setAttribute('aria-label', choisi ? T('ajouter', { service: n, jour: jr.dataset.nomJour.toLowerCase() }) : jr.dataset.nomJour); });
    };
    jours.forEach((jr) => jr.querySelector('.jour-cible').setAttribute('aria-label', jr.dataset.nomJour));
    jetons.forEach((j) => j.addEventListener('click', () => { if (touche) return; choisir(j); }));
    jours.forEach((jr) => jr.querySelector('.jour-cible').addEventListener('click', () => ajouter((choisi || jetons[0]).dataset.jeton, jr, choisi)));
    cp.addEventListener('click', (e) => {
      const b = e.target.closest('.bloc');
      if (!b) return;
      const jour = b.closest('.jour');
      message.textContent = T('retire', { service: nomDe(b.dataset.service), jour: jour.dataset.nomJour.toLowerCase() });
      gsap.to(b, { scale: 0.4, opacity: 0, duration: 0.25, ease: 'power2.in', onComplete: () => { b.remove(); totaux(); } });
    });
    cp.querySelector('[data-vider]').addEventListener('click', () => {
      const blocs = $$('.bloc', cp);
      gsap.to(blocs, { scale: 0.4, opacity: 0, duration: 0.2, stagger: 0.03, onComplete: () => { blocs.forEach((b) => b.remove()); totaux(); } });
      message.textContent = T('vide');
    });
    /* Glisser à la souris : un fantôme suit le pointeur et se pose sur le jour survolé. */
    jetons.forEach((j) => j.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      const r = j.getBoundingClientRect();
      let fantome = null, cible = null;
      const x0 = e.clientX, y0 = e.clientY;
      const bouger = (ev) => {
        if (!fantome && Math.hypot(ev.clientX - x0, ev.clientY - y0) < 6) return;
        if (!fantome) {
          touche = true;
          fantome = j.cloneNode(true); fantome.className = 'jeton jeton--fantome'; fantome.setAttribute('aria-hidden', 'true');
          fantome.style.width = `${r.width}px`; document.body.appendChild(fantome);
        }
        gsap.set(fantome, { x: ev.clientX - r.width / 2, y: ev.clientY - r.height / 2, rotation: (ev.clientX - x0) * 0.02 });
        const sous = document.elementFromPoint(ev.clientX, ev.clientY);
        const jr = sous && sous.closest && sous.closest('.jour');
        if (jr !== cible) { cible && cible.classList.remove('survole'); cible = jr && cp.contains(jr) ? jr : null; cible && cible.classList.add('survole'); }
      };
      const lacher = () => {
        removeEventListener('pointermove', bouger); removeEventListener('pointerup', lacher);
        if (fantome) { if (cible) ajouter(j.dataset.jeton, cible, fantome); fantome.remove(); }
        cible && cible.classList.remove('survole');
        setTimeout(() => { touche = false; }, 0);
      };
      addEventListener('pointermove', bouger); addEventListener('pointerup', lacher);
    }));
    /* Entrée à l'écran : les heures déjà posées tombent dans leur jour. */
    gsap.fromTo($$('.jour', cp), { y: 24 }, { y: 0, stagger: 0.06, ease: 'power2.out',
      scrollTrigger: { trigger: cp, start: 'top 85%', end: 'top 45%', scrub: 0.5 } });
  });
}

/* ---------- Carte : la voiture qu'on fait rouler depuis Hondainville ---------- */
function voituresCarte() {
  $$('[data-effet="carte-oise"]').forEach((carte) => {
    const svg = carte.querySelector('svg'), v = carte.querySelector('[data-voiture]'), corps = v.querySelector('.carte-voiture-corps');
    const trace = carte.querySelector('.carte-trace'), info = carte.querySelector('[data-carte-info]');
    const villes = $$('[data-ville]', carte).map((b) => ({ b, x: +b.dataset.x, y: +b.dataset.y, nom: b.dataset.ville, km: +b.dataset.km }));
    const hx = +v.dataset.x, hy = +v.dataset.y;
    const pos = { x: hx, y: hy };
    let touche = false;
    const poser = () => { v.setAttribute('transform', `translate(${pos.x.toFixed(1)} ${pos.y.toFixed(1)})`); trace.setAttribute('d', `M${hx} ${hy} L${pos.x.toFixed(1)} ${pos.y.toFixed(1)}`); };
    const proche = () => villes.reduce((m, c) => { const d = Math.hypot(c.x - pos.x, c.y - pos.y); return d < m.d ? { c, d } : m; }, { c: null, d: Infinity });
    const annoncer = (c) => {
      villes.forEach((x) => x.b.classList.toggle('est-choisie', x === c));
      info.textContent = c ? `${c.nom}\u00a0: ${c.km}\u00a0km ${info.dataset.suffixe}.` : info.textContent;
    };
    const aller = (c, duree = 1.1) => {
      gsap.to(corps, { rotation: Math.max(-25, Math.min(25, Math.atan2(c.y - pos.y, c.x - pos.x) * 57.3 * (c.x < pos.x ? -1 : 1))), scaleX: c.x < pos.x ? -1 : 1, duration: 0.2, transformOrigin: '50% 50%' });
      gsap.to(pos, { x: c.x, y: c.y, duration: duree, ease: 'power2.inOut', onUpdate: poser, onComplete: () => { annoncer(c); gsap.to(corps, { rotation: 0, duration: 0.3 }); } });
    };
    villes.forEach((c) => c.b.addEventListener('click', () => { touche = true; gsap.killTweensOf(pos); aller(c); }));
    const versSvg = (e) => { const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); };
    v.style.cursor = 'grab';
    v.addEventListener('pointerdown', (e) => {
      touche = true; gsap.killTweensOf(pos); e.preventDefault();
      v.setPointerCapture(e.pointerId); v.style.cursor = 'grabbing';
      const bouger = (ev) => { const p = versSvg(ev); pos.x = Math.max(10, Math.min(630, p.x)); pos.y = Math.max(10, Math.min(420, p.y)); poser(); const { c, d } = proche(); annoncer(d < 60 ? c : null); };
      const lacher = () => { v.removeEventListener('pointermove', bouger); v.removeEventListener('pointerup', lacher); v.style.cursor = 'grab'; const { c, d } = proche(); if (d < 90) aller(c, 0.4); };
      v.addEventListener('pointermove', bouger); v.addEventListener('pointerup', lacher);
    });
    /* Démonstration une seule fois à l'entrée : la voiture va jusqu'à Mouy, sauf si le visiteur a déjà joué. */
    ST.create({ trigger: carte, start: 'top 65%', once: true, onEnter: () => { if (!touche) gsap.delayedCall(0.6, () => { if (!touche) aller(villes[0], 1.4); }); } });
    ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((t) => carte.addEventListener(t, () => { touche = true; }, { passive: true }));
  });
}

/* ---------- La petite voiture de l'en-tête avance avec la lecture de la page ---------- */
function lecture() {
  const car = $('.entete-voiture');
  if (!car) return;
  gsap.fromTo(car, { x: 0 }, { x: () => Math.max(0, car.parentElement.clientWidth - car.offsetWidth), ease: 'none',
    scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'max', scrub: 0.3, invalidateOnRefresh: true } });
}

/* ---------- Réservation envoyée : la voiture roule jusqu'à la maison ---------- */
function arriveeReservation() {
  const fpe = $('[data-module="formulaire-par-etapes"]');
  if (!fpe) return;
  fpe.addEventListener('formulaire:envoye', () => {
    const v = fpe.querySelector('.arrivee-voiture'), cadre = fpe.querySelector('.arrivee');
    if (!v || !cadre) return;
    const fin = cadre.clientWidth * 0.68;
    gsap.fromTo(v, { x: 0 }, { x: fin, duration: 1.6, ease: 'power2.inOut', delay: 0.3 });
    gsap.fromTo(fpe.querySelector('.arrivee-coeur'), { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.5, ease: 'back.out(3)', delay: 1.8 });
  });
}

demarrer({
  preparer() {
    if (!gsap || !ST) return;
    bandes();
    respiration();
    prixCoupe();
    route();
    carteOise();
    pictos();
    simulateurs();
    bandeau();
    portiere();
    tampon();
    tarifs();
    numero();
    reservation();
    composeurs();
    voituresCarte();
    lecture();
    arriveeReservation();
  },
  /* Intro (< 3 s) : la bande traverse l'écran comme la voiture qui passe, ATOUS CŒUR monte dessus,
     puis le nom glisse jusqu'à l'objet d'ouverture de la page et le panneau s'ouvre depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-bande > i', { xPercent: -101, x: 0 }, { xPercent: 0, x: 0, duration: 0.6, ease: 'power3.inOut' }, 0.1)
      .fromTo('.ouverture-mot', { opacity: 0, yPercent: 40 }, { opacity: 1, yPercent: 0, duration: 0.5, stagger: 0.12 }, 0.45)
      .fromTo('.ouverture-ligne', { opacity: 0, yPercent: 40 }, { opacity: 1, yPercent: 0, duration: 0.4 }, 0.7);
    versObjet(tl, { a: 1.15, duree: 0.45, ouverture: 0.75 });
    ouverturePage(tl, 1.55);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set(lignes(), { yPercent: 0, y: 0 });
    gsap.set(autres(), { opacity: 1, y: 0 });
  },
  arrivee() {
    if (!gsap) return;
    ouverturePage(gsap.timeline({ delay: 0.12 }), 0);
  },
});
