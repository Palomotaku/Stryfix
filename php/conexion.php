<?php

    $conexion = mysqli_connect("localhost","root","root123","redsocial");

    if($conexion){
        echo 'CONEXION EXITO MI KING';
    }else{
        echo 'NO SE CONECTO PIPIPI';
    }


?>