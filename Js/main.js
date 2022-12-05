//Login de mi página
for (i = 1 ; i < 4 ; i++) { 
    let usuario = prompt ("Ingrese su Usuario");
    let contraseña = prompt ("ingrese su contraseña");
    if ((usuario == "Damian") && (contraseña == "1234")) {
        alert ("Bienvenido DamianSoriano");
            console.log ("Bienvenido Damian");
            break;
        } else {
            alert ("Usuario o contraseña incorrecto")
        } 

}


let zapatilla = parseFloat (prompt ("Ingresa valor del producto (0 para salir)"));
let cuota = parseInt (prompt ("ingresa valor cuota (0 para salir)"));

function cuotas (precio , cuota) {
    precioCuotas = precio / cuota;
    alert ("el precio en "+ cuota + " cuotas es de $" + precioCuotas);
    console.log ("El valor del producto ingresado es de " + precio )
    console.log ("el precio en "+ cuota + " cuotas es de $" + precioCuotas)
}


while (zapatilla != 0) {
    cuotas (zapatilla , cuota);
    zapatilla = parseFloat (prompt ("ingresa valor del producto (0 para salir)"));
    cuota = parseInt (prompt ("ingresa valor cuota (0 para salir)"));
}
