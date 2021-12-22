const cantidadDePreguntas = parseInt(prompt('cantidad de preguntas'));
const respuestasCorrectas = parseInt(promt('respuestas correctas'));

const resultado = (respuestasCorrectas * 100) / cantidadDePreguntas;

if (resultado >= 90) alert('Nivel màximo');

if (resultado >= 75 && resultado > 90) alert('Nivel Medio');

if (resultado > 50 && resultado < 75) alert('Nivel regular');

if (resultado < 50) alert ('Fuera de nivel');

