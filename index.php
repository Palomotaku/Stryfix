<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stryfix - Login</title>
    <link href="style.css" rel="stylesheet">
    <script src="js/login.js"></script>
</head>
<body>
    <div class="MenuLogin">
        <div class="DecLog">
            <img src="img/logo-stryfix.png" alt="Logo-StryFix">
            <label>StryFix</label>
        </div>
        <div class="Login">
            <h1>Iniciar Sesion</h1>
            <form action="inicial.html">
                <div class="Correo">
                    <input type="text" placeholder="Email" id='Correo' required>
                </div>
                <div class="Password">
                    <input type="text" placeholder="Contraseña" id='Password' required>
                </div>
                <div class="Remember-Forgot">
                    <label><input type="checkbox"> Recordar mi cuenta</label>
                    <a href="remember.html">Olvido su Contraseña?</a>
                </div>
                <div class="Log-In">
                    <input type="submit" value="Iniciar Sesion" onclick="Loguear()">
                </div>
                <div class="Register">
                    No estas registrado? <a href="registrar.html">Registrate</a>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
