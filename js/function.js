//Requête POST prommisse//
function post(url, data) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                resolve(JSON.parse(this.responseText));
            }  
        };
        request.open("POST", url);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(data));

    })
//Requête GET promisse//
function get() {
    return new Promise(function (resolve) {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if ( this.readyState == XMLHttpRequest.DONE && this.status >= 200 && this.status < 400
        ) {
          resolve(JSON.parse(this.responseText));
          
        } 
      };
      request.open("GET","http://localhost:3000/api/teddies");
      request.send();
    });
}
};

/* async function teddies(){
  const teddies= await get(); 
  if (url.search('index.html') != -1) {
    for (let index = 0; index < response.length; index++) {
      let card = buildCard(response[index], main);
      main.appendChild(card);
    }
  }
} */
