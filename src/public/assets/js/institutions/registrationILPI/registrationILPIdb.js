// URL do json-server (endpoint base)
const baseUrl = 'http://localhost:3000';

// Função para enviar dados ao json-server
async function enviarDados(endpoint, data, isFormData = false) {
  try {
    const options = {
      method: 'POST',
      headers: {},
      body: isFormData ? data : JSON.stringify(data)
    };

    // Se for JSON, definir o header 'Content-Type'
    if (!isFormData) {
      options.headers['Content-Type'] = 'application/json';
    }

    // Fazendo a requisição ao endpoint específico
    const response = await fetch(`${baseUrl}/${endpoint}`, options);

    if (!response.ok) {
      throw new Error('Erro ao enviar dados');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    alert('Erro ao enviar dados: ' + error.message);
  }
}

// Evento para o formulário 1
document.getElementById('form1').addEventListener('submit', function(e) {
  e.preventDefault();
  const telefone = document.getElementById('telefone').value;
  const tipoInst = document.getElementById('tipoInst').value;
  const cargoResp = document.getElementById('cargoResp').value;
  const fundacao = document.getElementById('fundacao').value;

  // Enviar todos os dados de uma vez
  enviarDados('usuarios', { telefone, tipoInst, cargoResp, fundacao });
});

// Evento para o formulário 2
document.getElementById('form2').addEventListener('submit', function(e) {
  e.preventDefault();
  const endereco = document.getElementById('endereco').value;
  const cidade = document.getElementById('cidade').value;
  const bairro = document.getElementById('bairro').value;
  const logradouro = document.getElementById('logradouro').value;
  const numero = document.getElementById('numero').value;
  const cep = document.getElementById('cep').value;

  enviarDados('usuarios', { endereco, cidade, bairro, logradouro, numero, cep });
});

// Evento para o formulário 3
document.getElementById('form3').addEventListener('submit', function(e) {
  e.preventDefault();
  const nomeInst = document.getElementById('nomeInst').value;
  const descricao = document.getElementById('descricao').value;

  enviarDados('usuarios', { nomeInst, descricao });
});

// Evento para o formulário 4
document.getElementById('form4').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const cnpj = document.getElementById('cnpj').value;
  const instituicao = true;

  enviarDados('usuarios', { email, senha, cnpj, instituicao });
  
  alert('Usuário cadastrado com sucesso!');
  window.location.href = '../../../pages/login/login.html';
});