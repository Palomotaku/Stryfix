const { error } = require("console");
const { result } = require("lodash");
const { Connection } = require("mysql2/typings/mysql/lib/Connection");

function Registrar(){
    
    const mysql = require("mysql2");
    const conexion = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "redsocial",
        password: "root123"
    });

    const Nombre = document.getElementById('r_Name').value;
    const Apellido = document.getElementById('r_LastName').value;
    const Correo = document.getElementById('r_Correo').value;
    const Password = document.getElementById('r_Pass').value;

    const mysql2 = 'SELECT * FROM usuario where (Email, Nam, LNam, Pass, Pho, Ubi) VALUES(?,?,?,?,?,?);
    const values = (Correo, Nombre, Apellido, Password,'','');
    
    Connection.query(mysql2, values, (error, results) => {
        if(error) {
            console.error(error);
        }else{
            console.log(results);
        }
    });

    Connection.end();
}  