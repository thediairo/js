var num=document.querySelector("#numero");
var vern=document.querySelector("#qnum");
var bo=document.querySelector("#borrar");
var resul=document.querySelector("#res");
num.oninput=()=>{
    vern.innerHTML=num.value;
    let n=parseFloat(num.value);
    let ra=Math.sqrt(n);
    resul.textContent=ra.toFixed(2);
}
bo.onclick=()=>{
    resul.innerHTML=" ";
    numero.value=1;
    vern.innerHTML="1";
}
