function modal() {
  const heroContent = document.querySelector(".hero__content");
  const modalContent = document.querySelector("#modal");
  const checkOfferBtn = document.querySelector(".hero--cta");
  const confrimModalBtn = modalContent.querySelector(".modal-btn--confirm");
  const closeModalBtn = modalContent.querySelector(".modal-btn--close");
  const closeModalIcon = modalContent.querySelector(".modal-icon--close");

  function close() {
    modalContent.classList.remove("modal--show");
    heroContent.classList.remove("blur");

    checkOfferBtn.disabled = false;

    document.removeEventListener("click", closeOutside, true);
  }

  function open() {
    modalContent.classList.add("modal--show");
    heroContent.classList.add("blur");

    checkOfferBtn.disabled = true;

    document.addEventListener("click", closeOutside, true);
  }

  function closeOutside(e) {
    modalContent.contains(e.target) ? "" : close();
  }

  checkOfferBtn.addEventListener("click", open);

  [closeModalBtn, closeModalIcon].forEach((closeModal) =>
    closeModal.addEventListener("click", close)
  );
}
document.addEventListener("DOMContentLoaded", modal);
