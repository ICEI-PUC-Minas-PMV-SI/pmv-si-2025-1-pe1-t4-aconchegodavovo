const API_URL_DOACOES = 'http://localhost:3000/doacoes';
const listaDoacoes = document.getElementById('listaDoacoes');
const inputBusca = document.getElementById('searchInput');

// Função para formatar data em DD/MM/AAAA
function formatarData(dataISO) {
  const data = new Date(dataISO);
  return data.toLocaleDateString('pt-BR');
}

// Função para renderizar as doações
function renderizarDoacoes(doacoes) {
  listaDoacoes.innerHTML = '';

  if (doacoes.length === 0) {
    listaDoacoes.innerHTML = '<p>Nenhuma doação encontrada.</p>';
    return;
  }

  doacoes.forEach(doacao => {
    const div = document.createElement('div');
    div.classList.add('linha');

    div.innerHTML = `
      <span>${doacao.data}</span>
      <span>R$ ${Number(doacao.valor).toFixed(2)}</span>
    `;

    listaDoacoes.appendChild(div);
  });
}

// Função para buscar e filtrar
async function carregarDoacoes() {
  try {
    const res = await fetch(API_URL_DOACOES);
    const doacoes = await res.json();

    // Salva na variável global (opcional)
    window.todasDoacoes = doacoes;

    renderizarDoacoes(doacoes);
  } catch (err) {
    console.error('Erro ao carregar doações:', err);
    listaDoacoes.innerHTML = '<p>Erro ao carregar doações.</p>';
  }
}

// Evento de busca
inputBusca.addEventListener('input', () => {
  const termo = inputBusca.value.toLowerCase();

  const filtradas = window.todasDoacoes.filter(d =>
    d.instituicao.toLowerCase().includes(termo)
  );

  renderizarDoacoes(filtradas);
});

// Ao carregar a página
document.addEventListener('DOMContentLoaded', carregarDoacoes);
