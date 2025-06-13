const { REMOTE_ENTRY_MM } = require('./src/app/shared/constants/prod/constants.ts');
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "mfe1": REMOTE_ENTRY_MM,
  },

  shared: {
    '@angular/core': { singleton: true, strictVersion: true },
    '@angular/common': { singleton: true, strictVersion: true },
    '@angular/router': { singleton: true, strictVersion: true },
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
