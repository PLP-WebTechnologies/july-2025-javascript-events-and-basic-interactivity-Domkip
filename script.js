

// Part 1: Event Handling Basics


// Light/Dark mode toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Hover event for text
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
  hoverText.style.color = "red";
});
hoverText.addEventListener("mouseout", () => {
  hoverText.style.color = "";
});

// Keyboard events
const typingInput = document.getElementById("typingInput");
const keyOutput = document.getElementById("keyOutput");

typingInput.addEventListener("keydown", (e) => {
  keyOutput.textContent = `Key down: ${e.key}`;
});
typingInput.addEventListener("keyup", (e) => {
  keyOutput.textContent = `Key up: ${e.key}`;
});


// Part 2: Interactive Elements


// Counter Game
let counter = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

document.getElementById("decrementBtn").addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterDisplay.textContent = counter;
});

// Collapsible FAQ Section
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("show");
  });
});


// Part 3: Form Validation


document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Reset error messages
  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  let isValid = true;

  // Username validation
  if (username === "") {
    document.getElementById("usernameError").textContent =
      "Username is required.";
    isValid = false;
  } else if (username.length < 3) {
    document.getElementById("usernameError").textContent =
      "Username must be at least 3 characters.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Password validation
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password is required.";
    isValid = false;
  } else if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be 8+ characters, include letters and numbers.";
    isValid = false;
  }

  // Final success
  if (isValid) {
    alert("Form submitted successfully ");
    this.reset();
  }
});
