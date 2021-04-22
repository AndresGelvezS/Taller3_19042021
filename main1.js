//1.	Realizar un programa que permita leer 2 números diferentes y nos diga cual es //el mayor de los 2 números

let cantidadnumeros= new Array(1).fill('');
let numero1= new Array(1).fill(parseInt(prompt("Ingrese el numero 1:")));
let numero2= new Array(1).fill(parseInt(prompt("Ingrese el  numero 2:")));

console.log(numero1);
console.log(numero2);

// cantidadnumeros.push(numero1);
// cantidadnumeros.push(numero2);
// console.log(cantidadnumeros);

if (parseInt(numero1)<parseInt(numero2)){alert(`numero ${numero2} es mayor`);
    
} else {alert(`numero ${numero1} es mayor`);
    
}