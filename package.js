Package.describe({
  name:    "clinical:env",
  version: "4.0.0",
  summary: "Set environment variables defined in a .env file",
  git:     "https://github.com/clinical-meteor/clinical-env",
  contributors: [
    "pauldowman",
    "nmacmunn",
    "scottmotte",
    "meteorhacks",
    "gadicohen",
    "arunoda",
    "possibilities",
    "TomWiJ",
    "panphora"
  ]
});



// Npm.depends({dotenv: "0.4.0"});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');

  api.addFiles('lib/clinical-env.js', ['client', 'server']);

  api.export('Env');
});
