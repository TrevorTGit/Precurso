// forEach nos sirve para recorrer arreglos sin importar la cantidad de este y sin que me genere undefined por la cantidad que este tenga
const numbers  = [1, 2, 3, 4];

// Imprimir cada numero del arreglo
function printValue(value){
    // value es la variable donde se va almacenan los valores
    console.log(value);
}

// Forma 1 de resolver el problema (Pueden ser grandes cantidades)
// printValue(numbers[0]);
// printValue(numbers[1]);
// printValue(numbers[2]);
// printValue(numbers[3]);

// Forma 2 de resolver el problema(Igual a la 1)
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);

// Forma 3 de resolver el problema, donde usamos el metodo forEach 
numbers.forEach(printValue); // Le indicamos la funcion que usara para la operacion en este caso printValue