//clases
//es una plantilla para crear objetos
//funcion constructora de objetos
//por convencion la primera letra es con mayuscula 

function FutbolistaProf() {
    this.nombre = String,
    this.apellido = String,
    this.edad = Number ,
    this.altura = Number,
    this.retirado = Boolean,
    this.nacionalidad = String
}  //tambien podes ponerle directamente los valores pero no tiene mucho sentido si son diferentes jugadores


function FutbolistaProfecional(nombre,apellido,edad,altura,retirado,paisOrigen) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.altura = altura,
    this.retirado = retirado,
    this.nacionalidad = paisOrigen
}
// creando objetos con la keyword new
let messi = new FutbolistaProfecional("Lionel","Messi",35,1.69,false,"Argentina")
console.log(messi)
let julian = new FutbolistaProfecional("Julian","Alvarez",22,1.7,false,"Argentino")
console.log(julian)

//bindear porque usamos el bindç
//
//var obj = {};

//FutbolistaProfecional("Lautaro","MArtinez",25,1.8,false,"Argentina").bind(obj)
//esto es lo que pasa por detras de la palabra clave new


//crecio Messi tengo que rescribir su altura 
messi.altura = 1.7;
console.log(messi)
//esto es para contruir plantillas de onjetos que aunque nos flase entregar algun valor ya entregue un valor predeterminado ej:
let laucha = new FuboProfecional("Lautaro","Martinez",25,1.8)
console.log(laucha)
//aca se ve como los ultimos parametros se auto completan con los valores entregados

function FuboProfecional(nombre,apellido,edad,altura,retirado,paisOrigen) {
    this.nombre = nombre || "Lionel",
    this.apellido = apellido || "Messi",
    this.edad = edad || 35,
    this.altura = altura || 1.69,
    this.retirado = retirado || false,
    this.nacionalidad = paisOrigen || "Argentina"
}

//comprobar existencia del valor de un obj
//operador de control
let tieneEdad = messi && messi.edad
console.log(tieneEdad)
let tieneRetirado = laucha && laucha.retirado;
console.log(tieneRetirado) //me entrega el valor almacenado
//miguel me daria unfefined
//let tieneEdad2 = miguel && miguel.edad
//console.log(tieneEdad2)


// #####################
// CONVENCION ES6 para las clases

class Deportista {

    constructor (nombre, apellido, tipoDeporte){
        this.nombre = nombre,
        this.apellido = apellido,
        this.tipoDeDeporte = tipoDeporte
    }
    presentacion() {
        console.log("hola soy " + this.nombre + " "+ this.apellido+ "y mi profesion es " +this.tipoDeDeporte)
    }
}

let delpo = new Deportista("Martin","Del Potro","Tenis");
delpo.presentacion()

console.log(delpo)

//herencias de clases

class Futbolista extends Deportista {
    constructor(nombre,apellido,tipoDeDeporte,club,goles){
        super(nombre,apellido,tipoDeDeporte);//me los traigo de mi clase padre "soy tu padreeeeee"
        this.club = club; //atentis que va con punto y coma 
        this.goles = goles;
    }
} 

let enzo = new Futbolista("Enzo","Fernandes","Futbolista","River",80);
enzo.presentacion()
console.log(enzo)

//object.create y Pure prototypal Inheritance 

var jugador = {
    nombre: "sebas",
    profesional: false,
    inprimirTexto: function(){

        console.log(`yo soy ${this.nombre}`)
        // usando  ` ` y ${} es otra forma de convinar texto y variables
    }
};

var sebis = Object.create(jugador)
console.log(sebis) // es un objeto devuelve 
sebis.inprimirTexto()