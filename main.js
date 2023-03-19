const menuEmail =document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
const shoppingCart= document.querySelector('.navbar-shopping-cart');
const shoppingDetail= document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener ('click', toggleDesktopMenu);
menuHamIcon.addEventListener ('click', toggleMobileMenu);
shoppingCart.addEventListener ('click', toggleShopingCart);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingDetail.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingDetail.classList.add('inactive');
}
function toggleShopingCart() {
    shoppingDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

const productList =[];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Car',
    price: 120000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/*< class="cards-container">

<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>*/
function renderProduct(arr) {
for (product of arr) {
    const productCard = document.createElement ('div');
    productCard.classList.add('product-card');
// product= {name, price, image} -> product.image
    const productImg = document.createElement ('Img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div') 

    const productPrice = document.createElement('p');
    productPrice.innerText='$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfofigure = document.createElement ('figure');
    const productImgCart = document.createElement ('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfofigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfofigure);
    productCard.append(productImg,productInfo);

    cardsContainer.appendChild(productCard);

}
}

renderProduct(productList);