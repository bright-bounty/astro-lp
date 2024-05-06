function burgerList() {
  const mobileIcon = document.getElementById("mobile-navigation");
  const mobileBars = mobileIcon.querySelector(".nav-bars");
  const list = document.getElementById("navigation-list");
  const allListItem = list.querySelectorAll("li");

  function toogle() {
    list.classList.toggle("nav-hover");
    mobileBars.children[0].classList.toggle("rotate-right");
    mobileBars.children[1].classList.toggle("hidden");
    mobileBars.children[2].classList.toggle("rotate-left");
    document.body.classList.toggle("overflow-y-hidden");
  }

  allListItem.forEach((link) => {
    link.addEventListener("click", toogle);
  });

  mobileIcon.addEventListener("click", toogle);
}

document.addEventListener("DOMContentLoaded", burgerNavigation);
