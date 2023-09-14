const res = new(require('rest-mssql-nodejs'))({
    user: config.user,
    password: config.password,
    server: config.server,
    db: config.db,
    port: 1433
});