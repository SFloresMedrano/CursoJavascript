const modalContainer= document.querySelector(".modal-container");
const openLogin = document.getElementById("open");
const closeLogin  = document.getElementById("cerrar");
const modalLogin = document.getElementById(".modal-login");


let arrayStockStorage=[]; let clientCartStorage=[];

window.onload=()=>{
    RenderProducts();
    
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
    document.body.prepend(newSection);
    newSection.innerHTML = `<form id="inputContainer class="inputContainer">
    <div class="input-group mb-3">
        <div class="form-floating">
        <input type="number" class="form-control" id="productCode" placeholder="code">
        <label for="codeInput">code</label>
        </div>
    </div>
    <div class="input-group mb-3">

        <div class="form-floating">
        <input type="text" class="form-control" id="productName" placeholder="name">
        <label for="productName">name del Producto</label>
        </div>
    </div>
    <div class="input-group mb-3">

        <div class="form-floating">
        <input type="number" class="form-control" id="productStock" placeholder="Stock">
        <label for="productName">Stock del Producto</label>
        </div>
    </div>
    <div class="input-group mb-3">

        <div class="form-floating">
        <input type="number" class="form-control" id="productPrice" placeholder="price">
        <label for="productPrice">price del Producto</label>
        </div>
    </div>
    
    
    <input class="btn button btnadd" type="submit" id="addProduct" value="Agregar Producto">
    <input class="btn button btnrem" type="reset" id="removeProduct" value="Remover Producto">
    <button type="button" id="logoutButton" class="btn-close" aria-label="Cerrar Sesión"></button>
    </form>

    <div class="cardContainer">
    </div>`


    AddProduct();
    RemoveProduct();
    LogOut();
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

        }else {
            swal("", "Contraseña o usuario incorrecto", "error");
        }
});

