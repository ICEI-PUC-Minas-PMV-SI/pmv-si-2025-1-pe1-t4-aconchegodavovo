document.addEventListener("DOMContentLoaded", () => {
  const btnEnviar = document.querySelector(".btn-azul-2");
  const emailInput = document.querySelector(".input-forgotpass");

  
  let msgElement = document.createElement("p");
  msgElement.id = "message";
  msgElement.style.fontSize = "0.9rem";
  emailInput.insertAdjacentElement("afterend", msgElement);

  btnEnviar.addEventListener("click", async () => {
    const email = emailInput.value.trim();
    msgElement.textContent = "";
    msgElement.style.color = "red";

    if (!email) {
      msgElement.textContent = "Por favor, insira um e-mail.";
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/usuarios?email=${email}`);
      const data = await response.json();

      if (data.length === 0) {
        msgElement.textContent = "Este e-mail não está cadastrado.";
      } else {
        
        const mascararEmail = (email) => {
          const [nome, dominio] = email.split("@");
          const parteVisivel = nome.length > 1 ? nome[0] + "*".repeat(Math.min(3, nome.length - 1)) : "*";
          return `${parteVisivel}@${dominio}`;
        };

        const emailAnonimizado = mascararEmail(email);

        const container = document.querySelector(".container1");
        container.innerHTML = `
          <h2>Verifique seu e-mail</h2>
          <p style="color: #012C4A;">Enviamos um link para redefinir sua senha para <strong>${emailAnonimizado}</strong>.</p>
        `;
      }
    } catch (err) {
      console.error(err);
      msgElement.textContent = "Erro ao verificar o e-mail.";
    }
  });
});
