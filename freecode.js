var AyudaJavaScript = "freeCodeCamp"
var librosComprados = 105;
var miNombre = "Gabriel Hernández Torres"
var miEdad = 37
var miNegocioPrimerNombre = "//Hack (2006-2012)"
var miNegocioSegundoNombre = "Servicios Gato"
var miSueño ="tener tiempo para jugar"

console.log(librosComprados);

// opción 1

librosComprados = librosComprados + 1;
console.log(librosComprados);

//opción 2

librosComprados++;
console.log(librosComprados);

var numeroDeEstudiantes = 256
console.log(numeroDeEstudiantes);

numeroDeEstudiantes = numeroDeEstudiantes - 1;
console.log(numeroDeEstudiantes);

numeroDeEstudiantes--;
console.log(numeroDeEstudiantes)

var a = 23
a =  a + 5;
console.log(a);

a += 5;
console.log(a);

var totalVentas = 13567.34;
console.log(totalVentas);

totalVentas += 345.67;
console.log(totalVentas);

var b = 23;

b -= 3;
console.log(b);

var totalDeuda = 2446;
console.log(totalDeuda);

totalDeuda -= 345;
console.log(totalDeuda);

var c = 23
c *= 2;
console.log(c);
 
var salario = 45000;
console.log(salario);

salario *= 5;
console.log(salario)

d = 39;

d /= 3

console.log(d);

salario /= 3;
console.log(salario);

var cadena = "soy una cadena de caracteres \"con comillas \"";
console.log(cadena);

var miMeta;
miMeta = 'aprender a programar con "freeCodeCamp"';
console.log(miMeta);

var nombreCompleto = "Alan" + " " + "Turing";
console.log(nombreCompleto);

var verbo = "proramar";
var mensaje = "estoy aprendiendo a " + verbo + " con freeCodeCamp";
console.log(mensaje);

var mensajeCompleto = "Estoy aprendiendo a programar ";
var parteFinal = "con freeCodeCampo";
mensajeCompleto += parteFinal;
console.log(mensajeCompleto);

var miCadena;

miCadena = "Javascript";
console.log(miCadena.length);

var lenguajeDeProgramacion = miCadena;
console.log(miCadena[0]);

//Inmutabilidad

var miCadena2 = "Jola Mundo";
miCadena2 = "Hola mundo";
console.log(miCadena2);

var miCadena3 = miCadena;
console.log(miCadena3[0]);
console.log(miCadena3[1]);
console.log(miCadena3[2]);
console.log(miCadena3[3]);
console.log(miCadena3[4]);
console.log(miCadena3[5]);
console.log(miCadena3[6]);
console.log(miCadena3[7]);
console.log(miCadena3[8]);
console.log(miCadena3[9]);
console.log(mensajeCompleto[12]);
console.log(miCadena[miCadena.length - 1]);

n = 2;
console.log(miCadena[miCadena.length - n]);

var palabraEnBlanco = "El " + miCadena + " es muy complicado, pero tengo deudas de mas " + totalDeuda + " y tengo que págarlas, pero mis ganancias " + totalVentas + " son imaginarias, por lo tanto " + AyudaJavaScript + " parece ser la unica solucion 😭."
 console.log(palabraEnBlanco);

var listaDeEstudiantes = [["Nora", 97], ["gino", 78]];
console.log(listaDeEstudiantes);

var listaDeProductos = [["camisa", 5.67, "S134"], ["Celular", 250, "S356"],["zapatos", 36.7, "S678"]];
console.log(listaDeProductos);

var datos = [[3.4, 5.6, 3.2],[5.6, 3.4, 7.8], [6.7, 4.5, 7.8]];
console.log(datos);

var miArreglo = [10, 20, 30]
console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);

var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
 console.log(suma);

miArreglo[0] = 40;
 console.log(miArreglo[0]);

var miArreglo2 = [0, [1, 2, 3], [4, 5, 6], [7, 8,9], 10]
console.log(miArreglo2[0]);
console.log(miArreglo2[1][0]);
console.log(miArreglo2[2][2]);
console.log(miArreglo2[3][0]);
console.log(miArreglo2[4]);

var estaciones = ["invierno", "Otoño", "primavera" ];
var estacion;
//estaciones.push("verano");
console.log(estaciones);
//estaciones.pop(estaciones);
console.log(estaciones);

estaciones.shift();
console.log(estaciones);

estaciones.unshift("verano");
console.log(estaciones);

var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["Pan", 5], ["refresco", 7], ["pollo", 7]];

//cereal
console.log("voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0] + ".");

//leche
console.log("voy a comprar " + miListaDeCompras[1][1] + " unidades de " + miListaDeCompras[1][0] + ".");

//galletas
console.log("voy a comprar " + miListaDeCompras[2][1] + " unidades de " + miListaDeCompras[2][0] + ".");

function mostrarMensaje() {
    console.log("hola mundo");
};

mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();

function sumar(a, b){
    var suma = a + b;
    console.log("el resultado de " + a + " + " + b + " es: " + suma);
}

//sumar(5, 3);

var x = 5
var y = 3

//sumar(x, y)
function sumar2 (a, b){
    return a + b;
}
function concatenarTresCadenas(ca, ca2, ca3){
    console.log(ca + ca2 + ca3);
};
concatenarTresCadenas("estoy ", "aprendiendo ", "a programar");
  
var resultado = sumar2(x, y);
console.log(resultado);

function crearCadenaConMeta (lenguajeDeProgramacion) {
    return "mi meta es aprender " + lenguajeDeProgramacion
}
var miMeta = crearCadenaConMeta("javascript");
console.log(miMeta)

