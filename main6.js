
//6.	Realizar un programa que lea N números, calcule y escriba la suma de los pares y el producto de los impares.
let listadonumeros = [];
let numerospares = [];
let numerosimpares = [];
let sumarpares = 0;
let multiplicarimpares = 1;
let menu;
let pedirnumero;
detener:
do{
    pedirnumero = parseInt(prompt("Digite un numero:"));
    listadonumeros.push(pedirnumero);
    menu = parseInt(prompt(`Digitar otro numero?: \n1. Si \n2. No`));
    switch (menu) {
        case 1:
            continue detener;
        case 2:
            for(numero of listadonumeros){
                if(numero%2==0){
                    sumarpares = sumarpares + numero;
                    numerospares.push(numero);
                }else{
                    multiplicarimpares = multiplicarimpares * numero;
                    numerosimpares.push(numero);
                }
            }
            alert(`lista de numeros pares: ` + numerospares + ` y la suma de los numeros pares: ${sumarpares}` );
            alert(`lista de los numeros impares: `+ numerosimpares + ` y la multiplicacion de los numeros impares: ${multiplicarimpares}`);
            break detener;
        default:
           
            break;
    }
}while(true)