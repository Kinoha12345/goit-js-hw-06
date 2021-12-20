const buttonP = document.querySelector('button[data-action="increment"]');
const buttonM = document.querySelector('button[data-action="decrement"]');
console.log(buttonM);

const value = document.querySelector('#value')
console.log(value.textContent);
let value1 = (value.textContent = 0);
buttonP.addEventListener("click", () => {
    value.textContent =  value1 += 1;

});

buttonM.addEventListener("click", () => {
    value.textContent =  value1 -= 1;

});