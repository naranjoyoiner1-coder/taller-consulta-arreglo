// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Yoiner Esteban Naranjo Giraldo]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es... (una manera concisa de crear un objeto con sus propiedades y métodos definidos directamente en el código, encerrados entre llaves {}. Se usa para almacenar datos como pares de clave-valor (propiedad-valor) y permite crear objetos simples sobre la marcha.)
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
const persona = {
  nombre: "John Doe", // Propiedad string
  edad: 30,          // Propiedad number
  esEstudiante: false, // Propiedad boolean
  saludar: function() { // Método (función)
    console.log("¡Hola, soy " + this.nombre + "!");
  }
};

console.log(persona.nombre); // Salida: John Doe
persona.saludar();         // Salida: ¡Hola, soy John Doe!

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
// Objeto literal "computador"
const computador = {
    marca: "Dell",                     // string
    precio: 2800000,                   // number
    encendido: true,                   // boolean
    accesorios: ["mouse", "teclado", "parlantes"], // array
    procesador: {                      // objeto anidado
        marca: "Intel",
        modelo: "Core i5",
        nucleos: 6,
        velocidadGHz: 2.9
    }
};

console.log(computador);


// Muestra el objeto `computador` en la consola.


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es...(Un objeto constructor se crea usando una plantilla llamada clase o función constructora, lo que permite generar múltiples instancias de un objeto con características y comportamientos definidos. En contraste, un objeto literal define una instancia única de objeto directamente en el código, sin una plantilla separada, útil para casos donde no se necesitan múltiples copias del mismo tipo de objeto
 * 
 * Objeto por Constructor (Clase o Función)
Definición: Es una instancia de una clase, que es un plano o plantilla para crear objetos. También se puede crear a partir de una función constructora. 
Mecanismo: Al momento de la creación de un objeto, se ejecuta automáticamente un método especial llamado constructor, el cual se encarga de inicializar las propiedades (atributos) del objeto. 
Propósito: Se utiliza para crear múltiples objetos similares que comparten la misma estructura y métodos, pero con datos específicos para cada uno. 
Ventajas:
- Reutilización: Permite crear muchas instancias de un objeto a partir de una sola definición de clase. 
- Encapsulamiento: Los atributos pueden ser manejados de manera privada dentro de la clase, protegiendo su integridad.

Objeto por Aproximación Literal
Definición: Es una forma directa de definir un objeto en el código, especificando sus propiedades y métodos de manera inmediata. 
Mecanismo: Se crean directamente en el código sin definir una clase o función previa, usando una sintaxis específica para el lenguaje (por ejemplo, llaves {} en JavaScript). 
Propósito: Ideal para crear objetos únicos o específicos que no requieren ser instanciados múltiples veces, proporcionando una manera rápida y sencilla de definir estructuras de datos. 
Ventajas:
- Sencillez: Es una forma rápida y directa de crear objetos sin necesidad de escribir código adicional para una clase o función. 
- Conveniencia: Permite definir propiedades y métodos de forma legible directamente en el código.

- Objeto literal = práctico, rápido, para casos puntuales.
- Constructor (clase/función) = organizado, escalable, para proyectos serios y reutilizables.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
const computadorPorConstructor = new Object();

// Asignar propiedades
computadorPorConstructor.marca = "Dell";                  // string
computadorPorConstructor.precio = 2800000;                // number
computadorPorConstructor.encendido = true;                // boolean
computadorPorConstructor.accesorios = ["mouse", "teclado", "parlantes"]; // array

// Asigna las propiedades aquí
computadorPorConstructor.procesador = {
    marca: "Intel",
    modelo: "Core i5",
    nucleos: 6,
    velocidadGHz: 2.9
};

// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computadorPorConstructor);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(nombre, precio, categoria, disponible) {
    this.nombre = nombre;       // string
    this.precio = precio;       // number
    this.categoria = categoria; // string
    this.disponible = disponible; // boolean
}


// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1 = new Producto("Laptop", 2800000, "Tecnología", true);
const producto2 = new Producto("Auriculares", 150000, "Accesorios", false);

// Muestra las instancias en la consola
console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);
