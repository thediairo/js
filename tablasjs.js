var n=1;
var input= document.querySelector("#numero");
var tab=document.querySelector("#tabla");
input.oninput=()=>{
n=parseInt(input.value);
document.querySelector("#num1").innerHTML=n;
}
document.querySelector("#ver").onclick=()=>{
    let table="<table  border='1' width='30%' bgcolor='white'>";
    for(i=1; i<=10; i++){
        table+="<tr><td>"+ n+ "</td><td>x</td><td>"+ i + "</td><td>=</td><td>" + (n*i) + "</td></tr>";
    }
    table+="</table>";
    tab.innerHTML=table;
}
document.querySelector("#borrar").onclick=()=>{
    tab.innerHTML=" ";
}
