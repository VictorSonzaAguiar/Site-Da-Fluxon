// Seleciona o ícone do hambúrguer e o menu de navegação
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.navigation ul');

// Adiciona um event listener ao clique do hambúrguer
hamburger.addEventListener('click', () => {
  // Alterna a classe 'active' no menu e a classe 'open' no hambúrguer para a animação
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});