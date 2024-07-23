# **Fundamentos-de-TypeScript**

El comando npx tsc --init inicializa un archivo tsconfig.ts. En este va estar la configuración como el target, ourDir, strictMode, etc. Evitándonos tener que poner esas flags en cada compilación. . Una vez con ese archivo, solo corremos el comando npx tsc y listo. . Y ya por ultimo, podemos evitarnos la compilación continua corriendo el comando npx tsc --watch

## ¿Qué es TypeScript?
TypeScript es un lenguaje de programación desarrollado por Microsoft que se basa en JavaScript y añade características adicionales para mejorar el desarrollo de aplicaciones. TypeScript es un superconjunto de JavaScript, lo que significa que cualquier código JavaScript válido también es válido en TypeScript. Sin embargo, TypeScript introduce tipado estático y otras características avanzadas que no están presentes en JavaScript.
Características Principales de TypeScript

**1. Tipado Estático**:
* TypeScript permite definir tipos para variables, funciones, y objetos, lo que ayuda a detectar errores en tiempo de compilación en lugar de en tiempo de ejecución.

Ejemplo:
```
let nombre: string = "Juan";
let edad: number = 30;
```
**2. Compilación:**
* TypeScript se compila a JavaScript, lo que significa que puedes escribir código TypeScript y luego compilarlo a JavaScript que se ejecutará en cualquier navegador o entorno que soporte JavaScript.

**3. Interfaces y Tipos:**
* Permiten definir la forma y estructura de objetos, asegurando que los objetos cumplan con ciertos requisitos.

Ejemplo:
```
interface Persona { 
      nombre: string; 
      edad: number;}
let juan: Persona = { nombre: "Juan", edad: 30 };
```
**4. Clases y Herencia:**
* TypeScript soporta la programación orientada a objetos con clases, herencia y modificadores de acceso.

Ejemplo:
```
class Animal { 
      nombre: string; 

constructor(nombre: string) { 
      this.nombre = nombre;  
} 
hacerSonido(): void { 
      console.log("Sonido de animal");  
}}
class Perro extends Animal {
       hacerSonido(): void { 
                  console.log("Ladrido");  
}}
let miPerro = new Perro("Rex");
miPerro.hacerSonido(); // "Ladrido"
```
**5. Enfoque en el Desarrollo a Gran Escala:**
* TypeScript está diseñado para facilitar el desarrollo y mantenimiento de aplicaciones grandes. Proporciona herramientas para refactorización, navegación de código, y completado de código.

**6. Compatibilidad con JavaScript:**
* Puedes integrar TypeScript gradualmente en un proyecto JavaScript existente, gracias a su completa compatibilidad con JavaScript.

## Ventajas de Usar TypeScript

**1. Detección Temprana de Errores:** 
* El tipado estático ayuda a detectar errores comunes en el código antes de ejecutarlo, lo que puede ahorrar tiempo en depuración y pruebas.

**2. Mantenimiento y Escalabilidad:**
* El uso de tipos, interfaces y clases hace que el código sea más estructurado y fácil de mantener, especialmente en proyectos grandes y complejos.

**3. Mejoras en la Productividad del Desarrollador:**
* Herramientas de autocompletado, navegación de código y refactorización en editores de texto como Visual Studio Code son más efectivas con TypeScript.

**4. Compatibilidad con Librerías y Frameworks:**
* TypeScript se integra bien con muchas librerías y frameworks populares, como React, Angular y Vue, proporcionando tipado y mejoras en la experiencia de desarrollo.

## Ejemplo de Uso
Aquí tienes un pequeño ejemplo de código TypeScript que define una clase y utiliza tipado estático:
```
class Persona { 
      nombre: string; 
      edad: number; 

constructor(nombre: string, edad: number) {
       this.nombre = nombre; 
               this.edad = edad;  
} 
saludar(): string {
       return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;  }}

let juan = new Persona("Juan", 30);
​console.log(juan.saludar()); // "Hola, me llamo Juan y tengo 30 años."
```
## Resumen

TypeScript es una poderosa herramienta para mejorar la calidad y la mantenibilidad del código JavaScript, especialmente en aplicaciones grandes y complejas. Su tipado estático, soporte para programación orientada a objetos y compatibilidad con JavaScript lo hacen una elección popular entre los desarrolladores web.

Notas de clase:
[TypeScript](https://notebook.zoho.com/app/index.html#/shared/notebooks/6y9ij5115dd2b1fa44bc3b71109bda944d4d6/notecards)
