const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.querySelector('#form-empresa');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const nome = data.get('nome') || '';
  const empresa = data.get('empresa') || '';
  const whatsapp = data.get('whatsapp') || '';
  const email = data.get('email') || '';
  const mensagem = data.get('mensagem') || '';
  const texto = `Olá, vim pelo site do Instituto Milah.\n\nNome: ${nome}\nEmpresa: ${empresa}\nWhatsApp: ${whatsapp}\nE-mail: ${email}\nNecessidade: ${mensagem}`;
  window.open(`https://wa.me/5511974806544?text=${encodeURIComponent(texto)}`, '_blank');
});
