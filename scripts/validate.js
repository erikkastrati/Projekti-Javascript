const form = document.getElementById("application-form");
const emriError = document.getElementById("emri-error");
const emailError = document.getElementById("email-error");
const telnumberError = document.getElementById("telnumber-error");
const chooseProgram = document.getElementById("chooseprog-error");

function validateForm() {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emri = document.getElementById("emri").value.trim();
    const email = document.getElementById("email").value.trim();
    const telnumber = document.getElementById("telnumber").value.trim();
    const program = document.getElementById("chooseprogram").value;

    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(emri)) {
      emriError.textContent =
        "Emri duhet të përmbajë vetëm shkronja dhe hapsira.";
      return;
    } else {
      emriError.textContent = ""; // Clear error message
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      emailError.textContent = "Ju lutemi, jepni një adresë email valide.";
      return;
    } else {
      emailError.textContent = ""; // Clear error message
    }

    const phonePattern = /^[0-9]{10}$/;
    if (phonePattern.test(telnumber)) {
      telnumberError.textContent =
        "Ju lutemi, jepni një numër telefoni valide.";
      return;
    } else {
      telnumberError.textContent = ""; // Clear error message
    }

    if (program === "") {
      chooseProgram.textContent = "Ju lutemi, zgjidhni një program.";
      return;
    } else {
      chooseProgram.textContent = "";
    }

    alert("Forma është e vlefshme dhe është gati për dërgim!");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  validateForm();
});
