export let cart = [
    {
        productId: '101',
        quantity: 2
    },
    {
        productId: '102',
        quantity: 1
    }
];

export function addToCart(productId, button){
  let matchingItem;
  
  cart.forEach((item) => {
      if(productId === item.productId){
          matchingItem = item;
      }
  })
  
  const quantity = Number(button.closest('.product-container').querySelector('.js-select-quantity').value);
  
  if(matchingItem) {
      matchingItem.quantity += quantity;    
  } else {
      cart.push({
          productId: productId,
          quantity: quantity
      });
  }
}

export function removeProduct(productId){
    const newCart = [];
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId) newCart.push(cartItem);
    })
    cart = newCart;
}