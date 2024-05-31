var eKey = document.querySelector('.card.key p:first-child')
var eLocation = document.querySelector('.card.location p:first-child')
var eWidth = document.querySelector('.card.width p:first-child')
var eCode = document.querySelector('.card.code p:first-child')
var result = document.querySelector('.resuft')



var alert = document.querySelector('.alert')
var box = document.querySelector('.box')


document.addEventListener('keydown', e => {
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWidth.innerText = e.width
    eCode.innerText = e.code

    alert.classList.add('hide');
    box.classList.remove('hide')
})
