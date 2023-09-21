const addToCartButtons = document.querySelectorAll(".add-to-cart");
const buyNowButtons = document.querySelectorAll(".buy-now");

// Function to add an item to the cart
var addItemId = 0;
function addToCart(item) {
  addItemId += 1;
  var selectedItem = document.createElement(div);
  selectedItem.classList.add("product-image");
  selectedItem.setAttribute("id", addItemId);
  var cartItems = document.getElementById("");
}

function addToCart(clickedButton) {
  const product = clickedButton.parentElement;
  const productName = product.getAttribute("data-name");
  const productPrice = parseFloat(product.getAttribute("data-price"));

  cart.push({ name: productName, price: productPrice });
  totalWithoutTaxAndShipping += productPrice;
  updateCartDisplay();
}

// Simulate the buy now functionality
function buyNow() {
  const productTitle = this.parentElement.querySelector("h2").textContent;
  const downloadLink = "your-digital-product-link"; // Replace with the actual download link

  // Simulate redirect to a payment gateway and then to the download page
  window.location.href = `payment-gateway-url?product=${encodeURIComponent(
    productTitle
  )}&download=${encodeURIComponent(downloadLink)}`;
}

function updateCart() {
  cartItemsList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(listItem);

    total += item.price;
  });
}

// Attach event listeners
addToCartButtons.forEach((button) =>
  button.addEventListener("click", addToCart)
);
buyNowButtons.forEach((button) => button.addEventListener("click", buyNow));
const products = [
  {
    id: 0,
    price: 9.99,
    image: "templates-page/main-img/floral-stationary.webp",
    title:
      "Floral Small Business Stationery Bundle for Event & Wedding Planners",
    name: "Floral Small Business Stationery Bundle for Event & Wedding Planners",
    description:
      "This stunning template features delicate cherry blossoms, symbolizing new beginnings and spring, making it an ideal choice for wedding and event planning companies. The soft pastel colors and refined design make it perfect for floral businesses as well.",
    link: "Floral-Stationary-Bundle-ecommerce-detail.html",
    imgSrc: ".templates-page/main-img/floral-stationary.webp",
  },
  {
    id: 5,
    price: 13.49,
    image: "templates-page/main-img/tree-coloring-book.webp",
    title: "ABC Alphabet Animal Coloring Pages for Kids",
    name: "ABC Alphabet Animal Coloring Pages for Kids",
    description:
      "26 animals to color! Perfect for Toddlers, Preschoolers, Birthday Party Activities, Travel Activities, Rainy Day activities or Home learning. Introduce your little ones to the joys of learning with this fun and educational Printable Animal Alphabet Coloring Book!",
    link: "ABC-Animal-Woodland-Coloring-Book-for-Kids.html",
    imgSrc: ".templates-page/main-img/tree-coloring-book.webp",
  },
  {
    id: 2,
    price: 9.99,
    image: "templates-page/main-img/rainbow-stationary.webp",
    title: "Pastel Rainbow Small Business Stationery Bundle Starter Kit",
    name: "Pastel Rainbow Small Business Stationery Bundle Starter Kit",
    description:
      "This all-in-one bundle includes our mesmerizing Pastel Rainbow Invoice Template, Order Form Template, Receipt Template, and Price List Template. It's the ultimate solution to add a touch of enchantment and professionalism to every aspect of your lip gloss or craft business.",
    link: "Pastel-Rainbow-Stationary-Bundle-ecommerce-detail.html",
    imgSrc: ".templates-page/main-img/holographic-stationary.webp",
  },
  {
    id: 4,
    price: 13.49,
    image: "templates-page/main-img/cloud-coloring-book.webp",
    title: "Printable Woodland Animals Adult Coloring Book",
    name: "Printable Woodland Animals Adult Coloring Book",
    description:
      "Wildlife Animals to Color! Perfect for Wedding Showers, Baby Showers, or Enjoy at home! Simply download and print as many copies as you want, or color digitally on your favorite device.",
    link: "Animal-Coloring-Pages-for-Adults.html",
    imgSrc: ".templates-page/main-img/cloud-coloring-book.webp",
  },
  {
    id: 3,
    price: 9.99,
    image: "templates-page/main-img/rainbow-stationary.webp",
    title: "Creative Rainbow Business Starter Kit Stationery Bundle",
    name: "Creative Rainbow Business Starter Kit Stationery Bundle",
    description:
      "This all-in-one bundle includes our stunning Rainbow Invoice Template, Rainbow Order Form Template, Rainbow Receipt Template, and Rainbow Price List Template. Each template is thoughtfully designed to infuse your business operations with vibrant colors, professionalism, and a touch of enchantment.",
    link: "Creative-Rainbow-Stationary-Bundle-ecommerce-detail.html",
    imgSrc: ".templates-page/main-img/rainbow-stationary.webp",
  },
  {
    id: 1,
    price: 9.99,
    image: "templates-page/main-img/minimal-stationary.webp",
    title: "Professional Minimal Business Starter Kit Stationery Bundle",
    name: "Professional Minimal Business Starter Kit Stationery Bundle",
    description:
      "This stunning template features a simple and elegant design, our stationery bundle includes, Invoice, Price List/Line Sheet, Business Receipt, Order Form, and a 6-page Contract Agreement Template - all with your business logo and contact information prominently displayed. With this bundle, you'll be able to create a professional and polished image that sets you apart from the competition.",
    link: "Professional-Minimal-Sationary-Bundle.html",
    imgSrc: ".templates-page/main-img/minimal-stationary.webp",
  },
  // Add more products as needed
];

