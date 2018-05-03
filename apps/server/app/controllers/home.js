module.exports.index = function(request, response) {

  response.format({

    html: function() {

      response.send("Bem vindo!");
    },
    json: function() {

      var data = {
        title: "Bem vindo!",
        content: request.body
      }

      response.json(data);
    }
  });
}
