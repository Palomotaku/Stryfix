function Loguear(){
    
    const mysql = require("mysql2");
    const conexion = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "redsocial",
        password: "root123"
    });

    const Email = document.getElementById('Correo').value;
    const Password = document.getElementById('Password').value;

    const mysql2 = 'SELECT * FROM usuario where (Email, Nam, LNAM'
    
    if(Email=="Franco" && Password=="123")
    {

        window.location.href="inicial.html";
    }

    else
    {

        alert("Datos incorrecctos");
    }
}
