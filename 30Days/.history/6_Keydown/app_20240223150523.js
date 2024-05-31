var eKey = document.querySelector('.card.key p:first-chid')
var eLocation = document.querySelector('.card .location p:first-chid')
var eWidth = document.querySelector('.card.width p:first-chid')
var eCode = document.querySelector('.card.code p:first-chid')


var alert = document.querySelector('.alert')
var box = document.querySelector('.box')


document.addEventListener('keydown', e => {
    console.log(e);
    alert.classList.add('hide');
    box.classList.remove('hide')
})
