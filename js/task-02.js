const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

// const el1 = document.createElement('li');


// el1.textContent = ingredients[0];
// list.append(el1);

for(let i = 0; i < ingredients.length; i++) {
  const el1 = document.createElement('li');
  el1.textContent = ingredients[i];
  list.append(el1);
}
