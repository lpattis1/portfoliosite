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

// ----------------------------------------

const portfolioProjects = document.querySelectorAll(".featured");
const portfolioProjectPopup = document.querySelector(".show-project");
const portfolioProjectPreview = document.querySelector(".show-project-image");

function openFeaturedProject() {
  portfolioProjects.forEach((project) => {
    project.addEventListener("click", function (e) {
      let projectNum = project.dataset.project;
      console.log(projectNum);
      portfolioProjectPopup.classList.add("show-project-visible");

      portfolioProjectPreview.src = `/img/${projectNum}.png`;
    });

    portfolioProjectPopup.addEventListener("click", function (e) {
      if (e.target === portfolioProjectPopup) {
        portfolioProjectPopup.classList.remove("show-project-visible");
      }
    });
  });
}

openFeaturedProject();
