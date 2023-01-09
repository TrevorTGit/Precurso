// Al igual que los Strings, loa arrays tienen sus propios metodos, que nos ayudan a modificar estos arrays

// const Emails = ["Luisda@gmail.com", "Davidc@gmail.com", "Correap@gmail.com"];
// console.log(Emails);
// Emails.pop();
// console.log(Emails);
// Pop(), Elimina el último elemento de un arreglo

// const Emails = ["Luisda@gmail.com", "Davidc@gmail.com", "Correap@gmail.com"];
// console.log(Emails);
// Emails.push("Pacheco@gmail.com");
// console.log(Emails);
// Push(), Agregar un elemento al final de un arreglo


// const Emails = ["Luisda@gmail.com", "Davidc@gmail.com", "Correap@gmail.com"];
// console.log(Emails);
// Emails.shift();
// console.log(Emails);
// Shift(), Elimina el primer elemento de un arreglo

// const Emails = ["Luisda@gmail.com", "Davidc@gmail.com", "Correap@gmail.com"];
// console.log(Emails);
// Emails.unshift("Luisdc@academlo.com");
// console.log(Emails);
// Unshift(), Agrega un elemento al inicio de un arreglo

const Emails = ["Luisda@gmail.com", "Davidc@gmail.com", "Correap@gmail.com", "Pacheco@gmail.com"];
console.log(Emails);
Emails.splice(1, 2); // El primer valor es el indice de donde quiero que empiece a tomar los arreglos y el segundo valor es cuantos elementos quiero eliminar
console.log(Emails);
// A partir de la pocision 1 del array quiero que elimine 2 elementos
Emails.splice(1, 0, 'Luisdavidcorreap@academlo.com' ); // El primer valor es el indice de donde quiero que empiece a tomar los arreglos y el segundo valor es para eliminar en caso de agregar se coloca 0 y se añade que objetos se agreguen al array 
console.log(Emails);
// A partir de la pocision 1 del array quiero que agregue 1 o mas elementos
// Splice(), Permite agregar y eliminar elementos en cualquier posición del arreglo