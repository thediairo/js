let a=document.querySelector("#A");
let b=document.querySelector("#B");
let c=document.querySelector("#C");
let va=document.querySelector("#qnumA");
let vb=document.querySelector("#qnumB");
let vc=document.querySelector("#qnumC");
let resul1=document.querySelector("#x1");
let resul2=document.querySelector("#x2");
let e=document.querySelector("#ecua");

a.oninput=()=>{pro()}
b.oninput=()=>{pro()}
c.oninput=()=>{pro()}

const pro=()=>{
    va.innerHTML=a.value;
    vb.innerHTML=b.value;
    vc.innerHTML=c.value;
    e.innerHTML="Ecuacion: " +a.value+"x2 (+)"+b.value+"x (+)" + c.value;
    let a1=parseFloat(a.value);
    let b1=parseFloat(b.value);
    let c1=parseFloat(c.value);
    let ra=b1*b1 -4*a1*c1;
    let arriba1= (-b1) + (Math.sqrt(ra));
    let arriba2= (-b1) - (Math.sqrt(ra));
    let x1= arriba1/(2*a1);
    let x2= arriba2/(2*a1);
    if (ra>0){
        resul1.innerHTML= x1.toFixed(2);
        resul2.innerHTML= x2.toFixed(2);
    }
    if (ra==0){
        resul1.innerHTML= x1.toFixed(2);
        resul2.innerHTML= " no esta claro";
    } if(ra<0){
        resul1.innerHTML= " no hay solucion";
        resul2.innerHTML= " no hay solucion";
    }

}