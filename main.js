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

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'   
server.listen(server_port, server_ip_address, function () { console.log( "Listening on " + server_ip_address + ", port " + server_port ) });
 
// Escuchar al puerto 8080
//server.listen(8080);
 
// Poner un mensaje en la consola
console.log("Servidor funcionando en puerto 8080");
