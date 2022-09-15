function Productos (codigo,nombre,stock,precio){
    this.codigo = codigo;
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
};


const remover = document.getElementById("removeProduct");

arrStock=[];

function AddProduct (){ 
    const addProduct = document.getElementById("addProduct");

    addProduct.addEventListener("click",()=>{


        let codigo = (document.getElementById("codigoProd").value);
        let nombre = document.getElementById("nombreProd").value;
        let stock = (document.getElementById("stockProd").value);
        let precio = (document.getElementById("precioProd").value);
    
        let newProd = new Productos (codigo, nombre, stock, precio)
    
        let confirmacion =prompt(`Se agregara el siguiente item:
                        ${newProd.codigo} 
                        ${newProd.nombre}
                        ${newProd.stock} 
                        ${newProd.precio}
                        Confirme por SI o NO`)

                        if (confirmacion.toLowerCase()==="si"){
            arrStock.push(newProd)

            alert(arrStock[0].precio)

        } else if(confirmacion.toLowerCase()==="no"){}       
    
    });
};

function RemProduct(){
    remProduct.addEventListener("click",()=>{
        let codigo = parseint(document.getElementById("codigoProd").value);


    })
}




//Agregar event Listener para botones