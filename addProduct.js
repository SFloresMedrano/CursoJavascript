class Productos {
    constructor (code,name,stock,price){
        this.code = code;
        this.name = name;
        this.stock = stock;
        this.price = price;
    };
}

window.onbeforeunload=()=>{
    localStorage.setItem("arrayStockStorage",JSON.stringify(arrayStock))
};

function BlankFields () {
    const input=document.querySelectorAll(".form-control");
    input.forEach(item=> {
        item.value="";
    });
};

let newProduct = new Productos (0, "", 0, 0)

let confirmation="";
let selectedProduct =[], cardCount=[], arrayStock=[];


function AddProduct (){ 
    const addProduct = document.getElementById("addProduct");

    addProduct.addEventListener("click",(e)=>{
        e.preventDefault();
        newProduct.code = document.getElementById("productCode").value;
        newProduct.name = document.getElementById("productName").value;
        newProduct.stock = document.getElementById("productStock").value;
        newProduct.price = document.getElementById("productPrice").value;        


        confirmation =prompt(`Se agregara el siguiente item:
                        ${newProduct.code} 
                        ${newProduct.name}
                        ${newProduct.stock} 
                        ${newProduct.price}
                        Confirme por SI o NO`)

        if (confirmation.toLowerCase() === "si"){

            arrayStock.push(newProduct);
            console.log(arrayStock.length);
            alert ("El producto ha sido agregado como stock.");
            BlankFields();
            DeleteCard();
            

                    
        } else if(confirmation.toLowerCase() ==="no"){
            alert("El producto no ha sido agregado");
            newProduct.code = 0;
            newProduct.name = 0;
            newProduct.stock = 0;
            newProduct.price = 0;            
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

function RenderCard(){
    const showProduct=document.getElementById("showProduct");
    let cardContainer = document.getElementsByClassName("cardContainer");
    showProduct.addEventListener("click",(e)=>{
         cardCount=document.querySelectorAll(".card")

        if(cardCount.length === 0){
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
            cardContainer[0].append(div);
        }

    });
};

function DeleteCard(){
        cardCount=document.getElementsByClassName("card")
        if (cardCount.length>0){
            let cardContainer=document.getElementsByClassName("cardContainer");
            cardContainer[0].firstElementChild.remove();
        };
    
};

function LogOut(){
    const logoutButton=document.getElementById("logoutButton");
    logoutButton.addEventListener("click",()=>{
        localStorage.setItem("user","");
        let body=document.body;
        body.firstElementChild.remove();
        alert("Ud ha cerrado sesión");
        let buttonOpen=document.getElementById("open");
        buttonOpen.disabled=false;
    })
};