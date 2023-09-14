const mysql = require("mysql");
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
    conexion.end();
}
);