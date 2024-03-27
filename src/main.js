(() => {
  const mobileMenu = document.querySelector('#menu-modal');
  const openMenuBtn = document.querySelector('#menu-modal-open');
  const closeMenuBtn = document.querySelector('#menu-modal-close');
  const closeMenuBtn1 = document.querySelector('#js-close-menu-1');
  const closeMenuBtn3 = document.querySelector('#js-close-menu-3');
  const closeMenuBtn2 = document.querySelector('#js-close-menu-2');
  const closeMenuBtn4 = document.querySelector('#js-close-menu-4');
  const closeMenuBtn5 = document.querySelector('#js-close-menu-5');
  const closeMenuBtn6= document.querySelector('#js-close-menu-6');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn1.addEventListener('click', toggleMenu);
  closeMenuBtn2.addEventListener('click', toggleMenu);
  closeMenuBtn3.addEventListener('click', toggleMenu);
closeMenuBtn4.addEventListener('click', toggleMenu);
  closeMenuBtn5.addEventListener('click', toggleMenu);
  closeMenuBtn6.addEventListener('click', toggleMenu);
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();