document.getElementById('cadastroForm').addEventListener('submit', function (e) {
    e.preventDefault(); // evita o envio padrão do formulário

    // Pega os valores dos inputs
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const nascimento = document.getElementById('nascimento').value;
    const senha = document.getElementById('senha').value;

    // Cria o objeto com os dados
    const novoUsuario = {
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        nascimento: nascimento,
        senha: senha
    };

    // Envia os dados para o json-server
    fetch('http://localhost:3000/donors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario)
    })
    .then(response => response.json())
    .then(data => {
        alert('Usuário cadastrado com sucesso!');
        // Limpa o formulário após o cadastro
        document.getElementById('cadastroForm').reset();
    })
    .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
    });
});