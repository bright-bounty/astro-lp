function modal() {
  const heroContent = document.querySelector(".hero__content");
  const modalContent = document.querySelector("#modal");
  const checkOfferBtn = document.querySelector(".hero--cta");
  const confrimModalBtn = document.querySelector(".modal-btn--confirm");
  const closeModalBtn = document.querySelector(".modal-btn--close");
  const closeModalIcon = document.querySelector(".modal-icon--close");

  function close() {
    modalContent.classList.remove("modal--show");
    heroContent.classList.remove("blur");
  }
  checkOfferBtn.addEventListener("click", () => {
    modalContent.classList.add("modal--show");
    heroContent.classList.add("blur");
  });

  [closeModalBtn, closeModalIcon].forEach((closeModal) =>
    closeModal.addEventListener("click", close)
  );
}

document.addEventListener("DOMContentLoaded", modal);
