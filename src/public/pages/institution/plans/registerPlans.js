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

  } catch (error) {
    console.error('Erro:', error);
    alert('Erro na comunicação com o servidor.');
  }
});

const btnSaveProfile = document.getElementById("btnSaveProfile");
const modalSaveProfile = document.getElementById("modalSaveProfile");
const btnCloseSaveProfile = document.getElementById("btnCloseSaveProfile");

btnSaveProfile.onclick = function () {
    modalSaveProfile.showModal();
}

btnCloseSaveProfile.onclick = function () {
    modalSaveProfile.close();
    window.location.href = 'plans.html';
}
