document.addEventListener("DOMContentLoaded", function () {
  const intervalTime = 1000;
  let currentIndex = 0;
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const images = sliderWrapper.querySelectorAll("img");
  const totalImages = images.length;

  function slideImages() {
    currentIndex = (currentIndex + 1) % totalImages;
    const translateValue = -10 * currentIndex;
    sliderWrapper.style.transform = `translateX(${translateValue}%)`;
  }

  setInterval(slideImages, intervalTime);
});
