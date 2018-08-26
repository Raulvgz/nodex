/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Cargar el modulo HTTP
var http = require('http');
 
// Configurar una respuesta HTTP para todas las peticiones
function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}
 
var server = http.createServer(onRequest);
 
// Escuchar al puerto 80
server.listen(80, "127.0.0.1", function() {
  console.log((new Date()) + ' Server is listening on port 80');
});
 
// Poner un mensaje en la consola
console.log("Servidor funcionando en puerto 80");
