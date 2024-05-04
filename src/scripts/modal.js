function modal() {
  const heroContent = document.querySelector(".hero__content");
  const modalContent = document.querySelector("#modal");
  const checkOfferBtn = document.querySelector(".hero--cta");
  const closeModalBtn = modalContent.querySelector(".modal-btn--close");
  const closeModalIcon = modalContent.querySelector(".modal-icon--close");

  function close() {
    modalContent.classList.remove("modal--show");
    heroContent.classList.remove("blur");
    checkOfferBtn.disabled = false;
    document.removeEventListener("click", closeOutside, true);
  }

  function closeOutside(e) {
    if (!modalContent.contains(e.target)) {
      close();
    }
  }

  function open() {
    modalContent.classList.add("modal--show");
    heroContent.classList.add("blur");
    checkOfferBtn.disabled = true;
    document.addEventListener("click", closeOutside, true);
  }

  checkOfferBtn.addEventListener("click", open);

  [closeModalBtn, closeModalIcon].forEach((closeModal) =>
    closeModal.addEventListener("click", close),
  );
}

function burgerNavigation() {
  const burger = document.getElementById("burger-menu");
  const navigation = document.getElementById("navigation-list");
  const top = burger.querySelector(".top");
  const middle = burger.querySelector(".middle");
  const bottom = burger.querySelector(".bottom");
  const allLinks = navigation.querySelectorAll("li");

  function toogle() {
    navigation.classList.toggle("translate-x-0");
    top.classList.toggle("rotate-[45deg]");
    middle.classList.toggle("-translate-x-20");
    bottom.classList.toggle("-rotate-[45deg]");
    document.querySelector("body").classList.toggle("overflow-y-hidden");
  }

  allLinks.forEach((link) => {
    link.addEventListener("click", toogle);
  });

  burger.addEventListener("click", toogle);
}

document.addEventListener("DOMContentLoaded", modal);
document.addEventListener("DOMContentLoaded", burgerNavigation);
