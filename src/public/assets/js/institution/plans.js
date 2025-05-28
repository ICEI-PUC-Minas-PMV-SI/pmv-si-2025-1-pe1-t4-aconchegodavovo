document.addEventListener("DOMContentLoaded", function () {
  const planos = document.querySelectorAll(".plan-item");

  planos.forEach((plano) => {
    const btnEditar = plano.querySelector(".edit-btn");
    const btnExcluir = plano.querySelector(".delete-btn");

   
    btnEditar.addEventListener("click", () => {
      window.location.href = "/src/pages/institution/plans/editPlans.html";
    });

 
    btnExcluir.addEventListener("click", () => {
      plano.remove();
    });
  });
});
