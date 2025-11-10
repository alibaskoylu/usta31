
// ===== Bila Tarım — Corporate Premium V3.1 =====
(function(){
  try{
    // Capture existing logo BEFORE clearing the DOM
    const legacyBars = document.querySelectorAll('.header, .topbar, .logo-bar');
    let capturedLogo = document.querySelector('.logo img, header img, .logo-bar img');
    capturedLogo = capturedLogo ? capturedLogo.cloneNode(true) : null;

    // Hide legacy bars (avoid layered look)
    legacyBars.forEach(el => el.style.display='none');

    // Save nodes to re-attach
    const prevChildren = Array.from(document.body.children);
    const scripts = Array.from(document.querySelectorAll('script'));
    const modalRoot = document.getElementById('product-modal-root');

    // Reset body
    document.body.innerHTML='';

    // Appbar (uses capturedLogo if available)
    const appbar = document.createElement('div');
    appbar.className = 'bila-appbar';
    const brand = document.createElement('div'); brand.className = 'bila-brand';
    const logo = capturedLogo || document.createElement('img');
    if(!capturedLogo){ logo.alt='Bila Tarım'; }
    logo.style.height='36px'; logo.style.width='auto'; logo.style.background='transparent';
    const badge = document.createElement('div'); badge.className='bila-badge'; badge.textContent='KATALOG';
    brand.appendChild(logo); brand.appendChild(badge);
    appbar.appendChild(brand);
    document.body.appendChild(appbar);

    // Hero
    const hero = document.createElement('div'); hero.className = 'bila-hero';

    const left = document.createElement('div'); left.className = 'bila-hero-left';
    const heroLogo = (capturedLogo ? capturedLogo.cloneNode(true) : logo.cloneNode(true));
    heroLogo.className = 'logo-big';
    const leftText = document.createElement('div');
    const t1 = document.createElement('div'); t1.className = 'bila-title'; t1.textContent = 'Ürün Grupları'; // changed text
    // No subtitle added (removed)
    leftText.appendChild(t1);
    left.appendChild(heroLogo); left.appendChild(leftText);

    const right = document.createElement('div'); right.className = 'bila-hero-right';
    const cta = document.createElement('div'); cta.className = 'bila-cta';
    const login = document.createElement('a'); login.href='login.html'; login.className='bila-chip bila-chip--accent'; login.textContent='Kullanıcı Girişi';
    cta.appendChild(login);
    const searchWrap = document.createElement('div'); searchWrap.className='bila-search';
    const icon = document.createElement('span'); icon.className='icon';
    icon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.44.44l.27.28v.79l5 5 1.5-1.5-5-5zM10 15a5 5 0 110-10 5 5 0 010 10z" stroke="#0A7F6E" stroke-width="2" stroke-linecap="round"/></svg>';
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
      if(n === modalRoot) return; // add later
      if(n.tagName && n.tagName.toLowerCase()==='script') return;
      if(n.classList && (n.classList.contains('header')||n.classList.contains('topbar')||n.classList.contains('logo-bar'))) return;
      if(n.id === 'dynamic-content') return;
      frame.appendChild(n);
    });
    document.body.appendChild(frame);

    if(modalRoot){ document.body.appendChild(modalRoot); }
    scripts.forEach(s => document.body.appendChild(s));

  }catch(e){
    console.warn('Catalog V3.1 init error', e);
  }
})();
