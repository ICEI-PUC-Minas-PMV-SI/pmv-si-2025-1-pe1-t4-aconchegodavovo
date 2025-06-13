const API_URL = 'http://localhost:3000/perfil';

async function carregarInstituicoes() {
  try {
    const res = await fetch(API_URL);
    const instituicoes = await res.json();

    // Primeiro card com imagem + nome
    document.getElementById('img1').src = instituicoes.foto;
    document.getElementById('nome1').textContent = instituicoes.nome;


  } catch (err) {
    console.error('Erro ao carregar instituições:', err);
  }
}

carregarInstituicoes();