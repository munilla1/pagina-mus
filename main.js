import KEYS from "./keys"

const $d = document;
const $botonCarrito = $d.getElementById("boton_carrito");
const $fragment = $d.createDocumentFragment();
const $options = { headers: {Authorization: `Bearer ${KEYS.secret}`}}


let products, prices;

Promise.all([
    fetch("https://api.stripe.com/v1/products", options),
    fetch("https://api.stripe.com/v1/prices", options)
])
.then(res => Promise.all(responses.map(res => res.json())))
.then(json => {
    products = json[0].data;
    prices = json[0].data;
    console.log(products, prices)
})