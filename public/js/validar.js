function validar(){
    var nombre, apellido, correo, telefono, regexcorreo;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;


    //Ecpresiones regulares
    regexcorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/


    if(nombre === "" || apellido === "" || correo === "" || telefono === ""){
        alert("Todos los campos son obligatorios")
        return false;
    }
    else if(nombre.length > 30) {
        alert("Nombre muy largo")
        return false;
    }
    else if(apellido.length > 30) {
        alert("apellido muy largo")
        return false;
    }
    else if(correo.length > 100) {
        alert("correo muy largo")
        return false;
    }
    else if(!regexcorreo.test(correo)) {
        alert("correo incorrecto")
        return false;
    }
    else if(telefono.length > 10) {
        alert("telefono muy largo")
        return false;
    }
    else if(isNaN(telefono)) {
        alert("El telefono no es un numero")
        return false;
    }
}