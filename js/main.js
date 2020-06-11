const main= document.getElementById('main'); 


let url= document.location.href;

if(url.search('produit.html') != -1 ){
    console.log('produit');
}
else if(url.search('index.html')!= -1 ){
  let request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let response = JSON.parse(this.responseText);
    console.log(response); 
    for (let index = 0; index < response.length ; index++) {
      let card = buildCard(response[index], main);
      main.appendChild(card);
    }
  }
};

request.open('GET', 'http://localhost:3000/api/teddies');
request.send();
}

//Build Card// 

const buildCard = (item, container) => {

    let card= document.createElement('div');
    card.classList.add('card'); 
    container.appendChild(card);

    let img= document.createElement('img');
    img.classList.add('card-img-top');
    img.src= item.imageUrl;   
    card.appendChild(img);

    let cardBody= document.createElement('div');
    cardBody.classList.add('card-body');    
    card.appendChild(cardBody);

    let cardTitle= document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML= item.name;
    cardBody.appendChild(cardTitle);

    let cardText= document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerHTML= item.description; 
    cardBody.appendChild(cardText);

    let btn = document.createElement('a');
    btn.setAttribute('href','./html/produit.html?produit='+item._id);
    btn.classList.add('btn','btn-primary'); 
    btn.innerHTML='Voir le produit'; 
    cardBody.appendChild(btn);
    
    return card;
}















