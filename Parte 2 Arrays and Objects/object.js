//Los objetos tienden a ser mas faciles de manejar que los arrays, ya que estos son 
const car =  
    {
        Paint: 'Color-Azul',
        Wheel: '4-Llantas',
        Door: '4-Puertas',
        Engine: '1-Motor'
    };
console.log("EL carro tiene:", car.Engine); // para aceder a las propiedades de un objeto hay que selecionar la variable y acto seguido su propiedad 
// Si quiesiera eliminar un valor de un objecto usaremos la siguiente propiedad: delete
delete car.Engine;
console.log("EL carro ya no tiene esta propiedad:", car.Engine); 
// Si quiesiera agregar un valor al objecto no usaremos una propiedad, solo acederemos al objeto y le añadiremos este valor
car.EngineRestored = "1-Motor";
console.log("EL carro ya tiene esta propiedad:", car.EngineRestored); 
// Para sobrescribir o modifiar un valor de un objeto, invocaremos la variable del objeto y su propiedad, y le agregamos el valor nuevo
car.Door = "2-puertas";
console.log("La cantidad de puertas, paso de 4 a:", car.Door)