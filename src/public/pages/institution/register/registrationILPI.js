// Seleciona o formulário pelo seletor de classe
const formulario = document.querySelector('.cadastroForm');

formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // evita o envio padrão do formulário

    // Pega os valores dos inputs
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cnpj = document.getElementById('cnpj').value;
    const tipoInst = document.getElementById('tipoInst').value;
    const fundacao = document.getElementById('fundacao').value;
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    const bairro = document.getElementById('bairro').value;
    const logradouro = document.getElementById('logradouro').value;
    const numero = document.getElementById('numero').value;
    const cep = document.getElementById('cep').value;
    const nomeInst = document.getElementById('nomeInst').value;
    const descricao = document.getElementById('descricao').value;

    // Cria o objeto com os dados
    const novaInstituicao = {
        email: email,
        senha: senha,
        cnpj: cnpj,
        tipoInst: tipoInst,
        fundacao: fundacao,
        endereco: endereco,
        cidade: cidade,
        bairro: bairro,
        logradouro: logradouro,
        numero: numero,
        cep: cep,
        nomeInst: nomeInst,
        descricao: descricao,
    };

    // Envia os dados para o json-server
    fetch('http://localhost:3000/institutions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaInstituicao)
    })
    .then(response => response.json())
    .then(data => {
        alert('Usuário cadastrado com sucesso!');
        // Limpa o formulário após o cadastro
        formulario.reset();
    })
    .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
    });
});