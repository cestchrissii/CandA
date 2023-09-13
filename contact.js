// JavaScript function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Get the value from the name input field
  const name = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const organizationName = document.getElementById("organization-name").value;
  const budget = document.getElementById("budget").value;
  const projectDetails = document.getElementById("project-details").value;
  const timeline = document.getElementById("timeline").value;

  // You can perform additional actions here, such as form validation or sending data to a server

  // For this example, we'll just display an alert
  //   alert(`Hello, ${name}! Form submitted successfully.`);
  // }

  alert(
    `Name: ${name}\nEmail: ${email}\nTimeline: ${timeline}\nBudget: ${budget}\nProject Details: ${projectDetails}\nOrganization Name: ${organizationName}\nForm submitted successfully.`
  );
}

// Check if the newsletter checkbox is checked
const newsletterCheckbox = document.getElementById("newsletter");
const newsletterChecked = newsletterCheckbox.checked;

// Add an event listener to the form
const form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);
