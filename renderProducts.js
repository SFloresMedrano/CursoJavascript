let arrayCart=[];

function RenderProducts(){
    let arrayProductsStorage=localStorage.getItem("arrayStock")
    let arrayProducts =[];

    if (arrayProductsStorage){
        arrayProducts= JSON.parse(arrayProductsStorage);
    }
    if(arrayProducts.length>0){
        arrayProducts.forEach(element => {
            let productContainer =document.createElement("div");
            productContainer.classList.add("cardProduct");
            productContainer.innerHTML=`
                <img src=./assets/img/${element.code}.jpg alt="${element.name}" class="card_image"/>
                <h3 class="card_h3"> ${element.name}</h3>
                <p class="card_p"> Cantidad en Stock: ${element.stock}</p>
                <p class="card_p"> Precio: ${element.price}</p>
                <div class="buttonContainer"> 
                    <button type="button" class="btn btnMinusOne">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                    </button>
                    <div class="form-floating">
                    <input type="number" class="form-control QtyInput" id="productQty${element.code}" placeholder="Cantidad">
                    <label for="codeInput">Cantidad</label>
                    </div>

                    <button type="button" class="btn btnPlusOne">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    </button>
                    <input class="btn button btnLoad" type="button" id="button${element.code}" value="Agregar al Carrito">
                </div>`
            let mainContainer=document.getElementById("productContainer")
            mainContainer.append(productContainer)

            const LoadButton=document.getElementById(`button${element.code}`)
            LoadButton.addEventListener("click",()=>{
                let QtyInput=document.getElementById(`productQty${element.code}`);
                let productQty=QtyInput.value;
                //buscar codigo en matriz de productos y comparar cantidades
            })

        });
    }
}

