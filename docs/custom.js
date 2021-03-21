const background_count = 40
let random_int = Math.round(Math.random() * 39 + 1); // 1 - n 
let link = '/images/background/' + random_int + '.jpg'

let preload = document.createElement('link')
preload.href = link
preload.rel = 'preload'
preload.as = 'image'
document.head.appendChild(preload)

document.addEventListener('DOMContentLoaded', function () {
  document.body.style.backgroundImage = 'url(/images/background/' + random_int + '.jpg)'
})

console.log('loaded custom javascript')