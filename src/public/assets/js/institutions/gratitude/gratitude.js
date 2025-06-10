const API_URL = 'http://localhost:3000/gratitude';
const container = document.getElementById('container-gratitude');

const modal = document.getElementById('modalDelete');
const btnCancel = document.getElementById('btnCancelDelete');
const btnConfirm = document.getElementById('btnConfirmDelete');

let idParaExcluir = null;

// Função única para carregar os agradecimentos
async function carregarAgradecimentos() {
  try {
    const response = await fetch(API_URL);
    const agradecimentos = await response.json();

    if (agradecimentos.length === 0) {
      container.innerHTML = '<p>Nenhum agradecimento encontrado.</p>';
      return;
    }

    container.innerHTML = ''; // Limpa conteúdo anterior, se houver

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

    // Adiciona os eventos aos botões de excluir
    document.querySelectorAll('.btn-excluir').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        idParaExcluir = btn.dataset.id;
        modal.showModal(); // Mostra o <dialog>
      });
    });

  } catch (error) {
    console.error('Erro ao carregar agradecimentos:', error);
    container.innerHTML = '<p>Erro ao carregar os agradecimentos.</p>';
  }
}

// Botão "Cancelar" do modal
btnCancel.addEventListener('click', () => {
  modal.close();
});

// Botão "Excluir" do modal
btnConfirm.addEventListener('click', async () => {
  if (!idParaExcluir) return;

  try {
    await fetch(`${API_URL}/${idParaExcluir}`, {
      method: 'DELETE'
    });
    modal.close();
    location.reload(); // Recarrega a página para atualizar a lista
  } catch (error) {
    alert('Erro ao excluir agradecimento.');
  }
});

// Inicializa a listagem
carregarAgradecimentos();

