# ✈️ Ejercicio Travel Planner

## Objetivos

- Implementar nuevas funciones de lógica de dominio
- Codificar test unitarios en paralelo a la implementación
- Usar buenas prácticas de codificacion
- Modificar la interfaz de usuario para usar las nuevas funciones

### Aspectos a tener en cuenta

- Puede agregar nuevas funciones y tests, así como agregar parámetros en funciones existentes.
- Si necesita realizar supuestos sobre la implementación, agregue comentarios para explicarlos.
- Los test unitarios se deben codificar en los archivos correspondientes `*.test.js`.
- La cobertura de los test unitarios debe alcanzar 100 % de sentencias y ramas.
- Ejecutar PADIS utilizando el comando `checkpadis` en GitHub Codespaces.

## Parte A: Lógica de Guardar Alojamiento (9 puntos)

1. Agregar el campo Accommodation en la clase `City` que almacena un objeto de la clase `Accommodation` con las propiedades: `name` (string) y `cost` (number). Implementar la clase y validar lo siguiente:

   - Validar que `cost` sea un número obligatorio mayor o igual a 0.
   - Validar que name sea obligatorio.
   - Validar que el tipo de dato de Accommodation en la clase City sea de la clase Accommodation.

2. Agregar la función `addAccommodation(accommodation)` en la clase `City` que permita agregar un alojamiento a la ciudad. Validar que el parámetro sea una instancia de la clase `Accommodation`.
   
3. Escribir tests en para cubrir las líneas de los puntos anteriores, incluyendo casos de éxito y error.

4. Realizar commit y push de los cambios.

5. Subir un issue con el título "Parte A" con captura del coverage de los tests.

## Parte B: UI de Alojamiento (9 puntos)

1. Agregar dos nuevos campos en el formulario de la interfaz de usuario para agregar un alojamiento a una ciudad. 
2. Al hacer clic en el botón de guardar, se debe validar que los campos no estén vacíos y que el costo sea un número mayor o igual a 0. Si la validación es exitosa, se debe agregar el alojamiento a la ciudad correspondiente y mostrarlo en la pestaña de destinos.
3. Realizar commit y push de los cambios.
4. Subir un issue con el título "Parte B" mostrando la nueva interfaz de usuario para agregar alojamientos.

### Parte C: Verificaciones finales (2 puntos)

1. Verificar que no existan errores de ESLint y corregirlos si los hay.
2. Verificar que la cobertura de los tests unitarios de todos los archivos sea del 100 %. Completar los tests si es necesario.
3. Validar con la herramienta WAVE que no existan problemas de accesibilidad.
4. Hacer commit y push de la rama `main` con los cambios realizados.
5. Subir un issue con el título "Parte C" mostrando la cobertura de los tests y el análisis de accesibilidad con WAVE.

## Extras (opcional)

En caso de realizar estos cambios subir un issue con el título "Extras" mostrando los puntos implementados.

1. Agregar una pestaña con un resumen de cantidad de ciudades por país (por ejemplo, España: 3, Uruguay: 2, etc.).
2. En la tabla de destinos, agregar un botón para eliminar cada ciudad.
3. Agregar un botón para eliminar todas las ciudades del viaje con una confirmación previa.
4. Agregar dos cards en la parte superior de la interfaz que muestren el costo total del viaje (sumando los costos de alojamiento) y la duración total del viaje (sumando los días de cada ciudad). Implementar las funciones necesarias en la clase `TripManager`.
   > Tip 💡: Utilizar la función `getDurationDays()` de la clase City para obtener la duración de cada ciudad.


## Documentación

- **Jest:** https://jestjs.io/
- **Bootstrap:** https://getbootstrap.com/
- **ESLint:** https://eslint.org/
- **Javascript:** https://www.w3schools.com/js/
- **HTML:** https://www.w3schools.com/html/
