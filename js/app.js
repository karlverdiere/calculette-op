function un() {
  var x = document.getElementById("un").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function deux() {
  var x = document.getElementById("deux").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function trois() {
  var x = document.getElementById("trois").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function quatre() {
  var x = document.getElementById("quatre").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function cinq() {
  var x = document.getElementById("cinq").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function six() {
  var x = document.getElementById("six").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function sept() {
  var x = document.getElementById("sept").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function huit() {
  var x = document.getElementById("huit").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function neuf() {
  var x = document.getElementById("neuf").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function clear() {
  document.getElementById('resultat').value = "";
}
function egal() {
  var valeur = document.getElementById('resultat').value;
  var resultatFinal = eval(valeur);
  document.getElementById('resultat').value = resultatFinal;
}
function plus() {
  var x = document.getElementById("plus").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function moin() {
  var x = document.getElementById("moin").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function multiple() {
  var x = document.getElementById("multiple").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function divised() {
  var x = document.getElementById("divised").value;
  var valeur =document.getElementById('resultat').value;
  document.getElementById('resultat').value = valeur + x;
}
function supp() {
  var valeur = document.getElementById('resultat').value;
  var longeur = valeur.lenght;
  var fin = longeur - 1;
  valeur = valeur.substring(0, fin);
  document.getElementById('resultat').value = valeur;
}
