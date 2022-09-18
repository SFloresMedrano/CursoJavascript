class Productos {
    constructor (code,name,stock,price){
        this.code = code;
        this.name = name;
        this.stock = stock;
        this.price = price;
    };
}

function DeleteFields () {
    const input=document.getElementsByClassName("form-control");
    input.value="";
};

let newProduct = new Productos (0, "", 0, 0)

let confirmation="";
let selectedProduct =[], arrayCart=[], arrayStock=[];

function AddProduct (){ 
    const addProduct = document.getElementById("addProduct");

    addProduct.addEventListener("click",(e)=>{
        e.preventDefault();
        newProduct.code = (document.getElementById("productCode").value);
        newProduct.name = document.getElementById("productName").value;
        newProduct.stock = (document.getElementById("productStock").value);
        newProduct.price = (document.getElementById("productPrice").value);        
        
        let div =document.createElement("div")
        div.classList.add("card")
        div.innerHTML=` <img src=./assets/img/${newProduct.code} alt="${newProduct.name}" class="card_image"/>
                        <h3 class="card_h3"> ${newProduct.name}</h3>
                        <p class="card_p"> Cantidad en Stock: ${newProduct.stock}</p>
                        <p class="card_p"> Precio: ${newProduct.precio}</p>`;
        addProduct.append(div)


        confirmation =prompt(`Se agregara el siguiente item:
                        ${newProduct.code} 
                        ${newProduct.name}
                        ${newProduct.stock} 
                        ${newProduct.price}
                        Confirme por SI o NO`)


        if (confirmation.toLowerCase() === "si"){
            arrayStock.push(newProduct);
            alert ("El producto ha sido agregado como stock.");
        
            const input=document.getElementsByClassName("form-control");
            input.value="";
        
        } else if(confirmation.toLowerCase() ==="no"){
            alert("El producto no ha sido agregado");
            newProduct.code = 0;
            newProduct.name = 0;
            newProduct.stock = 0;
            newProduct.price = 0;

            const input=document.getElementsByClassName("form-control");
            input.value="";
        }           
    });
};

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

                if (confirmation.toLowerCase()==="si"){
                    alert(arrayStock[location].code + " " + arrayStock.length)
                    arrayStock.splice(location, 1);
                    alert (`El producto ha sido removido.`)
                    DeleteFields();

                } else if(confirmation.toLowerCase()==="no"){
                    alert("El producto no ha sido removido.");
                    newProduct.code = 0;
                    newProduct.name = 0;
                    newProduct.stock = 0;
                    newProduct.price = 0;
                    DeleteFields();
                }  
        }else{
            alert("El producto no ha sido encontrado")
        };

        
    });
};

function RenderCard(){
    const showProduct=document.getElementById("showProduct");
    const addProduct = document.getElementById("containerInput");
    showProduct.addEventListener("click",(e)=>{
        newProduct.code = (document.getElementById("productCode").value);
        newProduct.name = document.getElementById("productName").value;
        newProduct.stock = (document.getElementById("productStock").value);
        newProduct.price = (document.getElementById("productPrice").value);  
        
        let div =document.createElement("div")
        div.classList.add("card")
        div.innerHTML=` <img src=./assets/img/${newProduct.code}.jpg alt="${newProduct.name}" class="card_image"/>
                        <h3 class="card_h3"> ${newProduct.name}</h3>
                        <p class="card_p"> Cantidad en Stock: ${newProduct.stock}</p>
                        <p class="card_p"> Precio: ${newProduct.price}</p>`;
        addProduct.append(div);

})
    ;
};

function DeleteCard(){
    let codeInput=document.getElementById("productCode")
    let cardCount = document.querySelectorAll("card")
    if (cardCount.length>0){
        codeInput.addEventListener("change",()=>{
            alert(cardCount.length)
            let cardItem=document.getElementById("card");   
            cardItem.remove();
        })
    }

}

// agregar funcionalidad para que el boton no agregue de mas
