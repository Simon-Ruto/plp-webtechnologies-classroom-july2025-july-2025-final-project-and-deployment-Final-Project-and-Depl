// -------- FORM VALIDATION --------
const formm = document.getElementById('formm');
const emaill = document.getElementById('emaill');
const namee = document.getElementById('namee');
const errorMessage = document.getElementById('errorMessage');

if (formm) {
  formm.addEventListener('submit', (e) => {
    errorMessage.textContent = ""; // clear previous errors

    if (namee.value === '' || namee.value == null) {
      e.preventDefault(); // stop form submission
      errorMessage.textContent = "⚠️ Name field is required!";
    } else if (emaill.value === '' || !emaill.value.includes('@')) {
      e.preventDefault();
      errorMessage.textContent = "⚠️ Please enter a valid email!";
    }
  });
}

// -------- TOGGLE MENU --------
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      // Switch between open/closed
      menu.classList.toggle("open");
    });
  }
});




