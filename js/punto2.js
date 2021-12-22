const num1 = parseInt(prompt('Ingrese la primer nota'))
const num2 = parseInt(prompt('Ingrese la segunda nota'))
const num3 = parseInt(prompt('Ingrese la tercer nota'))

const promedio = ((num1 + num2 + num3) / 3);
if(promedio >= 7) {
  alert('APROBADO');
}
