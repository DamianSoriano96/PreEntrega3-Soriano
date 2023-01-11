//JS del Login

let submit = document.getElementById("registrar");
let check = document.getElementById("check");


function guardarDatos(storage) {

    let user = document.getElementById("emailAdress").value;
    let pass = document.getElementById("password").value;

    const usuario = {
        "Usuario": user,
        "Password": pass
    }

    storage.setItem("user", JSON.stringify(usuario))
}



submit.addEventListener ("click", () => {
    if (check.checked) {
        guardarDatos(localStorage); 
    }
 })