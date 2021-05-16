const socialModal = document.querySelector(".socials-modal");
const closeBtn = document.querySelector(".socials-modal-close");
const exitBtn = document.querySelector(".social-exit");

function loadModal() {
  let socialState = false;
  window.onload = function () {
    setTimeout(() => {
      if (socialState === false) {
        socialModal.classList.add("socials-modal--visible");
        socialState = true;
      }
    }, 7000);
  };
}

function closeModal() {
  socialModal.classList.remove("socials-modal--visible");
}

closeBtn.addEventListener("click", function (e) {
  closeModal();
});

exitBtn.addEventListener("click", function (e) {
  closeModal();
});

loadModal();
