const { parse } = require("path")

const rl= require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

var num = []

const somar = (num) => {
    const somar = num.reduceRight(function (valorFinal, penulvalor){
        return Number(valorFinal) + Number(penulvalor)

    })
    console.log("O somatório total é " + somar)
}

const perg = (quant) => {
    rl.question(
        "Digite o número " + (num.length + +1) + " de " + quant + " : ",
        (nums) => {
            num.push(nums)

            if (quant <= num.length){
                rl.close()
                somar(num)
            }else{
                perg(quant)
            }

        }


    )

}

rl.question("Digite quantos numeros deseja somar: ", (quant) => {
    if (isNaN(quant)) {
        console.log("DIgite um número inteiro acima de zero ")
        rl.close()
    }else{
        perg(quant.trim())

    }


    })
