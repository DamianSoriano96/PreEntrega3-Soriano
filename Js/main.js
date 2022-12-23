//Log-in de mi página
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


   
    alert("Lista de zapatillas: \n \n Zapatillas Puma ID = 0 \n Zapatilla Nike ID = 1 \n Zapatillas Adidas ID = 2")

    productosZapatillas = [
       {nombre:"Puma" , precio: 25000 , disponibilidad: true},
       {nombre: "Nike" , precio: 30000 , disponibilidad: false},
       {nombre: "Adidas" , precio: 45000, disponibilidad: true},
        ]
    
    console.log (productosZapatillas);

    let zapatilla = parseInt (prompt ("Ingresa el id del producto (ingrese numero mayor a 2 para salir)"));
    let producto = productosZapatillas [zapatilla];
    console.log (producto);
    let cuota = parseInt (prompt ("ingresa valor cuota (0 para salir)"));
    
function cuotas (precio , cuota) {
    precioCuotas = precio / cuota;
    alert ("El valor del producto ingresado es de " + precio)
    alert ("el precio en "+ cuota + " cuotas es de $" + precioCuotas);
    console.log ("El valor del producto ingresado es de " + precio )
    console.log ("el precio en "+ cuota + " cuotas es de $" + precioCuotas)
}


while (producto && cuota != 0) {
    cuotas (producto.precio , cuota);
    zapatilla = parseInt (prompt ("ingresa valor del producto (Ingrese numero mayor a 2 para salir)"));
    producto = productosZapatillas [zapatilla];
    cuota = parseInt (prompt ("ingresa valor cuota (0 para salir)"));
}

let nike = productosZapatillas.filter((zapatillas) => {
    return zapatillas.disponibilidad;
})
console.log (nike)

// Aca me gustaria implementarlo más adelante para simular un dia de promocion (por ejemplo un black friday)

/*
const preciosActualizados = productosZapatillas.map((producto) => {
    return {
        marca: producto.marca,
        precio: producto.precio * 1.20
    }
})

alert ("En el dia de hoy hay descuentos de un 20% en todos los productos de la tienda")
console.log (preciosActualizados);
*/