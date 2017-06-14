# ConverorToWeigh

ConversorToWeight es un conversor de unidades de medidadas de peso. 
Convierte de Libras a Kilogramos y viceversa.

## Descripción Del Paquete

- Convierte un valor especificado de libra a kilogramo. 
- Convierte un valor especificado de kilogramo a libra.
- En la función se envían 3 parámetros.
- Parámetros: Unidad 1, Unidad 2 y Cantidad. 
- Unidad 1: Unidad inicial a la que se desea realizar la conversión. 
- Unidad 2: Unidad Final a la que se desea obtener.
- Cantidad: Cantidad a Convertir.

### Nomenclatura De Unidades

- lb: Libras
- kg: Kilogramos

## Instalación

```
npm install --save conversor-to-weight

```

## Uso

```
var foo = require('conversor-to-weight')

foo.converTo('lb', 'kg', 2) // Convierte de libras a kilogramos
foo.converTo('kg', 'lb', 2) // Convierte de kilogramos a libras

```

## Créditos
- [Fernando Soto](https://twitter.com/@Fersot7)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
