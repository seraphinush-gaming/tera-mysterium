const background_count = 30

window.addEventListener('load', function() {
  // randomize background
  let random_int = Math.round(Math.random() * 29 + 1); // 1 - n
  document.body.style.backgroundImage = 'url(/images/background/' + random_int + '.jpg)'
})

console.log('loaded custom javascript')