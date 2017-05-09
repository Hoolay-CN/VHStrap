/**
 * Created by charlie on 9/22/16.
 */
var path = require('path');
var baseConfig = require('./webpack.config.base');
var merge = require('lodash/merge');

var developmentConfig = require('./webpack.config.development');
var rootPath = path.resolve(__dirname + '/../');

// merge base with custom configures
function mergeConfigure(customConfigure) {

  // Handle module
  var loaders = baseConfig.module;
  var moduleNonLoaders= {};

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
  var allConfigs = merge({}, baseConfig, customConfigure);

  // Fixed module
  allConfigs.module = (moduleNonLoaders.loaders = loaders, moduleNonLoaders);

  return allConfigs;
}

var factory = {
  withDevelopment: function(opts) {
    opts = opts || {};

    return mergeConfigure(developmentConfig);
  },
  withProduction: function(opts) {
    opts = opts || {};
  }
}

module.exports = {
  Factory: factory,
};
