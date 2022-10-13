let productQty = 0; costo=0;productsCount=0;
let clientCart = [];
let clientCartContainer = document.getElementById('clientCartContainer');
const clientCartSection = document.getElementById('clientCartSection');

const ClientCartAdd = (productCode) => {
  const clientCartContainer = document.getElementsByClassName(
    'clientCartContainer'
  );
  let productIndex = fetchedProducts.findIndex(
    (val) => val.code === productCode
  );
  if (!clientCartStorage) {
    clientCartStorage = [];
  } else {
    clientCart.push(...clientCartStorage);
    clientCartStorage.length = 0;
  }
  let productInput = document.getElementById(`productQty${productCode}`);
  productQty = productInput.value;
  let newItem = fetchedProducts[productIndex];
  if (fetchedProducts[productIndex].stock >= productQty && productQty > 0) {
    newItem.stock = productQty;
    clientCart.push(newItem);
    let buscador = document.getElementById('buscador');
    buscador.value = '';
    swal('', 'El producto ha sido añadido correctamente', 'success');
    fetchProducts();
  } else {
    alert('La cantidad ingresada supera al stock. Controle la cantidad');
    productInput.value = 0;
  }
};

function ClientCartRender() {
  let cardContainer = document.getElementById('cardContainer');
  if (clientCart.length > 0) {
    cardContainer.innerHTML = '';
    clientCart.forEach((element) => {
      let div = document.createElement('div');
      div.classList.add('cartCard');
      div.innerHTML = `
                <img src=./assets/img/${element.code}.jpg alt="${element.name}" class="card_image"/>
                <div class="itemDescription">
                    <h3 class="card_h3"> ${element.name}</h3>
                    <p class="card_p"> Cantidad en Carrito: ${element.stock}</p>
                    <p class="card_p"> Precio: ${element.price}</p>
                </div>

                <div class="buttonContainer"> 
                    <div class="form-floating">
                    </div>
                    <button class="btn button btnemptyItem" type="button" id=emptyItem${element.code} onclick="DeleteItem(${element.code})" value="Eliminar Item">Eliminar Item</button>
                </div>`;
      cardContainer.append(div);
    });
  } else {
    cardContainer.innerHTML = `<h4 id="emptySign" class="">El carrito está vacio</h4>`;
  }
}

const cartOpen = document.getElementById('cartOpen');

cartOpen.addEventListener('click', () => {
  clientCartContainer.classList.add('clientCartContainer-active');
  ClientCartRender();
});

const cartClose = document.getElementById('cartClose');
cartClose.addEventListener('click', () => {
  clientCartContainer.classList.remove('clientCartContainer-active');
});

function DeleteItem(itemID) {
  let btnemptyItem = document.getElementById(`emptyItem${itemID}`);
  let itemIndex = clientCart.findIndex(
    (item) => item.code === itemID.toString()
  );
  clientCart.splice(itemIndex, 1);
  ClientCartRender();
};

function EmptyCart(){
    const butttonEmptyCart =document.getElementById("cartEmpty");        butttonEmptyCart.addEventListener(`click`,()=>{
        swal({
            title: `Desea vaciar el carrrito?:`,
            icon: "alert",
            buttons: true,
          })
          .then((emptyCart) => {
            if (emptyCart) {
              swal("Se ha vaciado el carrito", {
                icon: "success",
              });
              clientCart=[];
              ClientCartRender();
            } else {
                swal("", "El carrito no fue vaciado", "success");
            }
          });       
    });
    };

    function confirmOperation(){

        clientCart.forEach(element => {
            costo=costo+element.precio*element.stock
            productsCount=+element.stock
        });
        swal({
            title: `Se lista el costo de los elementos`,
            text: `
            Cantidad: ${productsCount} 
            Precio Bruto:${costo}
            Iva: ${costo*0.21}
            Precio Final: ${costo*1.21}
            `,
            buttons:true,
            
          })
          .then((confirmCart) => {
            if (confirmCart) {
              swal("Se le enviará una presupuesto por dichos elementos. Por favor, ingrese su correo. ", {
                icon: "success",
                //agregar swal con input de correo
              });
              
            } else {
                swal("", "La compra no fue confirmada", "error");
            };
          });       
    };