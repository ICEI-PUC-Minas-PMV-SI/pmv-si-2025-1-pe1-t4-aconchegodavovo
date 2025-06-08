document.getElementById('cadastroForm').addEventListener('submit', function (e) {
    e.preventDefault(); // evita o envio padrão do formulário

    // Pega os valores dos inputs
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cnpj = document.getElementById('cnpj').value;

    // Cria o objeto com os dados
    const novoUsuario = {
        email: email,
        senha: senha,
        cnpj: cnpj
    };

    // Envia os dados para o json-server
    fetch('http://localhost:3000/usuarios', {
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