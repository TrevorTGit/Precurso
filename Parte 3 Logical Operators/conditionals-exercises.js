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

// 1. Extraer los usuarios con correo de Academlo

// const AcademloUser = [];

// Metodo que se puede usar pero ocupa mas memoria
// const isAcademloUser = users[0].email.endsWith("academlo.com");
// if (isAcademloUser){
//     AcademloUser.push(users[0]);
// }

// Metodo que se puede usar y es mas eficiente
// if (users[0].email.endsWith("academlo.com")){
//     AcademloUser.push(users[0]);
// } 
// if (users[1].email.endsWith("academlo.com")){
//     AcademloUser.push(users[1]);
// } 
// if (users[2].email.endsWith("academlo.com")){
//     AcademloUser.push(users[2]);
// } 
// if (users[3].email.endsWith("academlo.com")){
//     AcademloUser.push(users[3]);
// } 
// if (users[4].email.endsWith("academlo.com")){
//     AcademloUser.push(users[4]);
// }
// console.log(AcademloUser);

// 2. Separar hombres y mujeres

const genderUserFemale = [];
const genderUserMale = [];

if (users[0].gender.endsWith("Female")){
    genderUserFemale.push(users[0])
}else if (users[0].gender.endsWith("Male")){
    genderUserMale.push(users[0])
}    
if (users[1].gender.endsWith("Female")){
    genderUserFemale.push(users[1])
}else if (users[1].gender.endsWith("Male")){
    genderUserMale.push(users[1])
}
if (users[2].gender.endsWith("Female")){
    genderUserFemale.push(users[2])
}else if (users[2].gender.endsWith("Male")){
    genderUserMale.push(users[2])
}
if (users[3].gender.endsWith("Female")){
    genderUserFemale.push(users[3])
}else if (users[3].gender.endsWith("Male")){
    genderUserMale.push(users[3])
}
if (users[4].gender.endsWith("Female")){
    genderUserFemale.push(users[4])
}else if (users[4].gender.endsWith("Male")){
    genderUserMale.push(users[4])
}
console.log("La cantidad de usuarios mujeres:", genderUserFemale);
console.log("La cantidad de usuarios hombres:", genderUserMale);