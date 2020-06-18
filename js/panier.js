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
function achat(event) {
    
    let mail= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let number= /[0-9]/;
    let CharacterMagic= /[§!@#$%^&*().?":{}|<>]/;

    let messageError= "";


//Test Input//

//Nom//

if(number.test(nom.value)== true || CharacterMagic.test(nom.value)== true || nom== "")
{
    messageError="Renseigne ton nom ";
    
}
//Prenom//
else if(number.test(prenom.value)== true || CharacterMagic.test(prenom.value)==true || prenom== ""){
    messageError="Renseigne ton prenom ";
   
}
//Ville//
else if(number.test(ville.value)==true|| CharacterMagic.test(ville.value)==true|| ville=="")
{
    messageError="Rensigne ta ville ";
   
}
//Adresse//
else if(adresse=="" || CharacterMagic.test(adresse.value)==true){
    messageError="Renseigne bien ton adresse ";    
}
//Mail//
else if(mail.test(email.value)==false){
    messageError="Renseigne ton adresse ";
   
}
//Tel//
else if(number.test(tel.value)==false || tel== ""){
    messageError="Renseigne ton numéro merci";
 
}

else if(messageError != ""){
    alert("Il faut"+ "\n" + messageError);  
}


    else{
        /* let request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                let confirmation = JSON.parse(this.responseText);
                localStorage.setItem('order', JSON.stringify(confirmation));     
                window.location.href = "../html/commande.html";
                }
            };
        request.open("POST", "http://localhost:3000/api/teddies/order");
        request.setRequestHeader("Content-Type", "application/json");
        request.send(achat); */
    }      
}

function sendData(panier) {
    return new Promise (function(resolve, reject){
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
          if (this.readyState == XMLHttpRequest.DONE) {
            resolve('ok');
          }
          else{
              reject(this);
          }
        };
    request.open("POST", "http://localhost:3000/api/teddies/order");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(panier));
    })
}

let envoi = document.getElementById('form_1');
envoi.addEventListener("submit", function(e){
    if( productsLists== null){
        alert('Votre panier est vide');
    }

    /* let products= [];

    JSON.parse(localStorage.getItem("item")).forEach((productsLists) =>{
    	products.push(productsLists.productId);
    }); */
    

    let contact={
        "firtName": document.getElementById('prenom').value ,
        "lastName": document.getElementById('nom').value,
        "address": document.getElementById('adresse').value,
        "city": document.getElementById('ville').value,
        "email": document.getElementById('email').value,
    }

    let objet= {
        contact,
        "products" : ["5beaa8bf1c9d440000a57d94"],
    }


    e.preventDefault();

    console.log(JSON.stringify(objet)); 

    sendData(objet).then(function(data){
        console.log(data);
    }).catch(function(error){
        console.log(error);
    })
    ; 
});








     
