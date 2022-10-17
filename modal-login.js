const modalContainer= document.querySelector(".modal-container");
const openLogin = document.getElementById("open");
const closeLogin  = document.getElementById("cerrar");
const modalLogin = document.getElementById(".modal-login");
let uploadedImage="";


let arrayStockStorage=[], clientCartStorage=[],fetchedProducts=[];

window.onload=()=>{
    fetchProducts();
    scrollProducts();   
    scrollContact();

    
    if (localStorage.getItem("user") === "admin"){
        modalContainer.classList.remove("modal-active");
        let buttonOpen=document.getElementById("open")
        buttonOpen.disabled=true;
        arrayStockStorage =(JSON.parse(localStorage.getItem("arrayStockStorage")));
        let buttonCart=document.getElementById("cartOpen")
        buttonCart.disabled=true;
        AdminSection();   
     }else if(localStorage.getItem("user") === "user"){
        console.log(localStorage.getItem("user"))
        modalContainer.classList.remove("modal-active");
        clientCartStorage = (JSON.parse(localStorage.getItem("arrayCartStorage")));
        clientCart=[...clientCartStorage];
     }
}

window.onbeforeunload=()=>{
    if(arrayStock.length>0){
        localStorage.setItem("arrayStockStorage"),JSON.stringify(arrayStock);
    }
    if(clientCart.length>0){
        localStorage.setItem("arrayCartStorage",JSON.stringify(clientCart));
    }
};


//Ocultar/mostrar el login
openLogin.addEventListener("click",()=>{
    modalContainer.classList.toggle("modal-active");
});

closeLogin.addEventListener("click",()=>{
    modalContainer.classList.remove("modal-active");
});

closeLogin.addEventListener("click",(e)=>{
    e.stopPropagation() ;
}) ;

// Añadir secciòn Admin para carga de productos
function AdminSection (){
    let newSection=document.createElement("section");
    newSection.classList.add(`addProduct`);
    newSection.setAttribute("id","containerInput")
    let productLoader=document.getElementById("productLoader")
    console.log(header)
    productLoader.append(newSection);
    newSection.innerHTML = 
    `
        <div class="formContainer d-flex f-row" id="formContainer">
        <form id="inputContainer" class="inputContainer">
        <div class="input-group mb-3 fs-6">
            <div class="form-floating">
                <input type="number" class="form-control" id="productCode" placeholder="code">
                <label for="codeInput">Codigo</label>
            </div>
        </div>

        <div class="input-group mb-3 fs-6">
            <div class="form-floating">
                <input type="text" class="form-control" id="productName" placeholder="name">
                <label for="productName">Nombre del Producto</label>
            </div>
        </div>

        <div class="input-group mb-3 fs-6">
            <div class="form-floating">
                <input type="number" class="form-control" id="productStock" placeholder="Stock">
                <label for="productName">Stock del Producto</label>
            </div>
        </div>

        <div class="input-group mb-3 fs-6">
            <div class="form-floating">
                <input type="number" class="form-control" id="productPrice" placeholder="price">
                <label for="productPrice">Precio del Producto</label>
            </div>
        </div>
        
        <div class="buttonContainer">
            <input class="btn button btnadd" type="submit" id="addProduct" value="Agregar Producto">
            <input class="btn button btnrem" type="reset" id="removeProduct" value="Remover Producto">
        </div>

        </form>
        </div>
        <div id="imageContainer" class="imageContainer d-flex justify-content-center">
            <div class="cardContainer">
                <input type="file" onchange="UpdateImage()" id="imageInput" accept="image/png,image/jpg" >
                <div><img src class="displayImage" alt=""/></div>
            </div>
        </div>`

    AddProduct();
    RemoveProduct();
    LogoutButton();
    LogOut();

};

function LogoutButton(){
    let logoutButton=document.createElement("div");
    logoutButton.classList.add("logoutButton");
    let list=document.getElementById(`list`);
    logoutButton.innerHTML=`
    <li>
    <button class="buttonCart nav-link active fs-5" id="logoutButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
    </button>
  </li>`
    list.appendChild(logoutButton);
}; 


// Login al clickear el boton ingresar
const logIn = document.getElementById("logIn");

logIn.addEventListener("click",()=>{
    let user=document.getElementById("user").value;
    let pass=document.getElementById("password").value;

        if(user.toLowerCase()==="admin" && pass.toLowerCase()==="admin"){
            localStorage.setItem("user","admin")
            swal("", "Bienvenido Admin", "success");
            modalContainer.classList.remove("modal-active");

            let buttonOpen=document.getElementById("open")
            buttonOpen.disabled=true;
            let buttonCart=document.getElementById("cartOpen")
            buttonCart.disabled=true;
            AdminSection();

        }else if(user.toLowerCase() ==="user" && pass.toLowerCase() ==="user"){
            swal("", "Bienvenido User", "success");
            modalContainer.classList.remove("modal-active");
            localStorage.setItem("user","user");
            let buttonOpen=document.getElementById("open")
            buttonOpen.disabled=true;
            LogoutButton();

        }else {
            swal("", "Contraseña o usuario incorrecto", "error");
        };
});

const fetchProducts=async()=>{
    let respuesta = await fetch("./products.json")
    let data= await respuesta.json();
    RenderProducts(data);
    fetchedProducts=[...data]
};

const scrollProducts=()=>{
    let productsButton=document.getElementById("productsButton");
    productsButton.addEventListener("click",()=>{
        let products=document.getElementById("productos")
        products.scrollIntoView();
    });
};

const scrollContact=()=>{
    let productsButton=document.getElementById("contactButton");
    productsButton.addEventListener("click",()=>{
        let contact=document.getElementById("contactSection")
        contact.scrollIntoView();
    });
};



const UpdateImage=()=>{
        let preview = document.querySelector(".displayImage");
        let file = document.querySelector(`input[type=file]`).files[0];
        let reader = new FileReader();
      
        reader.addEventListener("load", () => {
          preview.src = reader.result;
 
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
        let image=document.querySelector(`img`)
        console.log(image.src)

      };