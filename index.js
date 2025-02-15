/*
//Forma de impresión en consola
//console.log("Hola desde js")

//variables con tipos de datos distintos
var nom = "Zaira"
var e = 20
var g1 = "escuchar musica"
var g2 = "videojuegos"

//impresión saber el tipo de dato de una variable
//console.log(typeof nom) 

//impresion del contenido de las variables
console.log(nom)
console.log(e)
console.log(g1)
console.log(g2)

//formas de concatenar con signo + imprime todo junto sin espacios
console.log(nom + e)

//concatenar con , imprime todo en una sola linea pero con espacios
console.log("mi nombre es:", nom, "tengo", e, "años", "me gusta", g1, "y", g2)

//concatenar con template String
console.log(`Mi nombre es: ${nom} tengo ${e} años y me gusta ${g1} y ${g2}`) */

//Metodo de entrada, pedirle al usuario un dato y almacenarlo en una variable
/* var nom = prompt('Ingressa tu nombre');
var e = prompt('Ingresa tu edad');
var g1 = prompt('Ingresa un hobby');
var g2 = prompt('Ingresa otro hobby');

//Mostrar un mensaje al usauari 
//alert(nom);

console.log(`Me llamo ${nom} tengo ${e} años, me gusta ${g1} y ${g2}`); */

//Pedir 3 numeros al usuario para realizar una suma
var num1 = prompt('Ingresa un primer numero');
var num2 = prompt('Ingresa el segundo numero');
var num3 = prompt('Ingresa el tercer numero');

/*Los datos dados por el usuaria se guardan como string así que se deben transformar
a tipo number para poder realizar operaciones con ellos
tambien se puede var int3 = parseFloat(prompt('Ingresa el tercer numero')) */

var int1 = parseFloat(num1)
var int2 = parseFloat(num2)
var int3 = parseFloat(num3)

var suma = int1 + int2 + int3

//otra forma de tranformar los datos a tipo Number
//console.log(Number(num1) + Number(num2) + Number(num3))
console.log(`La suma de los numero ${num1}, ${num2} y ${num3} es ${suma}`)