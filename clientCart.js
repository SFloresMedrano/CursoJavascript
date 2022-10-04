
let productQty=0;
let clientCart =[];
let clientCartContainer=document.getElementById("clientCartContainer")
const clientCartSection=document.getElementById("clientCartSection");

const ClientCartAdd = (productCode)=>{
    const clientCartContainer=document.getElementsByClassName("clientCartContainer");
    let productIndex = fetchedProducts.findIndex(val=> val.code ===productCode);
    if (!clientCartStorage){
        clientCartStorage=[]; 
    }else {
        clientCart.push(...clientCartStorage);
        clientCartStorage.length=0;
    }
    let productInput=document.getElementById(`productQty${productCode}`);
    productQty = productInput.value; 
    let newItem=(fetchedProducts[productIndex]);
    if((fetchedProducts[productIndex].stock>=productQty)&&(productQty>0)){
        newItem.stock=productQty;
        clientCart.push(newItem);
        let buscador=document.getElementById("buscador")
        buscador.value="";
        swal("", "El producto ha sido añadido correctamente", "success");
        fetchProducts();
        

    }else{
        alert("La cantidad ingresada supera al stock. Controle la cantidad");
        productInput.value=0;
    };
};

function ClientCartRender(){
    let cardContainer = document.getElementById("cardContainer");
    if (clientCart.length>0){
        cardContainer.innerHTML="";
        clientCart.forEach(element => {
            let div = document.createElement("div")
            div.classList.add("cartCard")
            div.innerHTML=`
                <img src=./assets/img/${element.code}.jpg alt="${element.name}" class="card_image"/>
                <h3 class="card_h3"> ${element.name}</h3>
                <p class="card_p"> Cantidad en Stock: ${element.stock}</p>
                <p class="card_p"> Precio: ${element.price}</p>
                <div class="buttonContainer"> 
                    <div class="form-floating">
                    </div>
                    <button class="btn button btnemptyItem" type="button" id=emptyItem${element.code} onclick="DeleteItem(${element.code})" value="Eliminar Item">Eliminar Item</button>
                </div>`;
            cardContainer.append(div);
            });
    }else{
        cardContainer.innerHTML=`<h4 id="emptySign" class="">El carrito está vacio</h4>`
    }
};

const cartOpen = document.getElementById("cartOpen")

cartOpen.addEventListener("click",()=>{
    clientCartContainer.classList.add("clientCartContainer-active");
    ClientCartRender();
})

const cartClose =document.getElementById("cartClose")
cartClose.addEventListener("click",()=>{
    clientCartContainer.classList.remove("clientCartContainer-active");
});

function DeleteItem(itemID){
    console.log(itemID);
}