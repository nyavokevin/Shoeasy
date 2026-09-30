/* SHOEASY shared cart — localStorage v1 */
(function () {
  const KEY = 'shoeasy_cart_v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch (e) { return []; }
  }
  function save(cart) {
    try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) {}
    updateBadge();
  }
  function getCount() {
    return load().reduce((n, it) => n + (it.qty || 1), 0);
  }
  function getSubtotal() {
    return load().reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0);
  }
  function parsePrice(str) {
    if (!str) return null;
    const m = String(str).replace(/\u00a0/g, ' ').match(/(\d+[\s.,]?\d*)\s*€|€\s*(\d+[\s.,]?\d*)/);
    if (!m) return null;
    const num = (m[1] || m[2]).replace(/\s/g, '').replace(',', '.');
    const v = parseFloat(num);
    return isNaN(v) ? null : v;
  }
  function findProduct(root) {
    let name = '';
    let price = null;
    let img = '';
    const h = root.querySelector('h3, h2');
    if (h) name = h.textContent.trim().split('\n')[0].slice(0, 80);
    const body = root.textContent || '';
    // first € price in card
    const pm = body.match(/€\s?\d+[\s.,]?\d*|\d+[\s.,]?\d*\s?€/);
    if (pm) price = parsePrice(pm[0]);
    const im = root.querySelector('img');
    if (im) img = im.getAttribute('src') || '';
    return { name: name || 'Modèle SHOEASY', price: price || 0, img };
  }
  function toast(msg) {
    let el = document.querySelector('.shoeasy-toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'shoeasy-toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('show'), 2200);
  }
  function updateBadge() {
    const n = getCount();
    document.querySelectorAll('#cart-count').forEach((el) => { el.textContent = String(n); });
  }
  function add(item) {
    const cart = load();
    const key = (item.name || '') + '|' + (item.price || 0);
    const found = cart.find((c) => c.key === key);
    if (found) found.qty += 1;
    else cart.push({ key, name: item.name, price: item.price, img: item.img, qty: 1 });
    save(cart);
    toast(item.name + ' — ajouté au panier');
    if (window.gsap) {
      document.querySelectorAll('#cart-count').forEach((el) => {
        gsap.fromTo(el, { scale: 1.6 }, { scale: 1, duration: 0.4, ease: 'back.out(2)' });
      });
    }
  }

  // Delegation: any button containing AJOUTER / ADD
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, a');
    if (!btn) return;
    const txt = (btn.textContent || '').toUpperCase();
    const isAdd = txt.includes('AJOUTER') || txt.includes('ADD TO') || txt.includes('ADD\u00a0TO') || (txt.includes('ADD') && txt.includes('CART'));
    if (!isAdd) return;
    // find card scope
    let scope = btn.closest('div[class*="grid"], div[class*="card"], section, li, article') || btn.parentElement;
    // climb up max 5 levels to find a price
    let node = btn;
    for (let i = 0; i < 6; i++) {
      if (!node) break;
      if (/€/.test(node.textContent || '') && node.querySelector('img')) { scope = node; break; }
      node = node.parentElement;
    }
    const p = findProduct(scope || document.body);
    if (!p.price) p.price = 180;
    add(p);
  });

  // Panier page: inject dynamic rows + merge totals
  function hydratePanier() {
    updateBadge();
    if (!document.getElementById('summary-total')) return;
    const cart = load();
    if (!cart.length) return;
    // Build dynamic section before first cart item if not already done
    if (document.getElementById('shoeasy-dynamic-cart')) return;
    const anchor = document.getElementById('cart-item-1');
    if (!anchor) return;
    const wrap = document.createElement('div');
    wrap.id = 'shoeasy-dynamic-cart';
    wrap.style.cssText = 'display:flex;flex-direction:column;gap:12px;margin-bottom:12px';
    cart.forEach((it, idx) => {
      const row = document.createElement('div');
      row.className = 'bg-surface-container-lowest rounded-xl p-space-md shadow-sm';
      row.style.cssText = 'border:1px solid #e6e8eb;border-radius:12px;padding:14px;display:flex;gap:12px;align-items:center;background:#fff';
      row.innerHTML =
        (it.img ? '<img src="' + it.img + '" alt="" style="width:72px;height:72px;object-fit:contain;background:#f4f5f7;border-radius:8px"/>' : '') +
        '<div style="flex:1"><div style="font-weight:800;font-size:14px">' + it.name.replace(/</g, '&lt;') + '</div>' +
        '<div style="font-size:12px;color:#68707c">Collection SHOEASY · Qté : ' + it.qty + '</div></div>' +
        '<div style="font-weight:800">' + it.price.toFixed(2).replace('.', ',') + ' €</div>' +
        '<button data-rm="' + idx + '" style="border:1px solid #e6e8eb;border-radius:8px;padding:6px 10px;font-size:12px">Retirer</button>';
      wrap.appendChild(row);
    });
    anchor.parentElement.insertBefore(wrap, anchor);
    wrap.addEventListener('click', (e) => {
      const b = e.target.closest('[data-rm]');
      if (!b) return;
      const c = load();
      c.splice(parseInt(b.getAttribute('data-rm'), 10), 1);
      save(c);
      location.reload();
    });
    // Merge dynamic subtotal into displayed totals (wrap original fn)
    const dyn = getSubtotal();
    const subEl = document.getElementById('summary-subtotal');
    if (subEl && typeof window.updateCartTotals === 'function') {
      const orig = window.updateCartTotals;
      window.updateCartTotals = function () {
        orig();
        const cur = parseFloat((subEl.textContent || '0').replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;
        const merged = cur + dyn;
        subEl.textContent = '€' + merged.toFixed(2);
        const totalEl = document.getElementById('summary-total');
        if (totalEl) {
          const tcur = parseFloat((totalEl.textContent || '0').replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;
          totalEl.textContent = '€' + (tcur + dyn).toFixed(2);
        }
      };
      window.updateCartTotals();
    }
    // CTA vers paiement
    const total = document.getElementById('summary-total');
    
  }

  // Paiement page: prefill from cart + confirm
  function hydratePaiement() {
    updateBadge();
    const payBtn = Array.from(document.querySelectorAll('button')).find((b) =>
      /COMPLETE ORDER|COMMANDER|PAYER/i.test(b.textContent || ''));
    if (!payBtn) return;
    const cart = load();
    if (cart.length) {
      const n = getCount();
      const sub = getSubtotal();
      // update 2 ITEMS label if present
      document.body.innerHTML = document.body.innerHTML.replace(/(\d+)\s+(ITEMS|ARTICLES)/, n + (n > 1 ? ' ARTICLES' : ' ARTICLE'));
      payBtn.innerHTML = payBtn.innerHTML.replace(/€\s?[\d.,]+/, sub.toFixed(2).replace('.', ',') + ' €');
    }
    payBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem(KEY);
      updateBadge();
      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(12,13,14,.85);display:flex;align-items:center;justify-content:center;z-index:10000;padding:20px';
      overlay.innerHTML = '<div style="background:#fff;border-radius:24px;padding:40px;max-width:420px;text-align:center"><div style="font-family:Syne,sans-serif;font-weight:800;font-size:24px;margin-bottom:12px">COMMANDE CONFIRMÉE</div><p style="color:#68707c;font-size:14px;margin-bottom:20px">Merci pour votre achat SHOEASY. Un e-mail de confirmation vient de vous être envoyé.</p><a href="index.html" style="display:inline-block;background:#f04323;color:#fff;font-weight:800;padding:14px 28px;border-radius:999px;text-decoration:none">RETOUR À L\u2019ACCUEIL</a></div>';
      document.body.appendChild(overlay);
    }, { once: false });
  }

  // Promo extension: EXTRA10 (-10%) + keep SHOEASY15 / UTMBFINISHER
  function extendPromo() {
    if (typeof window.applyPromo !== 'function') return;
    const orig = window.applyPromo;
    window.applyPromo = function () {
      const input = document.getElementById('promo-input');
      const code = input ? input.value.trim().toUpperCase() : '';
      if (code === 'UTRD15') {
        // ancien code pré-rebrand : équivalent SHOEASY15
        if (input) input.value = 'SHOEASY15';
        return orig();
      }
      if (code === 'EXTRA10') {
        const subEl = document.getElementById('summary-subtotal');
        const sub = subEl ? parseFloat(subEl.textContent.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0 : 200;
        // reuse promoDiscount global if exists
        try { promoDiscount = sub * 0.10; } catch (e) { window.promoDiscount = sub * 0.10; }
        const fb = document.getElementById('promo-feedback');
        if (fb) { fb.textContent = 'CODE EXTRA10 ACCEPTÉ : -10%'; }
        if (typeof updateCartTotals === 'function') updateCartTotals();
        return;
      }
      return orig();
    };
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateBadge();
    hydratePanier();
    hydratePaiement();
    extendPromo();
  });
  updateBadge();

  window.SHOEASY_CART = { load, save, add, getCount, getSubtotal };
})();
