const API_URL = 'http://localhost:3000/gratitude';

const tituloInput = document.getElementById('input-form');
const textoInput = document.getElementById('textarea-form');
const fotoInput = document.getElementById('foto');
const form = document.querySelector('form');
const nomeArquivoSpan = document.getElementById('nomeArquivo');

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });
}

fotoInput.addEventListener('change', () => {
  if (fotoInput.files.length > 0) {
    const nomeArquivo = fotoInput.files[0].name;
    const nomeExibido = nomeArquivo.length > 10 ? nomeArquivo.slice(0, 10) + "..." : nomeArquivo;
    nomeArquivoSpan.textContent = nomeExibido;
  } else {
    nomeArquivoSpan.textContent = 'Nenhuma foto selecionada';
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const titulo = tituloInput.value;
  const texto = textoInput.value;
  const fotoFile = fotoInput.files[0];

  let fotoBase64 = null;

  if (fotoFile) {
    fotoBase64 = await toBase64(fotoFile);
  }

  const novoAgradecimento = {
    titulo,
    texto,
    foto: fotoBase64
  };

  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoAgradecimento)
    });

  } catch (err) {
    console.error('Erro ao salvar agradecimento:', err);
    alert('Erro ao salvar agradecimento.');
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
}