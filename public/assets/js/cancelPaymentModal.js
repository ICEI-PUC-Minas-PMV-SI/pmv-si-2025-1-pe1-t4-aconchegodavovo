const button = document.getElementById("buttonOpenModal")
const modal = document.querySelector("dialog")
const buttonClose = document.getElementById("buttonExitModal")

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}