const num1 = parseInt(prompt('ingrese un numero'));
const num2 = parseInt(prompt('ingrese un numero'));
const num3 = parseInt(prompt('ingrese un numero'));

if (num1 > num2) {
  if (num1 > num3) {
    alert(`el mayor es: ${num1}`);
   } else {
      alert(`el mayor es: ${num3}`);
    }
} else {
   if (num2 > num3) {
     alert(`el mayor es: ${num2}`);
    } else {
      alert(`el mayor es: ${num3}`);
     }
 }
