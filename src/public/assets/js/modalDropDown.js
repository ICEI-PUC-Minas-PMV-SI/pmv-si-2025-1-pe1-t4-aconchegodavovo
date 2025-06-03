const btnLogout = document.getElementById("btnLogout");
const modalLogout = document.getElementById("cancel-modal");
const btnCloseLogout = document.getElementById("buttonExitModal");

  btnLogout.onclick = function (e) {
    e.preventDefault();
    modalLogout.showModal();
  }

  btnCloseLogout.onclick = function () {
    modalLogout.close();
  }