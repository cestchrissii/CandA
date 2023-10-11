const addToCartButtons = document.querySelectorAll(".add-to-cart");
const buyNowButtons = document.querySelectorAll(".buy-now");

// Function to add an item to the cart
var addItemId = 0;
function addToCart(_item) {
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
      "Floral Stationery Templates Bundle for Florists, Event & Wedding Planner Small Businesses",
    name: "Floral Stationery Templates Bundle for Florists, Event & Wedding Planner Small Businesses",
    description:
      "This stunning template features delicate cherry blossoms, symbolizing new beginnings and spring, making it an ideal choice for wedding and event planning companies. The soft pastel colors and refined design make it perfect for floral businesses as well.",
    link: "Floral-Stationary-Bundle-ecommerce-detail.html",
    imgSrc: "./templates-page/main-img/floral-stationary.webp",
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
    imgSrc: "./templates-page/main-img/minimal-stationary.webp",
  },
  {
    id: 2,
    price: 9.99,
    image: "templates-page/main-img/holographic-stationary.webp",
    title: "Pastel Rainbow Small Business Stationery Bundle Starter Kit",
    name: "Pastel Rainbow Small Business Stationery Bundle Starter Kit",
    description:
      "This all-in-one bundle includes our mesmerizing Pastel Rainbow Invoice Template, Order Form Template, Receipt Template, and Price List Template. It's the ultimate solution to add a touch of enchantment and professionalism to every aspect of your lip gloss or craft business.",
    link: "Pastel-Rainbow-Stationary-Bundle-ecommerce-detail.html",
    imgSrc: "./templates-page/main-img/holographic-stationary.webp",
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
    imgSrc: "./templates-page/main-img/rainbow-stationary.webp",
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
    imgSrc: "./templates-page/main-img/cloud-coloring-book.webp",
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
    imgSrc: "./templates-page/main-img/tree-coloring-book.webp",
  },
  {
    id: 6,
    price: 2.5,
    image: "templates-page/main-img/sw-resume.webp",
    title: "Printable Modern Resume CV Template Word Google Docs",
    name: "Printable Modern Resume CV Template Word Google Docs",
    description:
      "Introducing our Professional Resume Template: Make a Lasting Impression with a Polished and Professional Design",
    link: "SW-Black-Resume-Template.html",
    imgSrc: "./templates-page/main-img/sw-resume.webp",
  },
  {
    id: 7,
    price: 2.5,
    image: "templates-page/main-img/ts-resume.webp",
    title: "Printable Minimal Resume CV Template Word Google Docs",
    name: "Printable Minimal Resume CV Template Word Google Docs",
    description:
      "Modern Resume Template: Stand Out from the Crowd with a Sleek and Professional Design",
    link: "TS-Black-Resume-Template.html",
    imgSrc: "./templates-page/main-img/ts-resume.webp",
  },
  {
    id: 8,
    price: 2.5,
    image: "templates-page/main-img/kr-resume.webp",
    title: "Printable Minimal Resume CV Template Word Google Docs",
    name: "Printable Minimal Resume CV Template Word Google Docs",
    description:
      "Minimal Resume Template: Make a Lasting Impression with a Polished and Professional Design",
    link: "KR-Black-Resume-Template.html",
    imgSrc: "./templates-page/main-img/kr-resume.webp",
  },
  {
    id: 9,
    price: 0.0,
    image: "templates-page/main-img/business-cards.webp",
    title: "4 Free Unique Business Card Designs",
    name: "4 Free Unique Business Card Designs",
    description:
      "Modern Resume Template: Stand Out from the Crowd with a Sleek and Professional Design",
    imgSrc: "./templates-page/main-img/business-cards.webp",
  },
  {
    id: 10,
    price: 0.0,
    image: "templates-page/main-img/business-cards.webp",
    title: "Free Minimal ATS Friendly CV Resume Template Word Google Doc",
    name: "Free Minimal ATS Friendly CV Resume Template Word Google Doc",
    description:
      "Modern Resume Template: Stand Out from the Crowd with a Sleek and Professional Design",
    imgSrc: "./templates-page/main-img/business-cards.webp",
  },
  {
    id: 11,
    price: 3.99,
    image: "bundle-imgs/floral/invoice/invoice-1.webp",
    title:
      "Floral Invoice Template Word/Google Docs for Florists, Event & Wedding Planner Small Businesses",
    name: "Floral Invoice Template Word/Google Docs for Florists, Event & Wedding Planner Small Businesses",
    description:
      "This beautiful Invoice Template features delicate cherry blossoms, symbolizing new beginnings and spring, making it an ideal choice for wedding and event planning companies.",
    link: "Floral-Invoice-Template-Ecommerce-Template.html",
    imgSrc: "./bundle-imgs/floral/invoice/invoice-1.webp",
  },
  {
    id: 12,
    price: 3.99,
    image: "bundle-imgs/floral/order-form/order-form-1.webp",
    title:
      "Floral Order Form Template Word/Canva for Florists, Event & Wedding Planner Small Businesses",
    name: "Floral Invoice Template Word/Google Docs for Florists, Event & Wedding Planner Small Businesses",
    description:
      "This beautiful Invoice Template features delicate cherry blossoms, symbolizing new beginnings and spring, making it an ideal choice for wedding and event planning companies.",
    link: "Floral-Order-Form-Template-Ecommerce-Detail.html",
    imgSrc: "./bundle-imgs/floral/order-form/order-form-1.webp",
  },
  {
    id: 13,
    price: 3.99,
    image: "bundle-imgs/floral/receipt/receipt-1.webp",
    title:
      "Floral Receipt Template Word/Canva for Florists, Event & Wedding Planner Small Businesses",
    name: "Floral Receipt Template Word/Canva for Florists, Event & Wedding Planner Small Businesses",
    description:
      "This stunning Receipt Template features delicate cherry blossoms, symbolizing new beginnings and spring, making it an ideal choice for wedding and event planning companies.",
    imgSrc: "./bundle-imgs/floral/receipt/receipt-1.webp",
  },
  {
    id: 14,
    price: 3.99,
    image: "bundle-imgs/floral/price-list/price-list-1.webp",
    name: "Floral Price List Template Word/Canva for Florists, Event & Wedding Planner Small Businesses",
    description:
      "This beautiful Price List/Line Sheet Template features delicate cherry blossoms, symbolizing new beginnings and spring, making it an ideal choice for wedding and event planning companies.",
    imgSrc: "./bundle-imgs/floral/price-list/price-list-1.webp",
  },
  {
    id: 15,
    price: 3.99,
    image: "bundle-imgs/floral/contract/contract-1.webp",
    title:
      "Floral Service Contract Agreement Template for Florists, Event & Wedding Planner Small Businesses",
    name: "Floral Service Contract Agreement Template for Florists, Event & Wedding Planner Small Businesses",
    description:
      "This elegant template features delicate cherry blossoms, symbolizing new beginnings and spring, making it an ideal choice for wedding and event planning companies.",
    imgSrc: "./bundle-imgs/floral/contract/contract-1.webp",
  },
  {
    id: 16,
    price: 3.99,
    image: "bundle-imgs/minimal-stationary/invoice/invoice-1.webp",
    title: "Professional Minimal Business Invoice Template Word/Google Docs",
    name: "Professional Minimal Business Invoice Template Word/Google Docs",
    description:
      "Introducing our Professional Minimal Invoice Template: Streamline Your Business Finances with Style",
    imgSrc: "./bundle-imgs/minimal-stationary/invoice/invoice-1.webp",
  },
  {
    id: 17,
    price: 3.99,
    image: "bundle-imgs/minimal-stationary/order-form/order-form-1.webp",
    title: "Professional Minimal Business Order Form Template Word/Canva",
    name: "Professional Minimal Business Order Form Template Word/Canva",
    description:
      "Introducing our Professional Minimal Order Form Template: Streamline Your Sales Process with Style and Efficiency",
    imgSrc: "./bundle-imgs/minimal-stationary/order-form/order-form-1.webp",
  },
  {
    id: 18,
    price: 3.99,
    image: "bundle-imgs/minimal-stationary/receipt/receipt-1.webp",
    title: "Professional Minimal Business Receipt Template Word/Canva",
    name: "Professional Minimal Business Receipt Template Word/Canva",
    description:
      "Introducing our Professional Minimal Receipt Template: Streamline Your Transaction Process with Style and Efficiency",
    imgSrc: "./bundle-imgs/minimal-stationary/receipt/receipt-1.webp",
  },
  {
    id: 19,
    price: 3.99,
    image: "bundle-imgs/minimal-stationary/price-list/price-list-1.webp",
    title: "Professional Minimal Business Price List/ Line Sheet Template",
    name: "Professional Minimal Business Price List/ Line Sheet Template",
    description:
      "Introducing our Professional Minimal Price List Template: Present Your Products and Services with Clarity and Style",
    imgSrc: "./bundle-imgs/minimal-stationary/price-list/price-list-1.webp",
  },
  {
    id: 20,
    price: 3.99,
    image: "bundle-imgs/minimal-stationary/contract/contract-1.webp",
    title: "Professional Minimal Business Service Agreement Contract Template",
    name: "Professional Minimal Business Service Agreement Contract Template",
    description:
      "Introducing our Professional Minimal Contract Agreement Template: Secure Your Business Deals with Style and Clarity",
    imgSrc: "./bundle-imgs/minimal-stationary/contract/contract-1.webp",
  },
  {
    id: 21,
    price: 3.99,
    image: "bundle-imgs/pastel-rainbow-stationary/invoice/invoice-1.webp",
    title: "Pastel Rainbow Invoice Template Word Small Business Stationery",
    name: "Pastel Rainbow Invoice Template Word Small Business Stationery",
    description:
      "Attention lip gloss and crafts small business owners! Get ready to dazzle your customers with our Holographic Invoice Template!",
    imgSrc: "./bundle-imgs/pastel-rainbow-stationary/invoice/invoice-1.webp",
  },
  {
    id: 22,
    price: 3.99,
    image: "bundle-imgs/pastel-rainbow-stationary/order-form/order-form-1.webp",
    title: "Pastel Rainbow Order Form Template Word Small Business Stationery",
    name: "Pastel Rainbow Order Form Template Word Small Business Stationery",
    description:
      "Calling all crafters and artisans! Prepare to wow your customers with our Pastel Rainbow Craft Order Form Template!",
    imgSrc:
      "./bundle-imgs/pastel-rainbow-stationary/order-form/order-form-1.webp",
  },
  {
    id: 23,
    price: 3.99,
    image: "bundle-imgs/pastel-rainbow-stationary/receipt/receipt-1.webp",
    title: "Pastel Rainbow Receipt Template Word Small Business Stationery",
    name: "Pastel Rainbow Receipt Template Word Small Business Stationery",
    description:
      "Calling all crafters and artisans! Elevate your customer experience with our Pastel Rainbow Receipt Template!",
    imgSrc: "./bundle-imgs/pastel-rainbow-stationary/receipt/receipt-1.webp",
  },
  {
    id: 24,
    price: 3.99,
    image: "bundle-imgs/pastel-rainbow-stationary/price-list/price-list-1.webp",
    title: "Pastel Rainbow Price List Template Small Business Stationery",
    name: "Pastel Rainbow Price List Template Small Business Stationery",
    description:
      "Attention all crafters and artisans! Present your prices in a mesmerizing and unforgettable way with our Pastel Rainbow Price List Template!",
    imgSrc:
      "./bundle-imgs/pastel-rainbow-stationary/price-list/price-list-1.webp",
  },
  {
    id: 25,
    price: 3.99,
    image: "bundle-imgs/creative/invoice/creative-stationary-invoice-1.webp",
    title:
      "Creative Rainbow Invoice Template Word/ Canva Business Stationery Bundle",
    name: "Creative Rainbow Invoice Template Word/ Canva Business Stationery Bundle",
    description:
      "Attention makeup, nail salon, and beauty small business owners! Prepare to dazzle your clients with our Rainbow Invoice Template, designed specifically for businesses like yours!",
    imgSrc: "./bundle-imgs/creative/invoice/creative-stationary-invoice-1.webp",
  },
  {
    id: 26,
    price: 3.99,
    image:
      "bundle-imgs/creative/order-form/creative-stationary-order-form-1.webp",
    title: "Creative Rainbow Order form Template Business Stationery",
    name: "Creative Rainbow Order form Template Business Stationery",
    description:
      "Attention makeup, nail salon, and beauty small business owners! Get ready to streamline your order process and enchant your clients with our Rainbow Order Form Template!",
    imgSrc:
      "./bundle-imgs/creative/order-form/creative-stationary-order-form-1.webp",
  },
  {
    id: 27,
    price: 3.99,
    image: "bundle-imgs/creative/receipt/creative-stationary-receipt-1.webp",
    title: "Creative Rainbow Receipt Template Business Stationery",
    name: "Creative Rainbow Receipt Template Business Stationery",
    description:
      "Attention makeup, nail salon, and beauty small business owners! Elevate your client experience with our Rainbow Receipt Template, designed to add a touch of magic and style to your business transactions!",
    imgSrc: "./bundle-imgs/creative/receipt/creative-stationary-receipt-1.webp",
  },
  {
    id: 28,
    price: 3.99,
    image:
      "bundle-imgs/creative/price-list/creative-stationary-price-list-1.webp",
    title: "Creative Rainbow Price List Template Business Stationery",
    name: "Creative Rainbow Price List Template Business Stationery",
    description:
      "Attention makeup, nail salon, and beauty small business owners! Showcase your services and pricing with a touch of vibrancy and elegance using our Rainbow Price List Template!",
    imgSrc:
      "./bundle-imgs/creative/price-list/creative-stationary-price-list-1.webp",
  },
  {
    id: 29,
    price: 14.99,
    image: "bundle-imgs/coloring-books/personalized-tree-cover-a.webp",
    title:
      "Personalized Woodland Wedding Coloring Book Baby Shower-Bridal Shower Games",
    name: "Personalized Woodland Wedding Coloring Book Baby Shower-Bridal Shower Games",
    description:
      "Wildlife Animals to Color! Perfect for Wedding Showers, Baby Showers, or Enjoy at home!",
    imgSrc: "./bundle-imgs/coloring-books/personalized-tree-cover-a.webp",
  },
  {
    id: 30,
    price: 13.49,
    image: "templates-page/main-img/cloud-coloring-book.webp",
    titlee: "Printable Woodland Animals Adult Coloring Pages",
    name: "Printable Woodland Animals Adult Coloring Pages",
    description:
      "Wildlife Animals to Color! Perfect for Wedding Showers, Baby Showers, or Enjoy at home!",
    imgSrc: "./templates-page/main-img/cloud-coloring-book.webp",
  },
  {
    id: 31,
    price: 14.99,
    image: "bundle-imgs/coloring-books/personalized-cloud-cover-a.webp",
    title: "Printable Woodland Animals Personalized Adult Coloring Pages",
    name: "Printable Woodland Animals Personalized Adult Coloring Pages",
    description:
      "Wildlife Animals to Color! Perfect for Wedding Showers, Baby Showers, or Enjoy at home!",
    imgSrc: "./bundle-imgs/coloring-books/personalized-cloud-cover-a.webp",
  },
  {
    id: 32,
    price: 14.99,
    image: "bundle-imgs/coloring-books/personalized-cloud-cover..webp",
    title: "ABC Animal Alphabet Personalized Coloring Book for Kids",
    name: "ABC Animal Alphabet Personalized Coloring Book for Kids",
    description:
      "Wildlife Animals to Color! Perfect for Wedding Showers, Baby Showers, or Enjoy at home!",
    imgSrc: "./bundle-imgs/coloring-books/personalized-cloud-cover..webp",
  },
  {
    id: 33,
    price: 13.49,
    image: "templates-page/main-img/tree-coloring-book.webp",
    title: "ABC Animal Alphabet Coloring Pages for Kids",
    name: "ABC Animal Alphabet Coloring Pages for Kids",
    description:
      "26 animals to color! Perfect for Toddlers, Preschoolers, Birthday Party Activities, Travel Activities, Rainy Day activities or Home learning.",
    imgSrc: "./templates-page/main-img/tree-coloring-book.webp",
  },
  {
    id: 34,
    price: 14.99,
    image: "bundle-imgs/coloring-books/personalized-tree-cover.webp",
    title: "ABC Animal Alphabet Personalized Coloring Book for Kids",
    name: "ABC Animal Alphabet Personalized Coloring Book for Kids",
    description:
      "26 animals to color! Perfect for Toddlers, Preschoolers, Birthday Party Activities, Travel Activities, Rainy Day activities or Home learning.",
    imgSrc: "./bundle-imgs/coloring-books/personalized-tree-cover.webp",
  },
  {
    id: 35,
    price: 2.5,
    image: "bundle-imgs/sw-resume-template/blue/blue-1.webp",
    title: "Clean Modern CV Resume Template Word Google Docs",
    name: "Clean Modern CV Resume Template Word Google Docs",
    description:
      "Introducing our Professional Resume Template: Make a Lasting Impression with a Polished and Professional Design",
    imgSrc: "./bundle-imgs/sw-resume-template/blue/blue-1.webp",
  },
  {
    id: 36,
    price: 2.5,
    image: "bundle-imgs/sw-resume-template/grey/grey-1.webp",
    title: "Minimal Resume CV Template Word Google Docs",
    name: "Minimal Resume CV Template Word Google Docs",
    description:
      "Introducing our Professional Resume Template: Make a Lasting Impression with a Polished and Professional Design",
    imgSrc: "./bundle-imgs/sw-resume-template/grey/grey-1.webp",
  },
  {
    id: 37,
    price: 2.5,
    image: "bundle-imgs/sw-resume-template/pink/pink-1.webp",
    title:
      "Creative Pink Resume CV Template Word Google Docs Lebenslauf Vorlage",
    name: "Creative Pink Resume CV Template Word Google Docs Lebenslauf Vorlage",
    description:
      "Introducing our Professional Resume Template: Make a Lasting Impression with a Polished and Professional Design",
    imgSrc: "./bundle-imgs/sw-resume-template/pink/pink-1.webp",
  },
  {
    id: 38,
    price: 2.5,
    image: "bundle-imgs/sw-resume-template/red/red-1.webp",
    title:
      "Editable Curriculum Vitae Executive Resume CV Template Word Google Docs",
    name: "Editable Curriculum Vitae Executive Resume CV Template Word Google Docs",
    description:
      "Introducing our Professional Resume Template: Make a Lasting Impression with a Polished and Professional Design",
    imgSrc: "./bundle-imgs/sw-resume-template/red/red-1.webp",
  },
  {
    id: 39,
    price: 2.5,
    image: "bundle-imgs/sw-resume-template/purple/purple-1.webp",
    title:
      "Modern Creative Resume CV Template Word Google Docs Lebenslauf Vorlage",
    name: "Modern Creative Resume CV Template Word Google Docs Lebenslauf Vorlage",
    description:
      "Introducing our Professional Resume Template: Make a Lasting Impression with a Polished and Professional Design",
    imgSrc: "./bundle-imgs/sw-resume-template/purple/purple-1.webp",
  },
  {
    id: 40,
    price: 2.5,
    image: "bundle-imgs/ts-resume-template/blue/blue-1.webp",
    title: "Professional Modern Resume CV Template Word Google Docs",
    name: "Professional Modern Resume CV Template Word Google Docs",
    description:
      "Introducing our Modern Resume Template: Stand Out from the Crowd with a Sleek and Professional Design",
    imgSrc: "./bundle-imgs/ts-resume-template/blue/blue-1.webp",
  },
  {
    id: 41,
    price: 2.5,
    image: "bundle-imgs/ts-resume-template/grey/grey-1.webp",
    title:
      "Modern Curriculum Vitae Executive CV Resume Template Word Google Docs",
    name: "Modern Curriculum Vitae Executive CV Resume Template Word Google Docs",
    description:
      "Introducing our Modern Resume Template: Stand Out from the Crowd with a Sleek and Professional Design",
    imgSrc: "./bundle-imgs/ts-resume-template/grey/grey-1.webp",
  },
  {
    id: 42,
    price: 2.5,
    image: "bundle-imgs/ts-resume-template/pink/pink-1.webp",
    title: "Modern Pink Resume CV Template Word Google Docs",
    name: "Modern Pink Resume CV Template Word Google Docs",
    description:
      "Introducing our Modern Resume Template: Stand Out from the Crowd with a Sleek and Professional Design",
    imgSrc: "./bundle-imgs/ts-resume-template/pink/pink-1.webp",
  },
  {
    id: 43,
    price: 2.5,
    image: "bundle-imgs/ts-resume-template/red/red-1.webp",
    title: "Editable Resume CV Template Word Google Docs",
    name: "Editable Resume CV Template Word Google Docs",
    description:
      "Introducing our Modern Resume Template: Stand Out from the Crowd with a Sleek and Professional Design",
    imgSrc: "./bundle-imgs/ts-resume-template/red/red-1.webp",
  },
  {
    id: 44,
    price: 2.5,
    image: "bundle-imgs/ts-resume-template/purple/purple-1.webp",
    title: "Creative Resume CV Template Word Google Docs Business Cover Letter",
    name: "Creative Resume CV Template Word Google Docs Business Cover Letter",
    description:
      "Introducing our Modern Resume Template: Stand Out from the Crowd with a Sleek and Professional Design",
    imgSrc: "./bundle-imgs/ts-resume-template/purple/purple-1.webp",
  },
  {
    id: 45,
    price: 2.5,
    image: "bundle-imgs/kr-resume/blue/blue-1.webp",
    title: "Editable Minimal CV Resume Template Word Google Docs",
    name: "Editable Minimal CV Resume Template Word Google Docs",
    description:
      "Introducing our Minimal Resume Template: Make a Lasting Impression with a Polished and Professional Design",
    imgSrc: "./bundle-imgs/kr-resume/blue/blue-1.webp",
  },
  {
    id: 46,
    price: 2.5,
    image: "bundle-imgs/kr-resume/grey/grey-1.webp",
    title: "Professional Minimal Resume CV Template Word Google Docs",
    name: "Professional Minimal Resume CV Template Word Google Docs",
    description:
      "Introducing our Minimal Resume Template: Make a Lasting Impression with a Polished and Professional Design",
    imgSrc: "./bundle-imgs/kr-resume/grey/grey-1.webp",
  },
  {
    id: 47,
    price: 2.5,
    image: "bundle-imgs/kr-resume/pink/pink-1.webp",
    title: "Clean Pink Resume CV Template Word Google Docs",
    name: "Clean Pink Resume CV Template Word Google Docs",
    description:
      "Introducing our Minimal Resume Template: Make a Lasting Impression with a Polished and Professional Design",
    imgSrc: "./bundle-imgs/kr-resume/pink/pink-1.webp",
  },
  {
    id: 48,
    price: 2.5,
    image: "bundle-imgs/kr-resume/red/red-1.webp",
    title:
      "Minimal Professional CV Resume Template Word Google Docs Lebenslauf Vorlage Schuler",
    name: "Minimal Professional CV Resume Template Word Google Docs Lebenslauf Vorlage Schuler",
    description:
      "Introducing our Minimal Resume Template: Make a Lasting Impression with a Polished and Professional Design",
    imgSrc: "./bundle-imgs/kr-resume/red/red-1.webp",
  },
  {
    id: 49,
    price: 2.5,
    image: "bundle-imgs/kr-resume/purple/purple-1.webp",
    title: "Simple Minimal CV Resume Template Word Google Docs",
    name: "Simple Minimal CV Resume Template Word Google Docs",
    description:
      "Introducing our Minimal Resume Template: Make a Lasting Impression with a Polished and Professional Design",
    imgSrc: "./bundle-imgs/kr-resume/purple/purple-1.webp",
  },

  // Add more products as needed
];

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

(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "thisiscanda.myshopify.com",
      storefrontAccessToken: "381ff4526fc386e823c143fc63829720",
    });

    /// add product
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "8126268932409",
        node: document.getElementById("test-checkout-1"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
          },
          toggle: {},
        },
      });
    });
  }

  /*<![CDATA[*/
})();
