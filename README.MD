# Taller de Investigación: Arreglos y Objetos en JavaScript

El objetivo del taller es profundizar en dos de las estructuras de datos más fundamentales y poderosas de JavaScript: los **Objetos** y los **Arreglos**.

---

## 🎯 Objetivos
- Comprender las diferencias fundamentales entre un objeto literal y un objeto creado por constructor.  
- Identificar qué es un arreglo, para qué sirve y qué tipo de datos puede almacenar.  
- Diferenciar claramente entre métodos de arreglos mutables e inmutables, y entender el impacto de cada uno.  
- Familiarizarse con el flujo de trabajo básico de Git y GitHub (fork, branch, commit, pull request).  

---

## 📦 Instrucciones de Entrega

Para entregar tu solución a este taller, deberás seguir un proceso estándar de contribución en GitHub.

- **Repositorio original:** [https://github.com/jaimezzapata/taller-consulta-arreglo.git](https://github.com/jaimezzapata/taller-consulta-arreglo.git)

### Pasos:
1. **Fork del Repositorio**: Haz un *Fork* de este repositorio a tu propia cuenta de GitHub.  
2. **Clonar tu Fork**: Clona el repositorio que acabas de *forkear* a tu máquina local.  
3. **Crear una Rama**: Crea una nueva rama para tu solución. Nómbrala siguiendo el formato: solucion-tu-nombre-completo
4. **Desarrollar la Solución**:  
Dentro de la carpeta `solucion/`, encontrarás dos archivos:  
- `objetos.js`  
- `arreglos.js`  

Deberás escribir todo tu código y respuestas dentro de estos archivos, siguiendo las consignas de cada sección.  
Igualmente, da solución al archivo `practicaUno.js`.

5. **Commit y Push**: Una vez que hayas completado el taller, guarda tus cambios con un commit descriptivo, por ejemplo: git commit -m "Solución taller objetos y arreglos"

Luego, realiza el **push** a tu repositorio fork en la rama creada.

6. **Crear un Pull Request (PR)**:  
Desde tu repositorio en GitHub, crea un **Pull Request** desde tu rama de solución hacia la rama `main` del repositorio original.  
En la descripción del PR incluye:  
- Tu **nombre completo**  
- Cualquier **comentario relevante**  

---

## 📝 Actividades a Desarrollar

### Parte 1: El Mundo de los Objetos 

En el archivo `solucion/objetos.js`, responde a las siguientes consignas.  
Usa **comentarios** en el código para tus explicaciones y ejemplos funcionales.

#### Investigación #1: Objeto Literal
1. **Define**: ¿Qué es un objeto literal en JavaScript? Explica con tus propias palabras su propósito principal.  
2. **Sintaxis**: Muestra la sintaxis básica para crear un objeto literal.  
3. **Ejemplo práctico**:  
Crea un objeto literal llamado `computador` que represente uno real.  
Debe tener al menos **5 propiedades** con diferentes tipos de datos:  
- `string`  
- `number`  
- `boolean`  
- `array`  
- Otro **objeto anidado** (`procesador` con sus propias propiedades).  

#### Investigación #2: Objeto por Constructor
1. **Define**: ¿Qué es un objeto por constructor (por función y por clase)? Explica la diferencia con la aproximación literal.  
2. **Sintaxis y Ejemplo (Constructor Object)**:  
Muestra cómo se crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.  
3. **Sintaxis y Ejemplo (Constructor Personalizado)**:  
Crea una función constructora llamada `Producto` que reciba **nombre, precio y disponible** como parámetros.  
Luego, crea al menos **dos instancias** de `Producto` con diferentes valores.  

---

### Parte 2: El Universo de los Arreglos  

En el archivo `solucion/arreglos.js`, responde a las siguientes consignas.  
Incluye comentarios explicativos y ejemplos de código.

#### Investigación #3: Fundamentos de los Arreglos
1. **Define**: ¿Qué es un arreglo en JavaScript?  
2. **Propósito**: ¿Para qué se utilizan principalmente los arreglos en el desarrollo de software?  
3. **Contenido**: ¿Qué tipo de elementos puede contener un arreglo en JavaScript?  
- Ejemplo: un arreglo que contenga **números, strings, booleanos, objetos y otros arreglos**.  

#### Investigación #4: Métodos Mutables
1. **Define**: ¿Qué es un método mutable? Explica qué significa que un método "mute" o modifique el arreglo original.  
2. **Investiga y Aplica**: Escoge **8 métodos mutables** de arreglos. Para cada uno:  
- Escribe su **nombre** y una breve **descripción**.  
- Crea un ejemplo práctico mostrando el arreglo **antes** y **después** del método.  

#### Investigación #5: Métodos Inmutables
1. **Define**: ¿Qué es un método inmutable? Explica por qué son importantes y a menudo preferidos en paradigmas como la **programación funcional**.  
2. **Investiga y Aplica**: Escoge **10 métodos inmutables** de arreglos. Para cada uno:  
- Escribe su **nombre** y una breve **descripción**.  
- Crea un ejemplo que demuestre que el arreglo original **no cambia**, mostrando el **original** y el **nuevo arreglo** generado.  

---

## 🚀 Práctica Final: Reto HTML y CSS

Según esta aplicación: [Urban Threads - Migración](https://urban-threads-migracion.netlify.app/), el reto consiste en **clonar el diseño** en un proyecto nuevo.

### Pasos:
1. Crear un repositorio nuevo.  
2. Copiar el enlace del repositorio nuevo en el archivo `RETOHTML.MD`.  
3. Crear el proyecto con un buen **encarpetado** y aplicando **buenas prácticas**.  


