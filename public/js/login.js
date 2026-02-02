const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

form.addEventListener("submit", (e) => {
  let valid = true;

  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  if (email.value.trim() === "") {
    document.getElementById("emailError").textContent = "Email is required";
    valid = false;
  }

  if (password.value.trim().length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    valid = false;
  }

  if (!valid) {
    e.preventDefault();
  }
});

togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    password.type = "password";
    togglePassword.textContent = "Show";
  }
});
