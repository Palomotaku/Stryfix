function Loguear(){

    const Username = document.getElementById('Username').value;
    const Password = document.getElementById('Password').value;
    
    if(Username=="Franco"
        &&
        Password=="123")
    {
        window.Location="inicial.html";
    }
    else
    {
        alert("Datos incorrecctos");
    }
}
