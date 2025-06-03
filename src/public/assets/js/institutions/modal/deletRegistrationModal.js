const modalExcluirConta = document.getElementById('modalExcluirConta');
const botaoExcluir = document.querySelector('.botao-excluir');
const btnCancelar = document.getElementById('btnCancelarExcluirConta');
const btnConfirmar = document.getElementById('btnConfirmarExcluirConta');

botaoExcluir.addEventListener('click', (e) => {
  e.preventDefault();
  modalExcluirConta.showModal();
});

btnCancelar.addEventListener('click', () => {
  modalExcluirConta.close();
});
