const searchInput = document.querySelector('[data-search]');
const lista = document.getElementById('listaDoacoes');

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    Array.from(lista.children).forEach(item => {
        const isVisible = item.textContent.toLowerCase().includes(value);
        item.classList.toggle('hide', !isVisible);
    });
});