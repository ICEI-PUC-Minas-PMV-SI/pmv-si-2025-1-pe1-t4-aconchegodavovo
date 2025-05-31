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

/* --------------------------------------------------------------------------------------- */

const cardElList = document.querySelectorAll('.card');

cardElList.forEach(cardElList => {
    cardElList.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special');
        cardElList.classList.add('special');
    })
})