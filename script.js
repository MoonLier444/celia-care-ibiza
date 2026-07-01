/* ═══════════════════════════════════════════════════════════
   CELIA CARE IBIZA · Premium Wellness Script
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── i18n TRANSLATIONS ───────────────────────────────────── */
const translations = {
  en: {
    'nav.about':        'About',
    'nav.treatments':   'Treatments',
    'nav.team':         'Team',
    'nav.reviews':      'Reviews',
    'nav.contact':      'Contact',
    'cta.book':         'Book Now',
    'cta.treatments':   'Our Treatments',
    'cta.bookTreatment':'Book This Treatment',
    'cta.final.label':  'The Invitation',
    'cta.final.title':  'Ready for your<br><em>moment?</em>',
    'cta.final.body':   'Book your treatment at Celia Care Ibiza. Available on Fresha — quick, easy, confirmed instantly.',
    'cta.final.btn':    'Book on Fresha',
    'badge.recommend':  '100% recommended',
    'hero.eyebrow':     'Sant Antoni de Portmany · Ibiza',
    'hero.title':       'Your moment of<br><em>calm in Ibiza</em>',
    'hero.subtitle':    'Massages, facial rituals and physiotherapy<br>in the heart of Sant Antoni. Book in minutes.',
    'about.label':      'Our Story',
    'about.title':      'A wellness<br>sanctuary in<br><em>Sant Antoni</em>',
    'about.body':       'At Celia Care Ibiza we believe wellness is a ritual. Our specialists combine massage techniques, facial rituals and physiotherapy to restore the balance that Ibiza sometimes takes away.',
    'about.body2':      'Every session is crafted around you — your needs, your rhythm, your recovery. We hold space for genuine transformation in the middle of the island\'s beautiful energy.',
    'about.cta':        'Explore Treatments',
    'stat.rating':      'Fresha Rating',
    'stat.reviews':     '5-star Reviews',
    'stat.location':    'Heart of Ibiza',
    'stat.therapist':   'Lead Therapist',
    'stat.booking':     'to Book',
    'treatments.label': 'What We Offer',
    'treatments.title': 'Our Treatments',
    'treatments.intro': 'Each session is a carefully designed ritual — a pause between the pulse of Ibiza and your inner stillness.',
    't1.label':         'Body · Relax',
    't1.title':         'Therapeutic Massage',
    't1.desc':          'Relieve deep muscle tension and recover your vital energy. Our therapeutic massage uses professional techniques to release the accumulated stress of Ibiza\'s vibrant rhythm.',
    't1.p1':            '20 min',
    't1.p2':            '30 min',
    't2.label':         'Face · Glow',
    't2.title':         'Facial Glow Ritual',
    't2.desc':          'A luminosity ritual designed for your skin\'s unique needs. We combine deep cleansing, hydration and sculpting techniques to reveal a radiant, renewed complexion touched by the Mediterranean sun.',
    't2.p1':            '60 min',
    't2.p2':            '90 min',
    't3.label':         'Recovery · Expert',
    't3.title':         'Physiotherapy & Osteopathy',
    't3.desc':          'Professional recovery in expert hands. Our physiotherapy and osteopathy sessions address chronic pain, postural imbalances and sports recovery — helping you move freely again.',
    't3.p1':            '60 min',
    't4.label':         'Mind · Spirit',
    't4.title':         'Holistic Wellness',
    't4.desc':          'Align your chakras and reconnect with your body\'s natural wisdom. Our holistic wellness sessions integrate breathwork, energy healing and mindful touch to guide you toward profound inner balance.',
    't4.price':         'Personalised · Enquire',
    'team.label':       'The People',
    'team.title':       'Meet Your Therapists',
    'team.intro':       'Behind every session is a professional who genuinely cares about your wellbeing. We bring expertise, warmth and intention to every touch.',
    'team.andry.role':  'Lead Massage Therapist',
    'team.andry.bio':   'Professionalism and dedication in every single session. Andry brings years of therapeutic expertise and a genuine passion for holistic healing — his hands-on approach has earned him a flawless 5-star reputation across all treatments.',
    'team.collective.name': 'Celia Care Team',
    'team.collective.role': 'Wellness Specialists',
    'team.collective.bio':  'Our collective of wellness specialists brings diverse techniques and a shared commitment to your transformation. From facials to physiotherapy, every member of our team is selected for their expertise and their empathy.',
    'tag.massage':      'Massage',
    'tag.facial':       'Facial',
    'tag.physio':       'Physiotherapy',
    'tag.holistic':     'Holistic',
    'reviews.label':    'What Our Clients Say',
    'reviews.title':    'Real Experiences',
    'reviews.count':    '17 reviews on Fresha',
    'review.via':       'via Fresha',
    'review1.text':     '"One of the best massages I\'ve had in a while! The whole booking process was super easy and well organized."',
    'review2.text':     '"Amazing experience. Lovely team. Massage was excellent and felt relaxed, chakras aligned and all my aches were relieved."',
    'review3.text':     '"Lovely place, definitely recommend. A true hidden gem in the heart of Sant Antoni — exactly what I needed after a long week."',
    'review4.text':     '"Thoroughly enjoyed my massage and facial. The atmosphere was calm and peaceful, and the therapist was incredibly professional."',
    'hours.label':      'When to Visit',
    'hours.title':      'Opening Hours',
    'hours.note':       'Advance booking recommended to ensure availability.',
    'hours.open':       'Open now · Book your treatment today',
    'hours.closed':     'Currently closed · Book your next session',
    'hours.deco':       'Find your moment<br>of stillness',
    'contact.label':    'Find Us',
    'contact.title':    'Come & Find Us',
    'contact.bookingNote': 'Bookings are handled through our Fresha profile — the easiest way to secure your session.',
    'contact.hours.title':    'Opening Hours',
    'contact.hours.weekdays': '<strong>Monday – Saturday:</strong> 09:00 – 19:00',
    'contact.hours.sunday':   '<strong>Sunday:</strong> Closed',
    'footer.tagline':   'Wellness · Massage · Physiotherapy<br>Sant Antoni de Portmany · Ibiza',
    'footer.cta':       'Book on Fresha',
    'footer.copy':      '© 2025 Celia Care Ibiza · All rights reserved',
    'days.monday':    'Monday',
    'days.tuesday':   'Tuesday',
    'days.wednesday': 'Wednesday',
    'days.thursday':  'Thursday',
    'days.friday':    'Friday',
    'days.saturday':  'Saturday',
    'days.sunday':    'Sunday',
    'hours.today':    'Today',
    'hours.closed.day': 'Closed',
  },
  es: {
    'nav.about':        'Sobre Nosotros',
    'nav.treatments':   'Tratamientos',
    'nav.team':         'Equipo',
    'nav.reviews':      'Reseñas',
    'nav.contact':      'Contacto',
    'cta.book':         'Reservar Cita',
    'cta.treatments':   'Ver Tratamientos',
    'cta.bookTreatment':'Reservar Tratamiento',
    'cta.final.label':  'La Invitación',
    'cta.final.title':  '¿Listo para tu<br><em>momento?</em>',
    'cta.final.body':   'Reserva tu tratamiento en Celia Care Ibiza. Disponible en Fresha.',
    'cta.final.btn':    'Reservar en Fresha',
    'badge.recommend':  '100% recomendado',
    'hero.eyebrow':     'Sant Antoni de Portmany · Ibiza',
    'hero.title':       'Tu momento de<br><em>calma en Ibiza</em>',
    'hero.subtitle':    'Masajes, rituales faciales y fisioterapia<br>en el corazón de Sant Antoni. Reserva en minutos.',
    'about.label':      'Nuestra Historia',
    'about.title':      'Un refugio de<br>bienestar en<br><em>Sant Antoni</em>',
    'about.body':       'En Celia Care Ibiza creemos que el bienestar es un ritual. Nuestro equipo de especialistas combina técnicas de masaje, rituales faciales y fisioterapia para devolverte el equilibrio que Ibiza a veces se lleva.',
    'about.body2':      'Cada sesión está diseñada en torno a ti — tus necesidades, tu ritmo, tu recuperación. Creamos un espacio para una transformación genuina en medio de la hermosa energía de la isla.',
    'about.cta':        'Explorar Tratamientos',
    'stat.rating':      'Valoración Fresha',
    'stat.reviews':     'Reseñas de 5 estrellas',
    'stat.location':    'Corazón de Ibiza',
    'stat.therapist':   'Terapeuta Principal',
    'stat.booking':     'para Reservar',
    'treatments.label': 'Lo Que Ofrecemos',
    'treatments.title': 'Nuestros Tratamientos',
    'treatments.intro': 'Cada sesión es un ritual cuidadosamente diseñado — una pausa entre el pulso de Ibiza y tu silencio interior.',
    't1.label':         'Cuerpo · Relax',
    't1.title':         'Masaje Terapéutico',
    't1.desc':          'Relaja tensiones musculares profundas y recupera tu energía vital. Nuestro masaje terapéutico utiliza técnicas profesionales para liberar el estrés acumulado del ritmo vibrante de Ibiza.',
    't1.p1':            '20 min',
    't1.p2':            '30 min',
    't2.label':         'Rostro · Luminosidad',
    't2.title':         'Ritual Facial Glow',
    't2.desc':          'Un ritual de luminosidad diseñado para las necesidades únicas de tu piel. Combinamos limpieza profunda, hidratación y técnicas esculturales para revelar un cutis radiante y renovado bañado por el sol mediterráneo.',
    't2.p1':            '60 min',
    't2.p2':            '90 min',
    't3.label':         'Recuperación · Experto',
    't3.title':         'Fisioterapia y Osteopatía',
    't3.desc':          'Recuperación profesional en manos expertas. Nuestras sesiones de fisioterapia y osteopatía abordan el dolor crónico, los desequilibrios posturales y la recuperación deportiva — ayudándote a moverte libremente de nuevo.',
    't3.p1':            '60 min',
    't4.label':         'Mente · Espíritu',
    't4.title':         'Bienestar Holístico',
    't4.desc':          'Alinea tus chakras y reconéctate con la sabiduría natural de tu cuerpo. Nuestras sesiones de bienestar holístico integran trabajo respiratorio, curación energética y tacto consciente para guiarte hacia un equilibrio interior profundo.',
    't4.price':         'Personalizado · Consultar',
    'team.label':       'Las Personas',
    'team.title':       'Conoce a Tus Terapeutas',
    'team.intro':       'Detrás de cada sesión hay un profesional que genuinamente se preocupa por tu bienestar. Aportamos experiencia, calidez e intención a cada contacto.',
    'team.andry.role':  'Masajista Especialista',
    'team.andry.bio':   'Profesionalidad y dedicación en cada sesión. Andry aporta años de experiencia terapéutica y una verdadera pasión por la curación holística — su enfoque práctico le ha valido una reputación impecable de 5 estrellas en todos los tratamientos.',
    'team.collective.name': 'Equipo Celia Care',
    'team.collective.role': 'Especialistas en Bienestar',
    'team.collective.bio':  'Nuestro colectivo de especialistas en bienestar aporta diversas técnicas y un compromiso compartido con tu transformación. Desde faciales hasta fisioterapia, cada miembro de nuestro equipo es seleccionado por su experiencia y su empatía.',
    'tag.massage':      'Masaje',
    'tag.facial':       'Facial',
    'tag.physio':       'Fisioterapia',
    'tag.holistic':     'Holístico',
    'reviews.label':    'Lo Que Dicen Nuestros Clientes',
    'reviews.title':    'Experiencias Reales',
    'reviews.count':    '17 reseñas en Fresha',
    'review.via':       'vía Fresha',
    'review1.text':     '"¡Uno de los mejores masajes que he tenido en mucho tiempo! Todo el proceso de reserva fue súper fácil y bien organizado."',
    'review2.text':     '"Experiencia increíble. Equipo encantador. El masaje fue excelente, me sentí relajado, con los chakras alineados y todos mis dolores aliviados."',
    'review3.text':     '"Lugar encantador, sin duda lo recomiendo. Una verdadera joya escondida en el corazón de Sant Antoni — exactamente lo que necesitaba después de una larga semana."',
    'review4.text':     '"Disfruté mucho de mi masaje y facial. El ambiente era tranquilo y apacible, y el terapeuta fue increíblemente profesional."',
    'hours.label':      'Cuándo Visitarnos',
    'hours.title':      'Horario de Apertura',
    'hours.note':       'Reserva anticipada recomendada para garantizar disponibilidad.',
    'hours.open':       'Abierto ahora · Reserva tu tratamiento hoy',
    'hours.closed':     'Actualmente cerrado · Reserva tu próxima sesión',
    'hours.deco':       'Encuentra tu momento<br>de quietud',
    'contact.label':    'Encuéntranos',
    'contact.title':    'Ven a Encontrarnos',
    'contact.bookingNote': 'Las reservas se gestionan a través de nuestro perfil de Fresha — la forma más sencilla de asegurar tu sesión.',
    'contact.hours.title':    'Horario',
    'contact.hours.weekdays': '<strong>Lunes – Sábado:</strong> 09:00 – 19:00',
    'contact.hours.sunday':   '<strong>Domingo:</strong> Cerrado',
    'footer.tagline':   'Bienestar · Masaje · Fisioterapia<br>Sant Antoni de Portmany · Ibiza',
    'footer.cta':       'Reservar en Fresha',
    'footer.copy':      '© 2025 Celia Care Ibiza · Todos los derechos reservados',
    'days.monday':    'Lunes',
    'days.tuesday':   'Martes',
    'days.wednesday': 'Miércoles',
    'days.thursday':  'Jueves',
    'days.friday':    'Viernes',
    'days.saturday':  'Sábado',
    'days.sunday':    'Domingo',
    'hours.today':    'Hoy',
    'hours.closed.day': 'Cerrado',
  },
};

