

//#######################################################
//


//prototipos


function FutbolistaProfecional(nombre,apellido,paisOrigen) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.nacionalidad = paisOrigen
    //si escribis el prototipo aca adentro  .presentacio() js va a tomar como referencia este 
    
}

FutbolistaProfecional.prototype.presentacion = function(){
    return "El jugador es: " + this.nombre + " " +this.apellido + " y su nacionalidad es: " + this.nacionalidad
} //esto es mas util cuando quiero replicar la funcion a varios objetos invocando una sola funcion 

let laPulga = new FutbolistaProfecional("Lionel","Messi","Argentino")
//con el .presentacion() traemos el prototipo
console.log(laPulga.presentacion())


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

class Futbolista extends Deportista {
    constructor(nombre,apellido,tipoDeDeporte,club,goles){
        super(nombre,apellido,tipoDeDeporte);
        this.club = club;
        this.goles = goles;
    }
} 

let enzo = new Futbolista("Enzo","Fernandes","Futbolista","River",80);
enzo.presentacion()
console.log(enzo)