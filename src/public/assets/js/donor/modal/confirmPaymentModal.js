const btnOpenConfirm = document.getElementById("btnOpenConfirm")
const confirmModal = document.getElementById("confirmModal")
const btnExitConfirm = document.getElementById("btnExitConfirm")

btnOpenConfirm.onclick = function () {
    confirmModal.showModal()
}

btnExitConfirm.onclick = function () {
    confirmModal.close()
}