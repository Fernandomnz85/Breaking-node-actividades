# TypeScript

## ¿Qué es?
TypeScript es un superconjunto tipado de JavaScript que se compila a JavaScript puro.

## ¿Cómo instalarlo?
Ejecuta:
npm install -g typescript

## Reglas y configuración
Para configurar TypeScript, usa un archivo `tsconfig.json` con reglas personalizadas.

## ¿Cómo se usa?
1. Escribe código en un archivo `.ts`
2. Compílalo con `tsc archivo.ts`
3. Ejecuta el `.js` resultante con `node archivo.js`

## Ejemplo de uso
```ts
const saludo: string = "Hola, TypeScript!";
console.log(saludo);
