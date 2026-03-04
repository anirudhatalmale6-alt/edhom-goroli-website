/* ============================================
   EDHOM.CAT — Language & Interactions
   ============================================ */

const translations = {
  es: {
    // Navbar
    navBrand: 'edhom',
    navBrandAccent: '.cat',

    // Homepage hero
    heroTitle: 'Descargas',
    heroTitleAccent: 'gratuitas',
    heroSubtitle: 'Aplicaciones y herramientas desarrolladas con cuidado, listas para descargar e instalar en tu dispositivo.',
    heroBadge: 'Código libre y gratuito',

    // Downloads section
    downloadsLabel: 'Aplicaciones',
    downloadsTitle: 'Descargas disponibles',
    goroliDesc: 'Únete a Goroli, nuestra sociedad de gente inquieta con ganas de conocer amigos nuevos y pasar buenos ratos.',
    goroliTag: 'Android',
    placeholderText: 'Más aplicaciones próximamente',

    // App page hero
    appTagline: 'Encuentra, conoce y haz nuevos amigos',
    appDesc: 'Únete a Goroli, nuestra sociedad de gente inquieta con ganas de conocer amigos nuevos y pasar buenos ratos. Elige en el mapa, filtra tus preferencias y selecciona con quien quieres pasar un buen rato. Descubre a gente que está cerca de ti y tiene tus mismas necesidades, siempre con total privacidad.',
    appDownload: 'Descargar APK',
    appDownloadSub: 'Android',

    // Features
    featuresLabel: 'Funcionalidades',
    featuresTitle: '¿Qué puedes hacer con Goroli?',
    feat1Title: 'Personas cercanas',
    feat1Desc: 'En el mapa verás a otros usuarios localizados de forma aproximada, siempre con la información personal semioculta.',
    feat2Title: 'Chat y amistad',
    feat2Desc: 'Solicita amistad para ver el perfil completo. Si la otra persona acepta, podréis chatear y ver la ubicación real.',
    feat3Title: 'Encuentros reales',
    feat3Desc: 'Si después de unos mensajes encajáis, os podéis ver al momento y dedicar un tiempo a interactuar en la vida real.',
    feat4Title: 'Privacidad total',
    feat4Desc: 'Nadie te verá ni en ubicación ni en datos al 100% si tú no lo aceptas como amigo. Total discreción garantizada.',

    // Screenshots
    screenshotsLabel: 'Capturas',
    screenshotsTitle: 'Así se ve Goroli',
    screenshotPlaceholder: 'Captura',

    // CTA
    ctaTitle: 'No esperes más y aprovecha tu momento',
    ctaDesc: 'Bienvenido a la comunidad Goroli. Descarga gratis y empieza a conectar.',

    // Footer
    footerCopy: '© 2025 edhom.cat — Todos los derechos reservados',
  },

  ca: {
    // Navbar
    navBrand: 'edhom',
    navBrandAccent: '.cat',

    // Homepage hero
    heroTitle: 'Descàrregues',
    heroTitleAccent: 'gratuïtes',
    heroSubtitle: 'Aplicacions i eines desenvolupades amb cura, llestes per descarregar i instal·lar al teu dispositiu.',
    heroBadge: 'Codi lliure i gratuït',

    // Downloads section
    downloadsLabel: 'Aplicacions',
    downloadsTitle: 'Descàrregues disponibles',
    goroliDesc: 'Uneix-te a Goroli, la nostra societat de gent inquieta amb ganes de conèixer amics nous i passar bons estones.',
    goroliTag: 'Android',
    placeholderText: 'Més aplicacions properament',

    // App page hero
    appTagline: 'Troba, coneix i fes nous amics',
    appDesc: 'Uneix-te a Goroli, la nostra societat de gent inquieta amb ganes de conèixer amics nous i passar bons estones. Tria al mapa, filtra les teves preferències i selecciona amb qui vols passar una bona estona. Descobreix gent que és a prop teu i té les teves mateixes necessitats, sempre amb total privacitat.',
    appDownload: 'Descarregar APK',
    appDownloadSub: 'Android',

    // Features
    featuresLabel: 'Funcionalitats',
    featuresTitle: 'Què pots fer amb Goroli?',
    feat1Title: 'Persones properes',
    feat1Desc: 'Al mapa veuràs altres usuaris localitzats de forma aproximada, sempre amb la informació personal semioculta.',
    feat2Title: 'Xat i amistat',
    feat2Desc: 'Sol·licita amistat per veure el perfil complet. Si l\'altra persona accepta, podreu xatejar i veure la ubicació real.',
    feat3Title: 'Trobades reals',
    feat3Desc: 'Si després d\'uns missatges encaixeu, us podeu veure al moment i dedicar un temps a interactuar a la vida real.',
    feat4Title: 'Privacitat total',
    feat4Desc: 'Ningú et veurà ni en ubicació ni en dades al 100% si tu no l\'acceptes com a amic. Total discreció garantida.',

    // Screenshots
    screenshotsLabel: 'Captures',
    screenshotsTitle: 'Així es veu Goroli',
    screenshotPlaceholder: 'Captura',

    // CTA
    ctaTitle: 'No esperis més i aprofita el teu moment',
    ctaDesc: 'Benvingut a la comunitat Goroli. Descarrega gratis i comença a connectar.',

    // Footer
    footerCopy: '© 2025 edhom.cat — Tots els drets reservats',
  }
};

// ---- Language Management ----
function getLang() {
  return localStorage.getItem('edhom-lang') || 'es';
}

function setLang(lang) {
  localStorage.setItem('edhom-lang', lang);
  applyTranslations(lang);
  updateLangButtons(lang);
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.documentElement.lang = lang === 'ca' ? 'ca' : 'es';
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ---- Navbar scroll ----
function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ---- Scroll animations ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.observe-animate').forEach(el => {
    observer.observe(el);
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  applyTranslations(lang);
  updateLangButtons(lang);
  initNavScroll();
  initScrollAnimations();

  // Language button clicks
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
