// Select all FAQ items
const faqItems = document.querySelectorAll(".faq-item");

// Iterate through each FAQ item
faqItems.forEach((item) => {
  // Cache DOM elements for efficiency
  const question = item.querySelector("h2");
  const answer = item.querySelector(".answer");
  const toggleBtn = item.querySelector(".toggle-btn img");

  // Toggle function for both the question and button
  function toggleAnswer() {
    // Use a boolean variable for clarity
    const isOpen = item.classList.contains("open");

    // Toggle 'open' class and switch toggle icon
    item.classList.toggle("open");
    toggleBtn.src = isOpen
      ? "assets/images/icon-plus.svg"
      : "assets/images/icon-minus.svg";
  }

  // Add click event to both the question and toggle button
  question.addEventListener("click", toggleAnswer);
  item.querySelector(".toggle-btn").addEventListener("click", toggleAnswer);
});
