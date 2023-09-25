// // SELECT ELEMENTS
// const ProductsItems = document.querySelector(".product-items");
// const cartItems = document.querySelector(".cart-items");
// const subtotal = document.querySelector(".subtotal");
// const totalItemsInCart = document.querySelector(".total-items-in-cart");

// // RENDER PRODUCTS
// function renderProductsItems() {
//   ProductsItems.forEach(() => {
//     ProductItems.innerHTML += `
//             <div class="shopping-cart">
//                 <div class="cart-items">
//                     <div class="cart-product-image">
//                         <img src="${products.imgSrc}" alt="${products.title}">
//                     </div>
//                     <div class="add-to-cart" onclick="addToCart(${products.id})">
//                     </div>
//                     <div class="buy-now" onclick="buyNow(${products.id})">
//                     </div>
//                 </div>
//             </div>
//         `;
//   });
// }
// renderProductsItems();

// // cart array
// let cart = JSON.parse(localStorage.getItem("CART")) || [];
// updateCart();

// // ADD TO CART
// function addToCart(id) {
//   // check if product already exist in cart
//   if (cart.some((item) => item.id === id)) {
//     changeNumberOfUnits("plus", id);
//   } else {
//     const item = products.find((product) => product.id === id);

//     cart.push({
//       ...item,
//       numberOfUnits: 1,
//     });
//   }

//   updateCart();
// }

// // update cart
// function updateCart() {
//   renderCartItems();
//   renderSubtotal();

//   // save cart to local storage
//   localStorage.setItem("CART", JSON.stringify(cart));
// }

// // calculate and render subtotal
// function renderSubtotal() {
//   let totalPrice = 0,
//     totalItems = 0;

//   cart.forEach((item) => {
//     totalPrice += item.price * item.numberOfUnits;
//     totalItems += item.numberOfUnits;
//   });

//   subtotal.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(
//     2
//   )}`;
//   totalItemsInCart.innerHTML = totalItems;
// }

// // render cart items
// function renderCartItems() {
//   cartItems.innerHTML = ""; // clear cart element
//   cart.forEach((item) => {
//     cartItems.innerHTML += `
//         <div class="cart-item">
//             <div class="item-info" onclick="removeItemFromCart(${item.id})">
//                 <img src="${item.imgSrc}" alt="${item.name}">
//                 <h4>${item.name}</h4>
//             </div>
//             <div class="unit-price">
//                 <small>$</small>${item.price}
//             </div>
//             <div class="units">
//                 <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
//                 <div class="number">${item.numberOfUnits}</div>
//                 <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
//             </div>
//         </div>
//       `;
//   });
// }

// // remove item from cart
// function removeItemFromCart(id) {
//   cart = cart.filter((item) => item.id !== id);

//   updateCart();
// }

// // change number of units for an item
// function changeNumberOfUnits(action, id) {
//   cart = cart.map((item) => {
//     let numberOfUnits = item.numberOfUnits;

//     if (item.id === id) {
//       if (action === "minus" && numberOfUnits > 1) {
//         numberOfUnits--;
//       } else if (action === "plus" && numberOfUnits < item.instock) {
//         numberOfUnits++;
//       }
//     }

//     return {
//       ...item,
//       numberOfUnits,
//     };
//   });

//   updateCart();
// }
// SELECT ELEMENTS
const productItems = document.querySelector(".product-items");
const cartItems = document.querySelector(".cart-items");
const subtotal = document.querySelector(".subtotal");
const totalItemsInCart = document.querySelector(".total-items-in-cart");

// Sample products data for testing
// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 19.99,
//     imgSrc: "product1.jpg",
//     instock: 10,
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 29.99,
//     imgSrc: "product2.jpg",
//     instock: 5,
//   },
//   // Add more products here
// ];

// RENDER PRODUCTS
function renderProductItems() {
  // Loop through products array
  products.forEach((product) => {
    productItems.innerHTML += `
      <div class="shopping-cart">
        <div class="cart-items">
          <div class="cart-product-image">
            <img src="${product.imgSrc}" alt="${product.name}">
          </div>
          <div class="add-to-cart" onclick="addToCart(${product.id})">
            Add to Cart
          </div>
          <div class="buy-now" onclick="buyNow(${product.id})">
            Buy Now
          </div>
        </div>
      </div>
    `;
  });
}
renderProductItems();

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(id) {
  // check if product already exists in cart
  const itemInCart = cart.find((item) => item.id === id);

  if (itemInCart) {
    changeNumberOfUnits("plus", id);
  } else {
    const itemToAdd = products.find((product) => product.id === id);

    if (itemToAdd) {
      cart.push({
        ...itemToAdd,
        numberOfUnits: 1,
      });
    }
  }

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// render cart items
function renderCartItems() {
  cartItems.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItems.innerHTML += `
      <div class="cart-item">
        <div class="item-info" onclick="removeItemFromCart(${item.id})">
          <img src="${item.imgSrc}" alt="${item.name}">
          <h4>${item.name}</h4>
        </div>
        <div class="unit-price">
          <small>$</small>${item.price.toFixed(2)}
        </div>
        <div class="units">
          <div class="btn minus" onclick="changeNumberOfUnits('minus', ${
            item.id
          })">-</div>
          <div class="number">${item.numberOfUnits}</div>
          <div class="btn plus" onclick="changeNumberOfUnits('plus', ${
            item.id
          })">+</div>           
        </div>
      </div>
    `;
  });
}
// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotal.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(
    2
  )}`;
  totalItemsInCart.innerHTML = totalItems;
}
// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    if (item.id === id) {
      let numberOfUnits = item.numberOfUnits;

      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }

      return {
        ...item,
        numberOfUnits,
      };
    }

    return item;
  });

  updateCart();
}
