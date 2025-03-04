import express from 'express';
import ruta_profesores from './rutas/rutaProfesores.js';

const app = express()

app.use(ruta_profesores)
app.get("/", (req, res) =>{
  res.send({mensaje: 'Hola mundo'})
})

app.listen(6500, ()=>{
  console.log("app iniciado...");
})
/* bamos a repasar los comandos basicos de sql
enfocandonos en postgresql.
puede ser mas adelante utilizar otras bases de datos como mysql.
ya contamos con experiencia con mongoDB por lo que no lo incluiremos en este proyecto.
la carpeta postgres es solo notas de repaso.
 */