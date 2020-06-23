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

        button.addEventListener('click', function () {
            panierTableau.deleteRow(i)
            productsLists.splice(i, 1);
            localStorage.setItem('item', JSON.stringify(productsLists));
            document.location.reload()
        });

        // Calcul Prix Total //

        let somme = 0;

        JSON.parse(localStorage.getItem('item')).forEach((productsLists) => {
            somme += productsLists.productPrice;
        });

        const totalPrice = document.getElementById('prix__total');
        totalPrice.innerHTML = "<p>Prix Total de votre panier</p>" + somme + "€";
        const prix = localStorage.setItem('prix', JSON.stringify(somme));

    }
}
checkInput = () => {
    let prenom = document.getElementById('prenom').value;
    let nom = document.getElementById('nom').value;
    let adresse = document.getElementById('adresse').value;
    let ville = document.getElementById('ville').value;
    let email = document.getElementById('email').value;
    //Verification Formulaire //

    let mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let number = /[0-9]/;
    let CharacterMagic = /[§!@#$%^&*().?":{}|<>]/;

    let messageError = "";
    //Test Input//

    //Nom//
    if (number.test(nom.value) == true || CharacterMagic.test(nom.value) == true || nom == "") {
        messageError = "Renseigne ton nom ";
    }
    //Prenom//
    else if (number.test(prenom.value) == true || CharacterMagic.test(prenom.value) == true || prenom == "") {
        messageError = "Renseigne ton prenom ";
    }
    //Ville//
    else if (number.test(ville.value) == true || CharacterMagic.test(ville.value) == true || ville == "") {
        messageError = "Rensigne ta ville ";
    }
    //Adresse//
    else if (adresse == "" || CharacterMagic.test(adresse.value) == true) {
        messageError = "Renseigne bien ton adresse ";
    }
    //Mail//
    else if (mail.test(email.value) == false) {
        messageError = "Renseigne ton adresse ";
    }
    //MessageError//
    else if (messageError != "") {
        alert("Il faut" + "\n" + messageError);
    }
}
verifPanier= () => {
  //Vérifier qu'il y ai au moins un produit dans le panier
  let etatPanier = JSON.parse(localStorage.getItem("item"));
  //Si le panier est vide ou null (suppression localStorage par)=>alerte
  if (etatPanier == null) {
    //Si l'utilisateur à supprimer son localStorage etatPanier sur la page basket.html et qu'il continue le process de commande
    alert(
      "Il y a eu un problème avec votre panier. Veuillez recharger la page"
    );
    return false;
  } else if (etatPanier.length < 1 || etatPanier == null) {
    alert("Votre panier est vide");
    return false;
  } else {
    console.log("Le panier n'est pas vide");
    return true;
  }  
}

let envoi = document.getElementById('form_1');
envoi.addEventListener("submit", function (e) {

    /* e.preventDefault();
    if(checkInput() != null && verifPanier() == true){
        console.log('Error envoi');
    } */

    let products = [];

    JSON.parse(localStorage.getItem("item")).forEach((productsLists) => {
        products.push(productsLists.productId);
    });


    let contact = {
        "firstName": document.getElementById('prenom').value,
        "lastName": document.getElementById('nom').value,
        "address": document.getElementById('adresse').value,
        "city": document.getElementById('ville').value,
        "email": document.getElementById('email').value,
    }

    let objet = {
        contact,
        products,
    }


    e.preventDefault();

    console.log(JSON.stringify(objet));

    post("http://localhost:3000/api/teddies/order", objet).then(function (data) {
        localStorage.setItem('order', JSON.stringify(data));
        console.log(data);
        window.location = "../html/commande.html";
    })/* .catch(catchError);
    let catchError = function (e) {
        console.error(e);
    } */
});