const form = document.querySelector('.login-form');
const input = document.querySelectorAll('input');
const inputEm = input[0];
const inputPas = input[1];
const button = document.querySelector('button');

form.addEventListener('submit', (event) => {
event.preventDefault();
const {
    elements: {inputEm, inputPas},
} = event.currentTarget;

if(inputEm.value === "" || inputPas.value === "") {
    return "Одно из полей пустое, пожалуйста заполните его!!!"
}
console.log(
    `{Email: ${inputEm.value}, Password: ${inputPas.value}}`
);
event.currentTarget.reset();
})

