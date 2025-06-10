document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const plano = {
    nome: form.NomePlano.value,
    descricao: form.DescricaoPlano.value,
    valor: form.Valor.value.replace(',', '.') 
  };

  try {
    const response = await fetch('http://localhost:3000/plans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plano)
    });

    if (response.ok) {
      alert('Plano salvo com sucesso!');
      form.reset();
    } else {
      alert('Erro ao salvar plano.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro na comunicação com o servidor.');
  }
});
