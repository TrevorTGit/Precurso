// Qué propósito tiene retornar un valor en una firstUnción.
// se retorna un valor cuando otro lo vaya a necesitar, ahi es cuando se retorna un valor

// Enviar un correo a un usuario
// 1. obtener correo

const firstUser = 
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
        { name: 'facebook', url: 'facebook/erik' },
        { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    } // No confundas objectos con arreglos, Datazo para la proxima
    // const email = firstUser[0].email; array no objectos

function GetEmail(gEmail){
    const email = gEmail.email; // se obtiene la propiedad
    // SendEmail(); // Alternativa 1 para enviar la variable de una funcion a otra
    return email; // Despues de completar una operacion, quiero que este me devuelva un valor o resultado se llama a un retorno 
}
const mail = GetEmail(firstUser); // con esto le indico que el valor que me retorno se almacene en una variable y hacerlo que quiera con el valor que me retorne la funcion


// 2. enviar correo
function SendEmail(email){
    console.log("Enviar un corrreo a", email) // No necesita retornar nada 
} 
// Para enconntrar y hacer el codigo mas facil de entender lo mejor es dividir las tareas en funciones simples
SendEmail(mail); // ya con esto le puedo indicar que me devuelva lo que lo que esta dentro de esta variable a la funcion
