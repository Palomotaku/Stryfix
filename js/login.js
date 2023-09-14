function Loguear(){

    let Username = document.getElementById('Username').value;
    let Password = document.getElementById('Password').value;
    
    if(Username=="Franco" && Password=="123")
    {

        window.location.href="inicial.html";
    }

    else
    {

        alert("Datos incorrecctos");
    }
}
