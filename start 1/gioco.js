var giocatore1 = Math.floor((Math.random() * 100) + 1);
var giocatore2 = Math.floor((Math.random() * 100) + 1);
var numero = Math.floor((Math.random() * 100) + 1);
console.log('🚨Numero estratto = ' + numero);
console.log('👤Numero giocatore 1 = ' + giocatore1);
console.log('👤Numero giocatore 2 = ' + giocatore2);
if (giocatore1 == numero) {
    console.log('🏆Il giocatore 1️⃣ ha vinto');
}
else if (giocatore2 == numero) {
    console.log('🏆Il giocatore 2️⃣ ha vinto');
}
else if ((Math.abs(giocatore1 - numero)) < (Math.abs(giocatore2 - numero))) {
    console.log('🙂Nessuno dei due ha vinto, ma il giocatore 1️⃣ si è avvicinato di più');
}
else {
    console.log('🙂Nessuno dei due ha vinto, ma il giocatore 2️⃣ si è avvicinato di più');
}
