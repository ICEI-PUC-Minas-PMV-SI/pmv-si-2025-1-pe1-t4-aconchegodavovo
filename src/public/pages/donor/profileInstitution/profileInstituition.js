const API_URL = 'http://localhost:3000/perfil';

const nomeEl = document.getElementById('nome-instituicao');
const descricaoEl = document.getElementById('descricao-instituicao');
const fotoEl = document.getElementById('foto-instituicao');

let nomeInstituicaoGlobal = ''; // usado depois no redirecionamento

async function carregarPerfil() {
  try {
    const res = await fetch(API_URL);
    const perfil = await res.json();

    nomeEl.textContent = perfil.nome;
    descricaoEl.textContent = perfil.descricao;
    fotoEl.src = perfil.foto;

    nomeInstituicaoGlobal = perfil.nome; // salva o nome para usar depois
  } catch (err) {
    console.error('Erro ao carregar perfil:', err);
    nomeEl.textContent = 'Erro ao carregar dados';
  }
}

carregarPerfil();

const API_URL_AGRADECIMENTOS = 'http://localhost:3000/gratitude';
const container = document.getElementById('agradecimentos-container');

async function carregarAgradecimentos() {
  try {
    const resposta = await fetch(API_URL_AGRADECIMENTOS);
    const agradecimentos = await resposta.json();

    if (agradecimentos.length === 0) {
      container.innerHTML = '<p>Nenhum agradecimento cadastrado ainda.</p>';
      return;
    }

    container.innerHTML = '';

    agradecimentos.forEach(agradecimento => {
      const div = document.createElement('div');
      div.classList.add('agradecimento-box');

      div.innerHTML = `
        ${agradecimento.foto ? `<img src="${agradecimento.foto}" alt="Imagem do agradecimento">` : ''}
        <div>
          <h3>${agradecimento.titulo}</h3>
          <p>${agradecimento.texto}</p>
        </div>
      `;

      container.appendChild(div);
    });
  } catch (erro) {
    console.error('Erro ao carregar agradecimentos:', erro);
    container.innerHTML = '<p>Erro ao carregar agradecimentos.</p>';
  }
}

carregarAgradecimentos();

const API_URL_PLANS = 'http://localhost:3000/plans';

document.addEventListener('DOMContentLoaded', async () => {
  const planoCardsContainer = document.querySelector('.plano-cards');

  try {
    const res = await fetch(API_URL_PLANS);
    const planos = await res.json();

    planoCardsContainer.innerHTML = '';

    planos.forEach(plano => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h3>${plano.nome}</h3>
        <p>${plano.descricao}</p>
        <div class="preco">R$${parseFloat(plano.valor).toFixed(2)}</div>
      `;

      card.addEventListener('click', () => {
        const url = new URL('../../donor/payment/payment.html', window.location.href); // base dinâmica
        url.searchParams.set('instituicao', nomeInstituicaoGlobal);
        url.searchParams.set('valor', plano.valor);
        url.searchParams.set('plano', plano.nome);
        window.location.href = url.toString();
      });

      planoCardsContainer.appendChild(card);
    });
  } catch (error) {
    planoCardsContainer.innerHTML = '<p>Erro ao carregar planos.</p>';
    console.error(error);
  }
});
