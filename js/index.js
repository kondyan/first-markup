(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    form: document.querySelector(".form-modal"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.form.addEventListener("submit", submitModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    if (!refs.modal.classList.contains("is-hidden")) {
      bodyScrollLock.disableBodyScroll(document.body);
    } else {
      bodyScrollLock.enableBodyScroll(document.body);
    }
  }

  function submitModal(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
  }
})();