/* ── STATE ───────────────────────────────────────────────── */
let currentLang = 'en';

/* ── UTILITY ─────────────────────────────────────────────── */
function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ||
         (translations.en[key]) || key;
}

/* ══════════════════════════════════════════════════════════
   STICKY HEADER
══════════════════════════════════════════════════════════ */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ══════════════════════════════════════════════════════════
   MOBILE NAV
══════════════════════════════════════════════════════════ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileNav.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (mobileNav.classList.contains('open') &&
        !mobileNav.contains(e.target) &&
        !hamburger.contains(e.target)) {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* ══════════════════════════════════════════════════════════
   PARALLAX HERO
══════════════════════════════════════════════════════════ */
function initParallax() {
  // Parallax eliminado: la imagen está como background-image CSS de .hero,
  // lo que es nativo del navegador y no causa problemas de scroll en móvil.
  // En escritorio podría añadirse background-attachment:fixed, pero afecta rendimiento.
}

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const titleLines = document.querySelectorAll('.title-line');

  // rootMargin positivo: dispara 120px ANTES de que el elemento entre en pantalla
  // así el contenido ya está visible cuando el usuario llega a la sección
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.01,
    rootMargin: '0px 0px 120px 0px',
  });

  const lineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        lineObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px 80px 0px',
  });

  revealEls.forEach(el => observer.observe(el));
  titleLines.forEach(el => lineObserver.observe(el));
}

