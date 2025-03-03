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