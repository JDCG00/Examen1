'use strict'

let num = prompt('Introduzca número: ')

let valorNum = parseInt(num)

if ((valorNum % 2 == 0) && (valorNum % 3 == 0) && (valorNum % 5 == 0) && (valorNum % 7 == 0)) {
  document.write('Es divisible por dos, tres, cinco y siete.')
}
else {
  document.write('No es divisible por dos, tres, cinco y siete.')
}
