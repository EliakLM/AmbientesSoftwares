const rl = require("rl").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Digite um numero para verificar se é primo ", (numero) => {
    if (numero <= 0){
        console.log("O número deve ser maior do que 0 ")

    }
    else{
        let div = 0

        for(let cont = 1;cont <= numero;cont ++){
            if(numero % cont == 0){
                div ++;
            }
        }            
            if (div === 2){
                console.log(Number(numero) + " é primo")

            }
            else{console.log(Number(numero) + " não é primo")}

            }

        
             
    rl.close()
    })