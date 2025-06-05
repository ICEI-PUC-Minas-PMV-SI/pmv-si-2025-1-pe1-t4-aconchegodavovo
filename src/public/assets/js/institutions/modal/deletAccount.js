const btnDeletAccount = document.getElementById("btnDeletAccount");
const modalDeletAccount = document.getElementById("modalDeletAccount");
const btnCloseDeletAccount = document.getElementById("btnCloseDeletAccount");

btnDeletAccount.onclick = function () {
    modalDeletAccount.showModal();
}

btnCloseDeletAccount.onclick = function () {
    modalDeletAccount.close();
}