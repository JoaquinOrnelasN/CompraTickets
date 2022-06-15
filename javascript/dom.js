/* Simulador de COMPRA DE BOLETOS */


// Declaración de variables
const conciertos = [
    {
        nombre : "Jazz Night",
        img : './imagenes/concierto01.jpg'
    },
    {
        nombre : "Alternative Rock 2000s",
        img : './imagenes/concierto02.jpg'
    },
    {
        nombre : "Summer Music Festival",
        img : './imagenes/concierto03.jpg'
    },
    {
        nombre : "New Bullet: Kevin Ramírez",
        img : './imagenes/concierto04.jpg'
    },
    {
        nombre : "Rock to Die",
        img : './imagenes/concierto05.jpg'
    },
    {        
        nombre : "Neon Party: DJ Kino",
        img : './imagenes/concierto06.jpg'
    },
];

const inputBuscar = document.querySelector('.card-filter');

// Insertar elementos por medio de DOM al HTML 
const contenedorConciertos = document.querySelector('.contenedor-conciertos');

// Eventos 
document.addEventListener('DOMContentLoaded', () => {
    mostrarConciertos();
})

// Evento para capturar texto ingresado por el usuario
inputBuscar.addEventListener('keyup', (e) => {
    let texto = e.target.value;
    console.log(texto);
})

// Funciones
function mostrarConciertos() {
    conciertos.forEach(concierto => {
        //Scripting
        const divConcierto = document.createElement('div');
        divConcierto.classList.add('card');

        const imgConcierto = document.createElement('img');
        imgConcierto.src = concierto.img;
        imgConcierto.classList.add('imagen-concierto');

        const tituloConcierto = document.createElement('h3');
        tituloConcierto.textContent = concierto.nombre;

        const btnBoleto = document.createElement('button');
        btnBoleto.className = "btn-boleto";
        btnBoleto.textContent = "Buscar boletos";
        
        divConcierto.appendChild(imgConcierto);
        divConcierto.appendChild(tituloConcierto);
        divConcierto.appendChild(btnBoleto);
        
        contenedorConciertos.appendChild(divConcierto);
    })
}
