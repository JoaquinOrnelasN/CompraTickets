
/* Simulador de COMPRA DE BOLETOS */

// Arrays

const compra= [
    { zona: 'Zona VIP', precio: 400 },
    { zona: 'Zona Plateada', precio: 300 },
    { zona: 'Zona General', precio: 200 },
    ]
    
    
    compra.forEach(function(boleto) {
        console.log(`${boleto.zona}  Precio: ${boleto.precio}`);
    })

// Destructuring
const {zona, precio} = compra
console.log(zona);
console.log(precio);

// Método de filtrado (filter) sobre el array

let filtrado = compra.filter( boleto => boleto.precio > 300 );
console.log(filtrado);


// Método de búsqueda (find) sobre el array
const busqueda = compra.find( boleto => boleto.zona === 'Zona Plateada' );
console.log(busqueda);


// Función 
function opcionesZona (zona, precio, disponible){
    this.zona = zona;
    this.precio = precio; 
    this.disponible = disponible;  
}
let boleto1 = new opcionesZona("Zona VIP", "$400", true);
let boleto2 = new opcionesZona("Zona Plateada", "$300", true);
let boleto3 = new opcionesZona("Zona General", "$200", true);

opcionesZona()

console.log(boleto1);
console.log(boleto2);
console.log(boleto3);


// Ciclo For y con Switch Case 
let opcionesBoletos = prompt(`
-- ADQUIERE TUS BOLETOS --
Elija una opción:
1. Zona VIP  --  $400
2. Zona Plateada  --  $300
3. Zona General  --  $200
`);
console.log(opcionesBoletos);

switch(opcionesBoletos){    

    case "1":
        let numeroBoletosZV = parseInt(prompt(`El costo del boleto es de: $400
        Ingrese el número de boletos que desea:`));
        let totalV = numeroBoletosZV * 400;
        let compraV = confirm("Total: $" + totalV); 
        if (compraV === true) {
            for(let i=1; i<=numeroBoletosZV; i+=1)
            document.write("¡Compra exitosa! Usted adquirió el boleto número: ", i +"</br>");
        } 
        else {
            document.write("Compra cancelada. ¡Hasta pronto!")
        }    
        break;

    case "2":
        let numeroBoletosZP = parseInt(prompt(`El costo del boleto es de: $300
        Ingrese el número de boletos que desea:`));
        let totalP = numeroBoletosZP * 300;
        let compraP = confirm("Total: $" + totalP);
        if (compraP === true) {
            for(let i=1; i<=numeroBoletosZP; i+=1)
            document.write("¡Compra exitosa! Usted adquirió el boleto número: ", i +"</br>");
        } 
        else {
            document.write("Compra cancelada. ¡Hasta pronto!")
        }    
        break;
        
    case "3":        
        let numeroBoletosZG = parseInt(prompt(`El costo del boleto es de: $200
        Ingrese el número de boletos que desea:`));
        let totalG = numeroBoletosZG * 200;        
        let compraG = confirm("Total: $" + totalG);
        if (compraG === true) {
            for(let i=1; i<=numeroBoletosZG; i+=1)
            document.write("¡Compra exitosa! Usted adquirió el boleto número: ", i +"</br>");
        } 
        else {
            document.write("Compra cancelada. ¡Hasta pronto!")
        }    
        break;   

    default:  
        confirm("Opción no válida. Vuelva a iniciar.")
}

    