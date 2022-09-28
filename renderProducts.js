let arrayCart=[], arrayProducts=[];

function RenderProducts(){
    
        products.forEach(element => {
            let productContainer =document.createElement("div");
            productContainer.classList.add("cardProduct");
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
            let mainContainer=document.getElementById("productContainer")
            mainContainer.append(productContainer)

            const LoadButton=document.getElementById(`button${element.code}`)
            LoadButton.addEventListener("click",()=>{
               ClientCartAdd(element.code);

                })
            }
        )
    };

