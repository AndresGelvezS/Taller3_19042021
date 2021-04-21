//4.	Realizar un programa de procesos en el que se almacenen 3 números en 3 variables A, B y C. El diagrama debe decidir cual es el mayor y cual es el menor


numeromayor=0;
numerointermedio=0;
numeromenor=0;

let A=parseInt(prompt("Ingrese un numero:"));
let B=parseInt(prompt("Ingrese un numero:"));
let C=parseInt(prompt("Ingrese un numero:"));

if (A>B && A>C ){
     numeromayor= A;
if(B>C){
        
numerointermedio = B;
numeromenor = C;
    }else{
        
       numerointermedio = B;
       numeromenor= C;
    }
alert("El número mayor es: " + numeromayor +" El número menor es: " + numeromenor);            
}


if(B>A && B>C){
    numeromayor= B;
    if(A>C){
            
    numerointermedio = A;
    numeromenor = C;
        }else{
        
        numerointermedio = C;
        numeromenor = A;
    }
    alert("El número mayor es: " + numeromayor +" El número menor es: " + numeromenor);        
    
}

if(C>A && C>B){
    numeromayor=C;
    if(B>A){
    numerointermedio = B;
    numeromenor = A;
        }else{
            numerointermedio = A;
            numeromenor = B;
        }
            
    alert("El número mayor es: " + numeromayor +" El número menor es: " + numeromenor);        
    
}    