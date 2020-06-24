//Requête POST prommisse//
function post(url, data) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
        resolve(JSON.parse(this.responseText));
        console.log(request);
      }
      
    };
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));

  })
};
//Requête GET promisse//
function get(url) {
  return new Promise(function (resolve) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        resolve(JSON.parse(this.responseText));
      }
    };
    request.open("GET", url);
    request.send();
  });
};