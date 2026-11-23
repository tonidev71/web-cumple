  // CONFETTI
  const confettiEl = document.getElementById('confetti');
  const colors = ['#C9A84C','#F0D080','#F5EDD8','#9E8E6A','#ffffff'];
  for (let i = 0; i < 60; i++) {
    const s = document.createElement('span');
    s.style.left = Math.random() * 100 + '%';
    s.style.background = colors[Math.floor(Math.random() * colors.length)];
    s.style.width = (Math.random() * 6 + 4) + 'px';
    s.style.height = (Math.random() * 6 + 4) + 'px';
    s.style.animationDuration = (Math.random() * 6 + 5) + 's';
    s.style.animationDelay = (Math.random() * 8) + 's';
    s.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    confettiEl.appendChild(s);
  }

  // SCROLL REVEAL
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // CUENTA ATRÁS — cambia esta fecha por la real
  const PARTY_DATE = new Date('2025-08-15T18:00:00');

  function updateCountdown() {
    const diff = PARTY_DATE - new Date();
    if (diff <= 0) {
      ['cd-days','cd-hours','cd-mins','cd-secs'].forEach(id => document.getElementById(id).textContent = '00');
      return;
    }
    document.getElementById('cd-days').textContent  = String(Math.floor(diff / 86400000)).padStart(2,'0');
    document.getElementById('cd-hours').textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
    document.getElementById('cd-mins').textContent  = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
    document.getElementById('cd-secs').textContent  = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000)