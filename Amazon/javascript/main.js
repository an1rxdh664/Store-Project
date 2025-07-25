import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/prod.js';
import {formatCurrency} from './utils/money.js';

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="js-select-quantity">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-add-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `
});



document.querySelector('.js-product-grid').innerHTML = productsHTML; // generates the html for the products



function updateCartQuantity(){
  let totalQuantity = 0;
  
  cart.forEach((item) => {
      totalQuantity += item.quantity;
  })
  
  document.querySelector('.js-cart-quantity').innerHTML = totalQuantity;
}

// Cart function
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        // button.dataset // it gives us all the data attribute connected to the element.
        // console.log(button.dataset.productName); // to access certain dataset info
        
        const productId = button.dataset.productId;
        addToCart(productId, button);
        updateCartQuantity();

        // Added to cart alert update
        const addedAlert = button.closest('.product-container').querySelector('.js-add-cart');
        addedAlert.classList.add('js-cart-display');
        setTimeout((alert) => {
          addedAlert.classList.remove('js-cart-display');
        },2000);

    })
})