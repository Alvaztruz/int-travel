# ✈️ Ejercicio Travel Planner

## Objetivos

- Implementar nuevas funciones de lógica de dominio
- Codificar test unitarios en paralelo a la implementación
- Usar buenas prácticas de codificacion
- Modificar la interfaz de usuario para usar las nuevas funciones
- Utilizar Git para control de versiones

### Aspectos a tener en cuenta

- Puede agregar nuevas funciones y tests, así como agregar parámetros en funciones existentes.
- Si necesita realizar supuestos sobre la implementación, agregue comentarios para explicarlos.
- Los test unitarios se deben codificar en los archivos correspondientes `*.test.js`.
- La cobertura de los test unitarios debe alcanzar 100 % de sentencias y ramas.
- No realizar merge de las ramas hasta que se le indique.

## Parte A: rama `feature/city-accomodations` (la rama debe partir de main).

1. Agregar el campo Accomodation en la clase `City` que almacena un objeto de la clase `Accomodation` con las propiedades: `name` (string) y `cost` (number). Implementar la clase y validar lo siguiente:

   - Validar que `cost` sea un número obligatorio mayor o igual a 0.
   - Validar que name sea obligatorio.
   - Validar que el tipo de dato de Accomodation en la clase City sea de la clase Accomodation.

2. Agregar en el formulario el campo Accomodation con sus dos subcampos: nombre (input text) y costo (input number).
3. En la clase `TripManager`, implementar la función `getAccomodationsCost()` que retorna el gasto total en alojamientos del viaje de todas las ciudades.

4. Escribir tests en `test/accomodation.test.js` y `test/tripManager.test.js` para los puntos anteriores, incluyendo casos de éxito y error.

5. En `index.html`, en el dashboard superior ("Summary cards"), agregar una card de bootstrap que muestre el gasto total de alojamientos del viaje.

6. Realizar commit a la rama `feature/city-accomodations` y push de los cambios. **NO** realizar merge a main aún.

7. Subir un issue con el título "Parte A" con la captura de pantalla de la interfaz implementada.

## Parte B: rama `feature/duration` (la rama debe partir de main).

1. Implementar `getTotalDuration()` en la clase `tripManager` que retorne la duración total en días del viaje.

   > Tip 💡: Utilizar la función `getDurationDays()` de la clase City para obtener la duración de cada ciudad.

2. Implementar tests unitarios para la función `getTotalDuration()`.

3. En la sección Summary Cards de `index.html`, agregar una card de Bootstrap para mostrar la duración total del viaje en el dashboard superior.
4. Realizar commit a la rama `feature/duration` y push de los cambios.

5. **‼️Realizar merge a main de las ramas `feature/city-accomodations` y `feature/duration` y conservar los cambios de ambas ramas.**
  
6. Subir un issue con el título "Parte B" con la captura de pantalla de la interfaz completa mostrando ambas tarjetas funcionales.

## Parte C: rama `feature/remove-city`

1. Agregar validación en TripManager para no permitir agregar ciudades con nombres duplicados. Escribir tests unitarios para esta funcionalidad.
   
2. En `TripManager`, implementar la función `removeCityByName(name)` que busca la ciudad por nombre y la elimina. Si no existe, debe lanzar un error. Escribir tests unitarios para esta funcionalidad.

3. Actualizar `main.js` para mostrar un botón `Eliminar` por fila en la tabla de ciudades que use `removeCityByName(name)`.

4. Hacer commit en la rama `feature/remove-city` y subir los cambios.

5. Subir un issue con el título "Parte C" con la captura de pantalla de la interfaz.

### Parte D: rama `main`

1. Verificar que no existan errores de ESLint y corregirlos si los hay.
2. Verificar que la cobertura de los tests unitarios de todos los archivos sea del 100 %. Completar los tests si es necesario.
3. Utilizar la herramienta WAVE para realizar un análisis de accesibilidad y corregir todos los problemas encontrados.
4. Hacer commit y push de la rama `main` con los cambios realizados.
5. Subir un issue con el título "Parte D" con capturas de pantalla de la cobertura de los tests y de la interfaz completa mostrando el análisis con WAVE.

## Extras (opcional)

1. Agregar al dashboard superior un resumen que muestre el número de ciudades del viaje.
2. Agregar una pestaña con un resumen de cantidad de ciudades por país (por ejemplo, España: 3, Uruguay: 2, etc.).
3. Agregar un botón para eliminar todas las ciudades del viaje con una confirmación previa.
4. Subir un issue con el título "Extras" mostrando los puntos implementados.
