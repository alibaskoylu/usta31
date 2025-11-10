
// ===== Bila Tarım — Catalog Init (DOM decoration only, non-breaking) =====
// This script does NOT change your data flow or Supabase logic.

(function(){
  try {
    // Build header if not present
    if(!document.querySelector('.bila-header')){
      const header = document.createElement('div');
      header.className = 'bila-header';

      // Brand (reuse existing logo if any)
      const brand = document.createElement('div');
      brand.className = 'bila-brand';
      const existingLogo = document.querySelector('.logo img, header img, .logo-bar img');
      const logo = existingLogo ? existingLogo.cloneNode(true) : document.createElement('img');
      if(!existingLogo){ logo.alt = 'Bila Tarım'; }
      logo.style.height = '42px'; logo.style.width='auto';
      const title = document.createElement('div');
      title.className = 'bila-title';
      title.textContent = 'Bila Tarım Katalog';
      brand.appendChild(logo);
      brand.appendChild(title);

      // Search (id='search' so index.js can hook)
      const searchWrap = document.createElement('div');
      searchWrap.className = 'bila-search';
      const icon = document.createElement('span');
      icon.className = 'icon';
      icon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.44.44l.27.28v.79l5 5 1.5-1.5-5-5zM10 15a5 5 0 110-10 5 5 0 010 10z" stroke="#1A635A" stroke-width="2" stroke-linecap="round"/></svg>';
      const input = document.createElement('input');
      input.type = 'text'; input.id = 'search'; input.placeholder = 'Ürün veya kategori ara…';
      searchWrap.appendChild(icon); searchWrap.appendChild(input);

      // Actions
      const actions = document.createElement('div');
      actions.className = 'bila-actions';
      const login = document.createElement('a'); login.href = 'login.html';
      login.className = 'bila-btn'; login.textContent = 'Giriş';
      const admin = document.createElement('a'); admin.href = 'admin.html';
      admin.className = 'bila-btn bila-btn--primary'; admin.textContent = 'Admin Panel';
      actions.appendChild(login); actions.appendChild(admin);

      header.appendChild(brand);
      header.appendChild(searchWrap);
      header.appendChild(actions);

      // Frame
      const frame = document.createElement('div');
      frame.className = 'bila-frame';
      // Ensure dynamic container exists; index.js renders into it if present
      let dyn = document.getElementById('dynamic-content');
      if(!dyn){
        dyn = document.createElement('div');
        dyn.id = 'dynamic-content';
        // if body has children, move them into dyn (except header)
        const kids = Array.from(document.body.children).filter(n => n !== header);
        kids.forEach(n => {
          if(n.tagName.toLowerCase() === 'script' || n.classList.contains('bila-header')) return;
          frame.appendChild(n);
        });
        frame.appendChild(dyn);
        document.body.innerHTML=''; // clear to re‑mount
        document.body.appendChild(header);
        document.body.appendChild(frame);
      }else{
        // Mount header/frame while keeping existing dynamic content
        const existing = dyn.parentElement;
        if(!existing.classList.contains('bila-frame')){
          existing.parentElement.insertBefore(header, existing);
          existing.classList.add('bila-frame');
        }else{
          existing.parentElement.insertBefore(header, existing);
        }
      }
    }
  } catch(e){
    console.warn('Catalog init error', e);
  }
})();
