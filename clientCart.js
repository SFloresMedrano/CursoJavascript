
let productQty=0;
let clientCart =[];

const ClientCartAdd = (productCode)=>{
    const clientCartContainer=document.getElementsByClassName("clientCartContainer");
    let productIndex = products.findIndex(val=> val.code ===productCode);
    if (!clientCartStorage){
        clientCartStorage=[]; 
    }else {
        clientCart.push(...clientCartStorage);
        clientCartStorage.length=0;
    }
    let productInput=document.getElementById(`productQty${productCode}`);
    productQty = productInput.value; 
    let newItem=(products[productIndex]);
    if((products[productIndex].stock>=productQty)&&(productQty>0)){
        newItem.stock=productQty;
        clientCart.push(newItem);
    }else{
        alert("La cantidad ingresada supera al stock. Controle la cantidad");
        productInput.value=0;
    };
console.log(clientCart)
};

function clientCartRender(){
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
                <input class="btn button btnemptyItem" type="button" id=emptyItem${element.code} value="">
            </div>`;
        let cardContainer = document.getElementById("clientCartContainer");
        cardContainer.append(div);
    });
};