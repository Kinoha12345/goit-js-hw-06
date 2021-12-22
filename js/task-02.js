const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");


const markup = ingredients.map((element, index, array) => {
  const el1 = document.createElement('li');
  el1.textContent = element;
  return el1;
})


// 
list.append(...markup)