/* ══════════════════════════════════════════════════════════
   TESTIMONIALS CAROUSEL
══════════════════════════════════════════════════════════ */
function initCarousel() {
  const carousel  = document.getElementById('carousel');
  const dotsWrap  = document.getElementById('carouselDots');
  const prevBtn   = document.getElementById('carouselPrev');
  const nextBtn   = document.getElementById('carouselNext');
  if (!carousel) return;

  const cards = Array.from(carousel.querySelectorAll('.review-card'));
  const total = cards.length;
  let current = 0;
  let autoTimer;
  let touchStartX = 0;

  // Create dots
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Review ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function goTo(index) {
    current = (index + total) % total;

    // Centre-align the active card
    const card = cards[current];
    const wrapWidth = carousel.parentElement.offsetWidth;
    const cardWidth = card.offsetWidth;
    const cardLeft  = card.offsetLeft;
    const offset = cardLeft - (wrapWidth - cardWidth) / 2;
    carousel.style.transform = `translateX(${-offset}px)`;

    // Update dots
    const dots = dotsWrap.querySelectorAll('.carousel-dot');
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
      d.setAttribute('aria-selected', String(i === current));
    });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    autoTimer = setInterval(next, 5000);
  }
  function stopAuto() {
    clearInterval(autoTimer);
  }

  prevBtn.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
  nextBtn.addEventListener('click', () => { stopAuto(); next(); startAuto(); });

  // Touch/swipe
  carousel.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    stopAuto();
  }, { passive: true });

  carousel.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    startAuto();
  }, { passive: true });

  // Keyboard
  carousel.parentElement.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { stopAuto(); prev(); startAuto(); }
    if (e.key === 'ArrowRight') { stopAuto(); next(); startAuto(); }
  });

  // Pause on hover
  carousel.parentElement.addEventListener('mouseenter', stopAuto);
  carousel.parentElement.addEventListener('mouseleave', startAuto);

  // Init
  goTo(0);
  startAuto();

  // Recalculate on resize
  window.addEventListener('resize', () => goTo(current), { passive: true });
}

