// Small JS for nav toggle, form handling & small UX touches
document.addEventListener('DOMContentLoaded', function () {
  // year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle for mobile
  const navToggle = document.getElementById('navToggle');
  navToggle && navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  // simple contact form handler:
  // By default this will open the user's email client (mailto) as fallback.
  // Instructions below show how to swap to Formspree or other provider.
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const mailtoBtn = document.getElementById('mailtoBtn');

  if (mailtoBtn) {
    mailtoBtn.addEventListener('click', () => {
      const recipient = document.querySelector('#emailLink')?.textContent || 'your.email@example.com';
      const subject = encodeURIComponent('Hello from your portfolio');
      window.location.href = `mailto:${recipient}?subject=${subject}`;
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = (document.getElementById('name')||{}).value || '';
      const email = (document.getElementById('email')||{}).value || '';
      const message = (document.getElementById('message')||{}).value || '';

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill all fields.';
        return;
      }

      // Build mailto link as fallback:
      const to = document.querySelector('#emailLink')?.textContent || 'your.email@example.com';
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

      // Attempt to open mail client
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      // Show a short confirmation message
      formStatus.textContent = 'Opening your email app to send the message. If nothing opened, please use the email link or update form action to a server endpoint.';
      form.reset();

      // NOTE: To make the form send programmatically to a server:
      // - Replace the mailto behavior with a fetch POST to your form endpoint (Formspree, Netlify, or your API).
      // Example:
      // fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, message })
      // }).then(...handle response...)
    });
  }
});
