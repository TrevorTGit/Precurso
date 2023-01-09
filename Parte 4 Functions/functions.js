// Cuando queremos trabajar con funciones se hace de la siguiente manera y puede ser util para hacer codigo mas facily ahorrar espacio

const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'daniela@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    }
];

const genderUserFemale = [];
const genderUserMale = [];

function x(user) { // De esta manera es que almacenamos una variable en una funcion y la invocamos luego
    // Para no tener que hacer que haya una condicion por usuario hay que aplicarle un parametro
    if (user.gender === "Male") {
        genderUserMale.push(user)
    }else {
        genderUserFemale.push(user)
    } // De esta forma usamos la misma solucion para diferentes objectos, sin tener que especificar cada usuario
}
// esto hace que sea mas facil ejecutar codigo, ya que solo ejecuta la funcion que se le indique
x(users[0]); // Forma de como ejecutar una funcion en JavaScript
x(users[1]); 
x(users[2]); 
x(users[3]);
// Asi llamas a la fucnio las veces quela quieras usar
console.log(genderUserMale); // para hombres
console.log(genderUserFemale); // para mujeres
// Con esto le indico a la funcion que se repitala cantidad que le indique