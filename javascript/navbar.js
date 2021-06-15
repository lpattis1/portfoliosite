// Make navbar sticky on scroll

function makeNavbarFixed() {
  const nav = document.querySelector(".navbar");

  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset >= 250) {
      nav.classList.add("fixed");
    } else if (window.pageYOffset <= 150) {
      nav.classList.remove("fixed");
    }
  });
}

makeNavbarFixed();
