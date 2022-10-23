// Constructor de productos
class Productos {
    constructor (code,name,stock,price){
        this.code = code;
        this.name = name;
        this.stock = stock;
        this.price = price;
    };
}

//Limpia los inputs en la parte de carga de productos
function BlankFields () {
    const input=document.querySelectorAll(".form-control");
    input.forEach(item=> {
        item.value="";
    });
};

//Variables globales

let confirmation="";
let selectedProduct =[], cardCount=[];
let arrayStock=[];



/* Agrega productos siendo admin, en la cola de productos.  */
function AddProduct (){ 

    
    const addProduct = document.getElementById("addProduct");

    addProduct.addEventListener("click",(e)=>{
        let newProduct = new Productos (0, "", 0, 0)
        e.preventDefault();
        newProduct.code = document.getElementById("productCode").value.toString();
        newProduct.name = document.getElementById("productName").value;
        newProduct.stock = document.getElementById("productStock").value;
        newProduct.price = document.getElementById("productPrice").value;        

        let imageURL = `./assets/img/${newProduct.code}.jpg`

        swal({
            title: `Se agregara el siguiente item:`,
            text: `
            Código: ${newProduct.code} 
            Nombre:${newProduct.name}
            Stock: ${newProduct.stock} 
            Precio: ${newProduct.price}`,
            icon: imageURL,
            buttons: true,
          })
          .then((productAdd) => {
            if (productAdd) {
              swal("El producto ha sido agregado", {
                icon: "success",
              });
              fetchedProducts.push(newProduct);
              BlankFields();
              RenderProducts(fetchedProducts);
              
            } else {
                swal("", "El producto no ha sido añadido", "error");
                BlankFields();
            }
          });       
    });
};

/* Remueve productos siendo admin de la cola de productos */
function RemoveProduct(){
    const removeProduct = document.getElementById("removeProduct");

    removeProduct.addEventListener("click",()=>{
        let codeInput = document.getElementById("productCode").value;        
        selectedProduct = arrayStock.find(val=> val.code === codeInput);
        let location =arrayStock.findIndex(val=>val.code===codeInput);

        if (selectedProduct != (-1)){

            confirmation = prompt(`El producto a eliminar es el siguiente:
            ${selectedProduct.code}
            ${selectedProduct.name}
            ${selectedProduct.stock}
            ${selectedProduct.price}
            Confirme por SI o NO`)

                if (confirmation.toLowerCase() === "si"){
                    alert(arrayStock[location].code + " " + arrayStock.length)
                    arrayStock.splice(location, 1);
                    alert (`El producto ha sido removido.`);
                    BlankFields();
                    DeleteCard();

                } else if(confirmation.toLowerCase() === "no"){
                    alert("El producto no ha sido removido.");
                    newProduct.code = 0;
                    newProduct.name = 0;
                    newProduct.stock = 0;
                    newProduct.price = 0;
                    BlankFields();
                    DeleteCard();

                }  
        }else{
            alert("El producto no ha sido encontrado")
        };
    });
};

//Logout
function LogOut(){
    const logoutButton=document.getElementById("logoutButton");
    logoutButton.addEventListener("click",()=>{
        localStorage.setItem("user","");
        swal("Ud. ha cerrado sesión", "¡Hasta Luego!", "success");
        let buttonOpen=document.getElementById("open");
        buttonOpen.disabled=false;
        let buttonCart=document.getElementById("cartOpen")
        buttonCart.disabled=false;
        let list=document.getElementById("list")
        list.lastChild.remove();
        let productLoader=document.getElementById("productLoader")
        productLoader.innerHTML=``;
        clientCart=[];
        localStorage.setItem("clientCartStorage",JSON.stringify(clientCart));
    
    })
};