window.addEventListener('load', function () {
  const modal_image = document.getElementById('modal-image');
  const modal_container = document.getElementById('modal-container');
  const modal_close = document.getElementById('modal-close');

  const animation_duration = '0.6s';
  modal_image.style['animation-duration'] = animation_duration;
  modal_image.style['-webkit-animation-duration'] = animation_duration;

  modal_close.onclick = function () {
    modal_image.style['animation-name'] = 'zoom-out';
    modal_image.style['-webkit-animation-name'] = 'zoom-out';
    setTimeout(function () {
      modal_container.style.display = 'none';
    }, parseFloat(animation_duration) * 1000);
  }

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains('nav-logo')) return;
    if (e.target.localName == 'img') {
      modal_image.style['animation-name'] = 'zoom-in';
      modal_image.style['-webkit-animation-name'] = 'zoom-in';
      modal_image.src = e.target.src;
      modal_container.style.display = 'block';
    }
  })
});
