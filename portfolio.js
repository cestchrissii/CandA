// Function to open the share popup
function openSharePopup() {
  // Define the URL and text for your blog article
  const articleUrl = "https://www.example.com/my-blog-article";
  const articleText = "Check out this awesome blog article!";

  // Create a shareable URL
  const shareUrl = `https://www.example.com/share?url=${encodeURIComponent(
    articleUrl
  )}&text=${encodeURIComponent(articleText)}`;

  // Open a popup window with share options
  window.open(shareUrl, "_blank", "width=600,height=400");
}
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
