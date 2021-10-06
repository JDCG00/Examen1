'use strict'

var suma = 0

do {

  var num = prompt('Introduzca número: ')



  if (Number(num) == num) {
    num = Number(num)
    suma = suma + num
  }
  else {
    if (num!=undefined) {
      alert('Introduzca dato de nuevo')
    }
  }



} while (num!=undefined);

document.write('Suma: ' + suma)
