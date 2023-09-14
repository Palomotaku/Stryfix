function Loguear(){

    let Email = document.getElementById('Correo').value;
    let Password = document.getElementById('Password').value;
    
    if(Email=="Franco" && Password=="123")
    {

        window.location.href="inicial.html";
    }

    else
    {

        alert("Datos incorrecctos");
    }
}
