// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent the default form submission

// Collect form data
// const formData = new FormData(this);

// Send the data to Shopify via an API or another mechanism
//     sendToShopify(formData);
//   });

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contact-form");
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const fullName = document.getElementById("full-name").value;
//     const email = document.getElementById("email").value;
//     const organization = document.getElementById("organization").value;
//     const budget = document.getElementById("budget").value;
//     const timeline = document.getElementById("timeline").value;
//     const projectDescription = document.getElementById(
//       "project-description"
//     ).value;
//     const newsletter = document.getElementById("newsletter").checked;

// Prepare the data to send to Shopify Admin API
// const data = {
//   customer: {
//     first_name: fullName,
//     email: email,
//     company: organization,
//   },
//   metafields: [
//     {
//       namespace: "contact_form",
//       key: "budget",
//       value: budget,
//     },
//     {
//       namespace: "contact_form",
//       key: "timeline",
//       value: timeline,
//     },
//     {
//       namespace: "contact_form",
//       key: "project_description",
//       value: projectDescription,
//     },
//     {
//       namespace: "contact_form",
//       key: "newsletter_subscription",
//       value: newsletter ? "subscribed" : "not_subscribed",
//     },
//   ],
// };

// Define your Shopify API URL and access token
// const apiUrl =
//   "https://thisiscanda.myshopify.com/admin/api/2021-07/customers.json";
// const accessToken = "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";

// Use a fetch request to send the data to Shopify Admin API
//     fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Shopify-Access-Token": accessToken,
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => {
//         if (response.ok) {
//           alert("Your information has been submitted. Thank you!");
//         } else {
//           alert("There was an error submitting your information.");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   });
// });

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data
    const fullName = $("#full-name").val();
    const email = $("#email").val();
    const organization = $("#organization").val();
    const budget = $("#budget").val();
    const timeline = $("#timeline").val();
    const projectDescription = $("#project-description").val();
    const newsletter = $("#newsletter").is(":checked")
      ? "subscribed"
      : "not_subscribed";

    // Prepare the data to send to Shopify Admin API
    const data = {
      customer: {
        first_name: fullName,
        email: email,
        company: organization,
      },
      metafields: [
        {
          namespace: "contact_form",
          key: "budget",
          value: budget,
          value_type: "string",
        },
        {
          namespace: "contact_form",
          key: "timeline",
          value: timeline,
          value_type: "string",
        },
        {
          namespace: "contact_form",
          key: "project_description",
          value: projectDescription,
          value_type: "string",
        },
        {
          namespace: "contact_form",
          key: "newsletter_subscription",
          value: newsletter,
          value_type: "string",
        },
      ],
    };
    // Define your Shopify API URL and access token
    const apiUrl =
      "https://thisiscanda.myshopify.com/admin/api/2021-07/customers.json"; // Replace with your Shopify store URL
    const accessToken = "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"; // Replace with your Shopify access token

    $.ajax({
      url: apiUrl,
      type: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      data: JSON.stringify(data),
      success: function () {
        alert("Your information has been submitted. Thank you!");
      },
      error: function () {
        alert("There was an error submitting your information.");
      },
    });
  });
