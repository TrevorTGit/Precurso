// Scope (ambito o alcance), nos especifica que las variabales pueden ser globales, a menos que esta este dentro de una funcion y en caso de que otra funcion trate de usar esta variable no puede
const email = 'luisdavid@gmail.com'
// las variables creadas fuera de una funcion pueden usadas por todos, ya que es global
function printemail() {
    const lastN = 'Correa'
    // las variables creadas dentro de una funcion no pueden usadas por nadie, solo la funcion donde este fue creado  
    console.log(email)
    console.log(lastN)
}
console.log(lastN) // Esto me genera un error por que esta dentro de una funcion
printemail();