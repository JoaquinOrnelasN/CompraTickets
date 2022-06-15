/* Simulador de COMPRA DE BOLETOS */


// Declaración de variables
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const zoneSelect = document.getElementById('zona');

populateUI();
let ticketPrice = +zoneSelect.value;

// Guardar la zona y el precio seleccionado
function setZoneData(zoneIndex, zonePrice) {
  localStorage.setItem('selectedZoneIndex', zoneIndex);
  localStorage.setItem('selectedZonePrice', zonePrice);
}

// Actualizar el total 
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

// Operador SPREAD  
const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

//Copiar los asientos seleccionados en el array
// Recorre el array
//Retorna una nueva matriz
const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Obtiene datos del LocalStorage
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedZoneIndex = localStorage.getItem('selectedZoneIndex');

// Operador lógico AND
  selectedZoneIndex !== null &&
    zoneSelect.selectedIndex == selectedZoneIndex;  
}

// Evento: Seleccionar zona
zoneSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setZoneData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Evento: Click en asiento
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Actualización de conteo
updateSelectedCount();