//Variable stocker les informations de l'API ainsi que la page choisi//
const main = document.getElementById('main');
let url = document.location.href;
//Requête Ajax en fonction de l'URL//
if (url.search('index.html') != -1) {
  get('http://localhost:3000/api/teddies').then(function(data){ 
    console.log(data);
    //Boucle pour création des 5 éléments //
    for (let index = 0; index < data.length; index++) {
      let card = buildCard(data[index], main);
      main.appendChild(card);
    }
  })
}
//Build Card// 
const buildCard = (item, container) => {

  let card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);

  let img = document.createElement('img');
  img.classList.add('card-img-top');
  img.src = item.imageUrl;
  card.appendChild(img);

  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);

  let cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerHTML = item.name;
  cardBody.appendChild(cardTitle);

  let cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerHTML = item.description;
  cardBody.appendChild(cardText);

  let btn = document.createElement('a');
  btn.setAttribute('href', './html/produit.html?produit=' + item._id);
  btn.classList.add('btn', 'btn-primary');
  btn.innerHTML = 'Voir le produit';
  cardBody.appendChild(btn);

  return card;
}