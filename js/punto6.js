const num = prompt('Ingrese un numero entre 100 y 999');

switch (num.length === 1){
  case 1:
    alert ('es un digito');
    break;
  case 2:
    alert ('son dos digitos');
    break;
  case 3:
    alert ('son tres digitos');
    break;
  default:
    alert ('error de ingreso');

}