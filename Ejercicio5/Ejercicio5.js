'use strict'

function time() {

  let tiempo = new Date()

  document.write(`<h2> Hora actual: ${tiempo.getHours()} : ${tiempo.getMinutes()} : ${tiempo.getSeconds()} </h2>`)

  window.setTimeout(time, 1000)

}

window.setTimeout(time, 1000)
