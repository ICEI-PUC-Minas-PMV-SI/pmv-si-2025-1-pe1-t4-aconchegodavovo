const btnCancel = document.getElementById("buttonOpenModal")
const modalCancel = document.getElementById("cancel-modal")
const btnCloseCancel = document.getElementById("buttonExitModal")

btnCancel.onclick = function () {
    modalCancel.showModal()
}

btnCloseCancel.onclick = function () {
    modalCancel.close()
}