window.addEventListener('load', function () {
  // sidebar toggle
  const burgers = document.querySelector('.burgers');
  const navMobile = document.querySelector('.nav-mobile');

  let menuOpen = false;
  burgers.addEventListener('click', () => {
    if (menuOpen) {
      burgers.classList.remove('active');
      navMobile.classList.remove('open');
      menuOpen = false;
    } else {
      burgers.classList.add('active');
      navMobile.classList.add('open');
      menuOpen = true;
    }
  });
});
