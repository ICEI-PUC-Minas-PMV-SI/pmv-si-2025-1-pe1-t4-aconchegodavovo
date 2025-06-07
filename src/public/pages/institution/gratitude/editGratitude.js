const API_URL = 'http://localhost:3000/gratitude';

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
  if (!id) {
    alert('ID do agradecimento não encontrado.');
    window.location.href = 'gratitude.html';
    return;
  }

  // Elementos do formulário
  const tituloInput = document.getElementById('input-form');
  const textoInput = document.getElementById('textarea-form');
  const form = document.getElementById('container-form');

  // Busca os dados para preencher o formulário
  try {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();

    tituloInput.value = data.titulo;
    textoInput.value = data.texto;
  } catch (error) {
    alert('Erro ao carregar agradecimento.');
  }

  // Atualiza os dados ao enviar o formulário
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const updatedData = {
      titulo: tituloInput.value,
      texto: textoInput.value
    };

    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });

  
    } catch (error) {
      alert('Erro ao atualizar agradecimento.');
    }
  });
});

const btnSaveProfile = document.getElementById("button-register");
const modalSaveProfile = document.getElementById("modalSaveProfile");
const btnCloseSaveProfile = document.getElementById("btnCloseSaveProfile");

btnSaveProfile.onclick = function () {
    modalSaveProfile.showModal();
}

btnCloseSaveProfile.onclick = function () {
    modalSaveProfile.close();
    window.location.href = 'gratitude.html';
}