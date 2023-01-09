// Averiguar si el  correo que tenemos en un string pertenece a Academlo
const email1  = "Luisdavid@gmail.com";
const email2  = "Luisdavid@academlo.com";
    console.log(email1.endsWith("@academlo.com"));
    console.log(email2.endsWith("@academlo.com"));

// Encontrar el tamaño de la primer palabra de un string
const word1 = "Hola deberia llamarme";
    console.log(word1.indexOf(" ")); 

// Encontrar el tamaño de la segunda palabra de un string
const word2 = "Hola deberia llamarme";
const slicword1 = word2.slice(5,12);
    console.log(slicword1.length);

//  Encontrar el tamaño de la tercera palabra de un string
const word3 = "Hola deberia llamarme";
const slicword2 = word3.slice(13,22);
    console.log(slicword2.length);