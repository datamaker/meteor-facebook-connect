Package.describe({
    name: "datamaker:facebook-connect",
    version: '0.1.5',
    summary: "Facebook Connect package to connect facebook users to existing users.",
    git: 'https://github.com/datamaker/meteor-fb-connect',
    documentation: 'README.md'
});

Package.on_use(function (api) {
    api.use(['accounts-facebook@1.1.0'], ['client', 'server']);

    //add dependency for overriding core
    api.use('oauth-encryption@1.2.0', 'server', {weak: true});
    api.use('oauth@1.1.13');
    api.use('facebook@1.2.10', ['client', 'server']);

    api.add_files(["client.js"], 'client');
    api.add_files(["server.js"], 'server');
});
