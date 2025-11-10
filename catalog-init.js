
// ===== Bila Tarım — Corporate Premium V3 (No Admin, 'Kullanıcı Girişi') =====
(function(){
  try{
    // Hide legacy bars
    document.querySelectorAll('.header, .topbar, .logo-bar').forEach(el => el.style.display='none');

    // Save references we want to keep
    const prevChildren = Array.from(document.body.children);
    const scripts = Array.from(document.querySelectorAll('script'));
    const modalRoot = document.getElementById('product-modal-root');

    // Clear body (keep scripts & modal re-attached later)
    document.body.innerHTML='';

    // Appbar
    const appbar = document.createElement('div');
    appbar.className = 'bila-appbar';
    const brand = document.createElement('div'); brand.className = 'bila-brand';
    const existingLogo = document.querySelector('.logo img, header img, .logo-bar img');
    const logo = existingLogo ? existingLogo.cloneNode(true) : document.createElement('img');
    logo.alt = 'Bila Tarım'; logo.style.height='34px';
    const badge = document.createElement('div'); badge.className = 'bila-badge'; badge.textContent = 'KATALOG';
    brand.appendChild(logo); brand.appendChild(badge);
    appbar.appendChild(brand);
    document.body.appendChild(appbar);

    // Hero
    const hero = document.createElement('div'); hero.className = 'bila-hero';

    const left = document.createElement('div'); left.className = 'bila-hero-left';
    const heroLogo = logo.cloneNode(true); heroLogo.className = 'logo-big';
    const leftText = document.createElement('div');
    const t1 = document.createElement('div'); t1.className = 'bila-title'; t1.textContent = 'Ürün Kataloğu';
    const t2 = document.createElement('div'); t2.className = 'bila-sub'; t2.textContent = 'Kurumsal görünüm · Hızlı arama · Net kategori yapısı';
    leftText.appendChild(t1); leftText.appendChild(t2);
    left.appendChild(heroLogo); left.appendChild(leftText);

    const right = document.createElement('div'); right.className = 'bila-hero-right';
    const cta = document.createElement('div'); cta.className = 'bila-cta';
    const login = document.createElement('a'); login.href='login.html'; login.className='bila-chip bila-chip--accent'; login.textContent='Kullanıcı Girişi';
    cta.appendChild(login);
    const searchWrap = document.createElement('div'); searchWrap.className='bila-search';
    const icon = document.createElement('span'); icon.className='icon';
    icon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.44.44l.27.28v.79l5 5 1.5-1.5-5-5zM10 15a5 5 0 110-10 5 5 0 010 10z" stroke="#0E574F" stroke-width="2" stroke-linecap="round"/></svg>';
    const input = document.createElement('input'); input.type='text'; input.id='search'; input.placeholder='Ürün veya kategori ara…';
    searchWrap.appendChild(icon); searchWrap.appendChild(input);
    right.appendChild(cta); right.appendChild(searchWrap);

    hero.appendChild(left); hero.appendChild(right);
    document.body.appendChild(hero);

    // Divider + Frame
    const divider = document.createElement('div'); divider.className = 'bila-divider'; document.body.appendChild(divider);
    const frame = document.createElement('div'); frame.className = 'bila-frame';
    let dyn = document.getElementById('dynamic-content'); if(!dyn){ dyn = document.createElement('div'); dyn.id='dynamic-content'; }
    frame.appendChild(dyn);

    // Re-attach previous content except legacy headers & scripts; keep modal at root
    prevChildren.forEach(n => {
      if(n === modalRoot) return; // will add later
      if(n.tagName && n.tagName.toLowerCase()==='script') return;
      if(n.classList && (n.classList.contains('header')||n.classList.contains('topbar')||n.classList.contains('logo-bar'))) return;
      if(n.id === 'dynamic-content') return;
      frame.appendChild(n);
    });
    document.body.appendChild(frame);

    // Re-attach modal (if existed)
    if(modalRoot){ document.body.appendChild(modalRoot); }

    // Make sure existing scripts remain in DOM order (so index.js still runs)
    scripts.forEach(s => document.body.appendChild(s));
  }catch(e){
    console.warn('Catalog V3 init error', e);
  }
})();
