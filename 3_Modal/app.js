var btnOpen = document.querySelector('.btn-modal-open')
var modal = document.querySelector('.modal')
var btnClose = document.querySelector('.modal__header i')
var iconClose = document.querySelector('.modal__footer .btn-close')

function toggleModal() {
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)

modal.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        toggleModal();
    }
})


