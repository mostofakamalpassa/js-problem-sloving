const shopingCart = [
  { name: "laptop", price: 50000, quantity: 1 },
  { name: "shart", price: 4000, quantity: 2 },
  { name: "watch", price: 6000, quantity: 2 },
  { name: "phone", price: 40000, quantity: 1 },
];

function shoppingCartA(shoppingCarts) {
  let totalprice = 0;

  for (let i = 0; i < shoppingCarts.length; i++) {
    totalprice += shoppingCarts[i].price * shoppingCarts[i].quantity;
  }
  return totalprice;
}

console.log(shoppingCartA(shopingCart));
