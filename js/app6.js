let players = [
  {
    dni: "43127678F",
    nombre: "Alicia",
    apellidos: "Pérez Gómez",
    fecha_nac: "12/12/1980",
    telefono: "692403829",
    email: "aperez@gmail.com",
    cuenta: "ES6621000418401234567891",
    categoria: "PRO",
  },
  {
    dni: "43125043G",
    nombre: "David",
    apellidos: "Gutiérrez Lorma",
    fecha_nac: "12/12/1985",
    telefono: "692403829",
    email: "dgutierrez@gmail.com",
    cuenta: "ES6000491500051234567892",
    categoria: "PRO",
  },
  {
    dni: "43125430I",
    nombre: "Patricia",
    apellidos: "Vich Lorem",
    fecha_nac: "12/12/1981",
    telefono: "692403829",
    email: "pvich@gmail.com",
    cuenta: "ES9420805801101234567891",
    categoria: "PRO",
  },
  {
    dni: "43124345J",
    nombre: "Pepa",
    apellidos: "Cander More",
    fecha_nac: "12/12/1995",
    telefono: "692403829",
    email: "pcander@gmail.com",
    cuenta: "ES9000246912501234567891",
    categoria: "PRO",
  },
  {
    dni: "43127678F",
    nombre: "Juan",
    apellidos: "Pérez Gómez",
    telefono: "692403829",
    email: "jperez@gmail.com",
    fecha_nac: "12/12/1980",
    cuenta: "ES6621000418401234567891",
    categoria: "BEG",
  },
  {
    dni: "43125043G",
    nombre: "Adolfo",
    apellidos: "Gutiérrez Lorma",
    fecha_nac: "12/12/1985",
    telefono: "692403829",
    email: "agutierrez@gmail.com",
    cuenta: "ES6000491500051234567892",
    categoria: "BEG",
  },
  {
    dni: "43125430I",
    nombre: "Carles",
    apellidos: "Vich Lorem",
    telefono: "692403829",
    email: "cvich@gmail.com",
    fecha_nac: "12/12/1981",
    cuenta: "ES9420805801101234567891",
    categoria: "BEG",
  },
  {
    dni: "43124345J",
    nombre: "Gustavo",
    apellidos: "Cander More",
    telefono: "692403829",
    email: "pleia@gmail.com",
    fecha_nac: "12/12/1995",
    cuenta: "ES9000246912501234567891",
    categoria: "BEG",
  },
];
let contenedor = document.getElementById("beginner_list");
let contenedor2 = document.getElementById("professional_list");

const buttonAdd = document.getElementById("btn-enviar");

buttonAdd.addEventListener("click", function (e) {
  rellenaTablaJugadores();
  AddPlayer();
  limpiarFormulario();
});
init();

function init() {
  rellenaTablaJugadores();
  AddPlayer();
  limpiarFormulario();
}

function evitarDuplicados(dni) {
  for (let cliente of players) {
    if (cliente.dni == dni) {
      return false;
    }
  }
  return true;
}
function checkFormulario() {
  let dni = document.getElementById("dni").value;
  let nombre = document.getElementById("name").value;
  let apellidos = document.getElementById("surname").value;
  let fecha_nac = document.getElementById("date").value;
  let telefono = document.getElementById("tel").value;
  let email = document.getElementById("mail").value;
  let categoria = document.getElementById("categoria").value;

  //comprobar si algun campo esta vacio
  if (
    dni == "" ||
    nombre == "" ||
    apellidos == "" ||
    fecha_nac == "" ||
    telefono == "" ||
    email == "" ||
    categoria == ""
  ) {
    return false;
  } else {
    return true;
  }
}

function AddPlayer() {
  let dni = document.getElementById("dni").value;
  let nombre = document.getElementById("name").value;
  let apellidos = document.getElementById("surname").value;
  let fecha_nac = document.getElementById("date").value;
  let telefono = document.getElementById("tel").value;
  let email = document.getElementById("mail").value;
  let cuenta = document.getElementById("cuenta").value;
  let categoria = document.getElementById("categoria").value;
  if (evitarDuplicados(dni) && checkFormulario()) {
    var anos = calcularEdad(fecha_nac);
    let cliente = {
      dni,
      nombre,
      apellidos,
      fecha_nac,
      telefono,
      email,
      cuenta,
      categoria,
    };
    if (categoria == "BEG" && anos > 15) {
      players.push(cliente);
    } else if (categoria == "PRO" && anos > 17) {
      players.push(cliente);
    }
    console.log(players);
  } else {
    alert("Faltan datos obligatorios");
  }
}

function calcularEdad(fecha) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha);

  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();
  console.log(edad);
  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
}

function limpiarFormulario() {
  document.getElementById("formulario").reset();
}

function rellenaTablaJugadores() {
  contenedor.innerHTML = "";
  contenedor.innerHTML = `<h3>Jugadores Principiantes</h3>`;
  for (let cliente of players) {
    if (cliente.categoria == "BEG") {
      contenedor.innerHTML += ` 
    <img style="float:left" src="./img/icono2.png" alt="icono">
      <p>${cliente.nombre + " " + cliente.apellidos}</p>
      <p>${cliente.email}</p><br>
      `;
    }
  }
  contenedor2.innerHTML = "";
  contenedor2.innerHTML = `<h3>Jugadores Profesionales</h3>`;
  for (let cliente of players) {
    if (cliente.categoria == "PRO") {
      contenedor2.innerHTML += ` 
  <img style="float:left" src="./img/icono2.png" alt="icono">
    <p>${cliente.nombre + " " + cliente.apellidos}</p>
    <p>${cliente.email}</p><br>
    `;
    }
  }
}
