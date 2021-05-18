const loadingPage = document.querySelector(".loading");
const header = document.querySelector(".header");
const loadingBar = document.querySelector(".load");
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

function showLoadingScreen() {
  setInterval(() => {
    loadingPage.classList.remove("show-loading-screen");
    loadingBar.style.visibility = "hidden";
    loadingPage.animate([{ opacity: "1" }, { opacity: "0" }], {
      duration: 1000,
      fill: "backwards",
      delay: "0.1s",
    });
    playLoadingScreenOnce();
  }, 2500);
}

showLoadingScreen();
fillBar();
