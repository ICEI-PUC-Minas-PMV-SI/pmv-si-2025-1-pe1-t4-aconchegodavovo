const searchInput = document.getElementById('searchInput');
const linhas = document.querySelectorAll('.linha');

searchInput.addEventListener('input', () => {
  const termo = searchInput.value.toLowerCase();

  linhas.forEach(linha => {
    const texto = linha.textContent.toLowerCase();
    if (texto.includes(termo)) {
      linha.style.display = 'flex'; // ou 'block'
    } else {
      linha.style.display = 'none';
    }
  });
});
