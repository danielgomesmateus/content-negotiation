var http = require('http');
var bufferRequest = [];

var options = {
  hostname: 'localhost',
  port: 8000,
  method: 'GET',
  path: '/',
  headers: {
    'Accept': 'text/html',
    //'Accept': 'application/json', // Formato que espera receber a resposta do servidor
    'Content-type': 'application/x-www-form-urlencoded'
    //'Content-type': 'application/json' // Formato que envia as informações para o servidor
  }
}

//var form = 'nome=Daniel&idade=25';
//var form = {nome: 'Daniel', idade: 25};
//var json = JSON.stringify(form);

var request = http.request(options, function(response){

  response.on('data', function(piece) {

    bufferRequest.push(piece);
  });

  response.on('end', function() {

    var contentBuffer = Buffer.concat(bufferRequest).toString();
    console.log(contentBuffer);
  });
});

//request.write(form);
//request.write(json);
request.end();
