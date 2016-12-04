describe('clinical:env', function () {
  var server = meteor();
  var client = browser(server);

  it('Should exist on the client', function () {
    return client.execute(function () {
      expect(Env).to.exist;
    });
  });

  it('Should exist on the server', function () {
    return server.execute(function () {
      expect(Env).to.exist;
    });
  });

  it('Env.allow() enables values in Env.variable()', function () {
    return server.execute(function () {
        expect(Env.isTesting()).to.equal(true);
    }).then(function (value) {
      client.wait(500, 'until env variables are available on server', function (){
        expect(Env.isTesting()).to.equal(true);
      });
    });
  });
});
