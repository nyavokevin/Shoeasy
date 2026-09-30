/* SHOEASY shared scroll animations — same language as index.html (GSAP + ScrollTrigger) */
(function () {
  function init() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.gsap) return;
    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch (e) { return; }
    const $ = gsap.utils.toArray;

    // Titles: split <br> into masked lines + reveal
    $('h1, h2.font-brand-heading, h2').forEach((h) => {
      if (h.dataset.shoeasyAnim) return;
      h.dataset.shoeasyAnim = '1';
      if (h.innerHTML.includes('<br')) {
        h.innerHTML = h.innerHTML.split(/<br\s*\/?>/i)
          .map((l) => '<span class="line-mask"><span class="ln">' + l.trim() + '</span></span>').join('');
        gsap.from(h.querySelectorAll('.ln'), {
          yPercent: 110, duration: 0.9, ease: 'power4.out', stagger: 0.1,
          scrollTrigger: { trigger: h, start: 'top 88%' }
        });
      } else {
        gsap.from(h, {
          y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: h, start: 'top 88%' }
        });
      }
    });

    // Product cards / grids
    const cards = document.querySelectorAll('#catalog-grid > *, #collection-grid > *, #sale-catalog > *, main .grid > div');
    if (cards.length) {
      gsap.from(cards, {
        y: 60, autoAlpha: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: cards[0].parentElement, start: 'top 85%' }
      });
    }

    // Images: subtle clip reveal on hero visuals
    document.querySelectorAll('main section:first-of-type img').forEach((img) => {
      gsap.fromTo(img, { scale: 1.15 }, {
        scale: 1, duration: 1.4, ease: 'power3.out',
        scrollTrigger: { trigger: img, start: 'top 90%' }
      });
    });

    // Footer
    const foot = document.querySelector('footer');
    if (foot) {
      gsap.from(foot.querySelectorAll('div, a'), {
        y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.03,
        scrollTrigger: { trigger: foot, start: 'top 92%' }
      });
    }

    // Arrow buttons nudge (FR/EN)
    document.querySelectorAll('button').forEach((b) => {
      const svg = b.querySelector('svg');
      if (!svg) return;
      b.addEventListener('mouseenter', () => gsap.to(svg, { x: 4, duration: 0.25 }));
      b.addEventListener('mouseleave', () => gsap.to(svg, { x: 0, duration: 0.25 }));
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { if (document.fonts && document.fonts.ready) document.fonts.ready.then(init); else init(); });
  } else if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(init);
  } else {
    init();
  }
})();
