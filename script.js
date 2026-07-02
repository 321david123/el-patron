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

  /* ============================================================
     Menu Spanish strings (section tabs + item descriptions).
     Dish names stay as-is. Driven by the EN/ES toggle, which
     sets <html lang>; we mirror it here for JS-rendered text.
     ============================================================ */
  const MENU_ES = {
    // Section tabs (untranslated ones fall through unchanged)
    'Lunch': 'Almuerzo',
    'Dinner': 'Cena',
    'Fajitas & More': 'Fajitas y Más',
    'Seafood': 'Mariscos',
    'Parrilladas (for Two)': 'Parrilladas (para Dos)',
    'Vegetarian': 'Vegetariano',
    'Served Anytime': 'A Toda Hora',
    'Combinations': 'Combinaciones',
    "Kids' Menu": 'Menú Infantil',
    'Desserts & Drinks': 'Postres y Bebidas',
    // Item descriptions
    '3 soft tacos filled with steak, served with pico de gallo, Mexican rice and fried beans.': '3 tacos suaves rellenos de bistec, servidos con pico de gallo, arroz a la mexicana y frijoles refritos.',
    '3 soft tacos with steak, Mexican chorizo and grilled onions, pico de gallo, rice and beans.': '3 tacos suaves con bistec, chorizo mexicano y cebolla asada, pico de gallo, arroz y frijoles.',
    '3 soft tacos of pork tips in special sauce, cilantro, onions, rice and beans.': '3 tacos suaves de puntas de cerdo en salsa especial, cilantro, cebolla, arroz y frijoles.',
    '3 soft tacos filled with pork carnitas, pico de gallo, rice and beans.': '3 tacos suaves de carnitas de cerdo, pico de gallo, arroz y frijoles.',
    '3 tacos with grilled shrimp, lettuce, tomatoes and cheese, rice and beans.': '3 tacos de camarón a la parrilla, lechuga, jitomate y queso, arroz y frijoles.',
    '3 soft steak tacos, lettuce, tomatoes, cheese, grilled onions, rice and beans.': '3 tacos suaves de bistec, lechuga, jitomate, queso, cebolla asada, arroz y frijoles.',
    '3 fried shells (flour or corn) with steak or chicken, lettuce, tomato and cheese.': '3 tortillas doradas (de harina o maíz) con bistec o pollo, lechuga, jitomate y queso.',
    '3 tacos, ground beef or shredded chicken.': '3 tacos de carne molida o pollo deshebrado.',
    'Grilled steak or chicken in a flour tortilla with beans and rice, stuffed with cheese, guacamole salad.': 'Bistec o pollo a la parrilla en tortilla de harina con frijoles y arroz, relleno de queso, ensalada de guacamole.',
    'Sliced beef or chicken with bell pepper, onions, tomato, beans, rice and 3 tortillas.': 'Tiras de res o pollo con pimiento, cebolla, jitomate, frijoles, arroz y 3 tortillas.',
    'Grilled shrimp with onions, peppers and tomato, guacamole, sour cream, beans, rice and tortillas.': 'Camarón a la parrilla con cebolla, pimientos y jitomate, guacamole, crema, frijoles, arroz y tortillas.',
    'Pork tips, rice, beans, guacamole salad, pico de gallo and 3 tortillas.': 'Puntas de cerdo, arroz, frijoles, ensalada de guacamole, pico de gallo y 3 tortillas.',
    'Flour tortilla (soft or fried) with shredded beef or chicken, cheese and guacamole sauce, rice and beans.': 'Tortilla de harina (suave o dorada) con res deshebrada o pollo, queso y salsa de guacamole, arroz y frijoles.',
    'Grilled chicken with Mexican chorizo, rice, beans and 3 tortillas.': 'Pollo a la parrilla con chorizo mexicano, arroz, frijoles y 3 tortillas.',
    'Grilled ground beef and chorizo, cheese dip, rice, beans, lettuce, tomatoes and sour cream.': 'Carne molida y chorizo a la parrilla, dip de queso, arroz, frijoles, lechuga, jitomate y crema.',
    'Crispy flour shell with beans, lettuce, tomatoes, cheese, sour cream and guacamole.': 'Tortilla de harina crujiente con frijoles, lechuga, jitomate, queso, crema y guacamole.',
    'Rolled flour tortilla with grilled steak, nacho cheese, rice and beans.': 'Tortilla de harina enrollada con bistec a la parrilla, queso para nachos, arroz y frijoles.',
    '2 soft tacos with steak, pico de gallo, rice and beans.': '2 tacos suaves de bistec, pico de gallo, arroz y frijoles.',
    '2 soft tacos with pork tips in special sauce, cilantro and onions, rice and beans.': '2 tacos suaves de puntas de cerdo en salsa especial, cilantro y cebolla, arroz y frijoles.',
    '1 beef and 1 chicken enchilada with mole sauce, lettuce, tomatoes, sour cream, rice and beans.': '1 enchilada de res y 1 de pollo con mole, lechuga, jitomate, crema, arroz y frijoles.',
    'Fried tortilla in special ranchero red or green sauce, sour cream and cheese, rice and beans.': 'Tortilla dorada en salsa ranchera especial roja o verde, crema y queso, arroz y frijoles.',
    '2 pieces rib-eye grilled with onions, rice, beans, guacamole salad and 3 tortillas.': '2 piezas de rib-eye a la parrilla con cebolla, arroz, frijoles, ensalada de guacamole y 3 tortillas.',
    'Grilled chicken and bacon with chipotle sauce (spicy), rice, beans and 3 tortillas.': 'Pollo a la parrilla con tocino y salsa de chipotle (picante), arroz, frijoles y 3 tortillas.',
    'Skirt steak grilled with bacon, onion, bell peppers and cheese, rice, beans and tortillas.': 'Arrachera a la parrilla con tocino, cebolla, pimientos y queso, arroz, frijoles y tortillas.',
    'Chicken breast, rib-eye, grilled onion and chorizo, rice, beans and 3 tortillas.': 'Pechuga de pollo, rib-eye, cebolla asada y chorizo, arroz, frijoles y 3 tortillas.',
    'Rib-eye and grilled shrimp with guacamole, onions, peppers, rice, beans and tortillas.': 'Rib-eye y camarón a la parrilla con guacamole, cebolla, pimientos, arroz, frijoles y tortillas.',
    'T-bone grilled with our special recipe, mushrooms and onions, rice, beans and tortillas.': 'T-bone a la parrilla con nuestra receta especial, champiñones y cebolla, arroz, frijoles y tortillas.',
    'T-bone grilled with our special sauce, rice, beans and 3 tortillas.': 'T-bone a la parrilla con nuestra salsa especial, arroz, frijoles y 3 tortillas.',
    'Beef ribs, nopales, grilled onions, whole jalapeño, rice, beans and tortillas.': 'Costillas de res, nopales, cebollitas asadas, jalapeño entero, arroz, frijoles y tortillas.',
    'Chicken breast grilled with our special recipe, rice, lettuce, tomatoes, cheese, guacamole.': 'Pechuga de pollo a la parrilla con nuestra receta especial, arroz, lechuga, jitomate, queso y guacamole.',
    'Pork tips with rice, beans, guacamole salad and 3 tortillas.': 'Puntas de cerdo con arroz, frijoles, ensalada de guacamole y 3 tortillas.',
    '2 flour tortillas with chicken or shredded beef, cheese and mole, rice and beans.': '2 tortillas de harina con pollo o res deshebrada, queso y mole, arroz y frijoles.',
    'Extra-large burrito with grilled steak or chicken, sauce, lettuce, tomatoes, sour cream, rice and beans.': 'Burrito extragrande con bistec o pollo a la parrilla, salsa, lechuga, jitomate, crema, arroz y frijoles.',
    '12" tortilla with steak, al pastor or chicken, rice, beans, chipotle salsa, cheese sauce and pico.': 'Tortilla de 12" con bistec, al pastor o pollo, arroz, frijoles, salsa de chipotle, salsa de queso y pico de gallo.',
    'Chicken or steak grilled with onion, tomatoes, peppers, beans, cheese, guacamole, sour cream, rice and tortillas.': 'Pollo o bistec a la parrilla con cebolla, jitomate, pimientos, frijoles, queso, guacamole, crema, arroz y tortillas.',
    'Steak, chicken and shrimp grilled with onions, tomatoes, peppers, guacamole, rice, beans and 6 tortillas.': 'Bistec, pollo y camarón a la parrilla con cebolla, jitomate, pimientos, guacamole, arroz, frijoles y 6 tortillas.',
    'Chicken, steak and shrimp grilled with onions, tomatoes, peppers, beans, cheese, rice, pico, guacamole.': 'Pollo, bistec y camarón a la parrilla con cebolla, jitomate, pimientos, frijoles, queso, arroz, pico de gallo y guacamole.',
    'Steak, chicken or pork with sour cream, guacamole, pico de gallo, rice and beans.': 'Bistec, pollo o cerdo con crema, guacamole, pico de gallo, arroz y frijoles.',
    '2 poblano peppers breaded, filled with cheese, mole on top, rice, beans and 3 tortillas.': '2 chiles poblanos capeados, rellenos de queso, con mole encima, arroz, frijoles y 3 tortillas.',
    '4 enchiladas (beef, chicken, cheese, shredded beef) with cheese and mole, lettuce and sour cream.': '4 enchiladas (res, pollo, queso, res deshebrada) con queso y mole, lechuga y crema.',
    '3 chicken enchiladas with green sauce, cheese, onions, sour cream, rice and beans.': '3 enchiladas de pollo con salsa verde, queso, cebolla, crema, arroz y frijoles.',
    'A dozen fresh oysters on the shell with lime.': 'Una docena de ostiones frescos en su concha con limón.',
    'Grilled shrimp in spicy sauce, rice, lettuce, pico de gallo and guacamole.': 'Camarón a la parrilla en salsa picante, arroz, lechuga, pico de gallo y guacamole.',
    'Shrimp and bacon with chipotle sauce, rice, beans and 3 tortillas.': 'Camarón con tocino en salsa de chipotle, arroz, frijoles y 3 tortillas.',
    'Shrimp sautéed in garlic flakes and olive oil, rice, lettuce, tomato, avocado and tortillas.': 'Camarón salteado en ajo y aceite de oliva, arroz, lechuga, jitomate, aguacate y tortillas.',
    'Grilled shrimp with onions, peppers and tomato, guacamole, sour cream, rice, beans and tortillas.': 'Camarón a la parrilla con cebolla, pimientos y jitomate, guacamole, crema, arroz, frijoles y tortillas.',
    'Grilled shrimp, peppers, tomatoes and onions, nacho cheese and tortilla chips.': 'Camarón a la parrilla, pimientos, jitomate y cebolla, queso para nachos y totopos.',
    'Seafood burrito with crab, shrimp, rice, cheese dip and salad.': 'Burrito de mariscos con cangrejo, camarón, arroz, dip de queso y ensalada.',
    'Big flour tortilla with grilled shrimp and extra cheese, sour cream, guacamole, pico, rice and beans.': 'Tortilla de harina grande con camarón a la parrilla y queso extra, crema, guacamole, pico de gallo, arroz y frijoles.',
    'Steak, chicken, pork, chorizo, nopales, spring onions, peppers, grilled onions and jalapeño — beans, rice and 6 tortillas.': 'Bistec, pollo, cerdo, chorizo, nopales, cebollitas de cambray, pimientos, cebolla asada y jalapeño — frijoles, arroz y 6 tortillas.',
    'Shrimp, tilapia, scallops and crab meat, grilled onions, peppers and jalapeño — salad, rice and 6 tortillas.': 'Camarón, tilapia, callos y carne de cangrejo, cebolla asada, pimientos y jalapeño — ensalada, arroz y 6 tortillas.',
    'Shrimp, tilapia, steak, chicken, pork, grilled onions, peppers and jalapeño — beans, rice and 6 tortillas.': 'Camarón, tilapia, bistec, pollo y cerdo, cebolla asada, pimientos y jalapeño — frijoles, arroz y 6 tortillas.',
    'Steak, chicken, shrimp or mixed, grilled onions, peppers and cherry tomatoes, rice and french fries.': 'Bistec, pollo, camarón o mixtas, cebolla asada, pimientos y jitomate cherry, arroz y papas a la francesa.',
    'Single plate — Fridays & Saturdays only.': 'Plato individual — solo viernes y sábados.',
    'Chicken, pork, steak, chorizo, nopales, spring onions, jalapeño and cheese, rice, beans and 3 tortillas.': 'Pollo, cerdo, bistec, chorizo, nopales, cebollitas de cambray, jalapeño y queso, arroz, frijoles y 3 tortillas.',
    'Shrimp, tilapia, crab meat, scallops, cheese and avocado, rice, salad and 3 tortillas.': 'Camarón, tilapia, carne de cangrejo, callos, queso y aguacate, arroz, ensalada y 3 tortillas.',
    'Pork, steak, chicken, shrimp, tilapia, nopales, grilled onions, rice, beans, salad and 3 tortillas.': 'Cerdo, bistec, pollo, camarón, tilapia, nopales, cebolla asada, arroz, frijoles, ensalada y 3 tortillas.',
    '3 chicken enchiladas with green salsa and cheese, guacamole, tomatoes, sour cream, rice and beans.': '3 enchiladas de pollo con salsa verde y queso, guacamole, jitomate, crema, arroz y frijoles.',
    '3 crab enchiladas with cheese, lettuce, guacamole, sour cream, tomato, rice and beans.': '3 enchiladas de cangrejo con queso, lechuga, guacamole, crema, jitomate, arroz y frijoles.',
    '3 chicken enchiladas with cheese and mole, guacamole, tomatoes, sour cream, rice and beans.': '3 enchiladas de pollo con queso y mole, guacamole, jitomate, crema, arroz y frijoles.',
    '5 enchiladas with cheese and mole, lettuce, tomatoes, sour cream and ranchero sauce.': '5 enchiladas con queso y mole, lechuga, jitomate, crema y salsa ranchera.',
    '3 chicken enchiladas with red sauce, cheese, onions, sour cream, rice and beans.': '3 enchiladas de pollo con salsa roja, queso, cebolla, crema, arroz y frijoles.',
    'Cheese quesadilla with grilled onions and mushrooms, shredded chicken or ground beef, salad.': 'Quesadilla de queso con cebolla asada y champiñones, pollo deshebrado o carne molida, ensalada.',
    'Grilled steak or chicken with beans and rice, stuffed with cheese, guacamole salad.': 'Bistec o pollo a la parrilla con frijoles y arroz, rellena de queso, ensalada de guacamole.',
    'Grilled flour tortilla stuffed with cheese, chicken or beef and beans, rice, lettuce, guacamole, sour cream.': 'Tortilla de harina a la plancha rellena de queso, pollo o res y frijoles, arroz, lechuga, guacamole y crema.',
    'Cheese quesadilla with beef, chicken, shredded beef or beans, lettuce, tomatoes, sour cream, guacamole.': 'Quesadilla de queso con res, pollo, res deshebrada o frijoles, lechuga, jitomate, crema y guacamole.',
    'Cheese quesadilla with your choice of filling, lettuce, tomatoes, sour cream and our supreme sauce.': 'Quesadilla de queso con el relleno de tu elección, lechuga, jitomate, crema y nuestra salsa suprema.',
    'Mushrooms, bell peppers, onions, tomatoes and zucchini, rice, beans and 3 tortillas.': 'Champiñones, pimientos, cebolla, jitomate y calabacita, arroz, frijoles y 3 tortillas.',
    'Extra-large burrito with spinach, rice, beans and cheese dip, lettuce, tomato, pico and sour cream.': 'Burrito extragrande de espinacas con arroz, frijoles y dip de queso, lechuga, jitomate, pico de gallo y crema.',
    'Corn tortillas with onions, peppers, mushrooms and zucchini in red sauce, cheese, rice and salad.': 'Tortillas de maíz con cebolla, pimientos, champiñones y calabacita en salsa roja, queso, arroz y ensalada.',
    'Flour tortilla with mushrooms, tomatoes, onions, pepper, zucchini and cheese, rice and salad.': 'Tortilla de harina con champiñones, jitomate, cebolla, pimiento, calabacita y queso, arroz y ensalada.',
    'Quesadilla with cheese, spinach, onions and tomatoes, rice, lettuce, tomato and sour cream.': 'Quesadilla de queso con espinacas, cebolla y jitomate, arroz, lechuga, jitomate y crema.',
    '3 grilled eggs with ranchero sauce, rice, beans and 3 tortillas.': '3 huevos a la plancha con salsa ranchera, arroz, frijoles y 3 tortillas.',
    '3 grilled eggs with Mexican chorizo, tossed salad, rice, beans and 3 tortillas.': '3 huevos a la plancha con chorizo mexicano, ensalada, arroz, frijoles y 3 tortillas.',
    'Fried tortilla in ranchero red or green sauce with chicken, rice and beans.': 'Tortilla dorada en salsa ranchera roja o verde con pollo, arroz y frijoles.',
    'Filled with pork, order of 3.': 'Rellenos de cerdo, orden de 3.',
    'Shrimp salad.': 'Ensalada de camarón.',
    'Crispy flour tortilla with chicken, lettuce, grated cheese and sour cream.': 'Tortilla de harina crujiente con pollo, lechuga, queso rallado y crema.',
    'Served with Mexican rice or fried beans.': 'Servido con arroz a la mexicana o frijoles refritos.',
    'Beans or rice may be substituted for french fries.': 'Los frijoles o el arroz se pueden cambiar por papas a la francesa.',
    'Any flavor.': 'Cualquier sabor.',
    "Mexico's pop.": 'El refresco de México.',
    'Pepsi products.': 'Productos Pepsi.',
  };
  if (tabsEl && panelsEl) {
    const menuLangNodes = [];
    tabsEl.querySelectorAll('.menu__tab').forEach((el) => menuLangNodes.push({ el, en: el.textContent }));
    panelsEl.querySelectorAll('.menu__item-desc').forEach((el) => menuLangNodes.push({ el, en: el.textContent }));
    const applyMenuLang = () => {
      const es = document.documentElement.getAttribute('lang') === 'es';
      menuLangNodes.forEach(({ el, en }) => {
        const tx = es ? (MENU_ES[en] || en) : en;
        if (el.textContent !== tx) el.textContent = tx;
      });
    };
    applyMenuLang();
    if (window.MutationObserver) {
      new MutationObserver(applyMenuLang)
        .observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }
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
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 60) nav.classList.add('is-solid');
      else nav.classList.remove('is-solid');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const toggle = document.getElementById('navToggle');
  const overlay = document.getElementById('overlayMenu');
  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
  };
  if (toggle && overlay) {
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
  document.querySelectorAll('.story__text, .story__media, .sig__copy, .sig__img, .feature, .visit__info, .visit__map, .banner__inner, .menu__head, .sig__head, .features__head')
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
