const form = document.querySelector('.login-form');
// const input = document.querySelectorAll('input');
// const inputEm = input[0];
// const inputPas = input[1];
// const button = document.querySelector('button');

form.addEventListener('submit', (event) => {
event.preventDefault();
const { email, password } = event.currentTarget;

if(email.value === "" || password.value === "") {
    return "Одно из полей пустое, пожалуйста заполните его!!!"
}

const user = {
    elements: {
        email: email.value,
        password: password.value
    }
}

console.log(user.elements);
event.currentTarget.reset();
})

