// prevent background scroll based on : https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/

window.addEventListener('load', function () {
  const modalImage = document.getElementById('modal-image');
  const modalContainer = document.getElementById('modal-container');
  const modalCloseButton = document.getElementById('modal-close-button');

  const animationDuration = '0.6s';
  modalImage.style['animation-duration'] = animationDuration;
  modalImage.style['-webkit-animation-duration'] = animationDuration;

  const burgers = document.querySelector('.burgers');

  closeModal = () => {
    modalImage.style['animation-name'] = 'zoom-out';
    modalImage.style['-webkit-animation-name'] = 'zoom-out';
    setTimeout(function () {
      modalContainer.style.display = 'none';
      burgers.style.display = '';
      modalActive = false;

      // background
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }, parseFloat(animationDuration) * 1000);
  }

  openModal = (e) => {
    if (e.target.classList.contains('nav-logo')) return;
    if (e.target.localName == 'img') {
      modalImage.style['animation-name'] = 'zoom-in';
      modalImage.style['-webkit-animation-name'] = 'zoom-in';
      modalImage.src = e.target.src;
      modalContainer.style.display = 'block';
      burgers.style.display = 'none';
      modalActive = true;

      // background
      document.body.style.top = '-' + window.scrollY + 'px';
      document.body.style.position = 'fixed';
    }
  }

  // desktop events
  let modalActive = false;
  modalCloseButton.addEventListener('click', () => { closeModal(); });
  document.addEventListener("click", (e) => { openModal(e); });

  // mobile events
  let initialTouchY = 0;
  let screenHeight = window.screen.height
  prepareCloseModal = false;
  document.addEventListener("touchstart", function (e) {
    if (!modalActive) return;
    initialTouchY = e.touches[e.touches.length - 1].screenY;
  });

  document.addEventListener("touchmove", function (e) {
    if (!modalActive) return;
    let currentTouchY = e.touches[e.touches.length - 1].screenY;
    prepareCloseModal = (currentTouchY - initialTouchY) > (screenHeight * 0.4);
  });

  document.addEventListener("touchend", function (e) {
    if (!modalActive) return;
    if (prepareCloseModal) {
      closeModal();
      prepareCloseModal = false;
    }
  });

});
