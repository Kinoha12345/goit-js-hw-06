const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");


ingredients.map((element, index, array) => {
  const el1 = document.createElement('li');
  el1.textContent = element;
  list.append(el1);
})

