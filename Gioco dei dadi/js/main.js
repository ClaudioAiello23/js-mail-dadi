'use strict';

alert('Sei pronto? Scopri se hai vinto al GIOCO DEI DADI');

alert('Ecco il tuo numero');
const playerNumber = Math.floor (Math.random()*6);
alert('Il tuo numero è: '+ playerNumber);
console.log("Numero giocatore: ", playerNumber);

alert('Ecco il numero della CPU');
const cpuNumber = Math.floor (Math.random()*6);
alert('Il numero della CPU è: '+ cpuNumber);
console.log("Numero cpu: ", cpuNumber);

const finalNumber = playerNumber - cpuNumber;
console.log("Differenza N.Giocatore - N.Cpu: ", finalNumber);


// switch (finalNumber){

//     case finalNumber < 0 :
//     // alert('SIIIIIIIIII, HAI VINTO!!!!');
//     console.log("hai vinto");
//     break;

//     case finalNumber < 0 :
//     // alert('PECCATO, HA VINTO LA CPU! !!!!');
//     console.log("hai perso");
//     break;

//     default: 
//     // alert('ABBIAMO PAREGGIATO, 1-1......ICS!!!!');
//     console.log("pareggio");
    
// }

if (finalNumber > 0){
    alert('SIIIIIIIIII, HAI VINTO!!!!');
    console.log("ha vinto il giocatore");
    
} else if (finalNumber < 0){
    alert('PECCATO, HA VINTO LA CPU! !!!!');
    console.log("ha vinto la Cpu");

} else {
    alert('ABBIAMO PAREGGIATO, 1-1......ICS!!!!');
    console.log("pareggio");

}