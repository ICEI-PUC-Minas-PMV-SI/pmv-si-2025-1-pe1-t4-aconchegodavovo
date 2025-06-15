const API_URL = 'http://localhost:3000/usuarios';
const form = document.getElementById('form');

// Pega o ID da URL
const urlParams = new URLSearchParams(window.location.search);
const id = 2;

if (!id) {
  alert('ID da Instituição não encontrado.');
} else {
  preencherFormulario(id);
}

// Função para preencher o formulário com os dados existentes
async function preencherFormulario(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar dados');

    const dados = await response.json();

    const setValue = (elementId, value) => {
      const input = document.getElementById(elementId);
      if (input) input.value = value || '';
    };

    setValue('telefone', dados.telefone);
    setValue('tipoInst', dados.tipoInst);
    setValue('cnpj', dados.cnpj);
    setValue('cep', dados.cep);
    setValue('email', dados.email);
    setValue('senha', dados.senha);
    setValue('instituicao', dados.instituicao);

  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    alert('Erro ao carregar informações.');
  }
}

// Evento para atualizar os dados ao clicar no botão
document.getElementById('atualizar').addEventListener('click', async (e) => {
  e.preventDefault(); // Impede o envio do formulário

  const dadosAtualizados = {
    telefone: document.getElementById('telefone')?.value,
    tipoInst: document.getElementById('tipoInst')?.value,
    cnpj: document.getElementById('cnpj')?.value,
    cep: document.getElementById('cep')?.value,
    email: document.getElementById('email')?.value,
    senha: document.getElementById('senha')?.value,
    instituicao: document.getElementById('instituicao')?.value
  };

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosAtualizados)
    });

    if (!response.ok) throw new Error('Erro ao atualizar');

    // Abre o modal de sucesso
    const modal = document.getElementById('modalSaveProfile');
    if (modal && typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      alert('Dados atualizados com sucesso!');
    }

  } catch (error) {
    console.error('Erro ao atualizar:', error);
    alert('Erro ao atualizar os dados.');
  }
});

// Fecha o modal de sucesso ao clicar em "Fechar"
document.getElementById('btnCloseSaveProfile')?.addEventListener('click', () => {
  document.getElementById('modalSaveProfile')?.close();
});