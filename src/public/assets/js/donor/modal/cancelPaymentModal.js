const buttonOpenModal = document.getElementById("buttonOpenModal")
const cancelModal = document.getElementById("cancel-modal")
const buttonExitModal = document.getElementById("buttonExitModal")

buttonOpenModal.onclick = function () {
    cancelModal.showModal()
}

buttonExitModal.onclick = function () {
    cancelModal.close()
}