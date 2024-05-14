function modal() {
  const heroContent = document.querySelector(".hero__content");
  const projectContent = document.querySelector(".projects");
  const modalContent = document.querySelector("#modal");
  const checkOfferBtn = document.querySelector(".hero--cta");
  const closeModalBtn = modalContent.querySelector(".modal-btn--close");
  const closeModalIcon = modalContent.querySelector(".modal-icon--close");

  function close() {
    modalContent.classList.remove("modal--show");
    [heroContent, projectContent].forEach((content) => {
      content.classList.remove("blur-sm");
    });
    checkOfferBtn.disabled = false;
    document.removeEventListener("click", closeOutside, true);
    document.body.classList.remove("overflow-y-hidden");
  }

  function closeOutside(e) {
    if (!modalContent.contains(e.target)) {
      close();
    }
  }

  function open() {
    modalContent.style.marginTop = `${document.documentElement.scrollTop}px`;
    modalContent.classList.add("modal--show");
    [heroContent, projectContent].forEach((content) => {
      content.classList.add("blur-sm");
    });
    checkOfferBtn.disabled = true;
    document.addEventListener("click", closeOutside, true);
    document.body.classList.add("overflow-y-hidden");
  }

  checkOfferBtn.addEventListener("click", open);

  [closeModalBtn, closeModalIcon].forEach((closeModal) =>
    closeModal.addEventListener("click", close),
  );
}
document.addEventListener("DOMContentLoaded", modal);
