const loadingPage = document.querySelector(".loading");
const header = document.querySelector(".header");
const loadingBar = document.querySelector(".load");
const portfolioHide = document.querySelector(".portfolio");
let width = 0;

function fillBar() {
  let interval = setInterval(() => {
    if (width >= 169) {
      width = 0;
      loadingBar.style.visibility = "hidden";
    } else {
      width++;
      loadingBar.style.width = `${width}%`;
    }
  }, 15);
}

portfolioHide.style.display = "none";

function showLoadingScreen() {
  setInterval(() => {
    loadingPage.classList.remove("show-loading-screen");
    loadingBar.style.visibility = "hidden";
  }, 2500);
}

setInterval(() => {
  portfolioHide.style.display = "flex";
}, 3000);

showLoadingScreen();
fillBar();
