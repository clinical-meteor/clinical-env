describe('clinical:env', function () {
  var server = meteor();
  var client = browser(server);

  it('should exist on the client', function () {
    // return a promise
    return client.execute(function () {
      expect(Env).not.to.be.empty;
    });
  });
  it('should exist on the server', function () {
    // return a promise
    return server.execute(function () {
      expect(Env).not.to.be.empty;
    });
  });
  it('Env.allow() enables values in Env.variable()', function () {
    return server.execute(function () {
      // some code to execute
      Env.allow({DEBUG: true});
    }).then(function (value) {
      return client.execute(function () {
        // some code to execute on server
        expect(Env.variable('DEBUG')).to.be.ok;
        expect(Env.variable('DEBUG')).to.equal(true);
      });
    });
  });
});
