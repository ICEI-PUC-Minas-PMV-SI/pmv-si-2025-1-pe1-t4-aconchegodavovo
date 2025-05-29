const btnConfirm = document.getElementById("btnOpenConfirm")
const modalConfirm = document.getElementById("confirmModal")
const btnCloseConfirm = document.getElementById("btnExitConfirm")

btnConfirm.onclick = function () {
    modalConfirm.showModal()
}

btnCloseConfirm.onclick = function () {
    modalConfirm.close()
}