// small UX scripts: smooth scroll, form handling demo
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// Demo form submission (placeholder) — will be replaced when backend exists
const form = document.getElementById('contactForm');
const resp = document.getElementById('response');
form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const fd = new FormData(form);
  const body = { name: fd.get('name'), email: fd.get('email'), message: fd.get('message') };
  // For now: simulate success and show message
  resp.textContent = 'Message saved locally — backend will be attached in Project 2.';
  resp.style.color = '#ffd966';
  // optional: store locally so you can demo submissions
  const submissions = JSON.parse(localStorage.getItem('cloudhost_subs') || '[]');
  submissions.push({...body, time: new Date().toISOString()});
  localStorage.setItem('cloudhost_subs', JSON.stringify(submissions));
  form.reset();
});
