document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;

  const novoPlano = {
    nome: form.NomePlano.value,
    descricao: form.DescricaoPlano.value,
    valor: form.Valor.value,
    responsavel: form.Responsavel.value,
    periodicidade: form.Periodicidade.value,
    dataInicio: form.DataInicio.value,
    dataTermino: form.DataFim.value
  };

  try {
    const resposta = await fetch('http://localhost:3000/plans', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoPlano)
    });

    if (resposta.ok) {
      alert('Plano cadastrado com sucesso!');
      window.location.href = '/src/public/pages/institution/plans/plans.html';       
    } else {
      alert('Erro ao salvar o plano.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro na conexão com o servidor.');
  }
});
