fetch('http://localhost:3000/doacao')
    .then(response => response.json())
    .then(doacao => {
        const lista = document.getElementById('lista-doacao');
        doacao.forEach(doacao => {
            const item = document.createElement('li');
            item.textContent = `${doacao.produto} - R$${doacao.valor} em ${doacao.data}`;
            lista.appendChild(item);
        });
    });