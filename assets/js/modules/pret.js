/* Pont entre les modules de la bibliothèque et le socle du projet : GSAP (déjà chargé, defer) et le recalcul regroupé. */
import { rafraichir } from '../socle/mesures.js?v=2';
export function pret() {
  return new Promise((ok) => {
    const essai = () => (window.gsap ? ok({ gsap: window.gsap, rafraichir, calme: false, lenis: null }) : setTimeout(essai, 30));
    essai();
  });
}
