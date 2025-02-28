import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <div>
    <h1>Escuchando en el puerto ${port} en el link home</h1>
    <a href="/a">go a</a>
    </div>
    `)
})

app.get("/a", (req, res) =>{
  res.send(`
    <div>
    <h1>Escuchando en el puerto ${port} en el link a</h1>
    <a href="/">go Home</a>
    </div>
    `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("Hola mundo");