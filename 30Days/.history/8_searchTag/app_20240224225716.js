var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var btnSubmit = document.querySelector('.btn-submit')
var form = document.querySelector('form')


function showError(input, message) {

    let parent = input.parentElement
    let small = parent.querySelector('.small')

    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {

    let parent = input.parentElement
    let small = parent.querySelector('.small')

    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput) {
    listInput.forEach(input => {
        input.value = input.value.trim()
        if (!input.value) {
            showError(input,'khong de trong')
        }
    });
}

form.addEventListener('submit', function (e) {
    email.preventDefault
    checkEmptyError(username, email, password, confirmPassword)
})