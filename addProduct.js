function Productos (codigo,nombre,stock,precio){
    this.codigo = codigo;
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
};

/* const agregar = document.getElementById("addProduct");
const remover = document.getElementById("removeProduct");

agregar.addEventListener("click",()=>{alert("LPM")}); */


/* addProducto.addEventListener("click",()=>{
    let codigo = parseInt(document.getElementById("codigoProd"));
    let nombre = document.getElementById("nombreProd");
    let stock = parseint(document.getElementById("stockProd"));
    let precio = parseint(document.getElementById("precioProd")) ;

    let newProd = new Productos (codigo, nombre, stock, precio)

    alert(newProd)

}); */


//Agregar event Listener para botones