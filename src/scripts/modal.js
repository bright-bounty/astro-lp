console.log(`object`);

function modal() {
  const heroContent = document.querySelector(".hero__content");
  const modalContent = document.querySelector("#modal");
  const checkOfferBtn = document.querySelector(".hero--cta");
  const confrimModalBtn = document.querySelector(".modal-btn--confirm");
  const closeModalBtn = document.querySelector(".modal-btn--close");
  const closeModalIcon = document.querySelector(".modal-icon--close");

  checkOfferBtn.addEventListener("click", () => {
    modalContent.classList.add("modal--show");
    heroContent.classList.add("blure");
  });

  closeModalBtn.addEventListener("click", () => {
    modalContent.classList.remove("modal--show");
    heroContent.classList.remove("blure");
  });

  closeModalIcon.addEventListener("click", () => {
    modalContent.classList.remove("modal--show");
    heroContent.classList.remove("blure");
  });
}

document.addEventListener("DOMContentLoaded", modal);
