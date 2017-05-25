/**
 * Created by charlie on 9/22/16.
 */
let path = require('path');
let baseConfig = require('./webpack.config.base');
let merge = require('lodash/merge');

let developmentConfig = require('./webpack.config.development');
let rootPath = path.resolve(__dirname + '/../');

// merge base with custom configures
function mergeConfigure(customConfigure) {

  // Handle module
  let loaders = baseConfig.module;
  let moduleNonLoaders= {};

  customConfigure.hasOwnProperty('module') && ( loaders = Object.assign(loaders, customConfigure.module), delete customConfigure.module);
  Object.keys(loaders).forEach(function(key) {
    loaders.$$store = loaders.$$store || [];
    if (/^(preLoaders|postLoaders|[a-z]+Context[A-Z][a-z]+)$/.test(key)) {
      moduleNonLoaders[key] = loaders[key];
    } else if (key === 'loaders' && typeof loaders[key] === 'object') {
      loaders.$$store = Object.assign(loaders.$$store, loaders[key]);
    } else {
      loaders.$$store.push(loaders[key]);
    }
  });

  loaders = loaders.$$store;

  // Merge
  let allConfigs = merge({}, baseConfig, customConfigure);

  // Fixed module
  allConfigs.module = (moduleNonLoaders.loaders = loaders, moduleNonLoaders);

  return allConfigs;
}

let factory = {
  withDevelopment: function(opts) {
    opts = opts || {};

    return mergeConfigure(developmentConfig);
  },
  withProduction: function(opts) {
    opts = opts || {};
  }
};

module.exports = {
  Factory: factory,
};
