
// ===== Bila Tarım — Corporate Premium Init (V2-A) =====
(function(){
  try {
    // Hide legacy bars to avoid double-header
    document.querySelectorAll('.header, .topbar, .logo-bar').forEach(el => el.style.display='none');

    if(!document.querySelector('.bila-header')){
      const header = document.createElement('div');
      header.className = 'bila-header';

      // Brand
      const brand = document.createElement('div'); brand.className='bila-brand';
      const existingLogo = document.querySelector('.logo img, header img, .logo-bar img');
      const logo = existingLogo ? existingLogo.cloneNode(true) : document.createElement('img');
      logo.alt='Bila Tarım'; logo.style.height='36px';
      const title = document.createElement('div'); title.className='bila-title'; title.textContent='Bila Tarım Katalog';
      brand.appendChild(logo); brand.appendChild(title);

      // Actions
      const actions = document.createElement('div'); actions.className='bila-actions';
      const login = document.createElement('a'); login.href='login.html'; login.className='bila-btn'; login.textContent='Giriş';
      const admin = document.createElement('a'); admin.href='admin.html'; admin.className='bila-btn bila-btn--primary'; admin.textContent='Admin Panel';
      actions.appendChild(login); actions.appendChild(admin);

      header.appendChild(brand); header.appendChild(actions);

      // HERO
      const hero = document.createElement('div'); hero.className='bila-hero';
      const left = document.createElement('div'); left.className='bila-hero-left';
      const heroLogo = logo.cloneNode(true); heroLogo.style.height='54px';
      const leftText = document.createElement('div');
      const t1 = document.createElement('div'); t1.className='bila-hero-title'; t1.textContent='Ürün Kataloğu';
      const t2 = document.createElement('div'); t2.className='bila-hero-sub'; t2.textContent='Hızlı arama · Net kategori yapısı · Kurumsal görünüm';
      leftText.appendChild(t1); leftText.appendChild(t2);
      left.appendChild(heroLogo); left.appendChild(leftText);

      const right = document.createElement('div'); right.className='bila-hero-right';
      const searchWrap = document.createElement('div'); searchWrap.className='bila-search';
      const icon = document.createElement('span'); icon.className='icon';
      icon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.44.44l.27.28v.79l5 5 1.5-1.5-5-5zM10 15a5 5 0 110-10 5 5 0 010 10z" stroke="#0F5E55" stroke-width="2" stroke-linecap="round"/></svg>';
      const input = document.createElement('input'); input.type='text'; input.id='search'; input.placeholder='Ürün veya kategori ara…';
      searchWrap.appendChild(icon); searchWrap.appendChild(input);
      right.appendChild(searchWrap);

      hero.appendChild(left); hero.appendChild(right);

      // FRAME + dynamic content
      const frame = document.createElement('div'); frame.className='bila-frame';
      let dyn = document.getElementById('dynamic-content'); if(!dyn){ dyn = document.createElement('div'); dyn.id='dynamic-content'; }

      // Mount
      const prev = Array.from(document.body.children);
      document.body.innerHTML='';
      document.body.appendChild(header);
      document.body.appendChild(hero);
      const div = document.createElement('div'); div.className='bila-divider'; document.body.appendChild(div);
      frame.appendChild(dyn);
      prev.forEach(n => {
        if(n.tagName && n.tagName.toLowerCase()==='script') return;
        if(n.classList && (n.classList.contains('header')||n.classList.contains('topbar')||n.classList.contains('logo-bar'))) return;
        if(n.id==='product-modal-root'){ document.body.appendChild(n); return; }
        if(n.id==='dynamic-content') return;
        frame.appendChild(n);
      });
      document.body.appendChild(frame);
    }
  } catch(e){ console.warn('Catalog V2-A init error', e); }
})();
