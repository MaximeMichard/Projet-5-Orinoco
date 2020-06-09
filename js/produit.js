const produitTeddie="teddies";
let container=document.querySelector("#produit");
const select= document.getElementById('select');

let url= document.location.href;
let url_string= url;
url=new URL(url_string);
let produit=url.searchParams.get("produit");



let request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let response = JSON.parse(this.responseText);
    
    let card= document.createElement('div');
    card.classList.add('card','card-produit'); 
    container.appendChild(card);

    let img= document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('class','image-produit');
    img.src= response.imageUrl;   
    card.appendChild(img);

    let cardBody= document.createElement('div');
    cardBody.classList.add('card-body');    
    card.appendChild(cardBody);

    let cardTitle= document.createElement('h');
    cardTitle.classList.add('card-title');
    cardTitle.textContent= response.name;
    cardBody.appendChild(cardTitle);

    let cardText= document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent= response.description; 
    cardBody.appendChild(cardText);

    let priceText=document.createElement('p');
    priceText.classList.add('card-text');
    priceText.textContent=response.price +'€';
    cardBody.appendChild(priceText);

    let select=document.createElement('select');
    select.classList.add('card-text');
    select.setAttribute('id','select');
    cardBody.appendChild(select);

    switch (produitTeddie) {
      case "teddies":
        response.colors.forEach(produit => {
          let optionproduit=document.createElement("option");
          document.querySelector("select").appendChild(optionproduit).textContent= produit;
        });
        break;
    
      default:
        console.log('Ok')
    }

    let btn = document.createElement('a');
    btn.classList.add('card-text');
    btn.setAttribute('id','ajoutpanier')
    btn.classList.add('btn','btn-primary'); 
    btn.textContent='Ajouter au panier'; 
    cardBody.appendChild(btn);

  let addCart= document.getElementById('ajoutpanier');
  addCart.onclick = function() {
    alert("Votre produit vient d'être ajouté au panier !")
};
  addCart.addEventListener('click', addProducts);

  let newCart = null;

  function createNewCart() {
      let storageCart = localStorage.getItem('cart');
      if (storageCart == null) {
          newCart = []
          console.log('Initialisation')
          console.log('Création du panier !');
      } else {
          newCart = JSON.parse(storageCart)
          console.log('Récupération')
      }

      localStorage.setItem('cart', JSON.stringify(newCart));

  }

  function products() {

      let productColor = select.options[select.selectedIndex].value;
      let productId = produit;
      let productFound = newCart.find(element => element.productId == productId && element.productColor == productColor);
      if (productFound == undefined) {
          let productQuantity = 1;
          let productPrice = response.price;
          let productName = response.name;
          newCart.push({ productId, productColor, productName, productPrice, productQuantity });
      } else {
          productFound.productQuantity++;
      }

      localStorage.setItem('cart', JSON.stringify(newCart));

      console.log('Ajout du produit dans le panier !');
      console.log(newCart)
  }


  function addProducts() {
      if (newCart == null) {
          createNewCart()
      }
      products();
  }

}

}; 
request.open('GET', 'http://localhost:3000/api/teddies/'+ produit);
request.send();



















