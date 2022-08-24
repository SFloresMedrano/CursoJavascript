
let numero =0, limite=0, n=1,rep=0

let confUno="", confDos= ""

do{

    numero=parseInt(prompt("Ingrese el numero a ser multiplicado"));

    alert(`El número ingresado es ${numero}`);

    confUno= prompt("Ingrese NO para rectificar. Sino deje en blanco para confirmar")

} while (confUno = "");

alert (`El numero ha sido confirmado.`);


do{
    limite= parseInt(prompt(`Ingrese el limite.`))

    alert(`El limite es ${limite}`)

    confDos= prompt("Ingrese NO para rectificar. Sino deje en blanco")


}while ( confDos ="");

alert (`El limite ha sido confirmado.`);


if (numero>limite) {

    alert (`EL numero ${numero} es mayor que el limite.
    
    Se saldra del programa`)

} else {

    rep=numero 

    while (rep<limite){
        rep= rep + numero
        n = n + 1

    }
};

alert (`El numero entra ${n} veces dentro del limite`);