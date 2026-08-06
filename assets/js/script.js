// Newsletter signup (front-end only, no backend wired up yet)
const signupForm = document.getElementById("signup-form");
const formNote = document.getElementById("form-note");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValid) {
    formNote.textContent = "Please enter a valid email address.";
    return;
  }
  formNote.textContent = `Thanks! We'll let ${email} know when we launch.`;
  signupForm.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
