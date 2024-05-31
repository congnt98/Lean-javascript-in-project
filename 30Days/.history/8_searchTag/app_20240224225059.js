var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var btnSubmit = document.querySelector('.btn-submit')

function showError() {

    let parent = input.parentElement
    let small = parent.querySelector('.small')

    parent.classList.add('error')
    small.innerText = message
}

function showError() {

    let parent = input.parentElement
    let small = parent.querySelector('.small')

    parent.classList.add('error')
    small.innerText = message
}

showError(username, 'loi')