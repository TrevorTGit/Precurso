// && tambien conocido and, Y para los hispanohablantes
// || tambien conocido or, O para los hispanohablantes

// Para ingresar a la academia el usuraio debe ser mayor de 18 si no lo es, no podra ingresar
const user = {
    name: "Luis",
    age: 10,
    gender: "male"
}

// Averiguar si el usuario es mayor de 18 y es hombre
// const accepetd = user.age > 18
// const man = user.gender === "male";
// console.log(accepetd, "El usuario fue admitido");
// console.log(man, "Bienvenido");

// Con el operador && se tienen que cumplir todas las condiciones para que el resultado sea true
const accepetdAndMan = user.age > 18 && user.gender === "male";
console.log(accepetdAndMan);
// const accepetdAndWoman = user.age > 18 && user.gender === "female";
// console.log(accepetdAndWoman);

// Con el operador || se tienen que cumplir una de las condiciones para que el resultado sea true
const accepetdAndMan2 = user.age > 18 || user.gender === "male";
console.log(accepetdAndMan2);
