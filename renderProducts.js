function renderProducts(){
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
                <p class="card_p"> Precio: ${element.price}</p>`
            let mainContainer=document.getElementById("productContainer")
            mainContainer.append(productContainer)
            
        });
    }
}
