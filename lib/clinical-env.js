Env = {
  isProduction: function(){
    if (
      (process.env.NODE_ENV === "prod") ||
      (process.env.NODE_ENV === "production") ||
      (process.env.NODE_ENV === "PROD") ||
      (process.env.NODE_ENV === "PRODUCTION"
    ){
      return true;
    } else {
      return false;
    }
  },
  isDevelopment: function(){
    if (
      (process.env.NODE_ENV === "dev") ||
      (process.env.NODE_ENV === "development") ||
      (process.env.NODE_ENV === "DEV") ||
      (process.env.NODE_ENV === "DEVELOPMENT")
    ){
      return true;
    } else {
      return false;
    }
  },
  isTraining: function(){
    if (
      (process.env.NODE_ENV === "train") ||
      (process.env.NODE_ENV === "training") ||
      (process.env.NODE_ENV === "TRAIN") ||
      (process.env.NODE_ENV === "TRAINING")
    ){
      return true;
    } else {
      return false;
    }
  },
  isTesting: function(){
    if (
      (process.env.NODE_ENV === "test") ||
      (process.env.NODE_ENV === "testing") ||
      (process.env.NODE_ENV === "TEST") ||
      (process.env.NODE_ENV === "TESTING")
    ){
      return true;
    } else {
      return false;
    }
  },
  isStaging: function(){
    if (
      (process.env.NODE_ENV === "staging") ||
      (process.env.NODE_ENV === "STAGING")
    ){
      return true;
    } else {
      return false;
    }
  },
  is: function(value){
    if ((process.env.NODE_ENV === value){
      return true;
    } else {
      return false;
    }
  },
  equals: function(value){
    if ((process.env.NODE_ENV === value){
      return true;
    } else {
      return false;
    }
  },
};
