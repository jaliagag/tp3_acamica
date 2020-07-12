# Clases

Links:

- <https://www.apimatic.io>

## Clase 37

PPT 39

¿Qué va a contener nuestra API?

- Administración de usuarios
- Administración de pedidos
- Administración de productos
- Reglas de seguridad
- Documentación de API

Desafíos técnicos:

- Introducción a la programación:
    + resolución de problemas lógicos
    + presudocódigo
    + bueans prácticas
- JS
    + Fundamentos del lenguaje
    + Algoritmos y estructuras de datos
    + Asincronismo
    + Interacción de con Documentos HTML
- APIs
    + Fundamentos de HTTP
    + Comunicación con servidores
- GIT
    + Herramientas de versionado
    + Repositorios

API: Application Programming Interface

Conjunto de subrutinas, funciones y/o procedimientos que ofrece cierto servidor para ser utilizado por otro software. Para crearlas:

- Pensar cómo se va a estructurar
- crear el modelo de datos
- quiénes van a consumir nuestra API

API REST (Representational State Transfer)

Es un tipo de arquitectura de desarrollo web que se apoya totalmente en el estàndar HTTP. REST tiene una lista de reglas que se deben cumplir en el diseño de la arquitectura para una API. Hablaremos de servicios web **restful** si cumplen la arquitectura REST.

Funcionan a través de:

- REQUEST --> métodos: POST, GET, PUT, DELETE, PATCH
- RESPONSE --> códigos de estado: 200, 404, 500

Separación de cliente y servidor

- su unión es mediante la interfaz uniforme (API)
- los desarrollos en fronend y backend se hacen por separado, teniendo en cuenta la API
- mientras la interfaz no cambie, podremos cambiar el cliente o el servidor sin problemas
- sistema de capas:
    + el cliente puede estar conectado mediante la interfaz al servidor o a un intermediario, para él es relevante y desconocido
    + al cliente solo le preocupa que la API REST funcione como debe: no importa el CÓMO sino el QUÉ.
    + el uso de capas o servidores intermedios puede servir para aumentar la escalabilidad o implementar políticas de seguridad

### NodeJS

Motor de chrome V8 modificado.

[link](clase_37/app.js)

## Clase 38

PPT 40

## Clase 39

PPT 41











