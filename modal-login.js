const modalContainer= document.querySelector(".modal-container")
const abrirLogin = document.getElementById("open")
const cerrarLogin  = document.getElementById("cerrar")
const modalLogin = document.getElementById(".modal-login")

let arrStock=[];


abrirLogin.addEventListener("click",()=>{
    modalContainer.classList.toggle("modal-active");
});

cerrarLogin.addEventListener("click",()=>{
    modalContainer.classList.remove("modal-active");
});

cerrarLogin.addEventListener("click",(e)=>{
    e.stopPropagation() ;
}) ;

const iniciarSesion = document.getElementById("iniciarSesion");

iniciarSesion.addEventListener("click",()=>{
    let user=document.getElementById("user").value;
    let pass=document.getElementById("password").value;

    if(user.toLowerCase()==="admin" && pass.toLowerCase()==="admin"){
        alert("Bienvenido admin");
        modalContainer.classList.remove("modal-active");
        
        let newSec=document.createElement("section");
        newSec.classList.add(`addProduct`);
        document.body.prepend(newSec);
        newSec.innerHTML = `<div class="input-group mb-3">

                                <div class="form-floating">
                                <input type="number" class="form-control" id="codigoProd" placeholder="Codigo">
                                <label for="codigoInput">Codigo</label>
                                </div>
                            </div>
                            <div class="input-group mb-3">

                                <div class="form-floating">
                                <input type="text" class="form-control" id="nombreProd" placeholder="Nombre">
                                <label for="nombreProd">Nombre del Producto</label>
                                </div>
                            </div>
                            <div class="input-group mb-3">

                                <div class="form-floating">
                                <input type="number" class="form-control" id="stockProd" placeholder="Stock">
                                <label for="nombreProd">Stock del Producto</label>
                                </div>
                            </div>
                            <div class="input-group mb-3">

                                <div class="form-floating">
                                <input type="number" class="form-control" id="precioProd" placeholder="Precio">
                                <label for="precioProd">Precio del Producto</label>
                                </div>
                            </div>
        
                            <input class="btn button btnadd" type="submit" id="addProduct" value="Agregar Producto">
                            <input class="btn button btnrem" type="reset" id="removeProduct" value="Remover Producto"> `;



                            AddProduct();


    }else if(user.toLowerCase()==="user" && pass.toLowerCase()==="user"){
        alert("Bienvenido user");
        modalContainer.classList.remove("modal-active");
    }else {
        alert("Usuario o contraseña incorrectos");
    }
});