/* ══════════════════════════════════════════════════════════
   BUSINESS HOURS & STATUS
══════════════════════════════════════════════════════════ */
const SCHEDULE = {
  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  0: null,              // Closed
  1: [9, 19],
  2: [9, 19],
  3: [9, 19],
  4: [9, 19],
  5: [9, 19],
  6: [9, 19],
};

const DAY_KEYS = [
  'days.sunday',
  'days.monday',
  'days.tuesday',
  'days.wednesday',
  'days.thursday',
  'days.friday',
  'days.saturday',
];

function getIbizaTime() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Madrid' }));
}

function isBusinessOpen() {
  const now = getIbizaTime();
  const day  = now.getDay();
  const hours = SCHEDULE[day];
  if (!hours) return false;
  const [open, close] = hours;
  const current = now.getHours() + now.getMinutes() / 60;
  return current >= open && current < close;
}

function buildHoursTable() {
  const tbody = document.getElementById('hoursTable');
  if (!tbody) return;

  const today = getIbizaTime().getDay();

  // Build rows Sunday through Saturday but display Monday first
  const orderedDays = [1, 2, 3, 4, 5, 6, 0];

  tbody.innerHTML = '';
  orderedDays.forEach(dayIndex => {
    const tr = document.createElement('tr');
    const hours = SCHEDULE[dayIndex];
    const isToday = dayIndex === today;
    const isClosed = !hours;

    if (isToday)  tr.classList.add('today-row');
    if (isClosed) tr.classList.add('closed-day');

    const tdDay = document.createElement('td');
    tdDay.innerHTML = `${t(DAY_KEYS[dayIndex])}${isToday ? ` <span class="today-badge">${t('hours.today')}</span>` : ''}`;

    const tdTime = document.createElement('td');
    if (isClosed) {
      tdTime.textContent = t('hours.closed.day');
    } else {
      tdTime.textContent = `${String(hours[0]).padStart(2,'0')}:00 – ${String(hours[1]).padStart(2,'0')}:00`;
    }

    tr.appendChild(tdDay);
    tr.appendChild(tdTime);
    tbody.appendChild(tr);
  });
}

