const el1 = document.querySelectorAll('.item');

 
console.log(`Number of categories: ${el1.length}`);
const el2 = document.querySelectorAll('.item>h2');
const el3 = document.querySelectorAll('.item>ul');

const len2 = el3[0].getElementsByTagName('li').length;

for(let i = 0; i < el1.length; i++) {
console.log(`Category: ${el2[i].textContent}`);
console.log(`Elements: ${el3[i].getElementsByTagName('li').length}`);
}