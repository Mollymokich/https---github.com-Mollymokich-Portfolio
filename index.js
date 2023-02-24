const navButton = document.getElementById("nav-btn");
const navMenu = document.getElementById("nav");

navButton.addEventListener("click", function () {
  const isOpen = navMenu.classList.contains("active");

  if (isOpen) {
    navMenu.classList.remove("active");
    navButtonImg.src = "./img/icons/nav-open.svg";
    navButtonImg.alt = "Navigation button";
  } else {
    navMenu.classList.add("active");
    navButtonImg.src = "./img/icons/nav-close.svg";
    navButtonImg.alt = "Close navigation button";
  }
});
