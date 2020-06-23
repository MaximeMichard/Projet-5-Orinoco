//Recupération & Affichage Order ID//
let container = document.querySelector('.orderID');
const data = JSON.parse(localStorage.getItem('order'));
container.textContent = data.orderId
console.log(data);
//Recupération & Affichage Prix TOTAL//
let total = document.querySelector('.prixTotal');
const prixTotal = JSON.parse(localStorage.getItem('prix'));
total.textContent = prixTotal + '€';
//Recupération & Affichage Prénom Formulaire//
let name = document.querySelector('.nom');
let nom = JSON.parse(localStorage.getItem('order'));
name.textContent = nom.contact.firstName;