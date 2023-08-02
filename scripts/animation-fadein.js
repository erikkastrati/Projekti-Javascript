$(window).on("load", bounceLeft);
function bounceLeft() {
  const element = document.getElementById("wrapper");
  element.classList.add("animate__animated", "animate__fadeInLeft");
}
