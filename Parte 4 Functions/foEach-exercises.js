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

// 1. Extraer todos los correo
// Solucion (Okay) 

// const emails = [];
// function allEmail(email){
//     emails.push(email.email)
// }
// users.forEach(allEmail);
// console.log(emails);


// 2. Extraer los correo de los usuarios que no son Academlo 
// Solucion (Okay) 

// const emails = [];
// const emailsNot = [];

// function getEmail(email){
//     if (email.email.endsWith("@academlo.com")){
//         emails.push(email.email)
//     }else {
//         emailsNot.push(email.email)
//     }
// }

// users.forEach(getEmail);
// console.log(emailsNot);
