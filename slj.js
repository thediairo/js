let valor=document.querySelector("#valor");
let va=document.querySelector("#value");
let m=document.querySelector("#med");
valor.oninput=()=>{
    let n=parseInt(valor.value);
    va.innerHTML=valor.value;
    if (n>=0 && n<=24){
        va.style.color="blue"
    }
    if (n>=25 && n<=49){
        va.style.color="red"
    }
    if (n>=50 && n<=75){
        va.style.color="green"
    }
    if (n>=76 && n<=100){
        va.style.color="orange"
    }
    let n1=parseInt(valor.value);
    va.innerHTML=n1;
    m.style.width= n1 + "px"
    m.style.height= n1 + "px"
}
