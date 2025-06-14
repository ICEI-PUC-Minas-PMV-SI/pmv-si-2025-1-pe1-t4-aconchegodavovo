const API_URL = 'http://localhost:3000/usuarios';
const form = document.getElementById('form');

// Pega o ID da URL
const urlParams = new URLSearchParams(window.location.search);
const id = 8;

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

    // Preenchendo os campos, verifica se cada campo existe no HTML antes
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
document.getElementById('atualizar').addEventListener('click', async () => {
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

    alert('Dados atualizados com sucesso!');
    // Redireciona se necessário:
    // window.location.href = 'caminho-depois-de-atualizar.html';

  } catch (error) {
    console.error('Erro ao atualizar:', error);
    alert('Erro ao atualizar os dados.');
  }
});
