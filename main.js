//hacer aparecer y desaparecer el carrito junto con el precio del producto

const addToCartBtn = document.querySelector('.details__button');
let carrito = document.querySelector('.header');
const infografia1 = document.querySelector('.details')

addToCartBtn.addEventListener('click', ()=>{
    carrito.innerText = infografia1
});

const cartIconBtn = document.querySelector('.header__cart');

const cartModal = document.querySelector('.cart-modal');

let priceModal = document.querySelector('.cart-modal__price');

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');
    priceModal.innerHTML = '40€';
});

//borrar el contenido del carrito

const deleteProductBtn = document.querySelector('.icono-eliminar');
const productContainer = document.querySelector('.cart-modal__chekout-container');

deleteProductBtn.addEventListener('click', ()=>{
    productContainer.innerHTML = '<p class="carrito-borrado">Tu carrito está vacio</p>';
});