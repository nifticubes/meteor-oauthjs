Package.describe({
  summary: "Serverless OAuth."
});

Package.on_use(function (api) {
  api.add_files('lib/oauth.js', 'client');
});
