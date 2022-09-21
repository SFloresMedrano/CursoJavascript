let code=0; codPedido=0;
let cantidad=0, stock =0;
let confirmation="", agregarItems="", agregarProducto="" ;
let usuario="", contrasena="";
let arrayStock =[] , selectedProduct =[] , arrCart=[];
let cantStock=0; priceTotal=0, priceIva=0;

//Login


function confirmation(){
    confirmation = prompt("Desea agregar otro producto? Ingrese si o no")
    };




// Función Constructora para productos nuevos para el admin

function Productos (code,name,stock,price){
    this.code = code;
    this.name = name;
    this.stock = stock;
    this.price = price;
};

do{
    agregarProducto= prompt("Desea agregar productos? Confirme por SI o NO");

    if(agregarProducto.toLowerCase()==="si"){
        code = parseInt(prompt("Ingrese code de producto")) ;
        name = prompt("Ingrese name del producto");
        stock = parseInt(prompt("Ingrese stock inicial del producto"));
        price = parseInt(prompt("Ingrese el price del producto"));
        let producto = new Productos(code, name, stock, price);

        confirmation = prompt(`El producto a agregar es el siguiente:
            ${producto.code}
            ${producto.name}
            ${producto.stock}
            ${producto.price}
             Confirme por SI o NO`);

        if (confirmation.toLowerCase()==="si"){
            arrayStock.push(producto);
            alert("El producto ha sido creado");
            agregarProducto ="";

        }else{
            alert("El producto no ha sido creado");
            agregarProducto ="";
        };
        
    }else  {
        alert("No se han añadido objetos");
    };

}while (agregarProducto === "");


//Solicitud de pedido desde el cliente


do{
    codPedido=parseInt(prompt("Por favor ingrese el código del producto a buscar"));

    if ((arrayStock.find(val=> val.code === codPedido))) {
        selectedProduct = arrayStock.find(val=> val.code === codPedido);

        let nuevoItem = new Productos (selectedProduct.code,selectedProduct.name,0,selectedProduct.price)

        let location =arrayStock.findIndex(val=>val.code===codPedido);

        confirmation=prompt("El producto se encuentra cargado. Desea añadirlo a su Cart?");
        
        if(confirmation.toLowerCase ()=== "si"){
            cantStock =arrayStock[location].stock;
            let cantidad = parseInt(prompt(`Ingrese cantidad a añadir. Cantidad en Stock ${cantStock}`));   
            
            if (cantStock>cantidad){
                nuevoItem.stock = cantidad;
                arrCart.push(nuevoItem);
                alert("El producto ha sido añadido");
                confirmation();
                arrayStock[location].stock = cantStock-cantidad ;

            }else{
                alert("El producto no se encuentra en el stock deseado.");

            }
        }else{
            alert("El producto no ha sido añadido");

        };

    }else{
        alert("El producto no se encuentra cargado");
        

    };

}while(confirmation != "no");

alert("Se muestran los articulos de su Cart");

arrCart.forEach(item=>alert(`code:${item.code}
name del producto:${item.name} 
Cantidad pedida:${item.stock} 
price unitario:${item.price}`));




for (let i=0; i<arrCart.length;i++){
    priceTotal =(arrCart[i].price * arrCart[i].stock) + priceTotal;
};

priceIva = priceTotal * 1.21;

alert(`Su Cart se compone de ${arrCart.length} items. 
La suma total de los articulos es ${priceTotal}.
El price con Iva incluido es de ${priceIva}`);