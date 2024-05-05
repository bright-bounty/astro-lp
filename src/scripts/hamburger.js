function burgerNavigation() {
  const mobileIcon = document.getElementById("mobile-navigation");
  const mobileBars = mobileIcon.querySelector(".nav-bars");
  const navigation = document.getElementById("navigation-list");
  const allLinks = navigation.querySelectorAll("li");

  function toogle() {
    navigation.classList.toggle("nav-hover");
    mobileBars.children[0].classList.toggle("rotate-right");
    mobileBars.children[1].classList.toggle("hidden");
    mobileBars.children[2].classList.toggle("rotate-left");
    document.querySelector("body").classList.toggle("overflow-y-hidden");
  }

  allLinks.forEach((link) => {
    link.addEventListener("click", toogle);
  });

  mobileIcon.addEventListener("click", toogle);
}

document.addEventListener("DOMContentLoaded", burgerNavigation);
