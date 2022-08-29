let codigo=0
let perfil1=10001, perfil2=20001 , perfil3=30001
let perfil1Orden=0 , perfil2Orden=0, perfil3Orden=0
let perfil1Stock=1000, perfil2Stock=1000, perfil3Stock=1000
let cantidad=0
let confirmacion="", agregarItems=""
let perfil1Costo=300, perfil2Costo=500, perfil3Costo=800
let usuario="", contrasena=""

//Login
function Login(){
    do{
        usuario=prompt("Ingrese su usario")
        contraseña=prompt("Ingrese su contraseña")

    }while (usuario !="admin" && contrasena !="admin")

}

Login();

//funcion a ingresar la cantidad de material a pedir
function Pedido(){
    do{

        do{
            codigo=parseInt(prompt(`Ingrese código de producto:
                Perfil 1 : 10001
                Perfil 2 : 20001
                Perfil 3 : 30001`))
            if (isNaN(codigo || codigo<10000 )){
                alert("El valor ingresado no representa un codigo válido");
            }
        }while (isNaN(codigo) || codigo<10000);
    
        switch (codigo){
            case 10001:
            
                do{
                    perfil1Orden=0;
                    do{
                        cantidad=parseInt(prompt("Ha seleccionado el perfil 1. Ingrese cantidad de tiras deseadas"));
                        if (isNaN(cantidad) || cantidad>perfil1Stock) {
                            alert ("La cantidad no se encuentra disponible o no es válida");
                            alert (`La cantidad disponible es ${perfil1Stock}`);
                        }
                    }while (isNaN(cantidad) || cantidad>perfil1Stock);
            
                    perfil1Orden= cantidad + perfil1Orden;
                    confirmacion=prompt(`Se añaden al pedido ${perfil1Orden} tiras. Ingrese SI para confirmar.`);
            
                }while (confirmacion.toLowerCase() !="si");
            
                alert(`Se confirman ${perfil1Orden} de tiras del item codigo 10001`);
                break;
            
            case 20001:
                do{
                    perfil2Orden=0;
                    do{
                        cantidad=parseInt(prompt("Ha seleccionado el perfil 2. Ingrese cantidad de tiras deseadas"));
                        if (isNaN(cantidad) || cantidad>perfil2Stock) {
                            alert ("La cantidad no se encuentra disponible o no es válida");
                            alert (`La cantidad disponible es ${perfil2Stock}`);
                        }
                    }while (isNaN(cantidad) || cantidad>perfil2Stock);
            
                    perfil2Orden= cantidad + perfil2Orden;
                    confirmacion=prompt(`Se añaden al pedido ${perfil2Orden} tiras. Ingrese SI para confirmar.`);
            
                }while (confirmacion.toLowerCase() !="si");
            
                alert(`Se confirman ${perfil2Orden} de tiras del item codigo 20001`)
                break;
            
            case 30001:
            
                do{
                    perfil3Orden=0;
                    do{
                        cantidad=parseInt(prompt("Ha seleccionado el perfil 3. Ingrese cantidad de tiras deseadas"));
                        if (isNaN(cantidad) || cantidad>perfil3Stock) {
                            alert ("La cantidad no se encuentra disponible o no es válida");
                            alert (`La cantidad disponible es ${perfil3Stock}`);
                        }
                    }while (isNaN(cantidad) || cantidad>perfil3Stock);
            
                    perfil3Orden= cantidad + perfil3Orden;
                    confirmacion=prompt(`Se añaden al pedido ${perfil3Orden} tiras. Ingrese SI para confirmar.`);
            
                }while (confirmacion.toLowerCase() !="si");
            
                alert(`Se confirman ${perfil3Orden} de tiras del item codigo 30001`);
                break;
            };
            agregarItems=prompt("Desea agregar items?")
    
    }while(agregarItems.toLowerCase() !="no");
};

Pedido();


alert(`Se han confirmado los siguientes items:
    Perfil 1 ${perfil1Orden}
    Perfil 2 ${perfil2Orden}
    Perfil 3 ${perfil3Orden}`);

alert("Calculando precio. Aguarde unos instantes");

let totalFinal=calcularCosto(perfil1Orden,perfil2Orden,perfil3Orden);

function calcularCosto(item1,item2,item3){
    return  (1.21 *(item1 * perfil1Costo + item2 * perfil2Costo + item3 * perfil3Costo));
}

alert(`El costo final es de ${totalFinal}, con IVA incluido`)