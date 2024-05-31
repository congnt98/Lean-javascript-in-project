var eKey = document.querySelector('.card.key p:first-child')
var eLocation = document.querySelector('.card.location p:first-child')
var eWidth = document.querySelector('.card.width p:first-child')
var eCode = document.querySelector('.card.code p:first-child')


var alert = document.querySelector('.alert')
var box = document.querySelector('.box')


document.addEventListener('keydown', e => {
    eKey.innerText = e.key
    eLocation.innerText = e.key
    eWidth.innerText = e.key
    eCode.innerText = e.code

    alert.classList.add('hide');
    box.classList.remove('hide')
})