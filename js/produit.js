//Variable //
let container = document.querySelector("#produit");
const select = document.getElementById('select');
const produitTeddie = "teddies";
let url = document.location.href;
let url_string = url;
url = new URL(url_string);
let produit = url.searchParams.get("produit");
//Requete AJAX//
get('http://localhost:3000/api/teddies/'+ produit).then(function(data){ 
    console.log(data);
    //Construction des cards en fonction de l'ID du produit//
    let card = document.createElement('div');
    card.classList.add('row');
    container.appendChild(card);

    let divimg = document.createElement('div');
    divimg.classList.add('col-lg-6');
    card.appendChild(divimg);

    let img = document.createElement('img');
    img.classList.add('img-thumbnail');
    img.src = data.imageUrl;
    divimg.appendChild(img);

    let cardBody = document.createElement('div');
    cardBody.classList.add('col-lg-6');
    card.appendChild(cardBody);

    let cardTitle = document.createElement('h2');
    cardTitle.textContent = data.name;
    cardBody.appendChild(cardTitle);

    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = data.description;
    cardBody.appendChild(cardText);

    let priceText = document.createElement('p');
    priceText.classList.add('card-text');
    priceText.textContent = 'Prix : ' + data.price + '€';
    cardBody.appendChild(priceText);

    let content = document.createElement('p');
    content.classList.add('perso');
    content.innerHTML = 'Personnalisé votre produit :';
    cardBody.appendChild(content);

    let select = document.createElement('select');
    select.classList.add('card-text');
    select.setAttribute('id', 'select');
    cardBody.appendChild(select);
    //Boucle pour création des options(couleur)des Nounours//
    switch (produitTeddie) {
      case "teddies":
        data.colors.forEach(produit => {
          let optionproduit = document.createElement("option");
          document.querySelector("select").appendChild(optionproduit).textContent = produit;
        });
        break;
    }

    let btn = document.createElement('a');
    btn.classList.add('card-text');
    btn.setAttribute('id', 'ajoutpanier')
    btn.classList.add('btn', 'btn-primary');
    btn.textContent = 'Ajouter au panier';
    cardBody.appendChild(btn);

    let addCart = document.getElementById('ajoutpanier');
    addCart.onclick = function () {
      alert("Ajouter au panier !")
    };

    //Bouton Ajouter produit //

    addCart.addEventListener('click', addProducts);

    let newItem = null;
    //Stockage des Informations dans le local Storage//
    function createItem() {
      let storageItem = localStorage.getItem('item');
      if (storageItem == null) {
        newItem = [];
        console.log('Initialisation');
        console.log('Création du panier !');
      } else {
        newItem = JSON.parse(storageItem)
        console.log('Récupération')
      }

      localStorage.setItem('item', JSON.stringify(newItem));
      console.log(newItem);
      console.log(localStorage.getItem('item'));

    }
    //Création des informations dans le localStorage//
    function products() {

      let productColor = select.options[select.selectedIndex].value;
      let productId = produit;
      let productFound = newItem.find(element => element.productId == productId && element.productColor == productColor);
      if (productFound == undefined) {
        let productPrice = data.price;
        let productName = data.name;
        newItem.push({
          productId,
          productColor,
          productName,
          productPrice,
        });
      }
      localStorage.setItem('item', JSON.stringify(newItem));

      console.log('Ajout du produit dans le panier !');
      console.log(newItem)
    }

    //Ajout des produits//
    function addProducts() {
      if (newItem == null) {
        createItem()
      }
      products();
    }
});