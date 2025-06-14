const API_URL = 'http://localhost:3000/usuarios';
const form = document.getElementById('form');

// Pega o ID da URL
const urlParams = new URLSearchParams(window.location.search);
const id = 13;

// Verifica se o ID está presente
if (!id) {
  alert('ID da instituição não encontrado.');
} else {
  preencherFormulario(id);
}

// Função para preencher o formulário com os dados existentes
async function preencherFormulario(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar dados');

    const dados = await response.json();

    const setValue = (id, value) => {
      const input = document.getElementById(id);
      if (input) input.value = value || '';
    };

    setValue('telefone', dados.telefone);
    setValue('tipo', dados.tipoInst);
    setValue('cargoResponsavel', dados.cargoResponsavel);
    setValue('endereco', dados.endereco);
    setValue('bairro', dados.bairro);
    setValue('numero', dados.numero);
    setValue('cidade', dados.cidade);
    setValue('logradouro', dados.logradouro);
    setValue('cep', dados.cep);
    setValue('email', dados.email);
    setValue('senha', dados.senha);

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
    tipoInst: document.getElementById('tipo')?.value,
    cep: document.getElementById('cep')?.value,
    email: document.getElementById('email')?.value,
    senha: document.getElementById('senha')?.value,
    cargoResponsavel: document.getElementById('cargoResponsavel')?.value,
    endereco: document.getElementById('endereco')?.value,
    bairro: document.getElementById('bairro')?.value,
    numero: document.getElementById('numero')?.value,
    cidade: document.getElementById('cidade')?.value,
    logradouro: document.getElementById('logradouro')?.value
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
    if (modal) modal.showModal();

  } catch (error) {
    console.error('Erro ao atualizar:', error);
    alert('Erro ao atualizar os dados.');
  }
});

// Fecha o modal de sucesso ao clicar em "Fechar"
document.getElementById('btnCloseSaveProfile')?.addEventListener('click', () => {
  document.getElementById('modalSaveProfile')?.close();
});
