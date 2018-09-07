Package.describe({
  summary: "JavaScript minifier",
  version: "2.4.0-rc171.8"
});

Npm.depends({
  terser: "3.7.6"
});

Package.onUse(function (api) {
  api.use('babel-compiler');
  api.export(['meteorJsMinify']);
  api.addFiles(['minifier.js'], 'server');
});
