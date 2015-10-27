Package.describe({
  name: 'giftedfromus:test',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/franksli/giftedfromus.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'readme.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('test.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use(['mike:mocha-package@0.5.7', 'practicalmeteor:chai@2.1.0_1']);
  api.use('giftedfromus:test');
  api.addFiles('test-tests.js');
});
