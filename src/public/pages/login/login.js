// Supondo que você tenha um formulário com id 'loginForm'
const loginForm = document.getElementById('loginForm');
const urlInstitutions = "http://localhost:3000/institutions";
const urlDonors = "http://localhost:3000/donors";

loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // evita o envio padrão do formulário

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Faz uma requisição GET para buscar os dados de instituições e doadores
    Promise.all([
        fetch(urlInstitutions),
        fetch(urlDonors)
    ])
    .then(async ([resInstitutions, resDonors]) => {
        if (!resInstitutions.ok || !resDonors.ok) {
            throw new Error('Erro ao buscar os dados');
        }
        const dataInstitutions = await resInstitutions.json();
        const dataDonors = await resDonors.json();
        console.log('Institutions:', dataInstitutions);
        console.log('Donors:', dataDonors);

        // Procura o usuário pelo email na lista de doadores
        const user = dataDonors.find(donor => donor.email === email);

        if (!user) {
            alert('Email não encontrado!');
            return;
        }

        // Verifica se a senha confere
        if (user.senha === senha) {
            alert('Login bem-sucedido! Bem-vindo, ' + user.nome);
            window.location.href = '../donor/listInstitutions/listInstitutions.html';
        } else {
            alert('Senha incorreta!');
        }
    })
    .catch(error => {
        console.error('Erro ao fazer login:', error);
        alert('Ocorreu um erro ao fazer login. Por favor, tente novamente.');
    });
});