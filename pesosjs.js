var num=document.querySelector("#numero");
var vern=document.querySelector("#qnum");
var bo=document.querySelector("#borrar");
var resul=document.querySelector("#res");
num.oninput=()=>{
    vern.innerHTML=num.value + " mxn";
    let n=parseFloat(num.value);
    let re=n / 16.66;
    resul.textContent=re.toFixed(2) + " dls";
}
bo.onclick=()=>{
    resul.innerHTML=" ";
    numero.value=1;
    vern.innerHTML="1";
}