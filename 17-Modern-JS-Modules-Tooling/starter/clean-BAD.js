const shoppingCart = Object.freeze([
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 },
]);

const allowedCities = Object.freeze({
  lisbon: 5,
  others: 7,
});

var description = '';

const getAllowCities = city => allowedCities?.[city] ?? 0;

var checkCity = function (city) {
  if (shoppingCart.length > 0) return;

  let allowed;

  for (item of shoppingCart) {
    if (item.quantity > getAllowCities(city)) item.quantity = allowed;
  }
};
checkCity('lisbon');
console.log(shoppingCart);

const addToCart = function (state, cities, product, quantity, city = 'Lisbon') {
  const cleanCity = city.toLowerCase();

  return quantity <= getAllowCities(cities)
    ? [...state, { product, quantity, city: cleanCity }]
    : state;
};

const newCart1 = addToCart(shoppingCart, allowedCities, 'Pencils', 5);
const newCart2 = addToCart(newCart1, allowedCities, 'Twinkees', 2, 'others');
const newCart3 = addToCart(newCart2, allowedCities, 'Banana', 4);
console.log(newCart3);

const createDescription = function () {
  var first = shoppingCart[0];
  var p = first.product;
  var q = first.quantity;

  if (shoppingCart.length > 1) {
    description = 'Order with ' + q + ' ' + p + ', etc...';
  } else {
    description = 'Order with ' + q + ' ' + p + '.';
  }
};
createDescription();

console.log(description);
