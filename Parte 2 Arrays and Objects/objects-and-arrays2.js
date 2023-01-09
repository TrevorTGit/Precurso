// Los valores anidados dentro de un objecto pueden ser algo complicados, pero faciles de usar, mientras puedas tenga conocimiento de como acceder a ellos 
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

// 1. Extrear todos los correos y guardarlos en un arreglo nuevo
// const emails = [];
// emails.push(users[0].email)
// emails.push(users[1].email)
// emails.push(users[2].email)
// emails.push(users[3].email)
// emails.push(users[4].email)
// console.log(emails);

// 2. Extrear todas las cuentas de facebook
// const facebookAc = [];
// facebookAc.push(users[0].social[0].url)
// facebookAc.push(users[1].social[0].url)
// facebookAc.push(users[2].social[0].url)
// facebookAc.push(users[3].social[0].url)
// facebookAc.push(users[4].social[0].url)
// console.log(facebookAc)





