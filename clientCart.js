/* Variables globales */

let productQty = 0;
costo = 0;
productsCount = 0;
let clientCart = [];

let clientCartContainer = document.getElementById('clientCartContainer');
const clientCartSection = document.getElementById('clientCartSection');

/* Variables para abrir y cerrar el carrito */
const cartOpen = document.getElementById('cartOpen');

cartOpen.addEventListener('click', () => {
  clientCartContainer.classList.add('clientCartContainer-active');
  ClientCartRender();
});

const cartClose = document.getElementById('cartClose');
cartClose.addEventListener('click', () => {
  clientCartContainer.classList.remove('clientCartContainer-active');
});

/* Agrega un producto al carrito */
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
  let newItem = new Productos(
    fetchedProducts[productIndex].code,
    fetchedProducts[productIndex].name,
    0,
    fetchedProducts[productIndex].price
  );

  if (fetchedProducts[productIndex].stock >= productQty && productQty > 0) {
    let indexCart = clientCart.findIndex(
      (element) => element.code === newItem.code
    );
    console.log(indexCart);
    if (indexCart >= 0) {
      clientCart[indexCart].stock = parseInt(clientCart[indexCart].stock) + parseInt(productQty);
      newItem.stock = productQty;
      fetchedProducts[productIndex].stock =
        fetchedProducts[productIndex].stock - productQty;
      let buscador = document.getElementById('buscador');
      buscador.value = '';
      swal('', 'El producto ha sido añadido correctamente', 'success');
      RenderProducts(fetchedProducts);
      ClientCartRender();
    } else {
      newItem.stock = productQty;
      fetchedProducts[productIndex].stock =
        fetchedProducts[productIndex].stock - productQty;
      clientCart.push(newItem);
      let buscador = document.getElementById('buscador');
      buscador.value = '';
      swal('', 'El producto ha sido añadido correctamente', 'success');
      RenderProducts(fetchedProducts);
      ClientCartRender();
      /* Resta añadir funcionalidad para modificar la información del stock en el server */
    }
  } else {
    swal(
      '',
      'La cantidad ingresada supera al stock. Controle la cantidad',
      'warning'
    );
    productInput.value = 0;
  }
};

/* Renderiza el carrito */
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
  EmptyCart();
  confirmOperation();
}

/* Borra un item del carro y renderiza de nuevo */
function DeleteItem(itemID) {
  let btnemptyItem = document.getElementById(`emptyItem${itemID}`);
  let itemIndex = clientCart.findIndex(
    (item) => item.code === itemID.toString()
  );
  clientCart.splice(itemIndex, 1);
  ClientCartRender();
}

/* Vacia completamente el carrito */
function EmptyCart() {
  const butttonEmptyCart = document.getElementById('cartEmpty');
  butttonEmptyCart.addEventListener(`click`, () => {
    if (clientCart.length > 0) {
      swal({
        title: `Desea vaciar el carrrito?:`,
        icon: 'warning',
        buttons: true,
      }).then((emptyCart) => {
        if (emptyCart) {
          swal('Se ha vaciado el carrito', {
            icon: 'success',
          });
          clientCart = [];
          ClientCartRender();
        } else {
          swal('', 'El carrito no fue vaciado', 'success');
        }
      });
    } else {
      swal('El carrito se encuentra vacio!', {
        buttons: false,
        timer: 2000,
      });
    }
  });
}

/* Confirma la venta y muestra el precio */
function confirmOperation() {
  const cartBuy = document.getElementById('cartBuy');
  cartBuy.addEventListener('click', () => {
    clientCart.forEach((element) => {
      costo = +parseInt(element.price) * parseInt(element.stock);
      productsCount = +parseInt(element.stock);
    });
    swal({
      title: `Se lista el costo de los elementos:`,
      text: `
        Cantidad: ${productsCount} 
        Precio Bruto:${costo}
        Iva: ${costo * 0.21}
        Precio Final: ${costo * 1.21}
        `,
      buttons: true,
      className: 'swalCartBuy',
    }).then((confirmCart) => {
      if (confirmCart) {
        swal(
          '',
          'El presupuesto será enviado a su correo predefinido',
          'success'
        );
      } else {
        swal('', 'La compra no fue confirmada', 'error');
      }
    });
  });
}
