// Tiny, dependency-free progressive enhancement. The site is fully readable without it.
const $ = <T extends HTMLElement = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends HTMLElement = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const saveData = (navigator as any).connection?.saveData === true;
const rtl = document.documentElement.dir === 'rtl';
const root = document.documentElement;

/* header shadow */
const header = $('.header');
const onScroll = () => header?.classList.toggle('stuck', scrollY > 12);
requestAnimationFrame(onScroll);
addEventListener('scroll', onScroll, { passive: true });

/* theme */
$('[data-theme-toggle]')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch {}
});

/* mobile menu */
const sheet = $('#sheet');
const menuBtn = $('[data-menu-open]');
const setMenu = (open: boolean) => {
  sheet?.classList.toggle('open', open);
  menuBtn?.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) $('[data-menu-close]')?.focus();
};
menuBtn?.addEventListener('click', () => setMenu(true));
$('[data-menu-close]')?.addEventListener('click', () => setMenu(false));
sheet?.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) setMenu(false); });
addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

/* reveal on scroll */
const rv = $$('.rv');
if (rv.length) {
  if (reduce || !('IntersectionObserver' in window)) rv.forEach((e) => e.classList.add('in'));
  else {
    const io = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rv.forEach((e) => io.observe(e));
  }
}

/* Beirut clock */
const clocks = $$('[data-clock]');
if (clocks.length) {
  const tz = document.body.dataset.tz || 'Asia/Beirut';
  const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: tz });
  const tick = () => clocks.forEach((c) => (c.textContent = fmt.format(new Date())));
  tick();
  setInterval(tick, 20000);
}

/* pointer effects (desktop only): soft light, hero parallax, cursor label */
if (fine && !reduce) {
  const glow = $('#glow');
  const cur = $('#cur');
  let gx = 0, gy = 0, ticking = false;
  addEventListener('pointermove', (e) => {
    gx = e.clientX; gy = e.clientY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        if (glow) { glow.style.transform = `translate3d(${gx}px,${gy}px,0)`; glow.classList.add('on'); }
        if (cur) cur.style.transform = `translate3d(${gx}px,${gy}px,0)`;
        ticking = false;
      });
    }
  }, { passive: true });
  $$('[data-cursor]').forEach((el) => {
    el.addEventListener('pointerenter', () => { if (cur) { cur.textContent = el.dataset.cursor || ''; cur.classList.add('on'); } });
    el.addEventListener('pointerleave', () => cur?.classList.remove('on'));
  });
  const collage = $('.collage');
  if (collage) {
    const hero = collage.closest('.hero') as HTMLElement;
    hero?.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      collage.style.setProperty('--mx', String(((e.clientX - r.left) / r.width - 0.5) * 2));
      collage.style.setProperty('--my', String(((e.clientY - r.top) / r.height - 0.5) * 2));
    }, { passive: true });
    hero?.addEventListener('pointerleave', () => { collage.style.setProperty('--mx', '0'); collage.style.setProperty('--my', '0'); });
  }
}

/* drag-to-scroll strips */
$$('.strip').forEach((s) => {
  let down = false, sx = 0, sl = 0, moved = false;
  s.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    down = true; moved = false; sx = e.clientX; sl = s.scrollLeft;
  });
  addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - sx;
    if (Math.abs(dx) > 5) { moved = true; s.classList.add('drag'); }
    if (moved) s.scrollLeft = sl - dx;
  });
  addEventListener('pointerup', () => { down = false; setTimeout(() => s.classList.remove('drag'), 0); });
  s.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
});

/* portfolio filters */
const filterBtns = $$<HTMLButtonElement>('[data-filter]');
if (filterBtns.length) {
  const items = $$('.mi[data-cat]');
  const apply = (f: string) => {
    items.forEach((i) => { i.hidden = !(f === 'all' || i.dataset.cat === f); });
    filterBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === f)));
    try { history.replaceState(null, '', f === 'all' ? location.pathname : `#${f}`); } catch {}
    startVideos();
  };
  filterBtns.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter || 'all')));
  const h = location.hash.slice(1);
  if (h && filterBtns.some((b) => b.dataset.filter === h)) apply(h);
}

/* lazy, muted, looping preview videos — only when visible; never on data-saver */
const vio = 'IntersectionObserver' in window && !reduce && !saveData
  ? new IntersectionObserver((es) => es.forEach((x) => {
      const host = x.target as HTMLElement;
      let v = host.querySelector<HTMLVideoElement>('video.v');
      if (x.isIntersecting) {
        if (!v && host.dataset.video) {
          v = document.createElement('video');
          v.className = 'v';
          v.src = host.dataset.video;
          v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'auto'; v.setAttribute('aria-hidden', 'true');
          v.addEventListener('playing', () => v!.classList.add('on'), { once: true });
          host.querySelector('picture')?.after(v);
        }
        v?.play().catch(() => {});
      } else v?.pause();
    }), { threshold: 0.45 })
  : null;
