
alert ('Buenos Días le ayudaremos con su presupuesto para este mes');


/*CONDICINAL IF*/
let ingresoFijo = parseInt(prompt('Tienes algun ingreso fijo durante el mes (ingrese un promedio)')) 
    if (isNaN(ingresoFijo)) {
        ingresoFijo = parseInt(prompt('Cual es su ingreso fijo mensual (porfavor ingrese una cantidad en números)'));
        }
    else if (ingresoFijo < 0 ) {
        ingresoFijo = parseInt(prompt('Cual es su ingreso fijo mensual (solo se puede ingresar números mayores a 0)'));
        }
    


let ingresoExtra = parseInt(prompt('Tienes algun ingreso extra durante el mes (ingrese un promedio)'));
    if (isNaN(ingresoExtra)) {
        ingresoExtra = parseInt(prompt('Cual es su ingreso extra mensual (porfavor ingrese una cantidad en números)'));
    } 
    else if (ingresoExtra < 0 ) {
        ingresoExtra = parseInt(prompt('Cual es su ingreso extra mensual (solo se puede ingresar números mayores a 0)'));
        }

/*FUNCION*/
function sumaDos (primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}

let ingresoMes = sumaDos (ingresoFijo,ingresoExtra);

alert ('Comencemos con los gastos (si el concepto no corresponde ponga 0)');


let alimentacion = parseInt(prompt('Alimentación (ingrese un promedio)'));
    while (isNaN(alimentacion)|| alimentacion < 0 ) {
        alimentacion = parseInt(prompt('Alimentación (porfavor ingrese una cantidad en números)'));
    }

let arriendo = parseInt(prompt('Arriendo (ingrese un promedio)')); 
    while (isNaN(arriendo)|| arriendo < 0 ) {
       arriendo = parseInt(prompt('Arriendo (porfavor ingrese una cantidad en números)'));
    }

let credito = parseInt(prompt('Credito (ingrese un promedio)'));
    while (isNaN(credito)|| credito < 0 ) {
        credito = parseInt(prompt('Credito (porfavor ingrese una cantidad en números)'));
    }
    
    
let gastosMes = alimentacion + arriendo + credito;  

let totalMes = ingresoMes - gastosMes;

alert ('Los ingresos del mes corresponden a '+ ingresoMes + '\nLos gastos del mes corresponden a '+ gastosMes + '\nEl total de lo que tendra despues de pagar sus gastos sera' + totalMes);

alert ('porfavor presione el boton aceptar 3 veces');

/*ITERACION*/
for (let i = 3; i > 0; i--) {
    alert (i);
}

alert ('Muchas gracias');