function updateStatus() {
  const open = isBusinessOpen();

  // Header status
  const dot  = document.getElementById('statusDot');
  const text = document.getElementById('statusText');
  if (dot && text) {
    dot.className  = `status-dot ${open ? 'open' : 'closed'}`;
    text.textContent = open ? t('hours.open') : t('hours.closed');
  }

  // Hours section status
  const hDot  = document.getElementById('hoursStatusDot');
  const hText = document.getElementById('hoursStatusText');
  if (hDot && hText) {
    hDot.className  = `hours-status-dot ${open ? 'open' : 'closed'}`;
    hText.textContent = open ? t('hours.open') : t('hours.closed');
  }
}

function initHours() {
  buildHoursTable();
  updateStatus();
  // Refresh every minute
  setInterval(() => {
    updateStatus();
  }, 60000);
}

/* ══════════════════════════════════════════════════════════
   LANGUAGE TOGGLE
══════════════════════════════════════════════════════════ */
function applyTranslations(lang) {
  currentLang = lang;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.innerHTML = val;
  });

  // Update lang toggle UI
  const langEs = document.getElementById('langEs');
  const langEn = document.getElementById('langEn');
  if (langEs && langEn) {
    langEs.classList.toggle('active', lang === 'es');
    langEn.classList.toggle('active', lang === 'en');
  }

  // Update html lang attribute
  document.documentElement.lang = lang === 'es' ? 'es' : 'en';

  // Rebuild hours table in new language
  buildHoursTable();
  updateStatus();
}

