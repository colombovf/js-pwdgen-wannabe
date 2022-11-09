let nome = prompt ("Inserisci nome:");
let cognome = prompt ("Inserisci cognome:");
let colore = prompt ("Inserisci il tuo colore preferito:");
let password = nome+cognome+colore+21;

console.log("Nome: "+nome);
console.log("Cognome: "+cognome);
console.log("Colore: "+colore);
console.log ("La tua password è: "+password);

document.getElementById("nomeid").innerHTML= "Nome: "+nome;
document.getElementById("cognomeid").innerHTML= "Nome: "+cognome;
document.getElementById("coloreid").innerHTML= "Nome: "+colore;
document.getElementById("pwdid").innerHTML="La tua password è: "+password;