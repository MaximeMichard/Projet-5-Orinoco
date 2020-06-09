JS DE Flo

let response = [];
for(let index = 0; response.length > index; index++){
    let card = document.querySelector();
}
const cardContainer = document.getElementById('card-container');
response.forEach(item, index => {
    let card = buildCard(item);
    cardContainer.appendChild(card);
});
const buildCard = item => {
    //Parent div
    let card = document.createElement('div');
    card.classList.add('card');
    //Img child
    let imgElement = document.createElement('img');
    card.appendChild(imgElement);
    imgElement.setAttribute('src', item.imageUrl);
    //Div child
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    //h5 child
    let subTitle = document.createElement('h5');
    subTitle.classList.add('card-title');
    cardBody.appendChild(subTitle);
    card.appendChild(cardBody);
};


JS 

/*         document.querySelector('.produit').innerHTML += "<p>"+ response[index].name + "</p> <img src=\"" + response[index].imageUrl +"\">";
              
        let img=document.querySelector('img');
        img.src= response[0].imageUrl;
        document.querySelector('.card-text').innerHTML = response[0].description; 
        document.querySelector('.card-title').innerHTML = response[0].name;

        let img1=document.querySelector('.card1 img');
        img1.src=response[1].imageUrl;
        document.querySelector('.card1 .card-text').innerHTML=response[1].description; 
        document.querySelector('.card1 .card-title').innerHTML=response[1].name;
              
        let img2=document.querySelector('.card2 img');
        img2.src=response[2].imageUrl;
        document.querySelector('.card2 .card-text').innerHTML=response[2].description; 
        document.querySelector('.card2 .card-title').innerHTML=response[2].name; 

        let img3=document.querySelector('.card3 img');
        img3.src=response[3].imageUrl;
        document.querySelector('.card3 .card-text').innerHTML=response[3].description; 
        document.querySelector('.card3 .card-title').innerHTML=response[3].name; 

        let img4=document.querySelector('.card4 img');
        img4.src=response[4].imageUrl;
        document.querySelector('.card4 .card-text').innerHTML=response[4].description; 
        document.querySelector('.card4 .card-title').innerHTML=response[4].name; 

            let para= document.createElement('p');
             para.innerHTML= response[index].name;
             document.querySelector('.produit').appendChild(para);

          let img= document.createElement('img');
          img.src= response[index].imageUrl;

          document.querySelector('.produit').appendChild(img);  */
          
HTML

<div class="card" style="width: 18rem;">
<img class="card-img-top" src="" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title"></h5>
  <p class="card-text"></p>
  <a href="#" class="btn btn-primary">Ajouter au panier</a>
</div>
</div>
<div class="card1" style="width: 18rem;">
<img class="card-img-top" src="" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title"></h5>
  <p class="card-text"></p>
  <a href="#" class="btn btn-primary">Ajouter au panier</a>
</div>
</div>
<div class="card2" style="width: 18rem;">
<img class="card-img-top" src="" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title"></h5>
  <p class="card-text"></p>
  <a href="#" class="btn btn-primary">Ajouter au panier</a>
</div>
</div>
<div class="card3" style="width: 18rem;">
<img class="card-img-top" src="" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title"></h5>
  <p class="card-text"></p>
  <a href="#" class="btn btn-primary">Ajouter au panier</a>
</div>
</div>
<div class="card4" style="width: 18rem;">
<img class="card-img-top" src="" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title"></h5>
  <p class="card-text"></p>
  <a href="#" class="btn btn-primary">Ajouter au panier</a>
</div>
</div>

JS produit

const main= document.getElementById('produit');

let url= document.location.href;

