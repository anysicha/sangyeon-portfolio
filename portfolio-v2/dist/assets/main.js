(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const story = document.querySelector('.focus-story');
  const parallax = document.querySelector('[data-parallax]');
  const screens = [...document.querySelectorAll('[data-screen]')];
  const chapters = [...document.querySelectorAll('[data-chapter]')];
  const steps = [...document.querySelectorAll('[data-step]')];
  let chapter = -1, scheduled = false;
  const clamp = (n, low, high) => Math.min(high, Math.max(low, n));
  function setChapter(index) {
    if (index === chapter) return;
    chapter = index;
    screens.forEach((el,i) => { el.classList.toggle('is-current', i === index); el.setAttribute('aria-hidden', String(i !== index)); });
    chapters.forEach((el,i) => { el.classList.toggle('is-current', i === index); el.setAttribute('aria-hidden', String(!reduced.matches && i !== index)); });
    steps.forEach((el,i) => { el.classList.toggle('is-active', i === index); el.setAttribute('aria-pressed', String(i === index)); });
  }
  function update() {
    scheduled = false;
    const y = window.scrollY, height = window.innerHeight;
    header?.classList.toggle('scrolled', y > 20);
    const max = document.documentElement.scrollHeight - height;
    header?.style.setProperty('--progress', String(max > 0 ? y / max : 0));
    if (reduced.matches) return;
    if (hero && y < height * 1.4) hero.style.setProperty('--hero-y', `${clamp(y * .13, 0, 95)}px`);
    if (parallax) {
      const rect = parallax.getBoundingClientRect();
      if (rect.top < height && rect.bottom > 0) parallax.style.setProperty('--parallax', `${clamp((height / 2 - rect.top - rect.height / 2) * .1, -45, 45)}px`);
    }
    if (story) {
      const rect = story.getBoundingClientRect();
      const progress = clamp(-rect.top / (story.offsetHeight - height), 0, 1);
      setChapter(Math.min(2, Math.floor(progress * 3)));
      story.style.setProperty('--focus-y', `${Math.sin(progress * Math.PI * 2) * 9}px`);
    }
  }
  function requestUpdate() { if (!scheduled) { scheduled = true; window.requestAnimationFrame(update); } }
  if ('IntersectionObserver' in window && !reduced.matches) {
    document.documentElement.classList.add('js-motion');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .08, rootMargin: '0px 0px -25px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
  steps.forEach(btn => btn.addEventListener('click', () => {
    const index = Number(btn.dataset.step);
    if (reduced.matches) { setChapter(index); return; }
    const start = story.getBoundingClientRect().top + window.scrollY;
    const distance = story.offsetHeight - window.innerHeight;
    window.scrollTo({ top: start + distance * ((index + .25) / 3), behavior: 'smooth' });
  }));
  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(el => { el.classList.toggle('is-active', el === btn); el.setAttribute('aria-pressed', String(el === btn)); });
    let count = 0;
    document.querySelectorAll('[data-category]').forEach(card => {
      const show = btn.dataset.filter === 'all' || card.dataset.category === btn.dataset.filter;
      card.hidden = !show;
      if (show) { count++; card.classList.add('is-visible'); }
    });
    const status = document.querySelector('.filter-status');
    if (status) status.textContent = `${btn.textContent} 프로젝트 ${count}개`;
  }));
  const copy = document.querySelector('#copy-email');
  copy?.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText('anysicha@naver.com');
      copy.textContent = '복사했어요';
      status.textContent = '이메일 주소가 복사되었습니다.';
      window.setTimeout(() => { copy.textContent = '이메일 주소 복사'; status.textContent = ''; }, 3000);
    } catch { status.textContent = '주소를 길게 눌러 복사해 주세요: anysicha@naver.com'; }
  });
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  reduced.addEventListener('change', () => { document.documentElement.classList.toggle('js-motion', !reduced.matches); chapter = -1; setChapter(0); update(); });
  setChapter(0); update();
})();
