// //PROMPT
// let pais = prompt('Ingrese su pais');
// console.log  (pais);

// const espacio = ' '

// alert ('Bienvenido, nos encanta'+ espacio +pais );

// let nombre = prompt ('como se llama este genio?')
// console.log (nombre)

// alert ('seguro que has visto Los Simpsons!');

// //continue

// for (let i = 1; i <= 10; i++) {

//     if (i === 5) {
//         continue
//     }

//     alert(i);
// }

// //while

// let entrada = prompt('ingrese un dato');

// while (entrada !='ESC') {
//     alert ('El usuario ingreso: '+entrada);
//     entrada = prompt('Ingrese otro dato');

// }

// //do while


// do {
//     let userEmail = prompt ('Ingrese su correo:');
//     let confirmUserEmail = prompt ('Confirme su correo');

//     if ( userEmail === confirmUserEmail ) {
//         alert ('El correo ' + userEmail +' ha sido guardado con exito');
//         askAgain = false;
//     } else {
//         alert('Los correos deben ser iguales');
//     }

// } while  (askAgain)



// //Switch

// let entrada = prompt ('Ingresar un nombre').toUpperCase (); //anna-> ANNA

// while (entrada != 'ESC') {

//     switch (entrada) {
//         case 'ANA':
//             alert ('Hola Anna');
//             break;
//         case 'JUAN':
//             alert ('Hola Juan');
//             break;    
//         default:
//             alert ('Quien eres?');
//             break;
//     }

//     entrada = prompt('Ingrese un nombre').toUpperCase();
// }


//Funcion

// function solicitarNombre() {}
//     let nombreIngresado =prompt ('ingrese su nombre de usuario');
//     alert ('el nombre ingresado es: '+nombreIngresado);



// function conParametros (parametro1, parametro2) {
//     console.log(parametro1, parametro2);
// }
// conParametros (3,4)



// function conParametro (nombre, apellido) {
//     console.log(nombre, apellido);
// }
// conParametros ('Ana','Ruiz');


// let resultado = 0
// function sumarDosnumeros(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero;
// }
//  sumarDosnumeros(3,6);
//  alerts(resultado);

alert ('Buenos Días le ayudaremos con su presupuesto para este mes');

    
let ingresoFijo = parseInt(prompt('Cual es su ingreso fijo mensual'));
    while (isNaN(ingresoFijo)|| ingresoFijo < 0 ) {
        ingresoFijo = parseInt(prompt('Cual es su ingreso fijo mensual (porfavor ingrese una cantidad en números)'));
    }
let ingresoExtra = parseInt(prompt('Tienes algun ingreso extra durante el mes (ingrese un promedio)'));
    while (isNaN(ingresoExtra)|| ingresoExtra < 0 ) {
        ingresoExtra = parseInt(prompt('Cual es su ingreso fijo mensual(porfavor ingrese una cantidad en números)'));
    } 




let ingresoMes = ingresoFijo+ingresoExtra;

alert ('Comencemos con los gastos (si el concepto no corresponde ponga 0)');


let alimentacion = parseInt(prompt('Alimentación (ingrese un promedio)'));
    while (isNaN(alimentacion)|| alimentacion < 0 ) {
        alimentacion = parseInt(prompt('Alimentación(porfavor ingrese una cantidad en números)'));
    }
let arriendo = parseInt(prompt('Arriendo (ingrese un promedio)')); 
    while (isNaN(arriendo)|| arriendo < 0 ) {
        alimentacion = parseInt(prompt('Alimentación(porfavor ingrese una cantidad en números)'));
    }
let credito = parseInt(prompt('Alimentación(ingrese un promedio)'));
    while (isNaN(credito)|| credito < 0 ) {
        alimentacion = parseInt(prompt('Alimentación(porfavor ingrese una cantidad en números)'));
    }
    
    
let gastosMes = alimentacion + arriendo + credito;  

let totalMes = ingresoMes - gastosMes;

alert ('Los ingresos del mes corresponden a ' + ' ' + ingresoMes + 'Los gastos del mes corresponden a ' + ' '+ gastosMes, );

alert ('el total de lo que tendra despues de pagar sus gastos sera' + ' '  + totalMes);

alert ('porfavor presione el boton aceptar 3 veces');

for (let i = 3; i > 0; i--) {
    alert (i);
}

alert ('muchas gracias');

