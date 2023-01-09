// Las propiedades no llevan parentesis, en cambio los metodos si llevan parentresis
// Example:
// console.log(eje2.toUpperCase()); //Metodo
//console.log(eje.length); //Propiedad

// Los metodos ayudan a resolver problemas
const eje2 = "Holasakakaklelele"
    console.log(eje2.toUpperCase()); // Hace mayuscula los textos
    console.log(eje2.toLowerCase()); // Hace minisculo los textos
    console.log(eje2.endsWith("as")); // Indica si es verdadero que un dato termina con ese valor indicado, arroja True si es correcto o False si no es correcto 
    console.log(eje2.indexOf("o")); // Indica la posicion del indice o lugar donde este empiece en caso de ser una oracion
    console.log(eje2.lastIndexOf("a")); // Indica la ultima pocision del indice selecionado puede ser una oracion o palabra
    console.log(eje2.slice(6, 10)); // Corta el string selecionado desde su pocision en el espacio ocupado, que puede empezar por 0  y a su vez indicarle hasta que parte sea cortado el string, se agrega un espacio mas por que no corta el indicado
    console.log(eje2.replace("Hola","David")); // Como lo dice el nombre del metodo reemplaza un fragmento u oracion, por un texto indicado 
    console.log(eje2.includes("a")); //Devuelve un valor booleano True o False, si el string selecionado tiene alojado un valor igual puede devolver un True o viceversa 
// Las propiedades
// const eje = "Hola"
//     console.log(eje.length); //Propiedad
