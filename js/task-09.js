function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorText = document.querySelector(".color");


button.addEventListener("click", () => {
const color = getRandomHexColor();
body.style.backgroundColor = color;
colorText.textContent = color;
});



