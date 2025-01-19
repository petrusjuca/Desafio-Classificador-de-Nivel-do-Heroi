
const nome = 'João';
let XP = 10000;

    if(XP < 1000) {
    nivel = "Ferro"
}

    else if(XP >= 1001 && XP < 2001 ) {
    nivel = "Bronze"
   }

   else if(XP >= 2001 && XP < 5001 ) {
    nivel = "Prata"
   }

   else if(XP >= 5001 && XP < 7001 ) {
    nivel = "Ouro"
   }

   else if(XP >= 7001 && XP < 8001 ) {
    nivel = "Platina"
   }

   else if(XP >= 8001 && XP < 9001 ) {
    nivel = "Ascendente"
   }

   else if(XP >= 9001 && XP < 10001 ) {
    nivel = "Imortal"
   }

   else {
    nivel = "Radiante"
   }
  

   console.log("O Héroi de nome " + nome + " está no nível de " + nivel + " com " + XP + " de XP");