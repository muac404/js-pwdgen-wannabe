// CHIEDI IL NOME
const firstName=prompt("Scrivi il tuo nome");
// CHIEDI IL COGNOME
const lastName=prompt("Scrivi il tuo cognome");
// CHIEDI IL COLORE PREFERITO
const favouriteColor=prompt("Digita il tuo colore preferito");
// CREO UNA VARIABILE PASSWORD CHE CONTIENE LE TRE INFO RICHIESTE + IL NUMERO 76ù
const password=firstName+lastName+favouriteColor+"76"
// STAMPO IN CONSOLE IL RISULTATO
console.log(password);
//STAMPO SU HTML LA PASSWORD
document.getElementById('password-result').innerHTML=password;