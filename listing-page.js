let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  const slides = document.querySelectorAll(".carousel-images img");
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
}

function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", function () {
  const requestButtons = document.querySelectorAll("#request-button");

  requestButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const product = button.getAttribute("data-product");
      const name = prompt("Enter your name:");

      if (!name) {
        alert("Name is required to make a request.");
        return;
      }

      // Replace this with your Shopify Storefront API endpoint for handling product requests.
      const apiEndpoint =
        "https://thisiscanda.myshopify.com/api/2021-07/graphql.json";
      const accessToken = "fe68251fab787c99f3e14494d10c403c";

      const graphqlQuery = `
              mutation {
                  productRequestCreate(input: {
                      name: "${name}",
                      product: "${product}"
                  }) {
                      productRequest {
                          id
                      }
                      userErrors {
                          field
                          message
                      }
                  }
              }
          `;

      fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": accessToken,
        },
        body: JSON.stringify({ query: graphqlQuery }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.data.productRequestCreate.productRequest) {
            alert("Request submitted successfully!");
            // You can redirect or perform other actions here.
          } else if (data.data.productRequestCreate.userErrors.length > 0) {
            const errorMessages = data.data.productRequestCreate.userErrors
              .map((error) => error.message)
              .join("\n");
            alert(`Submission failed. Errors:\n${errorMessages}`);
          } else {
            alert("Submission failed. Please try again later.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        });
    });
  });
});
