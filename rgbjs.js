let ro=document.querySelector("#rojo");
let ver=document.querySelector("#verde");
let azu=document.querySelector("#azul");
let vro=document.querySelector("#qcol1");
let vver=document.querySelector("#qcol2");
let vazu=document.querySelector("#qcol3");
let co=document.querySelector("#color");
let ca=document.querySelector("#cubito");


ro.oninput=()=>{pro()}
azu.oninput=()=>{pro()}
ver.oninput=()=>{pro()}


const pro=()=>{
    vro.innerHTML=ro.value;
    vver.innerHTML=ver.value;
    vazu.innerHTML=azu.value;
    co.innerHTML= "RGB (" + ro.value + ","+ver.value + "," + azu.value + ")";
    ca.style.backgroundColor= "rgb( "+ ro.value + ","+ver.value + "," + azu.value + " )";



}

