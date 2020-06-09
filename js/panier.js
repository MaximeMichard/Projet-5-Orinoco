const storageCart = localStorage.getItem('cart');
const productsLists = JSON.parse(storageCart);
const panierTableau = document.getElementById('panier__body');



if (storageCart != null) {

    for (let i = 0; i < productsLists.length; i++) {

        const price = productsLists[i].productPrice;
        const quantityList = productsLists[i].productQuantity;
        const resultPrice = price * quantityList;

        let somme = 0;
        somme += resultPrice;

        console.log(somme);


        let ligneTableau = panierTableau.insertRow(-1);

        let colonneTableau1 = ligneTableau.insertCell(0);
        colonneTableau1.innerHTML += (productsLists[i].productName);

        let colonneTableau2 = ligneTableau.insertCell(1);
        colonneTableau2.innerHTML += `${price}€`;

        let colonneTableau3 = ligneTableau.insertCell(2);
        colonneTableau3.innerHTML += (productsLists[i].productColor);

        let colonneTableau4 = ligneTableau.insertCell(3);

        let buttonMinus = document.createElement('button');
        buttonMinus.innerHTML = `<i class = "fas fa-minus"></i>`;
        buttonMinus.id = `minus-${i}`;
        buttonMinus.onclick = (e) => {
            updateQte(e.currentTarget.id.split('-')[1], 'moins')
        }

        colonneTableau4.appendChild(buttonMinus);

        let spanQty = document.createElement("span");
        spanQty.id = `qte-${i}`;
        spanQty.textContent = quantityList;
        colonneTableau4.appendChild(spanQty);

        let buttonPlus = document.createElement('button');
        buttonPlus.innerHTML = `<i class = "fas fa-plus"></i>`;
        buttonPlus.id = `plus-${i}`;
        buttonPlus.onclick = (e) => {
            updateQte(e.currentTarget.id.split('-')[1], 'plus')
        }

        colonneTableau4.appendChild(buttonPlus);

        let colonneTableau5 = ligneTableau.insertCell(4);
        colonneTableau5.innerHTML += (resultPrice + ' ' + '€');

        let colonneTableau6 = ligneTableau.insertCell(5);

        let button = document.createElement('button');
        button.innerHTML = `<i class = "fas fa-times"></i>`;

        colonneTableau6.appendChild(button);

        button.addEventListener('click', function() {
            panierTableau.deleteRow(i)
            productsLists.splice(i, 1);
            localStorage.setItem('cart', JSON.stringify(productsLists));
            document.location.reload()
        });

        const totalPrice = document.getElementById('prix__total');
        totalPrice.innerHTML = `<p>Prix Total de votre panier</p>${somme} €<p></p>`;

        function updateQte(eltId, action) {
            let qteElt = document.getElementById(`qte-${eltId}`);
            console.log(qteElt)
            let qte = parseInt(qteElt.textContent);
            let nvelleQte;
            if (action === "plus") {
                nvelleQte = qte + 1;
            } else {
                nvelleQte = qte - 1 >= 0 ? qte - 1 : 0;
            }
            let price = productsLists[eltId].productPrice;
            let resultPrice = nvelleQte * price;
            productsLists[eltId].productQuantity = nvelleQte;
            qteElt.textContent = nvelleQte;
            localStorage.setItem('cart', JSON.stringify(productsLists));
            document.location.reload()
            console.log(productsLists[eltId].productQuantity);
        }
    }
}