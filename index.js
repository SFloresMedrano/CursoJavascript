let codigo=0; codPedido=0;
let cantidad=0, stock =0;
let confirmacion="", agregarItems="";
let usuario="", contrasena="";
let arrStock =[] , prodSelecc =[] , arrCarrito=[];
let cantStock=0;

//Login
function Login(){
    do{
        usuario=prompt("Ingrese su usuario")
        contraseña=prompt("Ingrese su contraseña")

    }while (usuario !="admin" && contrasena !="admin")

}

function Confirmacion(){
    confirmacion = prompt("Desea agregar otro producto? Ingrese si o no")
    }

Login();

// Función Constructora para productos nuevos para el admin

function Productos (codigo,nombre,stock,precio){
    this.codigo = codigo
    this.nombre = nombre
    this.stock = stock
    this.precio = precio
}

let agregarProducto="" 

do{
    agregarProducto= prompt("Desea agregar productos? Confirme por SI o NO")

    if(agregarProducto.toLowerCase()==="si"){
        codigo = parseInt(prompt("Ingrese codigo de producto")) 
        nombre = prompt("Ingrese nombre del producto")
        stock = parseInt(prompt("Ingrese stock inicial del producto"))
        precio = parseInt(prompt("Ingrese el precio del producto"))
        let producto = new Productos(codigo, nombre, stock, precio)

        confirmacion = prompt(`El producto a agregar es el siguiente:
            ${producto.codigo}
            ${producto.nombre}
            ${producto.stock}
            ${producto.precio}
             Confirme por SI o NO`)

        if (confirmacion.toLowerCase()==="si"){
            arrStock.push(producto);
            alert("El producto ha sido creado");
            agregarProducto =""

        }else{
            alert("El producto no ha sido creado")
            agregarProducto =""
        }
        
    }else  {
        alert("No se han añadido objetos")
    }

}while (agregarProducto === "");


//Solicitud de pedido desde el cliente


do{
    codPedido=parseInt(prompt("Por favor ingrese el código del producto a buscar"));

    if ((arrStock.find(val=> val.codigo === codPedido))) {
        prodSelecc = arrStock.find(val=> val.codigo === codPedido);

        let ubicacion =arrStock.findIndex(val=>val.codigo===codPedido);

        confirmacion=prompt("El producto se encuentra cargado. Desea añadirlo a su carrito?");
        
        if(confirmacion.toLowerCase ()=== "si"){
            cantStock =arrStock[ubicacion].stock
            let cantidad = parseInt(prompt(`Ingrese cantidad a añadir. Cantidad en Stock ${cantStock}`));   
            
            if (cantStock>cantidad){
                prodSelecc.stock = cantidad;
                arrCarrito.push(prodSelecc);
                alert("El producto ha sido añadido")
                Confirmacion();
                arrStock[ubicacion].stock = cantStock-cantidad 

            }else{
                alert("El producto no se encuentra en el stock deseado.")

            }
        }else{
            alert("El producto no ha sido añadido");

        };

    }else{
        alert("El producto no se encuentra cargado");
        

    };

}while(confirmacion != "no");

alert("Se muestran los articulos de su carrito")

arrCarrito.forEach(item=>alert(`Codigo:${item.codigo} 
Nombre del producto:${item.nombre} 
Cantidad pedida:${item.stock} 
Precio unitario:${item.precio}`))



let precioTotal=0
for (let i=0; i<arrCarrito.length;i++){
    precioTotal =(arrCarrito[i].precio * arrCarrito[i].stock) + precioTotal
}

let precioIva = precioTotal * 1.21

alert(`Su carrito se compone de ${arrCarrito.length} items. 
La suma total de los articulos es ${precioTotal}.
El precio con Iva incluido es de ${precioIva}`)