const API_URL = 'http://localhost:3000/gratitude';
const container = document.getElementById('container-gratitude');

async function carregarAgradecimentos() {
  try {
    const response = await fetch(API_URL);
    const agradecimentos = await response.json();

    if (agradecimentos.length === 0) {
      container.innerHTML = '<p>Nenhum agradecimento encontrado.</p>';
      return;
    }

    agradecimentos.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('div-gratitude');

      div.innerHTML = `
        <span class="span-gratitude">${item.titulo}</span>
        <div class="div-icons">
          <a href="editGratitude.html?id=${item.id}">
            <img src="../../../assets/img/icon-lapis-azul.svg" alt="Editar">
          </a>
          <a href="#" onclick="excluirAgradecimento(${item.id})">
            <img src="../../../assets/img/icon-lixeira-vermelha.svg" alt="Excluir">
          </a>
        </div>
      `;

      container.appendChild(div);
    });
  } catch (error) {
    console.error('Erro ao carregar agradecimentos:', error);
    container.innerHTML = '<p>Erro ao carregar os agradecimentos.</p>';
  }
}

const modal = document.getElementById('modalDelete');
const btnCancel = document.getElementById('btnCancelDelete');
const btnConfirm = document.getElementById('btnConfirmDelete');

let idParaExcluir = null;

async function carregarAgradecimentos() {
  try {
    const response = await fetch(API_URL);
    const agradecimentos = await response.json();

    if (agradecimentos.length === 0) {
      container.innerHTML = '<p>Nenhum agradecimento encontrado.</p>';
      return;
    }

    agradecimentos.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('div-gratitude');

      div.innerHTML = `
        <span class="span-gratitude">${item.titulo}</span>
        <div class="div-icons">
          <a href="editGratitude.html?id=${item.id}">
            <img src="../../../assets/img/icon-lapis-azul.svg" alt="Editar">
          </a>
          <a href="#" data-id="${item.id}" class="btn-excluir">
            <img src="../../../assets/img/icon-lixeira-vermelha.svg" alt="Excluir">
          </a>
        </div>
      `;

      container.appendChild(div);
    });

    // Adiciona evento para todos os botões de excluir
    document.querySelectorAll('.btn-excluir').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        idParaExcluir = btn.dataset.id;
        modal.showModal();
      });
    });

  } catch (error) {
    console.error('Erro ao carregar agradecimentos:', error);
    container.innerHTML = '<p>Erro ao carregar os agradecimentos.</p>';
  }
}

// Clique em "cancelar"
btnCancel.addEventListener('click', () => {
  modal.close();
});

// Clique em "excluir"
btnConfirm.addEventListener('click', async () => {
  if (!idParaExcluir) return;
  try {
    await fetch(`${API_URL}/${idParaExcluir}`, {
      method: 'DELETE'
    });
    modal.close();
    location.reload();
  } catch (error) {
    alert('Erro ao excluir agradecimento.');
  }
});

carregarAgradecimentos();