function SearchProduct(){
    const buscador=document.getElementById("buscador");
    const container=document.getElementById("container");
    
    buscador.addEventListener("input",()=>{
        let searchInput=parseInt(buscador.value);
        let searchInputName=buscador.value.toLowerCase();
        let foundItem=products.findIndex(item=> item.code === searchInput);
        let newProduct= new Productos(0,"",0,0);
        newProduct=products[foundItem]
        if(foundItem>=0){
            ShowSearchedProduct(newProduct);
        }else{
            console.log("No hay objeto")
        };
        return foundItem
    });
};

function ShowSearchedProduct(element){
    
    let container=document.getElementById("productContainer")
    container.innerHTML="";

    let productContainer =document.createElement("div");
    productContainer.classList.add("cardProduct");
    productContainer.classList.add(`${element.code}`)
    productContainer.innerHTML=`
        <img src=./assets/img/${element.code}.jpg alt="${element.name}" class="card_image"/>
        <h3 class="card_h3"> ${element.name}</h3>
        <p class="card_p"> Cantidad en Stock: ${element.stock}</p>
        <p class="card_p"> Precio: ${element.price}</p>
        <div class="buttonContainer"> 
            <div class="form-floating">
            <input type="number" class="form-control QtyInput" id="productQty${element.code}" placeholder="Cantidad">
            <label for="codeInput">Cantidad</label>
            </div>
            <input class="btn button btnLoad" type="button" id=button${element.code} value="Agregar al Carrito">
        </div>`
    container.append(productContainer)

    const LoadButton=document.getElementById(`button${element.code}`)
    LoadButton.addEventListener("click",()=>{
        ClientCartAdd(element.code);
    });
};

SearchProduct();