function setActive() {
  const salaryButtons = document.querySelectorAll(".salary-button");
  const buttonOne = document.getElementById("buttonone");
  const buttonTwo = document.getElementById("buttontwo");
  const resultInput = document.getElementById("resultInput");

  salaryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const salaryValue = parseInt(button.dataset.value);

      salaryButtons.forEach((salaryButton) => {
        salaryButton.classList.remove("active");
        salaryButton.style.color = "";
      });

      button.classList.add("active");

      if (salaryValue === 300) {
        buttonOne.style.backgroundColor = "white";
        buttonOne.style.color = "black !important";
        buttonTwo.style.backgroundColor = "";
        resultInput.value = "12";
      } else if (salaryValue === 400) {
        buttonOne.style.backgroundColor = "white";
        buttonOne.style.color = "black !important";
        buttonTwo.style.backgroundColor = "";
        resultInput.value = "6";
      } else {
        buttonOne.style.backgroundColor = "";
        buttonTwo.style.backgroundColor = "white";
        buttonTwo.style.color = "black !important";
        resultInput.value = "3";
      }
    });
  });
}
