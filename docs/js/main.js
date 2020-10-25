window.addEventListener('load', function() {
  const back_btn = document.getElementById('back_btn')

  back_btn.onclick = function() {
    window.history.back()
  }
})