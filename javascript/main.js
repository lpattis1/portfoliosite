// Hamburger menu

const hamburgerMenu = document.querySelector(".before-menu");
const navMenu = document.querySelector(".nav-menu");
const closeNavMenu = document.querySelector(".close-nav-menu");
const navMenuLinks = document.querySelectorAll(".m-list-item");
const hoverState = document.querySelectorAll("hover-state");

function openHamburgerMenu() {
  hamburgerMenu.addEventListener("click", function (e) {
    navMenu.classList.add("nav-menu--show");
  });
}

function closeHamburgerMenu() {
  closeNavMenu.addEventListener("click", function (e) {
    navMenu.classList.remove("nav-menu--show");
  });
}

function linksShowHoverState() {
  navMenuLinks.forEach((link) => {
    link.addEventListener("mouseenter", function (e) {
      e.preventDefault();
      link.children[0].classList.add("hover-state--show");
    });

    link.addEventListener("mouseleave", function (e) {
      e.preventDefault();
      link.children[0].classList.remove("hover-state--show");
    });
  });
}

openHamburgerMenu();
closeHamburgerMenu();
linksShowHoverState();

// -----------------------------------------------

// Projects

const featuredProjects = document.querySelectorAll(".featured");
const filterProjects = document.querySelectorAll(".project");
const portfolioContainer = document.querySelector(".portfolio");
const bgs = document.querySelectorAll(".bg");
const descriptions = document.querySelectorAll(".project-description");

function sortProjects() {
  filterProjects.forEach((project) => {
    project.addEventListener("click", function (e) {
      let projectData = e.target.dataset.category.toLowerCase();

      if (project === filterProjects[2] || project === filterProjects[3]) {
        portfolioContainer.classList.add("portfolio-height");
      } else {
        portfolioContainer.classList.remove("portfolio-height");
      }

      for (let i = 0; i < filterProjects.length; i++) {
        filterProjects[i].classList.remove("active-project");
      }
      project.classList.add("active-project");

      featuredProjects.forEach((featured) => {
        if (!featured.classList.contains(projectData)) {
          featured.classList.add("hidden");
        } else {
          featured.classList.remove("hidden");
          featured.animate(
            [
              {
                transform: "scale(0.3)",
                opacity: "0",
              },
              {
                transform: "scale(1)",
                opacity: "1",
              },
            ],
            {
              duration: 1000,
              fill: "forwards",
            }
          );
        }
      });
    });
  });
}

function darkenBg() {
  featuredProjects.forEach((featured) => {
    featured.addEventListener("mouseleave", function (e) {
      e.preventDefault();
      for (let i = 0; i < featuredProjects.length; i++) {
        featuredProjects[i].children[0].classList.remove("bg-dark");
      }
    });

    featured.addEventListener("mouseenter", function (e) {
      e.preventDefault();
      featured.children[0].classList.add("bg-dark");
    });
  });
}

function showProjectDescription() {
  featuredProjects.forEach((featured) => {
    featured.addEventListener("mouseleave", function (e) {
      e.preventDefault();
      for (let i = 0; i < featuredProjects.length; i++) {
        featuredProjects[i].children[0].children[0].classList.remove(
          "project-description-show"
        );
        featuredProjects[i].children[0].children[0].classList.add(
          "project-description"
        );
      }
    });

    featured.addEventListener("mouseenter", function (e) {
      e.preventDefault();
      featured.children[0].children[0].classList.add(
        "project-description-show"
      );
      featured.children[0].children[0].classList.remove("project-description");
    });
  });
}

sortProjects();
darkenBg();
showProjectDescription();

// -----------------------------------------------
