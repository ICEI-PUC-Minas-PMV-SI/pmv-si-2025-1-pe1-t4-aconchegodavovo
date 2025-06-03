const btnLogout = document.getElementById("btnLogout");
const modalLogout = document.getElementById("modalLogout");
const btnCloseLogout = document.getElementById("btnCloseLogout");

  btnLogout.onclick = function (e) {
    e.preventDefault();
    modalLogout.showModal();
  }

  btnCloseLogout.onclick = function () {
    modalLogout.close();
  }