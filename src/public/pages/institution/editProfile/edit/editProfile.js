const API_URL = 'http://localhost:3000/perfil'; 

const nomeInput = document.getElementById('nome');
const descricaoInput = document.getElementById('descricao');
const fotoInput = document.getElementById('foto');
const form = document.querySelector('form');

const nomeArquivoSpan = document.getElementById('nomeArquivo');

async function carregarPerfil() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    nomeInput.value = data.nome;
    descricaoInput.value = data.descricao;

  
    nomeArquivoSpan.textContent = 'Nenhuma foto selecionada';
  } catch (err) {
    console.error('Erro ao carregar perfil:', err);
  }
}

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
  console.log('entrou em')
  e.preventDefault();

  const nome = nomeInput.value;
  const descricao = descricaoInput.value;
  const fotoFile = fotoInput.files[0];

  let fotoBase64 = null;

  if (fotoFile) {
    fotoBase64 = await toBase64(fotoFile);
  }

  const perfilAtualizado = {
    nome,
    descricao,
    foto: fotoBase64 
  };

  try {
    await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(perfilAtualizado)
    });

    alert('Perfil atualizado com sucesso!');
  } catch (err) {
    console.error('Erro ao salvar perfil:', err);
    alert('Erro ao salvar perfil.');
  }
});

carregarPerfil();
