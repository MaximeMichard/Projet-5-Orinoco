const storageItem = localStorage.getItem('item');
const productsLists = JSON.parse(storageItem);
let container= document.querySelector('.orderID');
let total= document.querySelector('.prixTotal');
let name= document.querySelector('.nom')

console.log(productsLists);

const data = JSON.parse(localStorage.getItem('order'));

container.textContent=  data.orderId

console.log(data);

const prixTotal= JSON.parse(localStorage.getItem('prix'));

total.textContent= prixTotal + '€'; 
console.log(prixTotal);

let nom= JSON.parse(localStorage.getItem('order'));

name.textContent= nom.contact.firstName; 

console.log(nom); 

