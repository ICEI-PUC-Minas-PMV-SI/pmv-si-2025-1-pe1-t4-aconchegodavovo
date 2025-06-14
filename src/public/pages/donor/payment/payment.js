document.addEventListener('DOMContentLoaded', () => {
  const API_URL_PLANS = 'http://localhost:3000/doacoes';

  const params = new URLSearchParams(window.location.search);
  const valor = params.get('valor');
  const instituicao = params.get('instituicao');
  const plano = params.get('plano');

  // Atualiza valores da tela
  if (valor) {
    const valorEl = document.querySelector('.right .valor h1');
    if (valorEl) valorEl.textContent = `R$ ${parseFloat(valor).toFixed(2)}`;
  }
  if (instituicao) {
    const nomeEl = document.querySelector('.right .valor h2');
    if (nomeEl) nomeEl.textContent = instituicao;
  }
  if (plano) {
    const planoEl = document.querySelector('.right .valor p');
    if (planoEl) planoEl.textContent = plano;
  }

  let formaSelecionada ='pix';

  // Detecta forma selecionada inicial
  const selecionadoInicial = document.querySelector('.card.selecionado');
  if (selecionadoInicial) {
    if (selecionadoInicial.classList.contains('pix')) formaSelecionada = 'pix';
    else if (selecionadoInicial.classList.contains('credito')) formaSelecionada = 'cartao';
    else if (selecionadoInicial.classList.contains('mercado')) formaSelecionada = 'mercado_pago';
    else if (selecionadoInicial.classList.contains('boleto')) formaSelecionada = 'boleto';
  }

  // Seleção das formas
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.card').forEach(c => c.classList.remove('selecionado'));
      card.classList.add('selecionado');

      if (card.classList.contains('pix')) formaSelecionada = 'pix';
      else if (card.classList.contains('credito')) formaSelecionada = 'cartao';
      else if (card.classList.contains('mercado')) formaSelecionada = 'mercado_pago';
      else if (card.classList.contains('boleto')) formaSelecionada = 'boleto';
    });
  });

  // Referências dos modais
  const modalConfirm = document.getElementById('modalConfirm');
  const modalCancel = document.getElementById('modalCancel');

  // Botões
  const btnConfirm = document.getElementById('btnConfirm');
  const btnCancel = document.getElementById('btnCancel');
  const btnCloseConfirm = document.getElementById('btnCloseConfirm');
  const btnCloseCancel = document.getElementById('btnCloseCancel');

  // Ao clicar em Continuar, abre modal de confirmação
  btnConfirm.addEventListener('click', (e) => {
    e.preventDefault();

    if (!formaSelecionada) {
      alert('Selecione uma forma de pagamento!');
      return;
    }

    modalConfirm.showModal();
  });

  // Ao clicar em Voltar no modalConfirm fecha ele
  btnCloseConfirm.addEventListener('click', () => {
    modalConfirm.close();
  });

  // Ao clicar em Cancelar na tela abre modal de cancelamento
  btnCancel.addEventListener('click', () => {
    modalCancel.showModal();
  });

  // Fecha modalCancel ao clicar em voltar
  btnCloseCancel.addEventListener('click', () => {
    modalCancel.close();
  });

  
  const btnModalConfirm = modalConfirm.querySelector('.btn-verde');
  btnModalConfirm.addEventListener('click', async () => {
    // Prepara dados
    const novaDoacao = {
      data: new Date().toLocaleDateString('pt-BR'),
      valor: valor ? parseFloat(valor) : 0,
      nomeinst: instituicao || '',
      pagamento: formaSelecionada
    };

    try {
      const response = await fetch(API_URL_PLANS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaDoacao)
      });

      if (!response.ok) throw new Error('Erro ao salvar doação');

      modalConfirm.close();

      // Redireciona
      window.location.href = '../../../pages/donor/payment/paymentSuccess.html';

    } catch (err) {
      console.error(err);
      alert('Erro ao salvar a doação!');
    }
  });
});
