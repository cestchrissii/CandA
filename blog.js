const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
const products = [
  {
    id: 0,
    price: 0,
    image: "blog/imgs/colors.webp",
    title: "How to Choose the Right Brand Colors- 5 Easy Steps",
    name: "How to Choose the Right Brand Colors- 5 Easy Steps",
    description:
      "Colors play a crucial role in your branding and marketing campaigns. Colors can evoke emotions from your audience...",
    link: "blog-article-page-colors.html",
    imgSrc: ".blog/imgs/colors.webp",
  },
  {
    id: 5,
    price: 0,
    image: "blog/imgs/social.webp",
    title:
      "Social Media Marketing Zero To Hero - How Small Businesses Can Thrive",
    name: "Social Media Marketing Zero To Hero - How Small Businesses Can Thrive",
    description:
      "Social media has become integral for small and large businesses alike. It allows them to connect directly to their target audience...",
    link: "blog-article-page-social-media.html",
    imgSrc: ".blog/imgs/social.webp",
  },
  {
    id: 2,
    price: 0,
    image: "blog/imgs/robe photo-Recovered.webp",
    title: "Self-Care Made Easy: How To Avoid Burnout For Professionals",
    name: "Self-Care Made Easy: How To Avoid Burnout For Professionals",
    description:
      "We are stuck between juggling work, personal commitments, and other obligations. Our constant commitments can take a negative toll... ",
    link: "blog-article-self-care.html",
    imgSrc: ".blog/imgs/robe photo-Recovered.webp",
  },
  {
    id: 4,
    price: 0,
    image: "blog/imgs/cover wpattern (1).webp",
    title: "Inflation Exposed: Expert Tips To Preserve And Grow Your Wealth",
    name: "Inflation Exposed: Expert Tips To Preserve And Grow Your Wealth",
    description:
      "We have watched, for the past few years as inflation grew to record heights. Inflation erodes your purchasing power...",
    link: "blog-article-page-inflation.html",
    imgSrc: ".blog/imgs/cover wpattern (1).webp",
  },
  {
    id: 3,
    price: 0,
    image: "blog/imgs/business-blog (1).webp",
    title:
      "How To Write An Effective Business Plan - High Impact & Results-Driven",
    name: "How To Write An Effective Business Plan - High Impact & Results-Driven",
    description:
      "A business plan acts as a roadmap to help you succeed. It should give you a clear vision, strategic direction, and a comprehensive understanding...",
    link: "blog-article-page-business-plan.html",
    imgSrc: ".blog/imgs/business-blog (1).webp",
  },
  {
    id: 1,
    price: 0,
    image: "blog/imgs/tools.webp",
    title: "10 Free Must Have Tools And Resources For Small Businesses",
    name: "10 Free Must Have Tools And Resources For Small Businesses",
    description:
      "Small businesses often operate with tight budgets and limited resources.  However, there are free tools from marketing to financial documents...",
    link: "blog-article-page-resources.html",
    imgSrc: ".blog/imgs/tools.webp",
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
