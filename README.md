# Generador de Contraseña

## Descripción
Este es un proyecto realizado en el curso Inmersión Dev con JavaScript de Alura Latam junto con los Maestros Christian Velasco, Leonardo Jose Castillo Lacruz y Jeanmarie Quijada, e incluyendo tres retos para realizar.

Se trata de un generador de contraseña de manera aleatoria, usando tanto letras mayúsculas como minúsculas, carácteres especiales y números, e introduciendo la cantidad o tamaño de la contraseña, la cual debe ser mayor a 8. También, identifica si dicha contraseña es débil o fuerte dependiendo de que tenga por lo menos una letra mayúscula, minúscula, un caracter especial y un número.

## Funciones del proyecto
- **Campo Cantidad.** Se introduce el tamaño de la contraseña (sólo se genera siendo mayor a 8).

- **Botón Generar.** Se da click al botón Generar para que se genere dicha contraseña.

- **Campo Contraseña.** Se visualiza la contraseña generada. Además, está conformada por: letras tanto mayúsculas como minúsculas, carácteres o símbolos especiales y números.

- **Botón Limpiar.** Se da click para limpiar el Campo Cantidad, el Campo Contraseña y los mensajes.

- **Mensaje para Campo Cantidad.** Al lado derecho del Campo Contraseña muestra tres mensajes.

    - Cuando no se introduce un número en el Campo Cantidad muestra lo siguiente: "**_El campo está vacío. Introduzca una cantidad por favor._**"

    - Cuando se introduce un número menor a 8 muestra lo siguiente: "**_La cantidad de caracteres tiene que ser mayor que 8._**".

    - Cuando se introduce un número mayor a 8 muestra lo siguiente: "**_Contraseña generada correctamente._**".

- **Mensaje para Campo Contraseña.** Abajo del Campo Contraseña muestra dos mensajes.

    - Cuando no hay una letra mayúscula, minúscula, un carácter especial o un número muestra lo siguiente: "**_La contraseña es débil! Le falta una letra mayúscula, minúscula, caracter especial o un número._**"

    - Cuando sí hay mayúscula, minúscula, carácter especial y número muestra lo siguiente: "**_La contraseña es fuerte!_**".

## Tecnologías
- HTML5
- CSS3
- JavaScript

## Desafíos
- Agregar símbolos especiales cómo !@#$%^&*() a la cadena de caracteres para que se creen contraseñas más seguras. (Completado)

- Limpiar el campo de la contraseña, agregando un nuevo botón de limpiar. (Completado)

- Implementar una validación que avise al usuario si la contraseña generada es fuerte o débil (por ejemplo, si no contiene un número, o una letra mayúscula) y que muestre un mensaje donde informe que la contraseña es débil. (Completado)

## Autor
Sergio Zúñiga Fraga - Licenciado en Informática