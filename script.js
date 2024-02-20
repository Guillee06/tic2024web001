function nombre() {
  alert("Guillermo Álvarez González 2C");
}

function esconderamarillo() {
  document.getElementById("bloque1").classList.add("oculto");
}

function volveramostrar() {
  document.getElementById("bloque1").classList.remove("oculto");
}

function cambiarcolor() {
  document.getElementById("bloque1").classList.add("cambio-color");
}

// Función para mostrar la fecha actual en una ventana de alerta
function mostrarFecha() {
  alert(new Date());
}

// Función para cambiar el color de fondo del segundo div
function cambiarColor() {
  document.getElementById("bloque2").classList.add("cambio-color");
}

// Función para restaurar el color original del segundo div
function restaurarColor() {
  document.getElementById("bloque2").classList.remove("cambio-color");
}

// Función para obtener la ubicación del dispositivo
function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
  } else {
    alert("La geolocalización no es soportada por este navegador.");
  }
}

// Función para mostrar la ubicación en el HTML
function mostrarUbicacion(position) {
  var ubicacionDiv = document.getElementById("ubicacion");
  ubicacionDiv.innerHTML = "Latitud: " + position.coords.latitude.toFixed(6) + "<br> Longitud: " + position.coords.longitude.toFixed(6);
}
// Función para obtener la ubicación del dispositivo
function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
  } else {
    alert("La geolocalización no es soportada por este navegador.");
  }
}

// Función para mostrar la ubicación en el HTML y en el mapa
function mostrarUbicacion(position) {
  var ubicacionDiv = document.getElementById("ubicacion");
  ubicacionDiv.innerHTML = "Latitud: " + position.coords.latitude.toFixed(6) + "<br> Longitud: " + position.coords.longitude.toFixed(6);

  // Crear un mapa usando Leaflet.js y centrarlo en la ubicación obtenida
  var mapa = L.map('mapa').setView([position.coords.latitude, position.coords.longitude], 13);

  // Añadir una capa de mapa base de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  // Añadir un marcador en la ubicación obtenida
  L.marker([position.coords.latitude, position.coords.longitude]).addTo(mapa)
    .bindPopup('¡Estás aquí!')
    .openPopup();
}