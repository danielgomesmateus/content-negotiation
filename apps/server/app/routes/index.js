module.exports = function(app) {

  app.get('', function(request, response) {

      app.app.controllers.home.index(request, response);
  });

  app.post('', function(request, response) {

    app.app.controllers.home.index(request, response);
  });
}
