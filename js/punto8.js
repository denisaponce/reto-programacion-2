
const Day = parseInt(prompt("Escriba el dia actual en numero, Por favor"));
const Month = parseInt(prompt("Escriba el mes actual en numero, Por favor"));
const Year = parseInt(prompt("Escriba el año actual en numero, Por favor"));

if (Day == 25 && Month == 12 && Year == 00) {
  alert(`FELIZ NAVIDAD!!! fecha Actual: ${Day}/${Month}/${Year}`);
} else {
  alert(
    `Hoy NO es Navidad ! fecha Actual: ${Day}/${Month}/${Year}`
  );
}