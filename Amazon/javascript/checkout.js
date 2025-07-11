import {cart, removeProduct} from '../data/cart.js'; // Named export
import {products} from '../data/prod.js';
import {formatCurrency} from './utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'; // default export
import {deliveryOptions} from '../data/deliveryOptions.js'

let cartSummaryHTML = '';
cart.forEach((cartItem)=>{
    const productId = cartItem.productId;
    let matchingProduct;
    products.forEach((product)=>{
        if(product.id === productId){
            matchingProduct = product;
        }
    })

    const deliveryOptionId = cartItem.deliveryOptionsId
    let deliveryOption;

    deliveryOptions.forEach((option)=>{
        if(option.id === deliveryOptionId){
            deliveryOption = option;
        }
    })

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
    const dateString = deliveryDate.format('dddd, MMMM D');

    cartSummaryHTML += `
    <div class="cart-item-container js-remove-container-${matchingProduct.id}">
        <div class="delivery-date">
            Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingProduct.image}">

            <div class="cart-item-details">
            <div class="product-name">
                ${matchingProduct.name}
            </div>
            <div class="product-price">
                $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                ${deliveryOptionsHTML(matchingProduct, cartItem)}
            </div>
        </div>
        </div>
    `;
});

function deliveryOptionsHTML(matchingProduct, cartItem){
    let html = '';
    deliveryOptions.forEach((deliveryOption)=>{
        const today = dayjs();
        const deliveryDate = today.add(
            deliveryOption.deliveryDays,
            'days'
        );
        const dateString = deliveryDate.format('dddd, MMMM D');
        const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} -`;

        const isChecked = deliveryOption.id === cartItem.deliveryOptionsId

        html +=`
            <div class="delivery-option">
                <input type="radio" ${isChecked ? 'checked' : ''}
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    ${dateString}
                </div>
                <div class="delivery-option-price">
                    ${priceString} Shipping
                </div>
                </div>
            </div>
        `
    })
    return html;
}

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeProduct(productId);

        const container = document.querySelector(`.js-remove-container-${productId}`);
        container.remove();
    })
})

document.querySelector('.checkout-header').innerHTML = `
        <div class="header-content">
            <div class="checkout-header-left-section">
            <a href="amazon.html">
                <img class="amazon-logo" src="images/amazon-logo.png">
                <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
            </a>
            </div>

            <div class="checkout-header-middle-section js-checkout-quantity-section">
                
            </div>
            
            <div class="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png">
            </div>
        </div>
    `
        
function getCartQuantity(){
    let totalQuantity = 0;
    cart.forEach(item => {
        totalQuantity += item.quantity;
    });
    return totalQuantity;
}
document.querySelector('.js-checkout-quantity-section').innerHTML = `   
    Checkout (<a class="return-to-home-link"
    href="amazon.html">${getCartQuantity()} Items</a>)
`