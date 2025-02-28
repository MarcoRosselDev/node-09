import http from 'node:http';
import fs from 'fs';


const PUERTO = 3000;
http.createServer(function (req, res) {

  fs.readFile('./prueba1.html', function (err, data) {
    res.writeHead(200, {'content-type':"text/html"});
    res.write(data);
    return res.end();
  })

}).listen(PUERTO, 'localhost', ()=> console.log(`escuchando en el puerto ${PUERTO}`))