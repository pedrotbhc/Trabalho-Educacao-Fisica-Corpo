// SORTEIO.JS
// Controla os dois sorteios da página galeria.html.
const exercicios={1:"Polichinelo",2:"Agachamento",3:"Flexão de braço",4:"Abdominal",5:"Corrida parada"};
function sortearNumero(minimo,maximo){return Math.floor(Math.random()*(maximo-minimo+1))+minimo;}
function sortearExercicio(){const repeticoes=sortearNumero(1,20);const numeroExercicio=sortearNumero(1,5);const exercicio=exercicios[numeroExercicio];document.getElementById("numero-repeticoes").textContent=repeticoes;document.getElementById("numero-exercicio").textContent=numeroExercicio;document.getElementById("resultado-texto").textContent=`Faça ${repeticoes} repetição(ões) de ${exercicio}.`;}
