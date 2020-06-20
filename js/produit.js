const produitTeddie = "teddies";

let container = document.querySelector("#produit");

const select = document.getElementById('select');

let url = document.location.href;

let url_string = url;

url = new URL(url_string);

let produit = url.searchParams.get("produit");

let request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let response = JSON.parse(this.responseText);

    let card = document.createElement('div');
    card.classList.add('row');
    container.appendChild(card);

    let divimg = document.createElement('div');
    divimg.classList.add('col-lg-6');
    card.appendChild(divimg);

    let img = document.createElement('img');
    img.classList.add('img-thumbnail');
    img.src = response.imageUrl;
    divimg.appendChild(img);

    let cardBody = document.createElement('div');
    cardBody.classList.add('col-lg-6');
    card.appendChild(cardBody);

    let cardTitle = document.createElement('h2');
    cardTitle.textContent = response.name;
    cardBody.appendChild(cardTitle);

    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = response.description;
    cardBody.appendChild(cardText);

    let priceText = document.createElement('p');
    priceText.classList.add('card-text');
    priceText.textContent = 'Prix : ' + response.price + '€';
    cardBody.appendChild(priceText);

    let content = document.createElement('p');
    content.classList.add('perso');
    content.innerHTML = 'Personnalisé votre produit :';
    cardBody.appendChild(content);

    let select = document.createElement('select');
    select.classList.add('card-text');
    select.setAttribute('id', 'select');
    cardBody.appendChild(select);

    switch (produitTeddie) {
      case "teddies":
        response.colors.forEach(produit => {
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

    function products() {

      let productColor = select.options[select.selectedIndex].value;
      let productId = produit;
      let productFound = newItem.find(element => element.productId == productId && element.productColor == productColor);
      if (productFound == undefined) {
        let productPrice = response.price;
        let productName = response.name;
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


    function addProducts() {
      if (newItem == null) {
        createItem()
      }
      products();
    }

  }

};
request.open('GET', 'http://localhost:3000/api/teddies/' + produit);
request.send();