const API_URL = 'http://localhost:3000/perfil';

const nomeEl = document.getElementById('nome-instituicao');
const descricaoEl = document.getElementById('descricao-instituicao');
const fotoEl = document.getElementById('foto-instituicao');

async function carregarPerfil() {
  try {
    const res = await fetch(API_URL);
    const perfil = await res.json(); 

    nomeEl.textContent = perfil.nome;
    descricaoEl.textContent = perfil.descricao;
    fotoEl.src = perfil.foto;
  } catch (err) {
    console.error('Erro ao carregar perfil:', err);
    nomeEl.textContent = 'Erro ao carregar dados';
  }
}

carregarPerfil();