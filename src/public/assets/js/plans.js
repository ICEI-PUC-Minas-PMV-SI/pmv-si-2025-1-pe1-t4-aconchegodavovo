document.addEventListener("DOMContentLoaded", function () {
  const planos = document.querySelectorAll(".plan-item");

  planos.forEach((plano) => {
    const btnEditar = plano.querySelector(".edit-btn");
    const btnExcluir = plano.querySelector(".delete-btn");

   
    btnEditar.addEventListener("click", () => {
      window.location.href = "/src/pages/institution/plans/editPlans.html";
    });

 
    btnExcluir.addEventListener("click", (event) => {
      let img = event.target; 
      const planList = document.querySelector (".plan-list");
      console.log (img.parentNode.parentNode.parentNode);
      let planItem = img.parentNode.parentNode.parentNode;
      planList.removeChild (planItem);
      //plano.remove(); 
    });
  });
});
