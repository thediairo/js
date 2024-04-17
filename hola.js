let b=document.querySelector(".bo1");
let b2=document.querySelector(".bo2");
let b3=document.querySelector(".bo3");
let b4=document.querySelector(".bo4");
let bb=document.querySelector(".b");
let i=document.querySelector("#des");
let i2=document.querySelector("#nose");
let i3=document.querySelector("#nomo");
let i4=document.querySelector("#rico");
let n1=document.querySelector("#ima");
b.onclick=()=>{
    n1.style.transform= " rotateY(360deg)";
    n1.innerHTML="<img src='nomo.jpeg'>";

}
b2.onclick=()=>{
    n1.style.transform= " rotateY(0deg)";
    n1.innerHTML="<img src='ri.jpeg'>";
}
b3.onclick=()=>{
    n1.style.transform= " rotateY(360deg)";
    n1.innerHTML="<img src='descargar (1).jpeg'>";
}
b4.onclick=()=>{
    n1.style.transform= " rotateY(0deg)";
    n1.innerHTML="<img src='descargar (2).jpeg'>";
}
bb.onclick=()=>{
    i.style.transform= " rotateY(180deg)";
    i2.style.transform= " rotateY(180deg)";
    i3.style.transform= " rotateY(180deg)";
    i4.style.transform= " rotateY(180deg)";
}