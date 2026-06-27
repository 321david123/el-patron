/* =====================================================
   El Patron — interactions
   ===================================================== */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = "2026";

  /* ============================================================
     MENU DATA  (real items + real prices from the dossier)
     ============================================================ */
  const MENU = [
    { section: 'Tacos', items: [
      { name: 'Tacos de Carne Asada', desc: '3 soft tacos filled with steak, served with pico de gallo, Mexican rice and fried beans.', price: '$9.00' },
      { name: 'Tacos Guanajuato', desc: '3 soft tacos with steak, Mexican chorizo and grilled onions, pico de gallo, rice and beans.', price: '$9.50' },
      { name: 'Tacos Al Pastor', desc: '3 soft tacos of pork tips in special sauce, cilantro, onions, rice and beans.', price: '$9.00' },
      { name: 'Tacos de Carnitas', desc: '3 soft tacos filled with pork carnitas, pico de gallo, rice and beans.', price: '$9.00' },
      { name: 'Shrimp Tacos', desc: '3 tacos with grilled shrimp, lettuce, tomatoes and cheese, rice and beans.', price: '$10.00' },
      { name: 'Cheese Steak Tacos', desc: '3 soft steak tacos, lettuce, tomatoes, cheese, grilled onions, rice and beans.', price: '$9.50' },
      { name: 'Tacos Supreme', desc: '3 fried shells (flour or corn) with steak or chicken, lettuce, tomato and cheese.', price: '$6.00' },
      { name: 'Hard Shell Tacos', desc: '3 tacos, ground beef or shredded chicken.', price: '$5.00' },
      { name: 'Soft Shell Tacos', desc: '3 tacos, ground beef or shredded chicken.', price: '$6.00' },
    ]},
    { section: 'Lunch', items: [
      { name: 'Quesadilla Mexicana', desc: 'Grilled steak or chicken in a flour tortilla with beans and rice, stuffed with cheese, guacamole salad.', price: '$7.50' },
      { name: 'Fajitas Lunch', desc: 'Sliced beef or chicken with bell pepper, onions, tomato, beans, rice and 3 tortillas.', price: '$7.50' },
      { name: 'Fajitas Lunch Shrimp', desc: 'Grilled shrimp with onions, peppers and tomato, guacamole, sour cream, beans, rice and tortillas.', price: '$8.00' },
      { name: 'Carnitas Express', desc: 'Pork tips, rice, beans, guacamole salad, pico de gallo and 3 tortillas.', price: '$7.00' },
      { name: 'Chimichanga Lunch', desc: 'Flour tortilla (soft or fried) with shredded beef or chicken, cheese and guacamole sauce, rice and beans.', price: '$6.50' },
      { name: 'Chorizo Pollo', desc: 'Grilled chicken with Mexican chorizo, rice, beans and 3 tortillas.', price: '$7.50' },
      { name: 'Burrito California Lunch', desc: 'Grilled ground beef and chorizo, cheese dip, rice, beans, lettuce, tomatoes and sour cream.', price: '$7.50' },
      { name: 'Taco Salad', desc: 'Crispy flour shell with beans, lettuce, tomatoes, cheese, sour cream and guacamole.', price: '$7.50' },
      { name: 'Steak Burrito Lunch', desc: 'Rolled flour tortilla with grilled steak, nacho cheese, rice and beans.', price: '$7.00' },
      { name: 'Tacos de Carne Asada Lunch', desc: '2 soft tacos with steak, pico de gallo, rice and beans.', price: '$7.00' },
      { name: 'Tacos Al Pastor (Lunch)', desc: '2 soft tacos with pork tips in special sauce, cilantro and onions, rice and beans.', price: '$7.00' },
      { name: 'Enchilada Supreme Lunch', desc: '1 beef and 1 chicken enchilada with mole sauce, lettuce, tomatoes, sour cream, rice and beans.', price: '$6.50' },
      { name: 'Chilaquiles Mexicanos', desc: 'Fried tortilla in special ranchero red or green sauce, sour cream and cheese, rice and beans.', price: '$7.00' },
    ]},
    { section: 'Dinner', items: [
      { name: 'Carne Asada', desc: '2 pieces rib-eye grilled with onions, rice, beans, guacamole salad and 3 tortillas.', price: '$10.00' },
      { name: 'Pollo El Patron', desc: 'Grilled chicken and bacon with chipotle sauce (spicy), rice, beans and 3 tortillas.', price: '$11.00' },
      { name: 'Alambre', desc: 'Skirt steak grilled with bacon, onion, bell peppers and cheese, rice, beans and tortillas.', price: '$12.00' },
      { name: 'El Cazuelon', desc: 'Chicken breast, rib-eye, grilled onion and chorizo, rice, beans and 3 tortillas.', price: '$11.50' },
      { name: 'Mar y Tierra', desc: 'Rib-eye and grilled shrimp with guacamole, onions, peppers, rice, beans and tortillas.', price: '$12.50' },
      { name: 'Steak Jalisco', desc: 'T-bone grilled with our special recipe, mushrooms and onions, rice, beans and tortillas.', price: '$13.00' },
      { name: 'Steak Ranchero', desc: 'T-bone grilled with our special sauce, rice, beans and 3 tortillas.', price: '$13.00' },
      { name: 'Costillas a la Parrilla', desc: 'Beef ribs, nopales, grilled onions, whole jalapeño, rice, beans and tortillas.', price: '$11.00' },
      { name: 'Pollo Loco', desc: 'Chicken breast grilled with our special recipe, rice, lettuce, tomatoes, cheese, guacamole.', price: '$10.00' },
      { name: 'Carnitas Dinner', desc: 'Pork tips with rice, beans, guacamole salad and 3 tortillas.', price: '$10.00' },
      { name: 'Chimichanga Dinner', desc: '2 flour tortillas with chicken or shredded beef, cheese and mole, rice and beans.', price: '$9.00' },
      { name: 'Super Burrito', desc: 'Extra-large burrito with grilled steak or chicken, sauce, lettuce, tomatoes, sour cream, rice and beans.', price: '$8.75' },
      { name: 'Don Burrito', desc: '12" tortilla with steak, al pastor or chicken, rice, beans, chipotle salsa, cheese sauce and pico.', price: '$9.25' },
    ]},
    { section: 'Fajitas & More', items: [
      { name: 'Fajitas', desc: 'Chicken or steak grilled with onion, tomatoes, peppers, beans, cheese, guacamole, sour cream, rice and tortillas.', price: '$12.00' },
      { name: 'Fajitas for Two', desc: 'Steak, chicken and shrimp grilled with onions, tomatoes, peppers, guacamole, rice, beans and 6 tortillas.', price: '$23.50' },
      { name: 'Texas Fajitas', desc: 'Chicken, steak and shrimp grilled with onions, tomatoes, peppers, beans, cheese, rice, pico, guacamole.', price: '$13.00' },
      { name: 'Fajitas Quesadilla', desc: 'Steak, chicken or pork with sour cream, guacamole, pico de gallo, rice and beans.', price: '$9.00' },
      { name: 'Chiles Rellenos', desc: '2 poblano peppers breaded, filled with cheese, mole on top, rice, beans and 3 tortillas.', price: '$9.50' },
      { name: 'Enchiladas Supremas', desc: '4 enchiladas (beef, chicken, cheese, shredded beef) with cheese and mole, lettuce and sour cream.', price: '$8.00' },
      { name: 'Enchiladas Suizas "Verdes"', desc: '3 chicken enchiladas with green sauce, cheese, onions, sour cream, rice and beans.', price: '$8.00' },
    ]},
    { section: 'Seafood', items: [
      { name: 'Ostiones en su Concha', desc: 'A dozen fresh oysters on the shell with lime.', price: '$15.00' },
      { name: 'Camarones a la Diabla', desc: 'Grilled shrimp in spicy sauce, rice, lettuce, pico de gallo and guacamole.', price: '$13.00' },
      { name: 'Camarones El Patron', desc: 'Shrimp and bacon with chipotle sauce, rice, beans and 3 tortillas.', price: '$13.00' },
      { name: 'Camarones al Mojo de Ajo', desc: 'Shrimp sautéed in garlic flakes and olive oil, rice, lettuce, tomato, avocado and tortillas.', price: '$13.00' },
      { name: 'Fajitas de Camarón', desc: 'Grilled shrimp with onions, peppers and tomato, guacamole, sour cream, rice, beans and tortillas.', price: '$14.00' },
      { name: 'Shrimp Nachos', desc: 'Grilled shrimp, peppers, tomatoes and onions, nacho cheese and tortilla chips.', price: '$12.00' },
      { name: 'Burrito del Mar', desc: 'Seafood burrito with crab, shrimp, rice, cheese dip and salad.', price: '$10.00' },
      { name: 'Shrimp Quesadilla', desc: 'Big flour tortilla with grilled shrimp and extra cheese, sour cream, guacamole, pico, rice and beans.', price: '$9.50' },
    ]},
    { section: 'Parrilladas (for Two)', items: [
      { name: 'Parrillada Tierra', desc: 'Steak, chicken, pork, chorizo, nopales, spring onions, peppers, grilled onions and jalapeño — beans, rice and 6 tortillas.', price: '$25.00' },
      { name: 'Parrillada del Mar', desc: 'Shrimp, tilapia, scallops and crab meat, grilled onions, peppers and jalapeño — salad, rice and 6 tortillas.', price: '$25.00' },
      { name: 'Parrillada Mar y Tierra', desc: 'Shrimp, tilapia, steak, chicken, pork, grilled onions, peppers and jalapeño — beans, rice and 6 tortillas.', price: '$25.00' },
      { name: 'Brochetas al Gusto', desc: 'Steak, chicken, shrimp or mixed, grilled onions, peppers and cherry tomatoes, rice and french fries.', price: '$12.00' },
      { name: 'Pozole Verde & Menudo', desc: 'Single plate — Fridays & Saturdays only.', price: '$8.00' },
    ]},
    { section: 'Molcajetes', items: [
      { name: 'Molcajete Tierra', desc: 'Chicken, pork, steak, chorizo, nopales, spring onions, jalapeño and cheese, rice, beans and 3 tortillas.', price: '$15.00' },
      { name: 'Molcajete del Mar', desc: 'Shrimp, tilapia, crab meat, scallops, cheese and avocado, rice, salad and 3 tortillas.', price: '$18.00' },
      { name: 'Molcajete Mar y Tierra', desc: 'Pork, steak, chicken, shrimp, tilapia, nopales, grilled onions, rice, beans, salad and 3 tortillas.', price: '$18.00' },
    ]},
    { section: 'Enchiladas', items: [
      { name: 'Enchiladas El Patron', desc: '3 chicken enchiladas with green salsa and cheese, guacamole, tomatoes, sour cream, rice and beans.', price: '$8.00' },
      { name: 'Enchiladas Cozumel', desc: '3 crab enchiladas with cheese, lettuce, guacamole, sour cream, tomato, rice and beans.', price: '$9.00' },
      { name: 'Enchiladas Mexicanas', desc: '3 chicken enchiladas with cheese and mole, guacamole, tomatoes, sour cream, rice and beans.', price: '$8.00' },
      { name: 'Enchiladas Rancheras', desc: '5 enchiladas with cheese and mole, lettuce, tomatoes, sour cream and ranchero sauce.', price: '$8.25' },
      { name: 'Enchiladas Rojas', desc: '3 chicken enchiladas with red sauce, cheese, onions, sour cream, rice and beans.', price: '$8.00' },
    ]},
    { section: 'Quesadillas', items: [
      { name: 'Quesadilla Ranchera', desc: 'Cheese quesadilla with grilled onions and mushrooms, shredded chicken or ground beef, salad.', price: '$7.50' },
      { name: 'Quesadilla Mexicana', desc: 'Grilled steak or chicken with beans and rice, stuffed with cheese, guacamole salad.', price: '$8.00' },
      { name: 'Quesadilla Supreme', desc: 'Grilled flour tortilla stuffed with cheese, chicken or beef and beans, rice, lettuce, guacamole, sour cream.', price: '$7.50' },
      { name: 'Quesadilla Verde', desc: 'Cheese quesadilla with beef, chicken, shredded beef or beans, lettuce, tomatoes, sour cream, guacamole.', price: '$7.00' },
      { name: 'Quesadilla Roja', desc: 'Cheese quesadilla with your choice of filling, lettuce, tomatoes, sour cream and our supreme sauce.', price: '$7.00' },
    ]},
    { section: 'Vegetarian', items: [
      { name: 'Fajitas Vegetarianas', desc: 'Mushrooms, bell peppers, onions, tomatoes and zucchini, rice, beans and 3 tortillas.', price: '$7.25' },
      { name: 'Spinach Burrito', desc: 'Extra-large burrito with spinach, rice, beans and cheese dip, lettuce, tomato, pico and sour cream.', price: '$7.50' },
      { name: 'Chilaquiles Vegetarianos', desc: 'Corn tortillas with onions, peppers, mushrooms and zucchini in red sauce, cheese, rice and salad.', price: '$7.50' },
      { name: 'Quesadilla Vegetariana', desc: 'Flour tortilla with mushrooms, tomatoes, onions, pepper, zucchini and cheese, rice and salad.', price: '$7.50' },
      { name: 'Spinach Quesadilla', desc: 'Quesadilla with cheese, spinach, onions and tomatoes, rice, lettuce, tomato and sour cream.', price: '$7.50' },
    ]},
    { section: 'Served Anytime', items: [
      { name: 'Huevos Rancheros', desc: '3 grilled eggs with ranchero sauce, rice, beans and 3 tortillas.', price: '$6.50' },
      { name: 'Huevos con Chorizo', desc: '3 grilled eggs with Mexican chorizo, tossed salad, rice, beans and 3 tortillas.', price: '$7.00' },
      { name: 'Chilaquiles with Chicken', desc: 'Fried tortilla in ranchero red or green sauce with chicken, rice and beans.', price: '$8.00' },
      { name: 'Tamales', desc: 'Filled with pork, order of 3.', price: '$6.00' },
      { name: 'Sonora Salad', desc: 'Shrimp salad.', price: '$8.00' },
      { name: 'Taco Loco', desc: 'Crispy flour tortilla with chicken, lettuce, grated cheese and sour cream.', price: '$7.00' },
    ]},
    { section: 'Combinations', items: [
      { name: '1 Taco & 2 Enchiladas', desc: 'Served with Mexican rice or fried beans.', price: '$7.50' },
      { name: '1 Taco, 1 Enchilada & 1 Chalupa', desc: '', price: '$7.50' },
      { name: '1 Enchilada, 1 Taco & 1 Chile Relleno', desc: '', price: '$7.50' },
      { name: '2 Beef Tacos, Rice & Beans', desc: '', price: '$7.50' },
      { name: '1 Beef Burrito, 1 Enchilada & 1 Taco', desc: '', price: '$7.50' },
      { name: '1 Beef Burrito, 1 Enchilada & 1 Chile Relleno', desc: '', price: '$7.50' },
    ]},
    { section: "Kids' Menu", items: [
      { name: '1 Burrito & 1 Taco', desc: 'Beans or rice may be substituted for french fries.', price: '$3.75' },
      { name: '1 Enchilada, Rice & Beans', desc: '', price: '$3.75' },
      { name: 'Chicken Tenders & Rice', desc: '', price: '$3.75' },
      { name: 'Cheese Quesadilla, Rice & Beans', desc: '', price: '$3.75' },
      { name: 'Corn Dog & Fries', desc: '', price: '$3.75' },
      { name: 'Milk, Chocolate Milk or Orange Juice', desc: '', price: '$1.85' },
    ]},
    { section: 'Desserts & Drinks', items: [
      { name: 'Fried Ice Cream', desc: '', price: '$4.00' },
      { name: 'Flan', desc: '', price: '$3.00' },
      { name: 'Churros', desc: '', price: '$2.00' },
      { name: 'Sopapilla', desc: '', price: '$2.00' },
      { name: 'Virgin Daiquiri', desc: 'Any flavor.', price: '$3.00' },
      { name: 'Jarritos', desc: "Mexico's pop.", price: '$2.00' },
      { name: 'Soft Drinks / Iced Tea / Lemonade', desc: 'Pepsi products.', price: '$1.85' },
    ]},
  ];

  /* ---------- Build menu tabs + panels ---------- */
  const tabsEl = document.getElementById('menuTabs');
  const panelsEl = document.getElementById('menuPanels');
  if (tabsEl && panelsEl) {
    MENU.forEach((group, i) => {
      const id = 'mp-' + i;

      const tab = document.createElement('button');
      tab.className = 'menu__tab' + (i === 0 ? ' is-active' : '');
      tab.textContent = group.section;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      tab.setAttribute('aria-controls', id);
      tabsEl.appendChild(tab);

      tab.tabIndex = i === 0 ? 0 : -1;

      const panel = document.createElement('div');
      panel.className = 'menu__panel' + (i === 0 ? ' is-active' : '');
      panel.id = id;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('tabindex', '0');
      if (i !== 0) panel.hidden = true;

      const list = document.createElement('div');
      list.className = 'menu__items';
      group.items.forEach((it) => {
        const item = document.createElement('div');
        item.className = 'menu__item';
        const desc = it.desc ? `<p class="menu__item-desc">${it.desc}</p>` : '';
        item.innerHTML = `
          <div class="menu__item-head">
            <span class="menu__item-name">${it.name}</span>
            <span class="menu__dots" aria-hidden="true"></span>
          </div>
          <span class="menu__item-price">${it.price}</span>
          ${desc}`;
        list.appendChild(item);
      });
      panel.appendChild(list);
      panelsEl.appendChild(panel);

      tab.addEventListener('click', () => activateTab(i));
    });

    const allTabs = () => Array.from(tabsEl.querySelectorAll('.menu__tab'));
    function activateTab(idx, focus) {
      const tabs = allTabs();
      const panels = panelsEl.querySelectorAll('.menu__panel');
      tabs.forEach((t, j) => {
        const on = j === idx;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
      });
      panels.forEach((p, j) => {
        const on = j === idx;
        p.classList.toggle('is-active', on);
        p.hidden = !on;
      });
      const active = tabs[idx];
      if (active) {
        active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        if (focus) active.focus();
      }
    }

    // Keyboard arrow navigation (WAI-ARIA tablist pattern)
    tabsEl.addEventListener('keydown', (e) => {
      const tabs = allTabs();
      const current = tabs.indexOf(document.activeElement);
      if (current === -1) return;
      let next = null;
      if (e.key === 'ArrowRight') next = (current + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      if (next !== null) { e.preventDefault(); activateTab(next, true); }
    });
  }

  /* ---------- Build reviews ---------- */
  const REVIEWS = [
    { stars: 5, quote: 'A very lively place with good food and a very friendly and welcoming staff. The Margarita towers are a must have!', author: 'Robert B', source: 'Tripadvisor' },
    { stars: 5, quote: 'Mexican food was hot and the service was speedy and efficient. This is a hidden gem on the Mississippi River.', author: 'Bruce F', source: 'Tripadvisor' },
    { stars: 5, quote: "I've never had a bad meal there and have eaten there literally dozens of times over the years.", author: 'Cosette T', source: 'Tripadvisor' },
    { stars: 4, quote: 'Both meals were delicious and filling.', author: 'Rick M', source: 'Tripadvisor' },
  ];
  const revWrap = document.getElementById('reviewsWrapper');
  if (revWrap) {
    REVIEWS.forEach((r) => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <blockquote class="review">
          <div class="review__stars" aria-label="${r.stars} out of 5 stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
          <p class="review__quote">${r.quote}</p>
          <footer><div class="review__author">${r.author}</div><div class="review__source">${r.source}</div></footer>
        </blockquote>`;
      revWrap.appendChild(slide);
    });
  }

  /* ============================================================
     NAV solidify + overlay
     ============================================================ */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add('is-solid');
    else nav.classList.remove('is-solid');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const toggle = document.getElementById('navToggle');
  const overlay = document.getElementById('overlayMenu');
  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
  };
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      if (open) {
        const first = overlay.querySelector('a');
        if (first) first.focus();
      }
    });
    overlay.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  /* ============================================================
     Lenis smooth scroll
     ============================================================ */
  let lenis = null;
  if (!prefersReduced && typeof Lenis !== 'undefined') {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }
  // anchor links -> lenis or native
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#' || id === '#top') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -70 });
      else target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ============================================================
     GSAP reveals + parallax + counters
     ============================================================ */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    if (lenis) lenis.on('scroll', ScrollTrigger.update);

    if (!prefersReduced) {
      // hero parallax
      gsap.to('.hero__img', {
        yPercent: 14, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      // signature image parallax drift
      gsap.utils.toArray('.sig__img img').forEach((img) => {
        gsap.fromTo(img, { yPercent: -6 }, {
          yPercent: 6, ease: 'none',
          scrollTrigger: { trigger: img.closest('.sig__row'), start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    }
  }

  /* ---------- IntersectionObserver reveals ---------- */
  const revealEls = [];
  document.querySelectorAll('.story__text, .story__media, .sig__copy, .sig__img, .feature, .visit__info, .visit__map, .banner__inner, .menu__head, .sig__head')
    .forEach((el) => { el.classList.add('reveal'); revealEls.push(el); });
  document.querySelectorAll('.sig__img').forEach((el) => el.classList.add('reveal-img'));

  if (prefersReduced) {
    revealEls.forEach((el) => el.classList.add('is-in'));
    document.querySelectorAll('.reveal-img').forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
    document.querySelectorAll('.reveal-img').forEach((el) => io.observe(el));
  }

  /* ---------- Stat counters ---------- */
  const counters = document.querySelectorAll('.stat__num[data-count]');
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    if (prefersReduced) { el.textContent = target.toFixed(decimals) + suffix; return; }
    const dur = 1400; const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (counters.length) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach((c) => cio.observe(c));
  }

  /* ============================================================
     Swipers
     ============================================================ */
  if (typeof Swiper !== 'undefined') {
    new Swiper('.gallery__swiper', {
      slidesPerView: 'auto', spaceBetween: 18, centeredSlides: false, grabCursor: true,
      navigation: { nextEl: '.gallery__swiper .swiper-button-next', prevEl: '.gallery__swiper .swiper-button-prev' },
      pagination: { el: '.gallery__swiper .swiper-pagination', clickable: true },
      breakpoints: { 768: { spaceBetween: 28 } },
    });

    new Swiper('.reviews__swiper', {
      slidesPerView: 1, spaceBetween: 40, loop: REVIEWS.length > 1,
      autoplay: prefersReduced ? false : { delay: 5500, disableOnInteraction: false },
      pagination: { el: '.reviews__pag', clickable: true },
    });
  }
})();