function startVideos() {
  if (!vio) return;
  $$('[data-video]').forEach((h) => { if (!h.closest('[hidden]')) vio.observe(h); else vio.unobserve(h); });
}
startVideos();
$$('.snd').forEach((b) => b.addEventListener('click', () => {
  const host = b.closest('[data-video]') as HTMLElement;
  const v = host?.querySelector<HTMLVideoElement>('video.v');
  if (!v) return;
  v.muted = !v.muted;
  b.setAttribute('aria-pressed', String(!v.muted));
  if (!v.muted) v.play().catch(() => {});
}));

/* lightbox */
const lb = $<HTMLDialogElement>('#lb');
if (lb && typeof lb.showModal === 'function') {
  const stage = $('.lb-stage', lb)!;
  const capB = $('.lb-cap b', lb)!;
  const capS = $('.lb-cap span', lb)!;
  let list: HTMLElement[] = [];
  let k = 0;
  const show = (n: number) => {
    k = (n + list.length) % list.length;
    const it = list[k];
    stage.replaceChildren();
    if (it.dataset.lbVideo) {
      const v = document.createElement('video');
      v.src = it.dataset.lbVideo; v.controls = true; v.autoplay = true; v.playsInline = true; v.loop = true;
      stage.append(v);
    } else {
      const im = new Image();
      im.src = it.dataset.lbSrc || '';
      im.alt = it.dataset.lbTitle || '';
      stage.append(im);
    }
    capB.textContent = it.dataset.lbTitle || '';
    capS.textContent = it.dataset.lbSub || '';
  };
  const open = (el: HTMLElement) => {
    const scope = el.closest('[data-lbg]') || document;
    list = $$('[data-lb]', scope as ParentNode).filter((x) => !x.closest('[hidden]'));
    show(list.indexOf(el));
    lb.showModal();
  };
  const close = () => { stage.replaceChildren(); lb.close(); };
  document.addEventListener('click', (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('[data-lb]');
    if (t) { e.preventDefault(); open(t); }
  });
  $('[data-lb-close]', lb)?.addEventListener('click', close);
  $('[data-lb-prev]', lb)?.addEventListener('click', () => show(k - 1));
  $('[data-lb-next]', lb)?.addEventListener('click', () => show(k + 1));
  lb.addEventListener('click', (e) => { const t = e.target as HTMLElement; if (t === lb || t.classList.contains('lb-in') || t.classList.contains('lb-stage')) close(); });
  lb.addEventListener('close', () => stage.replaceChildren());
  lb.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(rtl ? k + 1 : k - 1);
    if (e.key === 'ArrowRight') show(rtl ? k - 1 : k + 1);
  });
  let sx = 0;
  lb.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 60) show(dx < 0 ? k + 1 : k - 1);
  });
}

/* contact form: Web3Forms when a key is configured, otherwise the visitor's email app */
const form = $<HTMLFormElement>('form[data-form]');
if (form) {
  const msg = $('.form-msg', form)!;
  const btn = $<HTMLButtonElement>('button[type=submit]', form)!;
  const label = btn.textContent;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    if (fd.get('botcheck')) return;
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const message = String(fd.get('message') || '').trim();
    msg.className = 'form-msg';
    if (!name || !email || !message || !form.checkValidity()) { msg.textContent = form.dataset.required || ''; msg.classList.add('err'); form.reportValidity(); return; }
    const lines = [
      `Name: ${name}`, `Email: ${email}`, `Phone: ${fd.get('phone') || '-'}`,
      `Need: ${fd.get('type') || '-'}`, `Budget: ${fd.get('budget') || '-'}`, '', message,
    ];
    const key = form.dataset.key;
    if (key) {
      btn.disabled = true; btn.textContent = form.dataset.sending || '…';
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ access_key: key, subject: `New project enquiry from ${name}`, from_name: name, name, email, phone: fd.get('phone'), need: fd.get('type'), budget: fd.get('budget'), message, botcheck: '' }),
        });
        const data = await res.json();
        if (!data.success) throw new Error('failed');
        msg.textContent = form.dataset.ok || ''; msg.classList.add('ok'); form.reset();
      } catch {
        msg.textContent = form.dataset.fail || ''; msg.classList.add('err');
      } finally { btn.disabled = false; btn.textContent = label; }
    } else {
      msg.textContent = form.dataset.mail || ''; msg.classList.add('ok');
      location.href = `mailto:${form.dataset.to}?subject=${encodeURIComponent(`Project enquiry from ${name}`)}&body=${encodeURIComponent(lines.join('\n'))}`;
    }
  });
}
