
// JavaScript principal para funcionalidades de navegação e formulário

document.addEventListener('DOMContentLoaded', () => {
  // Menu responsivo: abre e fecha o menu ao clicar no ícone hambúrguer
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });

    // Fecha o menu quando um item é selecionado (útil no mobile)
    navList.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navList.classList.remove('open');
        menuToggle.classList.remove('open');
      }
    });
  }

  // Destaca o link atual da navegação
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });

  // Manipulação simples do formulário de contato
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const resultElement = document.getElementById('formResult');
      if (resultElement) {
        resultElement.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
        resultElement.style.color = 'var(--primary-color)';
      }
      contactForm.reset();
    });
  }
});
