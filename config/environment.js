/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hospitalrun',
    environment: environment,
    baseURL: '/',
    locationType: 'hash', // Using hash location type because it is more friendly for offline.
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicy = {
    'connect-src': "'self' www.google-analytics.com",
    'default-src': "'self'",
    'frame-src': "'self'",
    'img-src': "'self' www.google-analytics.com filesystem: data:",
    'script-src': "'self' 'unsafe-inline' 'unsafe-eval' www.google-analytics.com",
    'style-src': "'self' 'unsafe-inline'"
  };
  
  /*
   * Google Analytics Via ember-metrics
   */
  ENV.metricsAdapters = [
    {
      name: 'GoogleAnalytics',
      environments: ['all'],
      config: {
        id: 'UA-62263693-3'
      }
    } 
  ];

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  ENV.i18n = {
    defaultLocale: 'en'
  };

  ENV.manifest = {
    enabled: true,
    appcacheFile: '/manifest.appcache',
    excludePaths: ['index.html', 'tests/index.html', 'robots.txt', 'crossdomain.xml', 'testem.js'],
    showCreateDate: true
  };

  ENV.serviceWorker = {
    enabled: true,
    debug: true,
    excludePaths: ['manifest.appcache'],
    swIncludeFiles: [
      'bower_components/pouchdb/dist/pouchdb.js'
    ]
  };
  if (environment === 'production') {
    ENV.serviceWorker.debug = false;
  }
  
  return ENV;
};

