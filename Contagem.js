
// var input = require('fs').readFileSync('AmbientesSoftwares/stidin', 'utf8');

// var sep = [' ', '\n'];
// var line = input.split(new RegExp(sep.join('|'), 'g'));

//console.log("Informe a quantidade de elementos:");
let n = 5;
console.log(n);
let valor;
let contadorInt = 0;
let contadorFlo = 0.0;
let i = 0;

//while(i < n){
    valor = [2.5, 6, 1, 3.9, 4];
for(let j=0; j<valor.length;j++){
    if(valor[j] % 1 === 0 ){
        contadorInt = contadorInt + 1;
    }else{
        contadorFlo = contadorFlo + 1;
    }
}
   // i = i + 1;
//}

console.log("Numeros que são inteiros são: " + contadorInt);
console.log("Numeros que não são inteiros são: " + contadorFlo);