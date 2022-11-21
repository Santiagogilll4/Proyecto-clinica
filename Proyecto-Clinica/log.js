function administrador() {
    var password=1234;
    var usuario="admin";
    if (document.form.num.value==password && document.form.txt.value==usuario) {
        window.open("vistaDoctor.html");
    }
    else{
        alert("Error vuelve a intendarlo")
    }
}

function doctor() {
    var password=1369;
    var usuario="Doctora Carrillo";
    if (document.form.num.value==password && document.form.txt.value==usuario) {
        window.open("vistaDoctor.html");
    }
    else{
        alert("Error vuelve a intendarlo")
    }
}

function paciente() {
    var password=2468;
    var usuario="Juan Jimenez";
    if (document.form.num.value==password && document.form.txt.value==usuario) {
        window.open("consultar.html");
    }
    else{
        alert("Error vuelve a intendarlo")
    }
}
