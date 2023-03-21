const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

const fibo = (numero) => {
    if (numero < 2){
        return numero
    } else{
        return fibo(numero - 1) + fibo(numero - 2)
    }
}
rl.question("Digite um número ", (num) => {
    if(num <= 0 || isNaN(num)){
        console.log("Digite um número maior que 0 ")

    }else {
        for(let i = 0;i < num;i++){
            rl.close()
            console.log(fibo(i))


        }

    }
    
    
})