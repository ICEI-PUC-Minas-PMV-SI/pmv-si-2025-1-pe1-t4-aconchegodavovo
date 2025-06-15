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

const searchInput = document.querySelector('[data-search]');
const lista = document.getElementById('listaDoacoes');

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    Array.from(lista.children).forEach(item => {
        const isVisible = item.textContent.toLowerCase().includes(value);
        item.classList.toggle('hide', !isVisible);
    });
});