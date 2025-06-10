// Supondo que você tenha um formulário com id 'loginForm'
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // evita o envio padrão do formulário

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Faz uma requisição GET para buscar os usuários
    fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(usuarios => {
            // Encontra o usuário pelo email
            const user = usuarios.find(u => u.email === email);

            if (!user) {
                alert('Email não encontrado!');
                return;
            }

            // Verifica se a senha confere
            if (user.senha === senha) {
                window.location.href = '../../../pages/institution/historyReceipts/historyReceipts.html';
            } else {
                alert('Senha incorreta!');
            }
        })
        .catch(error => {
            console.error('Erro ao fazer login:', error);
        });
});