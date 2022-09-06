let codigo=0
let perfil1=10001, perfil2=20001 , perfil3=30001
let perfil1Orden=0 , perfil2Orden=0, perfil3Orden=0
let perfil1Stock=1000, perfil2Stock=1000, perfil3Stock=1000
let cantidad=0, stock =0
let confirmacion="", agregarItems=""
let perfil1Costo=300, perfil2Costo=500, perfil3Costo=800
let usuario="", contrasena=""
let arrStock =[]


//Login
function Login(){
    do{
        usuario=prompt("Ingrese su usuario")
        contraseña=prompt("Ingrese su contraseña")

    }while (usuario !="admin" && contrasena !="admin")

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

        let confirmacion = prompt(`El producto a agregar es el siguiente:
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

let codPedido=parseInt(prompt("Por favor ingrese el código del producto a buscar"));

let arrCarrito=[];

do{
    let codPedido=parseInt(prompt("Por favor ingrese el código del producto a buscar"));
    
if ((arrStock.find(val=> val.codigo === codPedido))) {
     let prodSelecc = arrStock.find(val=> val.codigo === codPedido)

    confirmacion=prompt("El producto se encuentra cargado. Desea añadirlo a su carrito")
    if(confirmacion.toLowerCase() ==="si"){
        let cantidad = parseInt(prompt("Ingrese cantidad a añadir"));
        prodSelecc.stock = cantidad;
        arrCarrito.push(prodSelecc);
        confirmacion=prompt("Desea agregar otro producto?")
    }else{
        alert("El producto no ha sido añadido")
        confirmacion=prompt("Desea agregar otro producto?")
    }

}else{
    alert("El producto no se encuentra cargado")
    confirmacion=prompt("Desea buscar otro producto?")
};
}while(confirmacion.toLowerCase() ==="si");

alert("Se muestran los articulos de su carrito")
arrCarrito.map(element=>alert(`Codigo:${element.codigo} 
Nombre del producto:${element.nombre} 
Cantidad pedida:${element.stock} 
Precio unitario:${element.precio}`))


