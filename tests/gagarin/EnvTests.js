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

  it('process.env.NODE_ENV should exist on the client', function () {
    return client.execute(function () {
      expect(process.env.NODE_ENV).to.exist;
    });
  });

  it('process.env.NODE_ENV should exist on the server', function () {
    return server.execute(function () {
      expect(process.env.NODE_ENV).to.exist;
    });
  });

  it('process.env.NODE_ENV should be "development" on client', function () {
    return client.execute(function () {
      expect(process.env.NODE_ENV).to.equal('development');
    });
  });

  it('process.env.NODE_ENV should be "development" on server', function () {
    return server.execute(function () {
      expect(process.env.NODE_ENV).to.equal('development');
    });
  });

  it('process.env.NODE_ENV sets Env.isTesting() on client', function () {
    return client.promise(function () {
      expect(Env.isDevelopment()).to.equal(true);
    });
  });
  it('process.env.NODE_ENV sets Env.isTesting() on server', function () {
    return server.promise(function () {
      expect(Env.isDevelopment()).to.equal(true);
    });
  });
});
