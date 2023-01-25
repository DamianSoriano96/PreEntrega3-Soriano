//JS del Login

let submit = document.getElementById("registrar");
let check = document.getElementById("check");

function guardarDatos(storage, user, pass) {
  const usuario = {
    Usuario: user,
    Password: pass,
  };

  storage.setItem("user", JSON.stringify(usuario));
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let user = document.getElementById("emailAdress").value;
  let pass = document.getElementById("password").value;
  let icon;
  let title;
  if (user && pass) {
    if (check.checked) {
      guardarDatos(localStorage, user, pass);
    }
    icon = "success";
    title = "Registro satisfactorio";
  } else {
    icon = "error";
    title = "Datos vacios";
  }

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: title,
  });
  if (user && pass) {
    redireccionar();
  }
});

async function redireccionar() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  window.location.href = "./pages/tienda.html";
}
