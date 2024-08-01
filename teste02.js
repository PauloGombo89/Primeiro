
console.log("Informe os números e a operação que pretende")

function calculadora(nota1, nota2, operacao){
    switch(operacao){
        case '+':
            return(nota1 + nota2);
            break
        case '-':
            return(nota1 - nota2);
            break
        case 'x':
            return(nota * nota2);
            break
        case '/':
            return(nota1 / nota2);
            break
        default :
        return 'Operador inválido!'
    }

}
console.log(calculadora(2,3,'0'))

