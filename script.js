let btnSubmit = document.querySelector('#submit')

let enterPW = document.querySelector('#enter-password')

let confirmPW = document.querySelector('#confirm-password')

let noMatch = document.querySelector('.no-match')


btnSubmit.addEventListener("click", function() {
    if (enterPW.textContent != confirmPW.textContent) {
        noMatch.textContent = "No!"
    }
})