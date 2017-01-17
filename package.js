Package.describe({
    name: "datamaker:facebook-connect",
    version: '0.1.4',
    summary: "Facebook Connect package to connect facebook users to existing users.",
    git: 'https://github.com/datamaker/meteor-fb-connect',
    documentation: 'README.md'
});

Package.on_use(function (api) {
    api.use(['accounts-facebook'], ['client', 'server']);

    //add dependency for overriding core
    api.use('oauth-encryption', 'server', {weak: true});
    api.use('oauth');
    api.use('facebook', ['client', 'server']);

    api.add_files(["client.js"], 'client');
    api.add_files(["server.js"], 'server');
});