function initLangToggle() {
  const toggle = document.getElementById('langToggle');
  const langEs = document.getElementById('langEs');
  const langEn = document.getElementById('langEn');
  if (!toggle) return;

  function setLang(lang) {
    applyTranslations(lang);
    try { localStorage.setItem('ccia-lang', lang); } catch(e) {}
  }

  toggle.addEventListener('click', (e) => {
    // Detect which side was clicked
    if (e.target === langEs || e.target.closest('#langEs')) {
      setLang('es');
    } else {
      setLang('en');
    }
  });

  // Restore saved preference
  let saved;
  try { saved = localStorage.getItem('ccia-lang'); } catch(e) {}

  // Default to English or saved preference
  applyTranslations(saved || 'en');
}

/* ══════════════════════════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ══════════════════════════════════════════════════════════
   SMOOTH ANCHOR SCROLL
══════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const headerH = document.getElementById('site-header')?.offsetHeight || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ══════════════════════════════════════════════════════════
   HERO CONTENT STAGGER (initial load)
   La animación principal la hace CSS. JS sólo marca .visible
   para que el IntersectionObserver no la vuelva a animar.
══════════════════════════════════════════════════════════ */
function initHeroReveal() {
  const heroEls = document.querySelectorAll('.hero .reveal');
  heroEls.forEach(el => {
    // Marcar como visible inmediatamente — la animación ya la gestiona CSS
    el.classList.add('visible');
  });
}

/* ══════════════════════════════════════════════════════════
   IMAGE HOVER – ensure CSS handles it (JS enhancement for old browsers)
══════════════════════════════════════════════════════════ */
function initImageHovers() {
  document.querySelectorAll('.treatment-img-wrap img').forEach(img => {
    const wrap = img.closest('.treatment-image');
    if (!wrap) return;
    wrap.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.04)';
    });
    wrap.addEventListener('mouseleave', () => {
      img.style.transform = '';
    });
  });
}

/* ══════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initParallax();
  initScrollReveal();
  initCarousel();
  initHours();
  initLangToggle();
  initBackToTop();
  initSmoothScroll();
  initHeroReveal();
  initImageHovers();
});
