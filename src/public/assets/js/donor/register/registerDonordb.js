const modalSaveProfile = document.getElementById("modalSaveProfile");
const btnCloseSaveProfile = document.getElementById("btnCloseSaveProfile");

document.getElementById('cadastroForm').addEventListener('submit', function (e) {
    e.preventDefault(); // evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const nascimento = document.getElementById('nascimento').value;
    const senha = document.getElementById('senha').value;

    const novoUsuario = {
        nome,
        email,
        cpf,
        telefone,
        nascimento,
        senha
    };

    fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário.');
        }
        return response.json();
    })
    .then(data => {
        // Mostra o modal de sucesso
        modalSaveProfile.showModal();
    })
    .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
    });
});

// Quando clicar no botão de fechar modal, redireciona
btnCloseSaveProfile.onclick = function () {
    modalSaveProfile.close();
    window.location.href = '../../../pages/login/login.html';
};
