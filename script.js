
(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');

  if (prefersReduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach(function (el) { observer.observe(el); });
})();

// Enquiry form — submits to /api/contact, which stores it in the database.
(function () {
  var form = document.getElementById('enquiry-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var note = form.querySelector('.form-note');
    var error = form.querySelector('.form-error');
    var button = form.querySelector('button[type="submit"]');

    note.style.display = 'none';
    error.style.display = 'none';
    button.disabled = true;
    button.textContent = 'Sending…';

    var payload = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      enquiringFor: form.enquiringFor.value,
      message: form.message.value.trim(),
      website: form.website.value, // honeypot
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
      .then(function (result) {
        if (result.ok) {
          form.reset();
          note.style.display = 'block';
        } else {
          error.textContent = result.data.error || 'Something went wrong. Please try again or call us.';
          error.style.display = 'block';
        }
      })
      .catch(function () {
        error.textContent = 'Something went wrong. Please try again or call us.';
        error.style.display = 'block';
      })
      .finally(function () {
        button.disabled = false;
        button.textContent = 'Send enquiry';
      });
  });
})();
