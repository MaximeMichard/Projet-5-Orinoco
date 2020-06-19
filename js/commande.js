let container = document.querySelector('.orderID');
let total = document.querySelector('.prixTotal');
let name = document.querySelector('.nom')

const data = JSON.parse(localStorage.getItem('order'));

container.textContent = data.orderId

const prixTotal = JSON.parse(localStorage.getItem('prix'));

total.textContent = prixTotal + '€';

let nom = JSON.parse(localStorage.getItem('order'));

name.textContent = nom.contact.firstName;

