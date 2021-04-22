//2.	Realice un programa que calcule el máximo de N números leídos desde teclado.

let listadonumeros=[];
let pedirnumero;
let menu;
do {
	menu=parseInt(prompt(`Digitar otro numero?: \n1. Si \n2. No`));
		switch (menu) {
			case 1:
				pedirnumero=parseInt(prompt("Digite un numero:"));
				listadonumeros.push(parseInt(pedirnumero));
				console.log(parseInt(pedirnumero));
				break;

			case 2: 
				function validarnumeromayor(a, b) {
		  return a - b;
		}
		listadonumeros = listadonumeros.sort(validarnumeromayor);
				let numeromaximo = parseInt(listadonumeros.length-1);

        		
				alert(`Listado de numeros ordenados: ${listadonumeros}`);
				alert(`El numero mayor del listado es: ${listadonumeros[numeromaximo]}`);
		break;
		default:
		break;
		}	
		}
	
	while (menu==1);

	

