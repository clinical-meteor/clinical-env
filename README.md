## clinical:env  


As of v1.3.x, Meteor has begun supporting [twelve-factor app](http://www.12factor.net/) app architecture, by way of providing an ismorphic `process.env.NODE_ENV` variable on both server and client.  As such, the `clinical:env` package has effectively been incorporated into the core product, and we've begun drastically reducing this package.  

If there is demand to bring back the `.env` file, we might bring that back in.  But there have been some

[![Circle CI](https://circleci.com/gh/clinical-meteor/env/tree/master.svg?style=svg)](https://circleci.com/gh/clinical-meteor/env/tree/master)

========================================
### Installation

``meteor add clinical:env``


========================================
### Usage

The client API is now simply isomorphic syntactic sugar for the  ``process.env.NODE_ENV`` environment variable.  

```javascript
  if(Env.isProduction){
    console.log("The NODE_ENV variable is set to 'prod'.");
  }
  if(Env.isDevelopment){
    console.log("The NODE_ENV variable is set to 'dev'.");
  }
  if(Env.isTesting){
    console.log("The NODE_ENV variable is set to 'testing'.");
  }
  if(Env.isTraining){
    console.log("The NODE_ENV variable is set to 'training'.");
  }
  if(Env.isStaging){
    console.log("The NODE_ENV variable is set to 'staging'.");
  }
```

========================================
### .env File

If you were using `.env` file to store environment variables, we recommend adding the `dotenv` NPM package to your `package.json` file.

https://www.npmjs.com/package/dotenv


========================================
### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
