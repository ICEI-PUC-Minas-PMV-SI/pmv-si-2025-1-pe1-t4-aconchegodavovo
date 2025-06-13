document.getElementById('meuForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    
    // Quando o pagamento for concluído
    function finalizarPagamento() {
        const novaDoacao = {
            id: Date.now(),
            produto: 'Plano Básico',
            valor: 29.90,
            data: new Date().toISOString()
        };

        fetch('http://localhost:3000/doacao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaDoacao)
        })
            .then(response => response.json())
            .then(data => {
                // Após salvar, redireciona para o histórico
                window.location.href = '../../../../pages/donor/donationHistory/donationHistory.html';
            })
            .catch(error => console.error('Erro ao salvar compra:', error));
    }

    // Chama a função para finalizar o pagamento
    finalizarPagamento();
})