// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Yoiner Esteban Naranjo Giraldo]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es... (  un arreglo (también llamado array o matriz) es una estructura de datos que permite almacenar una colección ordenada de múltiples valores en una sola variable, en lugar de tener que usar una variable diferente para cada dato. Los elementos de un arreglo se acceden mediante un índice numérico (empezando en 0), y puedes guardar diferentes tipos de datos (números, texto, objetos, etc.) en el mismo arreglo, además de que su longitud es dinámica y puede cambiar.)
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para... (Almacenar y organizar datos relacionados o elementos bajo un único nombre de variable para facilitar la manipulación y el acceso a conjuntos de datos, y permitir operaciones eficientes como búsquedas, filtrados y transformaciones en el desarrollo de software.)
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
const arregloMixto = [42, "Hola", true, { nombre: "Yoiner" }, [1, 2, 3]];

// Muestra el arreglo `arregloMixto` en la consola.
console.log(arregloMixto);

// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que...(Un método mutable es aquel que modifica directamente la estructura o el valor original de un objeto, arreglo o dato compuesto en lugar de devolver una copia nueva.)
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");
let arr;

// Método 1: push()
// Descripción: Agrega uno o más elementos al final del arreglo.
arr = [1, 2, 3];
arr.push(4);
console.log("push:", arr); // [1, 2, 3, 4]

// Método 2: pop()
// Descripción: Elimina el último elemento del arreglo.
arr = [1, 2, 3];
arr.pop();
console.log("pop:", arr); // [1, 2]

// Método 3: shift()
// Descripción: Elimina el primer elemento del arreglo.
arr = [1, 2, 3];
arr.shift();
console.log("shift:", arr); // [2, 3]

// Método 4: unshift()
// Descripción: Agrega uno o más elementos al inicio del arreglo.
arr = [2, 3];
arr.unshift(1);
console.log("unshift:", arr); // [1, 2, 3]

// Método 5: splice()
// Descripción: Elimina, reemplaza o agrega elementos en posiciones específicas.
arr = [1, 2, 3, 4];
arr.splice(1, 2, "A", "B"); 
console.log("splice:", arr); // [1, "A", "B", 4]

// Método 6: reverse()
// Descripción: Invierte el orden de los elementos en el arreglo.
arr = [1, 2, 3];
arr.reverse();
console.log("reverse:", arr); // [3, 2, 1]

// Método 7: sort()
// Descripción: Ordena los elementos del arreglo.
arr = [3, 1, 2];
arr.sort();
console.log("sort:", arr); // [1, 2, 3]

// Método 8: fill()
// Descripción: Rellena el arreglo con un valor desde un índice inicial hasta otro final.
arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log("fill:", arr); // [1, 0, 0, 4]




// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que...(es aquel que no modifica el arreglo original, sino que devuelve un nuevo arreglo o un nuevo valor basado en el original.) 
 * 
 * Son importantes porque...(1.Evitan efectos secundarios: Al no alterar los datos originales, se reduce el riesgo de errores inesperados en otras partes del programa.
 * 2.Facilitan el mantenimiento: El código es más predecible, porque siempre sabes que el arreglo original no cambia.
 * 3.Mayor seguridad: Se minimizan los problemas cuando varias funciones o módulos usan los mismos datos.)
 */

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: map()
// Descripción: Crea un nuevo arreglo aplicando una función a cada elemento.
// Ejemplo:
let numeros1 = [1, 2, 3];
let dobles = numeros1.map(n => n * 2);
console.log("map:", numeros1, "=>", dobles);

// Método 2: filter()
// Descripción: Devuelve un nuevo arreglo con los elementos que cumplan una condición.
// Ejemplo:
let numeros2 = [10, 15, 20, 25];
let mayores20 = numeros2.filter(n => n > 20);
console.log("filter:", numeros2, "=>", mayores20);

// Método 3: reduce()
// Descripción: Reduce todos los elementos del arreglo a un único valor.
// Ejemplo:
let numeros3 = [1, 2, 3, 4];
let suma = numeros3.reduce((acc, n) => acc + n, 0);
console.log("reduce:", numeros3, "=>", suma);

// Método 4: reduceRight()
// Descripción: Igual que reduce, pero se recorre de derecha a izquierda.
// Ejemplo:
let numeros4 = ["a", "b", "c"];
let concatenado = numeros4.reduceRight((acc, n) => acc + n, "");
console.log("reduceRight:", numeros4, "=>", concatenado);

// Método 5: concat()
// Descripción: Une dos o más arreglos en uno nuevo, sin modificar los originales.
// Ejemplo:
let numeros5a = [1, 2];
let numeros5b = [3, 4];
let unidos = numeros5a.concat(numeros5b);
console.log("concat:", numeros5a, "+", numeros5b, "=>", unidos);

// Método 6: slice()
// Descripción: Devuelve una parte del arreglo sin modificar el original.
// Ejemplo:
let numeros6 = [10, 20, 30, 40, 50];
let parte = numeros6.slice(1, 4);
console.log("slice:", numeros6, "=>", parte);

// Método 7: includes()
// Descripción: Devuelve true/false si el arreglo contiene un valor específico.
// Ejemplo:
let numeros7 = [1, 2, 3, 4];
console.log("includes:", numeros7.includes(3)); // true

// Método 8: indexOf()
// Descripción: Devuelve la primera posición en la que se encuentra un valor.
// Ejemplo:
let numeros8 = [5, 10, 15, 20];
console.log("indexOf:", numeros8.indexOf(15)); // 2

// Método 9: find()
// Descripción: Devuelve el primer elemento que cumpla la condición.
// Ejemplo:
let numeros9 = [4, 9, 16, 25];
let encontrado = numeros9.find(n => n > 10);
console.log("find:", numeros9, "=>", encontrado);

// Método 10: findIndex()
// Descripción: Devuelve el índice del primer elemento que cumpla la condición.
// Ejemplo:
let numeros10 = [100, 200, 300, 400];
let indice = numeros10.findIndex(n => n === 300);
console.log("findIndex:", numeros10, "=>", indice);