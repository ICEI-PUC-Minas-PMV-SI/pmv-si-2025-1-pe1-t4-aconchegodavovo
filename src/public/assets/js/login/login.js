const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(usuarios => {
            const user = usuarios.find(u => u.email === email);

            if (!user) {
                alert('Email não encontrado!');
                return;
            }

            if (user.senha === senha) {
                if (user.instituicao === true) {
                    window.location.href = '../../../pages/institution/historyReceipts/historyReceipts.html';
                } else {
                    window.location.href = '../../../pages/donor/listInstitutions/listInstitutions.html';
                }
            } else {
                alert('Senha incorreta!');
            }
        })
        .catch(error => {
            console.error('Erro ao fazer login:', error);
            alert('Ocorreu um erro. Tente novamente mais tarde.');
        });
});