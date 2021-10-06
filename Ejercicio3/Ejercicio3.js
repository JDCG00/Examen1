'use strict'


function aleatorio(min,max) {
  return Math.random() * (151 - (-150)) + (-150)
}


for (let i = 0; i < 10; i++) {
  document.write(aleatorio() + '<br/>')
}
