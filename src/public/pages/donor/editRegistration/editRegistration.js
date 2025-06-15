const API_URL = 'http://localhost:3000/usuarios';
const form = document.getElementById('form');

// Pega o ID da URL
const urlParams = new URLSearchParams(window.location.search);
const id = 1;

if (!id) {
    alert('ID do doador não encontrado.');
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

        setValue('nome', dados.nome);
        setValue('cpf', dados.cpf);
        setValue('telefone', dados.telefone);
        setValue('nascimento', dados.nascimento);
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
        nome: document.getElementById('nome')?.value,
        cpf: document.getElementById('cpf')?.value,
        telefone: document.getElementById('telefone')?.value,
        nascimento: document.getElementById('nascimento')?.value,
        email: document.getElementById('email')?.value,
        senha: document.getElementById('senha')?.value
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
        if (modal && typeof modal.showModal === 'function') {
            modal.showModal();
        } else {
            alert('Dados atualizados com sucesso!');
        }

    } catch (error) {
        console.error('Erro ao atualizar:', error);
    }
});

// Fecha o modal de sucesso ao clicar em "Fechar"
document.getElementById('btnCloseSaveProfile')?.addEventListener('click', () => {
    document.getElementById('modalSaveProfile')?.close();
});
