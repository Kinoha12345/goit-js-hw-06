const textInput = document.querySelector("#validation-input");

textInput.addEventListener("input", (event) => {
    if(event.currentTarget.value.length > 6) {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    } else {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    }
})