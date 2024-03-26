(() => {
  const refs = {
    openModalBtn: document.querySelector('[menu-modal-open]'),
    closeModalBtn: document.querySelector('[menu-modal-close]'),
    modal: document.querySelector('[menu-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModalMenu);
  refs.closeModalBtn.addEventListener('click', toggleModalMenu);
  function toggleModalMenu() {
    refs.modal.classList.toggle('is-open');
  }
})();