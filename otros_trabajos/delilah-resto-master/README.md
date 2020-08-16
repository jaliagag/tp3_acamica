## Proyecto 3 Delilah Resto

Autor: Juan David Viuche

Esta API tiene como objetivo el manejo de la informacion de un restaurante, desde toda la gestion de usuarios del sistema como de los platos que ofrece el restaurante hasta la gestion de pedidos.

Instrucciones para inciar el server

- Clonar el proyecto de Git.
- Ejecutar XAMPP u otro programa de MySQL y Apache.
- Importar la base de datos "database.sql" que se está dentro de la carpeta "database" en la raiz del proyecto, este archivo contiene la creacion de tablas en mysql y la insercion de datos de prueba para la verificacion del correcto funcionamiento del API
- Abrir una consola en la carpeta donde se clono el repositorio
- instalar las dependecias del proyecto con el comando `npm install`
- Para configurar los datos de acceso a la base de datos abrir el archivo config.js dentro de /src/config y verificar que los datos de acceso a la base de datos sean correctos 
- Iniciar el proyecto con el comando `npm run start` para iniciar el servidor o con el comando `npm run dev` para iniciarlo en modo desarrollo
- Si no ocurre ningun error inesperado debe aparecer en la consola el mensaje "server on port 3000"
- El servidor se encuentra corriendo en la direccion: http://localhost:3000

- En la carpeta "postman_collection" se encuentra el archivo de exportacion de la coleccion de peticiones de postman con las pruebas de las peticiones que se pueden realizar al API, este archivo puede ser importado en postman para verificar el correcto funcionamiento de la misma.
- En la raiz del proyecto se encuentra el archivo spec.yml en donde se encuentra la documentacion del API en Open API.
