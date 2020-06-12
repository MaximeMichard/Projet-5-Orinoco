const storageItem = localStorage.getItem('item');
const productsLists = JSON.parse(storageItem);
const panierTableau = document.getElementById('panier__body');



if (storageItem != null) {

    for (let i = 0; i < productsLists.length; i++) {

        const price = productsLists[i].productPrice;
        
        let ligneTableau = panierTableau.insertRow(0);

        let colonneTableau1 = ligneTableau.insertCell(0);
        colonneTableau1.innerHTML += (productsLists[i].productName);

        let colonneTableau2 = ligneTableau.insertCell(1);
        colonneTableau2.innerHTML += `${price}€`;

        let colonneTableau3 = ligneTableau.insertCell(2);
        colonneTableau3.innerHTML += (productsLists[i].productColor);

      
        let colonneTableau4 = ligneTableau.insertCell(3);

        let button = document.createElement('button');
        button.innerHTML = `<i class = "fas fa-times"></i>`;

        colonneTableau4.appendChild(button);

        button.addEventListener('click', function() {
            panierTableau.deleteRow(i)
            productsLists.splice(i, 1);
            localStorage.setItem('item', JSON.stringify(productsLists));
            document.location.reload()
        });

        // Calcul Prix Total //

        let somme= 0;
        
        JSON.parse(localStorage.getItem('item')).forEach(( productsLists)=>{
            somme += productsLists.productPrice;
        });
        
        const totalPrice = document.getElementById('prix__total');
        totalPrice.innerHTML = "<p>Prix Total de votre panier</p>"+ somme +"€";
    }
}

//Verification Formulaire //
checkInput = () =>{
let mail= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let number= /[0-9]/;
let CharacterMagic= /[§!@#$%^&*().?":{}|<>]/;

let messageError= "";

let nom= document.getElementById('nom').value;
let prenom=document.getElementById('prenom').value;
let ville= document.getElementById('ville').value;
let adresse= document.getElementById('adresse').value;
let email=document.getElementById('email').value;
let tel=document.getElementById('Tel').Value;

//Test Input//

//Nom//

if(number.test(nom)== true || CharacterMagic.test(nom)== true || nom== "")
{
    messageError="Renseigne ton nom connard";
}
else{
    console.log('Ok');
}

//Prenom//
if(number.test(prenom)== true || CharacterMagic.test(prenom)==true || prenom== ""){
    messageError="Renseigne ton prenom connard";
}
else{
    console.log('Ok');
}
//Ville//
if(number.test(ville)==true|| CharacterMagic.test(ville)==true|| ville=="")
{
    messageError="Rensigne ta ville connard";
}
else{
    console.log('Ok');
}
//Adresse//
if(adresse=="" || CharacterMagic.test(adresse)==true){
    messageError="Renseigne bien ton adresse connard";
}
else{
    console.log('Ok');
}
//Mail//
if(mail.test(email)==false){
    messageError="Renseigne ton adresse connard";
}
else{
    console.log('Ok');
}
//Tel//
if(number.test(tel)==false || tel== ""){
    messageError="Renseigne ton numéro merci";
}
else{
    console.log('Ok');
}

if(messageError != ""){
    alert("Il faut"+ "\n" + messageError);
}
else{
     contact={
        Name: nom,
        Prenom: prenom,
        Ville: ville,
        Adresse: adresse,
        Mail: email,
        Tel: tel
    };
    return contact;
    }
}

let contact;
let products =[];
let url= "http://localhost:3000/api/teddies/order";

let request= new XMLHttpRequest();

request.onload=function(){
    if(this.readyState== XMLHttpRequest.DONE && this.status == 200){
        localStorage.setItem("order",this.responseText);
        
        resolve(JSON.parse(this.responseText));
    }
};
request.open("POST",url);
request.setRequestHeader("Content-Type","application/json");

let commander= document.getElementById("form_1");
commander.addEventListener("submit",(event) => {
    window.location= "../html/commande.html";
    event.preventDefault();
});


