var n=1;
var input= document.querySelector("#numero");
input.oninput=()=>{
    n=parseInt(input.value);
    document.querySelector("#num1").innerHTML=n;
    }

var spinner=document.querySelector("#tabla");
document.querySelector("#ver").onclick=()=>{
    spinner.innerHTML="<img src='load-32_256.gif'>";
    setTimeout(()=>{
var tab=document.querySelector("#tabla");
    let table="<table  class='table'>";
    for(i=1; i<=10; i++){
        table+="<tr><td>"+ n+ "</td><td>x</td><td>"+ i + "</td><td>=</td><td>" + (n*i) + "</td></tr>";
    }
    table+="</table>";
    tab.innerHTML=table;
    document.querySelector("#borrar").onclick=()=>{
        tab.innerHTML=" ";
    }

    },4000);
}
