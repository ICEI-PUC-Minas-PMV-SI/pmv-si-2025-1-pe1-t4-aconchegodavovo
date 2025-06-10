const API_URL = 'http://localhost:3000/plans';

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  if (!id) {
    alert('ID do plano não encontrado.');
    window.location.href = 'plans.html';
    return;
  }

  const nomeInput = document.querySelector('input[name="NomePlano"]');
  const descricaoInput = document.querySelector('textarea[name="DescricaoPlano"]');
  const valorInput = document.querySelector('input[name="Valor"]');
  const form = document.getElementById('container-form');

  try {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();

    nomeInput.value = data.nome ;
    descricaoInput.value = data.descricao ;
    valorInput.value = data.valor;
  } catch (error) {
    alert('Erro ao carregar plano.');
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const updatedData = {
      nome: nomeInput.value,
      descricao: descricaoInput.value,
      valor: valorInput.value,
    };

    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      
    } catch (error) {
      alert('Erro ao atualizar plano.');
    }
  });
});

// Abrir modal ao clicar no botão salvar
const btnSaveProfile = document.getElementById('button-register');
const modalSaveProfile = document.getElementById('modalSaveProfile');
const btnCloseSaveProfile = document.getElementById('btnCloseSaveProfile');

btnSaveProfile.onclick = function () {
  modalSaveProfile.showModal();
};

// Fechar modal e redirecionar
btnCloseSaveProfile.onclick = function () {
  modalSaveProfile.close();
  window.location.href = '../../institution/plans/plans.html';
};
