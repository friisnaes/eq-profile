/* Cookie consent — GDPR compliant minimal */
(function() {
  const KEY = 'eq_consent_v1';

  function get() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch(e) { return null; }
  }
  function set(val) {
    try { localStorage.setItem(KEY, JSON.stringify({ ...val, ts: Date.now() })); } catch(e) {}
  }
  function show() {
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.classList.add('show');
  }
  function hide() {
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.classList.remove('show');
  }
  function loadAnalytics() {
    // Plausible (privacy-friendly, no consent required for essential, but loaded after consent for completeness)
    if (document.querySelector('script[data-plausible]')) return;
    const s = document.createElement('script');
    s.defer = true;
    s.dataset.domain = 'friisnaes.com';
    s.dataset.plausible = '1';
    s.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(s);
  }

  window.cookieConsent = {
    show: show,
    accept: function() { set({ analytics: true, essential: true }); loadAnalytics(); hide(); },
    essentialOnly: function() { set({ analytics: false, essential: true }); hide(); },
    reset: function() { localStorage.removeItem(KEY); show(); }
  };

  document.addEventListener('DOMContentLoaded', function() {
    const c = get();
    if (!c) {
      setTimeout(show, 600);
    } else if (c.analytics) {
      loadAnalytics();
    }
  });
})();