if(url.search('5243') != -1 ){

let request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let response = JSON.parse(this.responseText);
    
    var url_string = "http://127.0.0.1:5501/html/produit.html?produit=5be9c8541c9d440000665243&nom=Norbert&color=Tan,Chocolate,Black,White&price=2900"; //window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("price");
    console.log(c); 


    let card= document.createElement('div');
    card.classList.add('card'); 
    produit.appendChild(card);

    let img= document.createElement('img');
    img.classList.add('card-img-top');
    img.src= response[0].imageUrl;   
    card.appendChild(img);

    let cardBody= document.createElement('div');
    cardBody.classList.add('card-body');    
    card.appendChild(cardBody);

    let cardTitle= document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML= response[0].name;
    cardBody.appendChild(cardTitle);

    let cardText= document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerHTML= response[0].description; 
    cardBody.appendChild(cardText);

    let price=document.createElement('p');
    price.innerHTML=response[0].price + "€"; 
    price.style.margin="10px 0px"; 
    cardBody.appendChild(price);

    let select= document.createElement('select');
    select.style.margin='10px 10px';
    cardBody.appendChild(select);

    for (let index = 0; index < response.length; index++) { 
      let x= document.querySelector('select');
      let option= document.createElement('option');
      option.innerHTML =  response[0].colors[index];
      x.add(option);
    }

    let btn = document.createElement('a');
    /* btn.setAttribute('href','../html/panier.html?panier='+response[0]._id); */
    btn.classList.add('btn','btn-primary'); 
    btn.innerHTML='Ajouter au panier'; 
    cardBody.appendChild(btn);

    btn.addEventListener('click', function(){

      let request = new XMLHttpRequest();

      request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          let response = JSON.parse(this.responseText);
          
          let card= document.createElement('div');
          card.classList.add('card'); 
          main.appendChild(card);
      
          let img= document.createElement('img');
          img.classList.add('card-img-top');
          img.src= response[0].imageUrl;   
          card.appendChild(img);
      
          let cardBody= document.createElement('div');
          cardBody.classList.add('card-body');    
          card.appendChild(cardBody);
      
          let cardTitle= document.createElement('h5');
          cardTitle.classList.add('card-title');
          cardTitle.innerHTML= response[0].name;
          cardBody.appendChild(cardTitle);
      
          let price=document.createElement('p');
          price.innerHTML=response[0].price + "€"; 
          price.style.margin="10px 0px"; 
          cardBody.appendChild(price);
      
          let select= document.createElement('select');
          select.style.margin='10px 10px';
          cardBody.appendChild(select);
      
          for (let index = 0; index < response.length; index++) { 
            let x= document.querySelector('select');
            let option= document.createElement('option');
            option.innerHTML =  response[0].colors[index];
            x.add(option);
          }
      
          let btn = document.createElement('a');
          /* btn.setAttribute('href','../html/panier.html?panier='+response[0]._id); */
          btn.classList.add('btn','btn-primary'); 
          btn.innerHTML='Acheter'; 
          cardBody.appendChild(btn);
         
        }
      };
      
      request.open('GET', 'http://localhost:3000/api/teddies');
      request.send();
    });
   
  }
  
};

