const API_URL = 'http://localhost:3000/usuarios';

// Elementos do formulário
const form = document.getElementById('form1');
const telefoneInput = document.getElementById('telefone');
const tipoInstInput = document.getElementById('tipoInst');
const cnpjInput = document.getElementById('cnpj');
const cepInput = document.getElementById('cep');
const nomeInstInput = document.getElementById('nomeInst');
const descricaoInput = document.getElementById('descricao');
const fotoInput = document.getElementById('arquivo');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

// Elementos do modal
const modalSaveProfile = document.getElementById("modalSaveProfile");
const btnCloseSaveProfile = document.getElementById("btnCloseSaveProfile");

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {

    const novoUsuario = {
      email: emailInput.value,
      senha: senhaInput.value,
      cnpj: cnpjInput.value,
      instituicao: "true",
      telefone: telefoneInput.value,
      tipoInst: tipoInstInput.value,
      cep: cepInput.value,
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoUsuario)
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar usuário');
    }

    // Cadastro OK: abrir modal
    modalSaveProfile.showModal();

  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao cadastrar. Tente novamente.');
  }
});

// Quando fechar o modal, redireciona para a página de login
btnCloseSaveProfile.onclick = function () {
  modalSaveProfile.close();
  window.location.href = '../../../pages/login/login.html';
};
