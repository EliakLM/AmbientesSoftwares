function primeNumber(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

var determinadoNumero = 7;

for (var i = 2; i < determinadoNumero+1; i++) if (primeNumber(i)) console.log(i);