request.open('GET', 'http://localhost:3000/api/teddies');
request.send();
}
else if(url.search('57d94') != -1 ){

    let request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
    
        let card= document.createElement('div');
        card.classList.add('card'); 
        produit.appendChild(card);
    
        let img= document.createElement('img');
        img.classList.add('card-img-top');
        img.src= response[1].imageUrl;   
        card.appendChild(img);
    
        let cardBody= document.createElement('div');
        cardBody.classList.add('card-body');    
        card.appendChild(cardBody);
    
        let cardTitle= document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerHTML= response[1].name;
        cardBody.appendChild(cardTitle);
    
        let cardText= document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerHTML= response[1].description; 
        cardBody.appendChild(cardText);
    
        let price=document.createElement('p');
        price.innerHTML=response[1].price + "€"; 
        price.style.margin="10px 0px"; 
        cardBody.appendChild(price);

        let select= document.createElement('select');
        select.style.marginBottom='15px';
        cardBody.appendChild(select);

        for (let index = 0; index < response.length; index++) { 
          let x= document.querySelector('select');
          let option= document.createElement('option');
          option.innerHTML =  response[1].colors[index];
          x.add(option);
        }
      
        let btn = document.createElement('a');
        btn.setAttribute('href','../html/panier.html?panier='+response[1]._id);
        btn.classList.add('btn','btn-primary'); 
        btn.innerHTML='Ajouter au panier'; 
        cardBody.appendChild(btn);

       
        
      }
    };
    
    request.open('GET', 'http://localhost:3000/api/teddies');
    request.send();
    }
    else if(url.search('57d95') != -1 ){

        let request = new XMLHttpRequest();
        
        request.onreadystatechange = function() {
          if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
        
            let card= document.createElement('div');
            card.classList.add('card'); 
            produit.appendChild(card);
        
            let img= document.createElement('img');
            img.classList.add('card-img-top');
            img.src= response[2].imageUrl;   
            card.appendChild(img);
        
            let cardBody= document.createElement('div');
            cardBody.classList.add('card-body');    
            card.appendChild(cardBody);
        
            let cardTitle= document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.innerHTML= response[2].name;
            cardBody.appendChild(cardTitle);
        
            let cardText= document.createElement('p');
            cardText.classList.add('card-text');
            cardText.innerHTML= response[2].description; 
            cardBody.appendChild(cardText);
        
            let price=document.createElement('p');
            price.innerHTML=response[2].price + "€"; 
            price.style.margin="10px 0px"; 
            cardBody.appendChild(price);

            let select= document.createElement('select');
            select.style.margin='15px 10px';
            cardBody.appendChild(select);

            let x= document.querySelector('select');
            let option= document.createElement('option');
            option.innerHTML =  response[2].colors;
            x.add(option);
            
            let btn = document.createElement('a');
            btn.setAttribute('href','../html/panier.html?panier='+response[2]._id);
            btn.classList.add('btn','btn-primary'); 
            btn.innerHTML='Ajouter au panier'; 
            cardBody.appendChild(btn);

          }
        };
        
        request.open('GET', 'http://localhost:3000/api/teddies');
        request.send();
        }
        else if(url.search('57d96') != -1 ){

            let request = new XMLHttpRequest();
            
            request.onreadystatechange = function() {
              if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                let response = JSON.parse(this.responseText);
            
                let card= document.createElement('div');
                card.classList.add('card'); 
                produit.appendChild(card);
            
                let img= document.createElement('img');
                img.classList.add('card-img-top');
                img.src= response[3].imageUrl;   
                card.appendChild(img);
            
                let cardBody= document.createElement('div');
                cardBody.classList.add('card-body');    
                card.appendChild(cardBody);
            
                let cardTitle= document.createElement('h5');
                cardTitle.classList.add('card-title');
                cardTitle.innerHTML= response[3].name;
                cardBody.appendChild(cardTitle);
            
                let cardText= document.createElement('p');
                cardText.classList.add('card-text');
                cardText.innerHTML= response[3].description; 
                cardBody.appendChild(cardText);
            
                let price=document.createElement('p');
                price.innerHTML=response[3].price + "€"; 
                price.style.margin="10px 0px"; 
                cardBody.appendChild(price);

                let select=document.createElement('select');
                cardBody.appendChild(select);
                select.style.margin="10px 10px"; 

                for (let index = 0; index < response.length; index++) { 
                  let x= document.querySelector('select');
                  let option= document.createElement('option');
                  option.innerHTML =  response[3].colors[index];
                  x.add(option);
                }
                

                let btn = document.createElement('a');
                btn.setAttribute('href','../html/panier.html?panier='+response[3]._id);
                btn.classList.add('btn','btn-primary'); 
                btn.innerHTML='Ajouter au panier'; 
                cardBody.appendChild(btn);

             
              
              }
            };
            
            request.open('GET', 'http://localhost:3000/api/teddies');
            request.send();
            }
            else if(url.search('57d97') != -1 ){

                let request = new XMLHttpRequest();
                
                request.onreadystatechange = function() {
                  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                    let response = JSON.parse(this.responseText);
                
                    let card= document.createElement('div');
                    card.classList.add('card'); 
                    produit.appendChild(card);
                
                    let img= document.createElement('img');
                    img.classList.add('card-img-top');
                    img.src= response[4].imageUrl;   
                    card.appendChild(img);
                
                    let cardBody= document.createElement('div');
                    cardBody.classList.add('card-body');    
                    card.appendChild(cardBody);
                
                    let cardTitle= document.createElement('h5');
                    cardTitle.classList.add('card-title');
                    cardTitle.innerHTML= response[4].name;
                    cardBody.appendChild(cardTitle);
                
                    let cardText= document.createElement('p');
                    cardText.classList.add('card-text');
                    cardText.innerHTML= response[4].description; 
                    cardBody.appendChild(cardText);
                
                    let price=document.createElement('p');
                    price.innerHTML=response[4].price + "€"; 
                    price.style.margin="5px 0px"; 
                    cardBody.appendChild(price);

                    let select=document.createElement('select');
                    cardBody.appendChild(select);
                    select.style.margin="5px 5px";
                
                    for (let index = 0; index < response.length; index++) { 
                      let x= document.querySelector('select');
                      let option= document.createElement('option');
                      option.innerHTML =  response[4].colors[index];
                      x.add(option);
                    }
                    
                    let btn = document.createElement('a');
                    btn.setAttribute('href','../html/panier.html?panier='+response[4]._id);
                    btn.classList.add('btn','btn-primary'); 
                    btn.innerHTML='Ajouter au panier'; 
                    cardBody.appendChild(btn);

                  
                    
                  
                  }
                };
                
                request.open('GET', 'http://localhost:3000/api/teddies');
                request.send();
                }

                