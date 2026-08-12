/* jozef.rocks — mode toggle only.
   Presentation-only: flips a class on <html>, persists the choice, nothing else.
   The class is applied pre-paint by the inline snippet in index.html; this file
   handles the button, the keyboard shortcuts, and storage. */
(function () {
  'use strict';

  var KEY = 'jozefrocks-mode';
  var root = document.documentElement;
  var btn = document.getElementById('mode-toggle');

  function isBold() {
    return root.classList.contains('bold');
  }

  function apply(mode) {
    if (mode === 'bold') {
      root.classList.add('bold');
    } else {
      root.classList.remove('bold');
    }
    if (btn) {
      btn.setAttribute('aria-pressed', mode === 'bold' ? 'true' : 'false');
    }
  }

  function set(mode) {
    apply(mode);
    // Fails silently in privacy modes / some file:// contexts — the toggle still works.
    try {
      localStorage.setItem(KEY, mode);
    } catch (e) { /* ignore */ }
  }

  // Sync the button with whatever the pre-paint snippet decided.
  apply(isBold() ? 'bold' : 'normal');

  if (btn) {
    btn.addEventListener('click', function () {
      set(isBold() ? 'normal' : 'bold');
    });
  }

  // `n` / `g` jump to bold mode. Returning is button-only, by design.
  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    var t = e.target || {};
    var tag = (t.tagName || '').toUpperCase();
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || t.isContentEditable) return;

    var k = (e.key || '').toLowerCase();
    if (k === 'n' || k === 'g') set('bold');
  });
})();
