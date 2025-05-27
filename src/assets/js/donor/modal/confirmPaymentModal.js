const button = document.getElementById("btnOpenConfirm")
const modal = document.getElementById("confirmModal")
const buttonClose = document.getElementById("buttonExitModal")

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}