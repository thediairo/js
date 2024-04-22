let fi=document.querySelector("#fisi");
let ec=document.querySelector("#eco");
let ca=document.querySelector("#cal");
let po=document.querySelector("#programa");
let ing=document.querySelector("#ingles");
let vec=document.querySelector("#qcal1");
let ving=document.querySelector("#qcal2");
let vfi=document.querySelector("#qcal3");
let vca=document.querySelector("#qcal4")
let vpo=document.querySelector("#qcal5");

fi.oninput=()=>{pro()}
ec.oninput=()=>{pro()}
ca.oninput=()=>{pro()}
po.oninput=()=>{pro()}
ing.oninput=()=>{pro()}


const pro=()=>{
    vec.innerHTML= ec.value;
    ving.innerHTML= ing.value;
    vfi.innerHTML= fi.value;
    vca.innerHTML= ca.value;
    vpo.innerHTML= po.value;
    let e= parseFloat (ec.value);
    let i= parseFloat(ing.value);
    let f= parseFloat(fi.value);
    let c= parseFloat(ca.value);
    let p= parseFloat(po.value);
    let sum= e + i + f+ c + p;
    let promedio=sum/5;


}