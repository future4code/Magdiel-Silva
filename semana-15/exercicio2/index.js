//EXERCÍCIO 2
const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

    switch(operacao){
        case"add":
           console.log('\x1b[33m%s\x1b[0m', "Resposta:",num1 + num2) 
            break;
        case"sub":
            console.log('\x1b[33m%s\x1b[0m',"Resposta:",num1 - num2) 
            break;
        case"mult":
            console.log('\x1b[33m%s\x1b[0m',"Resposta:",num1 * num2) 
            break;
        case"div":
            console.log('\x1b[33m%s\x1b[0m',"Resposta:",num1 / num2) 
            break;
    }
