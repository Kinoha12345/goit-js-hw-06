const textInput = document.querySelector("#validation-input");



function addRemove(add, remove) {
    textInput.classList.add(add);
    textInput.classList.remove(remove);
}
textInput.addEventListener("input", (event) => {
    if(event.currentTarget.value.length === +textInput.dataset.length) {
        addRemove("invalid", "valid")
    } else {
        addRemove("valid", "invalid")
    }   
})