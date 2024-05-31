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

function checkEmailError(email) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)
    ) {
        showSuccess(input)
    } else {
        showError(input, 'Email invalid')
    }

    return isEmailError
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()
        if (!input.value) {
            isEmptyError = true;
            showError(input, 'khong de trong')
        }
        else {
            showSuccess(input)
        }
    });

    return isEmptyError
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim()
    if (input.value.length < min) {
        showError(input, `phai co it nhat ${min} ky tu`)
        return true
    }
    if (input.value.length > max) {
        showError(input, `khong duoc qua ${min} ky tu`)
        return true

    }

    showSuccess(input)
    return false


}

form.addEventListener('submit', function (e) {
    email.preventDefault
    let isEmptyError = checkEmptyError(username, email, password, confirmPassword)
    let isEmailError = checkEmailError(email)
    let isUserLength = checkEmailError(email)


})