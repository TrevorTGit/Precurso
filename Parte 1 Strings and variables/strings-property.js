// Si sabemos cuantas letras tiene un texto (gracias a la propiedad length)
// ¿como podriamos saber qué indice/posicion corresponde a la primer letra?
// siempre sera el 0
const name = "Luis";
    console.log(name.length);
    console.log(name[0]);
console.log("")


// como podriamos saber qué indice/posicion corresponde a la ultima letra?    
// el indice que corresponde a la última letra es igual al numero total de letras (length) - 1

const name2 = "David";
const length = name2.length;
const lastIndex = length - 1;
    console.log(name2.length);    
    console.log(name2[lastIndex]);
console.log("")
    
    
// ¿cómo podriamos saber qué numero corresponde a la penultima letra?   
// el indice que corresponde a la penultima letra es igual al numero total de letras - 2
const name3 = "Correa";
    const length2 = name3.length;
    const lastIndex2 = length2 - 2;
    console.log(name3.length);
    console.log(name3[lastIndex2]);