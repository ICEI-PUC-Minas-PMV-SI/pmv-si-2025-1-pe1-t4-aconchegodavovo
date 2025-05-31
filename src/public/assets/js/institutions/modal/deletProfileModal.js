const btnDeletProfile = document.getElementById("btnDeletProfile");
const modalDeletProfile = document.getElementById("modalDeletProfile");
const btnCloseDeletProfile = document.getElementById("btnCloseDeletProfile");

btnDeletProfile.onclick = function () {
    modalDeletProfile.showModal();
}

btnCloseDeletProfile.onclick = function () {
    modalDeletProfile.close();
}