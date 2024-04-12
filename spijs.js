var spinner=document.querySelector("#spinner");
document.querySelector("#boton").onclick=()=>{
    spinner.innerHTML="<img src='Correcto.gif'>";
    setTimeout(()=>{
        spinner.innerHTML="<h1> Hola! </h1>";

    },6000);
}