let currentIndex = 0;
const productImage = document.querySelector(".product-image img");
const productTitle = document.querySelector(".product-info h2");
const productDescription = document.querySelector(".product-info p");
const viewMoreButton = document.querySelector(".view-more-button");

function showProduct(index) {
  productImage.src = products[index].image;
  productTitle.textContent = products[index].title;
  productDescription.textContent = products[index].description;
  viewMoreButton.href = products[index].link; // Update the link
}

function changeProduct() {
  currentIndex = (currentIndex + 1) % products.length;
  showProduct(currentIndex);
}

// Initial product
showProduct(currentIndex);

// Change product periodically (every 5 seconds)
setInterval(changeProduct, 5000);

document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadBtn");
  const downloadLink = document.getElementById("downloadLink");
  const emailInput = document.getElementById("email");

  downloadBtn.addEventListener("click", function () {
    const email = emailInput.value;

    if (isValidEmail(email)) {
      downloadLink.classList.remove("hidden");
      downloadBtn.disabled = true;
    } else {
      alert("Please enter a valid email address.");
    }
  });

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const productContainers = document.querySelectorAll(
    ".product-highlight-grid"
  );

  let currentIndex = 0;
  const intervalTime = 5000; // Time in milliseconds (5 seconds)

  function highlightProduct() {
    // Remove the 'highlighted' class from all products
    productContainers.forEach((product) => {
      product.classList.remove("highlighted");
    });

    // Add the 'highlighted' class to the current product
    productContainers[currentIndex].classList.add("highlighted");

    // Increment the index for the next iteration
    currentIndex = (currentIndex + 1) % productContainers.length;
  }

  // Initially highlight the first product
  highlightProduct();

  // Set an interval to periodically highlight products
  setInterval(highlightProduct, intervalTime);
});

// Get references to the cart icon, overlay, and cart count element
var cartIcon = document.getElementById("cart-icon");
const cartOverlay = document.getElementById("cart-overlay");
const closeCartButton = document.getElementById("close-cart");
const cartCountElement = document.getElementById("cart-count"); // New

let cartCount = 0; // New variable to keep track of the cart count

// Function to update the cart count displayed to the user
function updateCartCount() {
  cartCountElement.textContent = cartCount;
}

// Add a click event listener to the cart icon
cartIcon.addEventListener("click", () => {
  // Display the cart overlay when the icon is clicked
  cartOverlay.style.display = "flex";
});

// Add a click event listener to the close cart button
closeCartButton.addEventListener("click", () => {
  // Hide the cart overlay when the close button is clicked
  cartOverlay.style.display = "none";
});

// Example: Increase the cart count (you can call this when adding a product to the cart)
function addToCart() {
  cartCount++;
  updateCartCount();
}

// Example: Decrease the cart count (you can call this when removing a product from the cart)
function removeFromCart() {
  if (cartCount > 0) {
    cartCount--;
    updateCartCount();
  }
}

// Call updateCartCount initially to set the count to 0
updateCartCount();

// Function to handle Buy Now button click
function buyNow() {
  const paymentUrl = `payment.html?productName=${encodeURIComponent(
    product.name
  )}&productPrice=${product.price}`;
  window.location.href = paymentUrl;
  if (cart.length === 0) {
    alert("Your cart is empty. Add items to the cart first.");
  } else {
    // Redirect to a checkout page or payment gateway
    alert("Redirecting to the checkout page...");
    window.location.href = "shopping-cart.html";
  }
}

// // Initialize Fairy Dust
// const fairyDust = new fairyDust(".fairy-dust", {
//   loop: true,
//   effect: "fade", // Use fade effect for the dissolve transition
//   speed: 1000, // Set the transition speed in milliseconds
//   autoplay: {
//     delay: 5000, // Set the delay between slides in milliseconds
//   },
// });
// function makeFairyDustAppear() {
//   const fairyDust = document.querySelector(".fairy-dust");
//   fairyDust.style.opacity = 1; // Set opacity to 1 to make it appear
// }

// function makeFairyDustDisappear() {
//   const fairyDust = document.querySelector(".fairy-dust");
//   fairyDust.style.opacity = 0; // Set opacity to 0 to make it disappear
// }
// var fairyDust = new Swiper(".fairy-dust", {
//   loop: true, // Loop through slides
//   effect: "fade", // Fade effect for dissolve transition
//   autoplay: {},
// });
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
