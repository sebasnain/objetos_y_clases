//objetos literales

//esto es un objeto y la historia comienza asi 

const futbolista = 
    {
    nombre: "Lionel",
    apellido: "Messi",
    edad: 35,
    altura: 1.69,
    retirado: false,
    nacionalidad: "Argentino"
    }


//dot notation 
//esta es la forma de poder acceder a los valores del objeto
console.log(futbolista.edad);

//braket notation
//esta es otra forma de poder acceder a los valores del objeto
console.log(futbolista["nacionalidad"]);

const futbolistas = [
    {
        nombre: "Julian",
        apellido: "Alvarez",
        edad: 22,
        altura: 1.7,
        retirado: false,
        nacionalidad: "Argentino"
        } ,
    {
    nombre: "Dmian",
    apellido: "Emiliano",
    edad: 30,
    altura: 1.95,
    retirado: false,
    nacionalidad: "Argentino"
    } ,
    {
    nombre: "Lautaro",
    apellido: "Martinez",
    edad: 25,
    altura: 1.74,
    retirado: false,
    nacionalidad: "Argentino"
    } ,
    {
        nombre: "Nicolas",
        apellido: "Martinez",
        edad: 25,
        altura: 1.74,
        retirado: false,
        nacionalidad: "Argentino"
        }
            

]
  //con el sort podes ordenar un array, en este caso lo ordenas los futbolistas por su edad 
const ordenados = futbolistas.sort((a, b)=> a.edad - b.edad);
console.log(ordenados);


//el push es para agregar, en este caso con esto puedo agregar un jugador 
const futbolistaAgregado = futbolistas.push(  {
    nombre: "Angel",
    apellido: "Correa",
    edad: 27,
    altura: 1.71,
    retirado: false,
    nacionalidad: "Argentino"
    })
   

    //leer todos los objetos de un array de objetos, ademas estamos comprobando que se agrego a angel
    for (let i = 0; i < futbolistas.length; i++) {
        console.log(futbolistas[i]);
        
    }
   
    //otra forma de hacerlo es de la siguiente forma para recorrer un ob en este caso el Messia

    for (const key in futbolista) {
           console.log(key + ": " + futbolista[key])
        }
    
//this es una palabra clave que va hacer una autoreferrencia, sirve para ablicar metodos

