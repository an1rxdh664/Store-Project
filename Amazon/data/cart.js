export const cart = [];

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