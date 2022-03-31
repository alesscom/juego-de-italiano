contador = 0;
function salir(){
    window.location=("index.html");
}
function respuesta_correcta(){
    document.getElementById("respuesta").innerHTML="corretto";
    document.getElementById("siguiente").style.display="block";
}
function respuesta_incorrecta(){
    contador= contador+1;
    document.getElementById("contador").innerHTML= contador;
    localStorage.setItem("contador", contador);
    document.getElementById("respuesta").innerHTML="incorretto";
}
function next(){
    window.location=("juegodos.html");
}
