
/* Ejercicio 1
let edad = window.prompt("Ingrese su edad");

    if (Number(edad) == edad) {
        if (edad < 18) {
            alert("No tienes suficente edad para manejar");  
        }else{
            alert("Tienes la edad suficiente para manejar");
        }
     } else {
        alert("Ingrese un numero");
     }


let nota;
do {
    
        nota = window.prompt("Ingrese su nota");
        if (Number(nota)== nota) {
            if(nota >= 0 && nota <= 10){
                if(nota <3){
                    alert("deficiente");
                }else if(nota < 5){
                    alert("insuficiente");
                }else if(nota < 6){
                    alert("suficiente");
                }else if(nota < 7){
                    alert("Bien");
                }else if(nota < 9){
                    alert("notable");
                }else if(nota <= 10){
                    alert("sobresaliente");
                }
            }else{
                alert("ingrese un numero de 0-10");
            }
        }else{
            if(nota !=undefined){
                alert("introduce un numero valido");
            }
        }
   
} while (nota != undefined);
 


let edad = [5,6,7,8,9,10,11,12];
let total;
let promedio;

for(let i = 0; i <= edad.length;i++){
    
   total = edad.reduce((a ,b )=> a +b, 0);

   promedio = total / edad.length

}

console.log("el promedio es: " +  promedio);



let precio = window.prompt("ingrese el precio del producto");
let medioDePago = window.prompt("ingrese el medio de pago");
let precioFinal;
let porcentaje;
const facturacion = (precio,medioDePago ) =>{

    if(precio < 200 ){
        precioFinal = precio;
    }else if((precio>= 200 && precio <= 400) && (medioDePago ==("E"))){

        porcentaje = precio *(30/100);
        precioFinal = precio - porcentaje;

    }else if(medioDePago == ("D")){

        porcentaje = precio *(20/100);
        precioFinal = precio - porcentaje;

    }else if(medioDePago == ("C")){

        porcentaje = precio *(10/100);
        precioFinal = precio - porcentaje;

    }else{
        porcentaje = precio *(40/100);
        precioFinal = precio - porcentaje;

    }

     alert("El monto final a abonar es: " + precioFinal);
}

facturacion(precio, medioDePago);

*/

let numberOne = window.prompt("ingrese un numero");
let numberTwo = window.prompt("ingrese otro numero");

numberOne = parseInt(numberOne);
numberTwo = parseInt(numberTwo);

const calculateGreater = (numberOne, numberTwo) => {

    if (numberOne < numberTwo) {
        alert("el segundo numero ingresado es mayor: " + numberTwo);
    } else if (numberOne > numberTwo) {
        alert("el primer numero ingresado es mayor: " + numberOne);
    } else {
        alert("Los dos numeros ingresados son iguales")
    }

}    

calculateGreater(numberOne, numberTwo);