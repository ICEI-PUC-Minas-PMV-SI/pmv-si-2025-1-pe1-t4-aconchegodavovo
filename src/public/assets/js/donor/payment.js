/* Mudar os inputs de acordo com o card selecionado */
const sections = {
  qrCode: document.querySelector('.qr-code'),
  cartao: document.querySelector('.cartao'),
  mercadoPago: document.querySelector('.mercado-pago'),
  boleto: document.querySelector('.boleto-input')
};

const buttons = {
  pix: document.querySelector('.pix'),
  credito: document.querySelector('.credito'),
  mercado: document.querySelector('.mercado'),
  boleto: document.querySelector('.boleto')
};

function toggleSection(target) {
  Object.values(sections).forEach(section => {
    section.style.display = (section === target) ? 'flex' : 'none';
  });
}

buttons.pix.onclick = () => toggleSection(sections.qrCode);
buttons.credito.onclick = () => toggleSection(sections.cartao);
buttons.mercado.onclick = () => toggleSection(sections.mercadoPago);
buttons.boleto.onclick = () => toggleSection(sections.boleto);

/* Mudar a cor do card quando selecionado */
const cardList = document.querySelectorAll('.card');

cardList.forEach(cardList => {
    cardList.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special');
        cardList.classList.add('special');
    })
})