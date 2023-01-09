// 1. Averiguar si el correo de un usuario pertenece a Academlo
const user = {
    name: 'Luis',
    age: 21,
    email: 'Luisdavid@academlo.com',
    description: 'Me gusta la programación'
}
const user2 = {
    name: 'David',
    age: 22,
    email: 'Luisdavid@gmail.com',
    description: 'Estoy aprendiendo a programar'
}
const end = user.email;
console.log(end.endsWith('@academlo.com')); 
// Alternativa 1
console.log(user.email.endsWith('@academlo.com')); 
// Alternativa 2
const end2 = user2.email;
console.log(end2.endsWith('@academlo.com')); 
// Alternativa 1
console.log(user2.email.endsWith('@academlo.com')); 
// Alternativa 2

// 2. Suma un valor de 2 obejctos
const suma = user.age + user2.age;
console.log('La suma de 2 valores de diferentes objectos es:' ,suma) 

// 3. Encontrar el tamaño de la primer palabra de un string
const lengthuser = user.description;
const lengthuser2 = user2.description;
console.log(lengthuser.indexOf(" "));
console.log(lengthuser2.indexOf(" "));
