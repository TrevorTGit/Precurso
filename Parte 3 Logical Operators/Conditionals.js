// Si tiene 18 mas y es menos de 30 enviamos stickers
// Si tiene 30 mas y es menos de 40 enviamos Playera
// Si tiene 40 mas y es menos de 50 enviamos sudadera
// Si tiene 50 mas y es menos de 60 enviamos Flores

// Las condicionales son muy importante ya que podemos definir resultados concretos   
const age = 54;

// Manera obsoleta e inncesaria de usar condicionales 
// if (age >= 18 && age < 30){
//     console.log('Tenga unos Stickers')
// }
// if (age >= 30 && age < 40){
//     console.log('Tenga una Playera')
// } 
// if (age >= 40 && age < 50){
//     console.log('Tenga una Sudadera')
// } 
// if (age >= 50 && age < 60){
//     console.log('Tenga unas Flores')
// } 

if (age >= 18 && age < 30){
    console.log('Tenga unos Stickers')
}else if (age >= 30 && age < 40){
    console.log('Tenga una Playera')
} else if (age >= 40 && age < 50){
    console.log('Tenga una Sudadera')
} else if (age >= 50 && age < 60){
    console.log('Tenga unas Flores')
} 

const gender = 'male';

if (gender === 'male'){
    console.log('Bienvenido a Academlo');
}else{
    console.log('Bienvenida a Academlo');
}