const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "redsocial",
    password: "root123"
});

conexion.connect(function(err){
    if(err){
        throw err;
    }
    else{
        console.log("CONEXION EXITOSA MI KING");
    }
});