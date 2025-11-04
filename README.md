Challenge React + Node.js

Este proyecto fue desarrollado como parte de un challenge técnico para el cargo de desarrollador web.
Consiste en una aplicación simple de gestión de Posts, con frontend en React + Redux Toolkit y backend en Node.js + Express + PostgreSQL.

1. Descripción general

La aplicación permite realizar operaciones básicas sobre una tabla de publicaciones (posts) conectada a una base de datos PostgreSQL.

Funciones principales:

Crear un nuevo post

Listar todos los posts existentes

Filtrar posts por nombre (de forma local)

Eliminar posts existentes

2. Tecnologías utilizadas

Frontend

React (Vite)

Redux Toolkit

Axios

Backend

Node.js

Express

PostgreSQL

pg (node-postgres)

3. Estructura del proyecto
Challenge/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── routes/
│   │   └── posts.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PostForm.jsx
│   │   │   ├── PostList.jsx
│   │   │   └── PostFilter.jsx
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   └── postSlice.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│
└── .gitignore

4. Configuración del entorno
Base de datos

Crear la base en PostgreSQL:

CREATE DATABASE challenge_posts;


Crear la tabla:

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT
);

5. Instrucciones de instalación
Backend
cd backend
npm install
node server.js


Por defecto corre en http://localhost:5000

Frontend
cd frontend
npm install
npm run dev


Por defecto corre en http://localhost:5173

6. Conexión entre frontend y backend

El archivo postSlice.js del frontend utiliza la siguiente URL base:

const API = "http://localhost:5000/api/posts";


Asegúrate de que el backend esté levantado antes de abrir el frontend.

7. Estado del proyecto

Versión estable para entrega del challenge.
Funcionalidades principales completas y conectadas correctamente con la base de datos.
Diseño simple, sin estilos adicionales, centrado en la funcionalidad.
