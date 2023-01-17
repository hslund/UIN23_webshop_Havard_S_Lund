let cart = []

function addTooCart (title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})
    //console.log(cart)

    //Etter å ha lagt til ett produkt; oppdater handlelistevisning:
    renderCart()
    //Så må vi oppdatere lavel med antall produkter:
    document.querySelector("#cart .label").innerHTML = cart.length
}


function renderCart() {
    //Tom Variabel for å bygge HTML til produkter
    let listHTML =""
    //Gå igjennom cart arrayen, lag en <li> for hvert produkt
    cart.map(prod => listHTML += `<li>
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice}</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button class="delete">X</button>
</li>`)
    //Bruke en selector for å finne en riktig <ul>, og skrive inn listHTML:
    document.querySelector("#cartview ul").innerHTML = listHTML
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}