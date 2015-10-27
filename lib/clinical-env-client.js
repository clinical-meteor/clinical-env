process = {
  env: Injected.obj('env')
};
Env.variables = function () {
  return Injected.obj('env');
};
Env.display = function () {
  console.log(Env.variables());
};

Env.isDebug = Injected.obj('env').isDebug;
Env.isTrace = Injected.obj('env').isTrace;
Env.isProduction = Injected.obj('env').isProduction;
Env.isDevelopment = Injected.obj('env').isDevelopment;
Env.isTesting = Injected.obj('env').isTesting;
Env.isStaging = Injected.obj('env').isStaging;
Env.isTraining = Injected.obj('env').isTraining;

// Env.isDebug = Injected.obj('isDebug');
// Env.isTrace = Injected.obj('isTrace');
// Env.isProduction = Injected.obj('isProduction');
// Env.isDevelopment = Injected.obj('isDevelopment');
// Env.isTesting = Injected.obj('isTesting');
// Env.isStaging = Injected.obj('isStaging');
// Env.isTraining = Injected.obj('isTraining');



Template.registerHelper("isDebug", function (argument) {
  return Env.isDebug;
});
Template.registerHelper("isTrace", function (argument) {
  return Env.isTrace;
});

Template.registerHelper("isProduction", function (argument) {
  return Env.isProduction;
});
Template.registerHelper("isDevelopment", function (argument) {
  return Env.isDevelopment;
});
Template.registerHelper("isTesting", function (argument) {
  return Env.isTesting;
});
Template.registerHelper("isStaging", function (argument) {
  return Env.isStaging;
});
Template.registerHelper("isTraining", function (argument) {
  return Env.isTraining;
});
