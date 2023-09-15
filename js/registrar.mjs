import mysql from 'mysql';
export function Registrar(){
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

    const mysql = 'INSERT INTO usuario (Email, Nam, LNam, Pass, Pho, Ubi) VALUES(?,?,?,?,?,?)';
    const values = [Correo, Nombre, Apellido, Password,'',''];
    
    conexion.query(query, values, (error, fields) => {
        if(error) throw error;
        console.log('Se agrego con exito')
    });

    conexion.end();
}  