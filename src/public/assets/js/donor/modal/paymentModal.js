// Modal cancelamento do pagamento
const btnCancel = document.getElementById("btnCancel");
const modalCancel = document.getElementById("modalCancel");
const btnCloseCancel = document.getElementById("btnCloseCancel");

btnCancel.onclick = function () {
    modalCancel.showModal();
}

btnCloseCancel.onclick = function () {
    modalCancel.close();
}

// Modal confirmação do pagamento
const btnConfirm = document.getElementById("btnConfirm");
const modalConfirm = document.getElementById("modalConfirm");
const btnCloseConfirm = document.getElementById("btnCloseConfirm");

btnConfirm.onclick = function () {
    modalConfirm.showModal();
}

btnCloseConfirm.onclick = function () {
    modalConfirm.close();
}