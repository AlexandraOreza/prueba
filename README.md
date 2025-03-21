# About
Esta es una aplicación web que permite la gestion de notas. Fue creada para evauluar el nivel de desarrollo Fullstack, utilizando Laravel para el backend y React para el frontend.

## Caracteristicas
Crear, leer y eliminar notas.
Validación de datos: Se asegura que cada nota tenga un título y que el contenido no exceda los 200 caracteres.

## Requisitos
- PHP: Versión 7.3 o superior.
- Composer: Para gestionar las dependencias de PHP.
- Node.js: Versión 12 o superior.
- npm: Gestor de paquetes de Node.js.
- XAMPP: Para la base de datos.

## Instalacion
1. Clona el repositorio en la carpeta htdocs/dashboard de xampp:
```javascript
git clone https://github.com/AlexandraOreza/prueba.git
cd prueba
```
2. Configura Laravel:
Instala las dependencias

```javascript
cd api
composer install
```

Configurar las variables archivo .env:

DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=notas_db

DB_USERNAME=root

DB_PASSWORD=

3. Enciende el modulo de Apache y MySql en el panel de control de XAMPP

4. Migra la base de datos:
```
php artisan migrate
```
5. Inicial el servidor en laravel:
```
php artisan serve
```

6. Instala dependencias de Node.js:
```
cd ../front
npm install
```
7. Inicia la aplicacion:
```
npm start
```
¡Listo!

# Uso
- Haz clic en el boton Nueva noota para ir al formulario
- Llena el formulario y haz clic en crear
- Haz clic en el boton Borrar para eliminar notas
