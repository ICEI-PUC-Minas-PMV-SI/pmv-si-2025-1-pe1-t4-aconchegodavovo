document.addEventListener("DOMContentLoaded", () => {
  const planList = document.querySelector(".plan-list");

  // criar card
  function criarPlanoCard(plano) {
    const div = document.createElement("div");
    div.classList.add("plan-item");
    div.dataset.id = plano.id;

    div.innerHTML = `
    <div style="flex: 1">
      <h3>${plano.nome}</h3>
        <p>${plano.descricao}</p>
        <p><strong>Valor:</strong> R$ ${plano.valor}</p>
        <p><strong>Periodicidade:</strong> ${plano.periodicidade}</p>
        <p><strong>Responsável:</strong> ${plano.responsavel}</p>
        <p><strong>Início:</strong> ${plano.dataInicio}</p>
        <p><strong>Término:</strong> ${plano.dataTermino}</p>
      </div>
      <div class="actions">
        <button class="edit-btn">Editar</button>
        <button class="delete-btn">Excluir</button>
      </div>
    `;

    // editar
    div.querySelector(".edit-btn").addEventListener("click", () => {
      window.location.href = `../../../pages/institution/plans/editPlans.html?id=${plano.id}`;
    });

    // excluir
    div.querySelector(".delete-btn").addEventListener("click", () => {
      fetch(`http://localhost:3000/plans/${plano.id}`, { method: "DELETE" })
        .then((res) => {
          if (res.ok) {
            div.remove();
          } else {
            alert("Erro ao excluir o plano.");
          }
        });
    });

    return div;
  }

  // backend
  fetch("http://localhost:3000/plans")
    .then((res) => res.json())
    .then((planos) => {
      planos.forEach((plano) => {
        const card = criarPlanoCard(plano);
        planList.appendChild(card);
      });
    })
    .catch(() => {
      planList.innerHTML = "<p>Erro ao carregar planos.</p>";
    });
});

