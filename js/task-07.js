const inputValue = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


inputValue.addEventListener("input", (event) => {
    text.style.fontSize = event.currentTarget.value + "px";
})
