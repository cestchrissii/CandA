// Sample product data (you would typically fetch this from a database)
// const products = [
//   { id: 1, name: "Product 1", price: 9.99 },
//   // Add more product data here
// ];

// Initialize the cart and promo code
const cart = [];
let promoCodeApplied = false;
const promoCode = "SAVE20"; // Example promo code

// Get DOM elements
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const promoCodeInput = document.getElementById("promo-code");
const applyPromoButton = document.getElementById("apply-promo");

// Function to update the cart and display it
function updateCart() {
  cartItemsList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(listItem);

    total += item.price;
  });

  // Apply promo code discount if it's applied
  if (promoCodeApplied) {
    total *= 0.8; // 20% discount for demonstration purposes
  }

  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Event listener for adding products to the cart
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const productId = parseInt(event.target.parentElement.dataset.id);
    const productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      cart.push(productToAdd);
      updateCart();
    }
  }
});

// Event listener for applying the promo code
applyPromoButton.addEventListener("click", () => {
  const enteredPromoCode = promoCodeInput.value.trim();

  if (enteredPromoCode === promoCode) {
    promoCodeApplied = true;
    updateCart();
    alert("Promo code applied successfully!");
  } else {
    alert("Invalid promo code. Please try again.");
  }
});
let cartItems = [];
let totalPrice = [];

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  totalPrice += price;
  updateCart();
}

// Initial cart update
updateCart();

// ... (previous code)

// Function to update the cart and display it
function updateCart() {
  cartItemsList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.dataset.id = item.id;

    listItem.innerHTML = `
          ${item.name} - $${item.price.toFixed(2)}
          <button class="remove-from-cart">Remove</button>
          <button class="decrement-quantity">-</button>
          <span class="item-quantity">${item.quantity}</span>
          <button class="increment-quantity">+</button>
      `;

    cartItemsList.appendChild(listItem);

    total += item.price * item.quantity;
  });

  // Apply promo code discount if it's applied
  if (promoCodeApplied) {
    total *= 0.8; // 20% discount for demonstration purposes
  }

  cartTotal.textContent = `$${total.toFixed(2)}`;

  // Event listeners for item interactions
  const removeButtons = document.querySelectorAll(".remove-from-cart");
  const decrementButtons = document.querySelectorAll(".decrement-quantity");
  const incrementButtons = document.querySelectorAll(".increment-quantity");

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = parseInt(button.parentElement.dataset.id);
      const itemIndex = cart.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        updateCart();
      }
    });
  });

  decrementButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = parseInt(button.parentElement.dataset.id);
      const item = cart.find((item) => item.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity--;
        updateCart();
      }
    });
  });

  incrementButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = parseInt(button.parentElement.dataset.id);
      const item = cart.find((item) => item.id === itemId);

      if (item) {
        item.quantity++;
        updateCart();
      }
    });
  });
}

// ... (previous code)

// Function to handle the checkout process
function checkout() {
  const total = calculateTotal(); // A function to calculate the total

  if (total === 0) {
    alert("Your cart is empty. Please add items before checking out.");
    return;
  }

  const usePayPal = document.getElementById("paypal").checked;

  if (usePayPal) {
    // Redirect to the PayPal payment page (simplified for demonstration)
    window.location.href = "https://www.paypal.com"; // Replace with your actual PayPal integration
  } else {
    // Process credit card payment (replace with your payment processing logic)
    const creditCardInfo = document.getElementById("credit-card").value;

    if (!creditCardInfo) {
      alert("Please enter credit card information.");
      return;
    }

    // Process the payment and complete the order (replace with your logic)
    alert(
      `Payment of $${total.toFixed(
        2
      )} successfully processed! Thank you for your order.`
    );
    clearCart(); // A function to clear the cart
    updateCart(); // Update the cart display
  }
}

// Add a click event listener to the checkout button
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", checkout);

// ... (rest of the previous code)

// Clear existing cart items
cartItems.innerHTML = "";

// Populate cart with items
cart.forEach((item) => {
  const cartItem = document.createElement("li");
  cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
  cartItems.appendChild(cartItem);
});

// Function to update the cart display
function updateCartDisplay() {
  const cartItemsList = document.getElementById("cartItems");
  const totalElement = document.getElementById("totalPrice");

  // Clear the previous items
  cartItemsList.innerHTML = "";

  // Render each item in the cart
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
  });

  // Update the total price
  totalElement.textContent = `$${totalPrice.toFixed(2)}`;
}
