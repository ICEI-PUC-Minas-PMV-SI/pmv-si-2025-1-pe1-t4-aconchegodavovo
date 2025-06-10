const API_URL = 'http://localhost:3000/plans';
const container = document.getElementById('container-plans');

const modal = document.getElementById('modalDelete');
const btnCancel = document.getElementById('btnCancelDelete');
const btnConfirm = document.getElementById('btnConfirmDelete');

let idParaExcluir = null;

async function carregarPlanos() {
  try {
    const response = await fetch(API_URL);
    const planos = await response.json();

    if (planos.length === 0) {
      container.innerHTML = '<p>Nenhum plano encontrado.</p>';
      return;
    }

    container.innerHTML = ''; // Evita duplicação ao recarregar

    planos.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('div-plan');

      div.innerHTML = `
        <span class="span-plan">${item.nome}</span>
        <div class="div-icons">
          <a href="editPlans.html?id=${item.id}">
            <img src="../../../assets/img/icon-lapis-azul.svg" alt="Editar">
          </a>
          <a href="#" data-id="${item.id}" class="btn-excluir">
            <img src="../../../assets/img/icon-lixeira-vermelha.svg" alt="Excluir">
          </a>
        </div>
      `;

      container.appendChild(div);
    });

    // Adiciona eventos aos botões de excluir
    document.querySelectorAll('.btn-excluir').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        idParaExcluir = btn.dataset.id;
        modal.showModal(); // Abre o modal <dialog>
      });
    });

  } catch (error) {
    console.error('Erro ao carregar planos:', error);
    container.innerHTML = '<p>Erro ao carregar os planos.</p>';
  }
}

// Botão "Cancelar" do modal
btnCancel.addEventListener('click', () => {
  modal.close();
});

// Botão "Confirmar Exclusão"
btnConfirm.addEventListener('click', async () => {
  if (!idParaExcluir) return;

  try {
    await fetch(`${API_URL}/${idParaExcluir}`, {
      method: 'DELETE'
    });
    modal.close();
    carregarPlanos(); // Atualiza a lista sem recarregar a página
  } catch (error) {
    alert('Erro ao excluir plano.');
  }
});

// Inicializa a listagem
carregarPlanos();
