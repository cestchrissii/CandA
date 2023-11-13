document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    effect: "fade", // Use fade effect
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000, // Change slide every 5 seconds
    },
  });
  const btnNav = document.querySelector(".btn-mobile-nav");
  const header = document.querySelector(".header");

  btnNav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });
  // Subscribe button click event
  const subscribeButton = document.querySelector(".btn--form");
  subscribeButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Get the user's name and email from the input fields
    const fullNameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();

    // You can perform validation here if needed

    // Send the subscription data to your server or perform the desired action
    // For example, you can use fetch to send a POST request to your server
    const apiUrl =
      "https://candaserver.vercel.app/add-customer";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer: {
          first_name: fullName,
          last_name: "",
          email,
          accepts_marketing: true
        }
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from your server here
        alert("Subscription successful!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Subscription failed. Please try again.");
      });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Find the subscribe button by its ID
    var subscribeButton = document.getElementById("subscribe-button");

    // Add a click event listener to the button
    subscribeButton.addEventListener("click", function () {
      // You can add your subscription logic here
      alert("Thank you for subscribing!");
    });
  });

  // Call updateCartCount initially to set the count to 0
  // updateCartCount();

  document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.getElementById("subscribe-form");
    const emailInput = document.getElementById("email");
    const subscriptionStatus = document.getElementById("subscription-status");

    subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simulate a successful subscription for demonstration purposes
      // In a real application, you would send the data to a server for processing.
      setTimeout(function () {
        const email = emailInput.value;
        subscriptionStatus.textContent = `Subscribed with email: ${email}`;
        emailInput.value = ""; // Clear the email input
      }, 1000); // Simulate a delay
    });
  });

  // Background slider code
  // Array of image URLs for the slideshow
  const slideshowImages = [
    "home-page/hero-section/slideshow-1/slider-photo-1.webp",
    "home-page/hero-section/slideshow-1/slider-photo-2.webp",
    "home-page/hero-section/slideshow-1/slider-photo-3.webp",
    "home-page/hero-section/slideshow-1/slider-photo-4.webp",
    "home-page/hero-section/slideshow-1/slider-photo-5.webp",
    // Add more image URLs as needed
  ];

  // Get the element with the class "section-hero-background"
  const heroBackground = document.querySelector(".section-hero-background");
  const headingAgency = document.querySelector(".agency-slideshow");

  let currentIndex = 0;
  let nextIndex = 1;

  // Function to change the background image
  function changeBackgroundImage() {
    heroBackground.style.transition = "background-image 1s";
    heroBackground.style.backgroundImage = `url(${slideshowImages[currentIndex]})`;

    // Reset the transition after the specified duration
    setTimeout(() => {
      heroBackground.style.transition = "none";
      currentIndex = nextIndex;
    }, 30000); // Adjust the duration to match the transition duration

    // Increment the index or reset it if it reaches the end
    currentIndex = (currentIndex + 1) % slideshowImages.length;
  }

  // Call the function to start the slideshow and set the interval
  changeBackgroundImage(); // Show the first image immediately

  // Change the background image every 5 seconds (5000 milliseconds)
  const slideshowInterval = setInterval(changeBackgroundImage, 5000);

  const headingAgencyImages = [
    "home-page/agency-section/slideshow-2/slider-photo-1.webp",
    "home-page/agency-section/slideshow-2/slider-photo-2.webp",
    "home-page/agency-section/slideshow-2/slider-photo-3.webp",
    "home-page/agency-section/slideshow-2/slider-photo-4.webp",
    "home-page/agency-section/slideshow-2/slider-photo-5.webp",
    // Add more image URLs as needed
  ];

  function changeBackgroundheadingAgency() {
    headingAgency.style.backgroundImage = `url(${headingAgencyImages[currentIndex]})`;

    // Increment the index or reset it if it reaches the end
    currentIndex = (currentIndex + 1) % headingAgencyImages.length;
  }

  changeBackgroundheadingAgency();

  const slideshowIntervalAgency = setInterval(
    changeBackgroundheadingAgency,
    5000
  );
});

// Configure the fairy dust effect
// particlesJS("hero-dust", {
//   particles: {
//     number: {
//       value: 50, // Number of particles
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//     color: {
//       value: "#b88dbb", // Color of the particles
//     },
//     shape: {
//       type: "circle", // Shape of the particles
//       stroke: {
//         width: 0,
//         color: "#000000",
//       },
//       polygon: {
//         nb_sides: 5,
//       },
//     },
//     opacity: {
//       value: 0.5, // Opacity of the particles
//       random: true,
//       anim: {
//         enable: true,
//         speed: 1,
//         opacity_min: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 4, // Size of the particles
//       random: true,
//     },
//     line_linked: {
//       enable: false,
//     },
//     move: {
//       enable: true,
//       speed: 1, // Speed of particle movement
//       direction: "none",
//       random: true,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: true,
//         mode: "repulse", // Interaction mode on hover
//       },
//       onclick: {
//         enable: true,
//         mode: "push", // Interaction mode on click
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         line_linked: {
//           opacity: 1,
//         },
//       },
//       bubble: {
//         distance: 800,
//         size: 80,
//         duration: 2,
//         opacity: 0.8,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//       push: {
//         particles_nb: 4,
//       },
//       remove: {
//         particles_nb: 2,
//       },
//     },
//   },
// });

// Initialize the fairy dust effect
// particlesJS("hero-dust");

///////////////////////////////////////////////////////////////////
// Smooth Scrolling Animation
const allLinks = document.querySelector("a:link");
// console.log(allLinks)
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    //scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEL.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////////////
//sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

//////////////////////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

//https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) {
      alert("Please fill in both name and email fields.");
      return;
    }

    // Replace this with your Shopify Storefront API endpoint for creating customers.
    const apiEndpoint =
      "https://thisiscanda.myshopify.com/api/2021-07/graphql.json";
    const accessToken = "fe68251fab787c99f3e14494d10c403c";

    // Construct the GraphQL query to create a customer.
    const graphqlQuery = `
          mutation {
              customerCreate(input: {
                  firstName: "${name}",
                  email: "${email}",
                  password: "temp-password"  # You can set a temporary password
              }) {
                  customer {
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
        if (data.data.customerCreate.customer) {
          alert("Subscription successful!");
          // You can redirect or perform other actions here.
        } else if (data.data.customerCreate.userErrors.length > 0) {
          const errorMessages = data.data.customerCreate.userErrors
            .map((error) => error.message)
            .join("\n");
          alert(`Subscription failed. Errors:\n${errorMessages}`);
        } else {
          alert("Subscription failed. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });

    // Clear input fields after submission
    nameInput.value = "";
    emailInput.value = "";
  });
});
